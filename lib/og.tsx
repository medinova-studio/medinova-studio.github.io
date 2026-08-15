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
        backgroundColor: "#010102",
        color: "#f7f8f8",
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
            "radial-gradient(circle, rgba(94,106,210,0.30) 0%, rgba(94,106,210,0) 70%)",
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
            "radial-gradient(circle, rgba(94,106,210,0.16) 0%, rgba(94,106,210,0) 70%)",
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
              color: "#f7f8f8",
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
            color: "#62666d",
          }}
        >
          KENTIRA · MOROCCO
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
            border: "1px solid #34343a",
            backgroundColor: "#141516",
            borderRadius: "9999px",
            padding: "8px 18px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#5e6ad2",
            }}
          />
          <span
            style={{
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              color: "#d0d6e0",
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
            color: "#f7f8f8",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "21px",
            lineHeight: 1.55,
            color: "#8a8f98",
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
          borderTop: "1px solid #23252a",
          paddingTop: "24px",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "1px",
            color: "#d0d6e0",
          }}
        >
          {site}
        </span>
        <span
          style={{
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "2px",
            color: "#62666d",
          }}
        >
          GAMES · GROWTH · EDUCATION
        </span>
      </div>
    </div>
  );
}