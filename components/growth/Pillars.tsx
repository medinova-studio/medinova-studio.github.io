"use client";

import { Clapperboard, Megaphone, Bot, Workflow } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import SectionHeader from "@/components/growth/SectionHeader";

const pillarIcons = [Clapperboard, Megaphone, Bot, Workflow];

export default function Pillars() {
  const { t } = useLang();
  const { pillars } = t.agency;

  return (
    <section
      id="solutions"
      className="relative scroll-mt-28 py-20 sm:py-28 border-t border-hairline"
    >
      <div className="pointer-events-none absolute top-1/3 left-0 h-[360px] w-[360px] rounded-full bg-primary/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          badge={pillars.badge}
          title={pillars.title}
          subtitle={pillars.subtitle}
        />

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {pillars.cards.map((card, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-xl border border-hairline bg-surface-1/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-2"
              >
                <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-primary transition-colors duration-300 group-hover:border-primary/40">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-ink-subtle leading-relaxed">
                  {card.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}