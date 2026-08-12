"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLang } from "@/lib/LanguageContext";
import { academyWhatsAppUrl } from "@/lib/academy";

export default function FAQ() {
  const { t } = useLang();
  const { faq } = t.academy;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
            {faq.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance">
            {faq.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-xl mx-auto mt-4">
            {faq.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-lg border border-hairline bg-surface-1 overflow-hidden transition-colors duration-300 hover:border-hairline-strong"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="text-sm sm:text-base font-medium text-ink leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-ink-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-3 text-sm text-ink-subtle leading-relaxed">
                      {item.a}
                    </p>
                    <a
                      href={academyWhatsAppUrl(item.q)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-2 border border-hairline text-[11px] font-medium text-ink-muted hover:border-hairline-strong hover:text-ink transition-all"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      {t.academy.whatsapp.quickQuestion}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
