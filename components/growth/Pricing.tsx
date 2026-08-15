"use client";

import { Check } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/growth/SectionHeader";

export default function Pricing() {
  const { t } = useLang();
  const { pricing } = t.agency;

  return (
    <section
      id="packages"
      className="relative scroll-mt-28 py-20 sm:py-28 border-t border-hairline"
    >
      <div className="pointer-events-none absolute top-1/4 right-0 h-[360px] w-[360px] rounded-full bg-primary/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          badge={pricing.badge}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {pricing.plans.map((plan) => {
            const isFeatured = plan.featured;
            const badgeLabel = plan.badge;

            return (
              <div
                key={plan.name}
                className={
                  isFeatured
                    ? "rounded-2xl bg-gradient-to-b from-primary/60 via-primary/20 to-transparent p-px shadow-[0_0_60px_-18px_rgba(94,106,210,0.55)] md:scale-[1.03]"
                    : ""
                }
              >
                <div
                  className={`h-full flex flex-col p-6 sm:p-8 ${
                    isFeatured
                      ? "rounded-[15px] bg-surface-2"
                      : "rounded-2xl border border-hairline bg-surface-1/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-hairline-strong hover:bg-surface-2"
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink tracking-tight">
                      {plan.name}
                    </h3>
                    {badgeLabel && (
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide uppercase ${
                          isFeatured
                            ? "bg-primary text-white"
                            : "bg-surface-3 border border-hairline-strong text-ink-muted"
                        }`}
                      >
                        {badgeLabel}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-ink-muted leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="my-6 space-y-3 rounded-xl border border-hairline bg-canvas/40 p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
                        {pricing.setupLabel}
                      </span>
                      <span className="font-display text-lg font-semibold text-ink">
                        {plan.setup}
                      </span>
                    </div>
                    <div className="h-px bg-hairline" />
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
                        {pricing.retainerLabel}
                      </span>
                      <span className="flex items-baseline gap-1.5">
                        <span className="font-display text-2xl font-semibold text-primary">
                          {plan.retainer}
                        </span>
                        <span className="text-xs text-ink-subtle">
                          {pricing.perMonth}
                        </span>
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-ink-muted leading-snug"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    size="lg"
                    variant={isFeatured ? "primary" : "secondary"}
                    className={`mt-7 w-full ${
                      isFeatured
                        ? "shadow-lg shadow-primary/30 hover:shadow-[0_0_40px_-6px_rgba(130,143,255,0.7)]"
                        : ""
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
