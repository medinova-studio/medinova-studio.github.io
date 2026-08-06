"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      projectType: String(data.get("projectType") ?? "").trim(),
      budget: String(data.get("budget") ?? "").trim(),
      readiness: String(data.get("readiness") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Request failed.");
      }
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 10000);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Request failed."
      );
      setTimeout(() => setSubmitError(null), 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectClass =
    "form-input w-full px-3 py-2 rounded-md text-sm text-ink appearance-none cursor-pointer";

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-hairline text-ink-muted text-xs font-medium mb-4">
              {t.contact.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-5 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-subtle leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@medinovastudio.com"
                className="flex items-center gap-3 text-sm text-ink-subtle hover:text-ink transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-surface-2 border border-hairline flex items-center justify-center flex-shrink-0 group-hover:border-hairline-strong transition-colors">
                  <svg className="w-4 h-4 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>
                  <span className="block text-[11px] text-ink-tertiary">{t.contact.emailLabel}</span>
                  contact@medinovastudio.com
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm text-ink-subtle">
                <div className="w-10 h-10 rounded-md bg-surface-2 border border-hairline flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {t.contact.location}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border border-hairline bg-surface-1 p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder={t.contact.namePh}
                    className="form-input w-full px-3 py-2 rounded-md text-sm text-ink"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder={t.contact.emailPh}
                    className="form-input w-full px-3 py-2 rounded-md text-sm text-ink"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                  {t.contact.service}
                </label>
                <select name="projectType" id="projectType" required defaultValue="" className={selectClass}>
                  <option value="" disabled className="bg-surface-1">
                    {t.contact.servicePh}
                  </option>
                  {t.contact.services.map((s) => (
                    <option key={s} value={s} className="bg-surface-1">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.budget}
                  </label>
                  <select name="budget" id="budget" required defaultValue="" className={selectClass}>
                    <option value="" disabled className="bg-surface-1">
                      {t.contact.budgetPh}
                    </option>
                    {t.contact.budgets.map((b) => (
                      <option key={b} value={b} className="bg-surface-1">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="readiness" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.readiness}
                  </label>
                  <select name="readiness" id="readiness" required defaultValue="" className={selectClass}>
                    <option value="" disabled className="bg-surface-1">
                      {t.contact.readinessPh}
                    </option>
                    {t.contact.readinessOptions.map((r) => (
                      <option key={r} value={r} className="bg-surface-1">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder={t.contact.messagePh}
                  className="form-input w-full px-3 py-2 rounded-md text-sm text-ink resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-md bg-primary text-white font-medium text-sm hover:bg-primary-hover active:scale-[0.98] transition-all duration-200 disabled:opacity-60"
              >
                {isSubmitting && (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>

              {isSubmitted && (
                <p className="text-xs text-success">{t.contact.sent}</p>
              )}
              {submitError && (
                <p className="text-xs text-[#ff3b30]">
                  {submitError}{" "}
                  <a href="mailto:contact@medinovastudio.com" className="underline hover:text-ink">
                    contact@medinovastudio.com
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
