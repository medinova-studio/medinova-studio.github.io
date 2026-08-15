import { ImageResponse } from "next/og";
import { BrandCard, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Medinova Academy — Learn to Code, Create Video Games & Master AI";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <BrandCard
      badge="CODING & GAME DEVELOPMENT ACADEMY"
      title="Learn to Code, Create Video Games & Master AI"
      sub="Live online tracks for kids, teens & adults — from Scratch to Python, Unity C# and Vibe Coding."
      site="medinovastudio.com/academy"
    />,
    { ...size, fonts: ogFonts() }
  );
}