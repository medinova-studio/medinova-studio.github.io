"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { LANGS, LANG_LABELS, type Lang } from "@/lib/i18n";
import Button from "@/components/ui/Button";

const sectionLinks = [
  { href: "#growth-framework", key: "framework" as const },
  { href: "#solutions", key: "solutions" as const },
  { href: "#packages", key: "packages" as const },
  { href: "#faq", key: "faq" as const },
];

export default function LandingHeader() {
  const { t, lang, setLang } = useLang();
  const { nav } = t.agency;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-hairline bg-canvas/90 backdrop-blur-xl"
          : "border-transparent bg-canvas/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Medinova Studio"
        >
          <img
            src="/images/logo.svg"
            alt="Medinova Studio logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-ink-subtle transition-colors duration-200 hover:text-ink"
            >
              {nav.links[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-md bg-surface-2 border border-hairline px-1 py-1 md:flex">
            {LANGS.map((l: Lang) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  lang === l ? "bg-primary text-white" : "text-ink-tertiary hover:text-ink"
                }`}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <Button
            href="#contact"
            size="sm"
            className="hidden whitespace-nowrap shadow-lg shadow-primary/25 hover:shadow-[0_0_32px_-6px_rgba(130,143,255,0.6)] sm:inline-flex"
          >
            {nav.cta}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-surface-1 text-ink-muted transition-colors hover:text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-canvas/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="mb-3 flex w-fit items-center gap-1 rounded-md bg-surface-2 border border-hairline px-1 py-1">
            {LANGS.map((l: Lang) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  lang === l ? "bg-primary text-white" : "text-ink-tertiary"
                }`}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {sectionLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-ink-subtle transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {nav.links[link.key]}
              </a>
            ))}
            <Button
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 w-full"
            >
              {nav.cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
