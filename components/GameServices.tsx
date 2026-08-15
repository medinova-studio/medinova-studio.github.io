"use client";

import { useLang } from "@/lib/LanguageContext";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function GameServices() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
              {t.services.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4 tracking-tight text-balance">
              {t.services.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-subtle max-w-xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {t.services.cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1} className="flex">
              <article className="group relative flex flex-col rounded-lg border border-hairline bg-surface-1 p-6 lg:p-8 transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2 w-full">
                <h3 className="font-display text-lg font-medium text-ink mb-4 leading-snug">
                  {card.title}
                </h3>

                {card.enterprise ? (
                  <div className="inline-flex self-start px-3 py-1.5 rounded-md bg-surface-2 border border-hairline text-ink-muted text-sm font-medium mb-5">
                    {t.services.enterpriseQuote}
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5 mb-5">
                    <span className="text-xs text-ink-tertiary uppercase tracking-wider">
                      {t.services.from}
                    </span>
                    <span className="font-display text-3xl font-semibold text-ink tracking-tight">
                      {card.price}
                    </span>
                    <span className="text-sm text-ink-subtle font-medium">
                      {t.services.ht}
                    </span>
                  </div>
                )}

                <p className="text-sm text-ink-subtle leading-relaxed flex-1">
                  {card.description}
                </p>

                <Button
                  href="/#contact"
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  {t.services.cta}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
