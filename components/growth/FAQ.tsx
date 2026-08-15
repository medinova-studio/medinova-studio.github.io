"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import SectionHeader from "@/components/growth/SectionHeader";

export default function FAQ() {
  const { t } = useLang();
  const { faq } = t.agency;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 py-20 sm:py-28 border-t border-hairline"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <SectionHeader badge={faq.badge} title={faq.title} />

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
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="text-sm sm:text-base font-medium text-ink leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-ink-muted transition-transform duration-300 ${
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
                    <p className="px-5 pb-5 text-sm text-ink-subtle leading-relaxed">
                      {item.a}
                    </p>
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