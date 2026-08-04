"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/lib/LanguageContext";
import { LANGS, LANG_LABELS } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const service = data.get("service") as string;
    const langPref = data.get("langPref") as string;
    const message = data.get("message") as string;

    setStatus("sending");
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0ALanguage: ${langPref}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:mounir@medinovastudio.com?subject=${encodeURIComponent(
      `New Inquiry — ${service}`
    )}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 scroll-mt-16">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-4">
              {t.contact.badge}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
              {t.contact.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mounir@medinovastudio.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                  <svg className="w-4 h-4 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>
                  <span className="block text-[11px] text-slate-500">{t.contact.emailLabel}</span>
                  mounir@medinovastudio.com
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                {t.contact.location}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-500 mb-1.5">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder={t.contact.namePh}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-500 mb-1.5">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder={t.contact.emailPh}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-500 mb-1.5">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder={t.contact.phonePh}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm text-white"
                  />
                </div>
                <div>
                  <label htmlFor="langPref" className="block text-xs font-medium text-slate-500 mb-1.5">
                    {t.contact.langPref}
                  </label>
                  <select
                    name="langPref"
                    id="langPref"
                    defaultValue=""
                    className="form-input w-full px-4 py-3 rounded-lg text-sm text-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-ink-800">
                      {t.contact.langPrefPh}
                    </option>
                    {LANGS.map((l) => (
                      <option key={l} value={l} className="bg-ink-800">
                        {LANG_LABELS[l]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-medium text-slate-500 mb-1.5">
                  {t.contact.service}
                </label>
                <select
                  name="service"
                  id="service"
                  required
                  defaultValue=""
                  className="form-input w-full px-4 py-3 rounded-lg text-sm text-white appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-ink-800">
                    {t.contact.servicePh}
                  </option>
                  {t.contact.services.map((s) => (
                    <option key={s} value={s} className="bg-ink-800">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-500 mb-1.5">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder={t.contact.messagePh}
                  className="form-input w-full px-4 py-3 rounded-lg text-sm text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-lg bg-cyan text-ink-950 font-semibold text-sm hover:bg-cyan/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-cyan/20 disabled:opacity-60"
              >
                {status === "sending"
                  ? t.contact.sending
                  : status === "sent"
                  ? t.contact.sent
                  : t.contact.send}
              </button>

              {status === "sent" && (
                <p className="text-xs text-emerald-400">{t.contact.sentNote}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
