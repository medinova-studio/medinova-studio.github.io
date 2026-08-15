import { ImageResponse } from "next/og";
import { BrandCard, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Who We Are — Medinova Studio, Game Development Studio & Coding Academy";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <BrandCard
      badge="MEDINOVA STUDIO"
      title="The Studio Behind Games, Growth Systems & Coding Education"
      sub="An active game development studio and certified coding academy in Kenitra, Morocco — Unity C# games, B2B growth systems, and certified coding tracks."
      site="medinovastudio.com/who-we-are"
    />,
    { ...size, fonts: ogFonts() }
  );
}