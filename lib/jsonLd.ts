import { translations } from "@/lib/i18n";

export const SITE_URL = "https://medinovastudio.com";

export const ORG_ID = `${SITE_URL}/#organization`;
export const ACADEMY_ID = `${SITE_URL}/#academy`;

const sameAs = [
  "https://www.linkedin.com/company/medinova-studio/",
  "https://x.com/medinovastudio",
  "https://www.youtube.com/@MedinovaStudio",
  "https://github.com/medinova-studio",
  "https://www.instagram.com/medinova.studio",
  "https://medinova.itch.io/",
];

function orgNode() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: "Medinova Studio",
    legalName: "Medinova Studio",
    alternateName: "Medinova Growth",
    description:
      "Medinova Studio is an active game development studio and B2B digital growth house based in Kenitra, Morocco. We ship custom Unity C# games, AR/VR and WebGL experiences, and AI-driven digital growth systems.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.svg`,
    },
    image: `${SITE_URL}/images/logo.svg`,
    email: "contact@medinovastudio.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kenitra",
      addressCountry: "MA",
    },
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "AdministrativeArea", name: "North Africa" },
    ],
    knowsAbout: [
      "Unity C# Game Development",
      "AR/VR Simulations",
      "WebGL Game Portals",
      "AI Acquisition Systems",
      "B2B Digital Growth",
    ],
    sameAs,
  };
}

function academyNode() {
  const t = translations.en.academy;
  return {
    "@type": "EducationalOrganization",
    "@id": ACADEMY_ID,
    name: "Medinova Academy",
    url: `${SITE_URL}/academy`,
    parentOrganization: { "@id": ORG_ID },
    description:
      "Practical technology and coding education for learners aged 7+, taught through real projects by the founder of Medinova Studio. Courses in digital essentials, Scratch, Python, Roblox, Unity & C#, web development and creative design.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kenitra",
      addressCountry: "MA",
    },
    areaServed: "MA",
    hasCourse: t.courses.items.map((course) => ({
      "@type": "Course",
      name: course.name,
      description: course.desc,
      provider: { "@id": ORG_ID },
    })),
    hasCredential: t.courses.items.map((course) => ({
      "@type": "EducationalOccupationalCredential",
      name: `Certificate of Completion — ${course.name}`,
      credentialCategory: "certificate",
    })),
  };
}

function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Medinova Studio",
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function graphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [orgNode(), academyNode(), webSiteNode()],
  };
}

export function organizationSchema() {
  return { "@context": "https://schema.org", ...orgNode() };
}

export function webSiteSchema() {
  return { "@context": "https://schema.org", ...webSiteNode() };
}

export function serviceSchema() {
  const t = translations.en.agency;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "B2B Digital Growth & AI Automation",
    name: "Medinova Growth — 360° Digital Growth & AI Automation Agency",
    url: `${SITE_URL}/agency`,
    provider: { "@id": ORG_ID },
    areaServed: ["MA", "North Africa", "Worldwide"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medinova Growth Packages",
      itemListElement: t.pricing.plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.tagline,
        category: plan.badge || "Growth Package",
        itemOffered: {
          "@type": "Service",
          serviceType: plan.name,
          description: plan.features.join(". "),
        },
      })),
    },
  };
}

export function gameDevServiceSchema() {
  const t = translations.en.services;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Game Development & Engineering",
    name: "Medinova Studio — Game Development Agency",
    url: `${SITE_URL}/game-development`,
    provider: { "@id": ORG_ID },
    areaServed: ["MA", "North Africa", "Worldwide"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Game Engineering Offers",
      itemListElement: t.cards.map((card) => ({
        "@type": "Offer",
        name: card.title,
        category: card.enterprise ? "Enterprise" : card.price,
        itemOffered: {
          "@type": "Service",
          serviceType: card.title,
          description: card.description,
        },
      })),
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}