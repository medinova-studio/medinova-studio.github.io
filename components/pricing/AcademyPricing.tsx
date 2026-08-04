"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { CheckIcon, SectionHeader, academyPackages } from "./pricing-data";

export default function AcademyPricing({ hideHeader = false }: { hideHeader?: boolean }) {
  const { t } = useLang();

  return (
    <section id="academy" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-cyan/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge={t.pillars.academy}
            title={t.pillars.academyTitle}
            subtitle={t.pillars.academySubtitle}
          />
        )}

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {academyPackages.map((pkg) => (
            <div
              key={pkg.name}
              className="group relative rounded-2xl border border-white/10 bg-ink-800/60 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/10"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-lg font-bold text-white leading-snug">{pkg.name}</h3>
                <span className="px-2.5 py-1 rounded-md bg-cyan/10 border border-cyan/20 text-cyan text-[11px] font-semibold whitespace-nowrap">
                  {pkg.age}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{pkg.desc}</p>

              <div className="pb-5 border-b border-white/5">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-sm text-slate-400 font-medium">
                    DHS {t.pillars.perMonth}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5">{pkg.schedule}</p>
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
                {t.pillars.getStarted}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
