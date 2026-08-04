"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export default function PageHeader({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  const { t } = useLang();

  return (
    <header className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10">
      {/* Glow + grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/10 rounded-full blur-[120px] opacity-40" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan transition-colors mb-6"
        >
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.home.backHome}
        </Link>

        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          {badge}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4 text-balance max-w-3xl">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl text-pretty">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
