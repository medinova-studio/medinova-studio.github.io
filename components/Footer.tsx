"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-hairline py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xs font-display">M</span>
            </div>
            <span className="font-display font-semibold text-ink text-sm">
              MEDINOVA <span className="text-primary">STUDIO</span>
            </span>
          </a>

          <div className="flex items-center gap-4 text-xs text-ink-tertiary flex-wrap justify-center">
            <a href="#portfolio" className="hover:text-ink transition-colors">{t.nav.portfolio}</a>
            <a href="#services" className="hover:text-ink transition-colors">{t.nav.services}</a>
            <a href="#contact" className="hover:text-ink transition-colors">{t.nav.contact}</a>
            <span className="opacity-40">·</span>
            <a href="/academy" className="hover:text-ink transition-colors">Academy</a>
            <a href="/agency" className="hover:text-ink transition-colors">Agency</a>
          </div>

          <p className="text-[11px] text-ink-tertiary">
            &copy; {new Date().getFullYear()} Medinova Studio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
