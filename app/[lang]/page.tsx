import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import TechStackBar from "@/components/TechStackBar";
import Hub from "@/components/Hub";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { gameListSchema } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata(lang as Lang, "/");
}

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <TechStackBar />
      <Hub />
      <Portfolio />
      <Contact />
      <JsonLd data={gameListSchema()} />
    </main>
  );
}