"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/lib/LanguageContext";
import { fill, formatPrice, formatSessionLength, PRICING } from "@/lib/pricing";

/** Past the hero, the pricing pitch is on screen and the bar earns its space. */
const SCROLL_THRESHOLD = 600;

/**
 * Bottom conversion bar for the academy index and course pages. Shows the
 * price anchor once the visitor scrolls past the hero, and gets out of the way
 * whenever the `#cta` lead form it points at is already visible.
 */
export default function StickyCta() {
  const { t, lang } = useLang();
  const { pricing, leadForm } = t.academy;
  const [pastHero, setPastHero] = useState(false);
  const [ctaOnScreen, setCtaOnScreen] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const cta = document.getElementById("cta");
    const observer = cta
      ? new IntersectionObserver(
          (entries) => setCtaOnScreen(entries.some((e) => e.isIntersecting)),
          { threshold: 0.1 }
        )
      : null;
    if (cta && observer) observer.observe(cta);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  if (!pastHero || ctaOnScreen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-surface-1/95 shadow-[0_-8px_30px_rgba(20,21,26,0.10)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <p className="text-xs leading-snug text-ink-muted sm:text-sm">
          {fill(pricing.stickyNote, {
            price: formatPrice(PRICING.monthly, lang),
            length: formatSessionLength(lang),
          })}
        </p>
        <a
          href="#cta"
          onClick={() => trackEvent("sticky_cta_click", { lang })}
          className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(36,85,230,0.28)] transition-colors hover:bg-primary-hover sm:w-auto"
        >
          {leadForm.cta}
        </a>
      </div>
    </div>
  );
}
