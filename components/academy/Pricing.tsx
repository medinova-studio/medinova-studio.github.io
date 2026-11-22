"use client";

import { Check } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppCta from "@/components/analytics/WhatsAppCta";
import { useLang } from "@/lib/LanguageContext";
import { academyPlanWhatsAppUrl } from "@/lib/academy";
import { trackInitiateCheckout } from "@/lib/analytics";
import {
  fill,
  formatPrice,
  formatSessionLength,
  PER_SESSION_MONTHLY,
  PER_SESSION_TERM,
  PRICING,
  TERM_LIST_COST,
  TERM_SAVING,
  TERM_SESSIONS,
  type PricingPlan,
} from "@/lib/pricing";

/**
 * Optional `courseName` scopes every CTA and every WhatsApp message to the course
 * being viewed. On the academy index it is omitted, so the CTAs fall back to a
 * general academy enquiry.
 */
export default function Pricing({
  courseName,
  leadCapture = false,
}: {
  courseName?: string;
  leadCapture?: boolean;
}) {
  const { t, lang } = useLang();
  const { pricing } = t.academy;

  const length = formatSessionLength(lang);
  const saving = formatPrice(TERM_SAVING, lang);
  const termTotal = formatPrice(PRICING.term, lang);
  const monthlyTotal = formatPrice(PRICING.monthly, lang);

  /**
   * Reports plan intent to the Meta pixel and GA4. Fires on both CTA variants:
   * the WhatsApp hand-off and the in-page scroll to the lead form, since both
   * are the visitor committing to a billing cadence.
   */
  function trackCheckout(plan: PricingPlan) {
    const isTerm = plan === "term";
    trackInitiateCheckout({
      contentName: courseName ?? "Medinova Academy",
      contentId: plan,
      value: isTerm ? PRICING.term : PRICING.monthly,
      numItems: isTerm ? TERM_SESSIONS : PRICING.sessionsPerMonth,
    });
  }

  const plans: {
    key: PricingPlan;
    label: string;
    total: string;
    suffix: string;
    sessions: string;
    perSessionPrice: string;
    cta: string;
    featured: boolean;
    badges: string[];
  }[] = [
    {
      key: "monthly",
      label: pricing.monthlyLabel,
      total: monthlyTotal,
      suffix: pricing.perMonth,
      sessions: fill(pricing.monthlySessions, {
        count: PRICING.sessionsPerMonth,
        length,
      }),
      perSessionPrice: formatPrice(PER_SESSION_MONTHLY, lang),
      cta: pricing.ctaMonthly,
      featured: false,
      // Nothing to advertise: the saving only applies to the term plan, and a
      // "Save 100 MAD" badge here would contradict the monthly price shown.
      badges: [],
    },
    {
      key: "term",
      label: pricing.termLabel,
      total: termTotal,
      suffix: pricing.termTotal,
      sessions: fill(pricing.termSessions, {
        count: TERM_SESSIONS,
        length,
      }),
      perSessionPrice: formatPrice(PER_SESSION_TERM, lang),
      cta: pricing.ctaTerm,
      featured: true,
      badges: [pricing.featured, fill(pricing.saveBadge, { saving })],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative scroll-mt-28 py-16 sm:py-20 border-t border-hairline"
    >
      <div className="pointer-events-none absolute top-1/3 start-0 h-[320px] w-[320px] rounded-full bg-primary/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
            {pricing.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {fill(pricing.title, { length })}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-2xl mx-auto mt-4 leading-relaxed">
            {fill(pricing.subtitle, {
              saving,
              list: formatPrice(TERM_LIST_COST, lang),
            })}
          </p>
          <p className="mt-5 mx-auto max-w-3xl rounded-xl border border-primary/20 bg-primary-soft px-5 py-4 text-sm leading-relaxed text-ink-muted">
            {pricing.academicYearNote}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className={`rounded-xl border border-hairline border-t-[3px] bg-surface-1 shadow-[0_12px_32px_rgba(20,21,26,0.06)] ${
                plan.featured ? "border-t-accent" : "border-t-primary"
              }`}
            >
              <div
                className="h-full flex flex-col rounded-b-xl p-6 sm:p-8"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink tracking-tight">
                    {plan.label}
                  </h3>
                  {plan.badges.map((badge, i) => (
                    <span
                      key={badge}
                      className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide uppercase ${
                        plan.featured
                          ? "bg-accent-soft text-accent-ink border border-accent/40"
                          : i === 0
                          ? "bg-primary text-white"
                          : "bg-success/10 text-success border border-success/25"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mb-5">
                  <span className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                      {plan.total}
                    </span>
                    <span className="text-sm text-ink-subtle">
                      {plan.suffix}
                    </span>
                  </span>
                  {plan.featured && (
                    <p className="mt-2 text-xs text-ink-tertiary line-through">
                      {formatPrice(TERM_LIST_COST, lang)}
                    </p>
                  )}
                </div>

                <dl className="mb-6 space-y-3 rounded-xl border border-hairline bg-canvas/40 p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
                      {pricing.sessionLengthLabel}
                    </dt>
                    <dd className="text-sm font-semibold text-ink">
                      {length}
                    </dd>
                  </div>
                  <div className="h-px bg-hairline" />
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
                      {pricing.frequencyLabel}
                    </dt>
                    <dd className="text-sm font-semibold text-ink">
                      {plan.sessions}
                    </dd>
                  </div>
                  <div className="h-px bg-hairline" />
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
                      {pricing.perSessionLabel}
                    </dt>
                    <dd className="text-sm font-semibold text-ink">
                      {plan.perSessionPrice}
                    </dd>
                  </div>
                </dl>

                {leadCapture ? (
                  <a
                    href="#cta"
                    onClick={() => trackCheckout(plan.key)}
                    className="mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(36,85,230,0.28)] transition-colors hover:bg-primary-hover"
                  >
                    {plan.featured
                      ? pricing.ctaTermLead
                      : pricing.ctaMonthlyLead}
                  </a>
                ) : (
                  <WhatsAppCta
                    href={academyPlanWhatsAppUrl(lang, plan.key, courseName)}
                    source={`pricing-${plan.key}${courseName ? `-${courseName}` : ""}`}
                    onClick={() => trackCheckout(plan.key)}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all hover:bg-whatsapp-hover active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    {plan.cta}
                  </WhatsAppCta>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-hairline bg-surface-1 p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-ink">
            {pricing.includesTitle}
          </h3>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {pricing.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-ink-muted leading-snug"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                {fill(item, { length })}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-hairline pt-5 text-sm text-ink-subtle">
            {pricing.trialNote}
          </p>
        </div>
      </div>
    </section>
  );
}