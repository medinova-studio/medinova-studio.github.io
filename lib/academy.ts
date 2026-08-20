export const ACADEMY_WHATSAPP_NUMBER = "212703702976";
export const ACADEMY_WHATSAPP_MESSAGE =
  "Bonjour Medinova Academy 👋 Je souhaite en savoir plus sur les cours.";
export const academyWhatsAppUrl = (
  message: string = ACADEMY_WHATSAPP_MESSAGE
) =>
  `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
