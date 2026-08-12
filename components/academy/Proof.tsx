"use client";

import Image from "next/image";
import { ArrowUpRight, Trophy } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const ROLE_IMAGES = [
  "/images/academy/founder.jpg",
  "/images/academy/mge-booth.jpg",
];

const GAME_IMAGES = [
  "/images/games/pharaohs-guardian/screenshot1.webp",
  "/images/games/chameleon-outbreak/screenshot1.webp",
  "/images/games/sniper-elimination/screenshot1.webp",
  "/images/games/blitz-combat/screenshot1.webp",
];

export default function Proof() {
  const { t } = useLang();
  const { proof } = t.academy;

  return (
    <section id="proof" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
            {proof.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {proof.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          <figure
            id="instructor"
            className="group scroll-mt-28 rounded-lg border border-hairline bg-surface-1 overflow-hidden transition-all duration-300 hover:border-hairline-strong"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden">
              <Image
                src={ROLE_IMAGES[0]}
                alt={proof.founderCaption}
                fill
                sizes="(min-width:640px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink-muted leading-relaxed">
              {proof.founderCaption}
            </figcaption>
          </figure>

          <figure className="group rounded-lg border border-hairline bg-surface-1 overflow-hidden transition-all duration-300 hover:border-hairline-strong">
            <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden">
              <Image
                src={ROLE_IMAGES[1]}
                alt={proof.boothCaption}
                fill
                sizes="(min-width:640px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-ink-muted leading-relaxed">
              {proof.boothCaption}
            </figcaption>
          </figure>
        </div>

        <div className="mt-5 lg:mt-6 grid lg:grid-cols-[1.1fr_1fr] rounded-lg border border-hairline bg-surface-1 overflow-hidden transition-colors duration-300 hover:border-hairline-strong">
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[280px]">
            <Image
              src="/images/games/zombies-warzone/screenshot1.webp"
              alt={proof.robloxTitle}
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-semibold mb-4">
              <Trophy className="w-3.5 h-3.5" />
              {proof.robloxBadge}
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug mb-3">
              {proof.robloxTitle}
            </h3>
            <a
              href="https://www.roblox.com/games/11927988329/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary-hover active:scale-[0.98] transition-all self-start"
            >
              {proof.robloxCta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div id="student-projects" className="mt-14 sm:mt-16 scroll-mt-28">
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-ink-tertiary mb-6">
            {proof.showcaseLabel}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {GAME_IMAGES.map((src, i) => (
              <div
                key={src}
                className="group rounded-lg border border-hairline bg-surface-1 overflow-hidden transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={src}
                    alt={proof.games[i]}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <p className="px-4 py-3 text-xs sm:text-sm text-ink-muted font-medium leading-snug">
                  {proof.games[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
