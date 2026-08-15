import { ImageResponse } from "next/og";
import { BrandCard, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Medinova Studio — Moroccan Independent Game Studio & Interactive Tech Hub";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <BrandCard
      badge="MOROCCAN INDEPENDENT GAME STUDIO"
      title="Engineering High-Octane Games, Interactive 3D & Spatial Experiences"
      sub="Custom Unity C# pipelines, WebGL portals, AR/VR simulations, and B2B growth systems — built from Kenitra, Morocco."
      site="medinovastudio.com"
    />,
    { ...size, fonts: ogFonts() }
  );
}