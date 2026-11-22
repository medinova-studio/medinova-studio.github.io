import type { Lang } from "@/lib/i18n";

/**
 * Single source of truth for academy pricing.
 *
 * Prices are identical across all seven courses, so they live here rather than
 * being duplicated into `lib/courses.ts` or into 21 translation entries. Every
 * figure below is computed rather than hand-typed into UI copy, so changing a
 * price keeps the session count and per-session claims consistent automatically.
 */
export const PRICING = {
  /** Length of one live session, in minutes. */
  sessionMinutes: 90,
  /** Live sessions per month. */
  sessionsPerMonth: 4,
  /** Term length of the discounted plan, in months. */
  termMonths: 3,
  /** Price for a single month of access. */
  monthly: 300,
  /** Price paid up front for the term plan. */
  term: 800,
  currency: "MAD",
} as const;

/** Live sessions included in the term plan. */
export const TERM_SESSIONS = PRICING.sessionsPerMonth * PRICING.termMonths;

/** Total cost of the term plan if it were billed month to month. */
export const TERM_LIST_COST = PRICING.monthly * PRICING.termMonths;

/** Amount saved by choosing the term plan. */
export const TERM_SAVING = TERM_LIST_COST - PRICING.term;

/**
 * Effective price of one session, in whole dirhams.
 *
 * Rounded because these are advertised approximations — 800 / 12 is 66.67, and
 * quoting a fractional dirham reads as false precision on a pricing page.
 */
export const PER_SESSION_MONTHLY = Math.round(
  PRICING.monthly / PRICING.sessionsPerMonth
);

export const PER_SESSION_TERM = Math.round(PRICING.term / TERM_SESSIONS);

export type PricingPlan = "monthly" | "term";

/**
 * Formats a price with its currency in the reading convention of a locale.
 *
 * `300 MAD` / `300 DH` / `300 درهم` — MAD is the ISO code for the dirham and is
 * what international payment providers expect, while the local short form is
 * what a Moroccan parent reads most naturally.
 *
 * Digits stay Western in every locale. Arabic-script Morocco writes Arabic text
 * with `0-9`, not the Eastern Arabic-Indic numerals used in Egypt and the Gulf,
 * and French/English lessons make Western digits the clearer choice anyway.
 */
export function formatPrice(amount: number, lang: Lang): string {
  const value = Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
  if (lang === "ar") return `${value} درهم`;
  if (lang === "fr") return `${value} DH`;
  return `${value} ${PRICING.currency}`;
}

/**
 * Formats a session length as `1:30` (en/ar) or `1h30` (fr).
 *
 * Arabic uses `:` rather than the letter `h`, which would sit awkwardly inside
 * the right-to-left run.
 */
export function formatSessionLength(lang: Lang): string {
  const hours = Math.floor(PRICING.sessionMinutes / 60);
  const minutes = PRICING.sessionMinutes % 60;
  const mm = String(minutes).padStart(2, "0");
  return `${hours}${lang === "fr" ? "h" : ":"}${mm}`;
}

/**
 * Substitutes `{placeholder}` tokens in a translated template.
 *
 * Kept in one place so every locale can use the same token names and the call
 * sites stay readable.
 */
export function fill(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}