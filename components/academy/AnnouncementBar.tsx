"use client";

import { useLang } from "@/lib/LanguageContext";

export default function AnnouncementBar() {
  const { t } = useLang();
  return (
    <div className="sticky top-14 z-40 bg-ink-800/70 backdrop-blur-xl border-b border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-center">
        <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
          {t.academy.announcement}
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary text-white text-[11px] font-semibold hover:bg-primary-hover active:scale-[0.98] transition-all whitespace-nowrap"
        >
          {t.academy.announcementCta}
        </a>
      </div>
    </div>
  );
}
