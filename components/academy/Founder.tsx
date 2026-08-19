"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function Founder() {
  const { t } = useLang();
  const { founder } = t.academy;

  return (
    <section
      id="founder"
      className="relative py-16 sm:py-20 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <figure className="max-w-sm sm:max-w-md mx-auto w-full lg:max-w-none rounded-3xl border border-hairline bg-surface-1 p-3 shadow-[0_24px_60px_rgba(20,21,26,0.08)] transition-colors duration-300 hover:border-hairline-strong">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2">
                <Image
                  src="/images/academy/founder.jpg"
                  alt={founder.caption}
                  fill
                  sizes="(min-width:1024px) 40vw, (min-width:640px) 50vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="px-2 py-3 text-sm text-ink-muted leading-relaxed text-center lg:text-start">
                {founder.caption}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="text-center lg:text-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {founder.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-5 tracking-tight text-balance">
                {founder.title}
              </h2>
              <p className="text-base sm:text-lg text-ink-subtle leading-relaxed max-w-xl mx-auto lg:mx-0">
                {founder.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}