type AnalyticsEvent = string;

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
 * Track a Facebook standard Lead event (used for ad conversion optimization).
 */
export function trackLead(params?: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", params ?? {});
    }
  } catch {
    /* analytics must never break the UI */
  }
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      ...args: unknown[]
    ) => void;
    fbq?: (command: string, ...args: unknown[]) => void;
  }
}