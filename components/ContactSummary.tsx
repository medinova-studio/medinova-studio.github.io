"use client";

import { useLang } from "@/lib/LanguageContext";

export default function ContactSummary() {
  const { t } = useLang();

  return (
    <section className="relative py-12 sm:py-16">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan/20 bg-ink-800/70 p-8 sm:p-10 lg:p-12">
          <div className="absolute -top-16 -right-10 w-64 h-64 bg-cyan/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
                {t.home.contactSummaryBadge}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">
                {t.home.contactSummaryTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-pretty">
                {t.home.contactSummaryText}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-cyan text-ink-950 font-semibold text-sm hover:bg-cyan/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-cyan/20"
              >
                {t.home.contactSummaryCta}
                <svg
                  className="w-4 h-4 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.home.responseTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
