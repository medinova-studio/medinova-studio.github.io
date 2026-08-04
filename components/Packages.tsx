"use client";

import { useLang } from "@/lib/LanguageContext";
import type { Translation } from "@/lib/i18n";

type AgencyPkg = {
  name: string;
  badge: string | null;
  setup: string;
  retainer: string;
  includes: string;
  features: string[];
  highlight: boolean;
};

type GamePkg = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  enterprise?: boolean;
};

type AcademyPkg = {
  name: string;
  age: string;
  price: string;
  desc: string;
  features: string[];
  schedule: string;
};

const agencyPackages: AgencyPkg[] = [
  {
    name: "Pack ESSENTIEL",
    badge: null,
    setup: "4,500",
    retainer: "6,000",
    includes: "Vitrine Site + 30–40s Promo Video",
    features: [
      "2 Platforms (FB/IG, 8–10 posts/mo)",
      "4 Reels / TikToks",
      "1 Active Meta Ads campaign",
      "Responsive Site",
      "AI WhatsApp Auto-Welcome & FAQ Bot",
    ],
    highlight: false,
  },
  {
    name: "Pack PRO GROWTH",
    badge: "recommended",
    setup: "7,500",
    retainer: "12,000",
    includes: "Multi-page Site + 60s HD Voiceover Promo",
    features: [
      "3 Platforms (FB/IG + TikTok/LinkedIn, 15 posts/mo)",
      "10 High-end Reels",
      "Multi-channel Ads (Meta + Google + CAPI)",
      "5–7 Page High-Speed Site",
      "Intelligent Trained AI WhatsApp Agent for lead qualification",
    ],
    highlight: true,
  },
  {
    name: "Pack ENTERPRISE",
    badge: null,
    setup: "14,000",
    retainer: "22,000",
    includes: "Premium Multi-lingual Site + 4K Cinematic Film",
    features: [
      "360° Omnichannel",
      "18–20 Viral Shorts/Reels with motion design",
      "Full Funnel Ads",
      "Custom Multi-lingual Web App",
      "Autonomous LLM AI WhatsApp Agent + CRM/Webhook Sync",
    ],
    highlight: false,
  },
];

const gamePackages: GamePkg[] = [
  {
    name: "Mechanics & Prototype Pack",
    price: "8,000",
    desc: "Validate your core loop with a playable prototype.",
    features: [
      "Core mechanic design & prototyping",
      "Playable vertical slice (1 level)",
      "2D or 3D art direction",
      "Performance benchmarking",
    ],
  },
  {
    name: "Full Cross-Platform Game Pack",
    price: "25,000",
    desc: "Production-ready game shipping across PC, web, and mobile.",
    features: [
      "Complete game design document",
      "Full cross-platform build (PC, WebGL, Mobile)",
      "Multiplayer / leaderboards / achievements",
      "Store submission support (Steam, itch.io)",
      "3 months post-launch support",
    ],
  },
  {
    name: "B2B Interactive AR/VR & Software Solutions",
    price: "enterprise",
    desc: "Custom immersive experiences and enterprise software systems.",
    features: [
      "AR/VR experience design & development",
      "Custom interactive installations",
      "Enterprise software & dashboards",
      "API integrations & automation",
      "Dedicated engineering team",
    ],
    enterprise: true,
  },
];

const academyPackages: AcademyPkg[] = [
  {
    name: "Junior Explorers",
    age: "Ages 7–11",
    price: "450",
    desc: "Visual logic and creative coding foundations.",
    features: ["Scratch programming", "Visual logic & problem-solving", "Game-based learning"],
    schedule: "2 hrs / week",
  },
  {
    name: "Future Game Creators",
    age: "Ages 12–17",
    price: "650",
    desc: "Real coding with Python and game design.",
    features: ["Python programming", "2D / 3D Game Design", "Unity basics", "Portfolio projects"],
    schedule: "3 hrs / week",
  },
  {
    name: "Pro Dev & Adult Masterclass",
    age: "Ages 18+",
    price: "1,200",
    desc: "Industry-grade full-stack and AI development.",
    features: ["React web development", "Unity C# game programming", "AI agents & automation"],
    schedule: "Flexible schedule",
  },
];

function CheckIcon({ highlight }: { highlight: boolean }) {
  return (
    <svg
      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? "text-cyan" : "text-slate-500"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
        {badge}
      </span>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

function AgencyPillar({ t }: { t: Translation }) {
  return (
    <section id="offers" className="relative py-20 sm:py-28 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.pillars.agency}
          title={t.pillars.agencyTitle}
          subtitle={t.pillars.agencySubtitle}
        />

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {agencyPackages.map((pkg) => {
            const isHl = pkg.highlight;
            const badgeText = pkg.badge === "recommended" ? t.pillars.recommended : null;
            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isHl
                    ? "border-cyan/40 bg-ink-800/80 animate-pulse-glow lg:scale-[1.04] lg:-mt-2"
                    : "border-white/10 bg-ink-800/60 hover:border-white/20"
                }`}
              >
                <div
                  className={`h-1 w-full ${
                    isHl ? "bg-gradient-to-r from-cyan via-violet to-cyan" : "bg-gradient-to-r from-white/10 to-white/5"
                  }`}
                />
                <div className="p-6 lg:p-8">
                  {badgeText && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-[11px] font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                      {badgeText}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  {!badgeText && <div className="h-7" />}

                  <div className="mt-5 pb-5 border-b border-white/5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                      {t.pillars.setup}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-3xl font-bold text-white">{pkg.setup}</span>
                      <span className="text-sm text-slate-400 font-medium">{t.pillars.ht}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5">
                      {t.pillars.includes} {pkg.includes}
                    </p>
                  </div>

                  <div className="mt-5 pb-5 border-b border-white/5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                      {t.pillars.monthly}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`font-display text-3xl font-bold ${isHl ? "gradient-text" : "text-white"}`}
                      >
                        {pkg.retainer}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">
                        {t.pillars.ht} {t.pillars.perMonth}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon highlight={isHl} />
                        <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                      isHl
                        ? "bg-cyan text-ink-950 hover:bg-cyan/90 shadow-lg shadow-cyan/20"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    {t.pillars.getStarted}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notes */}
        <div className="mt-8 p-5 rounded-xl bg-ink-800/40 border border-white/5 max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-3">{t.pillars.notes}</div>
          <ul className="space-y-2">
            {[t.pillars.note1, t.pillars.note2, t.pillars.note3].map((note) => (
              <li key={note} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                <span className="text-slate-600 mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GamePillar({ t }: { t: Translation }) {
  return (
    <section id="games" className="relative py-20 sm:py-28 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-violet/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.pillars.games}
          title={t.pillars.gamesTitle}
          subtitle={t.pillars.gamesSubtitle}
        />

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {gamePackages.map((pkg) => (
            <div
              key={pkg.name}
              className="group relative rounded-2xl border border-white/10 bg-ink-800/60 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-lg hover:shadow-violet/10"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">{pkg.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{pkg.desc}</p>

              <div className="pb-5 border-b border-white/5">
                {pkg.enterprise ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet/10 border border-violet/20 text-violet text-sm font-semibold">
                    {t.pillars.enterpriseQuote}
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500">{t.pillars.from}</span>
                    <span className="font-display text-3xl font-bold text-white">{pkg.price}</span>
                    <span className="text-sm text-slate-400 font-medium">{t.pillars.ht}</span>
                  </div>
                )}
              </div>

              <ul className="mt-5 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon highlight={false} />
                    <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98]"
              >
                {pkg.enterprise ? t.pillars.requestQuote : t.pillars.getStarted}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyPillar({ t }: { t: Translation }) {
  return (
    <section id="academy" className="relative py-20 sm:py-28 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-cyan/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.pillars.academy}
          title={t.pillars.academyTitle}
          subtitle={t.pillars.academySubtitle}
        />

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {academyPackages.map((pkg) => (
            <div
              key={pkg.name}
              className="group relative rounded-2xl border border-white/10 bg-ink-800/60 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/10"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-lg font-bold text-white leading-snug">{pkg.name}</h3>
                <span className="px-2.5 py-1 rounded-md bg-cyan/10 border border-cyan/20 text-cyan text-[11px] font-semibold whitespace-nowrap">
                  {pkg.age}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{pkg.desc}</p>

              <div className="pb-5 border-b border-white/5">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-sm text-slate-400 font-medium">
                    DHS {t.pillars.perMonth}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5">{pkg.schedule}</p>
              </div>

              <ul className="mt-5 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon highlight={false} />
                    <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98]"
              >
                {t.pillars.getStarted}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Packages() {
  const { t } = useLang();
  return (
    <>
      <AgencyPillar t={t} />
      <GamePillar t={t} />
      <AcademyPillar t={t} />
    </>
  );
}
