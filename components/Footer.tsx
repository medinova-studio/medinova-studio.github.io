"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-hairline py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <Link href="/" aria-label="Medinova Studio">
            <img
              src="/images/logo.svg"
              alt="Medinova Studio logo"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-4 text-xs text-ink-tertiary flex-wrap justify-center">
            <Link href="/#portfolio" className="hover:text-ink transition-colors">{t.nav.portfolio}</Link>
            <Link href="/#services" className="hover:text-ink transition-colors">{t.nav.services}</Link>
            <Link href="/#contact" className="hover:text-ink transition-colors">{t.nav.contact}</Link>
            <span className="opacity-40">·</span>
            <Link href="/academy" className="hover:text-ink transition-colors">Academy</Link>
            <Link href="/agency" className="hover:text-ink transition-colors">Agency</Link>
          </div>

          <p className="text-[11px] text-ink-tertiary">
            &copy; {new Date().getFullYear()} Medinova Studio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
