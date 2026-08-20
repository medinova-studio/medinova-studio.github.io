import type { Lang } from "@/lib/i18n";

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  hero: string;
  intro: string;
  sections: BlogSection[];
};

const HERO = {
  "what-age-should-kids-start-coding": "/images/academy/scratch.webp",
  "scratch-vs-python-where-should-beginners-start": "/images/academy/scratch.webp",
  "unity-vs-roblox-which-should-kids-learn": "/images/academy/roblox.webp",
  "coding-courses-for-kids-in-morocco-online-and-live":
    "/images/academy/mge-booth.webp",
  "how-we-published-4-games-on-the-app-store":
    "/images/games/zombies-warzone/screenshot1.webp",
} as const;

const EN: BlogPost[] = [
  {
    slug: "what-age-should-kids-start-coding",
    title: "What Age Should Kids Start Coding?",
    description:
      "There is no single 'right' age to start coding — but there is a smart way to start. Here's how children develop coding skills from age 7, and what to expect at every stage.",
    date: "2026-03-10",
    category: "Kids & Coding",
    readingTime: "5 min read",
    hero: HERO["what-age-should-kids-start-coding"],
    intro:
      "Parents often ask us: 'How old does my child need to be to learn coding?' The honest answer is that there is no magic age — but there is a smarter way to start. The best age depends less on the calendar and more on how the child learns. Here is how we think about it at Medinova Academy.",
    sections: [
      {
        heading: "Age 7–9: Play first, logic second",
        body: "At this stage, children are not ready to type lines of code — and they don't need to be. Visual block programming like Scratch lets them snap together logic like digital Lego. They learn sequencing, loops and cause-and-effect while building games and animated stories. The goal is to fall in love with creating, not to memorise syntax.",
      },
      {
        heading: "Age 10–12: From blocks to text",
        body: "Around age 10–12, many learners are ready to move from visual blocks to real text languages. Python is an ideal bridge: it reads almost like English, so children can focus on problem-solving instead of syntax errors. This is also the sweet spot for Roblox and web development, where kids build things they genuinely care about.",
      },
      {
        heading: "Age 13+: Professional tools",
        body: "Teenagers can handle professional-grade tools. Unity and C# are the same stack used by commercial game studios, and learning them at 13 gives a huge head start — not just in coding, but in game design, physics and project management.",
      },
      {
        heading: "The real rule: follow the interest",
        body: "The most important factor is motivation. A 7-year-old who loves games will learn more than a 12-year-old who is forced into a class. Start early if the child is curious, start later if not — but make the start project-based, not lecture-based.",
      },
    ],
  },
  {
    slug: "scratch-vs-python-where-should-beginners-start",
    title: "Scratch vs Python: Where Should Beginners Start?",
    description:
      "Scratch or Python? Both are great first languages — for different reasons. A practical comparison to help parents choose the right starting point.",
    date: "2026-04-02",
    category: "Beginner Guides",
    readingTime: "6 min read",
    hero: HERO["scratch-vs-python-where-should-beginners-start"],
    intro:
      "It is the first question most parents ask when choosing a coding course: should my child start with Scratch or Python? The short answer is: it depends on their age and confidence. Here is how we break it down.",
    sections: [
      {
        heading: "Scratch: the language of younger beginners",
        body: "Scratch is visual. Instead of typing, children drag coloured blocks that represent commands. There are no syntax errors — a block simply snaps into place. This removes frustration and lets young learners (roughly 7–10) focus on logic: sequencing, loops, conditions and variables. In a few sessions, a child can create an animated story or a simple game they can share with friends.",
      },
      {
        heading: "Python: the language of real software",
        body: "Python is a real, text-based programming language used by companies like Google and Netflix. It reads almost like English ('print', 'if', 'for'), which makes it beginner-friendly for older kids and teens (roughly 11+). Python teaches typing discipline and prepares learners for advanced fields — web development, AI and data science.",
      },
      {
        heading: "A common path: start with Scratch, graduate to Python",
        body: "Many of our learners do exactly this. Scratch builds the logic; Python builds the craft. A child who already understands loops and conditions in Scratch picks up Python much faster, because they already know the concepts — they only need to learn the new spelling.",
      },
      {
        heading: "Which one for your child?",
        body: "Age 7–10 with no experience? Start with Scratch. Age 11+ or already comfortable with logic? Go straight to Python. Not sure? Try both in a free trial — the right fit usually becomes obvious in a single session.",
      },
    ],
  },
  {
    slug: "unity-vs-roblox-which-should-kids-learn",
    title: "Unity vs Roblox: Which Should Kids Learn?",
    description:
      "Roblox and Unity both teach real game development — but they take very different paths. A guide for parents choosing between Roblox Studio and Unity C#.",
    date: "2026-05-15",
    category: "Game Development",
    readingTime: "6 min read",
    hero: HERO["unity-vs-roblox-which-should-kids-learn"],
    intro:
      "Roblox or Unity? Both platforms let children create and publish real games, and both are fantastic for learning. But they serve different ages and different goals. Here is an honest comparison.",
    sections: [
      {
        heading: "Roblox: instant publishing, huge audience",
        body: "Roblox Studio is free, beginner-friendly and gives young creators (roughly 9+) an instant audience of millions. Kids use Lua, a scripting language, to build 3D worlds. The magic of Roblox is motivation: a child can publish a game and see real players interact with it — that feedback loop is incredibly powerful.",
      },
      {
        heading: "Unity: professional-grade, career-ready",
        body: "Unity and C# are used by commercial game studios around the world — from indie hits to mobile giants. The learning curve is steeper, which makes it ideal for teens (roughly 12+). Learners work with physics, UI systems, 2D/3D rendering and C# scripting — skills that map directly to the professional industry.",
      },
      {
        heading: "What about the math and logic?",
        body: "Both teach real logic and problem-solving. Roblox's Lua is forgiving and visual; Unity's C# is stricter and closer to professional software engineering. In Roblox, kids learn by tinkering; in Unity, they learn by engineering.",
      },
      {
        heading: "How to choose",
        body: "If your child is 9–12 and loves Roblox, start with Roblox development — it turns screen time into creation time. If your child is 12+ and serious about becoming a game developer, Unity C# is the professional path. Many teens do both: Roblox first for confidence, Unity for a real portfolio.",
      },
    ],
  },
  {
    slug: "coding-courses-for-kids-in-morocco-online-and-live",
    title: "Coding Courses for Kids in Morocco — Online & Live",
    description:
      "Looking for coding classes for kids in Morocco? Live online courses from Rabat, Casablanca and across the country — what to look for and how to start.",
    date: "2026-06-08",
    category: "Medinova Academy",
    readingTime: "5 min read",
    hero: HERO["coding-courses-for-kids-in-morocco-online-and-live"],
    intro:
      "Coding education is growing quickly in Morocco, and parents now have more choices than ever. From Rabat and Casablanca to cities across the country, live online classes have become the most flexible way for kids to learn — here is what to look for.",
    sections: [
      {
        heading: "Why live online classes work so well",
        body: "Live classes combine the energy of a real teacher with the freedom of learning from home. There is no commute, no missed sessions due to traffic, and learners can join from anywhere in Morocco. Studies and our own experience agree: guided, live instruction beats watching video tutorials, because a teacher can see exactly where a learner is stuck.",
      },
      {
        heading: "What a quality course should include",
        body: "Look for four things: a structured curriculum that builds real projects, a small group so each learner gets attention, progress feedback for parents, and a certificate at the end. Beware of courses that promise 'apps in a week' — real skills take time and practice.",
      },
      {
        heading: "From Rabat, Casablanca and all of Morocco",
        body: "Medinova Academy teaches live online from Morocco, serving learners across Rabat, Casablanca, Kenitra and the whole country. Our founder teaches the advanced tracks directly, and every course is project-based: kids build games, websites and animations they can actually show off.",
      },
      {
        heading: "How to get started",
        body: "Start with a free trial class. Watch how your child engages: are they curious? Do they want to keep going? That enthusiasm is the best predictor of success. Then choose a path that matches their age — Scratch at 7+, Python at 11+, Roblox at 9+, and Unity C# at 12+.",
      },
    ],
  },
  {
    slug: "how-we-published-4-games-on-the-app-store",
    title: "How We Published 4 Games on the App Store",
    description:
      "The behind-the-scenes story of shipping four games to the App Store — the tools, the process, and the lessons we teach every student.",
    date: "2026-07-20",
    category: "Studio Stories",
    readingTime: "7 min read",
    hero: HERO["how-we-published-4-games-on-the-app-store"],
    intro:
      "There is a big difference between a game you can play and a game you can ship. Over the past months, Medinova Studio published four games to the App Store — and the process taught us lessons that now shape everything we teach.",
    sections: [
      {
        heading: "The four games",
        body: "Our published lineup includes action and arcade titles built with Unity. Each one started as a small prototype — a single mechanic we found fun — and grew into a finished product with menus, levels, scoring and mobile controls. You can browse them on our game development page.",
      },
      {
        heading: "The engineering behind it",
        body: "Shipping to the App Store means more than code. Every game goes through UI/UX polish, performance optimisation, device testing, and Apple's review process. We build with C# and Unity, use WebGL where the web makes sense, and always design with the player's first five minutes in mind.",
      },
      {
        heading: "What this means for our students",
        body: "When we teach Unity C# at Medinova Academy, we are not teaching theory — we are teaching the exact process we use in production. Our learners design mechanics, build 2D and 3D games and finish with playable portfolio projects, learning the same pipeline our studio uses to ship real games.",
      },
      {
        heading: "Ship early, learn fast",
        body: "The biggest lesson: shipping is a skill. Perfect games that never launch teach nothing. Start small, publish, get feedback, improve. That is how our studio grew — and it is exactly the mindset we build in every learner who joins us.",
      },
    ],
  },
];

const FR: BlogPost[] = [
  {
    slug: "what-age-should-kids-start-coding",
    title: "À Quel Âge Commencer la Programmation pour Enfants ?",
    description:
      "Il n'existe pas d'âge 'idéal' pour commencer à coder — mais il existe une façon intelligente de commencer. Découvrez comment les enfants développent des compétences dès 7 ans.",
    date: "2026-03-10",
    category: "Enfants & Code",
    readingTime: "5 min de lecture",
    hero: HERO["what-age-should-kids-start-coding"],
    intro:
      "Les parents nous demandent souvent : « À quel âge mon enfant doit-il apprendre à coder ? » La réponse honnête : il n'y a pas d'âge magique, mais il y a une façon plus intelligente de commencer. Voici comment nous voyons les choses à Medinova Academy.",
    sections: [
      {
        heading: "De 7 à 9 ans : d'abord jouer, ensuite la logique",
        body: "À cet âge, les enfants ne sont pas prêts à taper des lignes de code — et ce n'est pas nécessaire. La programmation visuelle par blocs, comme Scratch, leur permet d'assembler la logique comme des Lego numériques. Ils apprennent les séquences, les boucles et la cause-effet en créant des jeux et des histoires animées.",
      },
      {
        heading: "De 10 à 12 ans : des blocs au texte",
        body: "Vers 10-12 ans, beaucoup d'apprenants sont prêts à passer du visuel au texte. Python est un pont idéal : il se lit presque comme l'anglais, ce qui permet de se concentrer sur la résolution de problèmes. C'est aussi le moment idéal pour Roblox et le développement web.",
      },
      {
        heading: "13 ans et plus : les outils professionnels",
        body: "Les adolescents peuvent utiliser des outils professionnels. Unity et C# sont la même technologie que celle des studios commerciaux, et apprendre à 13 ans offre une avance énorme — en code, mais aussi en game design et en gestion de projet.",
      },
      {
        heading: "La vraie règle : suivre l'intérêt",
        body: "Le facteur le plus important est la motivation. Un enfant de 7 ans passionné de jeux apprendra plus qu'un adolescent de 12 ans forcé en classe. Commencez tôt si l'enfant est curieux, plus tard sinon — mais faites en sorte que le démarrage soit basé sur des projets.",
      },
    ],
  },
  {
    slug: "scratch-vs-python-where-should-beginners-start",
    title: "Scratch ou Python : Par Où Commencer ?",
    description:
      "Scratch ou Python ? Les deux sont d'excellents premiers langages — pour des raisons différentes. Une comparaison pratique pour choisir le bon point de départ.",
    date: "2026-04-02",
    category: "Guides Débutants",
    readingTime: "6 min de lecture",
    hero: HERO["scratch-vs-python-where-should-beginners-start"],
    intro:
      "C'est la première question des parents : mon enfant doit-il commencer par Scratch ou Python ? La réponse courte : cela dépend de son âge et de sa confiance. Voici notre analyse.",
    sections: [
      {
        heading: "Scratch : le langage des plus jeunes",
        body: "Scratch est visuel. Au lieu de taper, les enfants glissent des blocs de couleur qui représentent des commandes. Pas d'erreurs de syntaxe — un bloc s'emboîte. Cela élimine la frustration et permet aux jeunes (7-10 ans) de se concentrer sur la logique : séquences, boucles, conditions et variables.",
      },
      {
        heading: "Python : le langage du vrai logiciel",
        body: "Python est un véritable langage utilisé par des entreprises comme Google et Netflix. Il se lit presque comme le français, ce qui le rend accessible aux 11 ans et plus. Python prépare aux domaines avancés : développement web, IA et science des données.",
      },
      {
        heading: "Un parcours courant : Scratch puis Python",
        body: "Beaucoup de nos apprenants font exactement cela. Scratch construit la logique ; Python construit la maîtrise. Un enfant qui comprend déjà les boucles et les conditions en Scratch progresse bien plus vite en Python.",
      },
      {
        heading: "Lequel pour votre enfant ?",
        body: "De 7 à 10 ans sans expérience ? Commencez par Scratch. 11 ans et plus ou déjà à l'aise avec la logique ? Allez directement vers Python. Pas sûr ? Essayez les deux dans un cours d'essai gratuit.",
      },
    ],
  },
  {
    slug: "unity-vs-roblox-which-should-kids-learn",
    title: "Unity ou Roblox : Lequel Apprendre pour les Enfants ?",
    description:
      "Roblox et Unity enseignent tous deux le vrai développement de jeux — mais par des chemins très différents. Un guide pour choisir entre Roblox Studio et Unity C#.",
    date: "2026-05-15",
    category: "Développement de Jeux",
    readingTime: "6 min de lecture",
    hero: HERO["unity-vs-roblox-which-should-kids-learn"],
    intro:
      "Roblox ou Unity ? Les deux plateformes permettent aux enfants de créer et de publier de vrais jeux. Mais elles servent des âges et des objectifs différents. Voici une comparaison honnête.",
    sections: [
      {
        heading: "Roblox : publication instantanée, énorme audience",
        body: "Roblox Studio est gratuit et accessible aux créateurs dès 9 ans. Les enfants utilisent Lua pour construire des mondes 3D. La magie de Roblox est la motivation : publier un jeu et voir de vrais joueurs l'essayer.",
      },
      {
        heading: "Unity : professionnel et prêt pour la carrière",
        body: "Unity et C# sont utilisés par les studios du monde entier. La courbe d'apprentissage est plus raide, ce qui le rend idéal pour les adolescents (12 ans et plus). Les apprenants travaillent la physique, les interfaces, le 2D/3D et le C#.",
      },
      {
        heading: "Et les maths et la logique ?",
        body: "Les deux enseignent une vraie logique et une vraie résolution de problèmes. Le Lua de Roblox est visuel et tolérant ; le C# de Unity est plus strict et proche de l'ingénierie logicielle professionnelle.",
      },
      {
        heading: "Comment choisir",
        body: "Si votre enfant a 9-12 ans et adore Roblox, commencez par Roblox — cela transforme le temps d'écran en temps de création. S'il a 12 ans et plus et vise le développement de jeux professionnel, Unity C# est la voie. Beaucoup font les deux.",
      },
    ],
  },
  {
    slug: "coding-courses-for-kids-in-morocco-online-and-live",
    title: "Cours de Code pour Enfants au Maroc — En Ligne et En Direct",
    description:
      "Vous cherchez des cours de code pour enfants au Maroc ? Des cours en ligne depuis Rabat, Casablanca et partout au pays — ce qu'il faut rechercher.",
    date: "2026-06-08",
    category: "Medinova Academy",
    readingTime: "5 min de lecture",
    hero: HERO["coding-courses-for-kids-in-morocco-online-and-live"],
    intro:
      "L'éducation au code se développe rapidement au Maroc, et les parents ont plus de choix que jamais. De Rabat à Casablanca, les cours en ligne en direct sont devenus la façon la plus flexible d'apprendre. Voici ce qu'il faut rechercher.",
    sections: [
      {
        heading: "Pourquoi les cours en ligne en direct fonctionnent",
        body: "Les cours en direct combinent l'énergie d'un vrai professeur et la liberté d'apprendre à la maison. Pas de trajet, et les apprenants peuvent rejoindre depuis n'importe où au Maroc. L'instruction guidée en direct surpasse les tutoriels vidéo.",
      },
      {
        heading: "Ce qu'un bon cours doit inclure",
        body: "Quatre choses : un programme structuré avec de vrais projets, un petit groupe, un retour de progression pour les parents, et un certificat à la fin. Méfiez-vous des promesses de « une app en une semaine ».",
      },
      {
        heading: "Depuis Rabat, Casablanca et tout le Maroc",
        body: "Medinova Academy enseigne en ligne depuis le Maroc et sert des apprenants à Rabat, Casablanca, Kénitra et dans tout le pays. Notre fondateur anime les parcours avancés, et chaque cours est basé sur des projets.",
      },
      {
        heading: "Comment commencer",
        body: "Commencez par un cours d'essai gratuit. Regardez comment votre enfant s'engage : est-il curieux ? Cette enthousiasme est le meilleur indicateur de réussite. Ensuite, choisissez un parcours adapté à l'âge.",
      },
    ],
  },
  {
    slug: "how-we-published-4-games-on-the-app-store",
    title: "Comment Nous Avons Publié 4 Jeux sur l'App Store",
    description:
      "Les coulisses de la publication de quatre jeux sur l'App Store — les outils, le processus et les leçons que nous enseignons à chaque élève.",
    date: "2026-07-20",
    category: "Histoires du Studio",
    readingTime: "7 min de lecture",
    hero: HERO["how-we-published-4-games-on-the-app-store"],
    intro:
      "Il y a une grande différence entre un jeu que l'on peut jouer et un jeu que l'on peut publier. Medinova Studio a publié quatre jeux sur l'App Store — et le processus nous a appris des leçons qui façonnent tout notre enseignement.",
    sections: [
      {
        heading: "Les quatre jeux",
        body: "Notre catalogue comprend des jeux d'action et d'arcade construits avec Unity. Chacun a commencé comme un petit prototype — une mécanique amusante — et est devenu un produit fini avec menus, niveaux, score et commandes mobiles.",
      },
      {
        heading: "L'ingénierie derrière",
        body: "Publier sur l'App Store signifie bien plus que du code. Chaque jeu passe par la finition UI/UX, l'optimisation des performances, les tests sur appareils et le processus de revue d'Apple. Nous construisons avec C# et Unity.",
      },
      {
        heading: "Ce que cela signifie pour nos élèves",
        body: "Quand nous enseignons Unity C# à Medinova Academy, nous n'enseignons pas la théorie — nous enseignons le processus exact que nous utilisons en production. Nos apprenants conçoivent des mécaniques et terminent avec des projets jouables.",
      },
      {
        heading: "Publiez tôt, apprenez vite",
        body: "La plus grande leçon : publier est une compétence. Les jeux parfaits qui ne sortent jamais n'apprennent rien. Commencez petit, publiez, obtenez des retours, améliorez. C'est exactement l'état d'esprit que nous construisons chez chaque apprenant.",
      },
    ],
  },
];

const AR: BlogPost[] = [
  {
    slug: "what-age-should-kids-start-coding",
    title: "في أي سن يبدأ الأطفال تعلم البرمجة؟",
    description:
      "لا يوجد سن 'مثالي' لبدء البرمجة — لكن توجد طريقة ذكية للبدء. تعرّف على كيفية تطوير الأطفال مهارات البرمجة من سن 7 سنوات.",
    date: "2026-03-10",
    category: "الأطفال والبرمجة",
    readingTime: "5 دقائق قراءة",
    hero: HERO["what-age-should-kids-start-coding"],
    intro:
      "كثيراً ما يسألنا الآباء: 'في أي سن يجب أن يتعلم طفلي البرمجة؟' الجواب الصادق: لا يوجد سن سحري، لكن توجد طريقة أذكى للبدء. هكذا نفكر في أكاديمية Medinova.",
    sections: [
      {
        heading: "من 7 إلى 9 سنوات: اللعب أولاً ثم المنطق",
        body: "في هذه المرحلة، الأطفال ليسوا مستعدين لكتابة سطور برمجية — ولا يحتاجون لذلك. البرمجة المرئية بالكتل مثل سكراتش تتيح لهم تركيب المنطق مثل مكعبات ليغو الرقمية. يتعلمون التسلسل والحلقات والسبب والنتيجة أثناء بناء الألعاب والقصص المتحركة.",
      },
      {
        heading: "من 10 إلى 12 سنة: من الكتل إلى النصوص",
        body: "حول سن 10-12، كثير من المتعلمين مستعدون للانتقال من الكتل المرئية إلى لغات نصية حقيقية. بايثون جسر مثالي: تُقرأ مثل اللغة العربية تقريباً، فيركز الأطفال على حل المشكلات بدل أخطاء الصياغة.",
      },
      {
        heading: "13 سنة فأكثر: الأدوات الاحترافية",
        body: "يمكن للمراهقين استخدام أدوات المستوى الاحترافي. Unity وC# هما نفس التقنية التي تستخدمها الاستوديوهات التجارية، وتعلمها في سن 13 يمنح تقدمًا كبيرًا — في البرمجة وتصميم الألعاب وإدارة المشاريع.",
      },
      {
        heading: "القاعدة الحقيقية: اتبع الاهتمام",
        body: "أهم عامل هو الدافعية. طفل في السابعة يحب الألعاب سيتعلم أكثر من مراهق في الثانية عشرة أجبر على الحضور. ابدأ مبكراً إن كان الطفل فضولياً، وتأخر إن لم يكن — لكن اجعل البداية قائمة على المشاريع.",
      },
    ],
  },
  {
    slug: "scratch-vs-python-where-should-beginners-start",
    title: "سكراتش أم بايثون: من أين يبدأ المبتدئ؟",
    description:
      "سكراتش أم بايثون؟ كلاهما لغة أولى ممتازة — لأسباب مختلفة. مقارنة عملية لمساعدة الآباء على اختيار نقطة البداية.",
    date: "2026-04-02",
    category: "أدلة المبتدئين",
    readingTime: "6 دقائق قراءة",
    hero: HERO["scratch-vs-python-where-should-beginners-start"],
    intro:
      "هذا أول سؤال يطرحه الآباء عند اختيار دورة برمجة: هل يبدأ طفلي بسكراتش أم بايثون؟ الجواب القصير: يعتمد على العمر والثقة. هكذا نفصل الأمر.",
    sections: [
      {
        heading: "سكراتش: لغة صغار المبتدئين",
        body: "سكراتش برمجة مرئية. بدل الكتابة، يسحب الأطفال كتلًا ملونة تمثل الأوامر. لا توجد أخطاء صياغة — الكتلة ببساطة تتراص. هذا يزيل الإحباط ويمكّن الصغار (7-10 سنوات) من التركيز على المنطق: التسلسل والحلقات والشروط والمتغيرات.",
      },
      {
        heading: "بايثون: لغة البرمجيات الحقيقية",
        body: "بايثون لغة نصية حقيقية تستخدمها شركات مثل جوجل ونتفليكس. تُقرأ بسهولة، ما يجعلها مناسبة للأكبر سنًا (11+). تحضّر بايثون للمجالات المتقدمة: تطوير الويب والذكاء الاصطناعي وعلوم البيانات.",
      },
      {
        heading: "مسار شائع: ابدأ بسكراتش ثم تخرج إلى بايثون",
        body: "كثير من متعلمينا يفعلون ذلك تمامًا. سكراتش يبني المنطق؛ بايثون يبني الحرفة. الطفل الذي يفهم الحلقات والشروط في سكراتش يتقدم أسرع بكثير في بايثون.",
      },
      {
        heading: "أيهما لطفلك؟",
        body: "من 7 إلى 10 سنوات بلا خبرة؟ ابدأ بسكراتش. من 11 سنة فأكثر أو مرتاح مع المنطق؟ انتقل مباشرة إلى بايثون. غير متأكد؟ جرب الاثنين في حصة تجريبية مجانية.",
      },
    ],
  },
  {
    slug: "unity-vs-roblox-which-should-kids-learn",
    title: "Unity أم Roblox: أيّهما يتعلم الأطفال؟",
    description:
      "تعلّم Roblox وUnity كلاهما تطوير ألعاب حقيقي — لكن بمسارين مختلفين جدًا. دليل للآباء للاختيار بين Roblox Studio وUnity C#.",
    date: "2026-05-15",
    category: "تطوير الألعاب",
    readingTime: "6 دقائق قراءة",
    hero: HERO["unity-vs-roblox-which-should-kids-learn"],
    intro:
      "Roblox أم Unity؟ كلتا المنصتين تتيحان للأطفال إنشاء ونشر ألعاب حقيقية، وكلاهما ممتاز للتعلم. لكنهما تخدم ان أعمارًا وأهدافًا مختلفة. إليك مقارنة صادقة.",
    sections: [
      {
        heading: "Roblox: نشر فوري وجمهور ضخم",
        body: "Roblox Studio مجاني وسهل للمبدعين من سن 9 سنوات. يستخدم الأطفال لغة Lua لبناء عوالم ثلاثية الأبعاد. سحر Roblox هو الدافعية: نشر لعبة ورؤية لاعبين حقيقيين يجربونها.",
      },
      {
        heading: "Unity: مستوى احترافي وجاهز للعمل",
        body: "Unity وC# تستخدمهما استوديوهات الألعاب التجارية حول العالم. المنحنى التعليمي أكثر صعوبة، ما يجعله مثاليًا للمراهقين (12+). يتعلم المتعلمون الفيزياء والواجهات والرسوميات والبرمجة بلغة C#.",
      },
      {
        heading: "ماذا عن الرياضيات والمنطق؟",
        body: "كلاهما يعلّم منطقًا حقيقيًا وحل مشكلات حقيقي. Lua في Roblox مرئية ومتسامحة؛ C# في Unity أكثر صرامة وأقرب لهندسة البرمجيات الاحترافية.",
      },
      {
        heading: "كيف تختار",
        body: "إذا كان طفلك بين 9-12 ويحب Roblox، ابدأ بتطوير Roblox — يحوّل وقت الشاشة إلى وقت إبداع. وإذا كان 12+ ويطمح لتطوير الألعاب الاحترافي، فـ Unity C# هو الطريق. كثيرون يفعلون الاثنين.",
      },
    ],
  },
  {
    slug: "coding-courses-for-kids-in-morocco-online-and-live",
    title: "دورات البرمجة للأطفال في المغرب — عبر الإنترنت وبشكل مباشر",
    description:
      "تبحث عن دروس برمجة للأطفال في المغرب؟ دورات مباشرة عبر الإنترنت من الرباط والدار البيضاء وكل أنحاء البلاد — وما الذي يجب البحث عنه.",
    date: "2026-06-08",
    category: "أكاديمية Medinova",
    readingTime: "5 دقائق قراءة",
    hero: HERO["coding-courses-for-kids-in-morocco-online-and-live"],
    intro:
      "تعليم البرمجة ينمو بسرعة في المغرب، وأصبح لدى الآباء خيارات أكثر من أي وقت مضى. من الرباط إلى الدار البيضاء، أصبحت الفصول المباشرة عبر الإنترنت الطريقة الأكثر مرونة للتعلم. إليك ما يجب البحث عنه.",
    sections: [
      {
        heading: "لماذا تعمل الفصول المباشرة عبر الإنترنت",
        body: "تجمع الفصول المباشرة بين طاقة معلم حقيقي وحرية التعلم من المنزل. لا تنقل ولا انتظار، ويمكن للمتعلمين الانضمام من أي مكان في المغرب. التعليم المباشر الموجه يتفوق على مشاهدة الدروس المسجلة.",
      },
      {
        heading: "ماذا يجب أن تتضمن الدورة الجيدة",
        body: "أربعة أشياء: منهاج منظم يبني مشاريع حقيقية، مجموعة صغيرة، تقارير تقدم للآباء، وشهادة في النهاية. احذر من الوعود بـ'تطبيق في أسبوع'.",
      },
      {
        heading: "من الرباط والدار البيضاء وكل المغرب",
        body: "تدرّس أكاديمية Medinova مباشرة عبر الإنترنت من المغرب، وتخدم متعلمين في الرباط والدار البيضاء والقنيطرة وكل البلاد. مؤسسنا يدرّس المسارات المتقدمة مباشرة، وكل دورة قائمة على المشاريع.",
      },
      {
        heading: "كيف تبدأ",
        body: "ابدأ بحصة تجريبية مجانية. لاحظ كيف يتفاعل طفلك: هل هو فضولي؟ هذه الحماسة أفضل مؤشر على النجاح. ثم اختر مسارًا يناسب العمر.",
      },
    ],
  },
  {
    slug: "how-we-published-4-games-on-the-app-store",
    title: "كيف نشرنا 4 ألعاب على متجر التطبيقات",
    description:
      "القصة من خلف الكواليس لنشر أربع ألعاب على متجر التطبيقات — الأدوات والعملية والدروس التي نعلّمها لكل طالب.",
    date: "2026-07-20",
    category: "قصص الاستوديو",
    readingTime: "7 دقائق قراءة",
    hero: HERO["how-we-published-4-games-on-the-app-store"],
    intro:
      "هناك فرق كبير بين لعبة يمكنك لعبها ولعبة يمكنك نشرها. نشر استوديو Medinova أربع ألعاب على متجر التطبيقات — وقد علّمنا هذا الدروس التي تشكّل كل ما ندرّسه.",
    sections: [
      {
        heading: "الألعاب الأربع",
        body: "تتضمن قائمتنا ألعاب أكشن وأركيد مبنية بـ Unity. بدأت كل لعبة كنموذج صغير — آلية واحدة ممتعة — ثم نمت إلى منتج نهائي بقوائم ومستويات ونتائج وتحكم باللمس.",
      },
      {
        heading: "الهندسة خلف الألعاب",
        body: "النشر على متجر التطبيقات يعني أكثر من البرمجة. كل لعبة تمر بتحسين الواجهة والأداء واختبار الأجهزة ومراجعة آبل. نبني بـ C# وUnity، ونصمم دائمًا لأول خمس دقائق من تجربة اللاعب.",
      },
      {
        heading: "ماذا يعني هذا لطلابنا",
        body: "عندما ندرّس Unity C# في أكاديمية Medinova، لا نعلّم نظرية — بل نعلّم العملية نفسها التي نستخدمها في الإنتاج. يصمم متعلمونا الآليات ويبنون ألعابًا ثنائية وثلاثية الأبعاد وينجزون مشاريع قابلة للعب.",
      },
      {
        heading: "انشر مبكرًا، تعلّم بسرعة",
        body: "أكبر درس: النشر مهارة. الألعاب المثالية التي لا تُطلق أبدًا لا تعلّم شيئًا. ابدأ صغيرًا، انشر، احصل على ملاحظات، طوّر. هكذا نمت استوديونا — وهذا بالضبط ما نبني عليه كل متعلم.",
      },
    ],
  },
];

export const BLOG_POSTS: Record<Lang, BlogPost[]> = {
  en: EN,
  fr: FR,
  ar: AR,
};

export function blogPostsFor(lang: Lang): BlogPost[] {
  return BLOG_POSTS[lang];
}

export function blogPostBySlug(lang: Lang, slug: string): BlogPost | undefined {
  return BLOG_POSTS[lang].find((p) => p.slug === slug);
}

export const ALL_BLOG_SLUGS = EN.map((p) => p.slug);