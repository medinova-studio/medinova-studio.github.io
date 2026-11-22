import { translations, type Lang } from "@/lib/i18n";
import {
  formatPrice,
  fill,
  PRICING,
  type PricingPlan,
} from "@/lib/pricing";

export const ACADEMY_WHATSAPP_NUMBER = "212703702976";

/**
 * Kept for callers that only need a generic "tell me more" link, such as the
 * floating WhatsApp widget. Anywhere the visitor has expressed intent — course
 * cards, pricing plans, the trial CTA — prefer `academyPlanWhatsAppUrl` or
 * `academyTrialWhatsAppUrl` so the message arrives pre-filled with context.
 */
export const ACADEMY_WHATSAPP_MESSAGE =
  "Bonjour Medinova Academy 👋 Je souhaite en savoir plus sur les cours.";

export const academyWhatsAppUrl = (
  message: string = ACADEMY_WHATSAPP_MESSAGE
) =>
  `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

/**
 * Builds a WhatsApp link for a specific course and billing plan.
 *
 * The price is interpolated from `PRICING` rather than written into the message
 * template, so a price change on the pricing cards can never drift out of sync
 * with the enquiry the button produces. The billing cadence is owned by each
 * locale's template (`{price}/mois`, `{price} لثلاثة أشهر`), so only the
 * formatted amount is passed in — appending a cadence here duplicated it.
 */
export function academyPlanWhatsAppUrl(
  lang: Lang,
  plan: PricingPlan,
  course?: string
): string {
  const { whatsapp } = translations[lang].academy;
  const isTerm = plan === "term";

  const price = formatPrice(isTerm ? PRICING.term : PRICING.monthly, lang);

  return academyWhatsAppUrl(
    course
      ? fill(isTerm ? whatsapp.termMessage : whatsapp.monthlyMessage, {
          price,
          course,
        })
      : fill(
          isTerm ? whatsapp.termGeneralMessage : whatsapp.monthlyGeneralMessage,
          { price }
        )
  );
}

/**
 * Builds a WhatsApp link for a free trial, optionally scoped to one course.
 */
export function academyTrialWhatsAppUrl(
  lang: Lang,
  course?: string
): string {
  const { whatsapp } = translations[lang].academy;

  return academyWhatsAppUrl(
    course
      ? fill(whatsapp.trialMessage, { course })
      : whatsapp.message
  );
}

/**
 * Builds the parent recommendation message from the two fields collected on
 * the Academy landing page. The website never stores or submits the details.
 */
export function academyLeadWhatsAppUrl(
  lang: Lang,
  name: string,
  age: string
): string {
  const message = fill(translations[lang].academy.leadForm.whatsappMessage, {
    name: name.trim(),
    age,
  });
  return academyWhatsAppUrl(message);
}