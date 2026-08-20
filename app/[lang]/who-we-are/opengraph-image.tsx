import { ImageResponse } from "next/og";
import { BrandCard, ogCardContent, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Who We Are — Medinova Studio, Game Development Studio & Coding Academy";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const c = ogCardContent(lang, "who-we-are");
  return new ImageResponse(
    <BrandCard badge={c.badge} title={c.title} sub={c.sub} site={c.site} />,
    { ...size, fonts: ogFonts() }
  );
}