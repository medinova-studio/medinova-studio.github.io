"use client";

import { Award, Check, GraduationCap, Hammer, ListChecks } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const stepIcons = [GraduationCap, ListChecks, Hammer, Award];

export default function Teaching() {
  const { t } = useLang();
  const { teaching } = t.academy;

  return (
    <section
      id="teaching"
      className="relative py-16 sm:py-20 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {teaching.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {teaching.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-10">
          {teaching.steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <div
                key={step.title}
                className="relative pt-8 border-t-2 border-hairline-strong"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-soft border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="pt-1 font-display text-4xl font-extrabold text-hairline-tertiary/60 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-base text-ink-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-hairline bg-surface-1 p-7 sm:p-9 text-center transition-colors duration-300 hover:border-hairline-strong">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary mb-5">
            {teaching.modelTitle}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {teaching.model.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-primary-soft border border-primary/20 text-sm font-medium text-primary"
              >
                <Check className="w-4 h-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}