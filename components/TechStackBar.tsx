"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function TechStackBar() {
  const { t } = useLang();

  return (
    <section className="border-b border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-ink-tertiary mb-5">
            {t.tech.label}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {t.tech.badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-md bg-surface-2 border border-hairline text-ink-muted text-xs font-medium"
              >
                {b}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-ink-tertiary">{t.tech.proof}</p>
        </Reveal>
      </div>
    </section>
  );
}
