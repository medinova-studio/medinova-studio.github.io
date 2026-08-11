"use client";

import { Puzzle, Code2, Rocket, Check, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const trackIcons = [Puzzle, Code2, Rocket];

export default function Tracks() {
  const { t } = useLang();
  const { tracks } = t.academy;

  return (
    <section
      id="tracks"
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            {tracks.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance max-w-3xl mx-auto">
            {tracks.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {tracks.levels.map((track, i) => {
            const Icon = trackIcons[i % trackIcons.length];
            const featured = i === tracks.levels.length - 1;
            return (
              <div
                key={track.level}
                className={`group relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  featured
                    ? "border-cyan/30 bg-ink-800/70 shadow-lg shadow-cyan/10"
                    : "border-white/10 bg-ink-800/50 hover:border-cyan/30"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-px ${
                    featured
                      ? "bg-gradient-to-r from-transparent via-cyan to-transparent"
                      : "bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  }`}
                />

                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      featured
                        ? "bg-cyan/15 border border-cyan/25 text-cyan"
                        : "bg-white/5 border border-white/10 text-slate-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase ${
                      featured
                        ? "bg-cyan/15 border border-cyan/25 text-cyan"
                        : "bg-white/5 border border-white/10 text-slate-400"
                    }`}
                  >
                    {track.level} — {track.title}
                  </span>
                </div>

                {track.programTitle && (
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-3 leading-snug">
                    {track.programTitle}
                  </h3>
                )}

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  <span className="text-slate-200 font-medium">
                    {track.levelName}
                    {" · "}
                  </span>
                  {track.target}
                </p>

                <div className="pb-5 border-b border-white/5 mb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan mb-3">
                    {tracks.programLabel}
                  </p>
                  <ul className="space-y-2">
                    {track.focus.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-slate-300 leading-snug"
                      >
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-cyan/8 border border-cyan/15 p-4 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan mb-1.5">
                    {tracks.resultLabel}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {track.outcome}
                  </p>
                </div>

                {i < tracks.levels.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-[26px] -translate-y-1/2 z-10">
                    <span className="w-9 h-9 rounded-full bg-ink-800 border border-white/15 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-cyan rtl:rotate-180" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
