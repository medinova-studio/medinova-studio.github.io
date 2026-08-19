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
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {hero.badge}
          </span>

          <h1 className="mt-7 font-display text-4xl sm:text-6xl lg:text-[4rem] font-extrabold text-ink leading-[1.05] tracking-tight text-balance">
            {hero.headline}
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-ink-subtle leading-relaxed max-w-2xl mx-auto">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={academyWhatsAppUrl(t.academy.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-whatsapp text-white text-[15px] font-semibold shadow-lg shadow-whatsapp/25 hover:bg-whatsapp-hover active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {hero.cta}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 max-w-2xl mx-auto">
            {hero.trust.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <div
                  key={item.title}
                  className="flex items-center justify-center gap-2.5 text-center sm:text-start"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <p>
                    <span className="block text-sm font-semibold text-ink leading-snug">
                      {item.title}
                    </span>
                    <span className="block text-xs text-ink-subtle leading-snug">
                      {item.desc}
                    </span>
                  </p>
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