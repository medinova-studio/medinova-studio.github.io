export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet/10 rounded-full blur-[100px] opacity-30" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="shimmer-badge relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-6 overflow-hidden">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Digital Agency &amp; Game Studio — Morocco
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight animate-fade-up"
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            Engineering Interactive Experiences &amp;{" "}
            <span className="gradient-text">Modern Digital Solutions</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Cross-platform game development, custom software engineering, and
            360° AI-powered growth systems for businesses.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "0.45s", opacity: 0 }}
          >
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-cyan text-ink-950 font-semibold text-sm hover:bg-cyan/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-cyan/20"
            >
              View Growth Packages
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hidden sm:flex">
        <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
