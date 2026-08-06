"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

type Game = {
  title: string;
  badges: string[];
  description: string;
  cta: string;
  link: string;
  gallery: string[];
};

function Lightbox({
  title,
  images,
  index,
  onClose,
  setIndex,
}: {
  title: string;
  images: string[];
  index: number;
  onClose: () => void;
  setIndex: (i: number) => void;
}) {
  const count = images.length;
  const prev = () => setIndex((index - 1 + count) % count);
  const next = () => setIndex((index + 1) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Close gallery"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-2 sm:left-6 p-2.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Previous screenshot"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <img
        src={images[index]}
        alt={`${title} screenshot ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[82vh] max-w-[90vw] rounded-lg object-contain shadow-2xl bg-black"
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-2 sm:right-6 p-2.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Next screenshot"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 font-medium">
        {index + 1} / {count}
      </span>
    </div>
  );
}

function GameCard({ game }: { game: Game }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="group relative flex flex-col rounded-lg border border-hairline bg-surface-1 p-5 transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2">
      <div className="flex flex-wrap gap-1.5 mb-4">
        {game.badges.map((b) => (
          <span
            key={b}
            className="px-2 py-0.5 rounded-full bg-surface-2 border border-hairline text-ink-tertiary text-[10px] font-medium"
          >
            {b}
          </span>
        ))}
      </div>

      <div className="relative rounded-md overflow-hidden border border-hairline aspect-[3/4] bg-surface-2 mb-3">
        <button
          onClick={() => {
            setLightboxIndex(active);
            setLightbox(true);
          }}
          className="block w-full h-full"
          aria-label={`View ${game.title} screenshots`}
        >
          <img
            src={game.gallery[active]}
            alt={`${game.title} screenshot ${active + 1}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </button>
      </div>

      <div className="flex items-center gap-1.5 mb-4">
        {game.gallery.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={`w-11 h-11 rounded-md overflow-hidden border transition-all ${
              i === active
                ? "border-primary ring-1 ring-primary"
                : "border-hairline opacity-70 hover:opacity-100"
            }`}
            aria-label={`Show screenshot ${i + 1}`}
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
        <span className="ml-auto text-[11px] text-ink-tertiary font-medium">
          {active + 1}/{game.gallery.length}
        </span>
      </div>

      <h3 className="font-display text-base font-medium text-ink mb-2 leading-snug">
        {game.title}
      </h3>
      <p className="text-xs text-ink-subtle leading-relaxed mb-6 flex-1">
        {game.description}
      </p>
      <a
        href={game.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
      >
        {game.cta}
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>

      {lightbox && (
        <Lightbox
          title={game.title}
          images={game.gallery}
          index={lightboxIndex}
          onClose={() => setLightbox(false)}
          setIndex={setLightboxIndex}
        />
      )}
    </div>
  );
}

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
            {t.portfolio.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4 tracking-tight text-balance">
            {t.portfolio.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
          {t.portfolio.games.map((game) => (
            <GameCard key={game.title} game={game as Game} />
          ))}
        </div>

        {/* itch.io banner */}
        <div className="mt-5 lg:mt-6 rounded-lg border border-hairline bg-surface-1 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-ink-muted text-center sm:text-left">
            {t.portfolio.banner.cta}
          </p>
          <a
            href={t.portfolio.banner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface-1 text-ink border border-hairline font-medium text-sm hover:bg-surface-2 hover:border-hairline-strong active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            medinova.itch.io
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
