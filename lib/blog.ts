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
  course?: { slug: string; label: string; body: string };
  related?: string[];
};

const HERO = {
  "what-age-should-kids-start-coding": "/images/academy/scratch.webp",
  "scratch-vs-python-where-should-beginners-start": "/images/academy/scratch.webp",
  "unity-vs-roblox-which-should-kids-learn": "/images/academy/roblox.webp",
  "coding-courses-for-kids-in-morocco-online-and-live":
    "/images/academy/python.webp",
  "how-we-published-4-games-on-the-app-store":
    "/images/games/zombies-warzone/screenshot1.webp",
  "what-is-scratch": "/images/academy/scratch.webp",
  "what-is-python-programming": "/images/academy/python.webp",
  "what-is-roblox-game-development": "/images/academy/roblox.webp",
  "what-is-unity-game-development": "/images/academy/unity.webp",
  "what-is-web-development": "/images/academy/web-development.webp",
  "what-is-creative-design": "/images/academy/creative-design.webp",
  "digital-skills-for-beginners": "/images/academy/digital-essentials.webp",
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
    course: {
      slug: "scratch",
      label: "Scratch for Kids (7+)",
      body: "Our live online Scratch course builds games and stories with kids from age 7 — learning real coding logic along the way.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-is-scratch"],
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
    course: {
      slug: "python",
      label: "Python Programming (11+)",
      body: "Live online Python for ages 11+ — from your first line of code to games, quizzes and mini-applications.",
    },
    related: ["what-is-scratch", "what-is-python-programming"],
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
    course: {
      slug: "unity-csharp",
      label: "Unity & C# (12+)",
      body: "Professional game development with Unity and C# — design mechanics and ship playable projects (12+).",
    },
    related: ["what-is-roblox-game-development", "what-is-unity-game-development"],
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
        body: "Live classes combine the energy of a real teacher with the freedom of learning from home. There is no commute, no missed sessions due to traffic, and learners can join from anywhere in Morocco. Our own experience agrees: guided, live instruction beats watching video tutorials, because a teacher can see exactly where a learner is stuck.",
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
    course: {
      slug: "digital-essentials",
      label: "Digital Essentials (7+)",
      body: "Computer basics, Word, Excel, PowerPoint and safe internet use — the foundation for every other track (7+).",
    },
    related: ["digital-skills-for-beginners", "what-age-should-kids-start-coding"],
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
    course: {
      slug: "unity-csharp",
      label: "Unity & C# (12+)",
      body: "Professional game development with Unity and C# — design mechanics and ship playable projects (12+).",
    },
    related: ["what-is-unity-game-development", "what-is-roblox-game-development"],
  },
  {
    slug: "what-is-scratch",
    title: "What Is Scratch? A Visual Programming Language for Kids",
    description:
      "Scratch is a free visual programming language from MIT that teaches kids real coding logic through drag-and-drop blocks. Here's how it works and why it's the perfect first language.",
    date: "2026-07-28",
    category: "Scratch",
    readingTime: "5 min read",
    hero: HERO["what-is-scratch"],
    intro:
      "If you are just starting to look into kids' coding, the first name you will meet is Scratch. It is a free visual programming language created by MIT that lets children build games, stories and animations by snapping coloured blocks together — no typing required. Here is what it is, how it works, and why it is the most popular first coding language in the world.",
    sections: [
      {
        heading: "What exactly is Scratch?",
        body: "Scratch is a programming language where commands are represented by colourful blocks. Instead of typing 'move 10 steps', a child drags a block that says exactly that and snaps it into place. Blocks lock together like puzzle pieces, so there are no typing errors to frustrate a beginner. It was designed at MIT to help young people think creatively, reason systematically and work collaboratively.",
      },
      {
        heading: "The logic hiding behind the blocks",
        body: "Behind the friendly blocks are the same concepts used by every programmer: sequences (doing things in order), loops (repeating actions), conditions (if…then decisions), events and variables. A child who learns these ideas in Scratch is learning real computer science — just in a visual, forgiving form.",
      },
      {
        heading: "What kids actually build",
        body: "Most learners start by making a character (a sprite) move, react and talk. From there they build animated stories, quizzes, platformer games and even multiplayer experiments. Because Scratch projects run in the browser and can be shared, kids get the same thrill as a game developer: they publish something and other people can play it.",
      },
      {
        heading: "Why Scratch is the perfect first language",
        body: "The goal of a first language is to build confidence and logic — not to learn typing rules. Scratch removes the friction so a 7-year-old can focus on thinking like a programmer. When they later move to text languages like Python, they already understand the concepts; they only need to learn the new spelling.",
      },
    ],
    course: {
      slug: "scratch",
      label: "Scratch for Kids (7+)",
      body: "Our live online Scratch course builds games and stories with kids from age 7 — learning real coding logic along the way.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-age-should-kids-start-coding"],
  },
  {
    slug: "what-is-python-programming",
    title: "What Is Python? The Beginner-Friendly Language Behind Real Software",
    description:
      "Python is a real, text-based programming language used by companies like Google and Netflix. Discover why it's the ideal first text language for kids and teens.",
    date: "2026-08-01",
    category: "Python",
    readingTime: "6 min read",
    hero: HERO["what-is-python-programming"],
    intro:
      "Python is one of the most popular programming languages in the world — and one of the most beginner-friendly. It is the language behind websites, data science, artificial intelligence and games. For kids and teens ready to move beyond visual blocks, Python is the natural next step.",
    sections: [
      {
        heading: "A language that reads almost like English",
        body: "Python was designed to be readable. A Python program uses words like 'print', 'if' and 'for' in a way that is close to everyday English. That simplicity means a beginner can focus on problem-solving instead of fighting with punctuation and syntax rules.",
      },
      {
        heading: "Where Python is actually used",
        body: "Python powers some of the most-used software in the world: it runs behind major websites, recommendation systems, scientific research and AI tools. Learning Python gives young people a tool that is genuinely useful today and stays useful as they grow.",
      },
      {
        heading: "What kids build with Python",
        body: "Our learners start with text-based games, quizzes and small programs that solve real problems. As they progress, they learn functions, loops and algorithms — the building blocks of serious programming — and complete projects they can run and show to family and friends.",
      },
      {
        heading: "When to move from blocks to Python",
        body: "Most children are ready around age 11, after they have mastered logic concepts in a visual language like Scratch. If a child already understands loops and conditions, Python is the smoothest bridge to writing real code.",
      },
    ],
    course: {
      slug: "python",
      label: "Python Programming (11+)",
      body: "Live online Python for ages 11+ — from your first line of code to games, quizzes and mini-applications.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-is-web-development"],
  },
  {
    slug: "what-is-roblox-game-development",
    title: "What Is Roblox Game Development? Building Worlds With Lua",
    description:
      "Roblox Studio lets kids design 3D worlds and script them with Lua — then publish games millions can play. Here's how learning Roblox development works.",
    date: "2026-08-05",
    category: "Game Development",
    readingTime: "6 min read",
    hero: HERO["what-is-roblox-game-development"],
    intro:
      "Roblox is more than a game platform — it is a complete game-building engine. With Roblox Studio, young creators design 3D worlds and program them using a scripting language called Lua. And when they are done, they can publish their game for millions of players. That combination makes Roblox one of the most motivating ways for kids to learn real programming.",
    sections: [
      {
        heading: "Roblox Studio: the free game engine",
        body: "Roblox Studio is the free tool used to create Roblox experiences. It works like a professional game editor: builders place objects, terrain, lighting and characters in a 3D scene, then add rules and interactions with scripts. It is powerful enough for serious projects yet approachable for beginners.",
      },
      {
        heading: "Lua: real programming, gently introduced",
        body: "Lua is the language that brings Roblox worlds to life. Learners write scripts to make characters move, doors open and game rules work. Lua is forgiving and visual — you can test your changes instantly — which keeps young coders engaged while they learn variables, conditions and events.",
      },
      {
        heading: "The motivation of publishing",
        body: "The biggest advantage of Roblox is the feedback loop. A child can publish a game and see real players try it. Comments, visits and plays are incredibly motivating — screen time turns into creation time, and problem-solving becomes a game in itself.",
      },
      {
        heading: "What skills kids develop",
        body: "Roblox development teaches spatial thinking, game design, logic and structured problem-solving. It is a complete creative discipline: planning a world, building it, scripting the rules and polishing the experience — exactly the workflow of a professional game developer.",
      },
    ],
    course: {
      slug: "roblox",
      label: "Roblox Game Development (9+)",
      body: "Design 3D worlds, script gameplay with Lua and publish real Roblox experiences — for ages 9+.",
    },
    related: ["unity-vs-roblox-which-should-kids-learn", "what-is-unity-game-development"],
  },
  {
    slug: "what-is-unity-game-development",
    title: "What Is Unity Game Development? The Engine Behind Real Games",
    description:
      "Unity is the professional engine used by studios worldwide — and it runs on C#. Discover how teens learn real game development with Unity.",
    date: "2026-08-10",
    category: "Game Development",
    readingTime: "7 min read",
    hero: HERO["what-is-unity-game-development"],
    intro:
      "Unity is one of the most widely used game engines in the world — the technology behind countless mobile, PC and console games. It is the same tool used by professional studios, and it is also the engine Medinova Studio uses to build and publish our own games. Learning Unity means learning game development the way the industry actually does it.",
    sections: [
      {
        heading: "What Unity actually is",
        body: "Unity is a game engine: a complete environment where you create 2D and 3D games. It handles graphics, physics, audio, input and the tools to design levels and interfaces. Developers write the game's behaviour in C#, a professional programming language, and Unity turns it into a playable game.",
      },
      {
        heading: "Why C# matters",
        body: "C# is one of the most in-demand languages in software development. Learning Unity means learning real programming with classes, objects, methods and events — object-oriented programming, the same concepts used in apps, websites and software everywhere. It is a serious engineering skill that happens to be fun to learn.",
      },
      {
        heading: "The studio advantage",
        body: "At Medinova, Unity is not just a curriculum topic — it is our production engine. We have published our own games built with Unity, so when we teach it, learners follow the exact pipeline our studio uses: designing mechanics, scripting gameplay, testing and shipping a finished, playable project.",
      },
      {
        heading: "Who Unity is right for",
        body: "Unity has a steeper learning curve than visual tools, which is why we recommend it for teens from around age 12. Learners who are serious about game development — or software engineering in general — find that Unity turns a hobby into a real, portable skill set.",
      },
    ],
    course: {
      slug: "unity-csharp",
      label: "Unity & C# (12+)",
      body: "Professional game development with Unity and C# — design mechanics and ship playable projects (12+).",
    },
    related: ["unity-vs-roblox-which-should-kids-learn", "how-we-published-4-games-on-the-app-store"],
  },
  {
    slug: "what-is-web-development",
    title: "What Is Web Development? Building Real Websites, Step by Step",
    description:
      "Web development is how websites and web apps are built — with HTML, CSS, JavaScript and more. Here's what kids and teens learn on the full-stack path.",
    date: "2026-08-14",
    category: "Web Development",
    readingTime: "6 min read",
    hero: HERO["what-is-web-development"],
    intro:
      "Every website you have ever visited was built by a web developer. Web development is the craft of creating websites and web applications using languages like HTML, CSS, JavaScript and PHP. For kids and teens, it is one of the most practical coding paths — because the result is something visible, shareable and instantly useful.",
    sections: [
      {
        heading: "The three languages of the front end",
        body: "Every webpage is built from three languages. HTML structures the content — headings, paragraphs, images. CSS styles it — colours, fonts, layouts. JavaScript makes it interactive — buttons that respond, menus that open, content that changes. Together they turn a document into an experience.",
      },
      {
        heading: "Behind the scenes: the back end",
        body: "When a website saves data — like a login, a comment or a shopping cart — it needs a back end. Technologies like PHP and MySQL let developers store, retrieve and manage information in a database. Learning the full stack means understanding the whole journey of a click, from the browser to the server and back.",
      },
      {
        heading: "Why web skills are so practical",
        body: "Web development is everywhere, and the skills are highly transferable. A teen who learns HTML, CSS, JavaScript, PHP and MySQL can build real, database-connected websites: a personal portfolio, a school project platform or a small business site. It is one of the fastest ways to go from learner to builder.",
      },
      {
        heading: "How the path works",
        body: "Learners typically start with HTML and CSS to create pages, then add JavaScript for interactivity, then move to PHP and MySQL for data. Each step produces something real, so progress is visible from the very first session.",
      },
    ],
    course: {
      slug: "web-development",
      label: "Web Development (11+)",
      body: "HTML, CSS, JavaScript, PHP and MySQL — build real websites connected to databases (11+).",
    },
    related: ["what-is-python-programming", "what-is-creative-design"],
  },
  {
    slug: "what-is-creative-design",
    title: "What Is Creative Design? 3D, Photo and Video for Young Creators",
    description:
      "Creative design combines technology and imagination: 3D creation, photo editing and video editing. Discover what kids create on this path.",
    date: "2026-08-18",
    category: "Creative Design",
    readingTime: "6 min read",
    hero: HERO["what-is-creative-design"],
    intro:
      "Not every young creator wants to write code — some want to design. Creative design is the discipline that brings ideas to life through 3D creation, photo editing and video production. It is technology and imagination working together, and it is a real creative path for kids from around age 10.",
    sections: [
      {
        heading: "Three tools, one creative path",
        body: "Creative design spans three connected crafts. 3D creation lets learners model objects and scenes for games, animation and product design. Photo editing turns snapshots into polished visual work. Video editing turns footage into stories with cuts, effects, titles and sound. Together they form a complete toolkit for digital creation.",
      },
      {
        heading: "Design thinking in practice",
        body: "Beyond the tools, creative design teaches design thinking: planning an idea, iterating, choosing colours and composition, and refining until it is right. These are the same skills used by designers and studios in every industry — and they pair perfectly with programming for game and web work.",
      },
      {
        heading: "Where it leads",
        body: "Young designers can go on to create game assets, animated scenes, social content and portfolio pieces. Combined with a coding path, design skills make a well-rounded creator — someone who can both imagine a project and build it.",
      },
      {
        heading: "How learners start",
        body: "Beginners start with simple, satisfying projects: modelling a 3D object, retouching a photo or cutting a short video. The tools are free and beginner-friendly, and each session produces something the learner is proud to share.",
      },
    ],
    course: {
      slug: "creative-design",
      label: "Creative Design (10+)",
      body: "3D creation, photo editing and video editing — turn ideas into original digital projects (10+).",
    },
    related: ["what-is-web-development", "digital-skills-for-beginners"],
  },
  {
    slug: "digital-skills-for-beginners",
    title: "Digital Skills for Beginners: The Essentials Every Child Needs",
    description:
      "Before coding, kids need digital basics: using a computer, creating documents, staying safe online. Here's what digital skills look like for ages 7+.",
    date: "2026-07-25",
    category: "Digital Skills",
    readingTime: "5 min read",
    hero: HERO["digital-skills-for-beginners"],
    intro:
      "Before a child writes their first line of code, they need the digital foundation everything else is built on. Digital skills are the everyday abilities every child needs for school and life: using a computer confidently, creating documents and presentations, searching the web safely and understanding how to behave online.",
    sections: [
      {
        heading: "What 'digital skills' actually means",
        body: "Digital skills are the practical abilities we use with technology every day. For young learners that means navigating a computer — files, folders and the keyboard — and using the essential applications: a word processor for documents, a spreadsheet for tables and data, and presentation software for sharing ideas. These are the tools of school and, later, of almost every workplace.",
      },
      {
        heading: "Safety and responsibility online",
        body: "Digital skills also include the soft but essential habits of safe internet use: recognising what information to trust, protecting passwords, and understanding respectful online behaviour. These habits protect children today and build the judgment they will rely on for the rest of their digital lives.",
      },
      {
        heading: "Why these skills come first",
        body: "Coding and design courses assume basic computer comfort. A learner who types confidently, manages files and searches the web well gets far more from an advanced course. Digital skills are the ramp that makes every other track more effective.",
      },
      {
        heading: "From basics to building",
        body: "The right time to start is early — from around age 7. Digital skills courses are structured, gentle and project-based: learners complete real school-ready projects with documents, spreadsheets and presentations, then grow into coding, web or design tracks with confidence.",
      },
    ],
    course: {
      slug: "digital-essentials",
      label: "Digital Essentials (7+)",
      body: "Computer basics, Word, Excel, PowerPoint and safe internet use — the foundation for every other track (7+).",
    },
    related: ["what-age-should-kids-start-coding", "what-is-scratch"],
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
    course: {
      slug: "scratch",
      label: "Scratch pour Enfants (7+)",
      body: "Notre cours en ligne de Scratch construit des jeux et des histoires avec les enfants dès 7 ans — tout en apprenant la vraie logique du code.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-is-scratch"],
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
    course: {
      slug: "python",
      label: "Python (11+)",
      body: "Python en ligne pour les 11 ans et plus — du premier code aux jeux, quiz et mini-applications.",
    },
    related: ["what-is-scratch", "what-is-python-programming"],
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
    course: {
      slug: "unity-csharp",
      label: "Unity & C# (12+)",
      body: "Développement de jeux professionnel avec Unity et C# — concevoir des mécaniques et livrer des projets jouables (12+).",
    },
    related: ["what-is-roblox-game-development", "what-is-unity-game-development"],
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
        body: "Les cours en direct combinent l'énergie d'un vrai professeur et la liberté d'apprendre à la maison. Pas de trajet, et les apprenants peuvent rejoindre depuis n'importe où au Maroc. L'instruction guidée en direct surpasse les tutoriels vidéo, car un professeur voit exactement où l'apprenant bloque.",
      },
      {
        heading: "Ce qu'un bon cours doit inclure",
        body: "Quatre choses : un programme structuré avec de vrais projets, un petit groupe, un retour de progression pour les parents, et un certificat à la fin. Méfiez-vous des promesses de « une app en une semaine » — les vraies compétences prennent du temps.",
      },
      {
        heading: "Depuis Rabat, Casablanca et tout le Maroc",
        body: "Medinova Academy enseigne en ligne depuis le Maroc et sert des apprenants à Rabat, Casablanca, Kénitra et dans tout le pays. Notre fondateur anime les parcours avancés, et chaque cours est basé sur des projets.",
      },
      {
        heading: "Comment commencer",
        body: "Commencez par un cours d'essai gratuit. Regardez comment votre enfant s'engage : est-il curieux ? Cette enthousiasme est le meilleur indicateur de réussite. Ensuite, choisissez un parcours adapté à l'âge — Scratch à 7+, Python à 11+, Roblox à 9+, Unity C# à 12+.",
      },
    ],
    course: {
      slug: "digital-essentials",
      label: "Initiation au Numérique (7+)",
      body: "Informatique de base, Word, Excel, PowerPoint et usage sûr d'Internet — le socle de chaque parcours (7+).",
    },
    related: ["digital-skills-for-beginners", "what-age-should-kids-start-coding"],
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
    course: {
      slug: "unity-csharp",
      label: "Unity & C# (12+)",
      body: "Développement de jeux professionnel avec Unity et C# — concevoir des mécaniques et livrer des projets jouables (12+).",
    },
    related: ["what-is-unity-game-development", "what-is-roblox-game-development"],
  },
  {
    slug: "what-is-scratch",
    title: "Qu'est-ce que Scratch ? La Programmation Visuelle pour Enfants",
    description:
      "Scratch est un langage de programmation visuel gratuit créé par le MIT qui apprend aux enfants la vraie logique du code grâce à des blocs à assembler.",
    date: "2026-07-28",
    category: "Scratch",
    readingTime: "5 min de lecture",
    hero: HERO["what-is-scratch"],
    intro:
      "Si vous commencez à explorer la programmation pour enfants, le premier nom que vous rencontrerez est Scratch. C'est un langage de programmation visuel gratuit créé par le MIT qui permet aux enfants de créer des jeux, des histoires et des animations en assemblant des blocs colorés — sans écrire de code.",
    sections: [
      {
        heading: "C'est quoi, Scratch, exactement ?",
        body: "Scratch est un langage où les commandes sont représentées par des blocs colorés. Au lieu de taper « avancer de 10 pas », l'enfant glisse un bloc qui dit exactement cela et l'emboîte. Les blocs s'assemblent comme des pièces de puzzle, donc pas d'erreurs de frappe pour frustrer un débutant. Il a été conçu au MIT pour aider les jeunes à penser de façon créative et systématique.",
      },
      {
        heading: "La logique cachée derrière les blocs",
        body: "Derrière les blocs se trouvent les mêmes concepts qu'utilisent tous les programmeurs : les séquences, les boucles, les conditions, les événements et les variables. Un enfant qui apprend ces idées avec Scratch apprend de l'informatique réelle — sous une forme visuelle et indulgente.",
      },
      {
        heading: "Ce que les enfants créent réellement",
        body: "La plupart des apprenants commencent par faire bouger et réagir un personnage. Ensuite ils créent des histoires animées, des quiz, des jeux de plateforme et même des expériences multijoueurs. Les projets Scratch s'exécutent dans le navigateur et se partagent, donc les enfants vivent le même plaisir qu'un développeur : publier quelque chose que d'autres peuvent jouer.",
      },
      {
        heading: "Pourquoi Scratch est le langage idéal pour débuter",
        body: "Le but d'un premier langage est de construire la confiance et la logique — pas d'apprendre des règles de frappe. Scratch élimine la friction pour qu'un enfant de 7 ans se concentre sur la réflexion de programmeur. Quand il passera à des langages de texte comme Python, il connaîtra déjà les concepts.",
      },
    ],
    course: {
      slug: "scratch",
      label: "Scratch pour Enfants (7+)",
      body: "Notre cours en ligne de Scratch construit des jeux et des histoires avec les enfants dès 7 ans — tout en apprenant la vraie logique du code.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-age-should-kids-start-coding"],
  },
  {
    slug: "what-is-python-programming",
    title: "Qu'est-ce que Python ? Le Langage Idéal pour Commencer le Vrai Code",
    description:
      "Python est un véritable langage de programmation utilisé par des entreprises comme Google et Netflix. Découvrez pourquoi c'est le premier langage de texte idéal.",
    date: "2026-08-01",
    category: "Python",
    readingTime: "6 min de lecture",
    hero: HERO["what-is-python-programming"],
    intro:
      "Python est l'un des langages de programmation les plus populaires au monde — et l'un des plus accessibles. Il est derrière des sites web, la science des données, l'intelligence artificielle et des jeux. Pour les enfants et adolescents prêts à dépasser les blocs visuels, Python est la prochaine étape naturelle.",
    sections: [
      {
        heading: "Un langage qui se lit presque comme le français",
        body: "Python a été conçu pour être lisible. Un programme Python utilise des mots comme « print », « if » et « for » de façon très proche du langage courant. Cette simplicité permet au débutant de se concentrer sur la résolution de problèmes au lieu de se battre avec la syntaxe.",
      },
      {
        heading: "Où Python est réellement utilisé",
        body: "Python alimente certains des logiciels les plus utilisés au monde : de grands sites, des systèmes de recommandation, la recherche scientifique et des outils d'IA. Apprendre Python donne aux jeunes un outil vraiment utile aujourd'hui et pour leur avenir.",
      },
      {
        heading: "Ce que les enfants créent avec Python",
        body: "Nos apprenants commencent par des jeux en texte, des quiz et de petits programmes qui résolvent de vrais problèmes. En progressant, ils apprennent les fonctions, les boucles et les algorithmes — les briques de la programmation sérieuse — et terminent des projets qu'ils peuvent montrer.",
      },
      {
        heading: "Quand passer des blocs à Python",
        body: "La plupart des enfants sont prêts vers 11 ans, après avoir maîtrisé la logique dans un langage visuel comme Scratch. S'ils comprennent déjà les boucles et les conditions, Python est le pont le plus doux vers le vrai code.",
      },
    ],
    course: {
      slug: "python",
      label: "Python (11+)",
      body: "Python en ligne pour les 11 ans et plus — du premier code aux jeux, quiz et mini-applications.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-is-web-development"],
  },
  {
    slug: "what-is-roblox-game-development",
    title: "Qu'est-ce que le Développement de Jeux Roblox ? Construire des Mondes avec Lua",
    description:
      "Roblox Studio permet aux enfants de concevoir des mondes 3D et de les programmer avec Lua — puis de publier des jeux joués par des millions.",
    date: "2026-08-05",
    category: "Développement de Jeux",
    readingTime: "6 min de lecture",
    hero: HERO["what-is-roblox-game-development"],
    intro:
      "Roblox est plus qu'une plateforme de jeux — c'est un moteur complet de création. Avec Roblox Studio, les jeunes créateurs conçoivent des mondes 3D et les programment avec un langage appelé Lua. Et une fois terminé, ils peuvent publier leur jeu pour des millions de joueurs. Cette combinaison fait de Roblox l'un des moyens les plus motivants d'apprendre la vraie programmation.",
    sections: [
      {
        heading: "Roblox Studio : le moteur de jeu gratuit",
        body: "Roblox Studio est l'outil gratuit utilisé pour créer les expériences Roblox. Il fonctionne comme un éditeur professionnel : on place des objets, du terrain, des lumières et des personnages dans une scène 3D, puis on ajoute des règles avec des scripts. Puissant pour des projets sérieux, accessible pour les débutants.",
      },
      {
        heading: "Lua : la vraie programmation, en douceur",
        body: "Lua est le langage qui donne vie aux mondes Roblox. Les apprenants écrivent des scripts pour faire bouger les personnages, ouvrir des portes et faire fonctionner les règles du jeu. Lua est indulgent et visuel — on teste ses changements instantanément — ce qui garde les jeunes motivés.",
      },
      {
        heading: "La motivation de la publication",
        body: "Le plus grand avantage de Roblox est la boucle de rétroaction. Un enfant publie un jeu et voit de vrais joueurs l'essayer. Commentaires et visites sont incroyablement motivants : le temps d'écran devient du temps de création.",
      },
      {
        heading: "Les compétences développées",
        body: "Le développement Roblox enseigne la pensée spatiale, le game design, la logique et la résolution structurée de problèmes. Planifier un monde, le construire, programmer les règles et peaufiner l'expérience — exactement le travail d'un développeur professionnel.",
      },
    ],
    course: {
      slug: "roblox",
      label: "Développement de Jeux Roblox (9+)",
      body: "Concevez des mondes 3D, programmez le gameplay en Lua et publiez de vraies expériences Roblox — dès 9 ans.",
    },
    related: ["unity-vs-roblox-which-should-kids-learn", "what-is-unity-game-development"],
  },
  {
    slug: "what-is-unity-game-development",
    title: "Qu'est-ce que le Développement de Jeux Unity ? Le Moteur Derrière les Vrais Jeux",
    description:
      "Unity est le moteur professionnel utilisé par les studios du monde entier — et il repose sur C#. Découvrez comment les adolescents apprennent le vrai développement de jeux.",
    date: "2026-08-10",
    category: "Développement de Jeux",
    readingTime: "7 min de lecture",
    hero: HERO["what-is-unity-game-development"],
    intro:
      "Unity est l'un des moteurs de jeu les plus utilisés au monde — la technologie derrière d'innombrables jeux mobiles, PC et consoles. C'est l'outil des studios professionnels, et c'est aussi le moteur avec lequel Medinova Studio construit et publie ses propres jeux. Apprendre Unity, c'est apprendre le développement de jeux comme le fait réellement l'industrie.",
    sections: [
      {
        heading: "Ce qu'est réellement Unity",
        body: "Unity est un moteur de jeu : un environnement complet pour créer des jeux 2D et 3D. Il gère les graphismes, la physique, le son, les commandes et les outils de conception. Les développeurs écrivent le comportement du jeu en C#, un langage professionnel, et Unity le transforme en jeu jouable.",
      },
      {
        heading: "Pourquoi C# est important",
        body: "C# est l'un des langages les plus demandés du développement logiciel. Apprendre Unity, c'est apprendre la vraie programmation : classes, objets, méthodes et événements — la programmation orientée objet utilisée partout. Une vraie compétence d'ingénieur qui se révèle amusante à apprendre.",
      },
      {
        heading: "L'avantage du studio",
        body: "Chez Medinova, Unity n'est pas qu'un sujet de cours — c'est notre moteur de production. Nous avons publié nos propres jeux avec Unity, donc quand nous enseignons, les apprenants suivent exactement notre pipeline : concevoir les mécaniques, programmer le gameplay, tester et publier un projet fini et jouable.",
      },
      {
        heading: "Pour qui est Unity",
        body: "Unity a une courbe d'apprentissage plus raide que les outils visuels, c'est pourquoi nous le recommandons dès environ 12 ans. Les apprenants sérieux trouvent qu'Unity transforme un loisir en un ensemble de compétences réelles et portables.",
      },
    ],
    course: {
      slug: "unity-csharp",
      label: "Unity & C# (12+)",
      body: "Développement de jeux professionnel avec Unity et C# — concevoir des mécaniques et livrer des projets jouables (12+).",
    },
    related: ["unity-vs-roblox-which-should-kids-learn", "how-we-published-4-games-on-the-app-store"],
  },
  {
    slug: "what-is-web-development",
    title: "Qu'est-ce que le Développement Web ? Construire de Vrais Sites, Pas à Pas",
    description:
      "Le développement web est la façon dont les sites sont construits — avec HTML, CSS, JavaScript et plus. Voici ce que les enfants et ados apprennent.",
    date: "2026-08-14",
    category: "Développement Web",
    readingTime: "6 min de lecture",
    hero: HERO["what-is-web-development"],
    intro:
      "Chaque site que vous avez visité a été construit par un développeur web. Le développement web est l'art de créer des sites et applications web avec des langages comme HTML, CSS, JavaScript et PHP. Pour les enfants et adolescents, c'est l'un des parcours les plus pratiques — le résultat est visible, partageable et immédiatement utile.",
    sections: [
      {
        heading: "Les trois langages du front end",
        body: "Chaque page web est construite avec trois langages. HTML structure le contenu — titres, paragraphes, images. CSS le stylise — couleurs, polices, mises en page. JavaScript le rend interactif — boutons, menus, contenus qui changent. Ensemble, ils transforment un document en expérience.",
      },
      {
        heading: "Derrière les coulisses : le back end",
        body: "Quand un site enregistre des données — un compte, un commentaire, un panier — il a besoin d'un back end. Des technologies comme PHP et MySQL permettent de stocker, récupérer et gérer l'information dans une base de données. Apprendre la stack complète, c'est comprendre tout le voyage d'un clic, du navigateur au serveur et retour.",
      },
      {
        heading: "Pourquoi les compétences web sont si pratiques",
        body: "Le web est partout et les compétences sont transférables. Un ado qui apprend HTML, CSS, JavaScript, PHP et MySQL peut construire de vrais sites connectés à une base de données : un portfolio, une plateforme scolaire ou un petit site d'entreprise. C'est l'un des moyens les plus rapides de passer d'apprenant à créateur.",
      },
      {
        heading: "Comment fonctionne le parcours",
        body: "Les apprenants commencent par HTML et CSS pour créer des pages, ajoutent JavaScript pour l'interactivité, puis passent à PHP et MySQL pour les données. Chaque étape produit quelque chose de réel.",
      },
    ],
    course: {
      slug: "web-development",
      label: "Développement Web (11+)",
      body: "HTML, CSS, JavaScript, PHP et MySQL — construisez de vrais sites connectés à des bases de données (11+).",
    },
    related: ["what-is-python-programming", "what-is-creative-design"],
  },
  {
    slug: "what-is-creative-design",
    title: "Qu'est-ce que le Design Créatif ? 3D, Photo et Vidéo pour Jeunes Créateurs",
    description:
      "Le design créatif combine technologie et imagination : création 3D, retouche photo et montage vidéo. Découvrez ce que les enfants créent sur ce parcours.",
    date: "2026-08-18",
    category: "Design Créatif",
    readingTime: "6 min de lecture",
    hero: HERO["what-is-creative-design"],
    intro:
      "Tous les jeunes créateurs ne veulent pas écrire du code — certains veulent concevoir. Le design créatif est la discipline qui donne vie aux idées grâce à la création 3D, la retouche photo et la production vidéo. C'est la technologie et l'imagination qui travaillent ensemble.",
    sections: [
      {
        heading: "Trois outils, un parcours créatif",
        body: "Le design créatif couvre trois métiers liés. La création 3D permet de modéliser des objets et des scènes pour les jeux, l'animation et le design de produits. La retouche photo transforme des clichés en travaux visuels soignés. Le montage vidéo transforme des séquences en histoires avec coupes, effets, titres et son.",
      },
      {
        heading: "La pensée design en pratique",
        body: "Au-delà des outils, le design créatif enseigne la pensée design : planifier une idée, itérer, choisir les couleurs et la composition, affiner jusqu'au résultat. Ces compétences sont celles des designers de toutes les industries — et elles se marient parfaitement avec la programmation.",
      },
      {
        heading: "Où cela mène",
        body: "Les jeunes designers peuvent créer des assets de jeux, des scènes animées, du contenu social et des pièces de portfolio. Combinées à un parcours de code, les compétences en design forment un créateur complet.",
      },
      {
        heading: "Comment les apprenants commencent",
        body: "Les débutants commencent par des projets simples et satisfaisants : modéliser un objet 3D, retoucher une photo ou monter une courte vidéo. Les outils sont gratuits et adaptés aux débutants, et chaque séance produit quelque chose à partager fièrement.",
      },
    ],
    course: {
      slug: "creative-design",
      label: "Design Créatif (10+)",
      body: "Création 3D, retouche photo et montage vidéo — transformer les idées en projets numériques originaux (10+).",
    },
    related: ["what-is-web-development", "digital-skills-for-beginners"],
  },
  {
    slug: "digital-skills-for-beginners",
    title: "Compétences Numériques pour Débutants : l'Essentiel pour Chaque Enfant",
    description:
      "Avant de coder, les enfants ont besoin des bases numériques : utiliser un ordinateur, créer des documents, rester en sécurité en ligne.",
    date: "2026-07-25",
    category: "Compétences Numériques",
    readingTime: "5 min de lecture",
    hero: HERO["digital-skills-for-beginners"],
    intro:
      "Avant qu'un enfant écrive sa première ligne de code, il lui faut la base numérique sur laquelle tout repose. Les compétences numériques sont les capacités du quotidien : utiliser un ordinateur avec assurance, créer des documents et des présentations, chercher sur le web en toute sécurité et bien se comporter en ligne.",
    sections: [
      {
        heading: "Ce que signifie « compétences numériques »",
        body: "Les compétences numériques sont les capacités pratiques que nous utilisons chaque jour avec la technologie. Pour les jeunes : naviguer sur un ordinateur — fichiers, dossiers, clavier — et utiliser les applications essentielles : traitement de texte, tableur et logiciel de présentation. Ce sont les outils de l'école et, plus tard, de presque tous les métiers.",
      },
      {
        heading: "Sécurité et responsabilité en ligne",
        body: "Les compétences numériques incluent aussi les habitudes essentielles de l'usage sûr d'Internet : savoir quelles informations croire, protéger ses mots de passe, et adopter un comportement respectueux. Ces habitudes protègent les enfants aujourd'hui et construisent leur jugement numérique pour l'avenir.",
      },
      {
        heading: "Pourquoi ces compétences viennent en premier",
        body: "Les cours de code et de design supposent une aisance informatique de base. Un apprenant qui tape bien, gère ses fichiers et cherche sur le web tire bien plus d'un cours avancé. Les compétences numériques sont la rampe qui rend chaque autre parcours plus efficace.",
      },
      {
        heading: "De l'essentiel à la construction",
        body: "Le bon moment pour commencer est tôt, dès 7 ans. Les cours sont structurés, doux et basés sur des projets : les apprenants réalisent de vrais projets scolaires avec documents, tableurs et présentations, puis progressent vers le code avec confiance.",
      },
    ],
    course: {
      slug: "digital-essentials",
      label: "Initiation au Numérique (7+)",
      body: "Informatique de base, Word, Excel, PowerPoint et usage sûr d'Internet — le socle de chaque parcours (7+).",
    },
    related: ["what-age-should-kids-start-coding", "what-is-scratch"],
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
      "كثيراً ما يسألنا الآباء: 'في أي سن يجب أن يتعلم طفلي البرمجة؟' الجواب الصادق: لا يوجد سن سحري، لكن توجد طريقة أذكى للبدء. العمر المناسب يعتمد على طريقة تعلم الطفل أكثر من التقويم. هكذا نفكر في أكاديمية Medinova.",
    sections: [
      {
        heading: "من 7 إلى 9 سنوات: اللعب أولاً ثم المنطق",
        body: "في هذه المرحلة، الأطفال ليسوا مستعدين لكتابة سطور برمجية — ولا يحتاجون لذلك. البرمجة المرئية بالكتل مثل سكراتش تتيح لهم تركيب المنطق مثل مكعبات ليغو الرقمية. يتعلمون التسلسل والحلقات والسبب والنتيجة أثناء بناء الألعاب والقصص المتحركة.",
      },
      {
        heading: "من 10 إلى 12 سنة: من الكتل إلى النصوص",
        body: "حول سن 10-12، كثير من المتعلمين مستعدون للانتقال من الكتل المرئية إلى لغات نصية حقيقية. بايثون جسر مثالي: تُقرأ بسهولة، فيركز الأطفال على حل المشكلات بدل أخطاء الصياغة. هذا أيضًا الوقت المثالي لـ Roblox وتطوير الويب.",
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
    course: {
      slug: "scratch",
      label: "سكراتش للأطفال (7+)",
      body: "دورتنا المباشرة عبر الإنترنت تبني الألعاب والقصص مع الأطفال من سن 7 سنوات — مع تعلم منطق البرمجة الحقيقي.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-is-scratch"],
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
    course: {
      slug: "python",
      label: "بايثون (11+)",
      body: "بايثون مباشرة عبر الإنترنت للأعمار 11+ — من أول سطر برمجة إلى ألعاب واختبارات وتطبيقات صغيرة.",
    },
    related: ["what-is-scratch", "what-is-python-programming"],
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
      "Roblox أم Unity؟ كلتا المنصتين تتيحان للأطفال إنشاء ونشر ألعاب حقيقية، وكلاهما ممتاز للتعلم. لكنهما تخدم أعمارًا وأهدافًا مختلفة. إليك مقارنة صادقة.",
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
    course: {
      slug: "unity-csharp",
      label: "Unity وC# (12+)",
      body: "تطوير ألعاب احترافي بـ Unity وC# — تصميم الآليات وإنجاز مشاريع قابلة للعب (12+).",
    },
    related: ["what-is-roblox-game-development", "what-is-unity-game-development"],
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
        body: "تجمع الفصول المباشرة بين طاقة معلم حقيقي وحرية التعلم من المنزل. لا تنقل ولا انتظار، ويمكن للمتعلمين الانضمام من أي مكان في المغرب. التعليم المباشر الموجه يتفوق على مشاهدة الدروس المسجلة، لأن المعلم يرى أين يتعثر المتعلم بالضبط.",
      },
      {
        heading: "ماذا يجب أن تتضمن الدورة الجيدة",
        body: "أربعة أشياء: منهاج منظم يبني مشاريع حقيقية، مجموعة صغيرة، تقارير تقدم للآباء، وشهادة في النهاية. احذر من الوعود بـ'تطبيق في أسبوع' — المهارات الحقيقية تحتاج وقتًا وممارسة.",
      },
      {
        heading: "من الرباط والدار البيضاء وكل المغرب",
        body: "تدرّس أكاديمية Medinova مباشرة عبر الإنترنت من المغرب، وتخدم متعلمين في الرباط والدار البيضاء والقنيطرة وكل البلاد. مؤسسنا يدرّس المسارات المتقدمة مباشرة، وكل دورة قائمة على المشاريع.",
      },
      {
        heading: "كيف تبدأ",
        body: "ابدأ بحصة تجريبية مجانية. لاحظ كيف يتفاعل طفلك: هل هو فضولي؟ هذه الحماسة أفضل مؤشر على النجاح. ثم اختر مسارًا يناسب العمر — سكراتش في 7+، بايثون في 11+، Roblox في 9+، Unity وC# في 12+.",
      },
    ],
    course: {
      slug: "digital-essentials",
      label: "أساسيات الحاسوب (7+)",
      body: "أساسيات الحاسوب وWord وExcel وPowerPoint والاستخدام الآمن للإنترنت — أساس كل مسار آخر (7+).",
    },
    related: ["digital-skills-for-beginners", "what-age-should-kids-start-coding"],
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
      "هناك فرق كبير بين لعبة يمكنك لعبها ولعبة يمكنك نشرها. نشر استوديو Medinova أربع ألعاب على متجر التطبيقات — وقد علمتنا هذه العملية دروسًا تشكّل كل ما ندرّسه.",
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
    course: {
      slug: "unity-csharp",
      label: "Unity وC# (12+)",
      body: "تطوير ألعاب احترافي بـ Unity وC# — تصميم الآليات وإنجاز مشاريع قابلة للعب (12+).",
    },
    related: ["what-is-unity-game-development", "what-is-roblox-game-development"],
  },
  {
    slug: "what-is-scratch",
    title: "ما هي سكراتش؟ لغة البرمجة المرئية للأطفال",
    description:
      "سكراتش لغة برمجة مرئية مجانية أنشأها معهد MIT تعلّم الأطفال منطق البرمجة الحقيقي عبر الكتل الملونة.",
    date: "2026-07-28",
    category: "سكراتش",
    readingTime: "5 دقائق قراءة",
    hero: HERO["what-is-scratch"],
    intro:
      "إذا كنت تبدأ استكشاف البرمجة للأطفال، فسيكون سكراتش أول اسم تقابله. إنها لغة برمجة مرئية مجانية أنشأها معهد ماساتشوستس للتكنولوجيا (MIT) تتيح للأطفال بناء الألعاب والقصص والرسوم المتحركة عبر تركيب كتل ملونة — دون كتابة أكواد.",
    sections: [
      {
        heading: "ما هي سكراتش بالضبط؟",
        body: "سكراتش لغة برمجة تُعبَّر فيها الأوامر بكتل ملونة. بدل كتابة 'تحرك 10 خطوات'، يسحب الطفل كتلة تقول ذلك تمامًا ويُركّبها في مكانها. الكتل تتراص مثل قطع الأحجية، فلا أخطاء كتابية تُحبِط المبتدئ. صُممت في MIT لمساعدة الصغار على التفكير الإبداعي والمنهجي.",
      },
      {
        heading: "المنطق المخفي خلف الكتل",
        body: "خلف الكتل المألوفة توجد المفاهيم نفسها التي يستخدمها كل المبرمجين: التسلسل، والحلقات، والشروط، والأحداث، والمتغيرات. الطفل الذي يتعلم هذه الأفكار بسكراتش يتعلم علوم حاسوب حقيقية — بصيغة مرئية متسامحة.",
      },
      {
        heading: "ماذا يبني الأطفال فعلاً",
        body: "يبدأ معظم المتعلمين بتحريك شخصية وجعلها تتفاعل وتتحدث. ثم يبنون قصصًا متحركة واختبارات وألعاب منصات وحتى تجارب متعددة اللاعبين. مشاريع سكراتش تعمل في المتصفح ويمكن مشاركتها، فيعيش الأطفال متعة المطور: نشر شيء يمكن للآخرين لعبه.",
      },
      {
        heading: "لماذا سكراتش اللغة المثالية للبداية",
        body: "هدف اللغة الأولى هو بناء الثقة والمنطق — لا تعلم قواعد الكتابة. تزيل سكراتش الاحتكاك ليركز طفل في السابعة على التفكير كمبرمج. وعندما ينتقل لاحقًا إلى لغات نصية مثل بايثون، سيعرف المفاهيم بالفعل.",
      },
    ],
    course: {
      slug: "scratch",
      label: "سكراتش للأطفال (7+)",
      body: "دورتنا المباشرة عبر الإنترنت تبني الألعاب والقصص مع الأطفال من سن 7 سنوات — مع تعلم منطق البرمجة الحقيقي.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-age-should-kids-start-coding"],
  },
  {
    slug: "what-is-python-programming",
    title: "ما هي بايثون؟ اللغة المناسبة لبدء البرمجة الحقيقية",
    description:
      "بايثون لغة برمجة نصية حقيقية تستخدمها شركات مثل جوجل ونتفليكس. اكتشف لماذا هي اللغة النصية الأولى المثالية للأطفال والمراهقين.",
    date: "2026-08-01",
    category: "بايثون",
    readingTime: "6 دقائق قراءة",
    hero: HERO["what-is-python-programming"],
    intro:
      "بايثون واحدة من أشهر لغات البرمجة في العالم — ومن أسهلها للمبتدئين. تقف خلف مواقع الويب وعلوم البيانات والذكاء الاصطناعي والألعاب. للأطفال والمراهقين المستعدين لتجاوز الكتل المرئية، بايثون هي الخطوة الطبيعية التالية.",
    sections: [
      {
        heading: "لغة تُقرأ كالكلام العادي",
        body: "صُممت بايثون لتكون قابلة للقراءة. يستخدم برنامج بايثون كلمات مثل 'print' و'if' و'for' بطريقة قريبة من اللغة اليومية. هذه البساطة تسمح للمبتدئ بالتركيز على حل المشكلات بدل القتال مع قواعد الكتابة.",
      },
      {
        heading: "أين تُستخدم بايثون فعلاً",
        body: "تشغّل بايثون بعض البرمجيات الأكثر استخدامًا في العالم: مواقع كبيرة وأنظمة توصية وبحثًا علميًا وأدوات ذكاء اصطناعي. تعلم بايثون يمنح الصغار أداة مفيدة حقًا اليوم وفي المستقبل.",
      },
      {
        heading: "ماذا يبني الأطفال ببايثون",
        body: "يبدأ متعلمونا بألعاب نصية واختبارات وبرامج صغيرة تحل مشكلات حقيقية. ومع التقدم يتعلمون الدوال والحلقات والخوارزميات — لبنات البرمجة الجادة — وينجزون مشاريع يمكن عرضها للعائلة والأصدقاء.",
      },
      {
        heading: "متى ننتقل من الكتل إلى بايثون",
        body: "معظم الأطفال جاهزون حوالي سن 11، بعد إتقان منطق البرمجة في لغة مرئية مثل سكراتش. إذا كان الطفل يفهم الحلقات والشروط، فبايثون هي الجسر الأسهل إلى كتابة أكواد حقيقية.",
      },
    ],
    course: {
      slug: "python",
      label: "بايثون (11+)",
      body: "بايثون مباشرة عبر الإنترنت للأعمار 11+ — من أول سطر برمجة إلى ألعاب واختبارات وتطبيقات صغيرة.",
    },
    related: ["scratch-vs-python-where-should-beginners-start", "what-is-web-development"],
  },
  {
    slug: "what-is-roblox-game-development",
    title: "ما هو تطوير ألعاب Roblox؟ بناء العوالم بلغة Lua",
    description:
      "Roblox Studio يتيح للأطفال تصميم عوالم ثلاثية الأبعاد وبرمجتها بلغة Lua — ثم نشر ألعاب يلعبها الملايين.",
    date: "2026-08-05",
    category: "تطوير الألعاب",
    readingTime: "6 دقائق قراءة",
    hero: HERO["what-is-roblox-game-development"],
    intro:
      "Roblox أكثر من منصة ألعاب — إنه محرك كامل لصنع الألعاب. بفضل Roblox Studio، يصمم المبدعون الصغار عوالم ثلاثية الأبعاد ويبرمجونها بلغة برمجة تسمى Lua. وعند الانتهاء، يمكنهم نشر لعبتهم لملايين اللاعبين. هذا المزيج يجعل Roblox من أكثر الطرق تحفيزًا لتعلم البرمجة الحقيقية.",
    sections: [
      {
        heading: "Roblox Studio: محرك الألعاب المجاني",
        body: "Roblox Studio هو الأداة المجانية المستخدمة لصنع تجارب Roblox. يعمل كمحرر ألعاب احترافي: تضع العناصر والتضاريس والإضاءة والشخصيات في مشهد ثلاثي الأبعاد، ثم تضيف القواعد والتفاعلات عبر سكربتات. قوي بما يكفي لمشاريع جادة وسهل للمبتدئين.",
      },
      {
        heading: "Lua: برمجة حقيقية بلطف",
        body: "Lua هي اللغة التي تمنح الحياة لعوالم Roblox. يكتب المتعلمون سكربتات لتحريك الشخصيات وفتح الأبواب وتشغيل قواعد اللعبة. Lua متسامحة ومرئية — يمكنك اختبار تغييراتك فورًا — ما يُبقي المبرمجين الصغار منشغلين.",
      },
      {
        heading: "متعة النشر",
        body: "أكبر ميزة في Roblox هي حلقة التغذية الراجعة. ينشر الطفل لعبة ويرى لاعبين حقيقيين يجربونها. التعليقات والزيارات محفّزة بشكل لا يصدق: وقت الشاشة يتحول إلى وقت إبداع.",
      },
      {
        heading: "المهارات التي يطورها الأطفال",
        body: "تطوير Roblox يعلّم التفكير المكاني وتصميم الألعاب والمنطق وحل المشكلات المنظم. تخطيط عالم، وبناؤه، وبرمجة قواعده، وتحسين التجربة — تمامًا مثل عمل مطور ألعاب محترف.",
      },
    ],
    course: {
      slug: "roblox",
      label: "تطوير ألعاب Roblox (9+)",
      body: "صمّم عوالم ثلاثية الأبعاد، وبرمج أسلوب اللعب بلغة Lua، وانشر تجارب Roblox حقيقية — من سن 9 سنوات.",
    },
    related: ["unity-vs-roblox-which-should-kids-learn", "what-is-unity-game-development"],
  },
  {
    slug: "what-is-unity-game-development",
    title: "ما هو تطوير الألعاب بـ Unity؟ المحرك خلف الألعاب الحقيقية",
    description:
      "Unity هو المحرك الاحترافي الذي تستخدمه الاستوديوهات حول العالم — ويعتمد على C#. اكتشف كيف يتعلم المراهقون تطوير ألعاب حقيقي.",
    date: "2026-08-10",
    category: "تطوير الألعاب",
    readingTime: "7 دقائق قراءة",
    hero: HERO["what-is-unity-game-development"],
    intro:
      "Unity واحد من أكثر محركات الألعاب استخدامًا في العالم — التكنولوجيا خلف ألعاب الجوال والحاسوب والكونسول لا تُحصى. إنها أداة الاستوديوهات الاحترافية، وهي أيضًا المحرك الذي يبني به استوديو Medinova ألعابه وينشرها. تعلم Unity يعني تعلم تطوير الألعاب كما تفعل الصناعة فعلاً.",
    sections: [
      {
        heading: "ما هو Unity فعلاً",
        body: "Unity محرك ألعاب: بيئة متكاملة لصنع ألعاب ثنائية وثلاثية الأبعاد. يتولى الرسوميات والفيزياء والصوت والمدخلات وأدوات تصميم المستويات. يكتب المطورون سلوك اللعبة بلغة C#، وهي لغة احترافية، ويحوّلها Unity إلى لعبة قابلة للعب.",
      },
      {
        heading: "لماذا C# مهمة",
        body: "C# من أكثر اللغات طلبًا في تطوير البرمجيات. تعلم Unity يعني تعلم برمجة حقيقية: الفئات والكائنات والدوال والأحداث — البرمجة الكائنية المستخدمة في كل مكان. مهارة هندسية حقيقية بشكل ممتع.",
      },
      {
        heading: "ميزة الاستوديو",
        body: "في Medinova، Unity ليس مجرد موضوع دراسي — إنه محرك الإنتاج لدينا. نشرنا ألعابنا الخاصة المبنية بـ Unity، فعندما نعلّم، يتبع المتعلمون خط الإنتاج نفسه: تصميم الآليات، وبرمجة أسلوب اللعب، واختبار ونشر مشروع نهائي قابل للعب.",
      },
      {
        heading: "لمن يناسب Unity",
        body: "منحنى تعلم Unity أكثر صعوبة من الأدوات المرئية، لذلك نوصي به من حوالي 12 سنة. المتعلمون الجادون يجدون أن Unity يحوّل الهواية إلى مجموعة مهارات حقيقية قابلة للنقل.",
      },
    ],
    course: {
      slug: "unity-csharp",
      label: "Unity وC# (12+)",
      body: "تطوير ألعاب احترافي بـ Unity وC# — تصميم الآليات وإنجاز مشاريع قابلة للعب (12+).",
    },
    related: ["unity-vs-roblox-which-should-kids-learn", "how-we-published-4-games-on-the-app-store"],
  },
  {
    slug: "what-is-web-development",
    title: "ما هو تطوير الويب؟ بناء مواقع حقيقية خطوة بخطوة",
    description:
      "تطوير الويب هو كيفية بناء المواقع — بـ HTML وCSS وJavaScript والمزيد. إليك ما يتعلمه الأطفال والمراهقون في هذا المسار.",
    date: "2026-08-14",
    category: "تطوير الويب",
    readingTime: "6 دقائق قراءة",
    hero: HERO["what-is-web-development"],
    intro:
      "كل موقع زرته بناه مطور ويب. تطوير الويب هو حرفة إنشاء المواقع وتطبيقات الويب بلغات مثل HTML وCSS وJavaScript وPHP. للأطفال والمراهقين، هو من أكثر مسارات البرمجة عملية — لأن النتيجة مرئية وقابلة للمشاركة ومفيدة فورًا.",
    sections: [
      {
        heading: "اللغات الثلاث للواجهة الأمامية",
        body: "كل صفحة ويب تُبنى بثلاث لغات. HTML يهيكل المحتوى — العناوين والفقرات والصور. CSS ينسقه — الألوان والخطوط والتخطيطات. JavaScript يجعله تفاعليًا — أزرار تستجيب وقوائم تفتح ومحتوى يتغير. معًا يحولون مستندًا إلى تجربة.",
      },
      {
        heading: "خلف الكواليس: الواجهة الخلفية",
        body: "عندما يحفظ موقع بيانات — تسجيل دخول أو تعليق أو سلة مشتريات — يحتاج واجهة خلفية. تقنيات مثل PHP وMySQL تخزن المعلومات وتسترجعها وتديرها في قاعدة بيانات. تعلم التطوير الكامل يعني فهم رحلة النقرة كلها من المتصفح إلى الخادم والعودة.",
      },
      {
        heading: "لماذا مهارات الويب عملية جدًا",
        body: "الويب في كل مكان والمهارات قابلة للنقل. مراهق يتعلم HTML وCSS وJavaScript وPHP وMySQL يستطيع بناء مواقع حقيقية متصلة بقواعد البيانات: ملف شخصي أو منصة مدرسية أو موقع شركة صغيرة. إنها من أسرع الطرق من التعلم إلى البناء.",
      },
      {
        heading: "كيف يعمل المسار",
        body: "يبدأ المتعلمون بـ HTML وCSS لإنشاء الصفحات، ثم يضيفون JavaScript للتفاعلية، ثم ينتقلون إلى PHP وMySQL للبيانات. كل خطوة تنتج شيئًا حقيقيًا.",
      },
    ],
    course: {
      slug: "web-development",
      label: "تطوير الويب (11+)",
      body: "HTML وCSS وJavaScript وPHP وMySQL — بناء مواقع حقيقية متصلة بقواعد البيانات (11+).",
    },
    related: ["what-is-python-programming", "what-is-creative-design"],
  },
  {
    slug: "what-is-creative-design",
    title: "ما هو التصميم الإبداعي؟ 3D وصور وفيديو للمبدعين الصغار",
    description:
      "التصميم الإبداعي يجمع التكنولوجيا والخيال: إنشاء ثلاثي الأبعاد وتحرير الصور والفيديو. اكتشف ما يصنعه الأطفال في هذا المسار.",
    date: "2026-08-18",
    category: "التصميم الإبداعي",
    readingTime: "6 دقائق قراءة",
    hero: HERO["what-is-creative-design"],
    intro:
      "ليس كل المبدعين الصغار يريدون كتابة أكواد — بعضهم يريد التصميم. التصميم الإبداعي هو المجال الذي يمنح الحياة للأفكار عبر الإنشاء ثلاثي الأبعاد وتحرير الصور وإنتاج الفيديو. إنه التكنولوجيا والخيال يعملان معًا.",
    sections: [
      {
        heading: "ثلاث أدوات ومسار إبداعي واحد",
        body: "يشمل التصميم الإبداعي ثلاث حرف مترابطة. الإنشاء ثلاثي الأبعاد يسمح للمتعلمين بنمذجة الأجسام والمشاهد للألعاب والرسوم المتحركة وتصميم المنتجات. تحرير الصور يحوّل اللقطات إلى أعمال بصرية مصقولة. مونتاج الفيديو يحوّل المقاطع إلى قصص بالقص والمؤثرات والعناوين والصوت.",
      },
      {
        heading: "التفكير التصميمي عمليًا",
        body: "خلف الأدوات، يعلّم التصميم الإبداعي التفكير التصميمي: تخطيط فكرة، والتكرار، واختيار الألوان والتكوين، والتحسين حتى الكمال. هذه هي مهارات المصممين في كل الصناعات — وتتكامل تمامًا مع البرمجة.",
      },
      {
        heading: "إلى أين يقود",
        body: "يمكن للمصممين الصغار إنشاء عناصر ألعاب ومشاهد متحركة ومحتوى اجتماعي وقطع لعرض إنجازاتهم. وبدمجها مع مسار برمجة، تصنع مهارات التصميم مبدعًا متكاملًا قادرًا على تخيل مشروع وبنائه.",
      },
      {
        heading: "كيف يبدأ المتعلمون",
        body: "يبدأ المبتدئون بمشاريع بسيطة ممتعة: نمذجة جسم ثلاثي الأبعاد، أو تحسين صورة، أو مونتاج فيديو قصير. الأدوات مجانية ومناسبة للمبتدئين، وكل حصة تنتج شيئًا يفخر المتعلم بمشاركته.",
      },
    ],
    course: {
      slug: "creative-design",
      label: "التصميم الإبداعي (10+)",
      body: "إنشاء ثلاثي الأبعاد وتحرير الصور والفيديو — تحويل الأفكار إلى مشاريع رقمية أصلية (10+).",
    },
    related: ["what-is-web-development", "digital-skills-for-beginners"],
  },
  {
    slug: "digital-skills-for-beginners",
    title: "المهارات الرقمية للمبتدئين: الأساسيات التي يحتاجها كل طفل",
    description:
      "قبل البرمجة، يحتاج الأطفال إلى أساسيات رقمية: استخدام الحاسوب وإنشاء المستندات والبقاء آمنين على الإنترنت.",
    date: "2026-07-25",
    category: "المهارات الرقمية",
    readingTime: "5 دقائق قراءة",
    hero: HERO["digital-skills-for-beginners"],
    intro:
      "قبل أن يكتب الطفل أول سطر برمجي، يحتاج إلى الأساس الرقمي الذي يُبنى عليه كل شيء. المهارات الرقمية هي القدرات اليومية: استخدام الحاسوب بثقة، وإنشاء المستندات والعروض التقديمية، والبحث الآمن على الإنترنت، والتصرف الصحيح عبر الإنترنت.",
    sections: [
      {
        heading: "ماذا تعني 'المهارات الرقمية' فعلاً",
        body: "المهارات الرقمية هي القدرات العملية التي نستخدمها مع التكنولوجيا كل يوم. للصغار: التنقل في الحاسوب — الملفات والمجلدات ولوحة المفاتيح — واستخدام التطبيقات الأساسية: معالج النصوص للمستندات، والجداول للبيانات، وبرنامج العروض التقديمية لمشاركة الأفكار. هذه أدوات المدرسة، ولاحقًا، كل مكان عمل تقريبًا.",
      },
      {
        heading: "الأمان والمسؤولية عبر الإنترنت",
        body: "تشمل المهارات الرقمية أيضًا عادات الاستخدام الآمن للإنترنت: معرفة المعلومات الجديرة بالثقة، وحماية كلمات المرور، والسلوك المحترم عبر الإنترنت. هذه العادات تحمي الأطفال اليوم وتبني حكمتهم الرقمية للمستقبل.",
      },
      {
        heading: "لماذا تأتي هذه المهارات أولاً",
        body: "دورات البرمجة والتصميم تفترض راحة أساسية مع الحاسوب. متعلم يكتب بثقة ويدير ملفاته ويبحث جيدًا يستفيد أكثر بكثير من الدورة المتقدمة. المهارات الرقمية هي المنحدر الذي يجعل كل مسار آخر أكثر فاعلية.",
      },
      {
        heading: "من الأساسيات إلى البناء",
        body: "الوقت المناسب للبدء مبكر، من حوالي سن 7 سنوات. الدورات منظمة وهادئة وقائمة على المشاريع: ينجز المتعلمون مشاريع مدرسية حقيقية بالمستندات والجداول والعروض، ثم يتقدمون إلى البرمجة أو الويب أو التصميم بثقة.",
      },
    ],
    course: {
      slug: "digital-essentials",
      label: "أساسيات الحاسوب (7+)",
      body: "أساسيات الحاسوب وWord وExcel وPowerPoint والاستخدام الآمن للإنترنت — أساس كل مسار آخر (7+).",
    },
    related: ["what-age-should-kids-start-coding", "what-is-scratch"],
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