"use client";

import { useLang } from "@/lib/LanguageContext";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function HomeHero() {
  const { t } = useLang();
  const { hero } = t.hub;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/zellige.svg')] bg-[size:280px] opacity-70 [mask-image:radial-gradient(ellipse_90%_85%_at_50%_0%,#000_15%,transparent_78%)]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-[1.08] tracking-tight">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-ink-subtle leading-relaxed max-w-2xl">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/#solutions">{hero.ctaPrimary}</Button>
              <Button href="/#contact" variant="secondary">
                {hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />
    </section>
  );
}