/**
 * Mark Bissu landing events as Key Events (conversions) in GA4 via Admin API.
 *
 * Reuses GA_ADMIN_REFRESH_TOKEN_CLAURA from secrets.env.
 * Property: 536762495 (Bissu Abogados).
 *
 * Usage:
 *   npx tsx scripts/mark-key-events.ts
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const SECRETS_PATH = path.join(os.homedir(), "Projects/tools/secrets.env");
const PROPERTY_ID = "536762495";

const KEY_EVENTS = [
  "lead_submit",
  "whatsapp_click",
  "phone_click",
  "email_click",
];

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

async function ga<T>(token: string, pathname: string, init?: RequestInit, base = "v1beta"): Promise<T> {
  const r = await fetch(`https://analyticsadmin.googleapis.com/${base}${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const text = await r.text();
  if (!r.ok) throw new Error(`GA Admin ${r.status} ${pathname}: ${text}`);
  return text ? (JSON.parse(text) as T) : ({} as T);
}

type KeyEvent = { name: string; eventName: string; countingMethod?: string; createTime?: string };

async function main() {
  const env = loadEnv();
  const accessToken = await refreshAccessToken(
    env.GA_ADMIN_REFRESH_TOKEN_CLAURA,
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
  );

  const existing = await ga<{ keyEvents?: KeyEvent[] }>(
    accessToken,
    `/properties/${PROPERTY_ID}/keyEvents`,
  );
  const present = new Set((existing.keyEvents ?? []).map((k) => k.eventName));
  console.log(`Key events existentes: ${[...present].join(", ") || "(ninguno)"}`);

  for (const eventName of KEY_EVENTS) {
    if (present.has(eventName)) {
      console.log(`✔︎  ${eventName} ya marcado`);
      continue;
    }
    const created = await ga<KeyEvent>(
      accessToken,
      `/properties/${PROPERTY_ID}/keyEvents`,
      {
        method: "POST",
        body: JSON.stringify({
          eventName,
          countingMethod: "ONCE_PER_EVENT",
        }),
      },
    );
    console.log(`+   creado ${eventName} → ${created.name}`);
  }

  console.log("\nListo. Los eventos van a aparecer como conversiones en GA4 una vez que disparen al menos una vez.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
