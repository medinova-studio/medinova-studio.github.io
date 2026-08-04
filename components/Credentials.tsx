"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Credentials() {
  const { t } = useLang();

  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-violet/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            {t.home.credBadge}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
            {t.home.credTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto text-pretty">
            {t.home.credSubtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12 sm:mb-16">
          {t.home.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-ink-800/60 p-6 text-center"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-1.5">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-start">
          {t.home.testimonials.map((tst) => (
            <figure
              key={tst.name}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 lg:p-7"
            >
              <svg
                className="w-8 h-8 text-cyan/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <blockquote className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">
                {tst.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan/25 to-violet/25 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white font-display">
                    {tst.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{tst.name}</div>
                  <div className="text-xs text-slate-500">{tst.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
