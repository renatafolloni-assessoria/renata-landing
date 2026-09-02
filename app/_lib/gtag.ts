declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_LEAD_CONVERSION = "AW-18423578950/QKK_CI3RjOwcEMaChtFE";

export function reportWhatsAppConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: WHATSAPP_LEAD_CONVERSION,
    value: 1.0,
    currency: "BRL",
  });
}
