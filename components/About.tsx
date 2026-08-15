"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const { t } = useLang();
  const { about } = t;

  return (
    <section
      id="about-studio"
      className="relative py-20 sm:py-28 lg:py-32 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div className="text-center lg:text-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-6">
                {about.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-5 tracking-tight text-balance">
                {about.title}
              </h2>
              <p className="text-sm sm:text-base text-ink-subtle leading-relaxed max-w-xl mx-auto lg:mx-0">
                {about.subtitle}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-hairline bg-surface-1 p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">
                {about.introTitle}
              </h3>
              <p className="text-sm sm:text-base text-ink-subtle leading-relaxed">
                {about.intro}
              </p>

              <div className="mt-8 space-y-4">
                {about.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-lg border border-hairline bg-surface-2 p-4"
                  >
                    <p className="text-sm font-semibold text-ink mb-1">
                      {pillar.title}
                    </p>
                    <p className="text-sm text-ink-subtle leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}