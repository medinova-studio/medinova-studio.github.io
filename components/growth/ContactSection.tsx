"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/growth/SectionHeader";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const AGENCY_WHATSAPP_NUMBER = "212703702976";

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

const buildSchema = (errors: {
  requiredName: string;
  requiredCompany: string;
  requiredEmail: string;
  invalidEmail: string;
  requiredScope: string;
}) =>
  z.object({
    name: z.string().min(1, errors.requiredName),
    company: z.string().min(1, errors.requiredCompany),
    email: z.string().min(1, errors.requiredEmail).email(errors.invalidEmail),
    scope: z.string().min(1, errors.requiredScope),
    website: z.string().optional(),
  });

export default function ContactSection() {
  const { t } = useLang();
  const { contact } = t.agency;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const schema = useMemo(
    () =>
      buildSchema({
        requiredName: contact.form.name,
        requiredCompany: contact.form.company,
        requiredEmail: contact.form.email,
        invalidEmail: contact.form.email,
        requiredScope: contact.form.scope,
      }),
    [contact.form]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      scope: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (payload) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/agency-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Request failed.");
      }
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 10000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Request failed.");
      setTimeout(() => setSubmitError(null), 10000);
    } finally {
      setIsSubmitting(false);
    }
  });

  const whatsappUrl = `https://wa.me/${AGENCY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  const fieldClass =
    "form-input w-full px-3 py-2.5 rounded-md text-sm text-ink bg-surface-1 border border-hairline placeholder:text-ink-tertiary";
  const inputErrorClass = "!border-[#ff3b30]";
  const errorTextClass = "mt-1.5 text-xs text-[#ff3b30]";

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 py-20 sm:py-28 border-t border-hairline"
    >
      <div className="pointer-events-none absolute top-1/4 left-0 h-[360px] w-[360px] rounded-full bg-primary/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info + direct contact */}
          <Reveal>
            <div>
              <SectionHeader
                badge={contact.badge}
                title={contact.title}
                subtitle={contact.subtitle}
              />

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:contact@medinovastudio.com"
                  className="inline-flex items-center gap-2 rounded-md border border-hairline bg-surface-1 px-4 py-3 text-sm text-ink-subtle hover:text-ink hover:border-hairline-strong transition-all"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-xs text-ink-tertiary">
                    {contact.emailLabel}
                  </span>
                  <span className="font-medium text-ink">
                    contact@medinovastudio.com
                  </span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-whatsapp text-white text-sm font-semibold shadow-lg shadow-whatsapp/25 hover:bg-whatsapp-hover active:scale-[0.98] transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {contact.whatsappLabel}
                </a>
              </div>
            </div>
          </Reveal>

          {/* B2B form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-hairline bg-surface-1/70 p-6 sm:p-8 backdrop-blur-xl">
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
                    <label
                      htmlFor="agency-name"
                      className="block text-xs font-medium text-ink-tertiary mb-1.5"
                    >
                      {contact.form.name}
                    </label>
                    <input
                      id="agency-name"
                      type="text"
                      placeholder={contact.form.namePh}
                      aria-invalid={!!errors.name}
                      className={cn(fieldClass, errors.name && inputErrorClass)}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className={errorTextClass}>{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="agency-company"
                      className="block text-xs font-medium text-ink-tertiary mb-1.5"
                    >
                      {contact.form.company}
                    </label>
                    <input
                      id="agency-company"
                      type="text"
                      placeholder={contact.form.companyPh}
                      aria-invalid={!!errors.company}
                      className={cn(fieldClass, errors.company && inputErrorClass)}
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className={errorTextClass}>{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="agency-email"
                    className="block text-xs font-medium text-ink-tertiary mb-1.5"
                  >
                    {contact.form.email}
                  </label>
                  <input
                    id="agency-email"
                    type="email"
                    placeholder={contact.form.emailPh}
                    aria-invalid={!!errors.email}
                    className={cn(fieldClass, errors.email && inputErrorClass)}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className={errorTextClass}>{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="agency-scope"
                    className="block text-xs font-medium text-ink-tertiary mb-1.5"
                  >
                    {contact.form.scope}
                  </label>
                  <textarea
                    id="agency-scope"
                    rows={5}
                    placeholder={contact.form.scopePh}
                    aria-invalid={!!errors.scope}
                    className={cn(
                      fieldClass,
                      "resize-none",
                      errors.scope && inputErrorClass
                    )}
                    {...register("scope")}
                  />
                  {errors.scope && (
                    <p className={errorTextClass}>{errors.scope.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting && (
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  )}
                  {isSubmitting ? contact.form.submitting : contact.form.submit}
                </Button>

                {isSubmitted && (
                  <p role="status" className="text-xs text-success">
                    {contact.form.sent}
                  </p>
                )}
                {submitError && (
                  <p className="text-xs text-[#ff3b30]">
                    {submitError}{" "}
                    <a
                      href="mailto:contact@medinovastudio.com"
                      className="underline hover:text-ink"
                    >
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