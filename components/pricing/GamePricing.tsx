"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { CheckIcon, SectionHeader, gamePackages } from "./pricing-data";

export default function GamePricing({ hideHeader = false }: { hideHeader?: boolean }) {
  const { t } = useLang();

  return (
    <section id="games" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-violet/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge={t.pillars.games}
            title={t.pillars.gamesTitle}
            subtitle={t.pillars.gamesSubtitle}
          />
        )}

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {gamePackages.map((pkg) => (
            <div
              key={pkg.name}
              className="group relative rounded-2xl border border-white/10 bg-ink-800/60 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-lg hover:shadow-violet/10"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                {pkg.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{pkg.desc}</p>

              <div className="pb-5 border-b border-white/5">
                {pkg.enterprise ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet/10 border border-violet/20 text-violet text-sm font-semibold">
                    {t.pillars.enterpriseQuote}
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500">
                      {t.pillars.from}
                    </span>
                    <span className="font-display text-3xl font-bold text-white">{pkg.price}</span>
                    <span className="text-sm text-slate-400 font-medium">{t.pillars.ht}</span>
                  </div>
                )}
              </div>

              <ul className="mt-5 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon highlight={false} />
                    <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98]"
              >
                {pkg.enterprise ? t.pillars.requestQuote : t.pillars.getStarted}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
