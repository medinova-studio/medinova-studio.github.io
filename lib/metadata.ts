import type { Metadata } from "next";
import { Lang } from "@/lib/i18n";

const SITE = "https://www.medinovastudio.com";

type PageMeta = { title: string; description: string };

const SITE_META: Record<Lang, PageMeta> = {
  en: {
    title:
      "Medinova Studio — Game Development Studio & Coding Academy | Rabat, Morocco",
    description:
      "Medinova Studio is an active game development studio & online coding academy serving all of Morocco — custom Unity C# game development, AR/VR & WebGL experiences, AI growth systems, and live coding tracks in Scratch, Python, and Unity C# for kids and adults.",
  },
  fr: {
    title:
      "Medinova Studio — Studio de jeux vidéo & Académie de code | Rabat, Maroc",
    description:
      "Medinova Studio est un studio de développement de jeux vidéo et une académie de code en ligne au service de tout le Maroc — jeux Unity C#, expériences AR/VR & WebGL, systèmes d'IA et parcours de code en ligne en Scratch, Python et Unity C# pour enfants et adultes.",
  },
  ar: {
    title:
      "Medinova Studio — استوديو تطوير الألعاب وأكاديمية البرمجة | الرباط، المغرب",
    description:
      "استوديو Medinova استوديو نشط لتطوير الألعاب وأكاديمية برمجة عبر الإنترنت تخدم كل المغرب — ألعاب Unity C# وتجارب AR/VR وWebGL وأنظمة ذكاء اصطناعي ودورات برمجة مباشرة في Scratch وPython وUnity C# للأطفال والكبار.",
  },
};

const PAGE_META: Record<
  string,
  Record<Lang, PageMeta>
> = {
  "/academy": {
    en: {
      title:
        "Medinova Academy — Online Coding & Game Development Courses in Morocco",
      description:
        "Practical technology and coding education for learners aged 7+, taught live online by the founder of Medinova Studio. Learn digital skills, Scratch, Python, game development, web development and creative design — from Rabat, Casablanca and all of Morocco.",
    },
    fr: {
      title:
        "Medinova Academy — Cours de code et de développement de jeux en ligne au Maroc",
      description:
        "Une formation pratique en technologie et en code pour les apprenants dès 7 ans, animée en ligne par le fondateur de Medinova Studio. Scratch, Python, développement de jeux, développement web et design créatif — depuis Rabat, Casablanca et partout au Maroc.",
    },
    ar: {
      title:
        "أكاديمية Medinova — دورات برمجة وتطوير ألعاب عبر الإنترنت في المغرب",
      description:
        "تعليم عملي في التكنولوجيا والبرمجة للمتعلمين من سن 7 سنوات، يقدَّم مباشرة عبر الإنترنت بواسطة مؤسس Medinova Studio. سكراتش، بايثون، تطوير الألعاب، تطوير الويب والتصميم الإبداعي — من الرباط والدار البيضاء وكل المغرب.",
    },
  },
  "/agency": {
    en: {
      title: "Growth Agency — 360° Digital Growth & AI Automation",
      description:
        "High-converting web platforms, AI acquisition systems, and digital growth engines.",
    },
    fr: {
      title: "Agence de croissance — Croissance digitale 360° & Automatisation IA",
      description:
        "Plateformes web à fort taux de conversion, systèmes d'acquisition IA et moteurs de croissance digitale.",
    },
    ar: {
      title: "وكالة النمو — نمو رقمي 360° وأتمتة الذكاء الاصطناعي",
      description:
        "منصات ويب عالية التحويل، أنظمة اكتساب عملاء بالذكاء الاصطناعي، ومحركات نمو رقمي.",
    },
  },
  "/game-development": {
    en: {
      title: "Game Development Agency — Medinova Studio",
      description:
        "Custom Unity C# game development, AR/VR & WebGL experiences, and cross-platform game production — an active game development studio based in Morocco, delivering worldwide.",
    },
    fr: {
      title: "Agence de développement de jeux — Medinova Studio",
      description:
        "Développement de jeux Unity C# sur mesure, expériences AR/VR & WebGL et production de jeux multi-plateformes — un studio actif basé au Maroc, qui livre dans le monde entier.",
    },
    ar: {
      title: "وكالة تطوير الألعاب — Medinova Studio",
      description:
        "تطوير ألعاب Unity C# مخصصة، وتجارب AR/VR وWebGL، وإنتاج ألعاب متعدد المنصات — استوديو نشط مقره المغرب ويخدم العملاء حول العالم.",
    },
  },
  "/who-we-are": {
    en: {
      title: "Who We Are — Medinova Studio",
      description:
        "Medinova Studio is an active game development studio and online coding academy based in Morocco — Unity C# games, AR/VR & WebGL experiences, B2B growth systems, and live coding tracks in Scratch, Python, and Unity C#.",
    },
    fr: {
      title: "Qui sommes-nous — Medinova Studio",
      description:
        "Medinova Studio est un studio de développement de jeux actif et une académie de code en ligne basés au Maroc — jeux Unity C#, expériences AR/VR & WebGL, systèmes de croissance B2B et parcours de code en direct en Scratch, Python et Unity C#.",
    },
    ar: {
      title: "من نحن — Medinova Studio",
      description:
        "استوديو Medinova استوديو نشط لتطوير الألعاب وأكاديمية برمجة عبر الإنترنت مقره المغرب — ألعاب Unity C# وتجارب AR/VR وWebGL وأنظمة نمو B2B ودورات برمجة مباشرة في Scratch وPython وUnity C#.",
    },
  },
  "/privacy": {
    en: { title: "Privacy Policy", description: "How Medinova Studio collects, uses, and protects your personal data across our website, agency, and academy services." },
    fr: { title: "Politique de confidentialité", description: "Comment Medinova Studio collecte, utilise et protège vos données personnelles sur notre site web, notre agence et notre académie." },
    ar: { title: "سياسة الخصوصية", description: "كيف يجمع استوديو Medinova بياناتك الشخصية ويستخدمها ويحميها عبر موقعنا ووكالتنا وأكاديميتنا." },
  },
  "/terms": {
    en: { title: "Terms of Service", description: "Terms governing the use of Medinova Studio's website, game development services, growth agency, and Medinova Academy." },
    fr: { title: "Conditions d'utilisation", description: "Conditions régissant l'utilisation du site web de Medinova Studio, de ses services de développement de jeux, de son agence de croissance et de Medinova Academy." },
    ar: { title: "شروط الخدمة", description: "الشروط التي تحكم استخدام موقع Medinova Studio وخدمات تطوير الألعاب ووكالة النمو وأكاديمية Medinova." },
  },
};

export function localizedPageMeta(
  lang: Lang,
  path: string
): PageMeta {
  return PAGE_META[path]?.[lang] ?? SITE_META[lang];
}

export function localizedSiteMeta(lang: Lang): PageMeta {
  return SITE_META[lang];
}

export function alternatesFor(lang: Lang, path: string) {
  const base = path === "/" ? "" : path;
  return {
    canonical: `/${lang}${base}`,
    languages: {
      en: `/en${base}`,
      fr: `/fr${base}`,
      ar: `/ar${base}`,
      "x-default": `/en${base}`,
    },
  };
}

export function buildPageMetadata(
  lang: Lang,
  path: string
): Metadata {
  const meta = localizedPageMeta(lang, path);
  const url = `${SITE}/${lang}${path === "/" ? "" : path}`;
  const alternates = alternatesFor(lang, path);
  return {
    metadataBase: new URL(SITE),
    title: { absolute: meta.title },
    description: meta.description,
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : lang === "fr" ? "fr_FR" : "ar_MA",
      url,
      siteName: "Medinova Studio",
      title: meta.title,
      description: meta.description,
    },
    twitter: { card: "summary_large_image" },
    alternates,
  };
}