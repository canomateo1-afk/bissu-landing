"use client";

/**
 * Lazy loader del widget de Calendly + helper para abrir el popup modal.
 *
 * El script (~150kb) se carga la primera vez que el usuario hace click
 * en un CTA de agendado — no en el initial bundle ni en el <head>.
 * Próximas aperturas reusan el script ya cargado.
 *
 * CSP ya tiene `script-src https://assets.calendly.com` y
 * `style-src https://assets.calendly.com` whitelisted en next.config.mjs.
 */

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

let loaded = false;
let loading: Promise<void> | null = null;

function loadWidget(): Promise<void> {
  if (loaded) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise<void>((resolve, reject) => {
    // CSS
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    // JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      loaded = true;
      resolve();
    };
    script.onerror = () => {
      loading = null;
      reject(new Error("calendly widget failed to load"));
    };
    document.head.appendChild(script);
  });

  return loading;
}

export async function openCalendlyModal(url: string): Promise<void> {
  await loadWidget();
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
  } else {
    // Fallback: nueva pestaña si el widget no inicializó
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
