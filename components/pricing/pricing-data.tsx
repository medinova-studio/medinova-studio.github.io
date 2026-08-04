export type AgencyPkg = {
  name: string;
  badge: string | null;
  setup: string;
  retainer: string;
  includes: string;
  features: string[];
  highlight: boolean;
};

export type GamePkg = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  enterprise?: boolean;
};

export type AcademyPkg = {
  name: string;
  age: string;
  price: string;
  desc: string;
  features: string[];
  schedule: string;
};

export const agencyPackages: AgencyPkg[] = [
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

export const gamePackages: GamePkg[] = [
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

export const academyPackages: AcademyPkg[] = [
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

export function CheckIcon({ highlight }: { highlight: boolean }) {
  return (
    <svg
      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? "text-cyan" : "text-slate-500"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function SectionHeader({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
        {badge}
      </span>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto text-pretty">{subtitle}</p>
    </div>
  );
}
