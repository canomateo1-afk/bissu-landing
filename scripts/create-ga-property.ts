/**
 * Create a GA4 property + web data stream for Bissu Abogados
 * via Google Analytics Admin API.
 *
 * Reuses GOOGLE_CLIENT_ID/SECRET (ad-loop OAuth client) and the
 * GA_ADMIN_REFRESH_TOKEN_CLAURA refresh token from ~/Projects/tools/secrets.env.
 *
 * Usage:
 *   npx tsx scripts/create-ga-property.ts
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const SECRETS_PATH = path.join(os.homedir(), "Projects/tools/secrets.env");

const PROPERTY_DISPLAY_NAME = "Bissu Abogados";
const PROPERTY_TIME_ZONE = "America/Mexico_City";
const PROPERTY_CURRENCY = "MXN";
const STREAM_DOMAIN = "bissuabogados.com";
const STREAM_DISPLAY_NAME = "bissuabogados.com";
const INDUSTRY_CATEGORY = "LAW_AND_GOVERNMENT";

function loadEnv(): Record<string, string> {
  const raw = fs.readFileSync(SECRETS_PATH, "utf8");
  const env: Record<string, string> = {};
  for (const line of raw.split("\n")) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (!m) continue;
    let val = m[2];
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[m[1]] = val;
  }
  return env;
}

async function refreshAccessToken(refreshToken: string, clientId: string, clientSecret: string) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
    }),
  });
  if (!r.ok) throw new Error(`refresh ${r.status}: ${await r.text()}`);
  const j = (await r.json()) as { access_token: string };
  return j.access_token;
}

async function ga<T>(token: string, pathname: string, init?: RequestInit): Promise<T> {
  const r = await fetch(`https://analyticsadmin.googleapis.com/v1beta${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const text = await r.text();
  if (!r.ok) throw new Error(`GA Admin ${r.status} ${pathname}: ${text}`);
  return JSON.parse(text) as T;
}

async function main() {
  const env = loadEnv();
  const clientId = env.GOOGLE_CLIENT_ID;
  const clientSecret = env.GOOGLE_CLIENT_SECRET;
  const refreshToken = env.GA_ADMIN_REFRESH_TOKEN_CLAURA;
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Faltan creds en secrets.env (GOOGLE_CLIENT_ID/SECRET, GA_ADMIN_REFRESH_TOKEN_CLAURA)");
  }

  const accessToken = await refreshAccessToken(refreshToken, clientId, clientSecret);

  const summaries = await ga<{
    accountSummaries?: { account: string; displayName: string; propertySummaries?: { property: string; displayName: string }[] }[];
  }>(accessToken, "/accountSummaries");

  const accounts = summaries.accountSummaries ?? [];
  console.log("\nCuentas GA disponibles:");
  accounts.forEach((a, i) => {
    console.log(`  [${i}] ${a.displayName} (${a.account})`);
    (a.propertySummaries ?? []).forEach((p) => console.log(`        - ${p.displayName} (${p.property})`));
  });

  const existing = accounts
    .flatMap((a) => (a.propertySummaries ?? []).map((p) => ({ account: a.account, ...p })))
    .find((p) => p.displayName.toLowerCase().includes("bissu"));
  if (existing) {
    console.log(`\nYa existe una property con "bissu" en el nombre: ${existing.displayName} (${existing.property}). Saliendo sin crear duplicado.`);
    const streams = await ga<{ dataStreams?: { name: string; type: string; webStreamData?: { measurementId?: string; defaultUri?: string } }[] }>(
      accessToken,
      `/${existing.property}/dataStreams`
    );
    console.log("Data streams:");
    (streams.dataStreams ?? []).forEach((s) => console.log(`  - ${s.name} ${s.type} ${JSON.stringify(s.webStreamData ?? {})}`));
    return;
  }

  if (accounts.length === 0) throw new Error("No hay cuentas GA en este token. Creá la account en analytics.google.com.");

  const account = accounts[0].account;
  console.log(`\nUsando cuenta ${accounts[0].displayName} (${account})`);

  console.log(`\nCreando property "${PROPERTY_DISPLAY_NAME}"...`);
  const property = await ga<{ name: string }>(accessToken, "/properties", {
    method: "POST",
    body: JSON.stringify({
      parent: account,
      displayName: PROPERTY_DISPLAY_NAME,
      timeZone: PROPERTY_TIME_ZONE,
      currencyCode: PROPERTY_CURRENCY,
      industryCategory: INDUSTRY_CATEGORY,
    }),
  });
  console.log(`Property: ${property.name}`);

  console.log(`\nCreando web data stream para ${STREAM_DOMAIN}...`);
  const stream = await ga<{
    name: string;
    webStreamData?: { measurementId?: string; defaultUri?: string };
  }>(accessToken, `/${property.name}/dataStreams`, {
    method: "POST",
    body: JSON.stringify({
      type: "WEB_DATA_STREAM",
      displayName: STREAM_DISPLAY_NAME,
      webStreamData: { defaultUri: `https://${STREAM_DOMAIN}` },
    }),
  });

  const measurementId = stream.webStreamData?.measurementId;
  console.log(`\nListo.`);
  console.log(`Property:       ${property.name}`);
  console.log(`Stream:         ${stream.name}`);
  console.log(`Measurement ID: ${measurementId}`);
  console.log(`\nAgregar a .env.local de bissu-landing:`);
  console.log(`NEXT_PUBLIC_GA_ID="${measurementId}"`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
