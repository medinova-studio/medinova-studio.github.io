"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const AGENCY_HREFS = (lang: string) => [
  `/${lang}/agency#solutions`,
  `/${lang}/agency#growth-framework`,
  `/${lang}/agency#packages`,
  `/${lang}/agency#faq`,
] as const;

const GAME_DEV_HREFS = (lang: string) => [
  `/${lang}/game-development#portfolio`,
  `/${lang}/game-development#services`,
  `/${lang}/game-development#portfolio`,
  `/${lang}/#contact`,
] as const;

const ACADEMY_HREFS = (lang: string) => [
  `/${lang}/academy#courses`,
  `/${lang}/academy#work`,
  `/${lang}/academy#courses`,
  `/${lang}/academy#faq`,
  `/${lang}/blog`,
] as const;

const LEGAL_HREFS = (lang: string) => [`/${lang}/privacy`, `/${lang}/terms`] as const;

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/medinova-studio/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/medinova.studio",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MedinovaStudio",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "itch.io",
    href: "https://medinova.itch.io/",
    path: "M18.825 11.43c.18-.84.3-1.68.3-2.52 0-3.42-2.78-6.2-6.2-6.2-1.47 0-2.86.52-3.95 1.44A6.2 6.2 0 0012.925 15.5c1.18 0 2.3-.33 3.26-.92a6.18 6.18 0 002.64-3.15zM3 8.9c0 .84.12 1.68.3 2.52a6.18 6.18 0 002.64 3.15 6.22 6.22 0 003.26.92 6.2 6.2 0 003.95-11.35A6.22 6.22 0 003 8.9z",
  },
];

export default function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;

  const agencyHrefs = AGENCY_HREFS(lang);
  const gameDevHrefs = GAME_DEV_HREFS(lang);
  const academyHrefs = ACADEMY_HREFS(lang);
  const legalHrefs = LEGAL_HREFS(lang);

  return (
    <footer className="relative border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand & parent company */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href={`/${lang}`} aria-label="Medinova Studio" className="inline-block">
              <img
                src="/images/logo.svg"
                alt="Medinova Studio logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B9C6DE]">
              {f.mission}
            </p>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-[#B9C6DE]">
              <MapPin className="h-4 w-4 text-[#8FA1C4]" aria-hidden="true" />
              {f.location}
            </p>
            <a
              href="mailto:contact@medinovastudio.com"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#B9C6DE] transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-[#8FA1C4]" aria-hidden="true" />
              {f.support}: contact@medinovastudio.com
            </a>
          </div>

          {/* B2B Growth Agency */}
          <div className="col-span-1">
            <h3 className="eyebrow text-accent">
              {f.colAgency}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.agencyLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={agencyHrefs[i]}
                    className="text-sm text-[#C9D4EA] transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/${lang}/agency#contact`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6E8CFF] transition-colors hover:text-[#9DB2FF]"
            >
              {f.cta}
              <ArrowRight
                className="h-4 w-4 rtl:rotate-180"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Game Dev & Interactive Tech */}
          <div className="col-span-1">
            <h3 className="eyebrow text-accent">
              {f.colGameDev}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.gameDevLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={gameDevHrefs[i]}
                    className="text-sm text-[#C9D4EA] transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medinova Academy */}
          <div className="col-span-1">
            <h3 className="eyebrow text-accent">
              {f.colAcademy}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.academyLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={academyHrefs[i]}
                    className="text-sm text-[#C9D4EA] transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust, Legal & Compliance */}
          <div className="col-span-1">
            <h3 className="eyebrow text-accent">
              {f.colLegal}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.legalLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={legalHrefs[i]}
                    className="text-sm text-[#C9D4EA] transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-[#8FA1C4]">
              {f.taxDisclaimer}
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/10 text-[#C9D4EA] transition-colors hover:border-white/40 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-[11px] text-[#8FA1C4] sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Medinova Studio. {f.rights}
          </p>
          <p>{f.location}</p>
        </div>
      </div>
    </footer>
  );
}