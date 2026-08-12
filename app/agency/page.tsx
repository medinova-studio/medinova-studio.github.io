"use client";

import { Check } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import Button from "@/components/ui/Button";

export default function AgencyPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink mb-6 tracking-tight">
            {t.agency.title}
          </h1>
          <p className="text-sm sm:text-base text-ink-subtle mb-12">
            {t.agency.subtitle}
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {t.agency.tiers.map((tier, index) => (
              <div
                key={index}
                className="rounded-lg border border-hairline bg-surface-1 p-8 transition-all duration-300 hover:border-hairline-strong hover:bg-surface-2"
              >
                <h2 className="font-display text-2xl sm:text-3xl lg:text-xl font-semibold text-ink mb-4 tracking-tight">
                  {tier.name}
                </h2>
                <p className="text-sm sm:text-base text-ink-subtle mb-4">
                  {tier.price}
                </p>
                <ul className="space-y-2 text-sm text-ink-subtle">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/#contact"
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  {t.agency.getStarted}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}