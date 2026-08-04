"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import {
  Lang,
  Translation,
  translations,
  RTL_LANGS,
} from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  t: Translation;
  isRTL: boolean;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof localStorage !== "undefined"
      ? (localStorage.getItem("medinova-lang") as Lang | null)
      : null;
    if (saved && ["fr", "en", "ar"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("medinova-lang", l);
    }
  }, []);

  const isRTL = RTL_LANGS.includes(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  return (
    <LangContext.Provider
      value={{ lang, t: translations[lang], isRTL, setLang }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LanguageProvider");
  }
  return ctx;
}
