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
      className="relative py-16 sm:py-20 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {why.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {why.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 md:divide-x md:divide-hairline">
          {why.items.map((item, i) => {
            const Icon = itemIcons[i % itemIcons.length];
            return (
              <div
                key={item.title}
                className="text-center md:text-start"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-soft border border-primary/20">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl lg:text-3xl font-bold text-ink tracking-tight text-balance">
                  {item.title}
                </h3>
                <p className="mt-3 text-base lg:text-lg text-ink-muted leading-relaxed">
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