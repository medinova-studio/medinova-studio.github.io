"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            {t.hero.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-[1.08] tracking-tight">
            {t.hero.headline}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ink-subtle leading-relaxed max-w-2xl">
            {t.hero.subheadline}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white font-medium text-sm hover:bg-primary-hover active:scale-[0.98] transition-all duration-200"
            >
              {t.hero.ctaPlay}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-surface-1 text-ink border border-hairline font-medium text-sm hover:bg-surface-2 hover:border-hairline-strong active:scale-[0.98] transition-all duration-200"
            >
              {t.hero.ctaHire}
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />
    </section>
  );
}
