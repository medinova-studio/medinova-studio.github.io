import type { Lang } from "@/lib/i18n";

export const COURSE_SLUGS = [
  "digital-essentials",
  "scratch",
  "python",
  "roblox",
  "unity-csharp",
  "web-development",
  "creative-design",
] as const;

export type CourseSlug = (typeof COURSE_SLUGS)[number];

export type CourseDetail = {
  meta: { title: string; description: string };
  hero: { sub: string };
  outcomes: string[];
  details: { label: string; value: string }[];
};

type CourseMap = Record<CourseSlug, CourseDetail>;

const EN: CourseMap = {
  "digital-essentials": {
    meta: {
      title: "Digital Essentials Course for Kids (7+) | Medinova Academy",
      description:
        "A live online digital skills course for kids aged 7+ from Rabat, Casablanca and all of Morocco. Computer basics, Word, Excel, PowerPoint, safe internet use and more.",
    },
    hero: {
      sub: "Build the essential digital skills every child needs for school, safety and confidence online.",
    },
    outcomes: [
      "Use a computer confidently: files, folders, keyboard and touch typing basics",
      "Create and format documents, spreadsheets and presentations",
      "Navigate the internet safely and search for information effectively",
      "Complete real school-ready projects with Word, Excel and PowerPoint",
    ],
    details: [
      { label: "Format", value: "Live online classes" },
      { label: "Recommended age", value: "7+" },
      { label: "Level", value: "Beginner" },
      { label: "Certificate", value: "Certificate of completion" },
    ],
  },
  scratch: {
    meta: {
      title: "Scratch Coding for Kids (7+) | Medinova Academy Morocco",
      description:
        "Learn Scratch programming for kids aged 7+ with live online classes from Medinova Academy in Rabat, Morocco. Build games, stories and animations while learning real coding logic.",
    },
    hero: {
      sub: "Visual programming that turns curious kids into creators — building logic, sequencing and problem-solving skills through games and stories.",
    },
    outcomes: [
      "Understand core programming concepts: sequencing, loops, conditions and variables",
      "Build interactive stories, animations and games from scratch",
      "Develop computational thinking and structured problem-solving",
      "Share and remix projects in a global Scratch community",
    ],
    details: [
      { label: "Format", value: "Live online classes" },
      { label: "Recommended age", value: "7+" },
      { label: "Level", value: "Beginner" },
      { label: "Certificate", value: "Certificate of completion" },
    ],
  },
  python: {
    meta: {
      title: "Python Programming for Kids & Teens (11+) | Medinova Academy",
      description:
        "Live online Python courses for kids and teens aged 11+ in Morocco. Learn real text-based programming, build games and applications, and prepare for advanced tech.",
    },
    hero: {
      sub: "From visual blocks to real text code — Python builds structured thinking and gives learners a powerful tool to turn ideas into working programs.",
    },
    outcomes: [
      "Write clean Python code: variables, data types, functions and loops",
      "Solve problems with algorithms and debug programs with confidence",
      "Build console games, quizzes and practical mini-applications",
      "Gain a strong foundation for web development, AI and advanced coding",
    ],
    details: [
      { label: "Format", value: "Live online classes" },
      { label: "Recommended age", value: "11+" },
      { label: "Level", value: "Beginner to intermediate" },
      { label: "Certificate", value: "Certificate of completion" },
    ],
  },
  roblox: {
    meta: {
      title: "Roblox Game Development for Kids (9+) | Medinova Academy",
      description:
        "Live online Roblox game development courses for kids aged 9+ from Morocco. Design 3D worlds, learn Lua scripting and publish real Roblox experiences.",
    },
    hero: {
      sub: "Turn imagination into interactive 3D worlds. Learners design, build and script their own Roblox experiences — creativity, spatial thinking and real coding combined.",
    },
    outcomes: [
      "Design and build 3D worlds in Roblox Studio",
      "Script gameplay with Lua: movement, physics, objects and events",
      "Create playable games with rules, goals and fun mechanics",
      "Publish and share experiences with the Roblox community",
    ],
    details: [
      { label: "Format", value: "Live online classes" },
      { label: "Recommended age", value: "9+" },
      { label: "Level", value: "Beginner to intermediate" },
      { label: "Certificate", value: "Certificate of completion" },
    ],
  },
  "unity-csharp": {
    meta: {
      title: "Unity & C# Game Development for Teens (12+) | Medinova Academy",
      description:
        "Live online Unity C# courses for teens aged 12+ in Morocco. Learn professional game development: mechanics, 2D and 3D games, and playable portfolios.",
    },
    hero: {
      sub: "Professional game development with Unity and C# — the same tools used by real studios. Learners design mechanics, code gameplay and ship playable projects.",
    },
    outcomes: [
      "Build 2D and 3D games in Unity with C# scripting",
      "Design game mechanics: player control, physics, UI and levels",
      "Apply OOP thinking: classes, objects, methods and events",
      "Finish a playable portfolio project they can share with the world",
    ],
    details: [
      { label: "Format", value: "Live online classes" },
      { label: "Recommended age", value: "12+" },
      { label: "Level", value: "Intermediate" },
      { label: "Certificate", value: "Certificate of completion" },
    ],
  },
  "web-development": {
    meta: {
      title: "Web Development Course for Kids & Teens (11+) | Medinova Academy",
      description:
        "Learn web development online in Morocco: HTML, CSS, JavaScript, PHP and MySQL. Live classes for ages 11+ that build real websites connected to databases.",
    },
    hero: {
      sub: "From first HTML tag to full websites with real databases. Learners master the full stack of the web, step by step.",
    },
    outcomes: [
      "Build responsive pages with HTML and CSS",
      "Make websites interactive with JavaScript",
      "Power real websites with PHP and MySQL backends",
      "Launch a complete multi-page project connected to a database",
    ],
    details: [
      { label: "Format", value: "Live online classes" },
      { label: "Recommended age", value: "11+" },
      { label: "Level", value: "Beginner to advanced" },
      { label: "Certificate", value: "Certificate of completion" },
    ],
  },
  "creative-design": {
    meta: {
      title: "Creative Design Course for Kids (10+) | Medinova Academy",
      description:
        "Live online creative design courses for kids aged 10+ in Morocco. 3D creation, photo editing and video editing — turning ideas into original digital projects.",
    },
    hero: {
      sub: "Where technology meets imagination. Learners explore 3D creation, photo editing and video production to bring original ideas to life.",
    },
    outcomes: [
      "Create 3D models and scenes with beginner-friendly tools",
      "Edit and retouch photos like a designer",
      "Edit videos with cuts, effects, titles and sound",
      "Produce an original digital portfolio project",
    ],
    details: [
      { label: "Format", value: "Live online classes" },
      { label: "Recommended age", value: "10+" },
      { label: "Level", value: "Beginner to intermediate" },
      { label: "Certificate", value: "Certificate of completion" },
    ],
  },
};

const FR: CourseMap = {
  "digital-essentials": {
    meta: {
      title: "Cours d'Initiation au Numérique pour Enfants (7+) | Medinova Academy",
      description:
        "Un cours de compétences numériques en ligne pour enfants dès 7 ans à Rabat, Casablanca et partout au Maroc. Informatique de base, Word, Excel, PowerPoint et usage sûr d'Internet.",
    },
    hero: {
      sub: "Les compétences numériques essentielles dont chaque enfant a besoin pour l'école, la sécurité et la confiance en ligne.",
    },
    outcomes: [
      "Utiliser un ordinateur avec assurance : fichiers, dossiers, clavier et frappe",
      "Créer et mettre en forme documents, tableurs et présentations",
      "Naviguer sur Internet en toute sécurité et rechercher efficacement",
      "Réaliser de vrais projets scolaires avec Word, Excel et PowerPoint",
    ],
    details: [
      { label: "Format", value: "Cours en ligne en direct" },
      { label: "Âge recommandé", value: "7+" },
      { label: "Niveau", value: "Débutant" },
      { label: "Certificat", value: "Certificat de fin de cours" },
    ],
  },
  scratch: {
    meta: {
      title: "Programmation Scratch pour Enfants (7+) | Medinova Academy Maroc",
      description:
        "Apprendre la programmation Scratch pour enfants dès 7 ans en cours en ligne avec Medinova Academy à Rabat, Maroc. Créer des jeux, des histoires et des animations en apprenant la vraie logique de programmation.",
    },
    hero: {
      sub: "La programmation visuelle qui transforme les enfants curieux en créateurs — logique, séquencement et résolution de problèmes à travers jeux et histoires.",
    },
    outcomes: [
      "Comprendre les concepts clés : séquences, boucles, conditions et variables",
      "Créer des histoires, animations et jeux interactifs de A à Z",
      "Développer une pensée informatique et une résolution de problèmes structurée",
      "Partager et remixer des projets dans une communauté Scratch mondiale",
    ],
    details: [
      { label: "Format", value: "Cours en ligne en direct" },
      { label: "Âge recommandé", value: "7+" },
      { label: "Niveau", value: "Débutant" },
      { label: "Certificat", value: "Certificat de fin de cours" },
    ],
  },
  python: {
    meta: {
      title: "Programmation Python pour Enfants & Ados (11+) | Medinova Academy",
      description:
        "Cours de Python en ligne pour enfants et adolescents dès 11 ans au Maroc. Programmation réelle en texte, création de jeux et d'applications, préparation aux technologies avancées.",
    },
    hero: {
      sub: "Des blocs visuels au vrai code texte — Python développe la pensée structurée et donne un outil puissant pour transformer les idées en programmes fonctionnels.",
    },
    outcomes: [
      "Écrire du code Python propre : variables, types, fonctions et boucles",
      "Résoudre des problèmes avec des algorithmes et déboguer avec confiance",
      "Créer des jeux console, des quiz et des mini-applications pratiques",
      "Bâtir une base solide pour le web, l'IA et le codage avancé",
    ],
    details: [
      { label: "Format", value: "Cours en ligne en direct" },
      { label: "Âge recommandé", value: "11+" },
      { label: "Niveau", value: "Débutant à intermédiaire" },
      { label: "Certificat", value: "Certificat de fin de cours" },
    ],
  },
  roblox: {
    meta: {
      title: "Développement de Jeux Roblox pour Enfants (9+) | Medinova Academy",
      description:
        "Cours en ligne de développement de jeux Roblox pour enfants dès 9 ans au Maroc. Conception de mondes 3D, script Lua et publication de vraies expériences Roblox.",
    },
    hero: {
      sub: "L'imagination devient des mondes 3D interactifs. Les apprenants conçoivent, construisent et programment leurs propres expériences Roblox — créativité, pensée spatiale et codage réels.",
    },
    outcomes: [
      "Concevoir et construire des mondes 3D dans Roblox Studio",
      "Programmer le gameplay en Lua : mouvement, physique, objets et événements",
      "Créer des jeux jouables avec règles, objectifs et mécaniques fun",
      "Publier et partager des expériences avec la communauté Roblox",
    ],
    details: [
      { label: "Format", value: "Cours en ligne en direct" },
      { label: "Âge recommandé", value: "9+" },
      { label: "Niveau", value: "Débutant à intermédiaire" },
      { label: "Certificat", value: "Certificat de fin de cours" },
    ],
  },
  "unity-csharp": {
    meta: {
      title: "Développement de Jeux Unity & C# pour Ados (12+) | Medinova Academy",
      description:
        "Cours en ligne Unity C# pour adolescents dès 12 ans au Maroc. Développement de jeux professionnel : mécaniques, jeux 2D et 3D, et portfolios jouables.",
    },
    hero: {
      sub: "Le développement de jeux professionnel avec Unity et C# — les mêmes outils que les vrais studios. Les apprenants conçoivent des mécaniques, codent le gameplay et livrent des projets jouables.",
    },
    outcomes: [
      "Créer des jeux 2D et 3D dans Unity avec scripting C#",
      "Concevoir des mécaniques de jeu : contrôle du joueur, physique, UI et niveaux",
      "Appliquer la programmation orientée objet : classes, objets, méthodes et événements",
      "Terminer un projet portfolio jouable partageable dans le monde entier",
    ],
    details: [
      { label: "Format", value: "Cours en ligne en direct" },
      { label: "Âge recommandé", value: "12+" },
      { label: "Niveau", value: "Intermédiaire" },
      { label: "Certificat", value: "Certificat de fin de cours" },
    ],
  },
  "web-development": {
    meta: {
      title: "Cours de Développement Web pour Enfants & Ados (11+) | Medinova Academy",
      description:
        "Apprendre le développement web en ligne au Maroc : HTML, CSS, JavaScript, PHP et MySQL. Cours en direct dès 11 ans pour créer de vrais sites connectés à des bases de données.",
    },
    hero: {
      sub: "De la première balise HTML à des sites complets avec bases de données. Les apprenants maîtrisent toute la stack du web, étape par étape.",
    },
    outcomes: [
      "Construire des pages responsives avec HTML et CSS",
      "Rendre les sites interactifs avec JavaScript",
      "Alimenter de vrais sites avec des backends PHP et MySQL",
      "Lancer un projet multi-pages complet connecté à une base de données",
    ],
    details: [
      { label: "Format", value: "Cours en ligne en direct" },
      { label: "Âge recommandé", value: "11+" },
      { label: "Niveau", value: "Débutant à avancé" },
      { label: "Certificat", value: "Certificat de fin de cours" },
    ],
  },
  "creative-design": {
    meta: {
      title: "Cours de Design Créatif pour Enfants (10+) | Medinova Academy",
      description:
        "Cours de design créatif en ligne pour enfants dès 10 ans au Maroc. Création 3D, retouche photo et montage vidéo — transformer les idées en projets numériques originaux.",
    },
    hero: {
      sub: "Là où la technologie rencontre l'imagination. Les apprenants explorent la création 3D, la retouche photo et la production vidéo pour donner vie à des idées originales.",
    },
    outcomes: [
      "Créer des modèles et des scènes 3D avec des outils adaptés aux débutants",
      "Retoucher des photos comme un designer",
      "Monter des vidéos avec coupes, effets, titres et son",
      "Produire un projet portfolio numérique original",
    ],
    details: [
      { label: "Format", value: "Cours en ligne en direct" },
      { label: "Âge recommandé", value: "10+" },
      { label: "Niveau", value: "Débutant à intermédiaire" },
      { label: "Certificat", value: "Certificat de fin de cours" },
    ],
  },
};

const AR: CourseMap = {
  "digital-essentials": {
    meta: {
      title: "دورة أساسيات الحاسوب للأطفال (7+) | أكاديمية Medinova",
      description:
        "دورة مهارات رقمية عبر الإنترنت للأطفال من سن 7 سنوات في الرباط والدار البيضاء وكل المغرب. أساسيات الحاسوب وWord وExcel وPowerPoint والاستخدام الآمن للإنترنت.",
    },
    hero: {
      sub: "المهارات الرقمية الأساسية التي يحتاجها كل طفل للمدرسة والأمان والثقة على الإنترنت.",
    },
    outcomes: [
      "استخدام الحاسوب بثقة: الملفات والمجلدات ولوحة المفاتيح والطباعة",
      "إنشاء وتنسيق المستندات والجداول والعروض التقديمية",
      "التصفح الآمن للإنترنت والبحث الفعّال عن المعلومات",
      "إنجاز مشاريع مدرسية حقيقية باستخدام Word وExcel وPowerPoint",
    ],
    details: [
      { label: "الشكل", value: "فصول مباشرة عبر الإنترنت" },
      { label: "الفئة العمرية", value: "7+" },
      { label: "المستوى", value: "مبتدئ" },
      { label: "الشهادة", value: "شهادة إتمام الدورة" },
    ],
  },
  scratch: {
    meta: {
      title: "تعليم البرمجة بسكراتش للأطفال (7+) | أكاديمية Medinova المغرب",
      description:
        "تعلم البرمجة بسكراتش للأطفال من سن 7 سنوات في فصول مباشرة عبر الإنترنت مع أكاديمية Medinova في الرباط، المغرب. صنع الألعاب والقصص والرسوم المتحركة مع تعلم منطق البرمجة الحقيقي.",
    },
    hero: {
      sub: "برمجة مرئية تحوّل الأطفال الفضوليين إلى مبدعين — بناء مهارات التسلسل والمنطق وحل المشكلات عبر الألعاب والقصص.",
    },
    outcomes: [
      "فهم مفاهيم البرمجة الأساسية: التسلسل والحلقات والشروط والمتغيرات",
      "بناء قصص ورسوم متحركة وألعاب تفاعلية من الصفر",
      "تطوير التفكير الحاسوبي وحل المشكلات بطريقة منظمة",
      "مشاركة وإعادة مزج مشاريع في مجتمع سكراتش العالمي",
    ],
    details: [
      { label: "الشكل", value: "فصول مباشرة عبر الإنترنت" },
      { label: "الفئة العمرية", value: "7+" },
      { label: "المستوى", value: "مبتدئ" },
      { label: "الشهادة", value: "شهادة إتمام الدورة" },
    ],
  },
  python: {
    meta: {
      title: "تعليم بايثون للأطفال والمراهقين (11+) | أكاديمية Medinova",
      description:
        "دورات بايثون عبر الإنترنت للأطفال والمراهقين من سن 11 سنة في المغرب. برمجة نصية حقيقية، صنع ألعاب وتطبيقات، والتحضير للتقنيات المتقدمة.",
    },
    hero: {
      sub: "من الكتل المرئية إلى الكود النصي الحقيقي — بايثون يبني التفكير المنظم ويمنح أداة قوية لتحويل الأفكار إلى برامج تعمل.",
    },
    outcomes: [
      "كتابة كود بايثون نظيف: المتغيرات وأنواع البيانات والدوال والحلقات",
      "حل المشكلات بالخوارزميات وتصحيح الأخطاء بثقة",
      "بناء ألعاب واختبارات وتطبيقات عملية صغيرة",
      "بناء أساس قوي لتطوير الويب والذكاء الاصطناعي والبرمجة المتقدمة",
    ],
    details: [
      { label: "الشكل", value: "فصول مباشرة عبر الإنترنت" },
      { label: "الفئة العمرية", value: "11+" },
      { label: "المستوى", value: "مبتدئ إلى متوسط" },
      { label: "الشهادة", value: "شهادة إتمام الدورة" },
    ],
  },
  roblox: {
    meta: {
      title: "تطوير ألعاب Roblox للأطفال (9+) | أكاديمية Medinova",
      description:
        "دورات عبر الإنترنت لتطوير ألعاب Roblox للأطفال من سن 9 سنوات في المغرب. تصميم عوالم ثلاثية الأبعاد وبرمجة Lua ونشر تجارب Roblox حقيقية.",
    },
    hero: {
      sub: "تتحول الخيال إلى عوالم ثلاثية الأبعاد تفاعلية. يصمم المتعلمون عوالم Roblox ويبنونها ويبرمجونها — إبداع وتفكير مكاني وبرمجة حقيقية.",
    },
    outcomes: [
      "تصميم وبناء عوالم ثلاثية الأبعاد في Roblox Studio",
      "برمجة أسلوب اللعب بلغة Lua: الحركة والفيزياء والعناصر والأحداث",
      "إنشاء ألعاب قابلة للعب بقواعد وأهداف وآليات ممتعة",
      "نشر ومشاركة التجارب مع مجتمع Roblox",
    ],
    details: [
      { label: "الشكل", value: "فصول مباشرة عبر الإنترنت" },
      { label: "الفئة العمرية", value: "9+" },
      { label: "المستوى", value: "مبتدئ إلى متوسط" },
      { label: "الشهادة", value: "شهادة إتمام الدورة" },
    ],
  },
  "unity-csharp": {
    meta: {
      title: "تطوير الألعاب Unity وC# للمراهقين (12+) | أكاديمية Medinova",
      description:
        "دورات Unity وC# عبر الإنترنت للمراهقين من سن 12 سنة في المغرب. تطوير ألعاب احترافي: آليات اللعب وألعاب ثنائية وثلاثية الأبعاد ومشاريع قابلة للعب.",
    },
    hero: {
      sub: "تطوير ألعاب احترافي باستخدام Unity وC# — الأدوات نفسها التي تستخدمها الاستوديوهات الحقيقية. يصمم المتعلمون الآليات ويبرمجون أسلوب اللعب وينجزون مشاريع قابلة للعب.",
    },
    outcomes: [
      "بناء ألعاب ثنائية وثلاثية الأبعاد في Unity مع برمجة C#",
      "تصميم آليات اللعب: تحكم اللاعب والفيزياء والواجهة والمستويات",
      "تطبيق البرمجة الكائنية: الفئات والكائنات والدوال والأحداث",
      "إنجاز مشروع قابل للعب يمكن مشاركته مع العالم",
    ],
    details: [
      { label: "الشكل", value: "فصول مباشرة عبر الإنترنت" },
      { label: "الفئة العمرية", value: "12+" },
      { label: "المستوى", value: "متوسط" },
      { label: "الشهادة", value: "شهادة إتمام الدورة" },
    ],
  },
  "web-development": {
    meta: {
      title: "دورة تطوير الويب للأطفال والمراهقين (11+) | أكاديمية Medinova",
      description:
        "تعلم تطوير الويب عبر الإنترنت في المغرب: HTML وCSS وJavaScript وPHP وMySQL. فصول مباشرة من سن 11 سنة لبناء مواقع حقيقية متصلة بقواعد البيانات.",
    },
    hero: {
      sub: "من أول وسم HTML إلى مواقع كاملة بقواعد بيانات. يتقن المتعلمون الويب بالكامل خطوة بخطوة.",
    },
    outcomes: [
      "بناء صفحات متجاوبة باستخدام HTML وCSS",
      "جعل المواقع تفاعلية باستخدام JavaScript",
      "تشغيل مواقع حقيقية ببنية خلفية PHP وMySQL",
      "إطلاق مشروع كامل متعدد الصفحات متصل بقاعدة بيانات",
    ],
    details: [
      { label: "الشكل", value: "فصول مباشرة عبر الإنترنت" },
      { label: "الفئة العمرية", value: "11+" },
      { label: "المستوى", value: "مبتدئ إلى متقدم" },
      { label: "الشهادة", value: "شهادة إتمام الدورة" },
    ],
  },
  "creative-design": {
    meta: {
      title: "دورة التصميم الإبداعي للأطفال (10+) | أكاديمية Medinova",
      description:
        "دورات تصميم إبداعي عبر الإنترنت للأطفال من سن 10 سنوات في المغرب. إنشاء ثلاثي الأبعاد وتحرير الصور والفيديو — تحويل الأفكار إلى مشاريع رقمية أصلية.",
    },
    hero: {
      sub: "حيث تلتقي التكنولوجيا بالخيال. يستكشف المتعلمون الإبداع ثلاثي الأبعاد وتحرير الصور وإنتاج الفيديو لإحياء الأفكار الأصلية.",
    },
    outcomes: [
      "إنشاء نماذج ومشاهد ثلاثية الأبعاد بأدوات سهلة للمبتدئين",
      "تحرير وتحسين الصور كمصمم",
      "مونتاج فيديوهات مع القص والمؤثرات والعناوين والصوت",
      "إنتاج مشروع رقمي أصلي كجزء من المحفظة",
    ],
    details: [
      { label: "الشكل", value: "فصول مباشرة عبر الإنترنت" },
      { label: "الفئة العمرية", value: "10+" },
      { label: "المستوى", value: "مبتدئ إلى متوسط" },
      { label: "الشهادة", value: "شهادة إتمام الدورة" },
    ],
  },
};

export const COURSE_CATALOG: Record<Lang, CourseMap> = {
  en: EN,
  fr: FR,
  ar: AR,
};

export function isCourseSlug(slug: string): slug is CourseSlug {
  return (COURSE_SLUGS as readonly string[]).includes(slug);
}