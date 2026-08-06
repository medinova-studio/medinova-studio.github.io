"use client";

import { useLang } from "@/lib/LanguageContext";

export default function AgencyPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.agency.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mb-12">
            {t.agency.subtitle}
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {t.agency.tiers.map((tier, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-ink-800/50 p-8 transition-all duration-300 hover:bg-ink-800/70"
              >
                <h2 className="font-display text-2xl sm:text-3xl lg:text-xl font-bold text-white mb-4">
                  {tier.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-400 mb-4">
                  {tier.price}
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-cyan w-3 h-3 rounded-lg bg-cyan/20 flex items-center justify-center">
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/#contact`}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {t.agency.getStarted}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}