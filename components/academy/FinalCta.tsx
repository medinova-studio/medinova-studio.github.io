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
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="card-accent-yellow rounded-2xl border border-hairline bg-surface-1 px-6 py-12 sm:px-12 sm:py-16 text-center transition-colors duration-300 hover:border-hairline-strong">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance">
            {finalCta.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-xl mx-auto mt-4 leading-relaxed">
            {finalCta.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={academyWhatsAppUrl(t.academy.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-whatsapp text-white text-sm font-semibold shadow-lg shadow-whatsapp/25 hover:bg-whatsapp-hover active:scale-[0.98] transition-all"
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