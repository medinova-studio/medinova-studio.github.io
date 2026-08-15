"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Terms() {
  const { t } = useLang();
  const { terms } = t.agency;

  return (
    <section className="relative border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-hairline bg-surface-1/50 p-6 sm:p-8 backdrop-blur-xl">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {terms.title}
          </h3>
          <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {terms.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 border-t border-hairline pt-4 first:border-t-0 sm:first:border-t sm:[&:nth-child(2)]:border-t-0"
              >
                <dt className="text-sm font-semibold text-ink">{item.label}</dt>
                <dd className="text-sm leading-relaxed text-ink-subtle">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
