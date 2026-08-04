const packages = [
  {
    name: "Pack ESSENTIEL",
    badge: null,
    setupFee: "4,500",
    retainer: "6,000",
    setupIncludes: "Vitrine Site + 30–40s Promo Video",
    features: [
      "2 Platforms (FB/IG, 8–10 posts/mo)",
      "4 Reels / TikToks",
      "1 Active Meta Ads campaign",
      "Responsive Site",
      "AI WhatsApp Auto-Welcome & FAQ Bot",
    ],
    highlight: false,
    accent: "slate",
  },
  {
    name: "Pack PRO GROWTH",
    badge: "Recommended · Scale & Conversion",
    setupFee: "7,500",
    retainer: "12,000",
    setupIncludes: "Multi-page Site + 60s HD Voiceover Promo",
    features: [
      "3 Platforms (FB/IG + TikTok/LinkedIn, 15 posts/mo)",
      "10 High-end Reels",
      "Multi-channel Ads (Meta + Google + CAPI)",
      "5–7 Page High-Speed Site",
      "Intelligent Trained AI WhatsApp Agent for lead qualification",
    ],
    highlight: true,
    accent: "cyan",
  },
  {
    name: "Pack ENTERPRISE",
    badge: null,
    setupFee: "14,000",
    retainer: "22,000",
    setupIncludes: "Premium Multi-lingual Site + 4K Cinematic Film",
    features: [
      "360° Omnichannel",
      "18–20 Viral Shorts/Reels with motion design",
      "Full Funnel Ads",
      "Custom Multi-lingual Web App",
      "Autonomous LLM AI WhatsApp Agent + CRM/Webhook Sync",
    ],
    highlight: false,
    accent: "violet",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 sm:py-28 lg:py-32">
      {/* Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            Agency Growth Packages
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Choose Your Growth Tier
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Transparent pricing in MAD (HT). Setup fees include production and
            launch — retainers cover ongoing growth.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {packages.map((pkg) => {
            const isHighlight = pkg.highlight;
            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isHighlight
                    ? "border-cyan/40 bg-ink-800/80 animate-pulse-glow lg:scale-[1.04] lg:-mt-2"
                    : "border-white/10 bg-ink-800/60 hover:border-white/20"
                }`}
              >
                {/* Top bar */}
                <div
                  className={`h-1 w-full ${
                    isHighlight
                      ? "bg-gradient-to-r from-cyan via-violet to-cyan"
                      : "bg-gradient-to-r from-white/10 to-white/5"
                  }`}
                />

                <div className="p-6 lg:p-8">
                  {/* Badge */}
                  {pkg.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-[11px] font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                      {pkg.badge}
                    </span>
                  )}

                  {/* Name */}
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {pkg.name}
                  </h3>
                  {!pkg.badge && <div className="h-7 mb-0" />}

                  {/* Setup fee */}
                  <div className="mt-5 pb-5 border-b border-white/5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                      Setup Fee
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-3xl font-bold text-white">
                        {pkg.setupFee}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">
                        DHS HT
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5">
                      Includes {pkg.setupIncludes}
                    </p>
                  </div>

                  {/* Retainer */}
                  <div className="mt-5 pb-5 border-b border-white/5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                      Monthly Retainer
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`font-display text-3xl font-bold ${
                          isHighlight ? "gradient-text" : "text-white"
                        }`}
                      >
                        {pkg.retainer}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">
                        DHS HT / month
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-5 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isHighlight ? "text-cyan" : "text-slate-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-slate-300 leading-relaxed">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                      isHighlight
                        ? "bg-cyan text-ink-950 hover:bg-cyan/90 shadow-lg shadow-cyan/20"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Prices in MAD (HT). Ads budget &amp; third-party API usage paid
          directly to providers. 3-month initial commitment.
        </p>
      </div>
    </section>
  );
}
