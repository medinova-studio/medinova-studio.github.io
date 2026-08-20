"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLang } from "@/lib/LanguageContext";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { trackEvent, trackLeadOnce } from "@/lib/analytics";

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

const buildSchema = (errors: {
  requiredName: string;
  requiredEmail: string;
  invalidEmail: string;
  requiredService: string;
  requiredBudget: string;
  requiredReadiness: string;
  requiredMessage: string;
}) =>
  z.object({
    name: z.string().min(1, errors.requiredName),
    email: z
      .string()
      .min(1, errors.requiredEmail)
      .email(errors.invalidEmail),
    projectType: z.string().min(1, errors.requiredService),
    budget: z.string().min(1, errors.requiredBudget),
    readiness: z.string().min(1, errors.requiredReadiness),
    message: z.string().min(1, errors.requiredMessage),
    website: z.string().optional(),
  });

export default function Contact() {
  const { t } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const schema = useMemo(() => buildSchema(t.contact.errors), [t.contact.errors]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      readiness: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (payload) => {
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
      trackEvent("contact_submit", { form: "home-contact" });
      trackLeadOnce({ form: "home-contact" });
      reset();
      setTimeout(() => setIsSubmitted(false), 10000);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Request failed."
      );
      setTimeout(() => setSubmitError(null), 10000);
    } finally {
      setIsSubmitting(false);
    }
  });

  const fieldClass =
    "form-input w-full px-3 py-2 rounded-md text-sm text-ink";
  const selectClass =
    "form-input w-full px-3 py-2 rounded-md text-sm text-ink appearance-none cursor-pointer";
  const inputErrorClass = "!border-[#ff3b30]";
  const errorTextClass = "mt-1.5 text-xs text-[#ff3b30]";

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-4">
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
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-hairline bg-surface-1 p-6 sm:p-8">
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                {/* Honeypot — hidden from real users, catches bots */}
                <input
                  type="text"
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  {...register("website")}
                />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t.contact.namePh}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(fieldClass, errors.name && inputErrorClass)}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p id="name-error" className={errorTextClass}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t.contact.emailPh}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(fieldClass, errors.email && inputErrorClass)}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorTextClass}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                  {t.contact.service}
                </label>
                <select
                  id="projectType"
                  defaultValue=""
                  aria-invalid={!!errors.projectType}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                  className={cn(selectClass, errors.projectType && inputErrorClass)}
                  {...register("projectType")}
                >
                  <option value="" disabled className="bg-surface-1">
                    {t.contact.servicePh}
                  </option>
                  {t.contact.services.map((s) => (
                    <option key={s} value={s} className="bg-surface-1">
                      {s}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p id="projectType-error" className={errorTextClass}>{errors.projectType.message}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.budget}
                  </label>
                  <select
                    id="budget"
                    defaultValue=""
                    aria-invalid={!!errors.budget}
                    aria-describedby={errors.budget ? "budget-error" : undefined}
                    className={cn(selectClass, errors.budget && inputErrorClass)}
                    {...register("budget")}
                  >
                    <option value="" disabled className="bg-surface-1">
                      {t.contact.budgetPh}
                    </option>
                    {t.contact.budgets.map((b) => (
                      <option key={b} value={b} className="bg-surface-1">
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p id="budget-error" className={errorTextClass}>{errors.budget.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="readiness" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                    {t.contact.readiness}
                  </label>
                  <select
                    id="readiness"
                    defaultValue=""
                    aria-invalid={!!errors.readiness}
                    aria-describedby={errors.readiness ? "readiness-error" : undefined}
                    className={cn(selectClass, errors.readiness && inputErrorClass)}
                    {...register("readiness")}
                  >
                    <option value="" disabled className="bg-surface-1">
                      {t.contact.readinessPh}
                    </option>
                    {t.contact.readinessOptions.map((r) => (
                      <option key={r} value={r} className="bg-surface-1">
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.readiness && (
                    <p id="readiness-error" className={errorTextClass}>{errors.readiness.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-ink-tertiary mb-1.5">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t.contact.messagePh}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(fieldClass, "resize-none", errors.message && inputErrorClass)}
                  {...register("message")}
                />
                {errors.message && (
                  <p id="message-error" className={errorTextClass}>{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full"
              >
                {isSubmitting && (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {isSubmitting ? t.contact.sending : t.contact.send}
              </Button>

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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
