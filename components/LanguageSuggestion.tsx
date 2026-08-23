"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { LANGS, Lang } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

const FLAG_KEY = "medinova-lang-prompted";

/** Native names — readable in their own language, no translation needed. */
const NATIVE_LABELS: Record<Lang, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

const FLAGS: Record<Lang, string> = {
  en: "/images/flags/gb.svg",
  fr: "/images/flags/fr.svg",
  ar: "/images/flags/sa.svg",
};

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("ar")) return "ar";
  return "en";
}

function hasLangCookie(): boolean {
  return document.cookie
    .split(";")
    .some((c) => c.trim().startsWith("medinova-lang="));
}

/**
 * First-visit language picker rendered as a centered modal — a portrait stack
 * of language rows on mobile, a landscape grid of flag cards on desktop.
 * The choice is persisted (cookie + localStorage flag) so it never nags again.
 */
export default function LanguageSuggestion() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [suggested, setSuggested] = useState<Lang>("en");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(FLAG_KEY) || hasLangCookie()) return;
      // Client-only detection: must run after mount to stay SSR/hydration-safe.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSuggested(detectLang());
      setOpen(true);
      trackEvent("language_prompt_shown", { served: lang });
    } catch {
      /* storage unavailable — never nag */
    }
  }, [lang]);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(FLAG_KEY, "1");
    } catch {
      /* ignore */
    }
    trackEvent("language_prompt_dismissed");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const choose = (l: Lang) => {
    try {
      window.localStorage.setItem(FLAG_KEY, "1");
    } catch {
      /* ignore */
    }
    trackEvent("language_prompt_choice", { lang: l });
    setOpen(false);
    setLang(l);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.languagePrompt.dialogLabel}
        tabIndex={-1}
        className="relative w-full max-w-[340px] sm:max-w-xl rounded-2xl border border-hairline bg-surface-1 shadow-2xl outline-none p-5 pt-4 sm:p-7"
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 end-3 p-2 -m-1 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-md text-ink-tertiary hover:text-ink hover:bg-surface-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="font-display text-base sm:text-lg font-semibold text-ink text-center px-6 sm:px-10">
          Choose your language · Choisissez votre langue · اختر لغتك
        </p>
        <p className="mt-1 text-xs text-ink-tertiary text-center">
          {t.languagePrompt.helper}
        </p>

        <div className="mt-5 flex flex-col gap-2.5 sm:grid sm:grid-cols-3 sm:gap-4">
          {LANGS.map((l) => {
            const isActive = l === suggested;
            return (
              <button
                key={l}
                onClick={() => choose(l)}
                aria-label={t.languagePrompt.continueIn.replace(
                  "{name}",
                  NATIVE_LABELS[l]
                )}
                className={`flex items-center gap-3 rounded-xl border p-3 text-start min-h-[56px] sm:flex-col sm:items-stretch sm:justify-start sm:min-h-0 sm:text-center transition-all active:scale-[0.98] ${
                  isActive
                    ? "bg-primary-soft border-primary/40"
                    : "border-hairline bg-canvas text-ink-muted hover:border-hairline-strong hover:bg-surface-2 hover:text-ink"
                }`}
              >
                <span
                  className={`relative block shrink-0 overflow-hidden rounded-md border w-11 h-8 sm:w-full sm:h-auto sm:aspect-[4/3] sm:rounded-lg ${
                    isActive ? "border-primary/30" : "border-hairline"
                  }`}
                >
                  <Image
                    src={FLAGS[l]}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 150px, 44px"
                    className="object-cover"
                    unoptimized
                  />
                </span>

                <span className="flex items-center gap-2 flex-1 sm:flex-none sm:mt-2 sm:justify-center text-sm font-semibold">
                  {isActive && (
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  )}
                  {NATIVE_LABELS[l]}
                </span>

                <svg
                  className="w-4 h-4 shrink-0 text-ink-tertiary rtl:rotate-180 sm:hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
