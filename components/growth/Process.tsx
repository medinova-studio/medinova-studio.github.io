"use client";

import { useLang } from "@/lib/LanguageContext";
import SectionHeader from "@/components/growth/SectionHeader";

export default function Process() {
  const { t } = useLang();
  const { process } = t.agency;

  return (
    <section
      id="growth-framework"
      className="relative scroll-mt-28 py-20 sm:py-28 border-t border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          badge={process.badge}
          title={process.title}
          subtitle={process.subtitle}
        />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          <div className="pointer-events-none absolute top-7 left-[12%] right-[12%] hidden lg:block h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />

          {process.steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex flex-col rounded-xl border border-hairline bg-surface-1/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-2"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 border border-hairline font-display text-sm font-semibold text-primary transition-colors duration-300 group-hover:border-primary/40 z-10">
                  {i + 1}
                </span>
                <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1 text-[11px] font-medium text-primary">
                  {step.window}
                </span>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-tertiary">
                {step.phase}
              </span>
              <h3 className="mt-1.5 font-display text-base sm:text-lg font-semibold text-ink leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-subtle leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
