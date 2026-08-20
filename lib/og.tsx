import { readFileSync } from "node:fs";
import { join } from "node:path";

const FONTS_DIR = join(process.cwd(), "public", "fonts");
const LOGO_PATH = join(process.cwd(), "public", "images", "logo.svg");

function readFont(file: string): Buffer {
  return readFileSync(join(FONTS_DIR, file));
}

export function ogFonts() {
  return [
    {
      name: "Inter",
      data: readFont("Inter-Regular.ttf"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Inter",
      data: readFont("Inter-SemiBold.ttf"),
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Inter",
      data: readFont("Inter-Bold.ttf"),
      weight: 700 as const,
      style: "normal" as const,
    },
    {
      name: "SpaceGrotesk",
      data: readFont("SpaceGrotesk-Regular.ttf"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "SpaceGrotesk",
      data: readFont("SpaceGrotesk-SemiBold.ttf"),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

function ogLogo(): string {
  const svg = readFileSync(LOGO_PATH, "utf8");
  const match = /href="(data:image\/png;base64,[^"]+)"/.exec(svg);
  return match ? match[1] : "";
}

export function ogCardContent(
  lang: string,
  page: "home" | "academy" | "agency" | "game-development" | "who-we-are"
): { badge: string; title: string; sub: string; site: string } {
  const base = `www.medinovastudio.com${
    page === "home" ? "" : `/${page}`
  }`;
  if (page === "academy") {
    return {
      badge:
        lang === "ar"
          ? "أكاديمية برمجة عبر الإنترنت · المغرب"
          : lang === "fr"
            ? "ACADÉMIE DE CODE EN LIGNE · MAROC"
            : "ONLINE CODING ACADEMY · MOROCCO",
      title:
        lang === "ar"
          ? "بُن مهارات. أنجز مشاريع. شكّل المستقبل."
          : lang === "fr"
            ? "Développez des compétences. Créez des projets. Façonnez l'avenir."
            : "Build Skills. Create Projects. Shape the Future.",
      sub:
        lang === "ar"
          ? "تعليم عملي في التكنولوجيا والبرمجة للمتعلمين من سن 7 سنوات، يُقدَّم مباشرة عبر الإنترنت بواسطة مؤسس Medinova Studio — من الرباط والدار البيضاء وكل المغرب."
          : lang === "fr"
            ? "Une formation pratique en technologie et en code pour les apprenants dès 7 ans, animée en ligne par le fondateur de Medinova Studio — depuis Rabat, Casablanca et partout au Maroc."
            : "Practical technology and coding education for learners aged 7+, taught live online by the founder of Medinova Studio — from Rabat, Casablanca and all of Morocco.",
      site: `${base}/academy`,
    };
  }
  if (page === "game-development") {
    return {
      badge:
        lang === "ar"
          ? "استوديو تطوير الألعاب"
          : lang === "fr"
            ? "STUDIO DE DÉVELOPPEMENT DE JEUX"
            : "GAME DEVELOPMENT STUDIO",
      title:
        lang === "ar"
          ? "ألعاب Unity C# وتجارب AR/VR وWebGL مخصصة"
          : lang === "fr"
            ? "Jeux Unity C# sur mesure, expériences AR/VR & WebGL"
            : "Custom Unity C# Games, AR/VR & WebGL Experiences",
      sub:
        lang === "ar"
          ? "إنتاج كامل للعبة — الفكرة والفن والهندسة والإطلاق — يقدمه استوديو نشط مقره المغرب ويخدم الشركاء حول العالم."
          : lang === "fr"
            ? "Production complète de jeux — concept, art, ingénierie et lancement — par un studio actif basé au Maroc, partenaire de clients du monde entier."
            : "Full-cycle game production — concept, art, engineering and launch — delivered by an active studio based in Morocco, working with partners worldwide.",
      site: `${base}/game-development`,
    };
  }
  if (page === "agency") {
    return {
      badge:
        lang === "ar"
          ? "وكالة نمو B2B وأتمتة الذكاء الاصطناعي"
          : lang === "fr"
            ? "AGENCE DE CROISSANCE B2B & AUTOMATISATION IA"
            : "B2B GROWTH & AI AUTOMATION AGENCY",
      title:
        lang === "ar"
          ? "نبني مواقع عالية التحويل وأنظمة اكتساب عملاء ذاتية التشغيل"
          : lang === "fr"
            ? "Nous créons des sites à fort taux de conversion et des systèmes d'acquisition autonomes"
            : "We Build High-Converting Websites & Autonomous Acquisition Systems",
      sub:
        lang === "ar"
          ? "منصات ويب مخصصة وإعلانات ممولة وأتمتة واتساب بالذكاء الاصطناعي — من النقرة إلى التحويل."
          : lang === "fr"
            ? "Plateformes web sur mesure, publicité payante performante et automatisation WhatsApp par IA — du clic à la conversion."
            : "Custom web platforms, performance paid media, and AI WhatsApp automation — engineered from click to conversion.",
      site: `${base}/agency`,
    };
  }
  if (page === "who-we-are") {
    return {
      badge:
        lang === "ar"
          ? "MEDINOVA STUDIO"
          : lang === "fr"
            ? "MEDINOVA STUDIO"
            : "MEDINOVA STUDIO",
      title:
        lang === "ar"
          ? "الاستوديو الذي يقف خلف الألعاب وأنظمة النمو وتعليم البرمجة"
          : lang === "fr"
            ? "Le studio derrière les jeux, les systèmes de croissance et l'éducation au code"
            : "The Studio Behind Games, Growth Systems & Coding Education",
      sub:
        lang === "ar"
          ? "استوديو نشط لتطوير الألعاب وأكاديمية برمجة عبر الإنترنت مقره المغرب — ألعاب Unity C# وأنظمة نمو B2B ودورات برمجة مباشرة."
          : lang === "fr"
            ? "Un studio de développement de jeux actif et une académie de code en ligne basés au Maroc — jeux Unity C#, systèmes de croissance B2B et parcours de code en direct."
            : "An active game development studio and online coding academy based in Morocco — Unity C# games, B2B growth systems, and live coding tracks.",
      site: `${base}/who-we-are`,
    };
  }
  return {
    badge:
      lang === "ar"
        ? "استوديو ألعاب مستقل مغربي"
        : lang === "fr"
          ? "STUDIO DE JEUX INDÉPENDANT MAROCAIN"
          : "MOROCCAN INDEPENDENT GAME STUDIO",
    title:
      lang === "ar"
        ? "هندسة ألعاب عالية الإثارة وتجارب 3D تفاعلية ومكانية"
        : lang === "fr"
          ? "Ingénierie de jeux à haute intensité, 3D interactif et expériences spatiales"
          : "Engineering High-Octane Games, Interactive 3D & Spatial Experiences",
    sub:
      lang === "ar"
        ? "خطوط إنتاج Unity C# مخصصة وبوابات WebGL ومحاكاة AR/VR وأنظمة نمو B2B — صُنعت من المغرب وقدّمها عالميًا."
        : lang === "fr"
          ? "Pipelines Unity C# sur mesure, portails WebGL, simulations AR/VR et systèmes de croissance B2B — construits depuis le Maroc et livrés dans le monde entier."
          : "Custom Unity C# pipelines, WebGL portals, AR/VR simulations, and B2B growth systems — built from Morocco and delivered worldwide.",
    site: `${base}`,
  };
}

export function BrandCard({
  badge,
  title,
  sub,
  site,
}: {
  badge: string;
  title: string;
  sub: string;
  site: string;
}) {
  const logo = ogLogo();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#101A33",
        color: "#F7FAFF",
        fontFamily: "Inter",
        padding: "72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-180px",
          right: "-140px",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(36,85,230,0.35) 0%, rgba(36,85,230,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-220px",
          left: "-160px",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,160,240,0.16) 0%, rgba(0,160,240,0) 70%)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          {logo && (
            <img
              src={logo}
              width={48}
              height={38}
              style={{ objectFit: "contain" }}
            />
          )}
          <span
            style={{
              fontFamily: "SpaceGrotesk",
              fontWeight: 600,
              fontSize: "22px",
              letterSpacing: "3px",
              color: "#F7FAFF",
            }}
          >
            MEDINOVA STUDIO
          </span>
        </div>
        <span
          style={{
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "3px",
            color: "#7D8DB0",
          }}
        >
          RABAT · MOROCCO
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          position: "relative",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            alignSelf: "flex-start",
            border: "1px solid #2A3A63",
            backgroundColor: "#16223F",
            borderRadius: "9999px",
            padding: "8px 18px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#FFD749",
            }}
          />
          <span
            style={{
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              color: "#C9D6F0",
            }}
          >
            {badge}
          </span>
        </div>
        <div
          style={{
            marginTop: "28px",
            fontFamily: "SpaceGrotesk",
            fontWeight: 600,
            fontSize: "50px",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            color: "#F7FAFF",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "21px",
            lineHeight: 1.55,
            color: "#A8B8D8",
            maxWidth: "720px",
          }}
        >
          {sub}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #1E2C4D",
          paddingTop: "24px",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "1px",
            color: "#C9D6F0",
          }}
        >
          {site}
        </span>
        <span
          style={{
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "2px",
            color: "#7D8DB0",
          }}
        >
          GAMES · GROWTH · EDUCATION
        </span>
      </div>
    </div>
  );
}