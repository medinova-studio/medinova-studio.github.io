"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-white/5 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
              <span className="text-ink-950 font-bold text-xs font-display">M</span>
            </div>
            <span className="font-display font-bold text-white text-sm">
              MEDINOVA <span className="text-cyan">STUDIO</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 text-xs text-slate-600">
            <Link href="/agency" className="hover:text-slate-400 transition-colors">{t.nav.offers}</Link>
            <Link href="/games" className="hover:text-slate-400 transition-colors">{t.nav.games}</Link>
            <Link href="/academy" className="hover:text-slate-400 transition-colors">{t.nav.academy}</Link>
            <Link href="/#contact" className="hover:text-slate-400 transition-colors">{t.nav.contact}</Link>
          </div>

          <p className="text-[11px] text-slate-600">
            &copy; {new Date().getFullYear()} Medinova Studio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
