"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gamepad2, Trophy } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const GAME_IMAGES = [
  "/images/games/pharaohs-guardian/screenshot1.webp",
  "/images/games/chameleon-outbreak/screenshot1.webp",
  "/images/games/sniper-elimination/screenshot1.webp",
  "/images/games/blitz-combat/screenshot1.webp",
];

export default function Work() {
  const { t } = useLang();
  const { work } = t.academy;

  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {work.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {work.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-2xl mx-auto mt-4 leading-relaxed">
            {work.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] rounded-2xl border border-hairline bg-surface-1 overflow-hidden shadow-[0_12px_32px_rgba(20,21,26,0.06)] transition-colors duration-300 hover:border-hairline-strong">
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px]">
            <Image
              src="/images/games/zombies-warzone/screenshot1.webp"
              alt={work.robloxTitle}
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
              <Trophy className="w-3.5 h-3.5" />
              {work.robloxBadge}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-snug mb-4">
              {work.robloxTitle}
            </h3>
            <a
              href="https://www.roblox.com/games/11927988329/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary-hover active:scale-[0.98] transition-all self-start"
            >
              {work.robloxCta}
              <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
            </a>
          </div>
        </div>

        <div className="mt-6 lg:mt-8 grid lg:grid-cols-[1fr_1.35fr] rounded-2xl border border-hairline bg-surface-1 overflow-hidden shadow-[0_12px_32px_rgba(20,21,26,0.06)] transition-colors duration-300 hover:border-hairline-strong">
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
              <Gamepad2 className="w-3.5 h-3.5" />
              {work.mgeBadge}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-snug mb-4">
              {work.mgeTitle}
            </h3>
            <p className="text-base text-ink-subtle leading-relaxed">
              {work.mgeDesc}
            </p>
          </div>
          <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[460px] bg-navy order-1 lg:order-2">
            <Image
              src="/images/academy/mge-booth.jpg"
              alt={work.mgeTitle}
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-contain p-6 sm:p-8"
            />
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-ink-tertiary mb-7">
            {work.gamesLabel}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
            {GAME_IMAGES.map((src, i) => (
              <div key={src} className="group">
                <div className="relative aspect-[4/3] rounded-xl bg-navy overflow-hidden ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.01]">
                  <Image
                    src={src}
                    alt={work.games[i]}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="px-1 pt-4 text-base text-ink-muted font-medium leading-snug">
                  {work.games[i]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/game-development"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface-1 border border-hairline text-ink text-sm font-medium hover:bg-surface-2 hover:border-hairline-strong active:scale-[0.98] transition-all"
          >
            {work.studioLink}
            <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}