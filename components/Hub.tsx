"use client";

import { Gamepad2, TrendingUp, GraduationCap } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const HUBS = [
  {
    key: "gameDev",
    href: "/game-development",
    icon: Gamepad2,
  },
  {
    key: "agency",
    href: "/agency",
    icon: TrendingUp,
  },
  {
    key: "academy",
    href: "/academy",
    icon: GraduationCap,
  },
] as const;

export default function Hub() {
  const { t } = useLang();

  return (
    <section id="solutions" className="relative py-20 sm:py-28 lg:py-32 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
              {t.hub.section.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4 tracking-tight text-balance">
              {t.hub.section.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-subtle max-w-xl mx-auto">
              {t.hub.section.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {HUBS.map((h, i) => {
            const Icon = h.icon;
            const data = t.hub[h.key];
            return (
              <Reveal key={h.key} delay={i * 0.1} className="flex">
                <article className="group relative flex flex-col rounded-lg border border-hairline bg-surface-1 p-6 lg:p-8 transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2 w-full">
                  <span className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-surface-3 border border-hairline text-ink-muted transition-colors duration-200 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary mb-6">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-lg font-medium text-ink mb-3 leading-snug">
                    {data.title}
                  </h3>
                  <p className="text-sm text-ink-subtle leading-relaxed flex-1">
                    {data.desc}
                  </p>
                  <Button
                    href={h.href}
                    variant="secondary"
                    className="mt-6 w-full"
                  >
                    {t.hub.section.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}