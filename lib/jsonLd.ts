import { translations, type Lang } from "@/lib/i18n";
import { COURSE_SLUGS } from "@/lib/courses";
import { PRICING } from "@/lib/pricing";

export const SITE_URL = "https://www.medinovastudio.com";

export const ORG_ID = `${SITE_URL}/#organization`;
export const ACADEMY_ID = `${SITE_URL}/#academy`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;

const sameAs = [
  "https://www.linkedin.com/company/medinova-studio/",
  "https://x.com/medinovastudio",
  "https://www.youtube.com/@MedinovaStudio",
  "https://github.com/medinova-studio",
  "https://www.instagram.com/medinova.studio",
  "https://medinova.itch.io/",
];

/**
 * Course titles are no longer mapped back to slugs anywhere. `academyNode` used
 * to call `courseSlug(course.name)` to rebuild a URL from a display name, which
 * silently produced a broken URL for any locale whose names are not English.
 * Course identity now flows from the `COURSE_SLUGS` key itself.
 */

function personNode() {
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Mounir Abbotti",
    jobTitle: "Founder & Lead Systems Engineer",
    worksFor: { "@id": ORG_ID },
    url: `${SITE_URL}/who-we-are`,
    image: `${SITE_URL}/images/Founder.webp`,
    sameAs: [
      "https://www.linkedin.com/in/mouunirdev/",
      "https://www.instagram.com/medinova.studio",
    ],
    knowsAbout: [
      "Unity C# Game Development",
      "Game Physics",
      "WebGL",
      "Game Design",
    ],
  };
}

function orgNode() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: "Medinova Studio",
    legalName: "Medinova Studio",
    alternateName: "Medinova Growth",
    description:
      "Medinova Studio is an active game development studio and online coding academy based in Kenitra, Morocco, serving students and clients across Rabat, Casablanca and all of Morocco. We ship custom Unity C# games, AR/VR and WebGL experiences, AI-driven digital growth systems, and live online coding tracks.",
    url: SITE_URL,
    foundingDate: "2026",
    founder: { "@id": FOUNDER_ID },
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.svg`,
    },
    image: `${SITE_URL}/images/logo.svg`,
    email: "contact@medinovastudio.com",
    telephone: "+212703702976",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212703702976",
      contactType: "sales",
      areaServed: "MA",
      availableLanguage: ["en", "fr", "ar"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "31 Rue Martir Abd Eslam Ben Mohammed, Bureau N°2, Val Fleury, Résidence Riad Zayton",
      addressLocality: "Kenitra",
      addressRegion: "Rabat-Salé-Kénitra",
      addressCountry: "MA",
    },
    areaServed: [
      { "@type": "City", name: "Rabat" },
      { "@type": "City", name: "Casablanca" },
      { "@type": "Country", name: "Morocco" },
      { "@type": "AdministrativeArea", name: "North Africa" },
    ],
    knowsAbout: [
      "Unity C# Game Development",
      "AR/VR Simulations",
      "WebGL Game Portals",
      "AI Acquisition Systems",
      "B2B Digital Growth",
      "Coding Education for Kids & Adults",
    ],
    sameAs,
  };
}

function academyNode(lang: Lang) {
  const t = translations[lang].academy;
  const academyUrl = `${SITE_URL}/${lang}/academy`;
  return {
    "@type": "EducationalOrganization",
    "@id": ACADEMY_ID,
    name: "Medinova Academy",
    url: academyUrl,
    parentOrganization: { "@id": ORG_ID },
    description:
      "Practical technology and coding education for learners aged 7+, taught live online by the founder of Medinova Studio. Courses in digital essentials, Scratch, Python, Roblox, Unity & C#, web development and creative design.",
    telephone: "+212703702976",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kenitra",
      addressRegion: "Rabat-Salé-Kénitra",
      addressCountry: "MA",
    },
    areaServed: ["MA"],
    // Offers the real monthly and term prices. Previously every course was
    // advertised with no price at all, which reads as free or unpriced to
    // consumers and search engines alike.
    hasCourse: COURSE_SLUGS.map((slug) => {
      const course = t.courses.items[slug];
      const courseUrl = `${SITE_URL}/${lang}/academy/courses/${slug}`;
      return {
        "@type": "Course",
        "@id": courseUrl,
        name: course.name,
        description: course.desc,
        url: courseUrl,
        provider: { "@id": ORG_ID },
        typicalAgeRange: course.age,
        inLanguage: lang,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: `Live instructor-led ${PRICING.sessionMinutes}-minute sessions in small groups`,
          instructor: { "@id": FOUNDER_ID },
          offers: [
            {
              "@type": "Offer",
              name: "Monthly",
              category: "Enrollment",
              availability: "InStock",
              price: String(PRICING.monthly),
              priceCurrency: PRICING.currency,
              url: academyUrl,
            },
            {
              "@type": "Offer",
              name: "3 months",
              category: "Enrollment",
              availability: "InStock",
              price: String(PRICING.term),
              priceCurrency: PRICING.currency,
              url: academyUrl,
            },
          ],
        },
      };
    }),
    hasCredential: COURSE_SLUGS.map((slug) => ({
      "@type": "EducationalOccupationalCredential",
      name: `Certificate of Completion — ${t.courses.items[slug].name}`,
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
    inLanguage: ["en", "fr", "ar"],
  };
}

function gameNode() {
  const games = translations.en.portfolio.games;
  return games.map((game) => ({
    "@type": ["SoftwareApplication", "VideoGame"],
    name: game.title,
    description: game.description,
    url: game.link,
    image: game.gallery.map((g) => `${SITE_URL}${g}`),
    applicationCategory: "GameApplication",
    operatingSystem: "iOS",
    genre: game.badges.filter(
      (b) => !/iOS|PC|WebGL/i.test(b)
    ),
    offers: {
      "@type": "Offer",
      url: game.link,
      price: "0",
      priceCurrency: "USD",
    },
    author: { "@id": ORG_ID },
  }));
}

export function gameListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Published Games by Medinova Studio",
    itemListElement: gameNode().map((game, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: game,
    })),
  };
}

export function graphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [orgNode(), webSiteNode(), personNode()],
  };
}

export function organizationSchema() {
  return { "@context": "https://schema.org", ...orgNode() };
}

export function webSiteSchema() {
  return { "@context": "https://schema.org", ...webSiteNode() };
}

export function academySchema(lang: Lang = "en") {
  return { "@context": "https://schema.org", ...academyNode(lang) };
}

export function personSchema() {
  return { "@context": "https://schema.org", ...personNode() };
}

export function courseSchema(
  lang: string,
  slug: string,
  data: {
    name: string;
    description: string;
    age: string;
    image: string;
  }
) {
  const courseUrl = `${SITE_URL}/${lang}/academy/courses/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": courseUrl,
    name: data.name,
    description: data.description,
    url: courseUrl,
    image: `${SITE_URL}${data.image}`,
    provider: { "@id": ORG_ID },
    educationalLevel: "K-12 and teen learning",
    typicalAgeRange: data.age,
    inLanguage: lang,
    teaches: ["Coding", "Programming", "Game Development", "Problem Solving"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: `Live instructor-led ${PRICING.sessionMinutes}-minute sessions in small groups`,
      location: { "@type": "VirtualLocation" },
      // Both real plans are listed. The previous single `price: "0"` offer
      // contradicted the paid nature of the course and misrepresented it to
      // search engines as free.
      offers: [
        {
          "@type": "Offer",
          name: "Monthly",
          category: "Enrollment",
          availability: "InStock",
          price: String(PRICING.monthly),
          priceCurrency: PRICING.currency,
        },
        {
          "@type": "Offer",
          name: "3 months",
          category: "Enrollment",
          availability: "InStock",
          price: String(PRICING.term),
          priceCurrency: PRICING.currency,
        },
      ],
    },
  };
}

export function articleSchema(
  data: {
    title: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    inLanguage?: string;
  }
) {
  const image = data.image.startsWith("http")
    ? data.image
    : `${SITE_URL}${data.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image,
    datePublished: data.datePublished,
    dateModified: data.dateModified ?? data.datePublished,
    inLanguage: data.inLanguage ?? "en",
    author: { "@id": FOUNDER_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: data.url,
  };
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

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
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