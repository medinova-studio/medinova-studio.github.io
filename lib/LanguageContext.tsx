"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
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

export function LanguageProvider({
  children,
  lang: initialLang,
}: {
  children: ReactNode;
  lang: Lang;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    setLangState(initialLang);
    document.documentElement.lang = initialLang;
    document.documentElement.dir = RTL_LANGS.includes(initialLang)
      ? "rtl"
      : "ltr";
  }, [initialLang]);

  const setLang = useCallback(
    (l: Lang) => {
      setLangState(l);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("medinova-lang", l);
      }
      document.cookie = `medinova-lang=${l}; path=/; max-age=31536000; samesite=lax`;
      const segments = pathname.split("/");
      const hasLocalePrefix = /^\/(en|fr|ar)(\/|$)/.test(pathname);
      if (hasLocalePrefix && segments.length >= 2) {
        segments[1] = l;
        router.push(segments.join("/") || `/${l}`);
      } else {
        router.push(`/${l}${pathname === "/" ? "" : pathname}`);
      }
    },
    [pathname, router]
  );

  const isRTL = RTL_LANGS.includes(lang);

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