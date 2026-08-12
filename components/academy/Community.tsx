"use client";

import { MessagesSquare, FolderKanban, ShieldCheck, CalendarCheck } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const featureIcons = [
  MessagesSquare,
  FolderKanban,
  ShieldCheck,
  CalendarCheck,
];

export default function Community() {
  const { t } = useLang();
  const { community } = t.academy;

  return (
    <section
      id="community"
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            {community.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {community.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-xl mx-auto mt-4">
            {community.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {community.features.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <div
                key={feature.title}
                className="group rounded-lg border border-hairline bg-surface-1 p-6 transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2"
              >
                <div className="w-11 h-11 rounded-xl bg-surface-2 border border-hairline flex items-center justify-center mb-4 transition-colors group-hover:border-hairline-strong">
                  <Icon className="w-5 h-5 text-ink-muted" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-subtle leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
