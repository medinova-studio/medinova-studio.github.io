"use client";

import { Award, QrCode, MessageSquare } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const highlightIcons = [Award, QrCode, MessageSquare];

export default function Certification() {
  const { t } = useLang();
  const { certification } = t.academy;

  return (
    <section
      id="certification"
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
            {certification.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {certification.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          <div className="rounded-lg border border-hairline bg-surface-1 p-6 lg:p-8 transition-colors duration-300 hover:border-hairline-strong">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-2">
              {certification.diplomasTitle}
            </h3>
            <p className="text-sm text-ink-subtle mb-6">
              {certification.diplomasSubtitle}
            </p>
            <div className="space-y-3">
              {certification.levels.map((level, i) => (
                <div
                  key={level}
                  className="rounded-md border border-hairline bg-surface-2 p-4 transition-colors hover:border-hairline-strong"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-xs font-bold tracking-wider text-ink-muted uppercase">
                      {level}
                    </p>
                    <Award className="w-4 h-4 text-ink-muted" />
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {certification.diplomas[i]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-hairline bg-surface-1 p-6 lg:p-8 transition-colors duration-300 hover:border-hairline-strong">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-6">
              {certification.includedTitle}
            </h3>
            <div className="space-y-5">
              {certification.highlights.map((item, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-surface-2 border border-hairline flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ink-muted" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink mb-1 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[13px] text-ink-subtle leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-lg bg-surface-2 border border-hairline p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                {certification.recognition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
