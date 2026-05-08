declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Params = Record<string, string | number | boolean | undefined>;

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", event, params);
}

export const events = {
  whatsappClick: (location: string) =>
    track("whatsapp_click", { location, link_text: "WhatsApp" }),
  phoneClick: (location: string, number: string) =>
    track("phone_click", { location, phone: number }),
  emailClick: (location: string) =>
    track("email_click", { location }),
  ctaClick: (location: string, label: string) =>
    track("cta_click", { location, label }),
  formSubmit: (motivo: "contacta" | "trabaja") =>
    track(motivo === "contacta" ? "lead_submit" : "career_submit", { motivo }),
  socialClick: (platform: string, location: string) =>
    track("social_click", { platform, location }),
  tabSwitch: (motivo: "contacta" | "trabaja") =>
    track("contact_tab_switch", { motivo }),
};
