"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLang } from "@/lib/LanguageContext";
import { academyWhatsAppUrl } from "@/lib/academy";
import { trackEvent, trackLeadOnce } from "@/lib/analytics";

const SCROLL_THRESHOLD = 500;

export default function WhatsAppWidget() {
  const { t } = useLang();
  const { whatsapp } = t.academy;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={academyWhatsAppUrl(whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.aria}
      onClick={() => {
        trackEvent("whatsapp_click", { source: "widget" });
        trackLeadOnce({ source: "widget" });
      }}
      className={`group fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 flex items-center gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span className="hidden sm:flex items-center gap-2 rounded-md bg-surface-1/90 border border-hairline px-4 py-3 shadow-xl backdrop-blur-xl text-xs font-semibold text-ink">
        <span className="w-1.5 h-1.5 rounded-full bg-whatsapp animate-pulse" />
        {whatsapp.online}
      </span>
      <span className="w-14 h-14 rounded-full bg-whatsapp shadow-lg shadow-whatsapp/40 flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95">
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </span>
    </a>
  );
}
