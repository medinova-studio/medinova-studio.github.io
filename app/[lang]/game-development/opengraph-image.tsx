import { ImageResponse } from "next/og";
import { BrandCard, ogCardContent, ogFonts } from "@/lib/og";

export const runtime = "nodejs";

export const alt =
  "Medinova Studio — Game Development Agency in Morocco";

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
  const c = ogCardContent(lang, "game-development");
  return new ImageResponse(
    <BrandCard badge={c.badge} title={c.title} sub={c.sub} site={c.site} />,
    { ...size, fonts: ogFonts() }
  );
}