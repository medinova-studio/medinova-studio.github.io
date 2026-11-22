"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie } from "lucide-react";
import { COOKIE_CONSENT_KEY } from "@/components/ConsentAnalytics";
import {
  LANGUAGE_PROMPT_DISMISSED_EVENT,
  LANGUAGE_PROMPT_KEY,
} from "@/components/LanguageSuggestion";

const COPY = {
  en: {
    title: "Your privacy matters",
    text: "Essential cookies keep this site working. With your permission, analytics and advertising cookies help us understand site use and improve our campaigns.",
    privacy: "Privacy policy",
    essential: "Essential only",
    acceptAll: "Accept all",
  },
  fr: {
    title: "Votre vie privée compte",
    text: "Les cookies essentiels assurent le fonctionnement du site. Avec votre accord, les cookies d’analyse et de publicité nous aident à comprendre son utilisation et à améliorer nos campagnes.",
    privacy: "Politique de confidentialité",
    essential: "Essentiels uniquement",
    acceptAll: "Tout accepter",
  },
  ar: {
    title: "خصوصيتكم تهمنا",
    text: "تساعد ملفات تعريف الارتباط الأساسية الموقع على العمل. وبموافقتكم، تساعدنا ملفات التحليلات والإعلانات على فهم استخدام الموقع وتحسين حملاتنا.",
    privacy: "سياسة الخصوصية",
    essential: "الأساسية فقط",
    acceptAll: "قبول الكل",
  },
} as const;

export default function CookieConsent() {
  const pathname = usePathname();
  const firstSegment = pathname?.split("/").filter(Boolean)[0];
  const lang = firstSegment === "fr" || firstSegment === "ar" ? firstSegment : "en";
  const copy = COPY[lang];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      try {
        const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
        setOpen(saved !== "accepted" && saved !== "essential" && saved !== "declined");
      } catch {
        setOpen(true);
      }
    };

    try {
      const languageChosen = document.cookie
        .split(";")
        .some((cookie) => cookie.trim().startsWith("medinova-lang="));
      if (
        window.localStorage.getItem(LANGUAGE_PROMPT_KEY) ||
        languageChosen
      ) {
        syncConsent();
        return;
      }
    } catch {
      syncConsent();
      return;
    }

    window.addEventListener(LANGUAGE_PROMPT_DISMISSED_EVENT, syncConsent);
    return () =>
      window.removeEventListener(LANGUAGE_PROMPT_DISMISSED_EVENT, syncConsent);
  }, []);

  const save = (value: "accepted" | "essential") => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // Consent controls remain usable even if storage is unavailable.
    }
    setOpen(false);
    window.dispatchEvent(new Event("medinova-consent-changed"));
  };

  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-4xl overflow-hidden rounded-xl border border-hairline bg-surface-1 shadow-[0_16px_48px_rgba(16,26,51,0.18)] sm:bottom-6"
    >
      <div className="h-1 bg-primary" />
      <div className="flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary-soft text-primary sm:flex">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2
              id="cookie-consent-title"
              className="font-display text-base font-bold text-ink"
            >
              {copy.title}
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-subtle">
              {copy.text}{" "}
              <Link
                href={`/${lang}/privacy`}
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-hover"
              >
                {copy.privacy}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col-reverse gap-2 sm:flex-row md:flex-col lg:flex-row">
          <button
            type="button"
            onClick={() => save("essential")}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {copy.essential}
          </button>
          <button
            type="button"
            onClick={() => save("accepted")}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(36,85,230,0.22)] transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {copy.acceptAll}
          </button>
        </div>
      </div>
    </aside>
  );
}
