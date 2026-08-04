"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { CheckIcon, SectionHeader, agencyPackages } from "./pricing-data";

export default function AgencyPricing({ hideHeader = false }: { hideHeader?: boolean }) {
  const { t } = useLang();

  return (
    <section id="offers" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge={t.pillars.agency}
            title={t.pillars.agencyTitle}
            subtitle={t.pillars.agencySubtitle}
          />
        )}

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {agencyPackages.map((pkg) => {
            const isHl = pkg.highlight;
            const badgeText = pkg.badge === "recommended" ? t.pillars.recommended : null;
            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isHl
                    ? "border-cyan/40 bg-ink-800/80 animate-pulse-glow lg:scale-[1.04] lg:-mt-2"
                    : "border-white/10 bg-ink-800/60 hover:border-white/20"
                }`}
              >
                <div
                  className={`h-1 w-full ${
                    isHl
                      ? "bg-gradient-to-r from-cyan via-violet to-cyan"
                      : "bg-gradient-to-r from-white/10 to-white/5"
                  }`}
                />
                <div className="p-6 lg:p-8">
                  {badgeText && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-[11px] font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                      {badgeText}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  {!badgeText && <div className="h-7" />}

                  <div className="mt-5 pb-5 border-b border-white/5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                      {t.pillars.setup}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-3xl font-bold text-white">{pkg.setup}</span>
                      <span className="text-sm text-slate-400 font-medium">{t.pillars.ht}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5">
                      {t.pillars.includes} {pkg.includes}
                    </p>
                  </div>

                  <div className="mt-5 pb-5 border-b border-white/5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                      {t.pillars.monthly}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`font-display text-3xl font-bold ${isHl ? "gradient-text" : "text-white"}`}
                      >
                        {pkg.retainer}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">
                        {t.pillars.ht} {t.pillars.perMonth}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon highlight={isHl} />
                        <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className={`mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                      isHl
                        ? "bg-cyan text-ink-950 hover:bg-cyan/90 shadow-lg shadow-cyan/20"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    {t.pillars.getStarted}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notes */}
        <div className="mt-8 p-5 rounded-xl bg-ink-800/40 border border-white/5 max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-3">
            {t.pillars.notes}
          </div>
          <ul className="space-y-2">
            {[t.pillars.note1, t.pillars.note2, t.pillars.note3].map((note) => (
              <li
                key={note}
                className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed"
              >
                <span className="text-slate-600 mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
