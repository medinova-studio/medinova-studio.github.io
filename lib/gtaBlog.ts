import type { Lang } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

const UPDATED = "2026-11-22";
type GtaDraft = Omit<BlogPost, "hero" | "heroAlt" | "videoId" | "videoTitle">;
type GtaMedia = {
  hero: string;
  heroAlt: Record<Lang, string>;
  videoId: string;
  videoTitle: string;
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
const THUMBNAILS = {
  coverArtReveal: `https://i.ytimg.com/vi/${COVER_ART_REVEAL.id}/maxresdefault.jpg`,
  extendedLook: `https://i.ytimg.com/vi/${EXTENDED_LOOK.id}/maxresdefault.jpg`,
  outNow: `https://i.ytimg.com/vi/${OUT_NOW.id}/maxresdefault.jpg`,
  launchTrailer: `https://i.ytimg.com/vi/${LAUNCH_TRAILER.id}/maxresdefault.jpg`,
  trailer2: "https://i.ytimg.com/vi/VQRLujxTm3c/maxresdefault.jpg",
};

const GTA_MEDIA: Record<string, GtaMedia> = {
  "gta-6-pc-port-news": {
    hero: THUMBNAILS.coverArtReveal,
    heroAlt: {
      en: "Official Grand Theft Auto VI cover art reveal by Rockstar Games",
      fr: "Révélation officielle de la jaquette de Grand Theft Auto VI par Rockstar Games",
      ar: "الكشف الرسمي عن غلاف Grand Theft Auto VI من Rockstar Games",
    },
    videoId: COVER_ART_REVEAL.id,
    videoTitle: COVER_ART_REVEAL.title,
  },
  "gta-6-ps5-vs-xbox-performance": {
    hero: THUMBNAILS.extendedLook,
    heroAlt: {
      en: "Official Grand Theft Auto VI extended look by Rockstar Games",
      fr: "Aperçu prolongé officiel de Grand Theft Auto VI par Rockstar Games",
      ar: "عرض رسمي مطوّل للعبة Grand Theft Auto VI من Rockstar Games",
    },
    videoId: EXTENDED_LOOK.id,
    videoTitle: EXTENDED_LOOK.title,
  },
  "gta-6-price-in-morocco": {
    hero: THUMBNAILS.outNow,
    heroAlt: {
      en: "Official Grand Theft Auto VI out now video by Rockstar Games",
      fr: "Vidéo officielle de sortie de Grand Theft Auto VI par Rockstar Games",
      ar: "فيديو الإطلاق الرسمي للعبة Grand Theft Auto VI من Rockstar Games",
    },
    videoId: OUT_NOW.id,
    videoTitle: OUT_NOW.title,
  },
  "gta-6-beginners-tips": {
    hero: THUMBNAILS.launchTrailer,
    heroAlt: {
      en: "Official Grand Theft Auto VI launch trailer by Rockstar Games",
      fr: "Bande-annonce de lancement officielle de Grand Theft Auto VI par Rockstar Games",
      ar: "المقطع الدعائي الرسمي لإطلاق Grand Theft Auto VI من Rockstar Games",
    },
    videoId: LAUNCH_TRAILER.id,
    videoTitle: LAUNCH_TRAILER.title,
  },
  "gta-6-hidden-locations-secrets": {
    hero: THUMBNAILS.trailer2,
    heroAlt: {
      en: "Official Grand Theft Auto VI Trailer 2 by Rockstar Games",
      fr: "Bande-annonce 2 officielle de Grand Theft Auto VI par Rockstar Games",
      ar: "المقطع الدعائي الثاني الرسمي للعبة Grand Theft Auto VI من Rockstar Games",
    },
    videoId: "QdBZY2fkU-0",
    videoTitle: "Grand Theft Auto VI Trailer 1 — Rockstar Games",
  },
};

function withGtaMedia(posts: GtaDraft[], lang: Lang): BlogPost[] {
  return posts.map((post) => {
    const media = GTA_MEDIA[post.slug];
    if (!media) {
      throw new Error(`Missing GTA article media for "${post.slug}"`);
    }

    return {
      ...post,
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
];

export const GTA_ARTICLES: Record<Lang, BlogPost[]> = {
  en: withGtaMedia(EN, "en"),
  fr: withGtaMedia(FR, "fr"),
  ar: withGtaMedia(AR, "ar"),
};
