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

/**
 * Fires a PageView for a client-side route change.
 *
 * The Meta pixel snippet and gtag config both fire their initial page view on
 * hard load only, so SPA navigations (academy index <-> course pages, language
 * switches) would otherwise be invisible to both providers. Callers are
 * responsible for skipping the initial route.
 */
export function trackPageView(pathname?: string) {
  try {
    if (typeof window === "undefined") return;
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname ?? window.location.pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  } catch {
    /* analytics must never break the UI */
  }
}

/**
 * Meta `ViewContent` + the matching GA4 catalog event.
 *
 * `contentId`/`value` are set for a single course (GA4 `view_item`); a list
 * view such as the academy index omits them and maps to `view_item_list`.
 */
export function trackViewContent(params: {
  contentName: string;
  contentId?: string;
  contentType?: string;
  value?: number;
}) {
  const { contentName, contentId, contentType, value } = params;
  try {
    if (typeof window === "undefined") return;
    if (typeof window.fbq === "function") {
      const fbParams: Record<string, unknown> = { content_name: contentName };
      if (contentId) fbParams.content_ids = [contentId];
      if (contentType) fbParams.content_type = contentType;
      if (typeof value === "number") {
        fbParams.value = value;
        fbParams.currency = "MAD";
      }
      window.fbq("track", "ViewContent", fbParams);
    }
    if (typeof window.gtag === "function") {
      const isProduct = Boolean(contentId) && typeof value === "number";
      window.gtag(
        "event",
        isProduct ? "view_item" : "view_item_list",
        isProduct
          ? {
              currency: "MAD",
              value,
              items: [
                { item_id: contentId, item_name: contentName, price: value },
              ],
            }
          : { item_list_name: contentName }
      );
    }
  } catch {
    /* analytics must never break the UI */
  }
}

/**
 * Meta `InitiateCheckout` + GA4 `begin_checkout` when a visitor commits to a
 * billing plan. `contentId` is the plan key (`monthly`/`term`), `value` the
 * plan's price in MAD, `numItems` the live sessions it covers.
 */
export function trackInitiateCheckout(params: {
  contentName: string;
  contentId: string;
  value: number;
  numItems: number;
}) {
  const { contentName, contentId, value, numItems } = params;
  try {
    if (typeof window === "undefined") return;
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout", {
        content_type: "product",
        content_ids: [contentId],
        content_name: contentName,
        num_items: numItems,
        value,
        currency: "MAD",
      });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "begin_checkout", {
        currency: "MAD",
        value,
        num_items: numItems,
        items: [
          {
            item_id: contentId,
            item_name: contentName,
            price: value,
            quantity: 1,
          },
        ],
      });
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