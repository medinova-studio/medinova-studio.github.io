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
    pills: string[];
    pillAges: string[];
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
    registerMessage: string;
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
  agency: {
    badge: string;
    title: string;
    subtitle: string;
    tiers: {
      name: string;
      price: string;
      setup: string;
      features: string[];
      cta: string;
      recommended?: boolean;
    }[];
    getStarted: string;
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
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
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
  };
  footer: {
    rights: string;
  };
  academy: AcademyTranslation;
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      solutions: "Our Solutions",
      about: "About Founder",
      portfolio: "Games & Portfolio",
      services: "Game Dev Services",
      contact: "Contact",
      hireStudio: "Hire Studio",
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
    faq: {
      badge: "Parent FAQ",
      title: "Answers for Parents",
      subtitle:
        "Everything you need to know before enrolling your child in Medinova Academy.",
      items: [
        {
          q: "My child has never coded before. Can they still join?",
          a: "Absolutely. Our Junior Explorers track starts from zero — no prior experience needed. We begin with visual block-based programming (Scratch) that teaches logic and problem-solving through fun, game-like exercises. Every student learns at their own pace with instructor guidance.",
        },
        {
          q: "How is this different from computer classes at school?",
          a: "School computer classes cover general digital literacy. Medinova Academy is a project-based coding studio where students build real games, apps, and software. They learn industry tools (Python, Unity, React) and develop a professional portfolio — not just theory.",
        },
        {
          q: "What equipment does my child need?",
          a: "Students need a laptop (Windows or Mac) with a stable internet connection. For game development tracks, we'll guide you on any free software installations. No expensive hardware is required — we design our curriculum to run on standard family laptops.",
        },
        {
          q: "Are classes taught in multiple languages?",
          a: "Yes. Our instructors teach in French, English, and Arabic. We match each student group with an instructor who speaks their preferred language. All course materials are available in all three languages.",
        },
        {
          q: "Do students receive certificates or build a portfolio?",
          a: "Yes. Every student completes hands-on projects (games, apps, interactive media) that form a personal portfolio they can showcase. Upon completing a track, students receive a Medinova Academy certificate of completion recognized by our industry partners.",
        },
      ],
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
    },
    footer: {
      rights: "All rights reserved.",
    },
    agency: {
      badge: "B2B Growth Agency",
      title: "Agency Growth Packages",
      subtitle: "Full-funnel marketing, content production, paid ads, and AI WhatsApp routing — a 360° growth engine for your brand.",
      tiers: [
        {
          name: "Foundation",
          price: "2,500",
          setup: "1,500",
          features: [
            "Strategy & KPI Blueprint",
            "Content Calendar (12 posts/mo)",
            "Meta/Google Ads Management",
            "Monthly Performance Report",
            "Dedicated Slack Channel"
          ],
          cta: "Get Started",
          recommended: false
        },
        {
          name: "Scale & Convert",
          price: "5,000",
          setup: "2,500",
          features: [
            "Everything in Foundation",
            "Content Production (24 posts/mo + 4 Reels)",
            "Advanced Funnel & Email Automation",
            "AI WhatsApp Lead Routing",
            "Weekly Optimization Calls",
            "Quarterly Strategy Review"
          ],
          cta: "Get Started",
          recommended: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          setup: "Custom",
          features: [
            "Everything in Scale & Convert",
            "Unlimited Content & Creative",
            "Multi-Channel Attribution Modeling",
            "Custom AI Agent Development",
            "Dedicated Growth Team",
            "SLA & Revenue Share Options"
          ],
          cta: "Request Quote",
          recommended: false
        }
      ],
      getStarted: "Get Started"
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
        pills: ["For Kids", "For Teens & Beginner Adults"],
        pillAges: ["7–12 years", "13+"],
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
        ],
      },
      whatsapp: {
        message:
          "Hello Medinova Academy 👋 I'd like to know more about the classes.",
        online: "Online — Fast reply",
        aria: "Chat on WhatsApp",
        registerMessage:
          "Hello Medinova Academy 👋 I'd like to register for {level} ({name}) — {pacing}, {period}.",
      },
    },
  },
  fr: {
    nav: {
      solutions: "Nos Solutions",
      about: "À Propos du Fondateur",
      portfolio: "Jeux & Portfolio",
      services: "Services Game Dev",
      contact: "Contact",
      hireStudio: "Engager le Studio",
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
    faq: {
      badge: "FAQ Parents",
      title: "Réponses pour les Parents",
      subtitle:
        "Tout ce qu'il faut savoir avant d'inscrire votre enfant à l'Académie Medinova.",
      items: [
        {
          q: "Mon enfant n'a jamais codé. Peut-il quand même s'inscrire ?",
          a: "Absolument. Le parcours Junior Explorers part de zéro — aucune expérience préalable requise. Nous commençons par la programmation visuelle par blocs (Scratch) qui enseigne la logique et la résolution de problèmes à travers des exercices ludiques. Chaque élève apprend à son rythme avec l'accompagnement d'un instructeur.",
        },
        {
          q: "Comment cela diffère-t-il des cours d'informatique à l'école ?",
          a: "Les cours d'informatique à l'école couvrent la culture numérique générale. L'Académie Medinova est un studio de codage basé sur des projets où les élèves construisent de vrais jeux, applications et logiciels. Ils apprennent les outils de l'industrie (Python, Unity, React) et développent un portfolio professionnel — pas seulement de la théorie.",
        },
        {
          q: "De quel équipement mon enfant a-t-il besoin ?",
          a: "Les élèves ont besoin d'un ordinateur portable (Windows ou Mac) avec une connexion internet stable. Pour les parcours de développement de jeux, nous vous guidons sur les logiciels gratuits à installer. Aucun matériel coûteux n'est requis — nos programmes sont conçus pour fonctionner sur des ordinateurs familiaux standards.",
        },
        {
          q: "Les cours sont-ils dispensés en plusieurs langues ?",
          a: "Oui. Nos instructeurs enseignent en français, anglais et arabe. Nous associons chaque groupe d'élèves à un instructeur parlant leur langue préférée. Tout le matériel de cours est disponible dans les trois langues.",
        },
        {
          q: "Les élèves reçoivent-ils des certificats ou construisent-ils un portfolio ?",
          a: "Oui. Chaque élève complète des projets pratiques (jeux, applications, médias interactifs) qui forment un portfolio personnel qu'il peut présenter. À la fin d'un parcours, les élèves reçoivent un certificat de completion de l'Académie Medinova reconnu par nos partenaires industriels.",
        },
      ],
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
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    agency: {
      badge: "Croissance Agence",
      title: "Packs de Croissance Agence",
      subtitle: "Marketing plein entonnoir, production de contenu, publicités payantes et routage IA WhatsApp — un moteur de croissance 360° pour votre marque.",
      tiers: [
        {
          name: "Foundation",
          price: "2,500",
          setup: "1,500",
          features: [
            "Stratégie & Tableau de KPI",
            "Calendrier de Contenu (12 posts/mo)",
            "Gestion des Publicités Meta/Google",
            "Rapport de Performance Mensuel",
            "Canal Slack Dédié"
          ],
          cta: "Commencer",
          recommended: false
        },
        {
          name: "Scale & Convert",
          price: "5,000",
          setup: "2,500",
          features: [
            "Tout ce qui est dans Foundation",
            "Production de Contenu (24 posts/mo + 4 Reels)",
            "Funnel Avancé & Automatisation Email",
            "Routage IA WhatsApp",
            "Appels d'Optimisation Hebdomadaires",
            "Revue Stratégique Quartrielle"
          ],
          cta: "Commencer",
          recommended: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          setup: "Custom",
          features: [
            "Tout ce qui est dans Scale & Convert",
            "Contenu & Créativité Illimités",
            "Modélisation d'Attribution Multi-Canaux",
            "Développement d'Agent IA Sur-Mesure",
            "Équipe de Croissance Dédiée",
            "SLA & Options de Partage de Revenus"
          ],
          cta: "Demander un Devis",
          recommended: false
        }
      ],
      getStarted: "Commencer"
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
        pills: ["Pour Enfants", "Pour Ados & Adultes Débutants"],
        pillAges: ["7–12 ans", "13+"],
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
        ],
      },
      whatsapp: {
        message:
          "Bonjour Medinova Academy 👋 Je souhaite en savoir plus sur les cours.",
        online: "En ligne — Réponse rapide",
        aria: "Discuter sur WhatsApp",
        registerMessage:
          "Bonjour Medinova Academy 👋 Je souhaite m'inscrire au {level} ({name}) — {pacing}, {period}.",
      },
    },
  },
  ar: {
    nav: {
      solutions: "الخدمات ديالنا",
      about: "عن المؤسس",
      portfolio: "الألعاب والبورطفيليو",
      services: "خدمات تطوير الألعاب",
      contact: "تواصل",
      hireStudio: "تواصل مع الاستوديو",
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
    faq: {
      badge: "أسئلة الآباء",
      title: "إجابات للآباء",
      subtitle:
        "كل ما تحتاج معرفته قبل تسجيل طفلك في أكاديمية مدينوفا.",
      items: [
        {
          q: "طفلي لم يسبق له البرمجة. هل يمكنه الانضمام؟",
          a: "بالتأكيد. مسار المستكشفين الصغار يبدأ من الصفر — لا حاجة لأي خبرة سابقة. نبدأ بالبرمجة المرئية بالكتل (Scratch) التي تعلم المنطق وحل المشكلات عبر تمارين ممتعة. كل طالب يتعلم بوتيرته الخاصة مع إشراف المدرب.",
        },
        {
          q: "كيف يختلف هذا عن حصص المعلوماتية في المدرسة؟",
          a: "حصص المدرسة تغطي الثقافة الرقمية العامة. أكاديمية مدينوفا استوديو برمجة قائم على المشاريع حيث يبني الطلاب ألعاباً وتطبيقات وبرمجيات حقيقية. يتعلمون أدوات الصناعة (Python، Unity، React) ويطورون معرض أعمال احترافي — وليس مجرد نظريات.",
        },
        {
          q: "ما المعدات التي يحتاجها طفلي؟",
          a: "يحتاج الطلاب إلى حاسوب محمول (Windows أو Mac) مع اتصال إنترنت مستقر. لمسارات تطوير الألعاب، نرشدك لتثبيت البرامج المجانية. لا حاجة لأي معدات باهظة — صممنا مناهجنا لتعمل على حواسيب عائلية عادية.",
        },
        {
          q: "هل تُدرّس الحصص بلغات متعددة؟",
          a: "نعم. مدرسونا يدرّسون بالفرنسية والإنجليزية والعربية. نطابق كل مجموعة طلاب مع مدرس يتحدث لغتهم المفضلة. جميع المواد الدراسية متاحة باللغات الثلاث.",
        },
        {
          q: "هل يتلقى الطلاب شهادات أو يبنون معرض أعمال؟",
          a: "نعم. كل طالب يكمل مشاريع عملية (ألعاب، تطبيقات، وسائط تفاعلية) تشكل معرض أعمال شخصي يمكنه عرضه. عند إكمال المسار، يتلقى الطلاب شهادة إتمام من أكاديمية مدينوفا معترف بها من شركائنا في الصناعة.",
        },
      ],
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
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
    agency: {
      badge: "وكالة النمو B2B",
      title: "باقات نمو الوكالة",
      subtitle: "تسويق شامل، إنتاج محتوى، إعلانات مدفوعة، وتوجيه الذكاء الاصطناعي عبر واتساب — محرك نمو 360° لعلامتك التجارية.",
      tiers: [
        {
          name: "Foundation",
          price: "2,500",
          setup: "1,500",
          features: [
            "استراتيجية و مخطط KPI",
            "تقويم محتوى (12 منشور/شهر)",
            "إدارة إعلانات Meta/Google",
            "تقرير أداء شهري",
            "قناة Slack مخصصة"
          ],
          cta: "ابدأ الآن",
          recommended: false
        },
        {
          name: "Scale & Convert",
          price: "5,000",
          setup: "2,500",
          features: [
            "كل ما في Foundation",
            "إنتاج محتوى (24 منشور/شهر + 4 Reels)",
            "قمع متقدم و أتمتة البريد الإلكتروني",
            "توجيه WhatsApp بالذكاء الاصطناعي",
            "مكالمات تحسين أسبوعية",
            "مراجعة استراتيجية ربع سنوية"
          ],
          cta: "ابدأ الآن",
          recommended: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          setup: "Custom",
          features: [
            "كل ما في Scale & Convert",
            "محتوى و إبداع غير محدود",
            "نمذجة إسناد متعددة القنوات",
            "تطوير وكيل ذكاء اصطناعي مخصص",
            "فريق نمو مخصص",
            "SLA و خيارات مشاركة الإيرادات"
          ],
          cta: "طلب عرض سعر",
          recommended: false
        }
      ],
      getStarted: "ابدأ الآن"
    },
    academy: {
      announcement:
        "💻 100% أونلاين • قرى من الدار (حاسوب + أنترنيت) | القراية بالإنجليزية أولا بالعربية حسب الإختيار",
      announcementCta: "تسجل دابا / اكتشف المزيد",
      hero: {
        badge:
          "● كورس حي أونلاين | كايأطروا مؤسس الاستوديو | 100% مضمون أولا نرجعوا ليك فلوسك",
        headline:
          "تعلم الكود، صاوب ألعاب الفيديو وإتقن الذكاء الاصطناعي — كيفما كان سنك أولا مستواك",
        subheadline:
          "من البداية بالتكوييد البصري (Scratch) حتى لـ C#، Unity 3D، الويب و Vibe Coding. برامج 100% أونلاين للدراري الصغار، الشباب، النساء، والمبتدئين الكبار، تحت إشراف مهندس ومطور ألعاب.",
        pills: ["للأطفال", "للشباب والكبار المبتدئين"],
        pillAges: ["من 7 حتى لـ 12 سنة", "+13 سنة"],
        trust: [
          {
            title: "100% مضمون أولا نرجعوا ليك فلوسك",
            desc: "بعد أول حصة",
          },
          {
            title: "مطور لعبة على Roblox",
            desc: "فايتة 1,000,000 لعب",
          },
          {
            title: "كليكات صغار",
            desc: "أقصى حد 6 حتى لـ 8 ديال التلامذ",
          },
        ],
      },
      proof: {
        badge: "الاستوديو اللي ورا الأكاديمية",
        title:
          "القراية ديالك ماشي مع أستاذ عادي، ولكن مع مهندس ومؤسس استوديو ألعاب",
        founderCaption:
          "منير عبوتي — مؤسس Medinova Studio والمطور الرئيسي.",
        boothCaption:
          "ستاند C38 — المعرض المغربي للألعاب Morocco Gaming Expo (عرض الألعاب ديالنا للجمهور).",
        robloxBadge: "دليل على Roblox",
        robloxTitle:
          "صانع لعبة 'Zombies WarZone' على Roblox — فايتة 1,000,000 ملعوبة عالمياً.",
        robloxCta: "جرب اللعبة على Roblox",
        showcaseLabel: "نماذج من الألعاب ديال الاستوديو",
        games: [
          "Pharaoh's Guardian: Mummies",
          "Chameleon Outbreak: Camo Hunt",
          "Sniper Elimination Challenge",
          "Blitz Combat Race",
        ],
      },
      tracks: {
        badge: "3 ديال المسارات متدرجة",
        title:
          "من المبتدئ كلياً حتى للـ الاحتراف (بدون حدود سنية)",
        programLabel: "البرنامج",
        resultLabel: "النتيجة",
        levels: [
          {
            level: "LEVEL 1",
            title: "START",
            programTitle: "المبتدئ المطلق واللوجيك البرمجي",
            levelName: "مبتدئ",
            target:
              "الدراري الصغار (7–9 سنوات)، والكبار والنساء اللي باغين يبداو الكود من الزيرو",
            focus: [
              "المنطق البصري",
              "Scratch",
              "التصميم الجرافيكي",
              "الثقافة الرقمية ومدخل إلى الذكاء الاصطناعي",
            ],
            outcome:
              "صناعة ألعاب 2D تفاعلية، قصص متحركة، وفهم المنطق البرمجي بلا تعقيدات السنتاكس.",
          },
          {
            level: "LEVEL 2",
            title: "BUILD",
            programTitle: "البرمجة النصية وتطوير الويب و 3D",
            levelName: "متوسط",
            target:
              "الأطفال (10–12 سنة)، الشباب والكبار اللي واجدين للكود المكتوب",
            focus: [
              "استوديو Roblox (برمجة Lua ثلاثية الأبعاد)",
              "أساسيات الويب (HTML & CSS)",
              "أساسيات Python",
              "تحرير الفيديو وسجلات التطوير",
            ],
            outcome:
              "لعبة 3D محطوطة على Roblox، مواقع ويب ديالك، وسكريبتات بـ Python.",
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
        title: "التعلُم كيكون أسرع وأمتع فاش كتقرى وسط مجتمع كايشجعك.",
        subtitle:
          "فضاء خاص ومحمّي للتواصل والتطوير المستمر خارج أوقات المباشر.",
        features: [
          {
            title: "مساحة خاصة للمساعدة",
            desc: "أسئلة وأجوبة باش تجيب الحل لأي مشكل ف الكود من عند التلامذ والـ Instructors.",
          },
          {
            title: "قنوات لمشاركة المشاريع",
            desc: "مراجعات دورية وأخد أراء وملاحظات على خدمة ديالك فـ Roblox، Unity، و Blender.",
          },
          {
            title: "تأطير ومراقبة دائمة 24/7",
            desc: "بيئة نقية، محترمة، وبلا سمية أولا تنمر أولا روابط مشبوهة.",
          },
          {
            title: "تحديات شهرية",
            desc: "مسابقات خفيفة وممتعة باش تطور مستواك وتنافس فـ جو حماسي.",
          },
        ],
      },
      certification: {
        badge: "● اعتماد Medinova Studio",
        title: "شهادة رسمية وقابلة للتحقق فكل مستوى",
        diplomasTitle: "الدبلومات حسب المستوى",
        diplomasSubtitle:
          "اعتراف رسمي بالمهارات والمشاريع اللي كايصاوبها المتعلم.",
        levels: ["المستوى 1", "المستوى 2", "المستوى 3"],
        diplomas: [
          "شهادة فـ المنطق البرمجي والإبداع الرقمي",
          "دبلوم فـ برمجة الألعاب 3D وتطوير الويب",
          "دبلوم فـ هندسة الألعاب 3D، الويب وتقنيات الذكاء الاصطناعي",
        ],
        includedTitle: "شنو اللي كيتضمن؟",
        highlights: [
          {
            title: "شهادة مطبوعة",
            desc: "شهادة رسمية مخرجة ومطبوعة بأسماء الدروس والمهارات المتفوق فيها.",
          },
          {
            title: "كود QR للتأكد",
            desc: "تحقق مباشر عبر البورطفيليو الإلكتروني للمتعلم.",
          },
          {
            title: "تقارير فالواتساب",
            desc: "متابعة شهرية كتوصل مباشرة فالواتساب للوالدين أولا المتعلم.",
          },
        ],
        recognition: "معترف بها من الشركاء ديالنا فالصناعة",
      },
      pricing: {
        badge: "الأسعار والباقات",
        title: "باقات مرنة، إيقاع كيناسبك",
        pacingOptions: ["حصة واحدة فالسيمانة", "جوج حصص فالسيمانة (مكثف)"],
        periodOptions: ["شهري", "كل 3 أشهر (خصم 15%)"],
        tierDesc: [
          "مبتدئ · دراري وشباب وكبار",
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
        billedMonthly: "كتخلص شهرياً · {sessions} فالسيمانة",
        billedQuarterly: "كتخلص {total} درهم / كل 3 أشهر (خصم 15%)",
        featuredBadge: "الأكثر اكتمالاً",
        features: [
          "كليكات صغار (أقصى حد 6 حتى 8 ديال التلامذ)",
          "حصص مباشرة 100% أونلاين",
          "ولوج للمجتمع الآمن",
          "متابعة فردية وسجلات ديال التقدم",
        ],
        cta: "تسجل دابا",
        guaranteeStrong: "100% مضمون أولا نرجعوا ليك فلوسك",
        guarantee: " بعد أول حصة — بلا ما تسولك حتى سؤال.",
      },
      faq: {
        badge: "الأسئلة الشائعة",
        title: "عندك شي تساؤل؟",
        subtitle:
          "أجوبة على أكثر الأسئلة اللي كايطرحوها الوالدين والمتعلمين.",
        items: [
          {
            q: "شنو حتاج أنا أولا ولدي باش نبداو القراية؟",
            a: "حاسوب عادي (PC أولا Mac) وأنترنيت فقط. ماشي بالضرورة يكون بيسي غالي — حنا كنعاونوك تثبت البرامج المجانية اللي غنحتاجو.",
            category: "equipment",
          },
          {
            q: "بأينا لغة كايتقراو الدروس؟",
            a: "الدروس كاينين بالإنجليزية أولا بالدارجة/العربية حسب الإختيار، مع الشرح والمساعدة بالفرنسية باش كلشي يفهم مزيان.",
            category: "language",
          },
          {
            q: "واش الكبار المبتدئين يقدروا يتسجلوا فـ المستوى 1؟",
            a: "أكيد! المستوى 1 مديور باش يعلم منطق البرمجة للجميع وبطريقة ساهلة وممتعة وبلا تعقيدات.",
            category: "adults",
          },
          {
            q: "كيفاش كاتجري ضمانة إرجاع الفلوس؟",
            a: "إلا حضرتي للحصة الأولى وماعجبكش الحال، كترجع ليك فلوسك 100% مباشرة وبلا تعقيد.",
            category: "pricing",
          },
        ],
      },
      whatsapp: {
        message:
          "سلام أكاديمية مدينوفا 👋 بغيت نعرف المزيد على القراية.",
        online: "متصل — جواب سريع فـ الواتساب",
        aria: "تواصل معنا عبر واتساب",
        registerMessage:
          "سلام أكاديمية مدينوفا 👋 بغيت نتسجل فـ {level} ({name}) — {pacing}، {period}.",
      },
    },
  },
};
