"use client";

import { useLang } from "@/lib/LanguageContext";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              {t.hero.badge}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-[1.08] tracking-tight">
              {t.hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-ink-subtle leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/#portfolio">{t.hero.ctaPlay}</Button>
              <Button href="/#contact" variant="secondary">
                {t.hero.ctaHire}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />
    </section>
  );
}
