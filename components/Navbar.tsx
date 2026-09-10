"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, GraduationCap, TrendingUp, Sparkles, ArrowRight, Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { LANGS, LANG_LABELS, Lang } from "@/lib/i18n";
import Button from "@/components/ui/Button";

type ProductCard = {
  href: string;
  icon: React.ElementType;
  label: string;
  desc: string;
};

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean) ?? [];
  // segments: [lang, section, ...] when prefixed, or [section] when bare
  const section = (["en", "fr", "ar"] as const).includes(segments[0] as Lang) ? segments[1] : segments[0];
  const isAgency = section === "agency";
  const isAcademy = section === "academy";
  const isGameDev = section === "game-development";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open && !solutionsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setSolutionsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, solutionsOpen]);

  // Close mega when pathname changes - deferred to avoid cascading renders
  useEffect(() => {
    const id = setTimeout(() => {
      setSolutionsOpen(false);
      setOpen(false);
      setMobileSolutionsOpen(true);
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  const products: ProductCard[] = [
    {
      href: `/${lang}/game-development`,
      icon: Gamepad2,
      label: t.nav.subGameDev,
      desc: t.nav.subGameDevDesc,
    },
    {
      href: `/${lang}/agency`,
      icon: TrendingUp,
      label: t.nav.subAgency,
      desc: t.nav.subAgencyDesc,
    },
    {
      href: `/${lang}/academy`,
      icon: GraduationCap,
      label: t.nav.subAcademy,
      desc: t.nav.subAcademyDesc,
    },
  ];

  const activeProduct = isGameDev ? products[0].href : isAgency ? products[1].href : isAcademy ? products[2].href : null;

  const agencyAnchors = [
    { href: `/${lang}/agency#growth-framework`, label: t.agency.nav.links.framework },
    { href: `/${lang}/agency#solutions`, label: t.agency.nav.links.solutions },
    { href: `/${lang}/agency#packages`, label: t.agency.nav.links.packages },
    { href: `/${lang}/agency#faq`, label: t.agency.nav.links.faq },
  ];

  const academyAnchors = [
    { href: `/${lang}/academy#work`, label: "Our Work" },
    { href: `/${lang}/academy#courses`, label: "Courses" },
    { href: `/${lang}/academy#faq`, label: "FAQ" },
  ];

  const gameDevAnchors = [
    { href: `/${lang}/game-development#portfolio`, label: t.nav.portfolio },
    { href: `/${lang}/game-development#services`, label: t.nav.services },
  ];

  const subAnchors = isAgency ? agencyAnchors : isAcademy ? academyAnchors : isGameDev ? gameDevAnchors : null;

  const quickLinks = [
    { href: `/${lang}/#portfolio`, label: t.nav.portfolio },
    { href: `/${lang}/game-development#services`, label: t.nav.services },
    { href: `/${lang}/who-we-are`, label: t.nav.about },
    { href: `/${lang}/blog`, label: t.nav.blog },
  ];

  const cta = isAgency
    ? { href: `/${lang}/agency#contact`, label: t.agency.nav.cta }
    : isAcademy
      ? { href: `/${lang}/academy#courses`, label: t.nav.discoverTracks }
      : { href: `/${lang}/#contact`, label: t.nav.hireStudio };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={`h-14 border-b border-hairline transition-all duration-300 ${
          scrolled ? "bg-canvas/95 backdrop-blur-xl shadow-[0_2px_16px_rgba(16,26,51,0.06)]" : "bg-canvas/80 backdrop-blur-md"
        }`}
        aria-label="Primary"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Brand */}
            <Link href={`/${lang}`} className="flex items-center flex-shrink-0" aria-label="Medinova Studio">
              <img src="/images/logo.svg" alt="Medinova Studio logo" className="h-9 w-auto object-contain" />
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-7">
              {/* Solutions mega */}
              <div className="relative">
                <button
                  onClick={() => setSolutionsOpen((v) => !v)}
                  className={`flex items-center gap-1.5 text-sm transition-colors duration-200 whitespace-nowrap ${solutionsOpen ? "text-ink" : "text-ink-subtle hover:text-ink"}`}
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  {t.nav.solutions}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {solutionsOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setSolutionsOpen(false)} aria-hidden="true" />
                    <div className="absolute top-full mt-3 left-0 rtl:left-auto rtl:right-0 z-50 w-[22rem] lg:w-[24rem] rounded-xl border border-hairline bg-surface-1 shadow-[0_16px_40px_rgba(16,26,51,0.12)] overflow-hidden">
                      <div className="p-2.5 flex flex-col gap-1.5">
                        {products.map((s) => {
                          const Icon = s.icon;
                          const isActive = activeProduct === s.href;
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setSolutionsOpen(false)}
                              className={`group flex items-start gap-3.5 rounded-lg p-3 transition-all duration-200 ${isActive ? "bg-primary-soft border border-primary/20" : "hover:bg-surface-2 border border-transparent"}`}
                            >
                              <span
                                className={`h-9 w-9 shrink-0 flex items-center justify-center rounded-lg border text-ink-muted transition-colors duration-200 ${isActive ? "bg-white border-primary/20 text-primary" : "bg-surface-2 border-hairline group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary"}`}
                              >
                                <Icon className="w-5 h-5" strokeWidth={1.75} />
                              </span>
                              <span className="flex flex-col pt-0.5">
                                <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-ink"}`}>{s.label}</span>
                                <span className="mt-0.5 text-xs leading-relaxed text-ink-subtle group-hover:text-ink-muted">{s.desc}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      {/* Bottom quick strip like Stripe/Linear */}
                      <div className="flex items-center justify-between gap-3 px-3 py-2.5 border-t border-hairline bg-surface-2/80">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-subtle">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          One studio, three engines
                        </span>
                        <Link href={`/${lang}/who-we-are`} onClick={() => setSolutionsOpen(false)} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover">
                          {t.nav.about} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link
                href={`/${lang}/#portfolio`}
                className="text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
              >
                {t.nav.portfolio}
              </Link>

              <Link
                href={`/${lang}/who-we-are`}
                className="text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
              >
                {t.nav.about}
              </Link>

              <Link
                href={`/${lang}/blog`}
                className="text-sm text-ink-subtle hover:text-ink transition-colors duration-200 whitespace-nowrap"
              >
                {t.nav.blog}
              </Link>

              {/* Language pills - desktop */}
              <div className="flex items-center gap-1 p-1 rounded-md bg-surface-2 border border-hairline">
                {LANGS.map((l: Lang) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-label={`Switch to ${LANG_LABELS[l]}`}
                    aria-current={lang === l ? "true" : undefined}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold leading-none transition-colors ${lang === l ? "bg-primary text-white shadow-sm" : "text-ink-tertiary hover:text-ink"}`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>

              <Button href={cta.href} size="sm" className="whitespace-nowrap shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25">
                {cta.label}
              </Button>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <div className="flex items-center gap-1 p-1 rounded-md bg-surface-2 border border-hairline">
                {LANGS.map((l: Lang) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-label={`Switch to ${LANG_LABELS[l]}`}
                    aria-current={lang === l || undefined}
                    className={`flex min-w-[36px] h-8 items-center justify-center rounded text-[11px] font-bold transition-colors ${lang === l ? "bg-primary text-white" : "text-ink-tertiary hover:text-ink"}`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
              <button
                className="h-9 w-9 flex items-center justify-center rounded-md border border-hairline bg-surface-1 text-ink-muted hover:text-ink transition-colors"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - full-screen sheet (A) - dvh so no small inner frame */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-x-0 top-14 overflow-y-auto overscroll-contain px-5 sm:px-6 pb-8 border-t border-hairline pt-3 bg-canvas backdrop-blur-xl"
            style={{ height: "calc(100dvh - 56px)", maxHeight: "calc(100dvh - 56px)" }}
          >
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 hover:bg-surface-2 transition-colors"
                aria-expanded={mobileSolutionsOpen}
                aria-controls="mobile-solutions-list"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-tertiary">{t.nav.solutions}</span>
                <svg
                  className={`h-3.5 w-3.5 text-ink-tertiary transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSolutionsOpen && (
                <div id="mobile-solutions-list" className="flex flex-col gap-1">
                  {products.map((s) => {
                    const Icon = s.icon;
                    const isActive = activeProduct === s.href;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className={`flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-all border ${isActive ? "bg-primary-soft border-primary/20" : "border-transparent text-ink-subtle hover:text-ink hover:bg-surface-2"}`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`h-8 w-8 shrink-0 flex items-center justify-center rounded-md border ${isActive ? "bg-white border-primary/20 text-primary" : "bg-surface-2 border-hairline text-ink-muted"}`}
                          >
                            <Icon className="w-4 h-4" strokeWidth={1.75} />
                          </span>
                          <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-ink"}`}>{s.label}</span>
                        </span>
                        <span className="ms-11 text-xs leading-relaxed text-ink-subtle">{s.desc}</span>
                      </Link>
                    );
                  })}
                </div>
              )}

              <span className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-wider text-ink-tertiary">Quick Links</span>
              <div className="grid grid-cols-2 gap-1.5 px-1">
                {quickLinks.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm bg-surface-1 border border-hairline text-ink-subtle hover:text-ink hover:bg-surface-2 hover:border-hairline-strong transition-colors"
                  >
                    {q.label}
                  </Link>
                ))}
              </div>

              {subAnchors && (
                <>
                  <span className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-wider text-ink-tertiary">
                    {isAgency ? "Agency Sections" : isAcademy ? "Academy Sections" : "Game Dev Sections"}
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 px-1">
                    {subAnchors.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2.5 text-sm bg-surface-1 border border-hairline text-ink-subtle hover:text-ink hover:bg-surface-2 hover:border-hairline-strong transition-colors"
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}

              <Button href={cta.href} onClick={() => setOpen(false)} className="mt-4 w-full justify-center shadow-md shadow-primary/20">
                {cta.label}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Contextual sub-bar - like Apple second row */}
      {subAnchors && (
        <div className="hidden md:block border-b border-hairline bg-surface-1/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 h-10 flex items-center gap-1 overflow-x-auto scrollbar-none">
            <span className="text-xs font-semibold text-ink-tertiary mr-3 shrink-0 hidden lg:inline-flex">{isAgency ? "Medinova Growth" : isAcademy ? "Medinova Academy" : "Game Studio"}</span>
            {subAnchors.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-ink-subtle hover:text-ink hover:bg-surface-2 transition-colors whitespace-nowrap"
              >
                {a.label}
              </Link>
            ))}
            <span className="ml-auto hidden lg:inline-flex items-center gap-2 text-xs text-ink-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              {isAgency ? "Available for new projects" : isAcademy ? "Live online • 7+" : "Unity C# • WebGL"}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
