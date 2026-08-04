const pillars = [
  {
    icon: "🎮",
    title: "Game Development & Interactive Media",
    desc: "PC, Console, WebGL, 2D/3D Arcade mechanics — immersive, mechanically rich experiences built for cross-platform reach.",
    tags: ["PC", "Console", "WebGL", "2D/3D Arcade"],
    accent: "cyan",
  },
  {
    icon: "💻",
    title: "Custom Web & Software Engineering",
    desc: "React, WebGL, custom dashboards, and process automation — tailored software that scales with your operations.",
    tags: ["React", "WebGL", "Dashboards", "Automation"],
    accent: "violet",
  },
  {
    icon: "📈",
    title: "B2B Digital Growth & Agency Services",
    desc: "Full-funnel marketing, content production, paid ads, and AI WhatsApp routing — a 360° growth engine for your brand.",
    tags: ["Full-funnel", "Content", "Ads", "AI WhatsApp"],
    accent: "cyan",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            Core Capabilities
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Three Pillars of Execution
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            From interactive game worlds to revenue-driving growth systems —
            engineered under one roof.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-white/10 bg-ink-800/60 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/10"
            >
              {/* Top gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${
                  p.accent
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-ink-700/80 border border-white/5 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-ink-700/80 border border-white/5 text-slate-300 text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Number watermark */}
              <span className="absolute top-5 right-6 font-display text-5xl font-bold text-white/[0.03] select-none">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
