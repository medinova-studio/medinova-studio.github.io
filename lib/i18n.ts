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
    targetAudience: string;
    secondaryCta: string;
    trust: { title: string; desc: string }[];
  };
  proof: {
    badge: string;
    title: string;
    founderCaption: string;
    boothCaption: string;
    robloxBadge: string;
    robloxTitle: string;
    robloxCta: string;
    showcaseLabel: string;
    games: string[];
  };
  tracks: {
    badge: string;
    title: string;
    programLabel: string;
    resultLabel: string;
    levels: {
      level: string;
      title: string;
      programTitle?: string;
      levelName: string;
      target: string;
      focus: string[];
      outcome: string;
    }[];
  };
  community: {
    badge: string;
    title: string;
    subtitle: string;
    features: { title: string; desc: string }[];
  };
  certification: {
    badge: string;
    title: string;
    diplomasTitle: string;
    diplomasSubtitle: string;
    levels: string[];
    diplomas: string[];
    includedTitle: string;
    highlights: { title: string; desc: string }[];
    recognition: string;
  };
  pricing: {
    badge: string;
    title: string;
    pacingOptions: string[];
    periodOptions: string[];
    tierDesc: string[];
    monthlyLabel: string;
    quarterlyLabel: string;
    levelLabels: string[];
    rates: { monthly: number; intensive: number; quarterly: number }[];
    billedMonthly: string;
    billedQuarterly: string;
    featuredBadge: string;
    features: string[];
    cta: string;
    guaranteeStrong: string;
    guarantee: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string; category?: string }[];
  };
  whatsapp: {
    message: string;
    online: string;
    aria: string;
    levelMessages: string[];
    quickQuestion: string;
    registerCta: string;
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
    academyLinks: [string, string, string, string];
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
            "/images/games/pharaohs-guardian/2752x2064-screenshot.jpeg",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (1).jpeg",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (2).jpeg",
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
            "/images/games/sniper-elimination/screenshot1.png",
            "/images/games/sniper-elimination/screenshot2.png",
            "/images/games/sniper-elimination/screenshot3.png",
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
            "/images/games/chameleon-outbreak/1284x2778-screenshot (5).jpeg",
            "/images/games/chameleon-outbreak/1284x2778-screenshot (6).jpeg",
            "/images/games/chameleon-outbreak/2064x2752-screenshot (10).jpeg",
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
            "/images/games/blitz-combat/2064x2752-screenshot (3).png",
            "/images/games/blitz-combat/2064x2752-screenshot (4).png",
            "/images/games/blitz-combat/2064x2752-screenshot.jpg",
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
        badge: "Active Game Development Studio & Certified Coding Academy in Kenitra, Morocco",
        headline:
          "We Build Games, Grow Brands & Teach the Next Generation of Developers.",
        subheadline:
          "Medinova Studio is an independent Moroccan studio engineering Unity C# games, AR/VR & WebGL experiences, B2B growth systems, and certified coding tracks in Scratch, Python, and Unity C# — from Kenitra, Morocco.",
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
      location: "Kenitra, Morocco 🇲🇦",
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
        "💻 100% Online • Learn from home (PC + Internet Connection) | Classes available in English or Arabic",
      announcementCta: "Register / Learn More",
      hero: {
        badge:
          "● Live Cohorts | Led by the Studio Founder | 100% Satisfaction or Money Back",
        headline:
          "Learn to Code, Create Video Games & Master AI — Whatever Your Age or Level",
        subheadline:
          "From visual blocks (Scratch) to C#, Unity 3D, Web development and Vibe Coding. 100% online programs for kids, teens, women and beginner adults, taught by a studio engineer.",
        targetAudience:
          "Suitable for All Ages & Skill Levels — From 7 Years & Up",
        secondaryCta: "See Plans & Pricing",
        trust: [
          {
            title: "100% Satisfaction or Money Back",
            desc: "after the 1st session",
          },
          {
            title: "Creator of a Roblox game",
            desc: "with 1,000,000+ plays",
          },
          { title: "Small groups", desc: "Max 6–8 students" },
        ],
      },
      proof: {
        badge: "The Studio Behind the Academy",
        title:
          "Your classes aren't taught by a generic tutor, but by an Engineer & Studio Founder",
        founderCaption: "Mounir Abbotti — Founder of Medinova Studio & Lead Dev.",
        boothCaption:
          "Booth C38 — Morocco Gaming Expo (Showcasing our games to the public).",
        robloxBadge: "Roblox Social Proof",
        robloxTitle:
          "Creator of 'Zombies WarZone' on Roblox — Over 1,000,000 games played worldwide.",
        robloxCta: "Play on Roblox",
        showcaseLabel:
          "Studio Mini Showcase — Games published on the App Store",
        games: [
          "Pharaoh's Guardian: Mummies",
          "Chameleon Outbreak: Camo Hunt",
          "Sniper Elimination Challenge",
          "Blitz Combat Race",
        ],
      },
      tracks: {
        badge: "3 Inclusive Progressive Tracks",
        title:
          "A Clear Path from Absolute Beginner to Professional Mastery — No Age Limit",
        programLabel: "Program",
        resultLabel: "Outcome",
        levels: [
          {
            level: "LEVEL 1",
            title: "START",
            programTitle: "Absolute Beginner & Coding Logic",
            levelName: "Beginner",
            target:
              "Beginners, Kids (7–9), Adults/Women getting into code",
            focus: [
              "Visual Logic",
              "Scratch",
              "Graphic Design",
              "Digital Literacy & AI Intro",
            ],
            outcome:
              "Interactive 2D games, animated stories and algorithmic logic foundations without syntax constraints.",
          },
          {
            level: "LEVEL 2",
            title: "BUILD",
            programTitle: "Scripting, Web & 3D",
            levelName: "Intermediate",
            target:
              "Kids (10–12), Teens & Adults ready for textual code",
            focus: [
              "Roblox Studio (Lua 3D Scripting)",
              "Web Basics (HTML & CSS)",
              "Python Fundamentals",
              "Video Editing & Devlogs",
            ],
            outcome:
              "A 3D game published on Roblox, custom web pages and standalone Python scripts.",
          },
          {
            level: "LEVEL 3",
            title: "MASTER",
            programTitle: "3D Game Engineering & AI",
            levelName: "Advanced / Pro",
            target: "Teens (13+), Students & Adults",
            focus: [
              "Unity C# Engine (Mobile & PC)",
              "3D Modeling (Blender)",
              "Advanced Web (JavaScript)",
              "Vibe Coding Workflows & AI Tools",
            ],
            outcome:
              "A complete 3D game on Unity, original 3D assets and mastery of AI-assisted coding tools.",
          },
        ],
      },
      community: {
        badge: "● Moderated & Secure Environment",
        title: "A Safe & Supervised Community",
        subtitle:
          "Learning is more effective and more fun within an accompanied community.",
        features: [
          {
            title: "Private help space",
            desc: "A dedicated Q&A where every learner asks freely.",
          },
          {
            title: "Project feedback channels",
            desc: "Regular reviews of your Roblox, Unity, Blender & Web creations.",
          },
          {
            title: "24/7 supervision, no toxicity",
            desc: "A moderated, kind and judgment-free environment.",
          },
          {
            title: "Monthly mini-challenges",
            desc: "Fun challenges to progress while having fun.",
          },
        ],
      },
      certification: {
        badge: "Certification",
        title:
          "An Official & Verifiable Diploma at Every Level",
        diplomasTitle: "Diplomas by Level",
        diplomasSubtitle:
          "Official recognition at every step of the journey.",
        levels: ["Level 1", "Level 2", "Level 3"],
        diplomas: [
          "Certificate in Algorithmic Logic & Digital Creation",
          "Diploma in 3D Scripting & Web Development",
          "Diploma in 3D Game Engineering, Web & AI Technologies",
        ],
        includedTitle: "What's included",
        highlights: [
          {
            title: "Printable validated modules",
            desc: "Every validated module is certified and printable.",
          },
          {
            title: "Verification QR Code",
            desc: "Verify each diploma towards your online portfolio.",
          },
          {
            title: "Monthly WhatsApp reports",
            desc: "Detailed progress sent to parents & learners.",
          },
        ],
        recognition: "Recognized by our industry partners",
      },
      pricing: {
        badge: "Pricing & Plans",
        title: "Flexible Plans, a Pace That Suits You",
        pacingOptions: ["1 Session / Week", "2 Sessions / Week (Intensive)"],
        periodOptions: ["Monthly", "Quarterly (-15%)"],
        tierDesc: [
          "Beginner · Kids, Teens & Adults",
          "Intermediate · Textual code & 3D",
          "Advanced / Pro · Unity, Web & AI",
        ],
        monthlyLabel: "MAD / month",
        quarterlyLabel: "MAD / quarter",
        levelLabels: ["Level 1", "Level 2", "Level 3"],
        rates: [
          { monthly: 590, intensive: 990, quarterly: 1500 },
          { monthly: 790, intensive: 1290, quarterly: 2000 },
          { monthly: 990, intensive: 1690, quarterly: 2500 },
        ],
        billedMonthly: "Billed monthly · {sessions} session(s) / week",
        billedQuarterly: "Billed {total} MAD / quarter (-15%)",
        featuredBadge: "Most Complete",
        features: [
          "Small groups (Max 6–8 students)",
          "100% live online classes",
          "Access to the secure community",
          "Personalized tracking & devlogs",
        ],
        cta: "Register",
        guaranteeStrong: "100% Satisfaction or Money Back",
        guarantee: " after the 1st session — no questions asked.",
      },
      faq: {
        badge: "Frequently Asked Questions",
        title: "Have questions?",
        subtitle:
          "Answers to the most asked questions from parents and learners.",
        items: [
          {
            q: "What do my child or I need to attend the classes?",
            a: "A simple PC or Mac and an Internet connection. No expensive hardware required — we guide every learner on the free software to install depending on the track.",
            category: "equipment",
          },
          {
            q: "In which language are the classes taught?",
            a: "Classes are available in English or Arabic, with bilingual support and French explanations depending on the learner's needs.",
            category: "language",
          },
          {
            q: "Can beginner adults enroll in Level 1?",
            a: "Yes, absolutely. Level 1 is designed to teach algorithmic logic to all ages, without intimidation and without technical prerequisites.",
            category: "adults",
          },
          {
            q: "How does the satisfaction-or-money-back guarantee work?",
            a: "If the 1st session isn't right for you, we refund 100% without justification. It's our commitment to the quality of our classes.",
            category: "pricing",
          },
          {
            q: "My child has never coded before. Can they still join?",
            a: "Absolutely. Our Junior Explorers track starts from zero — no prior experience needed. We begin with visual block-based programming (Scratch) that teaches logic and problem-solving through fun, game-like exercises. Every student learns at their own pace with instructor guidance.",
            category: "beginners",
          },
          {
            q: "How is this different from computer classes at school?",
            a: "School computer classes cover general digital literacy. Medinova Academy is a project-based coding studio where students build real games, apps, and software. They learn industry tools (Python, Unity, React) and develop a professional portfolio — not just theory.",
            category: "beginners",
          },
          {
            q: "Do students receive certificates or build a portfolio?",
            a: "Yes. Every student completes hands-on projects (games, apps, interactive media) that form a personal portfolio they can showcase. Upon completing a track, students receive a Medinova Academy certificate of completion recognized by our industry partners.",
            category: "certification",
          },
        ],
      },
      whatsapp: {
        message:
          "Hello, I have a question about registering for Medinova Academy.",
        online: "Online — Quick WhatsApp Reply",
        aria: "Chat on WhatsApp",
        levelMessages: [
          "Hello, I have a question about registering for Level 1 (START).",
          "Hello, I have a question about registering for Level 2 (BUILD).",
          "Hello, I have a question about the advanced Level 3 (MASTER) and Vibe Coding.",
        ],
        quickQuestion: "Quick question via WhatsApp",
        registerCta: "Register via WhatsApp",
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
            "/images/games/pharaohs-guardian/2752x2064-screenshot.jpeg",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (1).jpeg",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (2).jpeg",
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
            "/images/games/sniper-elimination/screenshot1.png",
            "/images/games/sniper-elimination/screenshot2.png",
            "/images/games/sniper-elimination/screenshot3.png",
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
            "/images/games/chameleon-outbreak/1284x2778-screenshot (5).jpeg",
            "/images/games/chameleon-outbreak/1284x2778-screenshot (6).jpeg",
            "/images/games/chameleon-outbreak/2064x2752-screenshot (10).jpeg",
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
            "/images/games/blitz-combat/2064x2752-screenshot (3).png",
            "/images/games/blitz-combat/2064x2752-screenshot (4).png",
            "/images/games/blitz-combat/2064x2752-screenshot.jpg",
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
        badge: "Studio actif de développement de jeux & académie de code certifiée à Kénitra, Maroc",
        headline:
          "Nous créons des jeux, faisons grandir les marques & formons la prochaine génération de développeurs.",
        subheadline:
          "Medinova Studio est un studio marocain indépendant qui conçoit des jeux Unity C#, des expériences AR/VR & WebGL, des systèmes de croissance B2B et des parcours de code certifiés en Scratch, Python et Unity C# — depuis Kénitra, Maroc.",
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
      location: "Kénitra, Maroc 🇲🇦",
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
        "💻 100% En Ligne • Apprenez depuis chez vous (PC + Connexion Internet) | Cours disponibles en Anglais ou Arabe",
      announcementCta: "S'inscrire / En Savoir Plus",
      hero: {
        badge:
          "● Live Cohorts | Dirigé par le Fondateur du Studio | 100% Satisfait ou Remboursé",
        headline:
          "Apprenez à Coder, Créer des Jeux Vidéo & Maîtriser l'IA — Quel que soit votre Âge ou votre Niveau",
        subheadline:
          "Du bloc visuel (Scratch) jusqu'au développement C#, Unity 3D, Web et Vibe Coding. Des programmes 100% en ligne pour enfants, ados, femmes et adultes débutants animés par un ingénieur de studio.",
        targetAudience: "Adapté à tous les âges et niveaux — Dès 7 ans",
        secondaryCta: "Voir les Tarifs",
        trust: [
          {
            title: "100% Satisfait ou Remboursé",
            desc: "après la 1ère séance",
          },
          {
            title: "Créateur d'un jeu Roblox",
            desc: "à +1 000 000 de parties",
          },
          { title: "Groupes réduits", desc: "Max 6–8 élèves" },
        ],
      },
      proof: {
        badge: "Le Studio Derrière l'Académie",
        title:
          "Vos cours ne sont pas animés par un tuteur générique, mais par un Ingénieur & Fondateur de Studio",
        founderCaption:
          "Mounir Abbotti — Fondateur de Medinova Studio & Lead Dev.",
        boothCaption:
          "Stand C38 — Morocco Gaming Expo (Présentation de nos jeux au grand public).",
        robloxBadge: "Preuve Sociale Roblox",
        robloxTitle:
          "Créateur de \"Zombies WarZone\" sur Roblox — Plus de 1,000,000 de parties jouées dans le monde.",
        robloxCta: "Jouer sur Roblox",
        showcaseLabel:
          "Mini Vitrine du Studio — Des jeux publiés sur l'App Store",
        games: [
          "Pharaoh's Guardian: Mummies",
          "Chameleon Outbreak: Camo Hunt",
          "Sniper Elimination Challenge",
          "Blitz Combat Race",
        ],
      },
      tracks: {
        badge: "3 Parcours Progressifs & Inclusifs",
        title:
          "Un Chemin Clair du Débutant Absolu à la Maîtrise Professionnelle — Sans Limite d'Âge",
        programLabel: "Au Programme",
        resultLabel: "Résultat",
        levels: [
          {
            level: "LEVEL 1",
            title: "START",
            programTitle: "Débutant absolu & logique de programmation",
            levelName: "Débutant",
            target:
              "Débutants, Enfants (7–9 ans), Adultes/Femmes s'initiant au code",
            focus: [
              "Logique Visuelle",
              "Scratch",
              "Design Graphique",
              "Culture Numérique & Initiation IA",
            ],
            outcome:
              "Jeux 2D interactifs, histoires animées et bases de la logique algorithmique sans contrainte de syntaxe.",
          },
          {
            level: "LEVEL 2",
            title: "BUILD",
            programTitle: "Programmation, Web & 3D",
            levelName: "Intermédiaire",
            target:
              "Enfants (10–12 ans), Ados & Adultes prêt pour le code textuel",
            focus: [
              "Roblox Studio (Scripting Lua 3D)",
              "Bases du Web (HTML & CSS)",
              "Python Fundamentals",
              "Montage Vidéo & Devlogs",
            ],
            outcome:
              "Un jeu 3D publié sur Roblox, des pages Web personnalisées et des scripts Python autonomes.",
          },
          {
            level: "LEVEL 3",
            title: "MASTER",
            programTitle: "Ingénierie de jeux 3D & IA",
            levelName: "Avancé / Pro",
            target: "Ados (13+), Étudiants & Adultes",
            focus: [
              "Moteur Unity C# (Mobile & PC)",
              "Modélisation 3D (Blender)",
              "Web Avancé (JavaScript)",
              "Workflows Vibe Coding & Outils IA",
            ],
            outcome:
              "Un jeu 3D complet sur Unity, des assets 3D originaux et la maîtrise des outils de codage assisté par IA.",
          },
        ],
      },
      community: {
        badge: "● Environnement Modéré & Sécurisé",
        title: "Une Communauté Sûre & Supervisée",
        subtitle:
          "Apprendre est plus efficace et plus joyeux au sein d'une communauté accompagnée.",
        features: [
          {
            title: "Espace privé d'entraide",
            desc: "Un Q&A dédié où chaque apprenant pose ses questions librement.",
          },
          {
            title: "Canaux de feedback projets",
            desc: "Revues régulières de vos créations Roblox, Unity, Blender & Web.",
          },
          {
            title: "Supervision 24/7 sans toxicité",
            desc: "Un environnement modéré, bienveillant et sans jugement.",
          },
          {
            title: "Mini-défis mensuels",
            desc: "Des challenges ludiques pour progresser tout en s'amusant.",
          },
        ],
      },
      certification: {
        badge: "Certification",
        title: "Un Diplôme Officiel & Vérifiable à Chaque Niveau",
        diplomasTitle: "Diplômes par Niveau",
        diplomasSubtitle:
          "Reconnaissance officielle à chaque étape du parcours.",
        levels: ["Niveau 1", "Niveau 2", "Niveau 3"],
        diplomas: [
          "Certificat en Logique Algorithmique & Création Numérique",
          "Diplôme en Scripting 3D & Développement Web",
          "Diplôme d'Ingénierie de Jeux 3D, Web & Technologies IA",
        ],
        includedTitle: "Ce qui est inclus",
        highlights: [
          {
            title: "Modules validés imprimables",
            desc: "Chaque module validé est certifié et imprimable.",
          },
          {
            title: "QR Code de vérification",
            desc: "Vérifiez chaque diplôme vers votre portfolio en ligne.",
          },
          {
            title: "Rapports mensuels WhatsApp",
            desc: "Progression détaillée envoyée aux parents & apprenants.",
          },
        ],
        recognition: "Reconnaissance par nos partenaires de l'industrie",
      },
      pricing: {
        badge: "Tarifs & Formules",
        title: "Des Formules Flexibles, un Rythme Qui Vous Convient",
        pacingOptions: [
          "1 Séance / Semaine",
          "2 Séances / Semaine (Intensif)",
        ],
        periodOptions: ["Mensuel", "Trimestriel (-15%)"],
        tierDesc: [
          "Débutant · Enfants, Ados & Adultes",
          "Intermédiaire · Code textuel & 3D",
          "Avancé / Pro · Unity, Web & IA",
        ],
        monthlyLabel: "MAD / mois",
        quarterlyLabel: "MAD / trimestre",
        levelLabels: ["Niveau 1", "Niveau 2", "Niveau 3"],
        rates: [
          { monthly: 590, intensive: 990, quarterly: 1500 },
          { monthly: 790, intensive: 1290, quarterly: 2000 },
          { monthly: 990, intensive: 1690, quarterly: 2500 },
        ],
        billedMonthly: "Facturé mensuellement · {sessions} séance(s) / semaine",
        billedQuarterly: "Facturé {total} MAD / trimestre (-15%)",
        featuredBadge: "Le Plus Complet",
        features: [
          "Groupes réduits (Max 6–8 élèves)",
          "Cours 100% en ligne, en direct",
          "Accès à la communauté sécurisée",
          "Suivi personnalisé & devlogs",
        ],
        cta: "S'inscrire",
        guaranteeStrong: "100% Satisfait ou Remboursé",
        guarantee: " après la 1ère séance — sans justification.",
      },
      faq: {
        badge: "Questions Fréquentes",
        title: "Vous avez des questions ?",
        subtitle:
          "Les réponses aux questions les plus posées par les parents et les apprenants.",
        items: [
          {
            q: "De quoi mon enfant ou moi-même avons-nous besoin pour suivre les cours ?",
            a: "Un simple PC ou Mac avec une connexion Internet suffit. Aucun matériel coûteux n'est requis — nous guidons chaque apprenant sur les logiciels gratuits à installer selon le parcours.",
            category: "equipement",
          },
          {
            q: "Dans quelle langue les cours sont-ils dispensés ?",
            a: "Les cours sont disponibles en Anglais ou en Arabe, avec un support bilingue et des explications en français selon le besoin de l'apprenant.",
            category: "langue",
          },
          {
            q: "Les adultes débutants peuvent-ils s'inscrire au Niveau 1 ?",
            a: "Oui, absolument. Le Niveau 1 est conçu pour enseigner la logique algorithmique à tout âge, sans aucune intimidation et sans prérequis technique.",
            category: "adultes",
          },
          {
            q: "Comment fonctionne la garantie satisfait ou remboursé ?",
            a: "Si la 1ère séance ne vous convient pas, nous procédons à un remboursement à 100% sans justification. C'est notre engagement envers la qualité de nos cours.",
            category: "tarifs",
          },
          {
            q: "Mon enfant n'a jamais codé. Peut-il quand même s'inscrire ?",
            a: "Absolument. Le parcours Junior Explorers part de zéro — aucune expérience préalable requise. Nous commençons par la programmation visuelle par blocs (Scratch) qui enseigne la logique et la résolution de problèmes à travers des exercices ludiques. Chaque élève apprend à son rythme avec l'accompagnement d'un instructeur.",
            category: "débutants",
          },
          {
            q: "Comment cela diffère-t-il des cours d'informatique à l'école ?",
            a: "Les cours d'informatique à l'école couvrent la culture numérique générale. L'Académie Medinova est un studio de codage basé sur des projets où les élèves construisent de vrais jeux, applications et logiciels. Ils apprennent les outils de l'industrie (Python, Unity, React) et développent un portfolio professionnel — pas seulement de la théorie.",
            category: "débutants",
          },
          {
            q: "Les élèves reçoivent-ils des certificats ou construisent-ils un portfolio ?",
            a: "Oui. Chaque élève complète des projets pratiques (jeux, applications, médias interactifs) qui forment un portfolio personnel qu'il peut présenter. À la fin d'un parcours, les élèves reçoivent un certificat de completion de l'Académie Medinova reconnu par nos partenaires industriels.",
            category: "certification",
          },
        ],
      },
      whatsapp: {
        message:
          "Bonjour, j'ai une question concernant l'inscription à Medinova Academy.",
        online: "En ligne — Réponse rapide via WhatsApp",
        aria: "Discuter sur WhatsApp",
        levelMessages: [
          "Bonjour, j'ai une question concernant l'inscription au Level 1 (START).",
          "Bonjour, j'ai une question concernant l'inscription au Level 2 (BUILD).",
          "Bonjour, j'ai une question concernant le Level 3 (MASTER) avancé et le Vibe Coding.",
        ],
        quickQuestion: "Question rapide via WhatsApp",
        registerCta: "S'inscrire via WhatsApp",
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
      subAcademy: "أكاديمية مدينوفا",
      subAcademyDesc: "مسارات برمجة للأطفال والكبار",
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
            "/images/games/pharaohs-guardian/2752x2064-screenshot.jpeg",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (1).jpeg",
            "/images/games/pharaohs-guardian/2752x2064-screenshot (2).jpeg",
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
            "/images/games/sniper-elimination/screenshot1.png",
            "/images/games/sniper-elimination/screenshot2.png",
            "/images/games/sniper-elimination/screenshot3.png",
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
            "/images/games/chameleon-outbreak/1284x2778-screenshot (5).jpeg",
            "/images/games/chameleon-outbreak/1284x2778-screenshot (6).jpeg",
            "/images/games/chameleon-outbreak/2064x2752-screenshot (10).jpeg",
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
            "/images/games/blitz-combat/2064x2752-screenshot (3).png",
            "/images/games/blitz-combat/2064x2752-screenshot (4).png",
            "/images/games/blitz-combat/2064x2752-screenshot.jpg",
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
      badge: "عن استوديو مدينوفا",
      title: "الاستوديو وراء الألعاب",
      subtitle:
        "استوديو ألعاب مغربي مستقل يصمم تجارب تفاعلية وأدوات تعلم ومحركات نمو B2B.",
      introTitle: "من نحن",
      intro:
        "استوديو مدينوفا استوديو مغربي مستقل يبتكر ألعاباً عالية الإثارة وتجارب مكانية غامرة ومنتجات رقمية موجهة للنمو من قلب شمال أفريقيا.",
      pillars: [
        { title: "تطوير الألعاب والتقنيات المكانية", description: "ألعاب متعددة المنصات وAR/VR و3D تفاعلية مبنية بـ Unity." },
        { title: "وكالة نمو B2B", description: "تسويق شامل ومحتوى ونمو مدعوم بالذكاء الاصطناعي." },
        { title: "أكاديمية مدينوفا", description: "مسارات برمجة تنقل المتعلمين من المنطق المرئي إلى التطوير الاحترافي." },
      ],
    },
    hub: {
      hero: {
        badge: "استوديو تطوير ألعاب نشط وأكاديمية برمجة معتمدة في القنيطرة، المغرب",
        headline: "نصنع الألعاب، ننمّي العلامات التجارية ونعلّم الجيل القادم من المطورين.",
        subheadline:
          "استوديو مدينوفا استوديو مغربي مستقل يصمم ألعاب Unity C# وتجارب AR/VR وWebGL وأنظمة نمو B2B ومسارات برمجة معتمدة في سكراتش وبايثون وUnity C# — من القنيطرة، المغرب.",
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
        title: "أكاديمية مدينوفا",
        desc: "مسارات برمجة معتمدة في سكراتش وبايثون وUnity C# مع شهادات قابلة للتحقق عبر رمز QR.",
      },
    },
    pillars: {
      games: "تطوير الألعاب",
      gamesTitle: "تطوير الألعاب والهندسة المخصصة",
      gamesSubtitle:
        "ألعاب متعددة المنصات، تجارب AR/VR تفاعلية، وبرمجيات مخصصة مبنية للتوسع.",
      academy: "أكاديمية مدينوفا",
      academyTitle: "أكاديمية البرمجة — من 7 سنوات إلى البالغين",
      academySubtitle:
        "من المنطق المرئي إلى التطوير الاحترافي — مسارات منظمة لكل عمر وطموح.",
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
        "أنظمة رقمية عالية التحويل، تطوير ألعاب مخصصة، وتعليم تقني.",
      location: "القنيطرة، المغرب 🇲🇦",
      support: "تواصل ودعم",
      colAgency: "وكالة النمو B2B",
      colGameDev: "تطوير الألعاب والتقنية التفاعلية",
      colAcademy: "أكاديمية ميدينوفا",
      colLegal: "الثقة، القانون والامتثال",
      cta: "احجز مكالمة استراتيجية",
      agencyLinks: [
        "منصات ويب عالية التحويل",
        "أنظمة اكتساب ذاتية بالذكاء الاصطناعي",
        "إعلانات ميتا والتسويق بالأداء",
        "أطر التشخيص والاشتراكات الشهرية",
      ],
      gameDevLinks: [
        "ألعاب تجارية وألعاب WebGL",
        "تقنية AR/VR مخصصة وتقنيات مكانية",
        "ألعاب تعليمية ومحاكاة تربوية",
        "نشر بوابات الويب",
      ],
      academyLinks: [
        "مسارات برمجة للأطفال والكبار",
        "مناهج Scratch وPython وUnity C#",
        "وحدات معتمدة قابلة للطباعة وQR",
        "معرض مشاريع الطلاب",
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
        "💻 100% عبر الإنترنت • تعلّم من المنزل (حاسوب + اتصال بالإنترنت) | الدراسة باللغة الإنجليزية أو العربية حسب الاختيار",
      announcementCta: "سجّل الآن / اكتشف المزيد",
      hero: {
        badge:
          "● دورات مباشرة عبر الإنترنت | تحت إشراف مؤسس الاستوديو | ضمان استرجاع المبالغ بنسبة 100%",
        headline:
          "تعلّم البرمجة، صمّم ألعاب الفيديو وأتقن الذكاء الاصطناعي — مهما كان عمرك أو مستواك",
        subheadline:
          "من البداية بالبرمجة المرئية (Scratch) وصولاً إلى C# وUnity 3D وتطوير الويب وVibe Coding. برامج 100% عبر الإنترنت للأطفال، الشباب، النساء، والمبتدئين الكبار، تحت إشراف مهندس ومطور ألعاب.",
        targetAudience:
          "مناسب لجميع الأعمار والمستويات — من 7 سنوات فما فوق",
        secondaryCta: "اطّلع على الأسعار",
        trust: [
          {
            title: "ضمان استرجاع الأموال بنسبة 100%",
            desc: "بعد الحصة الأولى",
          },
          {
            title: "مطور لعبة على Roblox",
            desc: "تجاوزت 1,000,000 زيارة",
          },
          {
            title: "مجموعات مصغرة",
            desc: "أقصى حد 6 إلى 8 طلاب",
          },
        ],
      },
      proof: {
        badge: "الاستوديو الداعم للأكاديمية",
        title:
          "تعلمك لن يكون مع أستاذ تقليدي، بل مع مهندس ومؤسس استوديو ألعاب",
        founderCaption:
          "منير عبوتي — مؤسس Medinova Studio والمطور الرئيسي.",
        boothCaption:
          "الجناح C38 — المعرض المغربي للألعاب Morocco Gaming Expo (عرض ألعابنا للجمهور).",
        robloxBadge: "دليل على Roblox",
        robloxTitle:
          "مطور لعبة 'Zombies WarZone' على Roblox — تجاوزت 1,000,000 زيارة عالمياً.",
        robloxCta: "تجربة اللعبة على Roblox",
        showcaseLabel: "نماذج من ألعاب الاستوديو",
        games: [
          "Pharaoh's Guardian: Mummies",
          "Chameleon Outbreak: Camo Hunt",
          "Sniper Elimination Challenge",
          "Blitz Combat Race",
        ],
      },
      tracks: {
        badge: "3 مسارات متدرجة",
        title:
          "من المبتدئ المطلق إلى الاحتراف (بدون حدود للسن)",
        programLabel: "البرنامج",
        resultLabel: "النتيجة",
        levels: [
          {
            level: "LEVEL 1",
            title: "START",
            programTitle: "المبتدئ المطلق والمنطق البرمجي",
            levelName: "مبتدئ",
            target:
              "الأطفال (7–9 سنوات)، والكبار والنساء الراغبين في تعلم البرمجة من الصفر",
            focus: [
              "المنطق البصري",
              "Scratch",
              "التصميم الجرافيكي",
              "الثقافة الرقمية ومدخل إلى الذكاء الاصطناعي",
            ],
            outcome:
              "تطوير ألعاب 2D تفاعلية وقصص متحركة، وفهم المنطق البرمجي بدون تعقيدات البرمجة النصية.",
          },
          {
            level: "LEVEL 2",
            title: "BUILD",
            programTitle: "البرمجة النصية وتطوير الويب و 3D",
            levelName: "متوسط",
            target:
              "الأطفال (10–12 سنة)، والشباب والكبار المستعدين للبرمجة النصية",
            focus: [
              "استوديو Roblox (برمجة Lua ثلاثية الأبعاد)",
              "أساسيات الويب (HTML & CSS)",
              "أساسيات Python",
              "تحرير الفيديو وسجلات التطوير",
            ],
            outcome:
              "لعبة 3D منشورة على Roblox، مواقع إلكترونية خاصة بك، وسكريبتات بلغة Python.",
          },
          {
            level: "LEVEL 3",
            title: "MASTER",
            programTitle: "هندسة الألعاب 3D والذكاء الاصطناعي",
            levelName: "متقدم / محترف",
            target: "الشباب (+13 سنة)، الطلبة والكبار",
            focus: [
              "محرك Unity C# (الجوال والكمبيوتر)",
              "النمذجة ثلاثية الأبعاد (Blender)",
              "الويب المتقدم (JavaScript)",
              "سير عمل Vibe Coding وأدوات الذكاء الاصطناعي",
            ],
            outcome:
              "لعبة 3D متكاملة بـ Unity، مجسمات 3D بـ Blender، وإتقان أدوات الـ Vibe Coding والذكاء الاصطناعي.",
          },
        ],
      },
      community: {
        badge: "● مجتمع آمن ومأطر 100%",
        title: "يكون التعلم أسرع وأكثر متعة عند التواجد ضمن مجتمع مشجع.",
        subtitle:
          "مساحة خاصة وآمنة للتواصل والتطوير المستمر خارج أوقات الحصص المباشرة.",
        features: [
          {
            title: "مساحة خاصة للمساعدة",
            desc: "قسم للأسئلة والأجوبة للحصول على حلول سريعة لأي مشكلة في الكود من الطلاب والمؤطرين.",
          },
          {
            title: "قنوات لمشاركة المشاريع",
            desc: "مراجعات دورية وتقييمات لمشاريعك في Roblox وUnity وBlender.",
          },
          {
            title: "إشراف ومراقبة مستمرة على مدار الساعة",
            desc: "بيئة آمنة ومحترمة خالية من التنمر أو الروابط المشبوهة.",
          },
          {
            title: "تحديات شهرية",
            desc: "تحديات ممتعة لتطوير مستواك والمنافسة في أجواء حماسية.",
          },
        ],
      },
      certification: {
        badge: "● اعتماد Medinova Studio",
        title: "شهادة رسمية وقابلة للتحقق فكل مستوى",
        diplomasTitle: "الدبلومات حسب المستوى",
        diplomasSubtitle:
          "توثيق رسمي للمهارات والمشاريع التي ينجزها المتعلم.",
        levels: ["المستوى 1", "المستوى 2", "المستوى 3"],
        diplomas: [
          "شهادة فـ المنطق البرمجي والإبداع الرقمي",
          "دبلوم فـ برمجة الألعاب 3D وتطوير الويب",
          "دبلوم فـ هندسة الألعاب 3D، الويب وتقنيات الذكاء الاصطناعي",
        ],
        includedTitle: "ماذا يتضمن؟",
        highlights: [
          {
            title: "شهادة مطبوعة",
            desc: "شهادة مطبوعة موثقة توضح المساقات والمهارات المكتسبة.",
          },
          {
            title: "كود QR للتأكد",
            desc: "تحقق مباشر عبر ملف الأعمال الإلكتروني للمتعلم.",
          },
          {
            title: "تقارير عبر الواتساب",
            desc: "متابعة شهرية تصل مباشرة لأولياء الأمور أو المتعلم.",
          },
        ],
        recognition: "مشهود بها لدى شركائنا في المجال",
      },
      pricing: {
        badge: "الأسعار والباقات",
        title: "باقات مرنة، بالإيقاع الذي يناسبك",
        pacingOptions: ["حصة واحدة في الأسبوع", "حصتان في الأسبوع (مكثف)"],
        periodOptions: ["شهري", "كل 3 أشهر (خصم 15%)"],
        tierDesc: [
          "مبتدئ · أطفال وشباب وكبار",
          "متوسط · كود مكتوب و3D",
          "متقدم / محترف · Unity والويب والذكاء الاصطناعي",
        ],
        monthlyLabel: "درهم / للشهر",
        quarterlyLabel: "درهم / كل 3 أشهر",
        levelLabels: ["المستوى 1", "المستوى 2", "المستوى 3"],
        rates: [
          { monthly: 590, intensive: 990, quarterly: 1500 },
          { monthly: 790, intensive: 1290, quarterly: 2000 },
          { monthly: 990, intensive: 1690, quarterly: 2500 },
        ],
        billedMonthly: "الدفع شهري · {sessions} في الأسبوع",
        billedQuarterly: "الدفع {total} درهم / كل 3 أشهر (خصم 15%)",
        featuredBadge: "الأكثر اكتمالاً",
        features: [
          "مجموعات مصغرة (أقصى حد 6 إلى 8 طلاب)",
          "حصص مباشرة 100% عبر الإنترنت",
          "الوصول إلى المجتمع الآمن",
          "متابعة فردية وسجلات التقدم",
        ],
        cta: "سجّل الآن",
        guaranteeStrong: "ضمان استرجاع الأموال بنسبة 100%",
        guarantee: " بعد الحصة الأولى — دون الحاجة لتقديم أي أسباب.",
      },
      faq: {
        badge: "الأسئلة الشائعة",
        title: "هل لديك أي استفسار؟",
        subtitle:
          "إجابات عن أكثر الأسئلة شائعة بين أولياء الأمور والمتعلمين.",
        items: [
          {
            q: "ما الذي أحتاجه أو يحتاجه طفلي للبدء؟",
            a: "حاسوب عادي (PC أو Mac) واتصال بالإنترنت فقط. لا يشترط جهاز عالي المواصفات — سنساعدك في تثبيت كافة البرامج المجانية المطلوبة.",
            category: "equipment",
          },
          {
            q: "ما هي لغة تقديم الدروس؟",
            a: "الدروس متاحة باللغة الإنجليزية أو العربية حسب الاختيار، مع الشرح والمساعدة بالفرنسية لضمان فهم الجميع.",
            category: "language",
          },
          {
            q: "هل يمكن للمبتدئين الكبار التسجيل في المستوى 1؟",
            a: "بالتأكيد! المستوى 1 مصمم لتعليم منطق البرمجة للجميع بطريقة سهلة وممتعة وبدون تعقيدات.",
            category: "adults",
          },
          {
            q: "كيف تعمل آلية ضمان استرجاع الأموال؟",
            a: "إذا حضرت الحصة الأولى ولم تناسبك، يتم استرجاع كامل المبلغ مباشرة ودون تعقيد.",
            category: "pricing",
          },
          {
            q: "طفلي لم يسبق له البرمجة. هل يمكنه الانضمام؟",
            a: "بالتأكيد. مسار المستكشفين الصغار يبدأ من الصفر — لا حاجة لأي خبرة سابقة. نبدأ بالبرمجة المرئية بالكتل (Scratch) التي تعلم المنطق وحل المشكلات عبر تمارين ممتعة. كل طالب يتعلم بوتيرته الخاصة مع إشراف المدرب.",
            category: "beginners",
          },
          {
            q: "كيف يختلف هذا عن حصص المعلوماتية في المدرسة؟",
            a: "حصص المدرسة تغطي الثقافة الرقمية العامة. أكاديمية مدينوفا استوديو برمجة قائم على المشاريع حيث يبني الطلاب ألعاباً وتطبيقات وبرمجيات حقيقية. يتعلمون أدوات الصناعة (Python، Unity، React) ويطورون معرض أعمال احترافي — وليس مجرد نظريات.",
            category: "beginners",
          },
          {
            q: "هل يتلقى الطلاب شهادات أو يبنون معرض أعمال؟",
            a: "نعم. كل طالب يكمل مشاريع عملية (ألعاب، تطبيقات، وسائط تفاعلية) تشكل معرض أعمال شخصي يمكنه عرضه. عند إكمال المسار، يتلقى الطلاب شهادة إتمام من أكاديمية مدينوفا معترف بها من شركائنا في الصناعة.",
            category: "certification",
          },
        ],
      },
      whatsapp: {
        message:
          "السلام عليكم، عندي استفسار حول التسجيل في Medinova Academy.",
        online: "متصل — رد سريع عبر الواتساب",
        aria: "تواصل معنا عبر واتساب",
        levelMessages: [
          "السلام عليكم، عندي استفسار حول التسجيل في Level 1 (START).",
          "السلام عليكم، عندي استفسار حول التسجيل في Level 2 (BUILD).",
          "السلام عليكم، عندي استفسار حول المستوى المتقدم Level 3 (MASTER) و Vibe Coding.",
        ],
        quickQuestion: "سؤال سريع عبر الواتساب",
        registerCta: "سجّل عبر واتساب",
      },
    },
  },
};
