"use client";

import { useState, type FormEvent } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppCta from "@/components/analytics/WhatsAppCta";
import { useLang } from "@/lib/LanguageContext";
import { academyLeadWhatsAppUrl, academyTrialWhatsAppUrl } from "@/lib/academy";
import { trackEvent, trackLeadOnce } from "@/lib/analytics";

export default function FinalCta({
  courseName,
  leadCapture = false,
}: {
  courseName?: string;
  leadCapture?: boolean;
}) {
  const { t, lang } = useLang();
  const { finalCta } = t.academy;
  const { leadForm } = t.academy;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const numericAge = Number(age);

    if (!trimmedName) {
      setError(leadForm.requiredName);
      return;
    }
    if (!Number.isInteger(numericAge) || numericAge < 1 || numericAge > 99) {
      setError(leadForm.invalidAge);
      return;
    }

    const source = courseName ? "academy-course-recommendation" : "academy-recommendation";
    trackEvent("whatsapp_click", { source });
    trackLeadOnce({ source });
    window.location.assign(
      academyLeadWhatsAppUrl(lang, trimmedName, String(numericAge))
    );
  }

  if (leadCapture) {
    return (
      <section
        id="cta"
        className="relative scroll-mt-28 border-t border-hairline py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-hairline border-t-[3px] border-t-primary bg-surface-1 shadow-[0_12px_32px_rgba(20,21,26,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center bg-primary-soft p-7 sm:p-10 lg:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-surface-1 px-3 py-1.5 eyebrow text-primary">
                {leadForm.badge}
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {leadForm.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-subtle">
                {leadForm.subtitle}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col justify-center gap-5 p-7 sm:p-10 lg:p-12"
            >
              <div>
                <label
                  htmlFor="academy-parent-name"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  {leadForm.parentName}
                </label>
                <input
                  id="academy-parent-name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError("");
                  }}
                  placeholder={leadForm.parentNamePlaceholder}
                  aria-invalid={Boolean(error && !name.trim())}
                  aria-describedby={error && !name.trim() ? "academy-lead-error" : undefined}
                  className="form-input min-h-11 w-full rounded-md px-3 py-2.5 text-base text-ink"
                />
              </div>

              <div>
                <label
                  htmlFor="academy-student-age"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  {leadForm.studentAge}
                </label>
                <input
                  id="academy-student-age"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={99}
                  step={1}
                  required
                  value={age}
                  onChange={(event) => {
                    setAge(event.target.value);
                    setError("");
                  }}
                  placeholder={leadForm.studentAgePlaceholder}
                  aria-invalid={Boolean(error && name.trim())}
                  aria-describedby={error && name.trim() ? "academy-lead-error" : undefined}
                  className="form-input min-h-11 w-full rounded-md px-3 py-2.5 text-base text-ink"
                />
              </div>

              {error && (
                <p
                  id="academy-lead-error"
                  role="alert"
                  className="text-sm text-danger"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(20,21,26,0.18)] transition-colors hover:bg-whatsapp-hover"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {leadForm.submit}
              </button>
              <p className="text-xs leading-relaxed text-ink-tertiary">
                {leadForm.note}
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="cta"
      className="relative scroll-mt-28 py-16 sm:py-20 border-t border-hairline"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-focus px-6 py-12 sm:px-12 sm:py-16 text-center shadow-[0_24px_60px_rgba(36,85,230,0.25)]">
          <div className="pointer-events-none absolute -top-24 -end-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -start-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          {finalCta.scarcity && (
            <span className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-ink text-xs font-semibold">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-ink opacity-60" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-accent-ink" />
              </span>
              {finalCta.scarcity}
            </span>
          )}
          <h2 className="relative mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            {finalCta.title}
          </h2>
          <p className="relative mt-4 text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            {finalCta.subtitle}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppCta
              href={academyTrialWhatsAppUrl(lang, courseName)}
              source={courseName ? `final-cta-${courseName}` : "final-cta"}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-whatsapp text-white text-sm font-semibold shadow-lg shadow-black/20 hover:bg-whatsapp-hover active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {finalCta.cta}
            </WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}