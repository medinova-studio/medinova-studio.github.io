import { ImageResponse } from "next/og";
import { BrandCard, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Medinova Studio — Game Development Agency in Kenitra, Morocco";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <BrandCard
      badge="GAME DEVELOPMENT STUDIO"
      title="Custom Unity C# Games, AR/VR & WebGL Experiences"
      sub="Full-cycle game production — concept, art, engineering and launch — delivered by an active studio based in Kenitra, Morocco."
      site="medinovastudio.com/game-development"
    />,
    { ...size, fonts: ogFonts() }
  );
}