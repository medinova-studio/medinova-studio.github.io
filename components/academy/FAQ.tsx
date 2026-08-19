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
    <section id="faq" className="relative py-16 sm:py-20 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="text-center lg:text-start">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
              {faq.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight text-balance">
              {faq.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-subtle max-w-xl mx-auto lg:mx-0 mt-4">
              {faq.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-hairline bg-surface-1 overflow-hidden transition-colors duration-300 hover:border-hairline-strong"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                  >
                    <span className="text-base sm:text-lg font-semibold text-ink leading-snug">
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
                      <p className="px-6 pb-3 text-[15px] text-ink-subtle leading-relaxed">
                        {item.a}
                      </p>
                      <a
                        href={academyWhatsAppUrl(item.q)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-2 border border-hairline text-xs font-medium text-ink-muted hover:border-hairline-strong hover:text-ink transition-all"
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
      </div>
    </section>
  );
}