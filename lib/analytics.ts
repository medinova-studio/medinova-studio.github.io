type AnalyticsEvent = string;

const LEAD_FLAG_KEY = "medinova-fb-lead-sent";
const LEAD_EVENT_ID_KEY = "medinova-fb-lead-event-id";

function getSessionEventId(): string {
  if (typeof window === "undefined") return "";
  try {
    let id = window.sessionStorage.getItem(LEAD_EVENT_ID_KEY);
    if (!id) {
      id = `lead_${Date.now().toString(36)}_${Math.random()
        .toString(36)
        .slice(2, 10)}`;
      window.sessionStorage.setItem(LEAD_EVENT_ID_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}

/**
 * Fire a conversion event to Google Analytics (gtag) and Meta Pixel (fbq)
 * when the respective scripts are loaded. Safe to call anywhere — no-ops
 * if a provider is not present on the page.
 */
export function trackEvent(name: AnalyticsEvent, params?: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params ?? {});
    }
  } catch {
    /* analytics must never break the UI */
  }
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("trackCustom", name, params ?? {});
    }
  } catch {
    /* analytics must never break the UI */
  }
}

/**
 * Fire a Facebook standard Lead event + a GA4 `lead` event at most ONCE per
 * browser session. Subsequent WhatsApp/contact clicks in the same session are
 * tracked as custom `whatsapp_click` events but do not emit another Lead,
 * keeping Facebook Ads conversion counts and ad optimization accurate.
 */
export function trackLeadOnce(params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    if (window.sessionStorage.getItem(LEAD_FLAG_KEY)) return;
    window.sessionStorage.setItem(LEAD_FLAG_KEY, "1");
    const eventID = getSessionEventId();
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", { eventID, ...(params ?? {}) });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "lead", params ?? {});
    }
  } catch {
    /* analytics must never break the UI */
  }
}

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    fbq?: (command: string, ...args: unknown[]) => void;
  }
}