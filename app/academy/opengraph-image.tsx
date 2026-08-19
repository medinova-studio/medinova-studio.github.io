import { ImageResponse } from "next/og";
import { BrandCard, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Medinova Academy — Build Skills, Create Projects, Shape the Future";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <BrandCard
      badge="A PROGRAM BY MEDINOVA STUDIO"
      title="Build Skills. Create Projects. Shape the Future."
      sub="Practical technology and coding education for learners aged 7+, taught through real projects by the founder of Medinova Studio."
      site="medinovastudio.com/academy"
    />,
    { ...size, fonts: ogFonts() }
  );
}