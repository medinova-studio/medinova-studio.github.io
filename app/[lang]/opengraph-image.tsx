import { ImageResponse } from "next/og";
import { BrandCard, ogCardContent, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "Medinova Studio — Moroccan Independent Game Studio & Interactive Tech Hub";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const c = ogCardContent(lang, "home");
  return new ImageResponse(
    <BrandCard badge={c.badge} title={c.title} sub={c.sub} site={c.site} />,
    { ...size, fonts: ogFonts() }
  );
}