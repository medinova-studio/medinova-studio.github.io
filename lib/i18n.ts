export type Lang = "en" | "fr" | "ar";

export const LANGS: Lang[] = ["fr", "en", "ar"];

export const LANG_LABELS: Record<Lang, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

export const RTL_LANGS: Lang[] = ["ar"];

export type AcademyTranslation = {
  announcement: string;
  announcementCta: string;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    scarcity: string;
    trust: { title: string; desc: string }[];
  };
  why: {
    badge: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  founder: {
    badge: string;
    title: string;
    text: string;
    caption: string;
  };
  work: {
    badge: string;
    title: string;
    subtitle: string;
    robloxBadge: string;
    robloxTitle: string;
    robloxCta: string;
    mgeBadge: string;
    mgeTitle: string;
    mgeDesc: string;
    gamesLabel: string;
    games: string[];
    studioLink: string;
  };
  courses: {
    badge: string;
    title: string;
    intro: string;
    agesLabel: string;
    progressionLabel: string;
    viewLabel: string;
    items: {
      name: string;
      age: string;
      desc: string;
      levels?: { label: string; topics: string[] }[];
    }[];
  };
  breadcrumb: { home: string; academy: string };
  onlineLabel: string;
  viewAllLabel: string;
  outcomesTitle: string;
  courseDetailsTitle: string;
  moreCoursesTitle: string;
  teaching: {
    badge: string;
    title: string;
    modelTitle: string;
    steps: { title: string; desc: string }[];
    model: string[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
    scarcity: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  whatsapp: {
    message: string;
    online: string;
    aria: string;
    quickQuestion: string;
    cta: string;
  };
};

export type Translation = {
  nav: {
    solutions: string;
    about: string;
    portfolio: string;
    services: string;
    contact: string;
    hireStudio: string;
    discoverTracks: string;
    subGameDev: string;
    subGameDevDesc: string;
    subAgency: string;
    subAgencyDesc: string;
    subAcademy: string;
    subAcademyDesc: string;
    blog: string;
  };
  blog: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    backLabel: string;
    breadcrumbHome: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPlay: string;
    ctaHire: string;
  };
  tech: {
    label: string;
    proof: string;
    badges: string[];
  };
  founder: {
    badge: string;
    title: string;
    subtitle: string;
    bio: string;
    linkedin: string;
    instagram: string;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    featured: {
      title: string;
      badges: string[];
      description: string;
      cta: string;
      link: string;
    };
    games: {
      title: string;
      badges: string[];
      description: string;
      cta: string;
      link: string;
      gallery: string[];
    }[];
    banner: {
      cta: string;
      link: string;
    };
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    from: string;
    ht: string;
    enterpriseQuote: string;
    cta: string;
    cards: {
      title: string;
      price: string;
      description: string;
      enterprise?: boolean;
    }[];
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    introTitle: string;
    intro: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  hub: {
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    section: {
      badge: string;
      title: string;
      subtitle: string;
      cta: string;
    };
    gameDev: { title: string; desc: string };
    agency: { title: string; desc: string };
    academy: { title: string; desc: string };
  };
  agency: {
    nav: {
      links: {
        framework: string;
        solutions: string;
        packages: string;
        faq: string;
      };
      cta: string;
    };
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      trust: string;
    };
    pillars: {
      badge: string;
      title: string;
      subtitle: string;
      cards: { title: string; desc: string }[];
    };
    process: {
      badge: string;
      title: string;
      subtitle: string;
      steps: { phase: string; title: string; window: string; desc: string }[];
    };
    pricing: {
      badge: string;
      title: string;
      subtitle: string;
      setupLabel: string;
      retainerLabel: string;
      perMonth: string;
      mostPopular: string;
      plans: {
        name: string;
        tagline: string;
        setup: string;
        retainer: string;
        badge?: string;
        featured?: boolean;
        features: string[];
        cta: string;
      }[];
    };
    terms: {
      title: string;
      items: { label: string; text: string }[];
    };
    faq: {
      badge: string;
      title: string;
      items: { q: string; a: string }[];
    };
    cta: {
      headline: string;
      subheadline: string;
      button: string;
    };
    contact: {
      badge: string;
      title: string;
      subtitle: string;
      emailLabel: string;
      whatsappLabel: string;
      whatsappMessage: string;
      form: {
        name: string;
        namePh: string;
        company: string;
        companyPh: string;
        email: string;
        emailPh: string;
        scope: string;
        scopePh: string;
        submit: string;
        submitting: string;
        sent: string;
        error: string;
      };
    };
    footer: {
      tagline: string;
      rights: string;
    };
  };
  pillars: {
    games: string;
    gamesTitle: string;
    gamesSubtitle: string;
    academy: string;
    academyTitle: string;
    academySubtitle: string;
    from: string;
    enterpriseQuote: string;
    perMonth: string;
    ht: string;
    getStarted: string;
    requestQuote: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    service: string;
    servicePh: string;
    services: string[];
    budget: string;
    budgetPh: string;
    budgets: string[];
    readiness: string;
    readinessPh: string;
    readinessOptions: string[];
    message: string;
    messagePh: string;
    send: string;
    sending: string;
    sent: string;
    emailLabel: string;
    location: string;
    errors: {
      requiredName: string;
      requiredEmail: string;
      invalidEmail: string;
      requiredService: string;
      requiredBudget: string;
      requiredReadiness: string;
      requiredMessage: string;
    };
  };
  footer: {
    mission: string;
    location: string;
    support: string;
    colAgency: string;
    colGameDev: string;
    colAcademy: string;
    colLegal: string;
    cta: string;
    agencyLinks: [string, string, string, string];
    gameDevLinks: [string, string, string, string];
    academyLinks: [string, string, string, string, string];
    legalLinks: [string, string];
    taxDisclaimer: string;
    rights: string;
  };
  academy: AcademyTranslation;
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      solutions: "Our Solutions",
      about: "Who We Are",
      portfolio: "Games & Portfolio",
      services: "Game Dev Services",
      contact: "Contact",
      hireStudio: "Hire Studio",
      discoverTracks: "Discover the Tracks",
      subGameDev: "Game Dev & Spatial Tech",
      subGameDevDesc: "Custom games, WebGL portals & AR/VR engineering",
      subAgency: "B2B Growth Agency",
      subAgencyDesc: "Marketing & growth packages",
      subAcademy: "Medinova Academy",
      subAcademyDesc: "Coding tracks for kids & adults",
      blog: "Blog",
    },
    blog: {
      metaTitle: "Coding Blog for Kids & Parents | Medinova Studio",
      metaDescription:
        "Guides on kids' coding, Scratch vs Python, Unity vs Roblox, and coding courses in Morocco — from the team at Medinova Studio.",
      badge: "The Medinova Blog",
      title: "Guides for Parents, Learners & the Curious",
      subtitle:
        "Practical articles on kids' coding, game development and digital skills — written by the people who build and teach every day.",
      readMore: "Read article",
      backLabel: "Back to blog",
      breadcrumbHome: "Home",
    },
    hero: {
      badge: "Available for Unity C#, AR/VR & Game Dev Contracts",
      headline:
        "Engineering High-Octane Games, Interactive 3D & Spatial Experiences",
      subheadline:
        "Moroccan Game Studio specializing in action-packed mobile & PC games, custom Unity C# pipelines, WebGL portals, and immersive 3D simulations.",
      ctaPlay: "Explore Games",
      ctaHire: "Hire Our Studio",
    },
    tech: {
      label: "Studio Credentials & Tech Stack",
      proof:
        "Backed by Moroccan Video Game Incubators & National Digital Initiatives",
      badges: [
        "Unity 3D/2D",
        "C# Architecture",
        "Shader Graph",
        "WebGL Pipelines",
        "iOS/Android Deployment",
        "AR Foundation",
        "Blender",
      ],
    },
    founder: {
      badge: "Founder Spotlight",
      title: "Meet the Founder",
      subtitle: "Mounir — Founder & Lead Systems Engineer",
      bio: "Specializing in custom Unity C# pipelines, game physics, high-performance WebGL builds, and published mobile titles. Building high-octane interactive experiences directly with publishers, brands, and studio partners.",
      linkedin: "https://www.linkedin.com/in/mouunirdev/",
      instagram: "https://www.instagram.com/medinova.studio",
    },
    portfolio: {
      badge: "Playable & Published",
      title: "Our Published Games & Commercial Portfolio",
      subtitle:
        "Live commercial titles shipped across iOS with active App Store releases.",
      featured: {
        title: "Blocks Evolution",
        badges: ["In Development", "PC / WebGL / Console", "Arcade Puzzle"],
        description:
          "Vertical portrait arcade puzzle featuring a bottom-mounted cannon shooting two-cube segments that stack at the top of the grid. Built with custom Unity physics and dynamic mechanics.",
        cta: "Try Live Playtest Build",
        link: "https://app.gamearly.com/projects/211",
      },
      games: [
        {
          title: "Pharaoh's Guardian: Mummies",
          badges: ["iOS", "3D Action / Survival"],
          description:
            "Ancient Egypt action survival defender featuring horde wave mechanics and atmospheric 3D environments.",
          cta: "View on App Store",
          link: "https://apps.apple.com/us/app/pharaohs-guardian-mummies/id6743336811",
          gallery: [
            "/images/games/pharaohs-guardian/2752x2064-screenshot.webp",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (1).webp",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (2).webp",
          ],
        },
        {
          title: "Sniper Elimination Challenge",
          badges: ["iOS", "3D Tactical Shooter"],
          description:
            "Precision ballistics, stealth tactical elimination mechanics, and target identification challenges.",
          cta: "View on App Store",
          link: "https://apps.apple.com/us/app/sniper-elimination-challenge/id6747273149",
          gallery: [
            "/images/games/sniper-elimination/screenshot1.webp",
            "/images/games/sniper-elimination/screenshot2.webp",
            "/images/games/sniper-elimination/screenshot3.webp",
          ],
        },
        {
          title: "Chameleon Outbreak: Camo Hunt",
          badges: ["iOS", "Visual Spotting & Shaders"],
          description:
            "Dynamic environmental camouflage visual detection game featuring adaptive shader effects.",
          cta: "View on App Store",
          link: "https://apps.apple.com/us/app/chameleon-outbreak-camo-hunt/id6785619522",
          gallery: [
            "/images/games/chameleon-outbreak/1284x2778-screenshot (5).webp",
            "/images/games/chameleon-outbreak/1284x2778-screenshot (6).webp",
            "/images/games/chameleon-outbreak/2064x2752-screenshot (10).webp",
          ],
        },
        {
          title: "Blitz Combat Race",
          badges: ["iOS", "Combat Racing", "Physics"],
          description:
            "High-speed combat vehicle racing with power-up integration, physics-based drifting, and arcade handling.",
          cta: "View on App Store",
          link: "https://apps.apple.com/us/app/blitz-combat-race/id6741860986",
          gallery: [
            "/images/games/blitz-combat/2064x2752-screenshot (3).webp",
            "/images/games/blitz-combat/2064x2752-screenshot (4).webp",
            "/images/games/blitz-combat/2064x2752-screenshot.webp",
          ],
        },
      ],
      banner: {
        cta: "Explore Playable Titles & Demos on itch.io",
        link: "https://medinova.itch.io/",
      },
    },
    services: {
      badge: "Game Dev Engineering",
      title: "Custom Game Engineering Offers",
      subtitle:
        "Three clear offers — from core-loop validation to full cross-platform shipping and spatial simulations.",
      from: "From",
      ht: "DHS HT",
      enterpriseQuote: "Enterprise Quote",
      cta: "Discuss Your Project",
      cards: [
        {
          title: "Rapid Mechanics & Prototyping",
          price: "8,000",
          description:
            "Custom C# gameplay loop engineering, greyboxing, feel/VFX polish, and a WebGL test build in 7–14 days.",
        },
        {
          title: "Full Production & Cross-Platform Shipping",
          price: "25,000",
          description:
            "Complete 2D/3D development pipeline for PC (Steam), WebGL (CrazyGames), and Mobile (iOS/Android). Includes UI/UX, ad network & IAP integration, store submission support, and 30 days post-launch support.",
        },
        {
          title: "B2B Spatial 3D, AR/VR & Industrial Simulations",
          price: "enterprise",
          description:
            "Meta Quest interactive training, AR Foundation WebAR, and touristic/cultural 3D discovery tools.",
          enterprise: true,
        },
      ],
    },
    about: {
      badge: "About Medinova Studio",
      title: "The Studio Behind the Games",
      subtitle:
        "An independent Moroccan game studio engineering interactive experiences, learning tools, and B2B growth engines.",
      introTitle: "Who We Are",
      intro:
        "Medinova Studio is a Moroccan independent studio crafting high-octane games, immersive spatial experiences, and growth-driven digital products from the heart of North Africa.",
      pillars: [
        { title: "Game Dev & Spatial Tech", description: "Cross-platform games, AR/VR and interactive 3D built with Unity." },
        { title: "B2B Growth Agency", description: "Full-funnel marketing, content and AI-powered growth packages." },
        { title: "Medinova Academy", description: "Coding tracks that take learners from visual logic to professional development." },
      ],
    },
    hub: {
      hero: {
        badge: "Active Game Development Studio & Online Coding Academy — Rabat, Morocco",
        headline:
          "We Build Games, Grow Brands & Teach the Next Generation of Developers.",
        subheadline:
          "Medinova Studio is an independent Moroccan studio engineering Unity C# games, AR/VR & WebGL experiences, B2B growth systems, and live online coding tracks in Scratch, Python, and Unity C# — taught remotely from Rabat, Morocco.",
        ctaPrimary: "Explore Our Work",
        ctaSecondary: "Hire Our Studio",
      },
      section: {
        badge: "One Studio, Three Engines",
        title: "What We Do",
        subtitle:
          "Three specialised divisions under one roof — game development, B2B growth, and coding education.",
        cta: "Explore",
      },
      gameDev: {
        title: "Game Development Studio",
        desc: "Custom Unity C# games, WebGL portals, AR/VR & spatial simulations shipped across mobile, PC and web.",
      },
      agency: {
        title: "B2B Growth Agency",
        desc: "High-converting web platforms, AI acquisition systems, and digital growth engines.",
      },
      academy: {
        title: "Medinova Academy",
        desc: "Certified coding tracks in Scratch, Python, and Unity C# with verifiable QR-code diplomas.",
      },
    },
    pillars: {
      games: "Game Development",
      gamesTitle: "Game Dev & Custom Engineering",
      gamesSubtitle:
        "Cross-platform games, interactive AR/VR experiences, and custom software built for scale.",
      academy: "Medinova Academy",
      academyTitle: "Coding Academy — Ages 7 to Adults",
      academySubtitle:
        "From visual logic to professional development — structured tracks for every age and ambition.",
      from: "From",
      enterpriseQuote: "Enterprise Quote",
      perMonth: "/ month",
      ht: "DHS HT",
      getStarted: "Get Started",
      requestQuote: "Request Quote",
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's Build Your Game",
      subtitle:
        "Send us a project brief to request an official quote or discussion.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@example.com",
      service: "Project Type",
      servicePh: "Select a project type...",
      services: [
        "Rapid Prototype (8,000 DHS HT)",
        "Full Production (25,000 DHS HT)",
        "AR/VR & Spatial Simulation",
        "Other",
      ],
      budget: "Estimated Budget",
      budgetPh: "Select an estimated budget...",
      budgets: ["5,000 - 15,000 DHS", "15,000 - 30,000 DHS", "30,000+ DHS"],
      readiness: "Project Readiness",
      readinessPh: "Select project readiness...",
      readinessOptions: [
        "Complete GDD ready",
        "Playable reference ready",
        "Rough concept",
      ],
      message: "Message",
      messagePh: "Tell us about your game or project...",
      send: "Send Project Brief",
      sending: "Sending Message...",
      sent: "Thank you! Your project brief has been sent to contact@medinovastudio.com. We will respond within 24 hours.",
      emailLabel: "Email Us",
      location: "Morocco, North Africa",
      errors: {
        requiredName: "Please enter your name.",
        requiredEmail: "Please enter your email.",
        invalidEmail: "Please enter a valid email address.",
        requiredService: "Please select a project type.",
        requiredBudget: "Please select an estimated budget.",
        requiredReadiness: "Please select your project readiness.",
        requiredMessage: "Please enter a message.",
      },
    },
    footer: {
      mission:
        "High-converting digital systems, custom game development, and tech education.",
      location: "Rabat, Morocco 🇲🇦",
      support: "Contact & Support",
      colAgency: "B2B Growth Agency",
      colGameDev: "Game Dev & Interactive Tech",
      colAcademy: "Medinova Academy",
      colLegal: "Trust, Legal & Compliance",
      cta: "Book a Strategy Call",
      agencyLinks: [
        "High-Converting Web Platforms",
        "AI & Autonomous Acquisition Systems",
        "Meta Ads & Performance Marketing",
        "Diagnostic Frameworks & Retainers",
      ],
      gameDevLinks: [
        "Commercial Titles & WebGL Games",
        "Custom AR/VR & Spatial Tech",
        "Serious Games & Educational Simulations",
        "Web Portal Publishing",
      ],
      academyLinks: [
        "Youth & Adult Coding Tracks",
        "Scratch, Python & Unity C# Curricula",
        "Printable Certified Modules & QR Verification",
        "Student Project Showcase",
        "Blog",
      ],
      legalLinks: ["Privacy Policy", "Terms of Service"],
      taxDisclaimer:
        "Tarifs indiqués Hors Taxes (HT). TVA (20%) applicable selon la réglementation en vigueur.",
      rights: "All rights reserved.",
    },
    agency: {
      nav: {
        links: {
          framework: "Growth Framework",
          solutions: "Core Solutions",
          packages: "Packages & Offers",
          faq: "FAQ",
        },
        cta: "Book a Strategy Call",
      },
      hero: {
        badge: "360° Digital Growth & AI Automation Engine",
        headline:
          "We Build High-Converting Websites & Autonomous Acquisition Systems for Growing Businesses.",
        subheadline:
          "From custom responsive web design and cinematic media production to precision paid ads and smart AI WhatsApp routing — we engineer your customer acquisition from click to conversion.",
        ctaPrimary: "Explore Growth Packages",
        ctaSecondary: "Book a Free Brand Audit",
        trust:
          "Empowering ambitious brands with high-performance digital presence, automated lead pipelines, and AI systems.",
      },
      pillars: {
        badge: "Core Solutions",
        title: "The 360° Growth Architecture",
        subtitle:
          "Four interconnected systems engineered to capture market share and scale your revenue.",
        cards: [
          {
            title: "Custom Web & Digital Assets",
            desc: "Fast, mobile-first responsive sites optimized for maximum conversion and local SEO (Google Business Profile).",
          },
          {
            title: "High-Impact Media Production",
            desc: "Professional promo videos, dynamic viral Reels/TikToks with high-retention hooks, and premium brand copy.",
          },
          {
            title: "Performance Paid Media",
            desc: "Precision Meta, Google, and TikTok ad campaigns engineered for low CAC and direct WhatsApp lead volume.",
          },
          {
            title: "Intelligent AI WhatsApp Automation",
            desc: "24/7 instant lead qualification, automated objection handling, and seamless CRM synchronization.",
          },
        ],
      },
      process: {
        badge: "Our Process",
        title: "Our Proven Growth Framework",
        subtitle:
          "How we move your business from initial diagnosis to market dominance in 14 days.",
        steps: [
          {
            phase: "Phase 1",
            title: "Business Audit & Bottleneck Diagnosis",
            window: "Days 1–3",
            desc: "Deep-dive audit into your current sales funnels, traffic drop-offs, mobile page speeds, and lead response times.",
          },
          {
            phase: "Phase 2",
            title: "Competitor Benchmarking & Offer Positioning",
            window: "Days 4–7",
            desc: "Analyzing competitor ad hooks, scraping market offers, and engineering your unique value proposition.",
          },
          {
            phase: "Phase 3",
            title: "Setup & Asset Deployment",
            window: "Days 8–14",
            desc: "Building/redesigning your web assets, producing initial promo videos, configuring ad pixels, and training your custom AI WhatsApp agent.",
          },
          {
            phase: "Phase 4",
            title: "Sprint Launch & Continuous Growth Engine",
            window: "Ongoing",
            desc: "A/B ad creative testing, weekly AI bot optimization, real-time lead routing, and executive analytics reports.",
          },
        ],
      },
      pricing: {
        badge: "Offers & Packages",
        title: "Transparent Growth Packages",
        subtitle:
          "Clear setup deliverables paired with predictable monthly acquisition retainers.",
        setupLabel: "Setup Fee (One-Time)",
        retainerLabel: "Monthly Retainer",
        perMonth: "/ month",
        mostPopular: "MOST POPULAR",
        plans: [
          {
            name: "Pack ESSENTIEL",
            tagline:
              "Complete digital presence, fast showcase website, and automated conversion for your first prospects.",
            setup: "4,500 DHS HT",
            retainer: "6,000 DHS HT",
            features: [
              "Social Media: 2 Platforms (Facebook & Instagram), 8–10 Posts/mo (Graphics, Carousels, Copy)",
              "Video Production: 4 Dynamic Reels/TikToks (Vertical format, hooks, animated subtitles, sound design)",
              "Paid Ads: 1 Active Meta Campaign (Lead Generation or WhatsApp traffic) + Monthly Report",
              "Website Deliverable: 1 to 3 Pages, 100% Mobile Responsive, Direct WhatsApp CTA, Basic SEO & Google Maps Setup",
              "AI Automation: Custom Welcome Message, 10-Question FAQ Bot, Prospect Routing",
            ],
            cta: "Start with Essential Pack",
          },
          {
            name: "Pack PRO GROWTH",
            tagline:
              "The ultimate solution for high-growth businesses looking to dominate their market and automate client acquisition.",
            setup: "7,500 DHS HT",
            retainer: "12,000 DHS HT",
            badge: "MOST POPULAR",
            featured: true,
            features: [
              "Social Media: 3 Platforms (FB, IG + TikTok or LinkedIn), 15 Posts/mo, Active DM & Comment Moderation",
              "Video Production: 10 High-End Reels/TikToks (Sales scripts, dynamic editing, stylized subtitles)",
              "Paid Ads: Multi-Campaign Management (Meta Ads + Google Search/Retargeting), Continuous A/B Testing, Pixel & CAPI Setup",
              "Website Deliverable: Complete 5–7 Page Web Site, Guaranteed 85%+ Speed Score, UX/UI & Keyword SEO Audit",
              "AI Automation: Smart AI Agent trained on your knowledge base, Automated Qualification (Name, Need, Budget, Phone), Automated Follow-ups",
            ],
            cta: "Scale with Pro Growth",
          },
          {
            name: "Pack ENTERPRISE",
            tagline:
              "Bespoke 360° marketing infrastructure, cinematic video production, and autonomous AI CRM integration.",
            setup: "14,000 DHS HT",
            retainer: "22,000 DHS HT",
            badge: "CUSTOM 360° INFRASTRUCTURE",
            features: [
              "Social Media: Omnichannel (FB, IG, LinkedIn, TikTok, YouTube), Art Direction, Real-time Dashboard",
              "Video Production: 18–20 High-Retention Viral Reels/Shorts with Scriptwriting & Motion Design",
              "Paid Ads: Full-Funnel Omnichannel Campaigns (Meta, Google, TikTok, YouTube) + CRO Optimization",
              "Website Deliverable: Multi-Lingual Design (Arabic, French, English), Micro-interactions, Advanced Technical SEO",
              "AI Automation & CRM: Custom LLM Autonomous AI Agent, Calendar Sync for Appointments, Full CRM/Webhook Integrations (HubSpot, Zapier, Make, Sheets)",
            ],
            cta: "Request Enterprise Consultation",
          },
        ],
      },
      terms: {
        title: "Billing & Terms",
        items: [
          {
            label: "Facturation",
            text: "Prices shown are exclusive of tax (HT). VAT (20%) applies per regulations.",
          },
          {
            label: "Ad Spend",
            text: "Media buying budgets (Meta, Google, TikTok) are the sole responsibility of the client.",
          },
          {
            label: "Third-Party API Fees",
            text: "Direct consumption costs (WhatsApp Business API, OpenAI tokens) are settled by the client.",
          },
          {
            label: "Commitment",
            text: "An initial 3-month commitment is required on all monthly subscriptions.",
          },
        ],
      },
      faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        items: [
          {
            q: "How quickly can we complete the setup phase and launch?",
            a: "Our setup phase (website build, initial promo video recording/editing, ad account setup, and AI training) takes 7 to 14 days.",
          },
          {
            q: "How does the AI WhatsApp Agent qualify incoming leads?",
            a: "The AI agent engages traffic instantly 24/7, answers questions based on your business knowledge base, collects key qualification data (budget, timeline, needs), and routes ready-to-buy leads straight to your sales team.",
          },
          {
            q: "Why is an initial 3-month commitment required for monthly retainers?",
            a: "Marketing algorithms, Meta/Google ad pixel optimization, and organic video momentum require a minimum 90-day window to deliver consistent, compounding ROI.",
          },
          {
            q: "Can we upgrade our package level as our business grows?",
            a: "Yes, you can upgrade your monthly retainer tier at any time as your content volume and ad spend scale.",
          },
        ],
      },
      cta: {
        headline: "Ready to Automate & Scale Your Customer Acquisition?",
        subheadline:
          "Book a 20-minute strategy call to audit your digital presence, review competitor gaps, and select your Medinova growth system.",
        button: "Book Strategy Session Now",
      },
      contact: {
        badge: "Book a Strategy Call",
        title: "Let's Engineer Your Growth",
        subtitle:
          "Tell us about your business and we'll map out a high-converting growth system built around your goals — websites, paid media, and AI automation.",
        emailLabel: "Email us",
        whatsappLabel: "Contact us via WhatsApp",
        whatsappMessage:
          "Hello Medinova Growth, I'd like to book a strategy call.",
        form: {
          name: "Your Name",
          namePh: "Jane Doe",
          company: "Company",
          companyPh: "Acme Inc.",
          email: "Work Email",
          emailPh: "jane@company.com",
          scope: "Project Scope",
          scopePh:
            "Briefly describe your goals: website, ads, AI automation...",
          submit: "Book Strategy Call",
          submitting: "Sending...",
          sent: "Thanks! Your inquiry was sent to contact@medinovastudio.com. We'll reply within 24 hours.",
          error:
            "Something went wrong. Please try again or email us directly.",
        },
      },
      footer: {
        tagline:
          "Medinova Growth — high-converting websites, AI automation, and digital growth that compounds.",
        rights: "Medinova Growth. All rights reserved.",
      },
    },
    academy: {
      announcement:
        "Live instructor-led classes for learners aged 7+ · English, French & Arabic",
      announcementCta: "Book a Free Trial",
      hero: {
        badge: "Online Coding Academy · Ages 7+ · Rabat, Morocco",
        headline:
          "Online Coding & Game Development Courses for Kids in Morocco",
        subheadline:
          "Learn coding, game development and digital skills live online with Medinova Studio — from Rabat, Casablanca and everywhere in Morocco. Practical, project-based classes for learners aged 7+, taught by the founder of an active game studio.",
        cta: "Book a Free Trial",
        scarcity: "Limited spots — book early",
        trust: [
          {
            title: "Learners aged 7+",
            desc: "Courses matched to every age and level",
          },
          {
            title: "English · French · Arabic",
            desc: "Classes in three languages",
          },
          {
            title: "Live & project-based",
            desc: "Instructor-led with real projects",
          },
        ],
      },
      why: {
        badge: "Why Medinova Academy",
        title: "Learn Through Application and Real Projects",
        items: [
          {
            title: "Learn by Doing, Not Just Watching",
            desc: "Don't just watch lessons. Apply what you learn, experiment with your ideas, and build real projects that sharpen your skills.",
          },
          {
            title: "Turn Knowledge Into Projects",
            desc: "Every new skill is a chance to build something. Keep and grow your work to shape a portfolio that shows what you can actually do.",
          },
          {
            title: "Learn From Real Industry Experience",
            desc: "Learn directly from the founder of Medinova Studio and gain from the experience of a studio that actively develops games, digital technology and shipped projects.",
          },
        ],
      },
      founder: {
        badge: "The Founder",
        title: "Learn directly from the founder of Medinova Studio",
        text:
          "Learners are taught by Mounir Abbotti, founder and lead developer of Medinova Studio — an active game development and technology studio with published games and real projects. Instead of following pre-recorded lessons, learners learn from someone who designs, builds and ships technology every day.",
        caption: "Mounir Abbotti — Founder of Medinova Studio & Lead Developer.",
      },
      work: {
        badge: "Our Work",
        title: "Backed by a real studio that ships real projects",
        subtitle:
          "Medinova Academy is a program by Medinova Studio, an active game development and technology studio. The projects below are Medinova Studio projects — real published work, not student projects.",
        robloxBadge: "Medinova Studio on Roblox",
        robloxTitle:
          "Creator of 'Zombies WarZone' on Roblox — over 1,000,000 games played worldwide.",
        robloxCta: "Play on Roblox",
        mgeBadge: "Morocco Gaming Expo",
        mgeTitle: "Booth C38 — Morocco Gaming Expo",
        mgeDesc:
          "Showcasing our published games to the public at Morocco's national gaming event.",
        gamesLabel: "Medinova Studio projects — Published on the App Store",
        games: [
          "Pharaoh's Guardian: Mummies",
          "Chameleon Outbreak: Camo Hunt",
          "Sniper Elimination Challenge",
          "Blitz Combat Race",
        ],
        studioLink: "Explore the studio's full portfolio",
      },
      courses: {
        badge: "Explore Our Courses",
        title: "Explore Our Courses",
        intro:
          "From digital skills and coding to game development, web development and creative design, learners can explore technology through practical, project-based learning.",
        agesLabel: "Recommended age",
        progressionLabel: "Progression",
        viewLabel: "View course details",
        items: [
          {
            name: "Digital Essentials",
            age: "7+",
            desc:
              "Build essential digital skills for everyday life, including computer basics, Word, Excel, PowerPoint, internet use and more.",
          },
          {
            name: "Scratch",
            age: "7+",
            desc:
              "Build logical thinking and problem-solving skills through visual programming. Children learn the fundamentals of algorithms, sequencing, mathematics and computational thinking while creating their own interactive stories, animations and games.",
          },
          {
            name: "Python",
            age: "11+",
            desc:
              "Develop structured thinking, problem-solving and programming skills through Python. Learners turn ideas into working programs, games and practical applications while building a strong foundation for more advanced technology.",
          },
          {
            name: "Roblox Game Development",
            age: "9+",
            desc:
              "Develop creativity, spatial thinking and problem-solving skills by designing and building interactive 3D worlds. Learners explore game design and programming while creating their own Roblox experiences.",
          },
          {
            name: "Unity & C# Game Development",
            age: "12+",
            desc:
              "Develop advanced problem-solving, logical thinking and programming skills through professional game development. Learners use Unity and C# to design mechanics, build 2D and 3D games, and turn their ideas into playable projects.",
          },
          {
            name: "Web Development",
            age: "11+",
            desc:
              "Learn how websites work while developing creativity, logical thinking and problem-solving skills. Learners start with HTML, CSS and JavaScript, then progress to PHP and MySQL to build websites connected to real databases.",
            levels: [
              {
                label: "Starter",
                topics: ["HTML", "CSS", "JavaScript"],
              },
              {
                label: "Pro",
                topics: ["PHP", "MySQL", "Backend & databases"],
              },
            ],
          },
          {
            name: "Creative Design",
            age: "10+",
            desc:
              "Develop creativity, visual communication and digital production skills. Learners explore 3D creation, photo editing and video editing while turning their ideas into original digital projects.",
          },
        ],
      },
      breadcrumb: { home: "Home", academy: "Medinova Academy" },
      onlineLabel: "Live online classes",
      viewAllLabel: "View all courses",
      outcomesTitle: "What You'll Learn",
      courseDetailsTitle: "Course Details",
      moreCoursesTitle: "Explore More Courses",
      teaching: {
        badge: "How We Teach",
        title: "How We Teach",
        modelTitle: "A complete learning experience",
        steps: [
          {
            title: "Learn",
            desc: "Live instruction with practical explanations and demonstrations.",
          },
          {
            title: "Practice",
            desc: "Exercises and guided activities help learners apply each new concept.",
          },
          {
            title: "Create",
            desc: "Learners build real projects throughout the course.",
          },
          {
            title: "Showcase",
            desc: "Complete projects become part of their portfolio, followed by a certificate after course completion.",
          },
        ],
        model: [
          "Live classes",
          "Learning materials",
          "Exercises",
          "Community support",
        ],
      },
      finalCta: {
        title: "Ready to Start Learning?",
        subtitle:
          "Book a free trial and discover which learning path is right for you.",
        cta: "Book a Free Trial",
        scarcity: "Next cohort starts soon — only a few spots left.",
      },
      faq: {
        badge: "Frequently Asked Questions",
        title: "Have questions?",
        subtitle:
          "Answers to the most asked questions from parents and learners.",
        items: [
          {
            q: "What age can my child start?",
            a: "Our Academy starts from age 7+. Each course has its own recommended age range, so learners can choose a program suited to their age and experience.",
          },
          {
            q: "Does my child need previous experience?",
            a: "No. Several courses are designed for complete beginners. For more advanced courses, previous knowledge may be recommended.",
          },
          {
            q: "Which languages are the classes available in?",
            a: "Classes are available in English, French and Arabic, depending on the learner's language level and the course group.",
          },
          {
            q: "Are the classes online or in person?",
            a: "Classes are conducted live with an instructor. We can offer online learning, with the exact format depending on the group and schedule.",
          },
          {
            q: "Can my child try a class before enrolling?",
            a: "Yes. We offer a free trial lesson before enrollment. This allows the learner and parent to see how the class works before making a commitment.",
          },
          {
            q: "What will my child actually learn?",
            a: "Our courses focus on practical technology skills, problem-solving, logical thinking and creativity. Students learn by building projects rather than simply watching lessons.",
          },
          {
            q: "Will my child receive a certificate?",
            a: "Yes. Students receive a Certificate of Completion after successfully completing their course and final project.",
          },
          {
            q: "Will my child have projects to show?",
            a: "Yes. Students build projects throughout their course and finish with work they can keep as part of their digital portfolio.",
          },
          {
            q: "What support is available outside the live class?",
            a: "Students receive learning materials, exercises and support through the Academy community, where they can ask questions and receive guidance.",
          },
          {
            q: "How do I book a trial?",
            a: "Click Book a Free Trial and contact us through WhatsApp. We'll discuss the learner's age, interests and language before arranging the appropriate trial session.",
          },
        ],
      },
      whatsapp: {
        message:
          "Hello, I would like to book a free trial lesson at Medinova Academy.",
        online: "Online — Quick WhatsApp Reply",
        aria: "Chat on WhatsApp",
        quickQuestion: "Quick question via WhatsApp",
        cta: "Book a Free Trial",
      },
    },
  },
  fr: {
    nav: {
      solutions: "Nos Solutions",
      about: "Qui Sommes-Nous",
      portfolio: "Jeux & Portfolio",
      services: "Services Game Dev",
      contact: "Contact",
      hireStudio: "Engager le Studio",
      discoverTracks: "Découvrir les Parcours",
      subGameDev: "Développement de Jeux & Tech Spatiale",
      subGameDevDesc: "Jeux sur mesure, portails WebGL & ingénierie AR/VR",
      subAgency: "Agence de Croissance B2B",
      subAgencyDesc: "Packages marketing & croissance",
      subAcademy: "Académie Medinova",
      subAcademyDesc: "Parcours de code pour enfants & adultes",
      blog: "Blog",
    },
    blog: {
      metaTitle: "Blog Code pour Enfants & Parents | Medinova Studio",
      metaDescription:
        "Guides sur le code pour enfants, Scratch vs Python, Unity vs Roblox et les cours de code au Maroc — par l'équipe de Medinova Studio.",
      badge: "Le Blog Medinova",
      title: "Des Guides pour les Parents, Apprenants & Curieux",
      subtitle:
        "Des articles pratiques sur le code, le développement de jeux et les compétences numériques — écrits par ceux qui construisent et enseignent chaque jour.",
      readMore: "Lire l'article",
      backLabel: "Retour au blog",
      breadcrumbHome: "Accueil",
    },
    hero: {
      badge: "Disponible pour contrats Unity C#, AR/VR & Game Dev",
      headline:
        "Ingénierie de Jeux À Forte Adrénaline, 3D Interactive & Expériences Spatiales",
      subheadline:
        "Studio de jeux marocain spécialisé dans les jeux mobiles & PC d'action, les pipelines Unity C# sur mesure, les portails WebGL et les simulations 3D immersives.",
      ctaPlay: "Explorer les Jeux",
      ctaHire: "Engager le Studio",
    },
    tech: {
      label: "Crédibilité du Studio & Stack Technique",
      proof:
        "Soutenu par les incubateurs marocains de jeux vidéo & initiatives numériques nationales",
      badges: [
        "Unity 3D/2D",
        "C# Architecture",
        "Shader Graph",
        "WebGL Pipelines",
        "iOS/Android Deployment",
        "AR Foundation",
        "Blender",
      ],
    },
    founder: {
      badge: "Plein Feu sur le Fondateur",
      title: "Rencontrez le Fondateur",
      subtitle: "Mounir — Fondateur & Ingénieur Systèmes Principal",
      bio: "Spécialisé dans les pipelines Unity C# sur mesure, la physique de jeu, les builds WebGL haute performance et les titres mobiles publiés. Il crée des expériences interactives à forte adrénaline directement avec éditeurs, marques et partenaires studio.",
      linkedin: "https://www.linkedin.com/in/mouunirdev/",
      instagram: "https://www.instagram.com/medinova.studio",
    },
    portfolio: {
      badge: "Jouable & Publié",
      title: "Nos Jeux Publiés & Portfolio Commercial",
      subtitle:
        "Titres commerciaux live publiés sur iOS avec des sorties actives sur l'App Store.",
      featured: {
        title: "Blocks Evolution",
        badges: ["En Développement", "PC / WebGL / Console", "Puzzle Arcade"],
        description:
          "Puzzle arcade vertical en portrait avec un canon en bas qui tire des segments de deux cubes empilés en haut de la grille. Construit avec des systèmes de physique Unity sur mesure et des mécaniques dynamiques.",
        cta: "Essayer le Build Playtest Live",
        link: "https://app.gamearly.com/projects/211",
      },
      games: [
        {
          title: "Pharaoh's Guardian: Mummies",
          badges: ["iOS", "Action 3D / Survie"],
          description:
            "Défenseur d'action survie dans l'Égypte antique avec mécaniques de vagues de hordes et environnements 3D atmosphériques.",
          cta: "Voir sur l'App Store",
          link: "https://apps.apple.com/us/app/pharaohs-guardian-mummies/id6743336811",
          gallery: [
            "/images/games/pharaohs-guardian/2752x2064-screenshot.webp",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (1).webp",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (2).webp",
          ],
        },
        {
          title: "Sniper Elimination Challenge",
          badges: ["iOS", "Tireur Tactique 3D"],
          description:
            "Balistique de précision, mécaniques d'élimination tactique furtive et défis d'identification de cibles.",
          cta: "Voir sur l'App Store",
          link: "https://apps.apple.com/us/app/sniper-elimination-challenge/id6747273149",
          gallery: [
            "/images/games/sniper-elimination/screenshot1.webp",
            "/images/games/sniper-elimination/screenshot2.webp",
            "/images/games/sniper-elimination/screenshot3.webp",
          ],
        },
        {
          title: "Chameleon Outbreak: Camo Hunt",
          badges: ["iOS", "Détection Visuelle & Shaders"],
          description:
            "Jeu de détection visuelle par camouflage environnemental dynamique avec effets shaders adaptatifs.",
          cta: "Voir sur l'App Store",
          link: "https://apps.apple.com/us/app/chameleon-outbreak-camo-hunt/id6785619522",
          gallery: [
            "/images/games/chameleon-outbreak/1284x2778-screenshot (5).webp",
            "/images/games/chameleon-outbreak/1284x2778-screenshot (6).webp",
            "/images/games/chameleon-outbreak/2064x2752-screenshot (10).webp",
          ],
        },
        {
          title: "Blitz Combat Race",
          badges: ["iOS", "Course de Combat", "Physique"],
          description:
            "Course de véhicules de combat à grande vitesse avec power-ups, drift basé sur la physique et conduite arcade.",
          cta: "Voir sur l'App Store",
          link: "https://apps.apple.com/us/app/blitz-combat-race/id6741860986",
          gallery: [
            "/images/games/blitz-combat/2064x2752-screenshot (3).webp",
            "/images/games/blitz-combat/2064x2752-screenshot (4).webp",
            "/images/games/blitz-combat/2064x2752-screenshot.webp",
          ],
        },
      ],
      banner: {
        cta: "Explorer les Jeux Jouables & Démo sur itch.io",
        link: "https://medinova.itch.io/",
      },
    },
    services: {
      badge: "Ingénierie Game Dev",
      title: "Offres d'Ingénierie de Jeux Sur-Mesure",
      subtitle:
        "Trois offres claires — de la validation du gameplay au shipping cross-plateforme et aux simulations spatiales.",
      from: "À partir de",
      ht: "DHS HT",
      enterpriseQuote: "Sur Devis",
      cta: "Discuter de Votre Projet",
      cards: [
        {
          title: "Prototypage & Mécaniques Rapides",
          price: "8,000",
          description:
            "Ingénierie de boucles de gameplay C# sur mesure, greyboxing, polish du feel/VFX et build de test WebGL en 7–14 jours.",
        },
        {
          title: "Production Complète & Shipping Cross-Plateforme",
          price: "25,000",
          description:
            "Pipeline de développement 2D/3D complet pour PC (Steam), WebGL (CrazyGames) et Mobile (iOS/Android). Inclut UI/UX, intégration de réseaux publicitaires & IAP, support de soumission aux stores et 30 jours de support post-lancement.",
        },
        {
          title: "3D Spatiale B2B, AR/VR & Simulations Industrielles",
          price: "enterprise",
          description:
            "Formation interactive Meta Quest, WebAR avec AR Foundation et outils de découverte 3D touristiques/culturels.",
          enterprise: true,
        },
      ],
    },
    about: {
      badge: "À Propos de Medinova Studio",
      title: "Le Studio Derrière les Jeux",
      subtitle:
        "Un studio de jeux marocain indépendant qui conçoit des expériences interactives, des outils d'apprentissage et des moteurs de croissance B2B.",
      introTitle: "Qui Sommes-Nous",
      intro:
        "Medinova Studio est un studio indépendant marocain créant des jeux à forte adrénaline, des expériences spatiales immersives et des produits numériques axés sur la croissance, depuis l'Afrique du Nord.",
      pillars: [
        { title: "Game Dev & Tech Spatiale", description: "Jeux multi-plateformes, AR/VR et 3D interactive avec Unity." },
        { title: "Agence de Croissance B2B", description: "Marketing plein entonnoir, contenu et croissance propulsée par l'IA." },
        { title: "Académie Medinova", description: "Des parcours de code qui mènent de la logique visuelle au développement professionnel." },
      ],
    },
    hub: {
      hero: {
        badge: "Studio actif de développement de jeux & académie de code en ligne — Rabat, Maroc",
        headline:
          "Nous créons des jeux, faisons grandir les marques & formons la prochaine génération de développeurs.",
        subheadline:
          "Medinova Studio est un studio marocain indépendant qui conçoit des jeux Unity C#, des expériences AR/VR & WebGL, des systèmes de croissance B2B et des parcours de code en ligne en Scratch, Python et Unity C# — enseignés à distance depuis Rabat, Maroc.",
        ctaPrimary: "Découvrir Notre Travail",
        ctaSecondary: "Engager le Studio",
      },
      section: {
        badge: "Un Studio, Trois Moteurs",
        title: "Ce Que Nous Faisons",
        subtitle:
          "Trois divisions spécialisées sous un même toit — développement de jeux, croissance B2B et éducation au code.",
        cta: "Explorer",
      },
      gameDev: {
        title: "Studio de Développement de Jeux",
        desc: "Jeux Unity C# sur mesure, portails WebGL, AR/VR et simulations spatiales pour mobile, PC et web.",
      },
      agency: {
        title: "Agence de Croissance B2B",
        desc: "Plateformes web à forte conversion, systèmes d'acquisition IA et moteurs de croissance numérique.",
      },
      academy: {
        title: "Académie Medinova",
        desc: "Parcours de code certifiés en Scratch, Python et Unity C# avec diplômes vérifiables par QR code.",
      },
    },
    pillars: {
      games: "Développement de Jeux",
      gamesTitle: "Game Dev & Ingénierie Sur-Mesure",
      gamesSubtitle:
        "Jeux multi-plateformes, expériences AR/VR interactives et logiciels sur-mesure conçus pour l'échelle.",
      academy: "Académie Medinova",
      academyTitle: "Académie de Code — 7 ans à Adultes",
      academySubtitle:
        "De la logique visuelle au développement professionnel — des parcours structurés pour chaque âge et ambition.",
      from: "À partir de",
      enterpriseQuote: "Sur Devis",
      perMonth: "/ mois",
      ht: "DHS HT",
      getStarted: "Commencer",
      requestQuote: "Demander un Devis",
    },
    contact: {
      badge: "Contactez-nous",
      title: "Construisons Votre Jeu",
      subtitle:
        "Envoyez-nous un brief de projet pour demander un devis officiel ou une discussion.",
      name: "Nom",
      namePh: "Votre nom",
      email: "Email",
      emailPh: "vous@exemple.com",
      service: "Type de Projet",
      servicePh: "Choisissez un type de projet...",
      services: [
        "Prototype Rapide (8 000 DHS HT)",
        "Production Complète (25 000 DHS HT)",
        "Simulation AR/VR & Spatiale",
        "Autre",
      ],
      budget: "Budget Estimé",
      budgetPh: "Choisissez un budget estimé...",
      budgets: ["5 000 - 15 000 DHS", "15 000 - 30 000 DHS", "30 000+ DHS"],
      readiness: "Avancement du Projet",
      readinessPh: "Choisissez l'avancement du projet...",
      readinessOptions: [
        "GDD complet prêt",
        "Référence jouable prête",
        "Concept brut",
      ],
      message: "Message",
      messagePh: "Parlez-nous de votre jeu ou projet...",
      send: "Envoyer le Brief",
      sending: "Envoi du message...",
      sent: "Merci ! Votre brief de projet a été envoyé à contact@medinovastudio.com. Nous vous répondrons sous 24 heures.",
      emailLabel: "Écrivez-nous",
      location: "Maroc, Afrique du Nord",
      errors: {
        requiredName: "Veuillez saisir votre nom.",
        requiredEmail: "Veuillez saisir votre email.",
        invalidEmail: "Veuillez saisir une adresse email valide.",
        requiredService: "Veuillez sélectionner un type de projet.",
        requiredBudget: "Veuillez sélectionner un budget estimé.",
        requiredReadiness: "Veuillez sélectionner l'avancement de votre projet.",
        requiredMessage: "Veuillez saisir un message.",
      },
    },
    footer: {
      mission:
        "Systèmes digitaux à forte conversion, développement de jeux sur mesure et éducation tech.",
      location: "Rabat, Maroc 🇲🇦",
      support: "Contact & Support",
      colAgency: "Agence de Croissance B2B",
      colGameDev: "Game Dev & Tech Interactive",
      colAcademy: "Académie Medinova",
      colLegal: "Confiance, Légal & Conformité",
      cta: "Réserver un appel stratégique",
      agencyLinks: [
        "Plateformes Web à forte conversion",
        "Systèmes d'acquisition autonomes par IA",
        "Méta Ads & Performance Marketing",
        "Cadres de diagnostic & Retainers",
      ],
      gameDevLinks: [
        "Titres commerciaux & Jeux WebGL",
        "AR/VR sur mesure & Tech spatiale",
        "Serious Games & Simulations éducatives",
        "Publication de portails web",
      ],
      academyLinks: [
        "Parcours de code pour jeunes & adultes",
        "Curriculums Scratch, Python & Unity C#",
        "Modules certifiés imprimables & QR",
        "Vitrine des projets étudiants",
        "Blog",
      ],
      legalLinks: ["Politique de confidentialité", "Conditions d'utilisation"],
      taxDisclaimer:
        "Tarifs indiqués Hors Taxes (HT). TVA (20%) applicable selon la réglementation en vigueur.",
      rights: "Tous droits réservés.",
    },
    agency: {
      nav: {
        links: {
          framework: "Cadre de Croissance",
          solutions: "Solutions Clés",
          packages: "Forfaits & Offres",
          faq: "FAQ",
        },
        cta: "Réserver un appel stratégique",
      },
      hero: {
        badge: "Moteur de Croissance Digitale & Automatisation IA 360°",
        headline:
          "Nous concevons des sites web à forte conversion et des systèmes d'acquisition autonomes pour les entreprises en croissance.",
        subheadline:
          "Du design web responsive sur mesure et de la production média cinématographique aux publicités payantes de précision et au routage intelligent IA WhatsApp — nous orchestrons votre acquisition client du clic à la conversion.",
        ctaPrimary: "Explorer les forfaits de croissance",
        ctaSecondary: "Réserver un audit de marque gratuit",
        trust:
          "Nous accompagnons les marques ambitieuses avec une présence digitale haute performance, des pipelines de leads automatisés et des systèmes IA.",
      },
      pillars: {
        badge: "Solutions Clés",
        title: "L'Architecture de Croissance 360°",
        subtitle:
          "Quatre systèmes interconnectés conçus pour capturer les parts de marché et développer votre chiffre d'affaires.",
        cards: [
          {
            title: "Sites Web & Actifs Numériques Sur Mesure",
            desc: "Des sites rapides, mobile-first et responsives optimisés pour la conversion maximale et le SEO local (Google Business Profile).",
          },
          {
            title: "Production Média à Fort Impact",
            desc: "Vidéos promo professionnelles, Reels/TikToks viraux dynamiques à accroches à forte rétention, et copy premium.",
          },
          {
            title: "Médias Payants Performants",
            desc: "Campagnes précises Meta, Google et TikTok conçues pour un CAC faible et un volume de leads WhatsApp direct.",
          },
          {
            title: "Automatisation IA WhatsApp Intelligente",
            desc: "Qualification instantanée des leads 24/7, traitement automatique des objections, et synchronisation CRM fluide.",
          },
        ],
      },
      process: {
        badge: "Notre Process",
        title: "Notre Cadre de Croissance Eprouvé",
        subtitle:
          "Comment nous passons du diagnostic initial à la domination du marché en 14 jours.",
        steps: [
          {
            phase: "Phase 1",
            title: "Audit Métier & Diagnostic des Goulots",
            window: "Jours 1–3",
            desc: "Audit approfondi de vos tunnels de vente, chutes de trafic, vitesses mobiles et temps de réponse des leads.",
          },
          {
            phase: "Phase 2",
            title: "Benchmark Concurrentiel & Positionnement Offre",
            window: "Jours 4–7",
            desc: "Analyse des accroches publicitaires concurrentes, extraction des offres du marché, et ingénierie de votre proposition de valeur unique.",
          },
          {
            phase: "Phase 3",
            title: "Déploiement & Mise en Place",
            window: "Jours 8–14",
            desc: "Construction/refonte de vos actifs web, production des vidéos promo initiales, configuration des pixels et entraînement de votre agent IA WhatsApp sur mesure.",
          },
          {
            phase: "Phase 4",
            title: "Lancement Sprint & Moteur de Croissance Continu",
            window: "En continu",
            desc: "Tests A/B créatifs, optimisation hebdomadaire du bot IA, routage des leads en temps réel, et rapports analytiques exécutifs.",
          },
        ],
      },
      pricing: {
        badge: "Offres & Forfaits",
        title: "Forfaits de Croissance Transparents",
        subtitle:
          "Livrables de setup clairs associés à des rétentions mensuelles d'acquisition prévisibles.",
        setupLabel: "Frais de mise en place (Unique)",
        retainerLabel: "Rétention Mensuelle",
        perMonth: "/ mois",
        mostPopular: "LE PLUS POPULAIRE",
        plans: [
          {
            name: "Pack ESSENTIEL",
            tagline:
              "Présence digitale complète, site vitrine rapide, et conversion automatisée pour vos premiers prospects.",
            setup: "4 500 DHS HT",
            retainer: "6 000 DHS HT",
            features: [
              "Réseaux Sociaux : 2 Plateformes (Facebook & Instagram), 8–10 Posts/mois (Visuels, Carrousels, Copy)",
              "Production Vidéo : 4 Reels/TikToks Dynamiques (Format vertical, accroches, sous-titres animés, sound design)",
              "Ads Payants : 1 Campagne Meta Active (Génération de leads ou trafic WhatsApp) + Rapport Mensuel",
              "Livrable Site Web : 1 à 3 Pages, 100% Responsive Mobile, CTA WhatsApp Direct, SEO de Base & Setup Google Maps",
              "Automatisation IA : Message de Bienvenue Personnalisé, Bot FAQ 10 Questions, Routage des Prospects",
            ],
            cta: "Démarrer avec le Pack Essentiel",
          },
          {
            name: "Pack PRO GROWTH",
            tagline:
              "La solution ultime pour les entreprises à forte croissance qui veulent dominer leur marché et automatiser l'acquisition client.",
            setup: "7 500 DHS HT",
            retainer: "12 000 DHS HT",
            badge: "LE PLUS POPULAIRE",
            featured: true,
            features: [
              "Réseaux Sociaux : 3 Plateformes (FB, IG + TikTok ou LinkedIn), 15 Posts/mois, Modération active DM & Commentaires",
              "Production Vidéo : 10 Reels/TikToks Haut de Gamme (Scripts de vente, montage dynamique, sous-titres stylisés)",
              "Ads Payants : Gestion Multi-Campagnes (Ads Meta + Search/Retargeting Google), Tests A/B continus, Setup Pixel & CAPI",
              "Livrable Site Web : Site Web Complet 5–7 Pages, Score de Vitesse 85%+ Garanti, Audit UX/UI & SEO par Mots-clés",
              "Automatisation IA : Agent IA Intelligent entraîné sur votre base de connaissances, Qualification Automatisée (Nom, Besoin, Budget, Téléphone), Suivis Automatisés",
            ],
            cta: "Passez au Pro Growth",
          },
          {
            name: "Pack ENTERPRISE",
            tagline:
              "Infrastructure marketing 360° sur mesure, production vidéo cinématographique, et intégration CRM IA autonome.",
            setup: "14 000 DHS HT",
            retainer: "22 000 DHS HT",
            badge: "INFRASTRUCTURE 360° SUR MESURE",
            features: [
              "Réseaux Sociaux : Omnicanal (FB, IG, LinkedIn, TikTok, YouTube), Direction Artistique, Dashboard Temps Réel",
              "Production Vidéo : 18–20 Reels/Shorts Viraux à Haute Rétention avec Écriture de Scripts & Motion Design",
              "Ads Payants : Campagnes Omnicanales Full-Funnel (Meta, Google, TikTok, YouTube) + Optimisation CRO",
              "Livrable Site Web : Design Multi-Langues (Arabe, Français, Anglais), Micro-interactions, SEO Technique Avancé",
              "Automatisation IA & CRM : Agent IA Autonome LLM Sur Mesure, Sync Calendrier pour Rendez-vous, Intégrations CRM/Webhook Complètes (HubSpot, Zapier, Make, Sheets)",
            ],
            cta: "Demander une Consultation Enterprise",
          },
        ],
      },
      terms: {
        title: "Facturation & Conditions",
        items: [
          {
            label: "Facturation",
            text: "Tarifs indiqués Hors Taxes (HT). TVA (20%) applicable selon la réglementation.",
          },
          {
            label: "Budget Publicitaire",
            text: "Les budgets d'achat d'espace (Meta, Google, TikTok) sont à la charge exclusive du client.",
          },
          {
            label: "Frais API Tiers",
            text: "Coûts de consommation directes (WhatsApp Business API, OpenAI tokens) réglés par le client.",
          },
          {
            label: "Engagement",
            text: "Engagement initial de 3 mois requis sur l'ensemble des abonnements mensuels.",
          },
        ],
      },
      faq: {
        badge: "FAQ",
        title: "Questions Fréquentes",
        items: [
          {
            q: "En combien de temps pouvons-nous finaliser la phase de setup et lancer ?",
            a: "Notre phase de setup (construction du site, tournage/montage de la vidéo promo initiale, configuration du compte publicitaire, et entraînement IA) prend de 7 à 14 jours.",
          },
          {
            q: "Comment l'agent IA WhatsApp qualifie-t-il les leads entrants ?",
            a: "L'agent IA engage le trafic instantanément 24/7, répond selon votre base de connaissances, collecte les données de qualification clés (budget, délai, besoins), et route les leads prêts à acheter directement à votre équipe commerciale.",
          },
          {
            q: "Pourquoi un engagement initial de 3 mois est-il requis pour les rétentions mensuelles ?",
            a: "Les algorithmes marketing, l'optimisation des pixels Meta/Google et l'élan des vidéos organiques nécessitent une fenêtre minimale de 90 jours pour générer un ROI cohérent et composé.",
          },
          {
            q: "Pouvons-nous passer à un niveau de forfait supérieur à mesure que notre activité grandit ?",
            a: "Oui, vous pouvez passer à un palier de rétention mensuelle supérieur à tout moment selon votre volume de contenu et votre dépense publicitaire.",
          },
        ],
      },
      cta: {
        headline: "Prêt à Automatiser & Développer Votre Acquisition Client ?",
        subheadline:
          "Réservez un appel stratégique de 20 minutes pour auditer votre présence digitale, analyser les écarts concurrentiels, et choisir votre système de croissance Medinova.",
        button: "Réserver une Session Stratégique",
      },
      contact: {
        badge: "Réserver un appel stratégique",
        title: "Ingénierons Votre Croissance",
        subtitle:
          "Parlez-nous de votre entreprise et nous concevrons un système de croissance à haute conversion adapté à vos objectifs — sites web, médias payants et automatisation IA.",
        emailLabel: "Écrivez-nous",
        whatsappLabel: "Contactez-nous via WhatsApp",
        whatsappMessage:
          "Bonjour Medinova Growth, je souhaite réserver un appel stratégique.",
        form: {
          name: "Votre Nom",
          namePh: "Alex Martin",
          company: "Entreprise",
          companyPh: "Votre société",
          email: "Email Professionnel",
          emailPh: "alex@entreprise.com",
          scope: "Périmètre du Projet",
          scopePh:
            "Décrivez brièvement vos objectifs : site web, publicités, automatisation IA...",
          submit: "Réserver un appel stratégique",
          submitting: "Envoi...",
          sent: "Merci ! Votre demande a été envoyée à contact@medinovastudio.com. Nous vous répondrons sous 24 heures.",
          error:
            "Une erreur est survenue. Réessayez ou écrivez-nous directement.",
        },
      },
      footer: {
        tagline:
          "Medinova Growth — sites web à haute conversion, automatisation IA et croissance digitale qui génère des résultats.",
        rights: "Medinova Growth. Tous droits réservés.",
      },
    },
    academy: {
      announcement:
        "Cours en direct pour les apprenants dès 7 ans · Anglais, Français & Arabe",
      announcementCta: "Réserver un Essai Gratuit",
      hero: {
        badge: "Académie de code en ligne · dès 7 ans · Rabat, Maroc",
        headline:
          "Cours de codage et de développement de jeux pour enfants — en ligne au Maroc",
        subheadline:
          "Apprenez le codage, le développement de jeux et les compétences numériques en direct avec Medinova Studio — depuis Rabat, Casablanca et partout au Maroc. Des classes pratiques et basées sur des projets pour les apprenants dès 7 ans, animées par le fondateur d'un studio de jeux actif.",
        cta: "Réserver un Essai Gratuit",
        scarcity: "Places limitées — réservez tôt",
        trust: [
          {
            title: "Apprenants dès 7 ans",
            desc: "Des cours adaptés à chaque âge et niveau",
          },
          {
            title: "Anglais · Français · Arabe",
            desc: "Des cours en trois langues",
          },
          {
            title: "En direct & par projets",
            desc: "Animés par un instructeur avec de vrais projets",
          },
        ],
      },
      why: {
        badge: "Pourquoi Medinova Academy",
        title: "Apprendre en pratiquant, grâce à de vrais projets",
        items: [
          {
            title: "Apprendre en pratiquant, pas en regardant",
            desc: "Ne vous contentez pas de regarder des cours. Appliquez ce que vous apprenez, expérimentez vos idées et réalisez de vrais projets pour faire progresser vos compétences.",
          },
          {
            title: "Transformer le savoir en projets",
            desc: "Chaque nouvelle compétence est une occasion de construire un projet. Conservez et faites évoluer vos réalisations pour constituer un portfolio qui reflète ce que vous savez vraiment faire.",
          },
          {
            title: "Apprendre d'une expérience concrète du métier",
            desc: "Apprenez directement auprès du fondateur de Medinova Studio et bénéficiez de l'expérience d'un studio qui développe réellement des jeux, des technologies numériques et des projets lancés.",
          },
        ],
      },
      founder: {
        badge: "Le Fondateur",
        title: "Apprendre directement du fondateur de Medinova Studio",
        text:
          "Les apprenants sont accompagnés par Mounir Abbotti, fondateur et développeur principal de Medinova Studio — un studio actif de développement de jeux et de technologies avec des jeux publiés et des projets réels. Plutôt que de suivre des leçons préenregistrées, les apprenants apprennent auprès de quelqu'un qui conçoit, construit et livre de la technologie chaque jour.",
        caption:
          "Mounir Abbotti — Fondateur de Medinova Studio & Développeur principal.",
      },
      work: {
        badge: "Notre Travail",
        title: "Soutenu par un vrai studio qui livre de vrais projets",
        subtitle:
          "Medinova Academy est un programme de Medinova Studio, un studio actif de développement de jeux et de technologies. Les projets ci-dessous sont des projets de Medinova Studio — un travail réel publié, pas des projets d'élèves.",
        robloxBadge: "Medinova Studio sur Roblox",
        robloxTitle:
          "Créateur de \"Zombies WarZone\" sur Roblox — plus de 1,000,000 de parties jouées dans le monde.",
        robloxCta: "Jouer sur Roblox",
        mgeBadge: "Morocco Gaming Expo",
        mgeTitle: "Stand C38 — Morocco Gaming Expo",
        mgeDesc:
          "Présentation de nos jeux publiés au public lors de l'événement national du jeu vidéo au Maroc.",
        gamesLabel: "Projets de Medinova Studio — Publiés sur l'App Store",
        games: [
          "Pharaoh's Guardian: Mummies",
          "Chameleon Outbreak: Camo Hunt",
          "Sniper Elimination Challenge",
          "Blitz Combat Race",
        ],
        studioLink: "Découvrir le portfolio complet du studio",
      },
      courses: {
        badge: "Découvrir Nos Cours",
        title: "Découvrir Nos Cours",
        intro:
          "Des compétences numériques et de la programmation au développement de jeux, au développement web et au design créatif, les apprenants peuvent explorer la technologie grâce à un apprentissage pratique basé sur des projets.",
        agesLabel: "Âge recommandé",
        progressionLabel: "Progression",
        viewLabel: "Voir le détail du cours",
        items: [
          {
            name: "Essentiels Numériques",
            age: "7+",
            desc:
              "Acquérir les compétences numériques essentielles du quotidien : informatique de base, Word, Excel, PowerPoint, navigation sur Internet et plus encore.",
          },
          {
            name: "Scratch",
            age: "7+",
            desc:
              "Développer la logique et la résolution de problèmes grâce à la programmation visuelle. Les enfants apprennent les bases des algorithmes, du séquencement, des mathématiques et de la pensée informatique tout en créant leurs propres histoires interactives, animations et jeux.",
          },
          {
            name: "Python",
            age: "11+",
            desc:
              "Développer une pensée structurée, la résolution de problèmes et des compétences de programmation grâce à Python. Les apprenants transforment leurs idées en programmes fonctionnels, en jeux et en applications pratiques, tout en construisant des bases solides pour des technologies plus avancées.",
          },
          {
            name: "Développement de Jeux Roblox",
            age: "9+",
            desc:
              "Développer la créativité, la pensée spatiale et la résolution de problèmes en concevant et en construisant des mondes 3D interactifs. Les apprenants explorent le game design et la programmation tout en créant leurs propres expériences Roblox.",
          },
          {
            name: "Développement de Jeux Unity & C#",
            age: "12+",
            desc:
              "Développer des compétences avancées de résolution de problèmes, de logique et de programmation grâce au développement de jeux professionnel. Les apprenants utilisent Unity et C# pour concevoir des mécaniques, créer des jeux 2D et 3D et transformer leurs idées en projets jouables.",
          },
          {
            name: "Développement Web",
            age: "11+",
            desc:
              "Comprendre le fonctionnement des sites web tout en développant créativité, logique et résolution de problèmes. Les apprenants commencent par HTML, CSS et JavaScript, puis progressent vers PHP et MySQL pour construire des sites connectés à de vraies bases de données.",
            levels: [
              {
                label: "Starter",
                topics: ["HTML", "CSS", "JavaScript"],
              },
              {
                label: "Pro",
                topics: ["PHP", "MySQL", "Backend & bases de données"],
              },
            ],
          },
          {
            name: "Design Créatif",
            age: "10+",
            desc:
              "Développer la créativité, la communication visuelle et les compétences de production numérique. Les apprenants explorent la création 3D, la retouche photo et le montage vidéo tout en transformant leurs idées en projets numériques originaux.",
          },
        ],
      },
      breadcrumb: { home: "Accueil", academy: "Medinova Academy" },
      onlineLabel: "Cours en ligne en direct",
      viewAllLabel: "Voir tous les cours",
      outcomesTitle: "Ce Que Vous Allez Apprendre",
      courseDetailsTitle: "Détails du Cours",
      moreCoursesTitle: "Explorer Plus de Cours",
      teaching: {
        badge: "Comment Nous Enseignons",
        title: "Comment Nous Enseignons",
        modelTitle: "Une expérience d'apprentissage complète",
        steps: [
          {
            title: "Apprendre",
            desc: "Des cours en direct avec des explications pratiques et des démonstrations.",
          },
          {
            title: "Pratiquer",
            desc: "Des exercices et des activités guidées aident les apprenants à appliquer chaque nouvelle notion.",
          },
          {
            title: "Créer",
            desc: "Les apprenants construisent de vrais projets tout au long du cours.",
          },
          {
            title: "Présenter",
            desc: "Les projets terminés rejoignent leur portfolio, suivis d'un certificat à la fin du cours.",
          },
        ],
        model: [
          "Cours en direct",
          "Supports de cours",
          "Exercices",
          "Accompagnement communautaire",
        ],
      },
      finalCta: {
        title: "Prêt à Commencer ?",
        subtitle:
          "Réservez un essai gratuit et découvrez quel parcours d'apprentissage vous convient.",
        cta: "Réserver un Essai Gratuit",
        scarcity: "La prochaine cohorte commence bientôt — il ne reste que quelques places.",
      },
      faq: {
        badge: "Questions Fréquentes",
        title: "Vous avez des questions ?",
        subtitle:
          "Les réponses aux questions les plus posées par les parents et les apprenants.",
        items: [
          {
            q: "À quel âge mon enfant peut-il commencer ?",
            a: "Notre Académie accueille les apprenants dès 7 ans. Chaque cours a sa propre tranche d'âge recommandée, afin que chacun choisisse un programme adapté à son âge et à son expérience.",
          },
          {
            q: "Mon enfant a-t-il besoin d'une expérience préalable ?",
            a: "Non. Plusieurs cours sont conçus pour les grands débutants. Pour les cours plus avancés, des connaissances préalables peuvent être recommandées.",
          },
          {
            q: "Dans quelles langues sont dispensés les cours ?",
            a: "Les cours sont disponibles en anglais, en français et en arabe, selon le niveau de langue de l'apprenant et le groupe du cours.",
          },
          {
            q: "Les cours sont-ils en ligne ou en présentiel ?",
            a: "Les cours sont dispensés en direct avec un instructeur. Nous pouvons proposer un apprentissage en ligne, le format exact dépendant du groupe et de l'emploi du temps.",
          },
          {
            q: "Mon enfant peut-il essayer un cours avant de s'inscrire ?",
            a: "Oui. Nous proposons un cours d'essai gratuit avant l'inscription. Cela permet à l'apprenant et au parent de voir comment se déroule le cours avant de s'engager.",
          },
          {
            q: "Qu'est-ce que mon enfant va réellement apprendre ?",
            a: "Nos cours se concentrent sur les compétences technologiques pratiques, la résolution de problèmes, la logique et la créativité. Les élèves apprennent en construisant des projets plutôt qu'en regardant simplement des leçons.",
          },
          {
            q: "Mon enfant recevra-t-il un certificat ?",
            a: "Oui. Les élèves reçoivent un certificat de réussite après avoir terminé avec succès leur cours et leur projet final.",
          },
          {
            q: "Mon enfant aura-t-il des projets à montrer ?",
            a: "Oui. Les élèves construisent des projets tout au long de leur cours et terminent avec des travaux qu'ils peuvent garder dans leur portfolio numérique.",
          },
          {
            q: "Quel accompagnement est disponible en dehors des cours en direct ?",
            a: "Les élèves reçoivent des supports de cours, des exercices et un accompagnement via la communauté de l'Académie, où ils peuvent poser des questions et recevoir des conseils.",
          },
          {
            q: "Comment réserver un essai ?",
            a: "Cliquez sur Réserver un Essai Gratuit et contactez-nous via WhatsApp. Nous discuterons de l'âge, des centres d'intérêt et de la langue de l'apprenant avant d'organiser la séance d'essai adaptée.",
          },
        ],
      },
      whatsapp: {
        message:
          "Bonjour, je souhaite réserver un cours d'essai gratuit à Medinova Academy.",
        online: "En ligne — Réponse rapide via WhatsApp",
        aria: "Discuter sur WhatsApp",
        quickQuestion: "Question rapide via WhatsApp",
        cta: "Réserver un Essai Gratuit",
      },
    },
  },
  ar: {
    nav: {
      solutions: "خدماتنا",
      about: "من نحن",
      portfolio: "الألعاب والمعرض",
      services: "خدمات تطوير الألعاب",
      contact: "تواصل",
      hireStudio: "تواصل مع الاستوديو",
      discoverTracks: "اكتشف المسارات",
      subGameDev: "تطوير الألعاب والتقنيات المكانية",
      subGameDevDesc: "ألعاب مخصصة، بوابات WebGL وهندسة AR/VR",
      subAgency: "وكالة نمو B2B",
      subAgencyDesc: "باقات تسويق ونمو",
      subAcademy: "أكاديمية Medinova",
      subAcademyDesc: "دورات برمجة وتقنية من سن 7 سنوات",
      blog: "المدونة",
    },
    blog: {
      metaTitle: "مدونة البرمجة للأطفال والآباء | Medinova Studio",
      metaDescription:
        "أدلة حول برمجة الأطفال، سكراتش مقابل بايثون، Unity مقابل Roblox، ودورات البرمجة في المغرب — من فريق استوديو Medinova.",
      badge: "مدونة Medinova",
      title: "أدلة للآباء والمتعلمين والمهتمين",
      subtitle:
        "مقالات عملية حول برمجة الأطفال وتطوير الألعاب والمهارات الرقمية — بقلم من يبنون ويعلّمون كل يوم.",
      readMore: "اقرأ المقال",
      backLabel: "العودة إلى المدونة",
      breadcrumbHome: "الرئيسية",
    },
    hero: {
      badge: "متاحون لعقود Unity C# وAR/VR وتطوير الألعاب",
      headline: "هندسة ألعاب عالية الإثارة، وتجارب 3D تفاعلية ومكانية",
      subheadline:
        "استوديو ألعاب مغربي متخصص في ألعاب الأكشن للجوال والكمبيوتر، وخطوط إنتاج Unity C# مخصصة، وبوابات WebGL، ومحاكاة 3D غامرة.",
      ctaPlay: "استكشف الألعاب",
      ctaHire: "استأجر الاستوديو",
    },
    tech: {
      label: "مصداقية الاستوديو والتقنيات",
      proof: "مدعومون بحاضنات ألعاب الفيديو المغربية والمبادرات الرقمية الوطنية",
      badges: [
        "Unity 3D/2D",
        "C# Architecture",
        "Shader Graph",
        "WebGL Pipelines",
        "iOS/Android Deployment",
        "AR Foundation",
        "Blender",
      ],
    },
    founder: {
      badge: "تسليط الضوء على المؤسس",
      title: "تعرّف على المؤسس",
      subtitle: "منير — مؤسس ومهندس أنظمة رئيسي",
      bio: "متخصص في خطوط إنتاج Unity C# المخصصة، وفيزياء الألعاب، وإصدارات WebGL عالية الأداء، والألعاب المنشورة للجوال. يبني تجارب تفاعلية عالية الإثارة مباشرة مع الناشرين والعلامات التجارية وشركاء الاستوديو.",
      linkedin: "https://www.linkedin.com/in/mouunirdev/",
      instagram: "https://www.instagram.com/medinova.studio",
    },
    portfolio: {
      badge: "قابلة للعب ومنشورة",
      title: "ألعابنا المنشورة والمحفظة التجارية",
      subtitle:
        "إصدارات تجارية مباشرة على iOS مع إطلاق نشط على App Store.",
      featured: {
        title: "Blocks Evolution",
        badges: ["قيد التطوير", "PC / WebGL / Console", "ألغاز آركيد"],
        description:
          "لغز آركيد عمودي بمطرقة سفلية تطلق قطعاً من مكعبين تتكدس أعلى الشبكة. مبني على فيزياء Unity مخصصة وميكانيكيات ديناميكية.",
        cta: "جرّب نسخة اللعب التجريبية المباشرة",
        link: "https://app.gamearly.com/projects/211",
      },
      games: [
        {
          title: "Pharaoh's Guardian: Mummies",
          badges: ["iOS", "أكشن 3D / بقاء"],
          description:
            "مدافع بقاء أكشن في مصر القديمة مع موجات غزاة وبيئات 3D جوية.",
          cta: "عرض على App Store",
          link: "https://apps.apple.com/us/app/pharaohs-guardian-mummies/id6743336811",
          gallery: [
            "/images/games/pharaohs-guardian/2752x2064-screenshot.webp",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (1).webp",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (2).webp",
          ],
        },
        {
          title: "Sniper Elimination Challenge",
          badges: ["iOS", "قناص تكتيكي 3D"],
          description:
            "قذف دقيق، ميكانيكيات إقصاء تكتيكي خفي، وتحديات تحديد الأهداف.",
          cta: "عرض على App Store",
          link: "https://apps.apple.com/us/app/sniper-elimination-challenge/id6747273149",
          gallery: [
            "/images/games/sniper-elimination/screenshot1.webp",
            "/images/games/sniper-elimination/screenshot2.webp",
            "/images/games/sniper-elimination/screenshot3.webp",
          ],
        },
        {
          title: "Chameleon Outbreak: Camo Hunt",
          badges: ["iOS", "تحدٍ بصري وShaders"],
          description:
            "لعبة كشف بصري بالتمويه البيئي الديناميكي مع تأثيرات شادر متكيفة.",
          cta: "عرض على App Store",
          link: "https://apps.apple.com/us/app/chameleon-outbreak-camo-hunt/id6785619522",
          gallery: [
            "/images/games/chameleon-outbreak/1284x2778-screenshot (5).webp",
            "/images/games/chameleon-outbreak/1284x2778-screenshot (6).webp",
            "/images/games/chameleon-outbreak/2064x2752-screenshot (10).webp",
          ],
        },
        {
          title: "Blitz Combat Race",
          badges: ["iOS", "سباق قتالي", "فيزياء"],
          description:
            "سباق سيارات قتالية عالي السرعة مع تعزيزات، وانجراف قائم على الفيزياء، وتحكم آركيد.",
          cta: "عرض على App Store",
          link: "https://apps.apple.com/us/app/blitz-combat-race/id6741860986",
          gallery: [
            "/images/games/blitz-combat/2064x2752-screenshot (3).webp",
            "/images/games/blitz-combat/2064x2752-screenshot (4).webp",
            "/images/games/blitz-combat/2064x2752-screenshot.webp",
          ],
        },
      ],
      banner: {
        cta: "استكشف الألعاب القابلة للعب والعروض التجريبية على itch.io",
        link: "https://medinova.itch.io/",
      },
    },
    services: {
      badge: "هندسة ألعاب",
      title: "عروض هندسة ألعاب مخصصة",
      subtitle:
        "ثلاثة عروض واضحة — من التحقق من أسلوب اللعب إلى الإطلاق متعدد المنصات والمحاكاة المكانية.",
      from: "ابتداءً من",
      ht: "درهم (HT)",
      enterpriseQuote: "عرض سعر",
      cta: "ناقش مشروعك",
      cards: [
        {
          title: "نماذج أولية وميكانيكيات سريعة",
          price: "8,000",
          description:
            "هندسة حلقات لعب C# مخصصة، وتجريب، وصقل الإحساس/VFX، وبناء اختبار WebGL في 7–14 يوماً.",
        },
        {
          title: "إنتاج كامل وإطلاق متعدد المنصات",
          price: "25,000",
          description:
            "خط إنتاج 2D/3D كامل لأجهزة PC (Steam) وWebGL (CrazyGames) والجوال (iOS/Android). يشمل UI/UX ودمج شبكات الإعلانات والشراء داخل التطبيق ودعم الإرسال للمتاجر و30 يوماً من الدعم بعد الإطلاق.",
        },
        {
          title: "3D مكاني B2B وAR/VR ومحاكاة صناعية",
          price: "enterprise",
          description:
            "تدريب تفاعلي على Meta Quest، وWebAR عبر AR Foundation، وأدوات اكتشاف ثلاثية الأبعاد سياحية/ثقافية.",
          enterprise: true,
        },
      ],
    },
    about: {
      badge: "عن استوديو Medinova",
      title: "الاستوديو وراء الألعاب",
      subtitle:
        "استوديو ألعاب مغربي مستقل يصمم تجارب تفاعلية وأدوات تعلم ومحركات نمو B2B.",
      introTitle: "من نحن",
      intro:
        "استوديو Medinova استوديو مغربي مستقل يبتكر ألعاباً عالية الإثارة وتجارب مكانية غامرة ومنتجات رقمية موجهة للنمو من قلب شمال أفريقيا.",
      pillars: [
        { title: "تطوير الألعاب والتقنيات المكانية", description: "ألعاب متعددة المنصات وAR/VR و3D تفاعلية مبنية بـ Unity." },
        { title: "وكالة نمو B2B", description: "تسويق شامل ومحتوى ونمو مدعوم بالذكاء الاصطناعي." },
        { title: "أكاديمية Medinova", description: "دورات برمجة تنقل المتعلمين من الأساسيات إلى تطوير الألعاب والمواقع." },
      ],
    },
    hub: {
      hero: {
        badge: "استوديو تطوير ألعاب نشط وأكاديمية برمجة عبر الإنترنت — الرباط، المغرب",
        headline: "نصنع الألعاب، ننمّي العلامات التجارية ونعلّم الجيل القادم من المطورين.",
        subheadline:
          "استوديو Medinova استوديو مغربي مستقل يصمم ألعاب Unity C# وتجارب AR/VR وWebGL وأنظمة نمو B2B ودورات برمجة عبر الإنترنت في Scratch وPython وUnity وC# — تُدرَّس عن بُعد من الرباط، المغرب.",
        ctaPrimary: "استكشف أعمالنا",
        ctaSecondary: "تواصل مع الاستوديو",
      },
      section: {
        badge: "استوديو واحد، ثلاثة محركات",
        title: "ماذا نقدم",
        subtitle: "ثلاثة أقسام متخصصة تحت سقف واحد — تطوير الألعاب، نمو B2B، وتعليم البرمجة.",
        cta: "استكشف",
      },
      gameDev: {
        title: "استوديو تطوير الألعاب",
        desc: "ألعاب Unity C# مخصصة وبوابات WebGL وتجارب AR/VR ومحاكاة مكانية للجوال والحاسوب والويب.",
      },
      agency: {
        title: "وكالة نمو B2B",
        desc: "منصات ويب عالية التحويل وأنظمة اكتساب بالذكاء الاصطناعي ومحركات نمو رقمية.",
      },
      academy: {
        title: "أكاديمية Medinova",
        desc: "دورات برمجة وتقنية في Scratch وPython وUnity وC#، بحصص مباشرة وتعلّم قائم على المشاريع.",
      },
    },
    pillars: {
      games: "تطوير الألعاب",
      gamesTitle: "تطوير الألعاب والهندسة المخصصة",
      gamesSubtitle:
        "ألعاب متعددة المنصات، تجارب AR/VR تفاعلية، وبرمجيات مخصصة مبنية للتوسع.",
      academy: "أكاديمية Medinova",
      academyTitle: "أكاديمية البرمجة والتقنية — من سن 7 سنوات",
      academySubtitle:
        "من الأساسيات إلى تطوير الألعاب والمواقع — مسارات منظمة لكل مستوى.",
      from: "ابتداءً من",
      enterpriseQuote: "عرض سعر",
      perMonth: "/ شهر",
      ht: "درهم (HT)",
      getStarted: "ابدأ الآن",
      requestQuote: "طلب عرض سعر",
    },
    contact: {
      badge: "تواصل معنا",
      title: "لنبنِ لعبتك",
      subtitle: "أرسل لنا موجز المشروع لطلب عرض سعر رسمي أو نقاش.",
      name: "الاسم",
      namePh: "اسمك",
      email: "البريد الإلكتروني",
      emailPh: "you@example.com",
      service: "نوع المشروع",
      servicePh: "اختر نوع المشروع...",
      services: [
        "نموذج أولي سريع (8,000 درهم HT)",
        "إنتاج كامل (25,000 درهم HT)",
        "محاكاة AR/VR ومكانية",
        "أخرى",
      ],
      budget: "الميزانية التقديرية",
      budgetPh: "اختر ميزانية تقديرية...",
      budgets: ["5,000 - 15,000 درهم", "15,000 - 30,000 درهم", "30,000+ درهم"],
      readiness: "جاهزية المشروع",
      readinessPh: "اختر جاهزية المشروع...",
      readinessOptions: [
        "مستند تصميم كامل جاهز",
        "نسخة مرجعية قابلة للعب",
        "فكرة أولية",
      ],
      message: "الرسالة",
      messagePh: "أخبرنا عن لعبتك أو مشروعك...",
      send: "إرسال الموجز",
      sending: "جارٍ إرسال الرسالة...",
      sent: "شكراً لك! تم إرسال موجز مشروعك إلى contact@medinovastudio.com. سنرد خلال 24 ساعة.",
      emailLabel: "راسلنا",
      location: "المغرب، شمال أفريقيا",
      errors: {
        requiredName: "يرجى إدخال اسمك.",
        requiredEmail: "يرجى إدخال بريدك الإلكتروني.",
        invalidEmail: "يرجى إدخال بريد إلكتروني صالح.",
        requiredService: "يرجى اختيار نوع المشروع.",
        requiredBudget: "يرجى اختيار ميزانية تقديرية.",
        requiredReadiness: "يرجى اختيار جاهزية مشروعك.",
        requiredMessage: "يرجى إدخال رسالة.",
      },
    },
    footer: {
      mission:
        "منصات ويب مصممة لزيادة التحويلات، وتطوير ألعاب مخصصة، وتعليم تقني.",
      location: "الرباط، المغرب 🇲🇦",
      support: "تواصل ودعم",
      colAgency: "وكالة النمو B2B",
      colGameDev: "تطوير الألعاب والتقنية التفاعلية",
      colAcademy: "أكاديمية Medinova",
      colLegal: "الثقة، القانون والامتثال",
      cta: "احجز مكالمة استراتيجية",
      agencyLinks: [
        "منصات ويب مصممة لزيادة التحويلات",
        "أنظمة اكتساب ذاتية بالذكاء الاصطناعي",
        "إعلانات ميتا والتسويق بالأداء",
        "تحليل الأداء وخطط النمو والاشتراكات الشهرية",
      ],
      gameDevLinks: [
        "ألعاب تجارية وألعاب WebGL",
        "تقنية AR/VR مخصصة وتقنيات مكانية",
        "ألعاب تعليمية ومحاكاة تربوية",
        "تطوير ونشر بوابات الويب",
      ],
      academyLinks: [
        "دورات البرمجة والتقنية من سن 7 سنوات",
        "مسارات البرمجة باستخدام Scratch وPython وUnity وC#",
        "شهادة إتمام الدورة",
        "ملف أعمال المتعلمين",
        "المدونة",
      ],
      legalLinks: ["سياسة الخصوصية", "شروط الخدمة"],
      taxDisclaimer:
        "الأسعار المعروضة خارج الضريبة (HT). تُطبَّق ضريبة القيمة المضافة (20%) وفقاً للأنظمة المعمول بها.",
      rights: "جميع الحقوق محفوظة.",
    },
    agency: {
      nav: {
        links: {
          framework: "إطار النمو",
          solutions: "الحلول الأساسية",
          packages: "الباقات والعروض",
          faq: "الأسئلة الشائعة",
        },
        cta: "احجز مكالمة استراتيجية",
      },
      hero: {
        badge: "محرك النمو الرقمي 360° وأتمتة الذكاء الاصطناعي",
        headline:
          "نصمّم مواقع عالية التحويل وأنظمة اكتساب مستقلة للشركات النامية.",
        subheadline:
          "من تصميم مواقع ويب متجاوبة مخصّصة وإنتاج وسائط سينمائي إلى إعلانات مدفوعة دقيقة وتوجيه ذكي عبر واتساب — نحن نهندس اكتساب عملائك من النقرة إلى التحويل.",
        ctaPrimary: "استكشف باقات النمو",
        ctaSecondary: "احجز تدقيق علامة تجارية مجاني",
        trust:
          "نمكّن العلامات التجارية الطموحة بحضور رقمي عالي الأداء، ومسارات عملاء آلية، وأنظمة ذكاء اصطناعي.",
      },
      pillars: {
        badge: "الحلول الأساسية",
        title: "بنية النمو 360°",
        subtitle:
          "أربعة أنظمة مترابطة مصمّمة لاقتناص حصة السوق وتوسيع إيراداتك.",
        cards: [
          {
            title: "مواقع ويب وأصول رقمية مخصّصة",
            desc: "مواقع سريعة ومتجاوبة للجوال أولاً، محسّنة لأقصى تحويل وتحسين محلي (Google Business Profile).",
          },
          {
            title: "إنتاج وسائط عالي التأثير",
            desc: "فيديوهات ترويجية احترافية، ريلز/تيك توكس ديناميكية بعوامل جذب عالية البقاء، ونسخ براند متميزة.",
          },
          {
            title: "إعلانات مدفوعة عالية الأداء",
            desc: "حملات دقيقة على Meta وGoogle وTikTok مصمّمة لتكلفة اكتساب منخفضة وحجم leads واتساب مباشر.",
          },
          {
            title: "أتمتة ذكاء اصطناعي ذكية عبر واتساب",
            desc: "تأهيل فوري للعملاء 24/7، معالجة تلقائية للاعتراضات، ومزامنة سلسة مع CRM.",
          },
        ],
      },
      process: {
        badge: "عمليتنا",
        title: "إطار النمو الموثوق لدينا",
        subtitle:
          "كيف ننتقل بنشاطك من التشخيص الأولي إلى سيادة السوق في 14 يومًا.",
        steps: [
          {
            phase: "المرحلة 1",
            title: "التدقيق المétierي وتشخيص الاختناقات",
            window: "الأيام 1–3",
            desc: "تدقيق معمّق في مسارات المبيعات الحالية، وهبوط الزيارات، وسرعات الجوال، وأوقات استجابة العملاء.",
          },
          {
            phase: "المرحلة 2",
            title: "التحليل التنافسي وتموضع العرض",
            window: "الأيام 4–7",
            desc: "تحليل عوامل الجذب الإعلانية للمنافسين، واستخراج عروض السوق، وهندسة قيمتك الفريدة.",
          },
          {
            phase: "المرحلة 3",
            title: "الإعداد ونشر الأصول",
            window: "الأيام 8–14",
            desc: "بناء/تطوير أصول الويب، وإنتاج الفيديوهات الترويجية الأولية، وإعداد البكسلات، وتدريب وكيل واتساب الذكي المخصص.",
          },
          {
            phase: "المرحلة 4",
            title: "إطلاق سبرينت ومحرك نمو مستمر",
            window: "مستمر",
            desc: "اختبارات A/B إبداعية، تحسين أسبوعي للبوت، توجيه فوري للعملاء، وتقارير تحليلية تنفيذية.",
          },
        ],
      },
      pricing: {
        badge: "العروض والباقات",
        title: "باقات نمو شفافة",
        subtitle:
          "تسليمات إعداد واضحة مقترنة باشتراكات اكتساب شهرية يمكن التنبؤ بها.",
        setupLabel: "رسوم الإعداد (دفعة واحدة)",
        retainerLabel: "الاشتراك الشهري",
        perMonth: "/ شهر",
        mostPopular: "الأكثر شيوعًا",
        plans: [
          {
            name: "Pack ESSENTIEL",
            tagline:
              "حضور رقمي كامل، موقع عرض سريع، وتحويل آلي لعملائك الأوائل.",
            setup: "4,500 DHS HT",
            retainer: "6,000 DHS HT",
            features: [
              "وسائل التواصل: منصتان (Facebook وInstagram)، 8–10 منشورات/شهر (رسومات، كاروسيل، نصوص)",
              "إنتاج الفيديو: 4 ريلز/تيك توكس ديناميكية (تنسيق عمودي، عوامل جذب، ترجمة متحركة، تصميم صوتي)",
              "إعلانات مدفوعة: حملة Meta نشطة واحدة (توليد leads أو Trafic WhatsApp) + تقرير شهري",
              "مخرجات الموقع: 1 إلى 3 صفحات، متجاوبة 100% للجوال، زر واتساب مباشر، SEO أساسي وإعداد Google Maps",
              "أتمتة IA: رسالة ترحيب مخصّصة، بوت أسئلة شائعة 10 أسئلة، توجيه العملاء",
            ],
            cta: "ابدأ بباقة Essentiel",
          },
          {
            name: "Pack PRO GROWTH",
            tagline:
              "الحل النهائي للشركات سريعة النمو التي تسعى لسيادة سوقها وأتمتة اكتساب العملاء.",
            setup: "7,500 DHS HT",
            retainer: "12,000 DHS HT",
            badge: "الأكثر شيوعًا",
            featured: true,
            features: [
              "وسائل التواصل: 3 منصات (FB وIG + TikTok أو LinkedIn)، 15 منشورًا/شهر، إشراف نشط على الرسائل والتعليقات",
              "إنتاج الفيديو: 10 ريلز/تيك توكس راقية (سكربتات بيع، مونتاج ديناميكي، ترجمة متحركة أنيقة)",
              "إعلانات مدفوعة: إدارة متعددة الحملات (إعلانات Meta + بحث/إعادة استهداف Google)، اختبارات A/B مستمرة، إعداد Pixel وCAPI",
              "مخرجات الموقع: موقع ويب كامل 5–7 صفحات، ضمان سرعة 85%+، تدقيق UX/UI وSEO بالكلمات المفتاحية",
              "أتمتة IA: وكيل IA ذكي مدرب على قاعدة معرفتك، تأهيل تلقائي (الاسم، الحاجة، الميزانية، الهاتف)، متابعة آلية",
            ],
            cta: "انطلق مع Pro Growth",
          },
          {
            name: "Pack ENTERPRISE",
            tagline:
              "بنية تسويقية 360° مخصّصة، إنتاج فيديو سينمائي، وتكامل CRM ذكي مستقل.",
            setup: "14,000 DHS HT",
            retainer: "22,000 DHS HT",
            badge: "بنية 360° مخصّصة",
            features: [
              "وسائل التواصل: Omnicanal (FB وIG وLinkedIn وTikTok وYouTube)، إخراج فني، لوحة تحكم لحظية",
              "إنتاج الفيديو: 18–20 ريلز/شورتس عالية البقاء مع كتابة سكربتات وتصميم حركة",
              "إعلانات مدفوعة: حملات Omnicanale Full-Funnel (Meta وGoogle وTikTok وYouTube) + تحسين CRO",
              "مخرجات الموقع: تصميم متعدد اللغات (عربي، فرنسي، إنجليزي)، تفاعلات دقيقة، SEO تقني متقدم",
              "أتمتة IA وCRM: وكيل LLM مستقل مخصص، مزامنة التقويم للمواعيد، تكاملات CRM/Webhook كاملة (HubSpot وZapier وMake وSheets)",
            ],
            cta: "اطلب استشارة Enterprise",
          },
        ],
      },
      terms: {
        title: "الفوترة والشروط",
        items: [
          {
            label: "الفوترة",
            text: "الأسعار المذكورة غير شاملة للضريبة (HT). تُطبَّق ضريبة القيمة المضافة (20%) وفق التنظيمات.",
          },
          {
            label: "ميزانية الإعلانات",
            text: "ميزانيات شراء المساحات الإعلانية (Meta وGoogle وTikTok) تقع على عاتق العميل حصريًا.",
          },
          {
            label: "رسوم واجهات الطرف الثالث",
            text: "تكاليف الاستهلاك المباشر (WhatsApp Business API، رموز OpenAI) يسددها العميل.",
          },
          {
            label: "الالتزام",
            text: "يلزم التزام أولي مدته 3 أشهر على جميع الاشتراكات الشهرية.",
          },
        ],
      },
      faq: {
        badge: "الأسئلة الشائعة",
        title: "الأسئلة الشائعة",
        items: [
          {
            q: "بمدى السرعة يمكننا إنهاء مرحلة الإعداد والإطلاق؟",
            a: "تستغرق مرحلة الإعداد لدينا (بناء الموقع، تصوير/مونتاج الفيديو الترويجي الأول، إعداد حساب الإعلانات، وتدريب الذكاء الاصطناعي) من 7 إلى 14 يومًا.",
          },
          {
            q: "كيف يؤهل وكيل الذكاء الاصطناعي عبر واتساب العملاء الواردين؟",
            a: "يتفاعل الوكيل فورًا مع الزيارات على مدار 24/7، ويجيب استنادًا إلى قاعدة معرفتك، ويجمع بيانات التأهيل الأساسية (الميزانية، الإطار الزمني، الاحتياجات)، ويرسل العملاء الجاهزين للشراء مباشرةً إلى فريق المبيعات.",
          },
          {
            q: "لماذا يلزم التزام أولي مدته 3 أشهر للاشتراكات الشهرية؟",
            a: "تحتاج خوارزميات التسويق وتحسين بكسلات Meta/Google وزخم الفيديو العضوي إلى نافذة 90 يومًا كحد أدنى لتحقيق عائد استثمار مركّب ومستمر.",
          },
          {
            q: "هل يمكننا ترقية مستوى الباقة مع نمو نشاطنا؟",
            a: "نعم، يمكنك ترقية مستوى اشتراكك الشهري في أي وقت مع نمو حجم محتواك وإنفاقك الإعلاني.",
          },
        ],
      },
      cta: {
        headline: "جاهز لأتمتة وتوسيع اكتساب عملائك؟",
        subheadline:
          "احجز مكالمة استراتيجية مدتها 20 دقيقة لتدقيق حضورك الرقمي، ومراجعة الفجوات التنافسية، واختيار نظام نمو Medinova.",
        button: "احجز جلسة استراتيجية الآن",
      },
      contact: {
        badge: "احجز مكالمة استراتيجية",
        title: "لنصمّم نموّك",
        subtitle:
          "أخبرنا عن عملك وسنرسم لك نظام نموّ عالي التحويل مصمّماً لأهدافك — مواقع ويب، إعلانات مدفوعة، وأتمتة بالذكاء الاصطناعي.",
        emailLabel: "راسلنا",
        whatsappLabel: "تواصل معنا عبر واتساب",
        whatsappMessage:
          "مرحباً Medinova Growth، أودّ حجز مكالمة استراتيجية.",
        form: {
          name: "الاسم الكامل",
          namePh: "اسمك",
          company: "الشركة",
          companyPh: "اسم الشركة",
          email: "البريد المهني",
          emailPh: "you@company.com",
          scope: "مجال المشروع",
          scopePh:
            "صِف أهدافك بإيجاز: موقع ويب، إعلانات، أتمتة بالذكاء الاصطناعي...",
          submit: "احجز مكالمة استراتيجية",
          submitting: "جارٍ الإرسال...",
          sent: "شكراً! تم إرسال طلبك إلى contact@medinovastudio.com. سنردّ خلال 24 ساعة.",
          error: "حدث خطأ ما. حاول مجدداً أو راسلنا مباشرة.",
        },
      },
      footer: {
        tagline:
          "Medinova Growth — مواقع ويب عالية التحويل، أتمتة بالذكاء الاصطناعي، ونموّ رقمي متواصل.",
        rights: "Medinova Growth. جميع الحقوق محفوظة.",
      },
    },
    academy: {
      announcement:
        "حصص مباشرة للمتعلمين من سن 7 سنوات فما فوق · الإنجليزية، الفرنسية والعربية",
      announcementCta: "احجز حصة تجريبية مجانية",
      hero: {
        badge: "أكاديمية برمجة عبر الإنترنت · من سن 7 سنوات · الرباط، المغرب",
        headline: "دورات برمجة وتطوير ألعاب للأطفال — عبر الإنترنت في المغرب",
        subheadline:
          "تعلّم البرمجة وتطوير الألعاب والمهارات الرقمية مباشرة عبر الإنترنت مع Medinova Studio — من الرباط والدار البيضاء وكل مكان في المغرب. حصص عملية قائمة على المشاريع للمتعلمين من سن 7 سنوات، يدرّسها مؤسس استوديو ألعاب نشط.",
        cta: "احجز حصة تجريبية مجانية",
        scarcity: "",
        trust: [
          {
            title: "من سن 7 سنوات فما فوق",
            desc: "مسارات تناسب مختلف الأعمار والمستويات",
          },
          {
            title: "الإنجليزية · الفرنسية · العربية",
            desc: "حصص بثلاث لغات",
          },
          {
            title: "حصص مباشرة ومشاريع عملية",
            desc: "تعلّم بالممارسة بإشراف المدرّب",
          },
        ],
      },
      why: {
        badge: "لماذا أكاديمية Medinova",
        title: "تعلّم من خلال التطبيق والمشاريع",
        items: [
          {
            title: "تعلّم بالممارسة، لا بالمشاهدة",
            desc: "لا تكتفِ بمشاهدة الدروس. طبّق ما تتعلمه، وجرّب أفكارك، وأنشئ مشاريع حقيقية تساعدك على تطوير مهاراتك.",
          },
          {
            title: "حوّل المعرفة إلى مشاريع",
            desc: "كل مهارة جديدة هي فرصة لإنشاء مشروع. احتفظ بأعمالك وطوّرها لتشكّل ملف أعمال يعكس ما تستطيع فعليًا.",
          },
          {
            title: "تعلّم من خبرة حقيقية في المجال",
            desc: "تعلّم مباشرة من مؤسس Medinova Studio، واستفد من خبرة استوديو يعمل فعليًا في تطوير الألعاب والتقنيات الرقمية وإطلاق منتجات ومشاريع حقيقية.",
          },
        ],
      },
      founder: {
        badge: "المؤسس",
        title: "تعلّم مباشرة من مؤسس Medinova Studio",
        text:
          "يتعلم المتعلمون بإشراف مباشر من منير عبوطي، مؤسس Medinova Studio والمطور الرئيسي فيها. Medinova Studio استوديو يعمل فعليًا في تطوير الألعاب والتقنيات الرقمية، وله ألعاب منشورة ومشاريع حقيقية. وبدلًا من الاعتماد على دروس مسجلة فقط، يتعلم المتعلمون من شخص يعمل فعليًا على تصميم وتطوير وإطلاق الألعاب والتقنيات.",
        caption: "منير عبوطي — مؤسس Medinova Studio والمطور الرئيسي.",
      },
      work: {
        badge: "أعمالنا",
        title: "تعلّم داخل استوديو حقيقي ينفّذ مشاريع حقيقية",
        subtitle:
          "أكاديمية Medinova هي برنامج تعليمي من Medinova Studio، وهو استوديو يعمل فعليًا في تطوير الألعاب والتقنيات التفاعلية. المشاريع المعروضة أدناه هي مشاريع Medinova Studio — أعمال حقيقية منشورة، وليست مشاريع طلاب.",
        robloxBadge: "Medinova Studio على Roblox",
        robloxTitle:
          "مطوّر لعبة Zombies WarZone على Roblox — أكثر من مليون زيارة للعبة حول العالم.",
        robloxCta: "جرّب اللعبة على Roblox",
        mgeBadge: "المعرض المغربي للألعاب",
        mgeTitle: "الجناح C38 — المعرض المغربي للألعاب",
        mgeDesc:
          "عرض ألعابنا المنشورة للجمهور في فعالية الألعاب الوطنية بالمغرب.",
        gamesLabel: "مشاريع Medinova Studio — منشورة على App Store",
        games: [
          "Pharaoh's Guardian: Mummies",
          "Chameleon Outbreak: Camo Hunt",
          "Sniper Elimination Challenge",
          "Blitz Combat Race",
        ],
        studioLink: "استكشف معرض أعمال الاستوديو بالكامل",
      },
      courses: {
        badge: "استكشف دوراتنا",
        title: "استكشف دوراتنا",
        intro:
          "من المهارات الرقمية والبرمجة إلى تطوير الألعاب وتطوير الويب والتصميم الإبداعي، يمكن للمتعلمين استكشاف التقنية من خلال تعلّم عملي قائم على المشاريع.",
        agesLabel: "الفئة العمرية المقترحة",
        progressionLabel: "مسار التعلّم",
        viewLabel: "عرض تفاصيل الدورة",
        items: [
          {
            name: "المهارات الرقمية الأساسية",
            age: "7+",
            desc:
              "بناء المهارات الرقمية الأساسية للحياة اليومية: أساسيات استخدام الحاسوب وWord وExcel وPowerPoint والإنترنت وغيرها من المهارات الرقمية الأساسية.",
          },
          {
            name: "Scratch",
            age: "7+",
            desc:
              "تطوير التفكير المنطقي ومهارات حل المشكلات عبر البرمجة المرئية. يتعلم المتعلمون أساسيات الخوارزميات والتسلسل والتفكير الحاسوبي، مع إنشاء قصص تفاعلية ورسوم متحركة وألعاب خاصة بهم.",
          },
          {
            name: "Python",
            age: "11+",
            desc:
              "تطوير التفكير المنطقي ومهارات حل المشكلات والبرمجة عبر لغة Python. يحوّل المتعلمون أفكارهم إلى برامج وألعاب وتطبيقات عملية، مع بناء أساس متين للمستويات الأكثر تقدمًا.",
          },
          {
            name: "تطوير ألعاب Roblox",
            age: "9+",
            desc:
              "تطوير الإبداع والتفكير المكاني ومهارات حل المشكلات من خلال تصميم وبناء عوالم ثلاثية الأبعاد تفاعلية. يستكشف المتعلمون تصميم الألعاب والبرمجة أثناء إنشاء تجارب Roblox خاصة بهم.",
          },
          {
            name: "تطوير الألعاب باستخدام Unity وC#",
            age: "12+",
            desc:
              "تطوير مهارات متقدمة في البرمجة والتفكير المنطقي وحل المشكلات من خلال تطوير الألعاب بطريقة احترافية. يستخدم المتعلمون Unity وC# لتصميم آليات اللعب وبناء ألعاب ثنائية وثلاثية الأبعاد، وتحويل أفكارهم إلى مشاريع تفاعلية.",
          },
          {
            name: "تطوير الويب",
            age: "11+",
            desc:
              "فهم كيفية عمل المواقع الإلكترونية مع تطوير الإبداع والتفكير المنطقي ومهارات حل المشكلات. يبدأ المتعلمون بـ HTML وCSS وJavaScript، ثم يتقدمون إلى PHP وMySQL لبناء مواقع مرتبطة بقواعد بيانات حقيقية.",
            levels: [
              {
                label: "المستوى الأساسي",
                topics: ["HTML", "CSS", "JavaScript"],
              },
              {
                label: "المستوى المتقدم",
                topics: ["PHP", "MySQL", "الواجهة الخلفية وقواعد البيانات"],
              },
            ],
          },
          {
            name: "التصميم الإبداعي",
            age: "10+",
            desc:
              "تطوير الإبداع والتواصل البصري ومهارات الإنتاج الرقمي. يستكشف المتعلمون النمذجة ثلاثية الأبعاد وتحرير الصور ومونتاج الفيديو، مع تحويل أفكارهم إلى مشاريع رقمية أصلية.",
          },
        ],
      },
      breadcrumb: { home: "الرئيسية", academy: "أكاديمية Medinova" },
      onlineLabel: "فصول مباشرة عبر الإنترنت",
      viewAllLabel: "عرض جميع الدورات",
      outcomesTitle: "ماذا ستتعلم",
      courseDetailsTitle: "تفاصيل الدورة",
      moreCoursesTitle: "استكشف المزيد من الدورات",
      teaching: {
        badge: "كيف نعلّم",
        title: "كيف نعلّم؟",
        modelTitle: "تجربة تعلّم متكاملة",
        steps: [
          {
            title: "التعلّم",
            desc: "حصص مباشرة تجمع بين الشرح الواضح والتطبيق العملي والأمثلة التوضيحية.",
          },
          {
            title: "التطبيق",
            desc: "تمارين وأنشطة عملية تساعد المتعلم على تطبيق كل مفهوم جديد.",
          },
          {
            title: "تطوير المشاريع",
            desc: "يستخدم المتعلم ما تعلّمه لبناء مشاريع حقيقية وتطوير أفكاره الخاصة.",
          },
          {
            title: "ملف الأعمال",
            desc: "يحتفظ المتعلم بمشاريعه ويطوّرها ضمن ملف أعماله، ويحصل على شهادة إتمام الدورة بعد إكمال البرنامج والمشروع النهائي.",
          },
        ],
        model: [
          "حصص مباشرة",
          "مواد تعليمية",
          "تمارين",
          "دعم ومتابعة",
        ],
      },
      finalCta: {
        title: "هل أنت مستعد للبدء؟",
        subtitle: "احجز حصة تجريبية مجانية وتعرّف على المسار التعليمي الأنسب لك.",
        cta: "احجز حصة تجريبية مجانية",
        scarcity: "",
      },
      faq: {
        badge: "الأسئلة الشائعة",
        title: "هل لديك استفسار؟",
        subtitle:
          "إجابات عن الأسئلة الأكثر شيوعًا لدى أولياء الأمور والمتعلمين.",
        items: [
          {
            q: "في أي عمر يمكن البدء؟",
            a: "تبدأ برامج الأكاديمية من سن 7 سنوات فما فوق، مع اختلاف الفئة العمرية المقترحة حسب الدورة ومستوى المتعلم.",
          },
          {
            q: "هل أحتاج إلى خبرة سابقة؟",
            a: "لا، تتوفر دورات للمبتدئين تمامًا، بينما قد تتطلب الدورات الأكثر تقدمًا بعض المعرفة السابقة.",
          },
          {
            q: "بأي لغات تتوفر الحصص؟",
            a: "الحصص متاحة باللغة الإنجليزية والفرنسية والعربية، وتُقدم بلغة المتعلم ووليّ أمره.",
          },
          {
            q: "هل الحصص عبر الإنترنت أم حضورياً؟",
            a: "الحصص مباشرة مع مدرّب. يمكن التعلّم عن بُعد، ويعتمد الشكل الدقيق على المجموعة والجدول الزمني المتفق عليه.",
          },
          {
            q: "هل يمكنني تجربة حصة قبل التسجيل؟",
            a: "نعم. نقدم حصة تجريبية مجانية قبل التسجيل، ليتعرف المتعلم ووليّ الأمر على طريقة عمل الحصة قبل اتخاذ القرار.",
          },
          {
            q: "ماذا سيتعلم المتعلم فعليًا؟",
            a: "تتمحور دوراتنا حول المهارات التقنية العملية، وحل المشكلات، والتفكير المنطقي، والإبداع، عبر مشاريع حقيقية وليس مجرد متابعة الدروس.",
          },
          {
            q: "هل يحصل المتعلم على شهادة؟",
            a: "نعم. يحصل المتعلم على شهادة إتمام الدورة بعد إكمالها والمشروع النهائي بنجاح.",
          },
          {
            q: "هل سيكون لدى المتعلم مشاريع يعرضها؟",
            a: "نعم. يبني المتعلم مشاريع طوال الدورة ويضيفها إلى ملف أعماله، ليعرضها كإنجازات حقيقية.",
          },
          {
            q: "ما الدعم المتاح خارج الحصة المباشرة؟",
            a: "يحصل المتعلمون على مواد تعليمية وتمارين عملية ومتابعة منتظمة، لمساعدتهم على التقدم خارج أوقات الحصص.",
          },
          {
            q: "كيف أحجز حصة تجريبية؟",
            a: "اضغط على «احجز حصة تجريبية مجانية» وتواصل معنا عبر WhatsApp. سنناقش عمر المتعلم واهتماماته ولغته قبل ترتيب الحصة المناسبة.",
          },
        ],
      },
      whatsapp: {
        message:
          "السلام عليكم، أود حجز حصة تجريبية مجانية في Medinova Academy.",
        online: "متاح الآن — تواصل معنا عبر WhatsApp",
        aria: "تواصل معنا عبر WhatsApp",
        quickQuestion: "سؤال سريع عبر WhatsApp",
        cta: "احجز حصة تجريبية مجانية",
      },
    },
  },
};
