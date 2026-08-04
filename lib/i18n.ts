export type Lang = "en" | "fr" | "ar";

export const LANGS: Lang[] = ["fr", "en", "ar"];

export const LANG_LABELS: Record<Lang, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

export const RTL_LANGS: Lang[] = ["ar"];

export type Translation = {
  nav: {
    offers: string;
    games: string;
    academy: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    subheadline: string;
    cta1: string;
    cta2: string;
    scroll: string;
  };
  home: {
    servicesBadge: string;
    servicesTitle: string;
    servicesSubtitle: string;
    cards: {
      key: "agency" | "games" | "academy";
      title: string;
      desc: string;
      points: string[];
      cta: string;
      href: string;
    }[];
    credBadge: string;
    credTitle: string;
    credSubtitle: string;
    stats: { value: string; label: string }[];
    testimonials: { quote: string; name: string; role: string }[];
    contactSummaryBadge: string;
    contactSummaryTitle: string;
    contactSummaryText: string;
    contactSummaryCta: string;
    responseTime: string;
    explore: string;
    backHome: string;
  };
  pillars: {
    agency: string;
    agencyTitle: string;
    agencySubtitle: string;
    games: string;
    gamesTitle: string;
    gamesSubtitle: string;
    academy: string;
    academyTitle: string;
    academySubtitle: string;
    notes: string;
    note1: string;
    note2: string;
    note3: string;
    from: string;
    enterpriseQuote: string;
    setup: string;
    monthly: string;
    perMonth: string;
    ht: string;
    recommended: string;
    includes: string;
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
    phone: string;
    phonePh: string;
    service: string;
    servicePh: string;
    services: string[];
    langPref: string;
    langPrefPh: string;
    message: string;
    messagePh: string;
    send: string;
    sending: string;
    sent: string;
    sentNote: string;
    emailLabel: string;
    location: string;
  };
  footer: {
    rights: string;
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      offers: "Agency Offers",
      games: "Game Dev",
      academy: "Academy",
      faq: "Parent FAQ",
      contact: "Contact",
      cta: "Get Started",
    },
    hero: {
      badge: "Digital Agency · Game Studio · Coding Academy — Morocco",
      headline1: "Engineering Interactive Digital Solutions,",
      headline2: "Games & Tech Education",
      subheadline:
        "360° B2B Growth Systems, Cross-Platform Game Development, and Next-Gen Coding Academies.",
      cta1: "Explore Services",
      cta2: "Book a Consultation",
      scroll: "Scroll",
    },
    home: {
      servicesBadge: "What We Do",
      servicesTitle: "Three Studios, One Engineering Team",
      servicesSubtitle:
        "Pick the track that fits your goal — each one is a dedicated practice with its own pricing and process.",
      cards: [
        {
          key: "agency",
          title: "B2B Agency Services",
          desc: "360° growth systems — content, paid ads, and AI-powered WhatsApp routing that turn attention into qualified leads.",
          points: ["Full-funnel marketing", "Video & content production", "AI WhatsApp agents"],
          cta: "View agency packages",
          href: "/agency",
        },
        {
          key: "games",
          title: "Game Dev & Custom Software",
          desc: "Cross-platform games, interactive AR/VR experiences, and bespoke software engineered to ship and scale.",
          points: ["Playable prototypes", "PC · Web · Mobile builds", "AR/VR & enterprise apps"],
          cta: "View game dev quotes",
          href: "/games",
        },
        {
          key: "academy",
          title: "Medinova Academy",
          desc: "A project-based coding academy for ages 7 to adults — from visual logic to professional full-stack and AI development.",
          points: ["Ages 7 to adults", "Real portfolio projects", "Taught in FR · EN · AR"],
          cta: "View academy tracks",
          href: "/academy",
        },
      ],
      credBadge: "Studio Credentials",
      credTitle: "Built by Engineers Who Ship",
      credSubtitle:
        "A multidisciplinary Moroccan studio blending marketing, game engineering, and education under one roof.",
      stats: [
        { value: "40+", label: "Projects delivered" },
        { value: "3", label: "Countries served" },
        { value: "3", label: "Languages supported" },
        { value: "48h", label: "Response time" },
      ],
      testimonials: [
        {
          quote:
            "Medinova rebuilt our funnel and the AI WhatsApp agent alone doubled our qualified leads within two months.",
          name: "Yassine B.",
          role: "Founder, Retail Brand — Casablanca",
        },
        {
          quote:
            "They took our game concept from a rough idea to a polished cross-platform build. Genuinely rare engineering quality.",
          name: "Sara M.",
          role: "Indie Studio Lead",
        },
        {
          quote:
            "My daughter went from zero to building her own game in Unity. The instructors are patient and truly skilled.",
          name: "Nadia R.",
          role: "Parent — Academy",
        },
      ],
      contactSummaryBadge: "Quick Contact",
      contactSummaryTitle: "Have a project in mind?",
      contactSummaryText:
        "Tell us what you're building — an agency package, a game, or an academy enrollment. We reply within 48 hours.",
      contactSummaryCta: "Start a conversation",
      responseTime: "Replies within 48 hours",
      explore: "Explore",
      backHome: "Back to home",
    },
    pillars: {
      agency: "B2B Digital Agency",
      agencyTitle: "Agency Growth Packages",
      agencySubtitle:
        "Full-funnel marketing, content production, paid ads, and AI WhatsApp routing — a 360° growth engine for your brand.",
      games: "Game Development",
      gamesTitle: "Game Dev & Custom Engineering",
      gamesSubtitle:
        "Cross-platform games, interactive AR/VR experiences, and custom software built for scale.",
      academy: "Medinova Academy",
      academyTitle: "Coding Academy — Ages 7 to Adults",
      academySubtitle:
        "From visual logic to professional development — structured tracks for every age and ambition.",
      notes: "General Notes",
      note1: "3-month minimum engagement for all agency packages.",
      note2: "Ad budgets and third-party API costs are paid directly to providers.",
      note3: "20% TVA (VAT) applied to all invoices.",
      from: "From",
      enterpriseQuote: "Enterprise Quote",
      setup: "Setup Fee",
      monthly: "Monthly Retainer",
      perMonth: "/ month",
      ht: "DHS HT",
      recommended: "Recommended · Scale & Conversion",
      includes: "Includes",
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
      title: "Let's Build Together",
      subtitle:
        "Whether it's an agency package, a game project, or an academy enrollment — tell us what you need and we'll respond within 48 hours.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@example.com",
      phone: "Phone",
      phonePh: "+212 ...",
      service: "Target Service",
      servicePh: "Select a service...",
      services: ["Agency Pack", "Game Dev", "Academy Track"],
      langPref: "Language Preference",
      langPrefPh: "Preferred language...",
      message: "Message",
      messagePh: "Tell us about your project or question...",
      send: "Send Message",
      sending: "Opening email...",
      sent: "Sent — check your mail",
      sentNote: "Your email client should now be open with your message pre-filled.",
      emailLabel: "Email Us",
      location: "Morocco, North Africa",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      offers: "Offres Agence",
      games: "Game Dev",
      academy: "Académie",
      faq: "FAQ Parents",
      contact: "Contact",
      cta: "Commencer",
    },
    hero: {
      badge: "Agence Digitale · Studio de Jeux · Académie de Code — Maroc",
      headline1: "Ingénierie de Solutions Numériques Interactives,",
      headline2: "Jeux & Éducation Tech",
      subheadline:
        "Systèmes de croissance B2B 360°, développement de jeux multi-plateformes, et académies de codage nouvelle génération.",
      cta1: "Explorer les Services",
      cta2: "Réserver une Consultation",
      scroll: "Défiler",
    },
    home: {
      servicesBadge: "Ce Que Nous Faisons",
      servicesTitle: "Trois Studios, Une Équipe d'Ingénierie",
      servicesSubtitle:
        "Choisissez le parcours adapté à votre objectif — chacun est une pratique dédiée avec ses propres tarifs et processus.",
      cards: [
        {
          key: "agency",
          title: "Services Agence B2B",
          desc: "Systèmes de croissance 360° — contenu, publicités payantes et routage WhatsApp par IA qui transforment l'attention en leads qualifiés.",
          points: ["Marketing plein entonnoir", "Production vidéo & contenu", "Agents IA WhatsApp"],
          cta: "Voir les packs agence",
          href: "/agency",
        },
        {
          key: "games",
          title: "Game Dev & Logiciels Sur-Mesure",
          desc: "Jeux multi-plateformes, expériences AR/VR interactives et logiciels sur-mesure conçus pour livrer et évoluer.",
          points: ["Prototypes jouables", "Builds PC · Web · Mobile", "Apps AR/VR & entreprise"],
          cta: "Voir les devis game dev",
          href: "/games",
        },
        {
          key: "academy",
          title: "Académie Medinova",
          desc: "Une académie de code basée sur projets, de 7 ans aux adultes — de la logique visuelle au développement full-stack et IA professionnel.",
          points: ["De 7 ans aux adultes", "Vrais projets portfolio", "Enseigné en FR · EN · AR"],
          cta: "Voir les parcours",
          href: "/academy",
        },
      ],
      credBadge: "Références du Studio",
      credTitle: "Conçu par des Ingénieurs Qui Livrent",
      credSubtitle:
        "Un studio marocain pluridisciplinaire alliant marketing, ingénierie de jeux et éducation sous un même toit.",
      stats: [
        { value: "40+", label: "Projets livrés" },
        { value: "3", label: "Pays servis" },
        { value: "3", label: "Langues supportées" },
        { value: "48h", label: "Temps de réponse" },
      ],
      testimonials: [
        {
          quote:
            "Medinova a reconstruit notre tunnel et l'agent IA WhatsApp a à lui seul doublé nos leads qualifiés en deux mois.",
          name: "Yassine B.",
          role: "Fondateur, Marque Retail — Casablanca",
        },
        {
          quote:
            "Ils ont transformé notre concept de jeu d'une idée brute à un build multi-plateformes soigné. Une qualité d'ingénierie vraiment rare.",
          name: "Sara M.",
          role: "Directrice de Studio Indé",
        },
        {
          quote:
            "Ma fille est passée de zéro à créer son propre jeu sur Unity. Les instructeurs sont patients et vraiment compétents.",
          name: "Nadia R.",
          role: "Parent — Académie",
        },
      ],
      contactSummaryBadge: "Contact Rapide",
      contactSummaryTitle: "Un projet en tête ?",
      contactSummaryText:
        "Dites-nous ce que vous construisez — un pack agence, un jeu ou une inscription à l'académie. Nous répondons sous 48 heures.",
      contactSummaryCta: "Démarrer une conversation",
      responseTime: "Réponse sous 48 heures",
      explore: "Explorer",
      backHome: "Retour à l'accueil",
    },
    pillars: {
      agency: "Agence Digitale B2B",
      agencyTitle: "Packs de Croissance Agence",
      agencySubtitle:
        "Marketing plein entonnoir, production de contenu, publicités payantes et routage IA WhatsApp — un moteur de croissance 360° pour votre marque.",
      games: "Développement de Jeux",
      gamesTitle: "Game Dev & Ingénierie Sur-Mesure",
      gamesSubtitle:
        "Jeux multi-plateformes, expériences AR/VR interactives et logiciels sur-mesure conçus pour l'échelle.",
      academy: "Académie Medinova",
      academyTitle: "Académie de Code — 7 ans à Adultes",
      academySubtitle:
        "De la logique visuelle au développement professionnel — des parcours structurés pour chaque âge et ambition.",
      notes: "Notes Générales",
      note1: "Engagement minimum de 3 mois pour tous les packs agence.",
      note2: "Les budgets publicitaires et coûts d'API tiers sont payés directement aux prestataires.",
      note3: "20% TVA appliquée sur toutes les factures.",
      from: "À partir de",
      enterpriseQuote: "Sur Devis",
      setup: "Frais d'Installation",
      monthly: "Abonnement Mensuel",
      perMonth: "/ mois",
      ht: "DHS HT",
      recommended: "Recommandé · Échelle & Conversion",
      includes: "Inclut",
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
      title: "Construisons Ensemble",
      subtitle:
        "Que ce soit un pack agence, un projet de jeu ou une inscription à l'académie — dites-nous ce dont vous avez besoin et nous répondrons sous 48 heures.",
      name: "Nom",
      namePh: "Votre nom",
      email: "Email",
      emailPh: "vous@exemple.com",
      phone: "Téléphone",
      phonePh: "+212 ...",
      service: "Service Souhaité",
      servicePh: "Choisissez un service...",
      services: ["Pack Agence", "Game Dev", "Parcours Académie"],
      langPref: "Langue Préférée",
      langPrefPh: "Langue préférée...",
      message: "Message",
      messagePh: "Parlez-nous de votre projet ou question...",
      send: "Envoyer le Message",
      sending: "Ouverture de l'email...",
      sent: "Envoyé — vérifiez votre messagerie",
      sentNote: "Votre client email devrait maintenant être ouvert avec votre message pré-rempli.",
      emailLabel: "Écrivez-nous",
      location: "Maroc, Afrique du Nord",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  ar: {
    nav: {
      offers: "عروض الوكالة",
      games: "تطوير الألعاب",
      academy: "الأكاديمية",
      faq: "أسئلة الآباء",
      contact: "تواصل",
      cta: "ابدأ الآن",
    },
    hero: {
      badge: "وكالة رقمية · استوديو ألعاب · أكاديمية برمجة — المغرب",
      headline1: "هندسة حلول رقمية تفاعلية،",
      headline2: "ألعاب وتعليم تقني",
      subheadline:
        "أنظمة نمو B2B شاملة 360°، تطوير ألعاب متعدد المنصات، وأكاديميات برمجة من الجيل القادم.",
      cta1: "استكشف الخدمات",
      cta2: "احجز استشارة",
      scroll: "تمرير",
    },
    home: {
      servicesBadge: "ماذا نقدم",
      servicesTitle: "ثلاثة استوديوهات، فريق هندسي واحد",
      servicesSubtitle:
        "اختر المسار المناسب لهدفك — كل مسار ممارسة مخصصة بتسعيرها وعمليتها الخاصة.",
      cards: [
        {
          key: "agency",
          title: "خدمات الوكالة B2B",
          desc: "أنظمة نمو 360° — محتوى، إعلانات مدفوعة، وتوجيه واتساب بالذكاء الاصطناعي يحوّل الاهتمام إلى عملاء مؤهلين.",
          points: ["تسويق شامل", "إنتاج فيديو ومحتوى", "وكلاء واتساب بالذكاء الاصطناعي"],
          cta: "عرض باقات الوكالة",
          href: "/agency",
        },
        {
          key: "games",
          title: "تطوير الألعاب والبرمجيات المخصصة",
          desc: "ألعاب متعددة المنصات، تجارب AR/VR تفاعلية، وبرمجيات مخصصة مصممة للإطلاق والتوسع.",
          points: ["نماذج أولية قابلة للعب", "منصات PC · ويب · موبايل", "تطبيقات AR/VR وللمؤسسات"],
          cta: "عرض أسعار تطوير الألعاب",
          href: "/games",
        },
        {
          key: "academy",
          title: "أكاديمية مدينوفا",
          desc: "أكاديمية برمجة قائمة على المشاريع من 7 سنوات إلى البالغين — من المنطق المرئي إلى التطوير الاحترافي والذكاء الاصطناعي.",
          points: ["من 7 سنوات إلى البالغين", "مشاريع معرض أعمال حقيقية", "تُدرّس بالـ FR · EN · AR"],
          cta: "عرض المسارات",
          href: "/academy",
        },
      ],
      credBadge: "اعتمادات الاستوديو",
      credTitle: "مبني على يد مهندسين ينجزون",
      credSubtitle:
        "استوديو مغربي متعدد التخصصات يجمع التسويق وهندسة الألعاب والتعليم تحت سقف واحد.",
      stats: [
        { value: "+40", label: "مشروع منجز" },
        { value: "3", label: "دول مخدومة" },
        { value: "3", label: "لغات مدعومة" },
        { value: "48h", label: "وقت الاستجابة" },
      ],
      testimonials: [
        {
          quote:
            "أعادت مدينوفا بناء قمع المبيعات لدينا، ووكيل واتساب بالذكاء الاصطناعي وحده ضاعف عملاءنا المؤهلين خلال شهرين.",
          name: "ياسين ب.",
          role: "مؤسس، علامة تجارية للتجزئة — الدار البيضاء",
        },
        {
          quote:
            "حوّلوا فكرة لعبتنا من مجرد فكرة أولية إلى إصدار متعدد المنصات متقن. جودة هندسية نادرة حقاً.",
          name: "سارة م.",
          role: "قائدة استوديو مستقل",
        },
        {
          quote:
            "انتقلت ابنتي من الصفر إلى بناء لعبتها الخاصة على Unity. المدرّبون صبورون ومهرة حقاً.",
          name: "نادية ر.",
          role: "ولي أمر — الأكاديمية",
        },
      ],
      contactSummaryBadge: "تواصل سريع",
      contactSummaryTitle: "لديك مشروع في ذهنك؟",
      contactSummaryText:
        "أخبرنا بما تبنيه — باقة وكالة، لعبة، أو تسجيل في الأكاديمية. نرد خلال 48 ساعة.",
      contactSummaryCta: "ابدأ محادثة",
      responseTime: "الرد خلال 48 ساعة",
      explore: "استكشف",
      backHome: "العودة للرئيسية",
    },
    pillars: {
      agency: "الوكالة الرقمية B2B",
      agencyTitle: "باقات نمو الوكالة",
      agencySubtitle:
        "تسويق شامل، إنتاج محتوى، إعلانات مدفوعة، وتوجيه الذكاء الاصطناعي عبر واتساب — محرك نمو 360° لعلامتك التجارية.",
      games: "تطوير الألعاب",
      gamesTitle: "تطوير الألعاب والهندسة المخصصة",
      gamesSubtitle:
        "ألعاب متعددة المنصات، تجارب AR/VR تفاعلية، وبرمجيات مخصصة مبنية للتوسع.",
      academy: "أكاديمية مدينوفا",
      academyTitle: "أكاديمية البرمجة — من 7 سنوات إلى البالغين",
      academySubtitle:
        "من المنطق المرئي إلى التطوير الاحترافي — مسارات منظمة لكل عمر وطموح.",
      notes: "ملاحظات عامة",
      note1: "التزام أدنى 3 أشهر لجميع باقات الوكالة.",
      note2: "ميزانيات الإعلانات وتكاليف واجهات الطرف الثالث تُدفع مباشرة للمزودين.",
      note3: "تُطبق ضريبة القيمة المضافة 20% على جميع الفواتير.",
      from: "ابتداءً من",
      enterpriseQuote: "عرض سعر",
      setup: "رسوم الإعداد",
      monthly: "اشتراك شهري",
      perMonth: "/ شهر",
      ht: "درهم (HT)",
      recommended: "موصى به · نمو وتحويل",
      includes: "يشمل",
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
      title: "لنبنِ معاً",
      subtitle:
        "سواء كان باقة وكالة، مشروع لعبة، أو تسجيل في الأكاديمية — أخبرنا بما تحتاجه وسنرد خلال 48 ساعة.",
      name: "الاسم",
      namePh: "اسمك",
      email: "البريد الإلكتروني",
      emailPh: "you@example.com",
      phone: "الهاتف",
      phonePh: "+212 ...",
      service: "الخدمة المطلوبة",
      servicePh: "اختر خدمة...",
      services: ["باقة وكالة", "تطوير ألعاب", "مسار أكاديمي"],
      langPref: "اللغة المفضلة",
      langPrefPh: "اللغة المفضلة...",
      message: "الرسالة",
      messagePh: "أخبرنا عن مشروعك أو سؤالك...",
      send: "إرسال الرسالة",
      sending: "جاري فتح البريد...",
      sent: "تم الإرسال — تحقق من بريدك",
      sentNote: "يجب أن يكون برنامج البريد مفتوحاً الآن برسالتك الجاهزة.",
      emailLabel: "راسلنا",
      location: "المغرب، شمال أفريقيا",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
