"use client";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLang } from "@/lib/LanguageContext";
import { academyWhatsAppUrl } from "@/lib/academy";

export default function FinalCta() {
  const { t } = useLang();
  const { finalCta } = t.academy;

  return (
    <section
      id="cta"
      className="relative py-16 sm:py-20 border-t border-hairline"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-focus px-6 py-12 sm:px-12 sm:py-16 text-center shadow-[0_24px_60px_rgba(36,85,230,0.25)]">
          <div className="pointer-events-none absolute -top-24 -end-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -start-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          {finalCta.scarcity && (
            <span className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-ink text-xs font-semibold">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-ink opacity-60" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-accent-ink" />
              </span>
              {finalCta.scarcity}
            </span>
          )}
          <h2 className="relative mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            {finalCta.title}
          </h2>
          <p className="relative mt-4 text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            {finalCta.subtitle}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={academyWhatsAppUrl(t.academy.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-whatsapp text-white text-sm font-semibold shadow-lg shadow-black/20 hover:bg-whatsapp-hover active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {finalCta.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}