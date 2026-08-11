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
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            {community.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance max-w-3xl mx-auto">
            {community.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-4">
            {community.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {community.features.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/10 bg-ink-800/50 p-6 transition-all duration-300 hover:border-cyan/30 hover:bg-ink-800/70"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-cyan/15">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
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
