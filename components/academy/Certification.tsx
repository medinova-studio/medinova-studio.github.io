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
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            {certification.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance max-w-3xl mx-auto">
            {certification.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-6 lg:p-8 transition-colors duration-300 hover:border-cyan/30">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2">
              {certification.diplomasTitle}
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              {certification.diplomasSubtitle}
            </p>
            <div className="space-y-3">
              {certification.levels.map((level, i) => (
                <div
                  key={level}
                  className="rounded-lg border border-white/10 bg-ink-900/50 p-4 transition-colors hover:border-cyan/30"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-xs font-bold tracking-wider text-cyan uppercase">
                      {level}
                    </p>
                    <Award className="w-4 h-4 text-cyan" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {certification.diplomas[i]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-6 lg:p-8 transition-colors duration-300 hover:border-cyan/30">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-6">
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
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[13px] text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-lg bg-white/[0.03] border border-white/10 p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {certification.recognition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
