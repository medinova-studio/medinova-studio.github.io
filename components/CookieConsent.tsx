"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { COOKIE_CONSENT_KEY } from "@/components/ConsentAnalytics";

const COPY = {
  en: {
    text: "We use analytics and advertising cookies to improve the site and measure campaigns.",
    accept: "Accept",
    decline: "Decline",
    manage: "Cookie settings",
  },
  fr: {
    text: "Nous utilisons des cookies d'analyse et de publicité pour améliorer le site et mesurer les campagnes.",
    accept: "Accepter",
    decline: "Refuser",
    manage: "Paramètres des cookies",
  },
  ar: {
    text: "نستخدم ملفات تعريف الارتباط للتحليلات والإعلانات لتحسين الموقع وقياس الحملات.",
    accept: "قبول",
    decline: "رفض",
    manage: "إعدادات ملفات تعريف الارتباط",
  },
} as const;

export default function CookieConsent() {
  const pathname = usePathname();
  const firstSegment = pathname?.split("/").filter(Boolean)[0];
  const lang = firstSegment === "fr" || firstSegment === "ar" ? firstSegment : "en";
  const copy = COPY[lang];
  const [choice, setChoice] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
        setChoice(saved);
        setOpen(!saved);
      } catch {
        setOpen(true);
      }
    });
  }, []);

  const save = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // Consent controls remain usable even if storage is unavailable.
    }
    setChoice(value);
    setOpen(false);
    window.dispatchEvent(new Event("medinova-consent-changed"));
  };

  return (
    <>
      {open && (
        <aside
          role="dialog"
          aria-label={copy.manage}
          className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-3xl rounded-2xl border border-hairline-strong bg-surface-1 p-4 shadow-[0_16px_48px_rgba(16,26,51,0.18)] sm:bottom-6 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-ink-subtle">{copy.text}</p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => save("declined")}
                className="rounded-md border border-hairline bg-surface-1 px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-2"
              >
                {copy.decline}
              </button>
              <button
                type="button"
                onClick={() => save("accepted")}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
              >
                {copy.accept}
              </button>
            </div>
          </div>
        </aside>
      )}
      {choice && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-3 left-3 z-[60] hidden rounded-md border border-hairline bg-surface-1 px-3 py-2 text-xs font-semibold text-ink-subtle shadow sm:block"
        >
          {copy.manage}
        </button>
      )}
    </>
  );
}
