"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, GraduationCap, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { LANGS, LANG_LABELS, Lang } from "@/lib/i18n";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const isAcademy = pathname?.startsWith("/academy");
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

  const portfolioHref = isAcademy ? "#student-projects" : "/#portfolio";
  const aboutHref = "/who-we-are";

  const solutions = isAcademy
    ? [
        { href: "#tracks", icon: Gamepad2, label: t.nav.subGameDev, desc: t.nav.subGameDevDesc },
        { href: "/agency", icon: TrendingUp, label: t.nav.subAgency, desc: t.nav.subAgencyDesc },
        { href: "#pricing", icon: GraduationCap, label: t.nav.subAcademy, desc: t.nav.subAcademyDesc },
      ]
    : [
        { href: "/game-development", icon: Gamepad2, label: t.nav.subGameDev, desc: t.nav.subGameDevDesc },
        { href: "/agency", icon: TrendingUp, label: t.nav.subAgency, desc: t.nav.subAgencyDesc },
        { href: "/academy", icon: GraduationCap, label: t.nav.subAcademy, desc: t.nav.subAcademyDesc },
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
                  <div className="absolute top-full mt-2 left-0 rtl:left-auto rtl:right-0 z-50 flex flex-col gap-1.5 p-2.5 rounded-md bg-surface-2 border border-hairline-strong w-80 max-w-[90vw]">
                    {solutions.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="group flex items-start gap-3.5 rounded-xl p-3 transition-all duration-200 hover:bg-surface-3"
                        >
                          <span className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-surface-3 border border-hairline text-ink-muted transition-colors duration-200 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                            <Icon className="w-5 h-5" strokeWidth={1.75} />
                          </span>
                          <span className="flex flex-col pt-0.5">
                            <span className="text-sm font-semibold text-ink">
                              {s.label}
                            </span>
                            <span className="mt-0.5 text-xs leading-relaxed text-ink-subtle group-hover:text-ink-muted">
                              {s.desc}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <Link
              href={portfolioHref}
              className="text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
            >
              {t.nav.portfolio}
            </Link>

            <Link
              href={aboutHref}
              className="text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
            >
              {t.nav.about}
            </Link>

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
                  <div className="absolute top-full mt-1.5 right-0 rtl:left-0 rtl:right-auto z-50 flex flex-col gap-0.5 p-1.5 rounded-md bg-surface-2 border border-hairline-strong min-w-[80px]">
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

            {isAcademy ? (
              <Button href="#tracks" size="sm" className="whitespace-nowrap">
                {t.nav.discoverTracks}
              </Button>
            ) : (
              <Button href="/#contact" size="sm" className="whitespace-nowrap">
                {t.nav.hireStudio}
              </Button>
            )}
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
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-sm text-ink-subtle hover:text-ink hover:bg-surface-2 rounded-md px-3 py-2.5 transition-all"
                >
                  <span className="h-8 w-8 shrink-0 flex items-center justify-center rounded-md bg-surface-2 border border-hairline text-ink-muted">
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                  {s.label}
                </Link>
              );
            })}
            <Link
              href={portfolioHref}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-subtle hover:text-ink hover:bg-surface-2 rounded-md px-3 py-2.5 transition-all"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={aboutHref}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-subtle hover:text-ink hover:bg-surface-2 rounded-md px-3 py-2.5 transition-all"
            >
              {t.nav.about}
            </Link>
            {isAcademy ? (
              <Button
                href="#tracks"
                onClick={() => setOpen(false)}
                className="mt-2 w-fit"
              >
                {t.nav.discoverTracks}
              </Button>
            ) : (
              <Button
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-fit"
              >
                {t.nav.hireStudio}
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
