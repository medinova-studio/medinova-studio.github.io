"use client";

import { CheckCircle2, Trophy, Users } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const trustIcons = [CheckCircle2, Trophy, Users];

export default function Hero() {
  const { t } = useLang();
  const { hero } = t.academy;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-cyan/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-violet/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight text-balance">
            {hero.headline}
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {hero.pills.map((pill, i) => (
              <a
                key={pill}
                href="#tracks"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-800/60 border border-white/10 text-white text-xs sm:text-sm font-medium hover:border-cyan/30 hover:bg-ink-800/80 transition-all"
              >
                {pill}
                <span className="px-1.5 py-0.5 rounded-md bg-cyan/15 border border-cyan/25 text-cyan text-[10px] font-semibold">
                  {hero.pillAges[i]}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {hero.trust.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink-800/50 p-4 text-start"
                >
                  <div className="w-9 h-9 flex-shrink-0 rounded-md bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />
    </section>
  );
}
