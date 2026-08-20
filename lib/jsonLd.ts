import { translations } from "@/lib/i18n";

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

const COURSE_SLUGS: Record<string, string> = {
  "Digital Essentials": "digital-essentials",
  Scratch: "scratch",
  Python: "python",
  "Roblox Game Development": "roblox",
  "Unity & C# Game Development": "unity-csharp",
  "Web Development": "web-development",
  "Creative Design": "creative-design",
};

export function courseSlug(name: string): string {
  return COURSE_SLUGS[name] ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

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

function academyNode() {
  const t = translations.en.academy;
  return {
    "@type": "EducationalOrganization",
    "@id": ACADEMY_ID,
    name: "Medinova Academy",
    url: `${SITE_URL}/academy`,
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
    hasCourse: t.courses.items.map((course) => {
      const courseUrl = `${SITE_URL}/en/academy/courses/${courseSlug(course.name)}`;
      return {
        "@type": "Course",
        "@id": courseUrl,
        name: course.name,
        description: course.desc,
        url: courseUrl,
        provider: { "@id": ORG_ID },
        typicalAgeRange: course.age,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: "Live instructor-led classes",
          inLanguage: ["en", "fr", "ar"],
        },
        offers: {
          "@type": "Offer",
          category: "Enrollment",
          availability: "InStock",
        },
      };
    }),
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

export function academySchema() {
  return { "@context": "https://schema.org", ...academyNode() };
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
      courseWorkload: "Live instructor-led classes",
      location: { "@type": "VirtualLocation" },
      offers: {
        "@type": "Offer",
        category: "Enrollment",
        availability: "InStock",
        price: "0",
        priceCurrency: "MAD",
        description: "Free trial class — enrollment details via WhatsApp",
      },
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
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: `${SITE_URL}${data.image}`,
    datePublished: data.datePublished,
    dateModified: data.datePublished,
    inLanguage: "en",
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