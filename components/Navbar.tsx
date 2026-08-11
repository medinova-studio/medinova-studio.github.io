"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { LANGS, LANG_LABELS, Lang } from "@/lib/i18n";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solutions = [
    { href: "#services", emoji: "🎮", label: t.nav.subGameDev, desc: t.nav.subGameDevDesc },
    { href: "/agency", emoji: "📈", label: t.nav.subAgency, desc: t.nav.subAgencyDesc },
    { href: "/academy", emoji: "🎓", label: t.nav.subAcademy, desc: t.nav.subAcademyDesc },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-14 transition-all duration-300 border-b border-hairline ${
        scrolled ? "bg-canvas/95 backdrop-blur-xl" : "bg-canvas/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Medinova Studio">
            <img
              src="/images/logo.svg"
              alt="Medinova Studio logo"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            {/* Our Solutions dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen((v) => !v)}
                className="flex items-center gap-1.5 text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
                aria-expanded={solutionsOpen}
              >
                {t.nav.solutions}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSolutionsOpen(false)} />
                  <div className="absolute top-full mt-1.5 left-0 z-50 flex flex-col gap-0.5 p-1.5 rounded-md bg-surface-2 border border-hairline-strong min-w-[240px]">
                    {solutions.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-2.5 px-3 py-2 rounded-md transition-colors hover:bg-surface-3"
                      >
                        <span className="text-base leading-snug" aria-hidden="true">
                          {s.emoji}
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm font-medium text-ink">{s.label}</span>
                          <span className="text-xs text-ink-muted">{s.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a
              href="#portfolio"
              className="text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
            >
              {t.nav.portfolio}
            </a>

            <a
              href="#about"
              className="text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
            >
              {t.nav.about}
            </a>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-surface-2 border border-hairline text-ink-muted text-xs font-medium hover:bg-surface-3 hover:border-hairline-strong transition-all"
                aria-label="Select language"
              >
                <span>{LANG_LABELS[lang]}</span>
                <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute top-full mt-1.5 right-0 z-50 flex flex-col gap-0.5 p-1.5 rounded-md bg-surface-2 border border-hairline-strong min-w-[80px]">
                    {LANGS.map((l: Lang) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded text-xs font-medium text-start transition-colors ${
                          lang === l
                            ? "bg-primary/15 text-primary"
                            : "text-ink-subtle hover:text-ink hover:bg-surface-3"
                        }`}
                      >
                        {LANG_LABELS[l]}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Button href="#contact" size="sm" className="whitespace-nowrap">
              {t.nav.hireStudio}
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center gap-1 px-1.5 py-1 rounded-md bg-surface-2 border border-hairline">
              {LANGS.map((l: Lang) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                    lang === l ? "bg-primary text-white" : "text-ink-tertiary"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <button
              className="p-2 -mr-2 text-ink-subtle hover:text-ink transition-colors"
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
        <div className="md:hidden px-5 sm:px-6 pb-4 border-t border-hairline pt-3 bg-canvas/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            <span className="px-3 pt-1 pb-1 text-[11px] font-semibold uppercase tracking-wider text-ink-tertiary">
              {t.nav.solutions}
            </span>
            {solutions.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 text-sm text-ink-subtle hover:text-ink hover:bg-surface-2 rounded-md px-3 py-2.5 transition-all"
              >
                <span className="text-base" aria-hidden="true">
                  {s.emoji}
                </span>
                {s.label}
              </a>
            ))}
            <a
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="text-sm text-ink-subtle hover:text-ink hover:bg-surface-2 rounded-md px-3 py-2.5 transition-all"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-sm text-ink-subtle hover:text-ink hover:bg-surface-2 rounded-md px-3 py-2.5 transition-all"
            >
              {t.nav.about}
            </a>
            <Button
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit"
            >
              {t.nav.hireStudio}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
