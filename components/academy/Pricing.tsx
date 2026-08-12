"use client";

import { useState } from "react";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLang } from "@/lib/LanguageContext";
import { academyWhatsAppUrl } from "@/lib/academy";

const LEVEL_NAMES = ["START", "BUILD", "MASTER"];

const formatPrice = (n: number) =>
  String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default function Pricing() {
  const { t } = useLang();
  const { pricing } = t.academy;

  const [pacing, setPacing] = useState<0 | 1>(0);
  const [billing, setBilling] = useState<0 | 1>(0);

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
            {pricing.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {pricing.title}
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div
              role="group"
              className="flex flex-wrap items-center justify-center rounded-full border border-hairline bg-surface-1 p-1"
            >
              {pricing.pacingOptions.map((option, idx) => {
                const active = pacing === idx;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setPacing(idx as 0 | 1)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      active
                        ? "bg-surface-2 text-ink"
                        : "text-ink-subtle hover:text-ink"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div
              role="group"
              className="flex flex-wrap items-center justify-center rounded-full border border-hairline bg-surface-1 p-1"
            >
              {pricing.periodOptions.map((option, idx) => {
                const active = billing === idx;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setBilling(idx as 0 | 1)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      active
                        ? "bg-surface-2 text-ink"
                        : "text-ink-subtle hover:text-ink"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {[0, 1, 2].map((i) => {
            const level = pricing.levelLabels[i];
            const name = LEVEL_NAMES[i];
            const featured = i === 2;
            const rate = pricing.rates[i];
            const isIntensive = pacing === 1;
            const isQuarterly = billing === 1;
            const unitPrice = isIntensive ? rate.intensive : rate.monthly;
            const price = isQuarterly
              ? isIntensive
                ? Math.round(rate.intensive * 3 * 0.85)
                : rate.quarterly
              : unitPrice;
            const unitLabel = isQuarterly
              ? pricing.quarterlyLabel
              : pricing.monthlyLabel;
            const subtext = isQuarterly
              ? pricing.billedQuarterly.replace("{total}", formatPrice(price))
              : pricing.billedMonthly.replace(
                  "{sessions}",
                  isIntensive ? "2" : "1"
                );

            return (
              <div
                key={level}
                className={`relative flex flex-col rounded-lg border p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  featured
                    ? "border-hairline-strong bg-surface-2"
                    : "border-hairline bg-surface-1 hover:border-hairline-strong hover:bg-surface-2"
                }`}
              >
                {featured && (
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-3 border border-hairline-strong text-ink text-[10px] font-bold tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    {pricing.featuredBadge}
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-xs font-bold tracking-wider text-ink-muted uppercase mb-1">
                    {level} — {name}
                  </p>
                  <p className="text-sm text-ink-subtle leading-relaxed">
                    {pricing.tierDesc[i]}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-display text-4xl font-semibold text-ink tracking-tight">
                    {formatPrice(price)}
                    <span className="text-lg font-medium text-ink-subtle ml-1.5 rtl:ml-0 rtl:mr-1.5">
                      {unitLabel}
                    </span>
                  </p>
                  <p className="mt-1.5 text-xs text-ink-tertiary">{subtext}</p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2.5">
                    {pricing.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-ink-muted leading-snug"
                      >
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href={academyWhatsAppUrl(
                      t.academy.whatsapp.levelMessages[i]
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold transition-all active:scale-[0.98] ${
                      featured
                        ? "bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:bg-whatsapp-hover"
                        : "bg-whatsapp/10 border border-whatsapp/40 text-whatsapp hover:bg-whatsapp/15"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    {t.academy.whatsapp.registerCta}
                  </a>
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-subtle text-center">
                    <ShieldCheck className="w-4 h-4 text-success" />
                    <span className="font-medium text-ink">
                      {pricing.guaranteeStrong}
                    </span>
                    {pricing.guarantee}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
