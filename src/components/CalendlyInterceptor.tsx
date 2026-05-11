"use client";

import { useEffect } from "react";
import { events } from "@/lib/analytics";
import { openCalendlyModal } from "@/lib/calendly-modal";

/**
 * Convierte cualquier <a href="https://calendly.com/...">  en un modal popup,
 * sin tocar los componentes existentes. Monta una sola vez por surface
 * (home, member page, area page).
 *
 * Bonus: escucha `calendly.event_scheduled` via postMessage del iframe del
 * widget y dispara `lead_submit` en GA4 — atribución client-side completa.
 * (El webhook server-side de Calendly → Twenty sigue funcionando en paralelo.)
 */
export default function CalendlyInterceptor() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Respetar modifier-clicks (cmd/ctrl/shift/middle) — abren tab nueva
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.href;
      if (!href.includes("calendly.com")) return;
      e.preventDefault();
      openCalendlyModal(href).catch(() => {
        window.open(href, "_blank", "noopener,noreferrer");
      });
    };

    const onMessage = (e: MessageEvent) => {
      const origin = typeof e.origin === "string" ? e.origin : "";
      if (!origin.includes("calendly.com")) return;
      const data = e.data as { event?: string } | null;
      if (!data?.event) return;
      if (data.event === "calendly.event_scheduled") {
        events.formSubmit("contacta");
      }
    };

    document.addEventListener("click", onClick);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return null;
}
