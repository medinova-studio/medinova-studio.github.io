import { ImageResponse } from "next/og";
import { BrandCard, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Medinova Growth — 360° Digital Growth & AI Automation Agency";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <BrandCard
      badge="B2B GROWTH & AI AUTOMATION AGENCY"
      title="We Build High-Converting Websites & Autonomous Acquisition Systems"
      sub="Custom web platforms, performance paid media, and AI WhatsApp automation — engineered from click to conversion."
      site="medinovastudio.com/agency"
    />,
    { ...size, fonts: ogFonts() }
  );
}