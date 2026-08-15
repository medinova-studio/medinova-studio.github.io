"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const AGENCY_HREFS = [
  "/agency#solutions",
  "/agency#solutions",
  "/agency#solutions",
  "/agency#growth-framework",
] as const;

const GAME_DEV_HREFS = [
  "/#portfolio",
  "/#services",
  "/#services",
  "/#portfolio",
] as const;

const ACADEMY_HREFS = [
  "/academy#tracks",
  "/academy#tracks",
  "/academy#certification",
  "/academy#student-projects",
] as const;

const LEGAL_HREFS = ["/privacy", "/terms"] as const;

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/medinova-studio/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MedinovaStudio",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="relative border-t border-hairline bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand & parent company */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" aria-label="Medinova Studio" className="inline-block">
              <img
                src="/images/logo.svg"
                alt="Medinova Studio logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-subtle">
              {f.mission}
            </p>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-ink-subtle">
              <MapPin className="h-4 w-4 text-ink-tertiary" aria-hidden="true" />
              {f.location}
            </p>
            <a
              href="mailto:contact@medinovastudio.com"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-subtle transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4 text-ink-tertiary" aria-hidden="true" />
              {f.support}: contact@medinovastudio.com
            </a>
          </div>

          {/* B2B Growth Agency */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {f.colAgency}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.agencyLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={AGENCY_HREFS[i]}
                    className="text-sm text-ink-subtle transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/agency#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
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
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {f.colGameDev}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.gameDevLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={GAME_DEV_HREFS[i]}
                    className="text-sm text-ink-subtle transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medinova Academy */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {f.colAcademy}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.academyLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={ACADEMY_HREFS[i]}
                    className="text-sm text-ink-subtle transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust, Legal & Compliance */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {f.colLegal}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.legalLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={LEGAL_HREFS[i]}
                    className="text-sm text-ink-subtle transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-hairline pt-4 text-xs leading-relaxed text-ink-tertiary">
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
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-surface-1 text-ink-subtle transition-colors hover:border-hairline-strong hover:text-ink"
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
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-[11px] text-ink-tertiary sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Medinova Studio. {f.rights}
          </p>
          <p>{f.location}</p>
        </div>
      </div>
    </footer>
  );
}