import type { Lang } from "@/lib/i18n";
import type { BlogPost, BlogSection } from "@/lib/blog";

const UPDATED = "2026-11-22";
type GtaDraft = Omit<BlogPost, "hero" | "heroAlt" | "videoId" | "videoTitle">;
type GtaMedia = {
  hero: string;
  heroAlt: Record<Lang, string>;
  videoId?: string;
  videoTitle?: string;
};

const PC_VIDEO = "https://www.rockstargames.com/VI";
const PLAYSTATION = "https://www.playstation.com/en-us/games/grand-theft-auto-vi/";
const IGN_TIPS =
  "https://www.ign.com/wikis/gta-6/Beginner%27s_Guide_-_67_Tips_and_Tricks";
const IGN_COLLECTIONS =
  "https://www.ign.com/wikis/gta-6/Collectibles_and_Collections";
const IGN_AHOL = "https://www.ign.com/wikis/gta-6/Ahol_Street_Art";
const TRAILER_1 = "https://www.youtube.com/watch?v=QdBZY2fkU-0";
const COVER_ART_REVEAL = {
  id: "EiQEBYDox_k",
  title: "Grand Theft Auto VI: Official Cover Art Reveal",
};
const EXTENDED_LOOK = {
  id: "tJbzMqJGH4k",
  title: "Grand Theft Auto VI: An Extended Look",
};
const OUT_NOW = {
  id: "_yl5ELcmugI",
  title: "Grand Theft Auto VI: Out Now",
};
const LAUNCH_TRAILER = {
  id: "rz1B4B2yBZY",
  title: "Grand Theft Auto VI Launch Trailer",
};
const GTA_MEDIA: Record<string, GtaMedia> = {
  "gta-6-pc-port-news": {
    hero: "/images/blog/gta-6-pc-port-news.svg",
    heroAlt: {
      en: "Illustration of a PC gaming setup with an open-world scene and an unconfirmed platform status",
      fr: "Illustration d'un PC de jeu avec un monde ouvert et un statut de plateforme non confirmé",
      ar: "رسم توضيحي لحاسوب ألعاب يعرض عالمًا مفتوحًا مع حالة غير مؤكدة لإصدار الحاسوب",
    },
    videoId: COVER_ART_REVEAL.id,
    videoTitle: COVER_ART_REVEAL.title,
  },
  "gta-6-ps5-vs-xbox-performance": {
    hero: "/images/blog/gta-6-ps5-vs-xbox-performance.svg",
    heroAlt: {
      en: "Illustration comparing two consoles, controllers, and performance graphs",
      fr: "Illustration comparant deux consoles, leurs manettes et des graphiques de performances",
      ar: "رسم توضيحي يقارن بين جهازَي ألعاب ووحدات التحكم ومخططات الأداء",
    },
    videoId: EXTENDED_LOOK.id,
    videoTitle: EXTENDED_LOOK.title,
  },
  "gta-6-price-in-morocco": {
    hero: "/images/blog/gta-6-price-in-morocco.svg",
    heroAlt: {
      en: "Illustration of a Moroccan regional game-store listing being checked for its price",
      fr: "Illustration de la vérification du prix d'un jeu sur une boutique régionale marocaine",
      ar: "رسم توضيحي للتحقق من سعر لعبة في متجر مغربي إقليمي",
    },
    videoId: OUT_NOW.id,
    videoTitle: OUT_NOW.title,
  },
  "gta-6-beginners-tips": {
    hero: "/images/blog/gta-6-beginners-tips.svg",
    heroAlt: {
      en: "Illustration of a controller, beginner checklist, and open-world map",
      fr: "Illustration d'une manette, d'une liste de conseils pour débutants et d'une carte ouverte",
      ar: "رسم توضيحي لوحدة تحكم وقائمة نصائح للمبتدئين وخريطة عالم مفتوح",
    },
    videoId: LAUNCH_TRAILER.id,
    videoTitle: LAUNCH_TRAILER.title,
  },
  "gta-6-hidden-locations-secrets": {
    hero: "/images/blog/gta-6-hidden-locations-secrets.svg",
    heroAlt: {
      en: "Illustration of a Leonida map with a magnifying glass and hidden collectible markers",
      fr: "Illustration d'une carte de Leonida avec une loupe et des marqueurs de collectibles cachés",
      ar: "رسم توضيحي لخريطة ليونيدا مع عدسة مكبرة وعلامات مقتنيات مخفية",
    },
    videoId: "QdBZY2fkU-0",
    videoTitle: "Grand Theft Auto VI Trailer 1 — Rockstar Games",
  },
  "gta-6-giveaways-free-codes": {
    hero: "/images/blog/gta-6-giveaway-check.svg",
    heroAlt: {
      en: "Illustration of a gift box and verified check for a GTA 6 giveaway safety guide",
      fr: "Illustration d'un cadeau et d'une coche de vérification pour un guide sur les concours GTA 6",
      ar: "رسم لصندوق هدية وعلامة تحقق لدليل التحقق من مسابقات GTA 6",
    },
  },
  "gta-6-editions-standard-vs-ultimate": {
    hero: "/images/blog/gta-6-editions-guide.svg",
    heroAlt: {
      en: "Illustration comparing two game editions with a standard card and bonus items",
      fr: "Illustration comparant deux éditions de jeu avec une version standard et des bonus",
      ar: "رسم يقارن بين إصدارين للعبة مع نسخة أساسية وعناصر إضافية",
    },
  },
  "gta-6-online-multiplayer-status": {
    hero: "/images/blog/gta-6-online-multiplayer-status.svg",
    heroAlt: {
      en: "Illustration separating a confirmed single-player experience from an unconfirmed online mode",
      fr: "Illustration distinguant une expérience solo confirmée d'un mode en ligne non confirmé",
      ar: "رسم توضيحي يميز بين تجربة فردية مؤكدة ونمط لعب عبر الإنترنت غير مؤكد",
    },
  },
  "gta-6-leonida-pc-recompilation-project": {
    hero: "/images/blog/gta-6-leonida-pc-project.svg",
    heroAlt: {
      en: "Original illustration of the Leonida source-code project beside a game display marked not booting",
      fr: "Illustration originale du code source de Leonida à côté d'un écran indiquant que le jeu ne démarre pas",
      ar: "رسم أصلي لمشروع شيفرة Leonida بجانب شاشة لعبة تشير إلى أنها لا تعمل",
    },
  },
};

function withGtaMedia(posts: GtaDraft[], lang: Lang): BlogPost[] {
  return posts.map((post) => {
    const media = GTA_MEDIA[post.slug];
    if (!media) {
      throw new Error(`Missing GTA article media for "${post.slug}"`);
    }

    const sections = [...post.sections, ...(EXTRA_SECTIONS[lang][post.slug] ?? [])];
    const words = [
      post.intro,
      ...sections.flatMap((section) => [
        section.heading,
        section.body,
        section.bodyAfter ?? "",
        ...(section.bullets ?? []),
        ...(section.steps ?? []),
      ]),
    ].join(" ").trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 180));

    return {
      ...post,
      sections,
      readingTime:
        lang === "fr"
          ? `${minutes} min de lecture`
          : lang === "ar"
            ? `${minutes} دقائق قراءة`
            : `${minutes} min read`,
      hero: media.hero,
      heroAlt: media.heroAlt[lang],
      videoId: media.videoId,
      videoTitle: media.videoTitle,
    };
  });
}

const sources = {
  pc: [
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
    { label: "Rockstar Games Newswire", url: "https://www.rockstargames.com/newswire" },
    { label: COVER_ART_REVEAL.title, url: `https://www.youtube.com/watch?v=${COVER_ART_REVEAL.id}` },
  ],
  console: [
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
    { label: "PlayStation — Grand Theft Auto VI", url: PLAYSTATION },
    { label: EXTENDED_LOOK.title, url: `https://www.youtube.com/watch?v=${EXTENDED_LOOK.id}` },
  ],
  price: [
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
    { label: "PlayStation Store — official storefront", url: "https://store.playstation.com/" },
    { label: OUT_NOW.title, url: `https://www.youtube.com/watch?v=${OUT_NOW.id}` },
  ],
  tips: [
    { label: "IGN — GTA VI beginner's guide and tips", url: IGN_TIPS },
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
    { label: LAUNCH_TRAILER.title, url: `https://www.youtube.com/watch?v=${LAUNCH_TRAILER.id}` },
  ],
  secrets: [
    { label: "IGN — GTA VI collectibles and collections guide", url: IGN_COLLECTIONS },
    { label: "IGN — Ahol Street Art locations guide", url: IGN_AHOL },
    { label: "Rockstar Games — official Trailer 1", url: TRAILER_1 },
  ],
  giveaways: [
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
    {
      label: "YouTube — Contest policies and guidelines",
      url: "https://support.google.com/youtube/answer/1620498?hl=en",
    },
    {
      label: "YouTube — Spam, deceptive practices, and scams policy",
      url: "https://support.google.com/youtube/answer/2801973?hl=en",
    },
  ],
  editions: [
    { label: "PlayStation — Grand Theft Auto VI editions and features", url: PLAYSTATION },
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
  ],
  online: [
    { label: "PlayStation — Grand Theft Auto VI player and offline details", url: PLAYSTATION },
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
  ],
  leonida: [
    { label: "Leonida project repository and status", url: "https://github.com/ItsNotRexed/Leonida" },
    { label: "Leonida repository releases", url: "https://github.com/ItsNotRexed/Leonida/releases" },
    { label: "Xbox2Windows research project", url: "https://github.com/R0Y00/Xbox2Windows" },
    { label: "GTA VI PC port coordination hub", url: "https://github.com/fishingpvalues/gta6-pc-port-hub" },
    { label: "PortWatch VI community tracker", url: "https://github.com/4lwayz/portwatch-vi" },
    { label: "Hacker News discussion", url: "https://news.ycombinator.com/item?id=50595168" },
    { label: "Reddit discussion shared by readers", url: "https://www.reddit.com/r/FitGirlRepack/comments/1y258g2/leonida_recomilation_tool_for_gta_vi/" },
    { label: "Rockstar Games — Grand Theft Auto VI", url: PC_VIDEO },
  ],
};

const EXTRA_SECTIONS: Record<Lang, Record<string, BlogSection[]>> = {
  en: {
    "gta-6-pc-port-news": [
      {
        heading: "How to tell a real PC announcement from a rumor",
        body:
          "A reliable announcement should be traceable to Rockstar, name the supported storefront or platform, and provide details that can be checked independently. A date printed on a thumbnail is not a release schedule, and a supposed system-requirements chart is not official just because it looks polished. Check the original post URL, publication date, publisher account, and whether reputable outlets link back to the same primary source. If all roads lead to an anonymous screenshot, treat the claim as unverified. This approach helps PC players avoid planning purchases around a date or specification that may never have been announced.",
      },
      {
        heading: "What PC players can prepare without buying on speculation",
        body:
          "There is no need to replace a graphics card or buy a new computer based on guessed GTA 6 PC requirements. Keep your operating system and drivers maintained, leave enough free storage for the games you already play, and wait for Rockstar to publish actual requirements before comparing hardware. If you are considering a future upgrade anyway, base it on independent tests for games that are available now and on your monitor's resolution—not a rumored GTA benchmark. Revisit this page after an official PC listing appears; until then, the honest answer to searches for a GTA 6 PC release date is that Rockstar has not listed one on the checked page.",
      },
    ],
    "gta-6-ps5-vs-xbox-performance": [
      {
        heading: "What PS5 Pro Enhanced does—and does not—tell you",
        body:
          "PlayStation describes the game as PS5 Pro Enhanced and highlights PSSR and ray-traced shadows on its product page. That is useful information for someone choosing hardware, but the label alone does not state the frame rate, output resolution, or whether every visual feature is exclusive to Pro. Those details need a technical test or explicit developer documentation. Compare the standard PS5, PS5 Pro, Xbox Series X, and Series S separately; do not combine results from different models into one console-wide claim. A fair review should also say which display mode was selected and whether the test was run before or after a game update.",
      },
      {
        heading: "A practical checklist for reading performance reviews",
        body:
          "Before trusting a GTA 6 console comparison, look for captured gameplay rather than trailer footage, repeatable scenes rather than a single busy moment, and a named game version. Check whether frame pacing and dips are discussed alongside average frames per second, since a high average can hide stutter. Resolution claims should distinguish native rendering from reconstruction, and image-quality comparisons should use the same scene and display conditions. For loading tests, the reviewer should explain what was timed and whether the console was already warm or the game had been restarted. These details turn a PS5-versus-Xbox headline into evidence you can use.",
      },
    ],
    "gta-6-price-in-morocco": [
      {
        heading: "Calculate the total cost, not only the listed game price",
        body:
          "For a purchase in Morocco, compare the complete amount you will actually pay: the edition, the retailer's final price, any delivery or payment fees, and whether you need a console or extra storage. Digital and disc offers can differ, and a discounted headline may refer to a different edition, a used copy, or an account rather than a redeemable game license. Ask the seller to identify the exact platform and edition in writing. Keep the receipt and confirm that the product appears in your own account or works on your own console before considering the transaction complete. This is more useful than converting a foreign store price into dirhams and treating it as a local quote.",
      },
      {
        heading: "Check region, warranty, and return terms before paying",
        body:
          "A code or disc can have region, language, and account restrictions. Confirm that a digital code is redeemable in the country attached to your account, and do not change your account country just to use a code unless the platform's own rules allow it. For a physical copy, ask whether the disc is new or used, what language options it includes, and how the shop handles a defective item or a sealed-game return. Avoid buying access through a shared account: the seller may later recover it, and you may not own a transferable license. A trustworthy Moroccan price guide should state its seller, edition, currency, and check date; without those details, price claims can quickly become misleading.",
      },
    ],
    "gta-6-beginners-tips": [
      {
        heading: "Build a relaxed first-session routine",
        body:
          "You do not need to clear every icon or collectible the moment it appears. Start by learning the map, checking the pause menu, and trying controls in a low-pressure area. When you reach a new neighborhood, note a landmark, a route back, and any services you discover. If an activity feels confusing, leave it and return later rather than repeatedly spending supplies or money on it. Keep a small personal note of questions you want to test; this gives exploration a purpose without turning the game into a checklist. These beginner tips are about making the opening hours easier to understand, not prescribing one correct way to play the story.",
      },
      {
        heading: "Set expectations for story, difficulty, and age rating",
        body:
          "GTA VI is presented by PlayStation as a single-player experience, so you can focus on its story and world without needing to coordinate a multiplayer group. The same product information includes an adult rating; check the rating authority used in your country and decide whether the content is appropriate for the person who will play. Make comfort changes early—such as audio levels, display options, or control preferences—then adjust them as you learn what works. Avoid guides that promise secret shortcuts or guaranteed rewards unless they explain the game version and show a reproducible method. A calm, spoiler-light start often helps more than racing through somebody else's route.",
      },
    ],
    "gta-6-hidden-locations-secrets": [
      {
        heading: "Explore collectibles without turning the map into homework",
        body:
          "Choose one collection type at a time and let the game lead you to nearby discoveries. After finding a scan, artwork, or unusual item, check the collection menu and write down the district or landmark rather than trying to memorize every street. If you are exploring on foot, look at alleys, waterfront edges, and the backs of buildings; when travelling by vehicle, slow down near places that look different from the main road. Use a full map only when you want a completion route, and decide in advance whether you are comfortable with spoilers. This method keeps the GTA 6 secrets hunt satisfying while reducing repeated backtracking.",
      },
      {
        heading: "Separate confirmed discoveries from player speculation",
        body:
          "A strange detail in a trailer or a social-media screenshot can be a clue, but it is not automatically a hidden mission or collectible. Check whether the image comes from current gameplay, whether another player can reproduce the discovery, and whether a guide identifies the game version and exact conditions. Community maps are useful navigation aids, not official Rockstar confirmations; counts and routes can change as new findings are checked. When a guide is marked incomplete, treat its list as a work in progress. We focus on exploration systems and examples that have a cited reference rather than presenting every theory about Leonida as fact.",
      },
    ],
    "gta-6-giveaways-free-codes": [
      {
        heading: "Use a five-point check before entering a creator giveaway",
        body:
          "First, confirm the post is on the creator's established account, not a lookalike with a slightly different handle. Second, read the public rules for the exact prize, platform, region, deadline, eligibility, and winner-selection method. Third, make sure entry is free and does not ask you to buy something or manipulate views, likes, or subscriptions. Fourth, verify how the winner will be contacted and announced; a private message asking for a fee or password is not proof. Fifth, follow the link from the creator's own profile rather than from unsolicited comments. If any step is missing, pause and ask the organizer through a known official channel before sharing even basic personal details.",
      },
      {
        heading: "Why this page does not list a made-up free code",
        body:
          "A redeemable game code is issued for a specific platform, region, and product, so a screenshot or a string of characters cannot establish that it is genuine or unused. We found search results using giveaway language, but did not find verifiable official rules from a major creator that let us responsibly list an active GTA 6 prize. That can change; check the creator's verified channels and the official storefront for current information. We will only add a named promotion when its source, terms, prize, and status can be confirmed. Until then, treat claims of a universal GTA 6 free-code generator as unverified, and never enter an account password to test one.",
      },
    ],
  },
  fr: {
    "gta-6-leonida-pc-recompilation-project": [
      {
        heading: "Une deuxième initiative liée à GTA VI : Xbox2Windows",
        body:
          "Xbox2Windows étudie également la recompilation de code Xbox Series vers Windows. Son dépôt décrit des programmes de test compilés depuis les sources et des expériences sur certains shaders, mais précise que l'exécutable de GTA VI était absent du package examiné ; le démarrage du jeu complet et sa fréquence d'images restent non vérifiés. Ces expériences représentent un travail d'ingénierie intéressant, mais ne prouvent pas que GTA VI démarre. Un programme de test ou un shader traduit valide un composant, pas un jeu fonctionnel.",
      },
      {
        heading: "Ce que représentent les trackers et autres projets Xbox",
        body:
          "GTA VI PC Port Hub et PortWatch VI sont des index et trackers communautaires, pas des portages ni des jeux à télécharger. Le hub recense des projets plus généraux de compatibilité Xbox-Windows ; certains font tourner d'autres jeux ou des programmes de test, ce qui ne les transforme pas en portages de GTA VI. Leurs résumés sont des pistes utiles, pas une vérification indépendante. Dans les dépôts examinés, Leonida et Xbox2Windows décrivent explicitement un travail de recompilation de GTA VI, et aucun n'annonce de version jouable. Cette recherche est un état des lieux ciblé, pas la preuve qu'aucun autre projet n'existe.",
      },
    ],
    "gta-6-pc-port-news": [
      {
        heading: "Distinguer une annonce PC réelle d'une rumeur",
        body:
          "Une annonce fiable doit renvoyer à Rockstar, nommer une boutique ou une plateforme et fournir des informations vérifiables indépendamment. Une date sur une miniature n'est pas un calendrier de sortie, et un tableau de configuration n'est pas officiel simplement parce qu'il semble professionnel. Vérifiez l'URL de la publication d'origine, sa date, le compte éditeur et les liens vers la source primaire dans les médias reconnus. Si toutes les pistes aboutissent à une capture anonyme, l'affirmation reste non vérifiée. Cette méthode évite aux joueurs PC de prévoir un achat autour d'une date ou de caractéristiques qui n'ont peut-être jamais été annoncées.",
      },
      {
        heading: "Ce que les joueurs PC peuvent préparer sans spéculer",
        body:
          "Il n'est pas nécessaire de remplacer une carte graphique ou d'acheter un PC en fonction de configurations GTA 6 supposées. Maintenez votre système et vos pilotes à jour, gardez de l'espace pour les jeux que vous utilisez déjà et attendez la publication de véritables exigences par Rockstar. Si vous envisagez une mise à niveau, fondez-la sur des tests indépendants de jeux disponibles et sur la résolution de votre écran, pas sur un benchmark GTA inventé. Revenez ici lorsqu'une fiche PC officielle sera publiée ; jusque-là, Rockstar n'a pas indiqué de date PC sur la page consultée.",
      },
    ],
    "gta-6-ps5-vs-xbox-performance": [
      {
        heading: "Ce que signifie PS5 Pro Enhanced, et ses limites",
        body:
          "PlayStation décrit le jeu comme PS5 Pro Enhanced et mentionne PSSR ainsi que des ombres avec ray tracing sur sa fiche produit. Cette information aide au choix du matériel, mais le label ne précise pas à lui seul la fréquence d'images, la résolution de sortie ni les fonctions réservées à la Pro. Il faut des tests techniques ou une documentation explicite du développeur pour répondre. Comparez séparément PS5 standard, PS5 Pro, Xbox Series X et Series S ; ne regroupez pas les résultats de plusieurs modèles sous une seule affirmation. Un test sérieux précise aussi le mode d'affichage et la version du jeu utilisée.",
      },
      {
        heading: "Lire un test de performances avec méthode",
        body:
          "Avant de croire un comparatif GTA 6, cherchez des séquences de jeu plutôt que des bandes-annonces, des scènes répétables plutôt qu'un seul passage chargé et une version du jeu clairement indiquée. Vérifiez si le test parle de régularité et de saccades en plus de la moyenne d'images par seconde. Les chiffres de résolution doivent distinguer l'affichage natif de la reconstruction. Pour le chargement, l'auteur doit expliquer ce qui a été chronométré et si le jeu a été relancé. Ces détails transforment un titre PS5 contre Xbox en informations réellement utiles.",
      },
    ],
    "gta-6-price-in-morocco": [
      {
        heading: "Calculer le coût total, pas seulement le prix affiché",
        body:
          "Pour un achat au Maroc, comparez le montant réellement payé : édition choisie, prix final du vendeur, frais de livraison ou de paiement et éventuel besoin d'une console ou de stockage supplémentaire. Les offres numériques et physiques diffèrent ; un prix promotionnel peut concerner une autre édition, un disque d'occasion ou un compte plutôt qu'une licence que vous pouvez utiliser. Demandez au vendeur de confirmer la plateforme et l'édition par écrit. Gardez le reçu et vérifiez que le jeu apparaît sur votre propre compte ou fonctionne sur votre console. Convertir un prix étranger en dirhams ne suffit pas pour en faire un tarif local.",
      },
      {
        heading: "Vérifier la région, la garantie et les retours",
        body:
          "Un code ou un disque peut être limité par région, langue ou compte. Confirmez qu'un code numérique peut être utilisé dans le pays associé à votre compte et ne modifiez pas sa région sans vérifier les règles de la plateforme. Pour un disque, demandez s'il est neuf ou d'occasion, les langues disponibles et les conditions en cas de produit défectueux ou de retour. Évitez les comptes partagés : le vendeur peut en reprendre l'accès et vous ne possédez pas une licence transférable. Un guide de prix sérieux indique le vendeur, l'édition, la devise et la date de vérification ; sans cela, les tarifs deviennent vite trompeurs.",
      },
    ],
    "gta-6-beginners-tips": [
      {
        heading: "Organiser une première session sans pression",
        body:
          "Vous n'avez pas besoin de terminer chaque icône ou collection dès qu'elle apparaît. Commencez par comprendre la carte, consulter le menu pause et tester les commandes dans une zone tranquille. Dans un nouveau quartier, retenez un repère, un chemin de retour et les services que vous découvrez. Si une activité vous semble difficile, laissez-la de côté et revenez plus tard au lieu de dépenser plusieurs fois des ressources ou de l'argent. Notez les questions que vous souhaitez tester : l'exploration aura ainsi un objectif sans devenir une liste de tâches. Ces conseils GTA 6 visent à faciliter les premières heures, pas à imposer une façon unique de jouer.",
      },
      {
        heading: "Tenir compte de l'histoire et de la classification par âge",
        body:
          "PlayStation présente GTA VI comme une expérience solo ; vous pouvez donc vous concentrer sur l'histoire et le monde sans organiser de groupe multijoueur. La fiche du jeu indique aussi une classification adulte. Consultez celle qui s'applique dans votre pays et décidez si le contenu convient à la personne qui jouera. Ajustez tôt les options de confort, comme le son, l'affichage ou les commandes, puis modifiez-les selon vos préférences. Méfiez-vous des guides promettant des raccourcis secrets ou des récompenses garanties sans préciser la version du jeu ni une méthode reproductible. Un départ calme, sans spoilers, est souvent plus agréable qu'un itinéraire suivi à toute vitesse.",
      },
    ],
    "gta-6-hidden-locations-secrets": [
      {
        heading: "Découvrir les collections sans transformer la carte en devoir",
        body:
          "Choisissez une catégorie de collection à la fois et laissez le jeu vous guider vers les découvertes proches. Après un scan, une œuvre ou un objet inhabituel, vérifiez le menu des collections et retenez le quartier ou le repère au lieu d'essayer de mémoriser chaque rue. À pied, regardez les ruelles, le bord de l'eau et l'arrière des bâtiments ; en voiture, ralentissez près des lieux qui se distinguent de la route principale. N'utilisez une carte complète que si vous souhaitez suivre un itinéraire de complétion, et décidez d'abord si les spoilers vous conviennent. Cette méthode rend la chasse aux secrets GTA 6 plus agréable et limite les allers-retours.",
      },
      {
        heading: "Séparer les découvertes confirmées des théories",
        body:
          "Un détail étrange dans une bande-annonce ou une capture peut être un indice, mais pas automatiquement une mission secrète ou un objet à collectionner. Vérifiez que l'image vient d'une partie réelle, qu'un autre joueur peut reproduire la découverte et que le guide précise la version du jeu et les conditions exactes. Les cartes communautaires aident à se repérer, mais ne constituent pas une confirmation de Rockstar ; les nombres et itinéraires évoluent lorsque de nouvelles trouvailles sont vérifiées. Si une liste est indiquée comme incomplète, considérez-la comme un travail en cours. Nous privilégions les systèmes d'exploration et les exemples associés à une source plutôt que de présenter chaque théorie sur Leonida comme un fait.",
      },
    ],
    "gta-6-giveaways-free-codes": [
      {
        heading: "Vérifier cinq points avant de participer à un concours",
        body:
          "Premièrement, vérifiez que la publication vient du compte habituel du créateur, et non d'une imitation au nom presque identique. Deuxièmement, lisez les règles publiques : lot exact, plateforme, région, date limite, critères et méthode de tirage. Troisièmement, assurez-vous que la participation est gratuite et ne demande pas d'achat ni de manipulation des vues, mentions J'aime ou abonnements. Quatrièmement, vérifiez comment le gagnant sera contacté et annoncé ; un message privé qui demande un paiement ou un mot de passe n'est pas une preuve. Enfin, ouvrez le lien depuis le profil du créateur plutôt que depuis un commentaire non sollicité. Si une étape manque, demandez confirmation par un canal officiel connu avant de transmettre des données personnelles.",
      },
      {
        heading: "Pourquoi cette page n'invente pas de code gratuit",
        body:
          "Un code de jeu correspond à une plateforme, une région et un produit précis. Une capture ou une suite de caractères ne prouve ni son authenticité ni qu'il n'a jamais été utilisé. Nous avons trouvé des résultats de recherche qui parlent de concours, mais pas de règlement officiel vérifiable d'un grand créateur permettant de répertorier honnêtement un lot GTA 6 actif. Cela peut changer : consultez les comptes vérifiés du créateur et la boutique officielle. Nous n'ajouterons une promotion nommée que lorsque sa source, ses conditions, son lot et son état seront confirmés. En attendant, considérez les générateurs de codes GTA 6 universels comme non vérifiés et ne saisissez jamais votre mot de passe pour les tester.",
      },
    ],
  },
  ar: {
    "gta-6-leonida-pc-recompilation-project": [
      {
        heading: "جهد آخر يخص GTA VI: مشروع Xbox2Windows",
        body:
          "يدرس مشروع Xbox2Windows أيضًا إعادة تجميع شيفرة Xbox Series لتعمل على Windows. يوثق مستودعه برامج اختبار بُنيت من المصدر وتجارب على بعض المظللات الرسومية، لكنه يقول إن الملف التنفيذي للعبة GTA VI لم يكن موجودًا في الحزمة التي فحصها؛ لذلك لم يتم التحقق من تشغيل اللعبة كاملة أو معدل إطاراتها. هذه تجارب هندسية مهمة، لكنها لا تثبت أن GTA VI تعمل. نجاح برنامج اختبار أو ترجمة مظلل واحد يثبت مكوّنًا محددًا فقط، لا تشغيل اللعبة.",
      },
      {
        heading: "ما طبيعة مواقع التتبع ومشاريع Xbox الأخرى؟",
        body:
          "يعد كل من GTA VI PC Port Hub وPortWatch VI فهارس ومتابعات يديرها المجتمع، وليسا نسخة منقولة أو لعبة قابلة للتنزيل. يسرد مركز المتابعة مشاريع أوسع لتوافق Xbox مع Windows؛ وبعضها يشغّل ألعابًا أخرى أو برامج اختبار، وهذا لا يجعلها محاولات لتشغيل GTA VI. ملخصاتها مفيدة للعثور على معلومات، لكنها ليست تحققًا مستقلًا. في المستودعات التي راجعناها، يصف Leonida وXbox2Windows صراحةً عملًا لإعادة تجميع GTA VI، ولم يعلن أي منهما عن نسخة قابلة للعب. هذا بحث محدد النطاق وليس دليلًا على عدم وجود مشاريع أخرى في أماكن مختلفة.",
      },
    ],
    "gta-6-pc-port-news": [
      {
        heading: "كيف تميّز إعلان الحاسوب الحقيقي عن الشائعة؟",
        body:
          "ينبغي أن يقودك الإعلان الموثوق إلى Rockstar، وأن يحدد المتجر أو المنصة المدعومة ويعرض تفاصيل يمكن التحقق منها مستقلًا. التاريخ المكتوب على صورة مصغرة ليس جدول إصدار، وجدول متطلبات النظام لا يصبح رسميًا لمجرد أن تصميمه احترافي. تحقق من رابط المنشور الأصلي وتاريخه وحساب الناشر، وابحث عما إذا كانت المواقع الموثوقة تشير إلى المصدر نفسه. إذا انتهت كل الروابط عند لقطة شاشة مجهولة، فاعتبر الادعاء غير مؤكد. تساعد هذه الطريقة لاعبي الحاسوب على تجنب التخطيط لشراء جهاز أو لعبة بناءً على موعد أو مواصفات لم تعلنها Rockstar.",
      },
      {
        heading: "ما الذي يستطيع لاعبو الحاسوب فعله دون شراء عشوائي؟",
        body:
          "لا حاجة لتبديل بطاقة الرسوميات أو شراء حاسوب جديد استنادًا إلى متطلبات GTA 6 المتوقعة. حافظ على تحديث النظام والتعريفات، واترك مساحة للألعاب التي تستخدمها حاليًا، وانتظر نشر Rockstar لمتطلبات حقيقية قبل مقارنة القطع. إذا كنت تخطط للترقية على أي حال، فاعتمد على اختبارات مستقلة لألعاب متوفرة الآن وعلى دقة شاشتك، لا على اختبار GTA مزعوم. عد إلى هذه الصفحة عند ظهور متجر رسمي للحاسوب؛ وحتى ذلك الوقت لا تعرض الصفحة الرسمية التي راجعناها موعدًا لإصدار نسخة الحاسوب من GTA 6.",
      },
    ],
    "gta-6-ps5-vs-xbox-performance": [
      {
        heading: "ماذا تعني عبارة PS5 Pro Enhanced وما حدودها؟",
        body:
          "تصف PlayStation اللعبة بأنها محسّنة لـ PS5 Pro وتشير إلى PSSR والظلال بتقنية تتبع الأشعة في صفحة المنتج. تساعد هذه المعلومة في اختيار الجهاز، لكن العبارة وحدها لا تحدد معدل الإطارات أو دقة الإخراج أو الميزات الحصرية لطراز Pro. تحتاج هذه التفاصيل إلى اختبار تقني أو توثيق صريح من المطور. قارن PS5 العادي وPS5 Pro وXbox Series X وSeries S كلًا على حدة، ولا تجمع نتائج الطرازات في ادعاء واحد. وينبغي للمراجعة الجيدة أن تذكر وضع العرض وإصدار اللعبة الذي اختبرته.",
      },
      {
        heading: "قائمة عملية لقراءة اختبارات الأداء",
        body:
          "قبل تصديق مقارنة GTA 6 بين الأجهزة، ابحث عن لقطات لعب فعلية بدلًا من المقاطع الدعائية، ومشاهد يمكن تكرارها بدلًا من لحظة مزدحمة واحدة، وإصدار واضح للعبة. تحقق مما إذا كان الاختبار يناقش ثبات الإطارات والتقطّع إلى جانب المتوسط؛ فقد يخفي المتوسط المرتفع هبوطًا ملحوظًا. ينبغي لادعاءات الدقة أن تميز بين العرض الأصلي وإعادة البناء، وأن تقارن المشهد نفسه وعلى الشاشة نفسها. أما اختبار التحميل فيجب أن يوضح ما الذي تم توقيته وهل أعيد تشغيل اللعبة. هذه التفاصيل تجعل المقارنة مفيدة لاتخاذ قرار.",
      },
    ],
    "gta-6-price-in-morocco": [
      {
        heading: "احسب التكلفة النهائية لا السعر المكتوب فقط",
        body:
          "عند الشراء في المغرب، قارن المبلغ الذي ستدفعه فعلًا: الإصدار المختار والسعر النهائي ورسوم التوصيل أو الدفع، وما إذا كنت تحتاج إلى جهاز أو مساحة تخزين إضافية. قد تختلف العروض الرقمية عن الأقراص، وقد يكون السعر المخفض لإصدار آخر أو نسخة مستعملة أو حساب وليس ترخيص لعبة يمكن استرداده. اطلب من البائع تأكيد المنصة والإصدار كتابةً. احتفظ بالإيصال وتأكد من ظهور اللعبة في حسابك أو عملها على جهازك قبل اعتبار الشراء مكتملًا. تحويل سعر متجر أجنبي إلى الدرهم لا يجعله عرضًا محليًا.",
      },
      {
        heading: "تحقق من المنطقة والضمان وشروط الإرجاع",
        body:
          "قد يخضع الكود أو القرص لقيود المنطقة واللغة والحساب. تأكد من إمكانية استرداد الكود الرقمي في البلد المرتبط بحسابك، ولا تغير بلد الحساب قبل مراجعة قواعد المنصة. وبالنسبة للقرص، اسأل إن كان جديدًا أو مستعملًا، وما اللغات المتاحة، وكيف يتعامل المتجر مع المنتج المعيب أو الإرجاع. تجنب شراء الوصول عبر حساب مشترك؛ فقد يستعيده البائع ولا تحصل على ترخيص قابل للنقل. يجب أن يذكر دليل الأسعار الموثوق اسم البائع والإصدار والعملة وتاريخ التحقق؛ وبدونها قد تصبح الأسعار مضللة بسرعة.",
      },
    ],
    "gta-6-beginners-tips": [
      {
        heading: "رتب جلسة البداية دون ضغط",
        body:
          "ليس عليك إنهاء كل علامة أو مقتنى فور ظهوره. ابدأ بفهم الخريطة ومراجعة قائمة الإيقاف وتجربة أزرار التحكم في مكان هادئ. عند الوصول إلى حي جديد، تذكر معلمًا وطريقًا للعودة والخدمات التي اكتشفتها. إذا بدا نشاط ما مربكًا، اتركه وعد إليه لاحقًا بدلًا من إنفاق الموارد أو المال عليه مرارًا. دوّن الأسئلة التي تريد تجربتها حتى يصبح للاستكشاف هدف دون أن يتحول إلى قائمة واجبات. تهدف نصائح GTA 6 للمبتدئين إلى تسهيل الساعات الأولى، لا إلى فرض طريقة واحدة للعب القصة.",
      },
      {
        heading: "راعِ القصة والتصنيف العمري",
        body:
          "تقدم PlayStation لعبة GTA VI كتجربة فردية، لذلك يمكنك التركيز على القصة والعالم دون تنسيق مجموعة متعددة اللاعبين. وتشير صفحة المنتج أيضًا إلى تصنيف مخصص للبالغين؛ تحقق من التصنيف المعتمد في بلدك وقرر ما إذا كان المحتوى مناسبًا لمن سيلعب. عدّل خيارات الراحة مبكرًا مثل الصوت والعرض وأزرار التحكم، ثم غيّرها وفق تفضيلاتك. احذر الأدلة التي تعد باختصارات سرية أو مكافآت مضمونة دون تحديد إصدار اللعبة وطريقة يمكن تكرارها. غالبًا ما تكون البداية الهادئة التي تتجنب الحرق أفضل من اتباع مسار شخص آخر بسرعة.",
      },
    ],
    "gta-6-hidden-locations-secrets": [
      {
        heading: "استكشف المقتنيات دون تحويل الخريطة إلى واجب",
        body:
          "اختر فئة واحدة من المقتنيات في كل مرة ودع اللعبة تقودك نحو الاكتشافات القريبة. بعد العثور على نقطة مسح أو عمل فني أو عنصر غير مألوف، راجع قائمة المقتنيات وتذكر الحي أو المعلم بدلًا من حفظ كل شارع. أثناء السير انتبه إلى الأزقة وحافة الماء وخلف المباني؛ وأثناء القيادة أبطئ قرب الأماكن المختلفة عن الطريق الرئيسي. افتح خريطة كاملة فقط إذا كنت تريد مسارًا لإكمال المجموعة، وحدد مسبقًا ما إذا كنت تقبل الحرق. تحافظ هذه الطريقة على متعة البحث عن أسرار GTA 6 وتقلل العودة إلى الأماكن نفسها.",
      },
      {
        heading: "افصل الاكتشاف المؤكد عن تكهنات اللاعبين",
        body:
          "قد يكون التفصيل الغريب في مقطع دعائي أو لقطة شاشة دليلًا، لكنه لا يثبت تلقائيًا وجود مهمة سرية أو مقتنى. تحقق من أن الصورة من لعب فعلي، وأن لاعبًا آخر يستطيع تكرار الاكتشاف، وأن الدليل يذكر إصدار اللعبة والظروف الدقيقة. تساعد خرائط المجتمع على التنقل لكنها ليست تأكيدًا من Rockstar، وقد تتغير الأعداد والمسارات مع التحقق من اكتشافات جديدة. إذا أشار الدليل إلى أن قائمته غير مكتملة فتعامل معها كعمل مستمر. نركز هنا على أنظمة الاستكشاف والأمثلة المدعومة بمراجع بدلًا من عرض كل نظرية عن Leonida كحقيقة.",
      },
    ],
    "gta-6-giveaways-free-codes": [
      {
        heading: "تحقق من خمس نقاط قبل دخول مسابقة ليوتيوبر",
        body:
          "أولًا، تأكد أن المنشور من حساب المنشئ المعروف وليس حسابًا مقلدًا باسم قريب. ثانيًا، اقرأ القواعد المعلنة لمعرفة الجائزة والمنصة والمنطقة والموعد وشروط المشاركة وطريقة اختيار الفائز. ثالثًا، تأكد أن الدخول مجاني ولا يتطلب شراء شيء أو التلاعب بالمشاهدات والإعجابات والاشتراكات. رابعًا، تحقق من طريقة التواصل مع الفائز وإعلانه؛ فالرسالة الخاصة التي تطلب رسومًا أو كلمة مرور ليست دليلًا. خامسًا، افتح الرابط من ملف المنشئ المعروف بدلًا من تعليق غير مطلوب. إذا غابت أي خطوة، اطلب التحقق عبر قناة رسمية قبل مشاركة بياناتك الشخصية.",
      },
      {
        heading: "لماذا لا نضع كودًا مجانيًا مختلقًا؟",
        body:
          "يرتبط كود اللعبة بمنصة ومنطقة ومنتج محدد؛ ولا تثبت لقطة شاشة أو سلسلة أحرف أنه حقيقي أو غير مستخدم. وجدنا نتائج بحث تستخدم كلمة مسابقة، لكننا لم نجد قواعد رسمية قابلة للتحقق من منشئ مشهور تسمح لنا بعرض جائزة GTA 6 نشطة بثقة. قد يتغير ذلك، لذا راجع الحسابات الموثقة للمنشئ والمتجر الرسمي. لن نضيف مسابقة باسم معين إلا بعد التأكد من مصدرها وشروطها وجائزتها وحالتها. وحتى ذلك الحين تعامل مع مولدات الأكواد العامة على أنها غير مؤكدة، ولا تدخل كلمة مرور حسابك لاختبارها.",
      },
    ],
  },
};

const EN: GtaDraft[] = [
  {
    slug: "gta-6-pc-port-news",
    title: "GTA 6 PC Port: Official Updates and What PC Players Need to Know",
    description:
      "Looking for GTA 6 PC port news? Here is what Rockstar officially lists, what remains unconfirmed for PC, and how to avoid fake downloads and misleading release claims.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Updates",
    readingTime: "5 min read",
    intro:
      "PC players searching for a GTA 6 port deserve a clear answer, not recycled rumors. As of November 22, 2026, Rockstar's official GTA VI page lists PlayStation 5 and Xbox Series X|S. It does not list a PC edition, PC system requirements, or a PC storefront. That is the confirmed status on the official page checked for this article; it is not a prediction about future releases.",
    sections: [
      {
        heading: "What Rockstar currently confirms",
        body:
          "Rockstar's GTA VI page identifies PS5 and Xbox Series X|S as the available platforms. The page is the best first stop for a platform announcement. Until Rockstar adds a PC edition or publishes a specific PC announcement, dates, minimum specifications, recommended hardware, and PC pre-orders should be treated as unconfirmed.",
      },
      {
        heading: "How to follow real PC port updates",
        body:
          "Check the official GTA VI page and Rockstar Newswire when an announcement is reported. Look for an actual Rockstar post, a named PC storefront listing, and clearly stated requirements—not a countdown graphic, anonymous screenshot, or repost without a primary source. We will update this guide when Rockstar publishes information that changes the platform status.",
      },
      {
        heading: "Avoid fake GTA 6 PC downloads",
        body:
          "A site claiming to offer a playable PC download before an official PC listing exists is a serious red flag. Do not install an executable, browser extension, or launcher from an unofficial page, and never enter Rockstar, Steam, Epic, or email credentials into a site promising early access. Use official storefronts and verify the publisher before downloading.",
      },
      {
        heading: "Will the console version guarantee a PC port?",
        body:
          "No. A console release does not, by itself, confirm a PC version or its timing. Previous Rockstar releases are not reliable proof of a schedule for this game. The responsible answer is to separate confirmed platform listings from speculation and revisit the official sources when they change.",
      },
    ],
    related: ["what-is-unity-game-development", "how-we-published-4-games-on-the-app-store"],
    sources: sources.pc,
  },
  {
    slug: "gta-6-ps5-vs-xbox-performance",
    title: "GTA 6 PS5 vs Xbox Series X|S Performance: What Is Actually Confirmed?",
    description:
      "Compare GTA 6 on PS5, PS5 Pro, Xbox Series X, and Series S using confirmed platform information—and learn why unverified FPS claims are not a real performance test.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Performance",
    readingTime: "6 min read",
    intro:
      "The question “Is GTA 6 better on PS5 or Xbox?” needs more than a console-war answer. Rockstar lists PS5 and Xbox Series X|S, and its official GTA VI page carries the wording “Plays Best On PlayStation 5.” PlayStation's product page labels the game PS5 Pro Enhanced. Those are official platform statements, not a controlled, frame-by-frame comparison of every console.",
    sections: [
      {
        heading: "What the official platform pages say",
        body:
          "Rockstar lists PlayStation 5 and Xbox Series X|S. Its page also highlights PlayStation 5 under “Plays Best On.” PlayStation separately identifies the game as PS5 Pro Enhanced. These statements tell readers which systems are supported and how the publisher presents the PlayStation version; they do not publish measured frame rates or resolution comparisons for each model.",
      },
      {
        heading: "What a fair performance comparison must measure",
        body:
          "A useful PS5-versus-Xbox test should name the exact console model, game version, display mode, and test scene. It should measure frame-rate stability, image resolution, loading, visual settings, and any performance or quality modes. PS5 Pro should be reported separately from the standard PS5, and Xbox Series X separately from Series S. A short social clip or a trailer cannot establish those results.",
      },
      {
        heading: "How to choose before reliable benchmarks are available",
        body:
          "Choose the console that fits your budget, existing game library, friends, subscriptions, and display. If performance is your deciding factor, wait for independent testing that shows repeatable gameplay captures and explains its method. Do not treat “enhanced” branding or promotional footage as a benchmark, and check the article's publication date because patches can change results.",
      },
      {
        heading: "Our current conclusion",
        body:
          "The official information checked for this article does not provide a complete measured performance table across PS5, PS5 Pro, Xbox Series X, and Xbox Series S. We therefore cannot responsibly name a universal performance winner or publish unsupported FPS and resolution numbers. This section should be updated when reproducible technical tests are available.",
      },
    ],
    related: ["gta-6-pc-port-news", "gta-6-price-in-morocco"],
    sources: sources.console,
  },
  {
    slug: "gta-6-price-in-morocco",
    title: "GTA 6 Price in Morocco: How to Check PS5 and Xbox Editions Safely",
    description:
      "Need the GTA 6 price in Morocco? Learn how to check the correct regional PS5 or Xbox listing, compare editions, and avoid misleading reseller or account-region offers.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Morocco",
    readingTime: "5 min read",
    intro:
      "GTA 6 prices can differ by platform, edition, retailer, and account region. The official global pages checked for this guide confirm the game and its platforms, but do not provide a verified Morocco-specific MAD price. Rather than guess or repeat an old listing as current, use the steps below to check the exact offer shown to your own account before paying.",
    sections: [
      {
        heading: "Check the store for your account region",
        body:
          "Open the PlayStation Store or Xbox Store while signed in to the account that will use the game. Confirm the currency, platform, edition name, and final checkout total shown for that region. A price displayed on a US, UK, or French storefront is not automatically the price for a Moroccan account or a local physical copy.",
      },
      {
        heading: "Compare editions, not just headline prices",
        body:
          "If multiple editions are offered, compare the edition contents and any digital extras before choosing. Confirm whether an offer is for the base game, an upgrade, a bundle, or a subscription benefit. For a disc, check that the package is for the console model you own and ask the retailer about region, language, return, and warranty conditions.",
      },
      {
        heading: "Use caution with cheap codes and shared accounts",
        body:
          "A code advertised far below the normal store price may be expired, region-restricted, already redeemed, or obtained from an unauthorized source. Avoid offers that require your password, account recovery details, or remote access to your console. Redeem codes only through the platform's official redemption flow, and keep the receipt until the purchase appears in your library.",
      },
      {
        heading: "Price status for Morocco",
        body:
          "We could not verify a current Morocco-specific GTA 6 price from the official sources linked below at the time this article was checked. This guide deliberately does not invent a MAD figure. Check the regional storefront and reputable Moroccan retailers directly; if a verified local listing becomes available, this page should be updated with the edition, seller, currency, and date.",
      },
    ],
    related: ["gta-6-ps5-vs-xbox-performance", "gta-6-pc-port-news"],
    sources: sources.price,
  },
  {
    slug: "gta-6-beginners-tips",
    title: "GTA 6 Beginner Tips: Exploration, Vehicles, Weapons, and Useful Settings",
    description:
      "Starting GTA 6? These practical beginner tips cover exploration cues, collectibles, vehicle condition, weapon management, and navigation settings without relying on unverified tricks.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Guides",
    readingTime: "7 min read",
    intro:
      "Leonida rewards players who explore and pay attention to the game's interface. This starter guide focuses on practical systems described in the current GTA VI guide: map cues, scans, vehicle status, weapon ownership, and navigation. It is not a mission walkthrough, and story details are kept to a minimum.",
    sections: [
      {
        heading: "Use the map as an exploration tool",
        body:
          "Do more than follow the route line. The guide notes that explorable interiors can be outlined on the map when you zoom in. When entering a new area, pause to inspect nearby streets and buildings; this can help you spot places worth exploring without relying on a spoiler-heavy checklist.",
      },
      {
        heading: "Pay attention to scan cues",
        body:
          "Some locations and curiosities are recorded through the in-game WAiNK scanning system. The guide describes controller pulses as a directional cue when a scan is nearby. If you feel a pulse, slow down, look around, and use the relevant phone scan rather than driving past the point of interest.",
      },
      {
        heading: "Manage weapons and ammunition deliberately",
        body:
          "The guide distinguishes weapons you own from weapons temporarily picked up during play. Do not assume every pickup becomes part of your permanent loadout. Keep track of ammunition, use the weapon storage options available to you, and review your inventory before starting a long encounter.",
      },
      {
        heading: "Watch vehicle condition and fuel",
        body:
          "Vehicle condition and fuel indicators make driving choices matter. Check the vehicle display while driving, avoid unnecessary collisions, and remember that repair options can cost money. A little care early in a trip can save a detour when you are far from a service point.",
      },
      {
        heading: "Tune navigation and learn the controls",
        body:
          "If spoken navigation is distracting, the guide points to a GPS Voice option in the Audio settings. Adjust it to your preference and take time to learn the controls in a safe area. Small comfort settings make long drives and exploration easier without changing the challenge or relying on exploits.",
      },
    ],
    related: ["gta-6-hidden-locations-secrets", "gta-6-ps5-vs-xbox-performance"],
    sources: sources.tips,
  },
  {
    slug: "gta-6-hidden-locations-secrets",
    title: "GTA 6 Secrets and Hidden Locations: Collectibles Worth Exploring For",
    description:
      "Find more to do across Leonida with this spoiler-aware GTA 6 secrets guide to WAiNK scans, Ahol Street Art, hidden weapon variants, standout vehicles, and underwater treasures.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Secrets",
    readingTime: "7 min read",
    intro:
      "Spoiler warning: this guide discusses collectible types and exploration systems, but avoids story-mission reveals and does not reproduce another site's maps or full location list. The most rewarding “secret” may be a system you have not used yet: scanning curiosities, revisiting a coastline, or checking a new neighborhood for unique items.",
    sections: [
      {
        heading: "Start with WAiNK scans and local curiosities",
        body:
          "The guide lists WAiNK scans for landmarks, curiosities, sculptures, billboards, and tags across Leonida. Treat a scan notification as a reason to explore the immediate area, not just as another map icon. The controller's directional pulse can help narrow down where to look.",
      },
      {
        heading: "Look for Ahol Sniffs Glue's Geographies of Trash",
        body:
          "Ahol Street Art is an unusual collection hidden in everyday objects around Vice City. IGN's guide counts 112 pieces across 11 categories, including mattresses, tires, wheels, fridges, and TVs. To get started without following a full map, check these three sample spots from the guide:",
        bullets: [
          "Ahol mattress in Tequesta: beside the staircase of an apartment complex on SW 4th St.",
          "Ahol mattress in Bayside: in the unfinished parking lot near Catalan Blvd and NE 4th Ave.",
          "Ahol mattress in Ocean Beach: in the alley behind Cirque de Cuisine, off Fig St.",
        ],
        bodyAfter:
          "When you find a piece, the guide says to hold D-pad Up and press R1 on PlayStation or RB on Xbox to scan it with WAiNK. These are sample discoveries, not a complete route; use the linked reference for map screenshots and the remaining pieces.",
      },
      {
        heading: "Keep an eye out for unique gear and vehicles",
        body:
          "The collections guide separates unique weapon variants from ordinary pickups and highlights standout vehicles with distinctive custom details. When an item looks unusual, inspect it and check the game's collection or progress menu. Some discoveries are worth keeping rather than selling or modifying immediately.",
      },
      {
        heading: "Explore underwater and keep a personal checklist",
        body:
          "The collectibles guide also points to shipwreck treasure, cards, magazines, books, murals, and other exploration categories. Underwater discoveries may be easy to miss if you only travel by road. Track what you have found in the in-game progress menu and mark your own route to avoid revisiting the same streets.",
      },
      {
        heading: "A note about completeness",
        body:
          "Collectible guides can change as new findings are checked. IGN marks parts of its broader collections reference as in progress, so treat exact counts and locations as a dated guide snapshot rather than a guarantee that every secret is documented. We will revise this page when its cited references or in-game findings change.",
      },
    ],
    related: ["gta-6-beginners-tips", "gta-6-pc-port-news"],
    sources: sources.secrets,
  },
  {
    slug: "gta-6-giveaways-free-codes",
    title: "Top GTA 6 Giveaways: How to Verify Free Codes and YouTuber Claims",
    description:
      "Looking for a free GTA 6 code? We could not verify an active giveaway from a major YouTuber through official rules. Learn how to check creator claims and avoid fake links.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Giveaways",
    readingTime: "5 min read",
    intro:
      "Search results for a free GTA 6 code can mix real gameplay streams with unverified giveaway claims. In the sources reviewed for this guide, we could not confirm an active GTA 6 giveaway from a major YouTuber with official rules and a clear prize. This is not a list of working codes: we will not invent creators, winners, or deadlines. Use the checks below before entering any offer.",
    sections: [
      {
        heading: "A GTA stream is not proof of a giveaway",
        body:
          "A creator playing GTA 6, reacting to a trailer, or running an in-game challenge does not mean they are giving away a game copy or a redeemable code. Search titles and thumbnails are easy to imitate. We could not verify a major YouTuber's active GTA 6 giveaway from an official creator post and published terms, so no creator is presented here as currently offering a code. Re-check the creator's own verified channel or social profile for a current announcement.",
      },
      {
        heading: "Look for complete, public contest rules",
        body:
          "For a contest run on or using YouTube, YouTube requires official rules and says entry must be free. Rules should explain the prize and how it will be awarded, eligibility, timing, and how personal information is handled. They should also make clear that YouTube is not sponsoring the contest. If a post has no rules, hides the organizer, or changes the conditions in private messages, do not treat it as a verified giveaway.",
      },
      {
        heading: "Never pay or share account credentials to claim a prize",
        body:
          "A real promotion should not need your Rockstar, Google, Apple, Microsoft, or console password. Do not pay a fee to unlock a supposed prize, install an unknown file, connect a crypto wallet, or share a one-time sign-in code. Check that the post is on the creator's genuine account, and reach the account by navigating from its established profile rather than following an unsolicited comment or direct message.",
      },
      {
        heading: "Check what the prize actually includes",
        body:
          "A giveaway might promise a specific platform, edition, or store credit rather than a universal GTA 6 code. Before entering, look for the exact prize, platform, region restrictions, closing date, selection method, and public winner announcement. If those details are missing, or the prize is described only as a vague 'free code,' you cannot reliably know what is being offered.",
      },
      {
        heading: "Where to verify GTA 6 availability",
        body:
          "For official release and platform information, start with Rockstar's GTA VI page and follow its links to supported storefronts. A code found on an unofficial generator site is not an official Rockstar giveaway. We will update this guide if a major creator publishes verifiable GTA 6 contest rules; until then, there are no confirmed creator giveaways listed here.",
      },
    ],
    related: ["gta-6-price-in-morocco", "gta-6-beginners-tips"],
    sources: sources.giveaways,
  },
  {
    slug: "gta-6-editions-standard-vs-ultimate",
    title: "GTA 6 Standard vs Ultimate Edition: What Do You Actually Get?",
    description:
      "Compare the GTA 6 Standard and Ultimate editions using the official PlayStation listing. See what the Ultimate extras include and how to decide whether they suit your play style.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Buying Guide",
    readingTime: "5 min read",
    intro:
      "Choosing between GTA 6 editions is easier when you separate the game itself from optional extras. PlayStation lists Standard and Ultimate editions, and describes Ultimate as a collection of additional vehicles, weapons, apparel, and related story-world items. The exact offer, price, and availability can vary by storefront and region, so treat the store page shown to your account as the final source before purchase. This guide summarizes the published listing without assuming that more expensive automatically means better value.",
    sections: [
      {
        heading: "What the Standard and Ultimate listings mean",
        body:
          "The Standard Edition is the straightforward choice for someone who wants the game without paying for the listed premium collection. The Ultimate Edition includes the game and a set of bonuses described by PlayStation. Check the current product page carefully: edition names, upgrade paths, and availability can change, and a bundle or subscription offer is not necessarily the same product. Compare the edition attached to the checkout button, not only a search result or retailer headline.",
      },
      {
        heading: "What Ultimate adds according to PlayStation",
        body:
          "The official page groups Ultimate extras across several categories. It lists vehicles such as a Grotti Cheetah, a Dinka Enduro, a Crest Kayak, and a Vapid Dominator Buggy; weapon variants; outfits and style options; vehicle customization; and access to a collection of classic cars. The listing also names customization locations and cosmetic offerings. These are the kinds of extras to review individually: some players will value themed items and garage options, while others may prefer to spend only on the base game.",
      },
      {
        heading: "Does the Ultimate Edition add more story?",
        body:
          "The PlayStation description presents Ultimate as a premium collection of items threaded through the game's experience; it does not advertise a separate story campaign in the edition details cited here. Do not assume that a more expensive edition means a longer main story or a competitive advantage. Read the exact regional listing for the contents and timing of access, especially if a particular vehicle, weapon, or outfit is the reason you are considering the upgrade.",
      },
      {
        heading: "How to decide if the extras are worth the difference",
        body:
          "Start with the price difference shown in your own store, then ask whether you would choose those extras if they were sold separately. If the answer is no, the Standard Edition may be the better fit. If you enjoy collecting vehicles, customizing characters, and exploring optional items, the Ultimate bundle may appeal to you—but value is personal, not guaranteed by the edition name. Avoid spending money you planned for another game or essential console storage just because a bundle is marked premium.",
      },
      {
        heading: "Check region, platform, and purchase details",
        body:
          "Before buying, confirm that the page is for your console and account region, review the final price and currency, and check whether the product is digital or physical. For a digital purchase, buy through the platform's official store and keep the receipt. For a disc, confirm the console compatibility, edition printed on the package, and seller return terms. If a third-party code claims to unlock Ultimate content at an implausibly low price, verify its region and redemption method before paying—and never share your account password to receive an upgrade.",
      },
      {
        heading: "Quick answer: which edition should you choose?",
        body:
          "Choose Standard if your priority is playing the main game and you do not want the additional collection. Consider Ultimate only after checking its exact contents and deciding that the extras justify the local price difference for you. The official PlayStation listing is useful for understanding the advertised package, while the regional store page is the place to confirm the offer available to your account. Recheck both before purchase because storefront details can change.",
      },
    ],
    related: ["gta-6-price-in-morocco", "gta-6-beginners-tips"],
    sources: sources.editions,
  },
  {
    slug: "gta-6-online-multiplayer-status",
    title: "Is GTA 6 Online Multiplayer? Single-Player, Offline Play, and Confirmed Details",
    description:
      "Wondering whether GTA 6 has online multiplayer? Check what the official PlayStation listing confirms about single-player and offline play, and what it does not promise.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Explained",
    readingTime: "5 min read",
    intro:
      "Questions about GTA 6 Online often mix confirmed product details with guesses about future modes. The PlayStation product page currently describes Grand Theft Auto VI as a single-player experience and lists offline play as enabled. That tells players what the current listing says; it does not confirm a separate multiplayer mode, its launch date, or how a future online service might work. We separate those facts from speculation so you can plan around the game that is actually listed.",
    sections: [
      {
        heading: "What the official listing confirms about players",
        body:
          "PlayStation's listing identifies GTA VI as a single-player experience and shows one player. Rockstar's GTA VI page focuses on the story of Jason and Lucia across Leonida. These official descriptions support treating the currently listed game as a solo story experience. They are more dependable than a video title claiming a multiplayer launch date without linking to a publisher announcement.",
      },
      {
        heading: "Can you play GTA 6 offline?",
        body:
          "The PlayStation page marks offline play as enabled, which is an important point for players who want to enjoy the single-player game without being connected continuously. The same store listing notes that certain features or services may require an internet connection or account, so offline play should not be read as a promise that every download, update, or service works without internet. Download the game and updates through the official platform, and check the current store and publisher terms for your edition.",
      },
      {
        heading: "Is GTA Online included with GTA 6?",
        body:
          "The product information cited here does not describe a separate GTA VI multiplayer product or state that the existing GTA Online experience is bundled with the single-player game. Do not assume that GTA Online and GTA VI are the same title or that owning one automatically grants access to the other. If Rockstar announces a new online mode or bundle, look for the specific announcement and product details on its official channels.",
      },
      {
        heading: "How to evaluate multiplayer release-date claims",
        body:
          "Treat a multiplayer date as unconfirmed until Rockstar publishes it. A creator's prediction, leaked-looking screenshot, or countdown timer does not establish a release plan. Check whether a report links to a dated Rockstar Newswire post, a product page, or official support documentation. Also note the date of the report: older articles may describe a pre-launch status that has since changed. This guide is about what official pages say at the time checked, not a forecast of future updates.",
      },
      {
        heading: "What solo players can expect from this guide",
        body:
          "If you are buying GTA VI for its story, explore the single-player guide, vehicle, settings, and collection features without waiting for a group to be online. You can also adjust your setup and play at your own pace. If multiplayer is the deciding factor for your purchase, wait for Rockstar's explicit description of the mode, included content, platform requirements, and any separate cost rather than basing the decision on assumptions.",
      },
      {
        heading: "Quick answer: GTA 6 multiplayer status",
        body:
          "The current PlayStation product page describes GTA VI as single-player and says offline play is enabled. It does not provide confirmation of a separate GTA VI online multiplayer mode in the details reviewed for this article. Follow Rockstar's official channels for changes, and distinguish announced features from fan speculation.",
      },
    ],
    related: ["gta-6-beginners-tips", "gta-6-ps5-vs-xbox-performance"],
    sources: sources.online,
  },
  {
    slug: "gta-6-leonida-pc-recompilation-project",
    title: "GTA 6 PC Port: What Leonida Can (and Can’t) Do Yet",
    description:
      "A look at Leonida, Xbox2Windows, and other community efforts to run GTA VI on Windows—and what their own status reports say about whether the game actually boots.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 Updates",
    readingTime: "11 min read",
    intro:
      "The Leonida project has drawn attention on GitHub and Hacker News as a community attempt to run Grand Theft Auto VI on PC. It is important to separate the project's technical ambition from its actual status. When we reviewed its repository, the README said that the game did not boot and that no playable build was available. This article summarizes what can be verified, what remains online discussion, and why this is not an official Rockstar PC release.",
    sections: [
      {
        heading: "What is the Leonida project?",
        body:
          "Leonida is a community-led, open-source project that describes itself as a static recompilation effort for the Xbox Series version of Grand Theft Auto VI. Its broad goal is to make the console version run natively on Windows by recreating or translating parts of the platform environment. This is different from Rockstar shipping an official Windows edition: Leonida is an independent effort, and its repository is not a Rockstar product or endorsement. An active GitHub page or impressive technical work does not by itself mean the game is playable.",
      },
      {
        heading: "What the project says is complete—and what is not",
        body:
          "The repository's status section is unusually clear: it labels the work early and says the game does not boot, with no story mode or playable build. It reports progress on research and tools for parts of the console graphics and asset pipeline, but describes important runtime and graphics compatibility work as incomplete or not yet tested against the actual game executable. These are the developers' own progress claims, not an independent review or a demonstration that the whole game runs. The practical headline is therefore not “GTA 6 is now playable on PC”; it is “a community project is working on pieces of a difficult compatibility problem.”",
      },
      {
        heading: "Another GTA VI-specific effort: Xbox2Windows",
        body:
          "Xbox2Windows also explicitly studies recompiling Xbox Series code for Windows. Its repository documents source-built test programs and selected shader experiments, but says the GTA VI executable was absent from the package it inspected; full-game startup and frame rate remain unverified. These experiments are meaningful engineering progress, but they are not evidence that GTA VI itself boots. A test program or a translated shader can validate one component without demonstrating a working game.",
      },
      {
        heading: "What the trackers and other Xbox projects actually represent",
        body:
          "The GTA VI PC Port Hub and PortWatch VI are community-maintained indexes and trackers, not ports or downloadable game builds. The hub lists wider Xbox-to-Windows compatibility projects; some demonstrate other titles or test programs, but that does not make them GTA VI ports. Their status summaries are useful leads, not independent verification. In the repositories we reviewed, Leonida and Xbox2Windows are the efforts that explicitly describe GTA VI recompilation work, and neither reports a playable build. This is a scoped research snapshot, not proof that no additional projects exist elsewhere.",
      },
      {
        heading: "The repository is source code, not a ready-made PC game",
        body:
          "Leonida's README says the repository does not include GTA VI, product keys, or a compiled executable, and that the project does not provide a way to obtain them. The README describes a user-supplied game copy as a prerequisite and says the project does not decrypt the game or work around its protections. The GitHub releases page was empty when we checked it. That means there is no official Leonida download that can be described as a playable PC port. The project's GPL-3.0 repository license applies to its listed project code; it should not be confused with permission to redistribute Rockstar's game, game files, or other protected assets.",
      },
      {
        heading: "What the Hacker News and Reddit links establish",
        body:
          "The Hacker News page is a discussion thread about the GitHub project, not a test result. Comments include speculation about leaks and PC release timing, as well as opinions on how difficult PC support can be; those comments do not verify a leak, authorize access to game files, or prove that a port works. The Reddit link shared in r/FitGirlRepack is also a community post, not an official Rockstar statement. We could not independently retrieve its contents during this research, so we are not treating its claims as confirmed facts. A link appearing in a forum—or an upvote count—does not establish who built a project, what files it uses, or whether the result runs.",
      },
      {
        heading: "Why turning a console game into a PC release is difficult",
        body:
          "A native PC release has to work across a broad range of processors, graphics cards, drivers, memory configurations, displays, and input devices. Console-specific operating-system services and graphics behavior also need equivalents, while performance and stability must be tested across real hardware. A technically promising translation layer may solve individual problems without completing the full game, user interface, save behavior, shader pipeline, or quality assurance. In other words, “some components are implemented” and “a complete, stable PC version is ready” are very different milestones. This is why the project's own no-boot status matters more than a viral headline.",
      },
      {
        heading: "How to follow the project without mistaking it for an official port",
        body:
          "Use the project's GitHub README and issue tracker for its stated status, and look for a reproducible demonstration before believing a claim that the game boots. Check whether a release actually exists and whether it is published by the project's maintainers. Do not treat a third-party executable, repack, or leaked-file link as an official release; avoid running unknown software or sharing account credentials. Rockstar's GTA VI page is the place to verify officially announced platforms. As of the page checked for this article, it lists PlayStation 5 and Xbox Series X|S; it does not announce Leonida or an official Windows port.",
      },
      {
        heading: "Bottom line",
        body:
          "Leonida is a real, publicly visible community code project with ambitious goals, but its own documentation says GTA VI does not boot and no playable build is provided. It may be worth following as a technical experiment, not as a way to play the game today. The GitHub project license does not make GTA VI open source, and community discussion is not proof of permission, a leak, or a successful PC release. We will update this article if the maintainers publish a working demonstration or Rockstar announces an official PC version.",
      },
    ],
    related: ["gta-6-pc-port-news", "gta-6-online-multiplayer-status"],
    sources: sources.leonida,
  },
];

const FR: GtaDraft[] = [
  {
    slug: "gta-6-pc-port-news",
    title: "GTA 6 sur PC : dernières informations officielles sur le portage",
    description:
      "Vous cherchez des nouvelles du portage PC de GTA 6 ? Voici les plateformes officiellement indiquées par Rockstar, les informations PC encore non confirmées et les précautions contre les faux téléchargements.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "Actualités GTA 6",
    readingTime: "5 min de lecture",
    intro:
      "Les joueurs PC qui recherchent un portage de GTA 6 méritent une réponse claire, pas des rumeurs recyclées. Au 22 novembre 2026, la page officielle de Rockstar indique PlayStation 5 et Xbox Series X|S. Elle ne présente ni édition PC, ni configuration requise, ni boutique PC. C'est l'état des informations vérifié pour cet article, et non une prédiction sur une sortie future.",
    sections: [
      {
        heading: "Ce que Rockstar confirme actuellement",
        body:
          "La page officielle de GTA VI indique PS5 et Xbox Series X|S. C'est le premier endroit à consulter pour une annonce de plateforme. Tant que Rockstar ne publie pas une édition PC ou une annonce dédiée, les dates, configurations minimales et recommandées, ainsi que les précommandes PC restent non confirmées.",
      },
      {
        heading: "Suivre les vraies annonces PC",
        body:
          "Consultez la page officielle de GTA VI et le Rockstar Newswire lorsqu'une annonce est relayée. Recherchez une publication Rockstar, une fiche de boutique PC clairement identifiée et des configurations précises, pas un compte à rebours, une capture anonyme ou une republication sans source primaire. Nous mettrons ce guide à jour lorsque Rockstar publiera une information nouvelle.",
      },
      {
        heading: "Éviter les faux téléchargements PC de GTA 6",
        body:
          "Un site qui propose un téléchargement PC jouable avant l'apparition d'une édition PC officielle est un signal d'alerte. N'installez pas de programme, d'extension ou de lanceur depuis une page non officielle et ne saisissez pas vos identifiants Rockstar, Steam, Epic ou e-mail sur un site promettant un accès anticipé. Vérifiez l'éditeur et utilisez les boutiques officielles.",
      },
      {
        heading: "La sortie console confirme-t-elle un portage PC ?",
        body:
          "Non. Une sortie console ne confirme pas à elle seule une version PC ni sa date. Les précédents jeux Rockstar ne permettent pas de déduire un calendrier fiable pour celui-ci. Il faut distinguer les plateformes confirmées des spéculations et vérifier à nouveau les sources officielles lorsqu'elles évoluent.",
      },
    ],
    related: ["what-is-unity-game-development", "how-we-published-4-games-on-the-app-store"],
    sources: sources.pc,
  },
  {
    slug: "gta-6-ps5-vs-xbox-performance",
    title: "GTA 6 sur PS5 ou Xbox Series X|S : que sait-on vraiment des performances ?",
    description:
      "Comparez GTA 6 sur PS5, PS5 Pro, Xbox Series X et Series S à partir des informations confirmées, et découvrez pourquoi des FPS non vérifiés ne constituent pas un test fiable.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "Performances GTA 6",
    readingTime: "6 min de lecture",
    intro:
      "La question « GTA 6 est-il meilleur sur PS5 ou Xbox ? » mérite mieux qu'une réponse de fan. Rockstar indique PS5 et Xbox Series X|S, et sa page officielle affiche « Plays Best On PlayStation 5 ». La fiche PlayStation présente aussi le jeu comme PS5 Pro Enhanced. Ce sont des informations officielles sur les plateformes, pas un comparatif technique contrôlé entre chaque console.",
    sections: [
      {
        heading: "Ce que disent les pages officielles",
        body:
          "Rockstar indique PlayStation 5 et Xbox Series X|S, et met en avant PlayStation 5 avec la mention « Plays Best On ». PlayStation indique séparément la compatibilité PS5 Pro Enhanced. Cela renseigne sur les plateformes et la présentation officielle de la version PlayStation, mais ne publie pas de mesures comparatives de fréquence d'images ou de résolution pour chaque modèle.",
      },
      {
        heading: "Les critères d'un vrai comparatif",
        body:
          "Un test utile doit préciser le modèle de console, la version du jeu, le mode d'affichage et la scène analysée. Il doit mesurer la stabilité des images par seconde, la résolution, les chargements et les modes qualité ou performance. PS5 Pro doit être distinguée de la PS5 standard, et Xbox Series X de Series S. Un court extrait social ou une bande-annonce ne suffit pas.",
      },
      {
        heading: "Comment choisir en attendant des mesures fiables",
        body:
          "Choisissez la console qui correspond à votre budget, votre bibliothèque, vos amis, vos abonnements et votre écran. Si les performances sont votre priorité, attendez des tests indépendants reproductibles qui expliquent leur méthode. Ne confondez pas une mention « enhanced » ou une vidéo promotionnelle avec un benchmark et vérifiez la date de publication.",
      },
      {
        heading: "Notre conclusion actuelle",
        body:
          "Les informations officielles consultées pour cet article ne fournissent pas de tableau de mesures complet entre PS5, PS5 Pro, Xbox Series X et Xbox Series S. Nous ne pouvons donc pas désigner un vainqueur universel ni publier des chiffres de FPS ou de résolution non vérifiés. Cette section sera mise à jour lorsque des tests techniques reproductibles seront disponibles.",
      },
    ],
    related: ["gta-6-pc-port-news", "gta-6-price-in-morocco"],
    sources: sources.console,
  },
  {
    slug: "gta-6-price-in-morocco",
    title: "Prix de GTA 6 au Maroc : vérifier les éditions PS5 et Xbox sans risque",
    description:
      "Vous cherchez le prix de GTA 6 au Maroc ? Apprenez à vérifier la boutique régionale PS5 ou Xbox, comparer les éditions et éviter les offres de revendeurs trompeuses.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 au Maroc",
    readingTime: "5 min de lecture",
    intro:
      "Le prix de GTA 6 peut varier selon la plateforme, l'édition, le vendeur et la région du compte. Les pages officielles consultées confirment le jeu et ses plateformes, mais n'indiquent pas de prix vérifié en dirhams pour le Maroc. Plutôt que de répéter un ancien tarif comme s'il était actuel, suivez ces étapes pour vérifier l'offre affichée à votre compte avant de payer.",
    sections: [
      {
        heading: "Vérifier la région du compte",
        body:
          "Ouvrez le PlayStation Store ou le Xbox Store avec le compte qui utilisera le jeu. Vérifiez la devise, la plateforme, le nom de l'édition et le total à payer affiché au moment du paiement. Un prix vu sur une boutique américaine, britannique ou française ne correspond pas nécessairement à un compte marocain ou à une copie physique locale.",
      },
      {
        heading: "Comparer les éditions, pas seulement les prix",
        body:
          "Si plusieurs éditions sont proposées, comparez leur contenu et leurs bonus numériques. Vérifiez s'il s'agit du jeu complet, d'une mise à niveau, d'un pack ou d'un avantage d'abonnement. Pour un disque, confirmez qu'il convient à votre console et demandez au vendeur les conditions de région, de langue, de retour et de garantie.",
      },
      {
        heading: "Prudence avec les codes bon marché et comptes partagés",
        body:
          "Un code vendu très en dessous du prix habituel peut être expiré, limité à une région, déjà utilisé ou provenir d'une source non autorisée. Évitez les offres qui demandent votre mot de passe, les données de récupération du compte ou un accès à distance à la console. Utilisez le système officiel de la plateforme et conservez le reçu.",
      },
      {
        heading: "État du prix au Maroc",
        body:
          "Au moment de la vérification, nous n'avons pas pu confirmer un prix GTA 6 actuel en dirhams marocains à partir des sources officielles ci-dessous. Ce guide n'invente donc pas de montant. Consultez la boutique régionale et des revendeurs marocains réputés ; toute mise à jour doit préciser l'édition, le vendeur, la devise et la date.",
      },
    ],
    related: ["gta-6-ps5-vs-xbox-performance", "gta-6-pc-port-news"],
    sources: sources.price,
  },
  {
    slug: "gta-6-beginners-tips",
    title: "Conseils pour débuter dans GTA 6 : exploration, véhicules et armes",
    description:
      "Vous débutez dans GTA 6 ? Découvrez des conseils pratiques sur la carte, les scans, les véhicules, la gestion des armes et les réglages de navigation, sans astuces non vérifiées.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "Guides GTA 6",
    readingTime: "7 min de lecture",
    intro:
      "Leonida récompense les joueurs qui explorent et observent l'interface. Ce guide de départ se concentre sur des systèmes décrits dans le guide GTA VI actuel : indices de la carte, scans, état des véhicules, possession des armes et navigation. Il ne raconte pas les missions et limite les révélations sur l'histoire.",
    sections: [
      {
        heading: "Utilisez la carte pour explorer",
        body:
          "Ne suivez pas uniquement l'itinéraire proposé. Le guide indique que des intérieurs explorables peuvent apparaître en contour lorsque la carte est agrandie. En arrivant dans un nouveau quartier, prenez un moment pour observer les rues et les bâtiments afin de repérer des lieux intéressants sans consulter immédiatement une liste contenant des spoilers.",
      },
      {
        heading: "Repérez les indices de scan",
        body:
          "Certains lieux et curiosités sont enregistrés avec le système de scan WAiNK. Le guide décrit des impulsions de la manette qui indiquent la direction d'un scan proche. Si vous en ressentez une, ralentissez, observez les alentours et utilisez le scan du téléphone plutôt que de dépasser le point d'intérêt.",
      },
      {
        heading: "Gérez les armes et les munitions",
        body:
          "Le guide distingue les armes possédées des armes récupérées temporairement pendant une partie. Ne supposez pas que chaque arme ramassée rejoint votre équipement permanent. Surveillez les munitions, utilisez les options de rangement disponibles et vérifiez votre inventaire avant un affrontement prolongé.",
      },
      {
        heading: "Surveillez l'état du véhicule et le carburant",
        body:
          "Les indicateurs d'état et de carburant rendent la conduite plus importante. Consultez l'affichage du véhicule, évitez les collisions inutiles et gardez à l'esprit que les réparations peuvent coûter de l'argent. Une conduite prudente peut éviter un détour lorsque vous êtes loin d'un service.",
      },
      {
        heading: "Réglez la navigation et apprenez les commandes",
        body:
          "Si les indications vocales vous distraient, le guide mentionne l'option GPS Voice dans les réglages Audio. Ajustez-la selon vos préférences et apprenez les commandes dans un endroit sûr. De petits réglages rendent les longs trajets plus agréables sans supprimer le défi ni recourir à des exploits.",
      },
    ],
    related: ["gta-6-hidden-locations-secrets", "gta-6-ps5-vs-xbox-performance"],
    sources: sources.tips,
  },
  {
    slug: "gta-6-hidden-locations-secrets",
    title: "Secrets et lieux cachés dans GTA 6 : objets à découvrir en explorant",
    description:
      "Explorez Leonida avec ce guide prudent des secrets de GTA 6 : scans WAiNK, Street Art Ahol, armes uniques, véhicules remarquables et trésors sous-marins.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "Secrets GTA 6",
    readingTime: "7 min de lecture",
    intro:
      "Attention aux spoilers : ce guide présente les types de collections et les systèmes d'exploration, sans révéler les missions ni reproduire la carte complète d'un autre site. Le secret le plus intéressant peut être un système que vous n'avez pas encore essayé : scanner une curiosité, revenir sur une côte ou inspecter un nouveau quartier à la recherche d'objets uniques.",
    sections: [
      {
        heading: "Commencez par les scans WAiNK et les curiosités",
        body:
          "Le guide recense des scans WAiNK pour les monuments, curiosités, sculptures, panneaux et tags de Leonida. Lorsqu'une notification apparaît, explorez les environs au lieu de simplement cocher une icône. Les impulsions directionnelles de la manette peuvent aider à trouver le point précis.",
      },
      {
        heading: "Cherchez les Geographies of Trash d'Ahol Sniffs Glue",
        body:
          "Le Street Art Ahol est une collection insolite cachée dans des objets du quotidien à Vice City. Le guide IGN compte 112 pièces réparties en 11 catégories, dont des matelas, pneus, roues, réfrigérateurs et téléviseurs. Pour commencer sans suivre une carte complète, essayez ces trois exemples tirés du guide :",
        bullets: [
          "Matelas à Tequesta : près de l'escalier d'un immeuble sur SW 4th St.",
          "Matelas à Bayside : dans le parking en construction près de Catalan Blvd et NE 4th Ave.",
          "Matelas à Ocean Beach : dans la ruelle derrière Cirque de Cuisine, près de Fig St.",
        ],
        bodyAfter:
          "Pour scanner une œuvre, le guide indique de maintenir la flèche directionnelle vers le haut et d'appuyer sur R1 sur PlayStation ou RB sur Xbox afin d'utiliser WAiNK. Ce sont quelques exemples, pas un itinéraire complet ; consultez la référence liée pour les cartes et les autres pièces.",
      },
      {
        heading: "Observez les armes et véhicules uniques",
        body:
          "Le guide des collections distingue les variantes d'armes uniques des objets ramassés ordinaires et signale des véhicules remarquables avec des détails personnalisés. Lorsqu'un objet semble différent, examinez-le et consultez le menu de progression. Certaines trouvailles méritent d'être conservées plutôt que vendues ou modifiées immédiatement.",
      },
      {
        heading: "Explorez sous l'eau et gardez une liste personnelle",
        body:
          "Le guide des collections mentionne aussi des trésors d'épaves, cartes, magazines, livres, fresques et autres découvertes. Les objets sous-marins sont faciles à manquer si vous ne voyagez que par la route. Suivez vos progrès dans le menu du jeu et notez votre itinéraire pour ne pas parcourir deux fois les mêmes rues.",
      },
      {
        heading: "À propos de l'exhaustivité",
        body:
          "Les guides de collections évoluent lorsque de nouvelles découvertes sont vérifiées. IGN signale que certaines parties de sa référence sont encore en cours ; les nombres et emplacements exacts représentent donc une version datée, pas la garantie que tous les secrets sont documentés. Nous mettrons cette page à jour lorsque les sources ou les découvertes en jeu évolueront.",
      },
    ],
    related: ["gta-6-beginners-tips", "gta-6-pc-port-news"],
    sources: sources.secrets,
  },
  {
    slug: "gta-6-giveaways-free-codes",
    title: "Concours GTA 6 : vérifier les codes gratuits et les annonces de YouTubeurs",
    description:
      "Vous cherchez un code GTA 6 gratuit ? Nous n'avons pas pu vérifier de concours actif organisé par un grand YouTubeur avec des règles officielles. Voici comment contrôler les annonces et éviter les faux liens.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "Concours GTA 6",
    readingTime: "5 min de lecture",
    intro:
      "Les recherches de codes GTA 6 gratuits mélangent parfois de vrais streams de jeu et des annonces de concours non vérifiées. Dans les sources consultées pour ce guide, nous n'avons pas pu confirmer de concours GTA 6 actif organisé par un grand YouTubeur avec un règlement officiel et un lot clairement défini. Cet article ne répertorie pas de codes utilisables : nous n'inventerons ni créateurs, ni gagnants, ni dates limites. Vérifiez chaque offre avant de participer.",
    sections: [
      {
        heading: "Un stream GTA ne prouve pas l'existence d'un concours",
        body:
          "Le fait qu'un créateur joue à GTA 6, réagisse à une bande-annonce ou relève un défi dans le jeu ne signifie pas qu'il offre une copie ou un code. Les titres et miniatures peuvent être imités. Nous n'avons pas pu vérifier de concours GTA 6 actif d'un grand YouTubeur à partir d'une annonce officielle et de conditions publiées ; aucun créateur n'est donc présenté ici comme offrant actuellement un code. Consultez le compte vérifié du créateur pour toute annonce récente.",
      },
      {
        heading: "Cherchez un règlement complet et public",
        body:
          "Pour un concours organisé sur YouTube ou utilisant la plateforme, YouTube exige un règlement officiel et précise que la participation doit être gratuite. Le règlement doit expliquer le lot, son attribution, les critères d'éligibilité, les dates et l'utilisation des données personnelles. Il doit aussi indiquer que YouTube ne sponsorise pas le concours. Sans règlement, avec un organisateur caché ou des conditions modifiées en privé, l'offre n'est pas vérifiable.",
      },
      {
        heading: "Ne payez jamais et ne communiquez pas vos identifiants",
        body:
          "Une promotion légitime ne devrait pas demander le mot de passe de votre compte Rockstar, Google, Apple, Microsoft ou console. Ne payez pas de frais pour débloquer un prétendu lot, n'installez pas de fichier inconnu, ne connectez pas de portefeuille crypto et ne partagez pas de code de connexion temporaire. Vérifiez le compte authentique du créateur et accédez-y depuis son profil habituel plutôt que par un commentaire ou message privé non sollicité.",
      },
      {
        heading: "Vérifiez exactement ce que comprend le lot",
        body:
          "Un concours peut proposer une plateforme, une édition ou un crédit boutique précis, pas un code GTA 6 universel. Avant de participer, vérifiez le lot exact, la plateforme, les restrictions régionales, la date de clôture, la méthode de sélection et la publication du gagnant. Si ces renseignements manquent ou si le lot est seulement décrit comme un vague « code gratuit », l'offre est impossible à vérifier correctement.",
      },
      {
        heading: "Où vérifier la disponibilité de GTA 6",
        body:
          "Pour les informations officielles sur la sortie et les plateformes, consultez la page GTA VI de Rockstar et ses liens vers les boutiques prises en charge. Un générateur de codes non officiel n'est pas un concours Rockstar. Nous mettrons ce guide à jour si un grand créateur publie un règlement vérifiable ; d'ici là, aucun concours de créateur confirmé n'est répertorié ici.",
      },
    ],
    related: ["gta-6-price-in-morocco", "gta-6-beginners-tips"],
    sources: sources.giveaways,
  },
  {
    slug: "gta-6-editions-standard-vs-ultimate",
    title: "GTA 6 Standard ou Ultimate : que contient chaque édition ?",
    description:
      "Comparez les éditions Standard et Ultimate de GTA 6 à partir de la fiche officielle PlayStation. Découvrez les bonus Ultimate et comment choisir selon votre façon de jouer.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "Guide d'achat GTA 6",
    readingTime: "5 min de lecture",
    intro:
      "Le choix d'une édition de GTA 6 est plus simple lorsqu'on distingue le jeu des bonus facultatifs. PlayStation propose les éditions Standard et Ultimate, cette dernière étant décrite comme une collection de véhicules, armes, vêtements et objets liés à l'univers de l'histoire. L'offre, le prix et la disponibilité peuvent varier selon la boutique et la région ; la page affichée pour votre compte reste donc la référence avant achat. Ce guide résume la fiche publiée sans supposer qu'une édition plus chère offre nécessairement une meilleure valeur.",
    sections: [
      {
        heading: "Ce que signifient les éditions Standard et Ultimate",
        body:
          "L'édition Standard convient à ceux qui veulent le jeu sans payer la collection premium indiquée. L'édition Ultimate comprend le jeu et les bonus décrits par PlayStation. Consultez la fiche actuelle : les noms, possibilités de mise à niveau et disponibilités peuvent changer, et un pack ou un avantage d'abonnement n'est pas forcément le même produit. Comparez l'édition indiquée sur le bouton de paiement, pas seulement un résultat de recherche ou le titre d'un revendeur.",
      },
      {
        heading: "Les bonus Ultimate présentés par PlayStation",
        body:
          "La page officielle répartit les bonus Ultimate en plusieurs catégories. Elle mentionne notamment des véhicules comme la Grotti Cheetah, la Dinka Enduro, un Crest Kayak et le buggy Vapid Dominator ; des variantes d'armes ; des tenues et options de style ; de la personnalisation de véhicules ; et une collection de voitures classiques. La fiche cite aussi des lieux de personnalisation et des objets cosmétiques. Examinez ces éléments un par un : certains apprécieront les objets thématiques et les options de garage, tandis que d'autres préféreront acheter uniquement le jeu de base.",
      },
      {
        heading: "L'édition Ultimate ajoute-t-elle une histoire ?",
        body:
          "La description PlayStation présente Ultimate comme une collection premium intégrée à l'expérience du jeu ; les détails cités ici n'annoncent pas de campagne séparée. Ne supposez pas qu'une édition plus chère signifie une histoire principale plus longue ou un avantage compétitif. Lisez la fiche régionale pour connaître le contenu exact et le moment où il est disponible, surtout si un véhicule, une arme ou une tenue particulière motive votre choix.",
      },
      {
        heading: "Décider si les bonus valent la différence",
        body:
          "Commencez par comparer l'écart de prix indiqué dans votre boutique et demandez-vous si vous achèteriez ces bonus séparément. Si ce n'est pas le cas, Standard peut être plus adaptée. Si vous aimez collectionner des véhicules, personnaliser des personnages et explorer des objets facultatifs, Ultimate peut vous intéresser ; la valeur dépend de vos préférences, pas du nom de l'édition. Ne dépensez pas l'argent prévu pour un autre jeu ou un stockage essentiel uniquement parce qu'un pack est présenté comme premium.",
      },
      {
        heading: "Vérifier la région, la plateforme et l'achat",
        body:
          "Avant de payer, confirmez que la page correspond à votre console et à la région de votre compte, vérifiez le prix final et précisez s'il s'agit d'un achat numérique ou physique. Pour le numérique, passez par la boutique officielle et conservez le reçu. Pour un disque, vérifiez la compatibilité avec votre console, l'édition inscrite sur la boîte et les conditions de retour du vendeur. Si un code tiers prétend débloquer les bonus Ultimate à un prix anormalement bas, vérifiez sa région et son mode d'utilisation avant de payer ; ne communiquez jamais le mot de passe de votre compte pour recevoir une mise à niveau.",
      },
      {
        heading: "Réponse rapide : quelle édition choisir ?",
        body:
          "Choisissez Standard si vous souhaitez surtout jouer au jeu principal sans payer pour une collection supplémentaire. Envisagez Ultimate seulement après avoir vérifié son contenu et décidé que les bonus justifient l'écart de prix local. La fiche officielle PlayStation décrit les éléments annoncés ; la boutique régionale confirme l'offre disponible pour votre compte. Vérifiez les deux avant l'achat, car les détails peuvent évoluer.",
      },
    ],
    related: ["gta-6-price-in-morocco", "gta-6-beginners-tips"],
    sources: sources.editions,
  },
  {
    slug: "gta-6-online-multiplayer-status",
    title: "GTA 6 est-il multijoueur en ligne ? Mode solo, hors ligne et faits confirmés",
    description:
      "Vous vous demandez si GTA 6 propose du multijoueur en ligne ? Découvrez ce que la fiche PlayStation confirme sur le mode solo et le jeu hors ligne, et ce qu'elle ne promet pas.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 expliqué",
    readingTime: "5 min de lecture",
    intro:
      "Les questions sur GTA 6 Online mélangent souvent les informations confirmées et les suppositions sur de futurs modes. La fiche PlayStation présente actuellement Grand Theft Auto VI comme une expérience solo et indique que le jeu hors ligne est activé. Cela décrit la fiche actuelle ; cela ne confirme ni un mode multijoueur distinct, ni sa date de sortie, ni le fonctionnement d'un éventuel service en ligne. Nous séparons les faits de la spéculation pour vous aider à choisir selon le jeu réellement proposé.",
    sections: [
      {
        heading: "Ce que la fiche officielle confirme sur le nombre de joueurs",
        body:
          "La fiche PlayStation classe GTA VI comme une expérience solo et indique un joueur. La page Rockstar met en avant l'histoire de Jason et Lucia dans Leonida. Ces descriptions officielles invitent à considérer le produit actuellement présenté comme une aventure solo. Elles sont plus fiables qu'un titre de vidéo annonçant une date multijoueur sans renvoyer à une publication de l'éditeur.",
      },
      {
        heading: "Peut-on jouer à GTA 6 hors ligne ?",
        body:
          "La fiche PlayStation indique que le jeu hors ligne est activé, un point utile pour les joueurs qui souhaitent profiter de l'aventure solo sans rester connectés en permanence. La même fiche précise que certains services ou fonctions peuvent nécessiter une connexion ou un compte ; le mode hors ligne ne garantit donc pas que chaque téléchargement, mise à jour ou service fonctionne sans Internet. Téléchargez le jeu et ses mises à jour depuis la plateforme officielle et consultez les conditions actuelles de votre édition.",
      },
      {
        heading: "GTA Online est-il inclus dans GTA 6 ?",
        body:
          "Les informations produit citées ici ne décrivent pas un produit multijoueur GTA VI distinct et ne disent pas que GTA Online, le service existant, est inclus avec l'aventure solo. Ne supposez pas que GTA Online et GTA VI désignent le même jeu ou que l'achat de l'un donne automatiquement accès à l'autre. Si Rockstar annonce un nouveau mode en ligne ou un pack, consultez l'annonce et les détails du produit sur ses canaux officiels.",
      },
      {
        heading: "Évaluer les annonces de date multijoueur",
        body:
          "Considérez une date multijoueur comme non confirmée jusqu'à ce que Rockstar la publie. Une prédiction de créateur, une capture qui semble fuitée ou un compte à rebours ne constituent pas un calendrier officiel. Vérifiez si l'article renvoie à une publication datée du Rockstar Newswire, à une fiche produit ou à une aide officielle. Tenez compte de la date de l'article : une page ancienne peut décrire une situation d'avant la sortie. Ce guide résume les pages officielles consultées, pas une prévision des mises à jour.",
      },
      {
        heading: "Ce que les joueurs solo peuvent attendre",
        body:
          "Si vous achetez GTA VI pour son histoire, explorez les guides solo, véhicules, réglages et collections sans attendre qu'un groupe soit disponible. Vous pouvez ajuster votre installation et avancer à votre rythme. Si le multijoueur est essentiel dans votre décision d'achat, attendez une description explicite de Rockstar sur le mode, le contenu inclus, les plateformes et un éventuel coût séparé plutôt que de vous fier à des suppositions.",
      },
      {
        heading: "Réponse rapide : statut multijoueur de GTA 6",
        body:
          "La fiche PlayStation actuelle décrit GTA VI comme un jeu solo et indique que le mode hors ligne est disponible. Les informations consultées pour cet article ne confirment pas de mode multijoueur en ligne GTA VI distinct. Suivez les canaux officiels de Rockstar et distinguez les fonctionnalités annoncées des spéculations.",
      },
    ],
    related: ["gta-6-beginners-tips", "gta-6-ps5-vs-xbox-performance"],
    sources: sources.online,
  },
  {
    slug: "gta-6-leonida-pc-recompilation-project",
    title: "Portage PC de GTA 6 : ce que Leonida peut (et ne peut pas) faire",
    description:
      "Découvrez Leonida, Xbox2Windows et d'autres travaux communautaires pour exécuter GTA VI sous Windows, ainsi que l'état réel annoncé par leurs auteurs.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "Actualités GTA 6",
    readingTime: "7 min de lecture",
    intro:
      "Le projet Leonida a fait parler de lui sur GitHub et Hacker News comme tentative communautaire de faire tourner Grand Theft Auto VI sur PC. Il faut distinguer l'ambition technique de l'état réel du projet. Au moment où nous avons consulté son dépôt, le README indiquait que le jeu ne démarrait pas et qu'aucune version jouable n'était fournie. Voici ce que les sources permettent de vérifier, ce qui relève de la discussion en ligne et pourquoi il ne s'agit pas d'un portage PC officiel de Rockstar.",
    sections: [
      {
        heading: "Qu'est-ce que le projet Leonida ?",
        body:
          "Leonida est un projet communautaire open source qui se décrit comme un effort de recompilation statique de la version Xbox Series de GTA VI. Son objectif général est de faire fonctionner cette version console nativement sous Windows en recréant ou en traduisant certaines parties de l'environnement de la plateforme. Ce n'est pas une édition Windows publiée par Rockstar : Leonida est un projet indépendant, sans affiliation ni validation officielle. Une page GitHub active ou des travaux techniques impressionnants ne signifient pas que le jeu est jouable.",
      },
      {
        heading: "Ce que le projet dit avoir accompli — et ce qui manque",
        body:
          "La section d'état du dépôt est explicite : le projet est encore précoce et le jeu ne démarre pas ; il n'y a ni mode histoire ni version jouable. Les développeurs indiquent avoir avancé sur l'analyse et les outils liés à certaines parties du traitement graphique et des ressources de la console, mais décrivent des travaux importants de compatibilité du runtime et des graphismes comme incomplets ou non testés avec l'exécutable réel du jeu. Ce sont les indications de l'équipe, pas un examen indépendant ni une démonstration que le jeu complet fonctionne. Le titre exact n'est donc pas « GTA 6 est jouable sur PC », mais « un projet communautaire travaille sur certains éléments d'un problème de compatibilité complexe ».",
      },
      {
        heading: "Le dépôt n'est pas un jeu PC prêt à télécharger",
        body:
          "Le README de Leonida précise que le dépôt ne contient ni GTA VI, ni clé de produit, ni exécutable compilé et qu'il n'explique pas comment les obtenir. Il décrit une copie du jeu fournie par l'utilisateur comme prérequis, tout en indiquant que le projet ne déchiffre pas le jeu et ne contourne pas ses protections. La page des versions GitHub était vide lors de notre vérification. Il n'existe donc pas de téléchargement Leonida officiel que l'on puisse présenter comme un portage PC jouable. La licence GPL-3.0 indiquée pour le dépôt concerne le code du projet ; elle ne vaut pas autorisation de redistribuer le jeu Rockstar, ses fichiers ou ses ressources protégées.",
      },
      {
        heading: "Ce que prouvent les liens Hacker News et Reddit",
        body:
          "La page Hacker News est une discussion au sujet du dépôt GitHub, pas un test du jeu. Des commentaires spéculent sur des fuites ou une sortie PC et d'autres évoquent la difficulté du support PC ; ils ne vérifient ni fuite, ni autorisation d'accéder aux fichiers du jeu, ni portage fonctionnel. Le lien Reddit partagé dans r/FitGirlRepack est également une publication communautaire, pas une déclaration de Rockstar. Nous n'avons pas pu consulter son contenu indépendamment pendant cette recherche et ne présentons donc pas ses affirmations comme des faits. Un lien de forum ou un nombre de votes ne confirme ni l'auteur d'un projet, ni les fichiers utilisés, ni le démarrage du jeu.",
      },
      {
        heading: "Pourquoi adapter un jeu console au PC est difficile",
        body:
          "Une édition PC doit fonctionner sur une grande variété de processeurs, cartes graphiques, pilotes, configurations mémoire, écrans et périphériques. Les services propres au système console et le comportement graphique doivent également trouver des équivalents, puis la stabilité et les performances doivent être testées sur du matériel réel. Une couche de traduction prometteuse peut résoudre certains problèmes sans achever le jeu, l'interface, les sauvegardes, le rendu des shaders ou le contrôle qualité. « Certains composants sont implémentés » et « une version PC complète et stable est prête » sont donc deux étapes très différentes. L'indication du dépôt selon laquelle le jeu ne démarre pas est plus importante qu'un titre viral.",
      },
      {
        heading: "Suivre le projet sans le confondre avec un portage officiel",
        body:
          "Pour connaître l'état annoncé, consultez le README et le suivi des problèmes du projet, et cherchez une démonstration reproductible avant de croire qu'il démarre. Vérifiez qu'une version existe réellement et qu'elle provient des mainteneurs du projet. Ne prenez pas un exécutable tiers, un repack ou un lien vers des fichiers divulgués pour une sortie officielle ; évitez d'exécuter des logiciels inconnus et de partager vos identifiants. La page GTA VI de Rockstar reste la référence pour les plateformes officiellement annoncées. Lors de notre consultation, elle indiquait PlayStation 5 et Xbox Series X|S, sans annoncer Leonida ni édition Windows officielle.",
      },
      {
        heading: "En bref",
        body:
          "Leonida est un véritable projet communautaire de code, public et ambitieux, mais sa propre documentation indique que GTA VI ne démarre pas et qu'aucune version jouable n'est fournie. Le projet peut être intéressant à suivre comme expérience technique, pas comme moyen de jouer aujourd'hui. La licence du code Leonida ne rend pas GTA VI open source, et les discussions de communauté ne prouvent ni autorisation, ni fuite, ni portage PC réussi. Nous mettrons cet article à jour si les mainteneurs publient une démonstration fonctionnelle ou si Rockstar annonce une version PC officielle.",
      },
    ],
    related: ["gta-6-pc-port-news", "gta-6-online-multiplayer-status"],
    sources: sources.leonida,
  },
];

const AR: GtaDraft[] = [
  {
    slug: "gta-6-pc-port-news",
    title: "نسخة GTA 6 للحاسوب: آخر المعلومات الرسمية وما ينبغي للاعبين معرفته",
    description:
      "تبحث عن أخبار نسخة GTA 6 للحاسوب؟ إليك المنصات التي تعلنها Rockstar رسميًا، وما لم يتم تأكيده للحاسوب، وكيفية تجنب التنزيلات المزيفة.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "أخبار GTA 6",
    readingTime: "5 دقائق قراءة",
    intro:
      "يستحق لاعبو الحاسوب الذين يبحثون عن نسخة GTA 6 إجابة واضحة بدلًا من الشائعات المتكررة. حتى 22 نوفمبر 2026، تذكر صفحة Rockstar الرسمية جهازَي PlayStation 5 وXbox Series X|S، ولا تعرض نسخة للحاسوب أو متطلبات تشغيل أو متجرًا خاصًا بها. هذه هي الحالة المؤكدة في الصفحة التي راجعناها، وليست توقعًا بشأن إصدار مستقبلي.",
    sections: [
      {
        heading: "ما الذي تؤكده Rockstar حاليًا؟",
        body:
          "تحدد صفحة GTA VI الرسمية منصتَي PS5 وXbox Series X|S. وهي المكان الأول الذي ينبغي الرجوع إليه عند البحث عن إعلان منصة جديدة. إلى أن تضيف Rockstar نسخة للحاسوب أو تنشر إعلانًا خاصًا بها، تظل مواعيد الإصدار ومتطلبات التشغيل والطلبات المسبقة غير مؤكدة.",
      },
      {
        heading: "كيف تتابع أخبار نسخة الحاسوب الحقيقية؟",
        body:
          "راجع صفحة GTA VI الرسمية وموقع Rockstar Newswire عند تداول أي إعلان. ابحث عن منشور رسمي أو صفحة متجر للحاسوب ومتطلبات واضحة، ولا تعتمد على عدّ تنازلي أو لقطة مجهولة أو منشور معاد نشره بلا مصدر أصلي. سنحدّث هذا الدليل إذا نشرت Rockstar معلومات تغيّر حالة المنصات.",
      },
      {
        heading: "تجنب تنزيلات GTA 6 المزيفة للحاسوب",
        body:
          "الموقع الذي يزعم توفير تنزيل قابل للعب للحاسوب قبل ظهور نسخة رسمية علامة خطر. لا تثبّت ملفات تنفيذية أو إضافات متصفح أو مشغلات من صفحات غير رسمية، ولا تدخل بيانات Rockstar أو Steam أو Epic أو بريدك في موقع يعدك بوصول مبكر. استخدم المتاجر الرسمية وتحقق من اسم الناشر قبل التنزيل.",
      },
      {
        heading: "هل إصدار اللعبة على الأجهزة المنزلية يؤكد نسخة للحاسوب؟",
        body:
          "لا. إصدار اللعبة على الأجهزة المنزلية لا يؤكد وحده وجود نسخة للحاسوب أو موعدها. ولا تكفي تواريخ ألعاب Rockstar السابقة لاستنتاج جدول إصدار موثوق لهذه اللعبة. من الأفضل الفصل بين المنصات المؤكدة والتكهنات والعودة إلى المصادر الرسمية عند تحديثها.",
      },
    ],
    related: ["what-is-unity-game-development", "how-we-published-4-games-on-the-app-store"],
    sources: sources.pc,
  },
  {
    slug: "gta-6-ps5-vs-xbox-performance",
    title: "أداء GTA 6 على PS5 مقابل Xbox Series X|S: ما المعلومات المؤكدة؟",
    description:
      "قارن GTA 6 على PS5 وPS5 Pro وXbox Series X وSeries S بالاستناد إلى المعلومات الرسمية، واعرف لماذا لا تُعد أرقام FPS غير الموثقة اختبارًا حقيقيًا.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "أداء GTA 6",
    readingTime: "6 دقائق قراءة",
    intro:
      "يحتاج سؤال «هل GTA 6 أفضل على PS5 أم Xbox؟» إلى أكثر من رأي متعصب لمنصة. تذكر Rockstar جهازي PS5 وXbox Series X|S، وتستخدم في صفحتها عبارة «Plays Best On PlayStation 5». كما تصف صفحة PlayStation اللعبة بأنها محسّنة لـ PS5 Pro. هذه بيانات رسمية عن المنصات وليست مقارنة تقنية مضبوطة بين كل الأجهزة.",
    sections: [
      {
        heading: "ماذا تقول صفحات المنصات الرسمية؟",
        body:
          "تذكر Rockstar جهازَي PlayStation 5 وXbox Series X|S، وتسلط الضوء على PS5 بعبارة «Plays Best On». وتذكر PlayStation بشكل منفصل أن اللعبة محسّنة لـ PS5 Pro. توضح هذه العبارات المنصات وطريقة تقديم إصدار PlayStation، لكنها لا تنشر قياسات مقارنة لمعدل الإطارات أو الدقة لكل طراز.",
      },
      {
        heading: "ما الذي يجب أن يقيسه الاختبار العادل؟",
        body:
          "ينبغي لأي مقارنة مفيدة أن تحدد طراز الجهاز وإصدار اللعبة ووضع العرض والمشهد المختبر. كما يجب أن تقيس ثبات معدل الإطارات والدقة والتحميل وأوضاع الجودة أو الأداء. يجب فصل PS5 Pro عن PS5 العادي، وXbox Series X عن Series S. لا تكفي لقطة قصيرة على وسائل التواصل أو مقطع دعائي لإثبات النتائج.",
      },
      {
        heading: "كيف تختار قبل توفر اختبارات موثوقة؟",
        body:
          "اختر الجهاز الأنسب لميزانيتك ومكتبتك وأصدقائك واشتراكاتك وشاشتك. إذا كان الأداء هو الأولوية، فانتظر اختبارات مستقلة قابلة للتكرار تشرح منهجيتها. لا تخلط بين وصف «محسّن» أو مقطع ترويجي وبين الاختبار التقني، وتحقق من تاريخ النشر لأن التحديثات قد تغير النتائج.",
      },
      {
        heading: "خلاصة المعلومات الحالية",
        body:
          "لا توفر المصادر الرسمية التي راجعناها جدولًا كاملًا لقياسات الأداء بين PS5 وPS5 Pro وXbox Series X وXbox Series S. لذلك لا يمكننا اختيار فائز عام أو نشر أرقام FPS ودقة غير موثقة. سنحدّث هذا القسم عند توفر اختبارات تقنية قابلة للتحقق.",
      },
    ],
    related: ["gta-6-pc-port-news", "gta-6-price-in-morocco"],
    sources: sources.console,
  },
  {
    slug: "gta-6-price-in-morocco",
    title: "سعر GTA 6 في المغرب: طريقة التحقق من إصدارات PS5 وXbox بأمان",
    description:
      "تبحث عن سعر GTA 6 في المغرب؟ تعرّف على طريقة التحقق من متجر PS5 أو Xbox الإقليمي ومقارنة الإصدارات وتجنب عروض البائعين المضللة.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "GTA 6 في المغرب",
    readingTime: "5 دقائق قراءة",
    intro:
      "قد يختلف سعر GTA 6 بحسب المنصة والإصدار والبائع ومنطقة الحساب. تؤكد الصفحات الرسمية التي راجعناها اللعبة ومنصاتها، لكنها لا تعرض سعرًا موثوقًا بالدرهم المغربي. بدلًا من تكرار سعر قديم على أنه حالي، اتبع الخطوات التالية للتحقق من العرض الظاهر لحسابك قبل الدفع.",
    sections: [
      {
        heading: "تحقق من متجر منطقة حسابك",
        body:
          "افتح PlayStation Store أو Xbox Store بالحساب الذي ستلعب به. تحقق من العملة والمنصة واسم الإصدار والإجمالي الظاهر عند إتمام الشراء. السعر الظاهر في متجر أمريكي أو بريطاني أو فرنسي لا يعني بالضرورة أنه سعر الحساب المغربي أو النسخة المادية المحلية.",
      },
      {
        heading: "قارن الإصدارات وليس السعر الرئيسي فقط",
        body:
          "إذا توفرت إصدارات متعددة، فقارن محتوياتها ومكافآتها الرقمية. تحقق مما إذا كان العرض للعبة كاملة أو ترقية أو حزمة أو ميزة اشتراك. وبالنسبة للقرص، تأكد من ملاءمته لطراز جهازك واسأل البائع عن المنطقة واللغة والإرجاع والضمان.",
      },
      {
        heading: "احذر الأكواد الرخيصة والحسابات المشتركة",
        body:
          "قد يكون الكود الأرخص بكثير من المعتاد منتهي الصلاحية أو مخصصًا لمنطقة أخرى أو مستخدمًا مسبقًا أو من مصدر غير مصرح به. تجنب العروض التي تطلب كلمة مرورك أو بيانات استعادة الحساب أو التحكم عن بُعد بجهازك. استعمل طريقة الاسترداد الرسمية واحتفظ بالإيصال حتى تظهر اللعبة في مكتبتك.",
      },
      {
        heading: "حالة السعر في المغرب",
        body:
          "لم نتمكن وقت التحقق من تأكيد سعر حالي لـ GTA 6 بالدرهم المغربي اعتمادًا على المصادر الرسمية أدناه. لذلك لا نخترع رقمًا في هذا الدليل. راجع المتجر الإقليمي والبائعين المغاربة المعروفين مباشرة، وعند تحديث هذه الصفحة يجب ذكر الإصدار والبائع والعملة والتاريخ.",
      },
    ],
    related: ["gta-6-ps5-vs-xbox-performance", "gta-6-pc-port-news"],
    sources: sources.price,
  },
  {
    slug: "gta-6-beginners-tips",
    title: "نصائح للمبتدئين في GTA 6: الاستكشاف والمركبات والأسلحة والإعدادات",
    description:
      "بدأت GTA 6 للتو؟ إليك نصائح عملية عن الخريطة والمسح وحالة المركبات وإدارة الأسلحة وإعدادات الملاحة دون الاعتماد على حيل غير مؤكدة.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "أدلة GTA 6",
    readingTime: "7 دقائق قراءة",
    intro:
      "تكافئ Leonida اللاعبين الذين يستكشفون العالم وينتبهون إلى واجهة اللعبة. يركز هذا الدليل للمبتدئين على أنظمة يذكرها دليل GTA VI الحالي: مؤشرات الخريطة والمسح وحالة المركبات وملكية الأسلحة والملاحة. لا يتضمن شرحًا للمهمات، ويقلل كشف تفاصيل القصة.",
    sections: [
      {
        heading: "استخدم الخريطة للاستكشاف",
        body:
          "لا تكتفِ باتباع خط الطريق. يذكر الدليل أن بعض المباني القابلة للاستكشاف تظهر حدودها على الخريطة عند تكبيرها. عند دخول حي جديد، ألقِ نظرة على الشوارع والمباني القريبة لاكتشاف أماكن تستحق الزيارة دون فتح قائمة مليئة بالحرق.",
      },
      {
        heading: "انتبه إلى إشارات المسح",
        body:
          "يُسجل نظام WAiNK بعض المواقع والغرائب عن طريق المسح. يصف الدليل نبضات وحدة التحكم كإشارة اتجاهية عند الاقتراب من نقطة مسح. إذا شعرت بنبضة، أبطئ الحركة وانظر حولك واستخدم مسح الهاتف بدلًا من تجاوز موقع الاهتمام.",
      },
      {
        heading: "أدر الأسلحة والذخيرة بعناية",
        body:
          "يفرق الدليل بين الأسلحة التي تملكها والأسلحة التي تلتقطها مؤقتًا أثناء اللعب. لا تفترض أن كل سلاح تلتقطه يصبح جزءًا دائمًا من تجهيزك. راقب الذخيرة واستعمل خيارات التخزين المتاحة وتحقق من مخزونك قبل الدخول في مواجهة طويلة.",
      },
      {
        heading: "راقب حالة المركبة والوقود",
        body:
          "تجعل مؤشرات حالة المركبة والوقود القيادة أكثر أهمية. راجع شاشة المركبة أثناء القيادة وتجنب الاصطدامات غير الضرورية وتذكر أن الإصلاح قد يكلف المال. القيادة الهادئة في بداية الرحلة قد توفر عليك الالتفاف عند الابتعاد عن مركز الخدمة.",
      },
      {
        heading: "اضبط الملاحة وتعلم أزرار التحكم",
        body:
          "إذا كانت الإرشادات الصوتية تشتتك، يشير الدليل إلى خيار GPS Voice ضمن إعدادات الصوت. اضبطه حسب تفضيلك وتعلم عناصر التحكم في مكان آمن. تساعد التعديلات البسيطة على جعل الرحلات الطويلة أسهل دون إزالة التحدي أو استخدام ثغرات.",
      },
    ],
    related: ["gta-6-hidden-locations-secrets", "gta-6-ps5-vs-xbox-performance"],
    sources: sources.tips,
  },
  {
    slug: "gta-6-hidden-locations-secrets",
    title: "أسرار GTA 6 والمواقع المخفية: مقتنيات تستحق الاستكشاف",
    description:
      "اكتشف المزيد في Leonida مع دليل أسرار GTA 6 الذي يتناول مسح WAiNK وفن Ahol والأسلحة الفريدة والمركبات المميزة والكنوز تحت الماء.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "أسرار GTA 6",
    readingTime: "7 دقائق قراءة",
    intro:
      "تنبيه: يناقش هذا الدليل أنواع المقتنيات وأنظمة الاستكشاف، لكنه يتجنب كشف المهمات ولا ينسخ خرائط أو قوائم مواقع كاملة من مواقع أخرى. قد يكون السر الممتع نظامًا لم تجربه بعد: مسح شيء غريب أو العودة إلى الساحل أو تفقد حي جديد بحثًا عن عناصر فريدة.",
    sections: [
      {
        heading: "ابدأ بمسح WAiNK والغرائب المحلية",
        body:
          "يسرد الدليل نقاط WAiNK للمواقع والمعالم والغرائب والمنحوتات واللوحات والرسوم في Leonida. تعامل مع ظهور الإشارة كدعوة لاستكشاف المكان القريب، لا كأيقونة لإزالتها من الخريطة فحسب. قد تساعد نبضات وحدة التحكم الاتجاهية على تضييق مكان الهدف.",
      },
      {
        heading: "ابحث عن أعمال Ahol Sniffs Glue الفنية",
        body:
          "فن Ahol Street Art مجموعة غير مألوفة مخبأة على أشياء يومية في Vice City. يحصي دليل IGN 112 قطعة ضمن 11 فئة، منها المراتب والإطارات والعجلات والثلاجات وأجهزة التلفاز. لتبدأ دون اتباع خريطة كاملة، جرّب هذه الأمثلة الثلاثة من الدليل:",
        bullets: [
          "مرتبة في Tequesta: قرب درج مبنى سكني في SW 4th St.",
          "مرتبة في Bayside: في موقف سيارات قيد الإنشاء قرب Catalan Blvd وNE 4th Ave.",
          "مرتبة في Ocean Beach: في الزقاق خلف Cirque de Cuisine قرب Fig St.",
        ],
        bodyAfter:
          "لمسح العمل، يذكر الدليل الضغط المطول على زر الاتجاه للأعلى ثم R1 على PlayStation أو RB على Xbox لاستخدام WAiNK. هذه أمثلة وليست مسارًا كاملًا؛ راجع المصدر المرتبط للخرائط وبقية القطع.",
      },
      {
        heading: "انتبه إلى الأسلحة والمركبات الفريدة",
        body:
          "يفصل دليل المقتنيات أنواع الأسلحة الفريدة عن الالتقاطات العادية ويشير إلى مركبات مميزة ذات تفاصيل مخصصة. إذا بدا عنصر مختلفًا، افحصه وراجع قائمة التقدم في اللعبة. قد يكون من الأفضل الاحتفاظ ببعض الاكتشافات بدلًا من بيعها أو تعديلها فورًا.",
      },
      {
        heading: "استكشف تحت الماء واكتب قائمتك الخاصة",
        body:
          "يشير دليل المقتنيات أيضًا إلى كنوز حطام السفن والبطاقات والمجلات والكتب والجداريات واكتشافات أخرى. يسهل تفويت ما تحت الماء إذا اقتصرت تنقلاتك على الطرق. تابع ما وجدته في قائمة التقدم وسجل طريقك حتى لا تعود إلى الشوارع نفسها مرارًا.",
      },
      {
        heading: "ملاحظة حول اكتمال القوائم",
        body:
          "تتغير أدلة المقتنيات مع التحقق من اكتشافات جديدة. ويشير IGN إلى أن أجزاءً من مرجعه الأشمل ما تزال قيد الإعداد، لذلك فالأعداد والمواقع المحددة تمثل نسخة مؤرخة من الدليل ولا تضمن توثيق كل الأسرار. سنراجع هذه الصفحة عندما تتغير المصادر أو الاكتشافات داخل اللعبة.",
      },
    ],
    related: ["gta-6-beginners-tips", "gta-6-pc-port-news"],
    sources: sources.secrets,
  },
  {
    slug: "gta-6-giveaways-free-codes",
    title: "مسابقات GTA 6: كيفية التحقق من الأكواد المجانية وادعاءات اليوتيوبرز",
    description:
      "تبحث عن كود GTA 6 مجاني؟ لم نتمكن من التحقق من مسابقة نشطة ليوتيوبر مشهور عبر قواعد رسمية. تعرّف على طريقة فحص العروض وتجنب الروابط المزيفة.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "مسابقات GTA 6",
    readingTime: "5 دقائق قراءة",
    intro:
      "قد تخلط نتائج البحث عن كود GTA 6 مجاني بين بثوث اللعب الحقيقية وادعاءات مسابقات غير مؤكدة. لم نتمكن، ضمن المصادر التي راجعناها لهذا الدليل، من تأكيد مسابقة نشطة للعبة GTA 6 من يوتيوبر مشهور لها قواعد رسمية وجائزة واضحة. هذا المقال ليس قائمة بأكواد صالحة، ولن نختلق أسماء منشئين أو فائزين أو مواعيد نهائية. تحقق من أي عرض قبل المشاركة.",
    sections: [
      {
        heading: "بث GTA لا يثبت وجود مسابقة",
        body:
          "لعب منشئ محتوى GTA 6 أو تفاعله مع مقطع دعائي أو خوضه تحديًا داخل اللعبة لا يعني أنه يوزع نسخة من اللعبة أو كودًا. يسهل تقليد العناوين والصور المصغرة. لم نتمكن من التحقق من مسابقة نشطة للعبة GTA 6 من يوتيوبر مشهور عبر منشور رسمي وشروط منشورة؛ لذلك لا نعرض أي منشئ هنا على أنه يوزع كودًا حاليًا. راجع القناة أو الحساب الرسمي الموثق للمنشئ بحثًا عن إعلان حديث.",
      },
      {
        heading: "ابحث عن قواعد كاملة ومعلنة",
        body:
          "تشترط YouTube وجود قواعد رسمية للمسابقات التي تُجرى على منصتها أو تستخدمها، وتنص على أن المشاركة يجب أن تكون مجانية. ينبغي أن تشرح القواعد الجائزة وطريقة منحها وشروط الأهلية والموعد وكيفية التعامل مع البيانات الشخصية، وأن توضح أن YouTube ليست راعية للمسابقة. إذا لم توجد قواعد أو كان المنظم مجهولًا أو تغيرت الشروط عبر رسائل خاصة، فلا تعتبر العرض مسابقة مؤكدة.",
      },
      {
        heading: "لا تدفع ولا تشارك بيانات الدخول",
        body:
          "لا ينبغي لأي عرض حقيقي أن يطلب كلمة مرور حساب Rockstar أو Google أو Apple أو Microsoft أو منصة الألعاب. لا تدفع رسومًا لاستلام جائزة مزعومة، ولا تثبّت ملفًا مجهولًا، ولا تربط محفظة عملات رقمية، ولا ترسل رمز تسجيل دخول مؤقتًا. تحقق من الحساب الحقيقي للمنشئ وافتحه من ملفه المعروف بدلًا من اتباع تعليق أو رسالة خاصة غير مطلوبة.",
      },
      {
        heading: "تحقق مما تتضمنه الجائزة بالضبط",
        body:
          "قد تكون الجائزة نسخة لمنصة معينة أو إصدارًا محددًا أو رصيدًا لمتجر، وليس كود GTA 6 عامًا. قبل المشاركة، ابحث عن نوع الجائزة والمنصة والقيود الجغرافية وموعد الإغلاق وطريقة الاختيار وإعلان الفائز. إذا غابت هذه التفاصيل أو وُصفت الجائزة بعبارة عامة مثل «كود مجاني»، فلن تستطيع معرفة ما الذي يعرضه المنظم فعلًا.",
      },
      {
        heading: "أين تتحقق من توفر GTA 6",
        body:
          "للحصول على معلومات رسمية عن الإصدار والمنصات، ابدأ بصفحة GTA VI لدى Rockstar واتبع روابط المتاجر المدعومة. مولد الأكواد غير الرسمي ليس مسابقة من Rockstar. سنحدّث هذا الدليل إذا نشر منشئ مشهور قواعد مسابقة GTA 6 قابلة للتحقق؛ وحتى ذلك الحين لا نعرض هنا أي مسابقات منشئين مؤكدة.",
      },
    ],
    related: ["gta-6-price-in-morocco", "gta-6-beginners-tips"],
    sources: sources.giveaways,
  },
  {
    slug: "gta-6-editions-standard-vs-ultimate",
    title: "إصدارا GTA 6 Standard وUltimate: ما محتوى كل إصدار؟",
    description:
      "قارن بين إصدارَي GTA 6 Standard وUltimate بالاعتماد على صفحة PlayStation الرسمية. تعرّف على إضافات Ultimate وكيف تختار ما يناسب أسلوب لعبك.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "دليل شراء GTA 6",
    readingTime: "5 دقائق قراءة",
    intro:
      "يسهل اختيار إصدار GTA 6 عندما تفرق بين اللعبة نفسها والإضافات الاختيارية. تعرض PlayStation إصدارَي Standard وUltimate، وتصف Ultimate بأنها مجموعة إضافية من المركبات والأسلحة والملابس والعناصر المرتبطة بعالم القصة. قد يختلف العرض والسعر والتوفر حسب المتجر والمنطقة؛ لذلك تبقى صفحة المتجر الظاهرة لحسابك المرجع النهائي قبل الشراء. يلخص هذا الدليل المعلومات المنشورة دون افتراض أن الإصدار الأعلى سعرًا أفضل قيمة تلقائيًا.",
    sections: [
      {
        heading: "ماذا يعني إصدارا Standard وUltimate؟",
        body:
          "يناسب إصدار Standard من يريد اللعبة دون دفع ثمن المجموعة المميزة المذكورة. ويضم إصدار Ultimate اللعبة ومجموعة إضافات تشرحها PlayStation. راجع صفحة المنتج الحالية؛ فقد تتغير أسماء الإصدارات وخيارات الترقية والتوفر، كما أن الحزمة أو ميزة الاشتراك ليست بالضرورة المنتج نفسه. قارن الإصدار الظاهر في صفحة الدفع، لا نتيجة بحث أو عنوان إعلان بائع فقط.",
      },
      {
        heading: "ما إضافات Ultimate حسب PlayStation؟",
        body:
          "تقسم الصفحة الرسمية إضافات Ultimate إلى فئات عدة. وتذكر مركبات مثل Grotti Cheetah وDinka Enduro وقارب Crest Kayak وسيارة Vapid Dominator Buggy، إضافة إلى نسخ مختلفة من الأسلحة والملابس وخيارات المظهر وتخصيص المركبات ومجموعة من السيارات الكلاسيكية. كما تسمي أماكن للتخصيص وعناصر تجميلية. راجع كل إضافة على حدة: قد تهم بعض اللاعبين العناصر ذات الطابع الخاص وخيارات المرآب، بينما يفضل آخرون دفع ثمن اللعبة الأساسية فقط.",
      },
      {
        heading: "هل يضيف Ultimate قصة أطول؟",
        body:
          "تصف PlayStation إصدار Ultimate بأنه مجموعة مميزة من العناصر ضمن تجربة اللعبة؛ ولا تعلن تفاصيل الإصدار المذكورة هنا عن حملة قصصية منفصلة. لا تفترض أن السعر الأعلى يعني قصة رئيسية أطول أو أفضلية تنافسية. اقرأ صفحة منطقتك لمعرفة المحتويات وتوقيت توفرها، خصوصًا إذا كانت مركبة أو قطعة سلاح أو ملابس محددة هي سبب التفكير في الترقية.",
      },
      {
        heading: "كيف تقرر إن كانت الإضافات تستحق فرق السعر؟",
        body:
          "ابدأ بمقارنة فرق السعر الظاهر في متجرك، ثم اسأل نفسك هل كنت ستشتري هذه الإضافات لو بيعت منفردة. إذا كانت الإجابة لا، فقد يكون Standard أنسب. وإذا كنت تستمتع بجمع المركبات وتخصيص الشخصيات واستكشاف العناصر الاختيارية، فقد يناسبك Ultimate؛ فالقيمة شخصية ولا يضمنها اسم الإصدار. لا تنفق المال المخصص للعبة أخرى أو لمساحة تخزين ضرورية لمجرد أن الحزمة توصف بأنها مميزة.",
      },
      {
        heading: "تحقق من المنطقة والمنصة وتفاصيل الشراء",
        body:
          "قبل الدفع، تأكد أن الصفحة تخص جهازك ومنطقة حسابك، وراجع السعر النهائي والعملة وما إذا كان المنتج رقميًا أو قرصًا. اشترِ النسخة الرقمية من المتجر الرسمي واحتفظ بالإيصال. وبالنسبة للقرص، تحقق من توافقه مع جهازك واسم الإصدار على العلبة وشروط إرجاع البائع. إذا ادعى كود من طرف ثالث أنه يفتح إضافات Ultimate بسعر منخفض بصورة غير منطقية، فتحقق من منطقته وطريقة استرداده قبل الدفع، ولا تشارك كلمة مرور حسابك للحصول على الترقية.",
      },
      {
        heading: "إجابة سريعة: أي إصدار تختار؟",
        body:
          "اختر Standard إذا كان هدفك لعب اللعبة الأساسية دون دفع ثمن مجموعة إضافية. وفكر في Ultimate بعد مراجعة محتوياته والتأكد أن الإضافات تستحق فرق السعر المحلي بالنسبة إليك. توضح صفحة PlayStation الرسمية الحزمة المعلنة، بينما يؤكد المتجر الإقليمي العرض المتاح لحسابك. راجع المصدرين قبل الشراء لأن التفاصيل قد تتغير.",
      },
    ],
    related: ["gta-6-price-in-morocco", "gta-6-beginners-tips"],
    sources: sources.editions,
  },
  {
    slug: "gta-6-online-multiplayer-status",
    title: "هل GTA 6 لعبة جماعية عبر الإنترنت؟ الفردي واللعب دون اتصال والمعلومات المؤكدة",
    description:
      "هل تتساءل إن كانت GTA 6 تدعم اللعب الجماعي عبر الإنترنت؟ تعرّف على ما تؤكده صفحة PlayStation عن اللعب الفردي ودون اتصال، وما لا تعد به.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "شرح GTA 6",
    readingTime: "5 دقائق قراءة",
    intro:
      "تخلط الأسئلة عن GTA 6 Online أحيانًا بين معلومات المنتج المؤكدة والتوقعات حول أنماط مستقبلية. تصف صفحة PlayStation لعبة Grand Theft Auto VI حاليًا بأنها تجربة فردية، وتذكر أن اللعب دون اتصال متاح. يوضح ذلك محتوى الصفحة الحالية، لكنه لا يؤكد نمطًا جماعيًا منفصلًا أو موعده أو كيفية عمل خدمة عبر الإنترنت مستقبلًا. نفصل هنا بين هذه المعلومات والتكهنات لتقرر على أساس اللعبة المعروضة فعلًا.",
    sections: [
      {
        heading: "ما الذي تؤكده الصفحة الرسمية عن عدد اللاعبين؟",
        body:
          "تصنف صفحة PlayStation لعبة GTA VI كتجربة فردية وتذكر لاعبًا واحدًا. وتركز صفحة Rockstar على قصة Jason وLucia في Leonida. تدعم هذه الأوصاف الرسمية التعامل مع المنتج المعروض حاليًا على أنه تجربة قصصية فردية. وهي أكثر موثوقية من عنوان فيديو يعلن موعدًا للعب الجماعي دون رابط إلى إعلان من الناشر.",
      },
      {
        heading: "هل يمكنك لعب GTA 6 دون اتصال؟",
        body:
          "تذكر صفحة PlayStation أن اللعب دون اتصال متاح، وهي معلومة مهمة لمن يريد الاستمتاع بالقصة الفردية دون البقاء متصلًا باستمرار. وتذكر صفحة المتجر نفسها أن بعض الوظائف أو الخدمات قد تتطلب اتصالًا أو حسابًا؛ لذا لا يعني اللعب دون اتصال أن كل تنزيل أو تحديث أو خدمة تعمل بلا إنترنت. نزّل اللعبة وتحديثاتها عبر المنصة الرسمية وراجع شروط الإصدار الحالي.",
      },
      {
        heading: "هل GTA Online مضمّنة في GTA 6؟",
        body:
          "لا تصف معلومات المنتج التي نستند إليها منتجًا جماعيًا منفصلًا من GTA VI، ولا تقول إن خدمة GTA Online الحالية مضمّنة مع اللعبة الفردية. لا تفترض أن GTA Online وGTA VI اسم واحد أو أن شراء إحداهما يمنحك تلقائيًا الأخرى. إذا أعلنت Rockstar عن نمط جديد عبر الإنترنت أو حزمة، فراجع الإعلان وتفاصيل المنتج في قنواتها الرسمية.",
      },
      {
        heading: "كيف تتحقق من ادعاءات موعد اللعب الجماعي؟",
        body:
          "تعامل مع موعد اللعب الجماعي على أنه غير مؤكد إلى أن تنشره Rockstar. توقعات منشئ محتوى أو لقطة تبدو مسربة أو عدّ تنازلي لا يثبت وجود جدول رسمي. تحقق مما إذا كان الخبر يرتبط بمنشور مؤرخ في Rockstar Newswire أو صفحة منتج أو وثائق دعم رسمية. انتبه أيضًا إلى تاريخ الخبر؛ فقد تصف المقالات القديمة وضعًا سابقًا للإطلاق. يلخص هذا الدليل الصفحات الرسمية التي راجعناها ولا يتنبأ بالتحديثات.",
      },
      {
        heading: "ما الذي ينتظره اللاعبون الفرديون؟",
        body:
          "إذا اشتريت GTA VI من أجل القصة، يمكنك استكشاف الأدلة المتعلقة بالقيادة والإعدادات والمقتنيات دون انتظار اتصال مجموعة من الأصدقاء. اضبط جهازك والعب بالسرعة المناسبة لك. وإذا كان اللعب الجماعي شرطًا أساسيًا للشراء، فانتظر وصفًا صريحًا من Rockstar للنمط والمحتوى والمنصات والتكلفة المحتملة بدلًا من الاعتماد على الافتراضات.",
      },
      {
        heading: "إجابة سريعة: حالة اللعب الجماعي في GTA 6",
        body:
          "تصف صفحة PlayStation الحالية GTA VI بأنها لعبة فردية، وتذكر أن اللعب دون اتصال متاح. ولم تؤكد التفاصيل التي راجعناها لهذا المقال وجود نمط جماعي منفصل لـ GTA VI عبر الإنترنت. تابع قنوات Rockstar الرسمية وميّز بين المزايا المعلنة وتكهنات المعجبين.",
      },
    ],
    related: ["gta-6-beginners-tips", "gta-6-ps5-vs-xbox-performance"],
    sources: sources.online,
  },
  {
    slug: "gta-6-leonida-pc-recompilation-project",
    title: "هل وصل منفذ GTA 6 للحاسوب؟ ما يستطيع Leonida فعله وما لا يستطيع",
    description:
      "نستعرض مشروعي Leonida وXbox2Windows ومحاولات المجتمع لتشغيل GTA VI على Windows، وما تقوله تقاريرهما عن إمكانية تشغيل اللعبة فعليًا.",
    date: UPDATED,
    updatedAt: UPDATED,
    category: "أخبار GTA 6",
    readingTime: "7 دقائق قراءة",
    intro:
      "لفت مشروع Leonida الأنظار على GitHub وHacker News بوصفه محاولة مجتمعية لتشغيل Grand Theft Auto VI على الحاسوب. لكن ينبغي التمييز بين طموح المشروع وحالته الفعلية. عند مراجعة مستودعه، ذكر ملف README أن اللعبة لا تبدأ وأنه لا توجد نسخة قابلة للعب. نلخص هنا ما يمكن التحقق منه، وما يبقى مجرد نقاش على الإنترنت، ولماذا لا يمثل المشروع إصدارًا رسميًا من Rockstar للحاسوب.",
    sections: [
      {
        heading: "ما مشروع Leonida؟",
        body:
          "Leonida مشروع مجتمعي مفتوح المصدر يصف نفسه بأنه جهد لإعادة التجميع الثابت لنسخة Xbox Series من GTA VI. هدفه العام هو محاولة تشغيل نسخة الأجهزة المنزلية على Windows عبر إعادة إنشاء أو ترجمة أجزاء من بيئة المنصة. وهذا يختلف عن إصدار رسمي للحاسوب من Rockstar؛ فـLeonida مشروع مستقل ولا يمثل تأييدًا رسميًا. وجود صفحة GitHub نشطة أو عمل تقني طموح لا يعني أن اللعبة أصبحت قابلة للعب.",
      },
      {
        heading: "ما الذي يقول المشروع إنه أنجزه وما الذي لم يكتمل؟",
        body:
          "توضح صفحة حالة المستودع أن المشروع لا يزال في مرحلة مبكرة وأن اللعبة لا تعمل؛ فلا يوجد نمط قصة أو إصدار قابل للعب. ويذكر المطورون تقدمًا في الأبحاث والأدوات المتعلقة ببعض أجزاء الرسوميات وموارد نسخة الأجهزة المنزلية، لكنهم يصفون أجزاء مهمة من توافق بيئة التشغيل والرسوميات بأنها غير مكتملة أو لم تُختبر بعد مع الملف التنفيذي الفعلي للعبة. هذه تقارير المشروع عن نفسه، وليست مراجعة مستقلة أو عرضًا يثبت تشغيل اللعبة كاملة. لذلك فالخلاصة ليست «أصبحت GTA 6 قابلة للعب على الحاسوب»، بل «يعمل مشروع مجتمعي على بعض أجزاء مشكلة توافق معقدة».",
      },
      {
        heading: "المستودع ليس لعبة حاسوب جاهزة للتنزيل",
        body:
          "يقول ملف README الخاص بـLeonida إن المستودع لا يحتوي على GTA VI أو مفاتيح اللعبة أو ملف تنفيذي جاهز، ولا يشرح كيفية الحصول عليها. كما يذكر أن المشروع يتطلب نسخة يملكها المستخدم، ويقول إنه لا يفك تشفير اللعبة ولا يتجاوز وسائل الحماية. كانت صفحة إصدارات GitHub فارغة عند التحقق. لذلك لا يوجد تنزيل رسمي من Leonida يمكن وصفه بأنه نسخة حاسوب قابلة للعب. وترخيص GPL-3.0 الظاهر للمستودع يخص كود المشروع المدرج فيه؛ ولا يعني السماح بإعادة توزيع لعبة Rockstar أو ملفاتها أو أصولها المحمية.",
      },
      {
        heading: "ما الذي تثبته روابط Hacker News وReddit؟",
        body:
          "صفحة Hacker News نقاش حول مستودع GitHub وليست اختبارًا للعبة. تتضمن التعليقات تكهنات بشأن التسريبات وموعد نسخة الحاسوب وآراء حول صعوبة دعم أجهزة الحاسوب؛ لكنها لا تثبت وجود تسريب أو إذن باستخدام ملفات اللعبة أو نجاح تشغيل نسخة للحاسوب. ورابط Reddit الذي أرسلته في مجتمع r/FitGirlRepack هو منشور مجتمعي أيضًا وليس تصريحًا من Rockstar. لم نتمكن من قراءة محتواه بشكل مستقل أثناء البحث، لذلك لا نعرض ادعاءاته على أنها حقائق مؤكدة. وجود رابط في منتدى أو ارتفاع عدد الأصوات لا يثبت هوية المطورين أو الملفات المستخدمة أو أن اللعبة تعمل.",
      },
      {
        heading: "لماذا يصعب نقل لعبة أجهزة منزلية إلى الحاسوب؟",
        body:
          "يحتاج إصدار الحاسوب إلى العمل على معالجات وبطاقات رسوميات وتعريفات وذاكرة وشاشات وأجهزة تحكم متعددة. كما يجب توفير بدائل لخدمات نظام الأجهزة المنزلية وسلوك الرسوميات، ثم اختبار الأداء والاستقرار على أجهزة فعلية. قد تحل طبقة ترجمة واعدة بعض المشكلات دون أن تكمل اللعبة أو الواجهة أو حفظ التقدم أو مسار الرسوميات أو ضمان الجودة. لذا فإن «تنفيذ بعض المكونات» و«جاهزية نسخة كاملة ومستقرة للحاسوب» مرحلتان مختلفتان تمامًا. ولهذا تهم حالة المشروع التي تقول إن اللعبة لا تبدأ أكثر من العنوان المنتشر.",
      },
      {
        heading: "كيف تتابع المشروع دون اعتباره إصدارًا رسميًا؟",
        body:
          "لمعرفة الحالة التي يعلنها المشروع، راجع README وقائمة المشكلات في GitHub وابحث عن عرض يمكن تكراره قبل تصديق أن اللعبة تعمل. تحقق من وجود إصدار فعلي وأنه صادر عن القائمين على المشروع. لا تعتبر ملفًا تنفيذيًا من طرف ثالث أو نسخة Repack أو رابط ملفات مسربة إصدارًا رسميًا؛ وتجنب تشغيل البرامج المجهولة أو مشاركة بيانات حسابك. تبقى صفحة GTA VI لدى Rockstar المرجع للمنصات المعلنة رسميًا. عند مراجعتها، كانت تذكر PlayStation 5 وXbox Series X|S دون الإعلان عن Leonida أو نسخة Windows رسمية.",
      },
      {
        heading: "الخلاصة",
        body:
          "Leonida مشروع كود مجتمعي حقيقي ومعلن وطموح، لكن توثيقه نفسه يقول إن GTA VI لا تعمل وإنه لا يوفر نسخة قابلة للعب. قد يكون المشروع جديرًا بالمتابعة كتجربة تقنية، لكنه ليس طريقة للعب اليوم. ترخيص كود Leonida لا يجعل GTA VI مفتوحة المصدر، ونقاشات المجتمع لا تثبت وجود إذن أو تسريب أو إصدار ناجح للحاسوب. سنحدّث المقال إذا نشر القائمون عرضًا يعمل أو أعلنت Rockstar عن نسخة رسمية للحاسوب.",
      },
    ],
    related: ["gta-6-pc-port-news", "gta-6-online-multiplayer-status"],
    sources: sources.leonida,
  },
];

export const GTA_ARTICLES: Record<Lang, BlogPost[]> = {
  en: withGtaMedia(EN, "en"),
  fr: withGtaMedia(FR, "fr"),
  ar: withGtaMedia(AR, "ar"),
};
