"use client";

import { Languages, MonitorPlay, Users } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLang } from "@/lib/LanguageContext";
import { academyWhatsAppUrl } from "@/lib/academy";

const trustIcons = [Users, Languages, MonitorPlay];

export default function Hero() {
  const { t } = useLang();
  const { hero } = t.academy;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/zellige.svg')] bg-[size:280px] opacity-70 [mask-image:radial-gradient(ellipse_90%_85%_at_50%_0%,#000_15%,transparent_78%)]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold text-ink leading-[1.1] tracking-tight text-balance">
            {hero.headline}
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-ink-subtle leading-relaxed max-w-2xl mx-auto">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={academyWhatsAppUrl(t.academy.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-whatsapp text-white text-sm font-semibold shadow-lg shadow-whatsapp/25 hover:bg-whatsapp-hover active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {hero.cta}
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {hero.trust.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-lg border border-hairline bg-surface-1 p-4 text-start transition-colors duration-300 hover:border-hairline-strong"
                >
                  <div className="w-9 h-9 flex-shrink-0 rounded-md bg-surface-2 border border-hairline flex items-center justify-center">
                    <Icon className="w-5 h-5 text-ink-muted" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-ink leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-ink-subtle leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />
    </section>
  );
}