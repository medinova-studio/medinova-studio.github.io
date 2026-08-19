"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const { hero } = t.agency;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/zellige.svg')] bg-[size:280px] opacity-70 [mask-image:radial-gradient(ellipse_90%_85%_at_50%_0%,#000_15%,transparent_78%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-primary/[0.14] blur-[130px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[360px] w-[360px] rounded-full bg-primary/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1.5 eyebrow text-primary">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20">
              <Zap className="h-2.5 w-2.5 text-primary" />
            </span>
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight text-ink text-balance">
            {hero.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-ink-subtle leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#packages"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_40px_-6px_rgba(36,85,230,0.7)] active:scale-[0.98]"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-hairline bg-surface-1 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-14">
            <div className="mx-auto flex max-w-2xl items-center justify-center gap-3 rounded-full border border-hairline bg-surface-1/60 px-5 py-2.5 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success shadow-[0_0_12px_2px_rgba(39,166,68,0.6)]" />
              <p className="text-center text-xs text-ink-muted sm:text-sm">
                {hero.trust}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}