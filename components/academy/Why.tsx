"use client";

import { Building2, FolderKanban, Hammer } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const itemIcons = [Hammer, FolderKanban, Building2];

export default function Why() {
  const { t } = useLang();
  const { why } = t.academy;

  return (
    <section
      id="why"
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {why.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {why.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {why.items.map((item, i) => {
            const Icon = itemIcons[i % itemIcons.length];
            return (
              <div
                key={item.title}
                className="card-accent group rounded-lg border border-hairline bg-surface-1 p-6 lg:p-8 transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2"
              >
                <div className="w-11 h-11 rounded-xl bg-surface-2 border border-hairline flex items-center justify-center mb-4 transition-colors group-hover:border-hairline-strong">
                  <Icon className="w-5 h-5 text-ink-muted" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-subtle leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}