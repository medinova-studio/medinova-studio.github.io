"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

const ACCENTS: Record<string, { icon: string; ring: string; glow: string }> = {
  agency: {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    ring: "group-hover:border-cyan/40",
    glow: "group-hover:shadow-cyan/10",
  },
  games: {
    icon: "M6 12h4m-2-2v4m6-3h.01M18 11h.01M4 8h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z",
    ring: "group-hover:border-violet/40",
    glow: "group-hover:shadow-violet/10",
  },
  academy: {
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.42",
    ring: "group-hover:border-cyan/40",
    glow: "group-hover:shadow-cyan/10",
  },
};

export default function ServiceCards() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32 scroll-mt-16">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            {t.home.servicesBadge}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
            {t.home.servicesTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto text-pretty">
            {t.home.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {t.home.cards.map((card) => {
            const accent = ACCENTS[card.key];
            return (
              <Link
                key={card.key}
                href={card.href}
                className={`group relative flex flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent.ring} ${accent.glow}`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-5 h-5 text-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={accent.icon} />
                  </svg>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{card.desc}</p>

                <ul className="space-y-2.5 mb-6">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan group-hover:gap-2.5 transition-all duration-200">
                  {card.cta}
                  <svg
                    className="w-4 h-4 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
