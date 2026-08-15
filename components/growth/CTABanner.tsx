"use client";

import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  const { t } = useLang();
  const { cta } = t.agency;

  return (
    <section className="relative py-20 sm:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-primary/60 via-primary/15 to-transparent p-px">
          <div className="relative overflow-hidden rounded-[23px] bg-canvas/80 px-6 py-16 sm:px-16 sm:py-20 text-center backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] max-w-full rounded-full bg-primary/20 blur-[110px]" />

            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink tracking-tight text-balance">
                {cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-ink-subtle leading-relaxed">
                {cta.subheadline}
              </p>
              <Button
                href="#contact"
                className="group mt-9 px-8 py-4 shadow-lg shadow-primary/30 hover:shadow-[0_0_45px_-6px_rgba(130,143,255,0.75)]"
              >
                {cta.button}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}