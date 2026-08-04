"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/LanguageContext";
import { LANGS, LANG_LABELS, Lang } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/agency", label: t.nav.offers },
    { href: "/games", label: t.nav.games },
    { href: "/academy", label: t.nav.academy },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-ink-950/95 backdrop-blur-xl border-white/5 shadow-lg shadow-black/30"
          : "bg-ink-950/80 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Medinova Studio">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-violet flex items-center justify-center shadow-lg shadow-cyan/20">
              <span className="text-ink-950 font-bold text-sm font-display">M</span>
            </div>
            <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight whitespace-nowrap">
              MEDINOVA <span className="text-cyan">STUDIO</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((l) => {
              const active = l.href.startsWith("/") && !l.href.includes("#") && pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link relative text-sm transition-colors duration-200 whitespace-nowrap ${
                    active ? "text-cyan" : "text-slate-400 hover:text-cyan"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-cyan rounded-full transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Select language"
              >
                <span className="text-cyan">{LANG_LABELS[lang]}</span>
                <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute top-full mt-1.5 right-0 z-50 flex flex-col gap-0.5 p-1.5 rounded-lg bg-ink-800 border border-white/10 shadow-xl shadow-black/50 min-w-[80px]">
                    {LANGS.map((l: Lang) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium text-start transition-colors ${
                          lang === l
                            ? "bg-cyan/15 text-cyan"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {LANG_LABELS[l]}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium hover:bg-cyan/20 hover:border-cyan/40 transition-all duration-200 whitespace-nowrap"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile language pills */}
            <div className="flex items-center gap-1 px-1.5 py-1 rounded-lg bg-white/5 border border-white/10">
              {LANGS.map((l: Lang) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                    lang === l ? "bg-cyan/20 text-cyan" : "text-slate-500"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <button
              className="p-2 -mr-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-5 sm:px-6 pb-4 border-t border-white/5 pt-4 bg-ink-950/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-400 hover:text-cyan hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2.5 mt-2 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium hover:bg-cyan/20 transition-all w-fit"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
