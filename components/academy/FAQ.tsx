"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function FAQ() {
  const { t } = useLang();
  const { faq } = t.academy;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
            {faq.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            {faq.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-4">
            {faq.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-ink-800/50 overflow-hidden transition-colors duration-300 hover:border-cyan/30"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="text-sm sm:text-base font-medium text-white leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-cyan transition-transform duration-300 ${
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
                    <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">
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
