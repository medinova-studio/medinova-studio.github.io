"use client";

import { useLang } from "@/lib/LanguageContext";

export default function AnnouncementBar() {
  const { t } = useLang();
  return (
    <div className="bg-primary-soft border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-5 text-center">
        <p className="text-xs sm:text-[13px] font-medium text-primary leading-relaxed">
          {t.academy.announcement}
        </p>
        <a
          href="#courses"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary text-white text-[11px] font-semibold hover:bg-primary-hover active:scale-[0.98] transition-all whitespace-nowrap"
        >
          {t.academy.announcementCta}
        </a>
      </div>
    </div>
  );
}
