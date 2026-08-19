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
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {teaching.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {teaching.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {teaching.steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <div
                key={step.title}
                className="card-accent group relative rounded-lg border border-hairline bg-surface-1 p-6 transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-surface-2 border border-hairline flex items-center justify-center transition-colors group-hover:border-hairline-strong">
                    <Icon className="w-5 h-5 text-ink-muted" />
                  </div>
                  <span className="font-display text-2xl font-bold text-hairline-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-ink mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-subtle leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-hairline bg-surface-1 p-6 sm:p-8 text-center transition-colors duration-300 hover:border-hairline-strong">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary mb-4">
            {teaching.modelTitle}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {teaching.model.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary-soft border border-primary/20 text-sm font-medium text-primary"
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