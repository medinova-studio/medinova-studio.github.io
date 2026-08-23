import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStackBar from "@/components/TechStackBar";
import GameServices from "@/components/GameServices";
import Portfolio from "@/components/Portfolio";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import {
  gameDevServiceSchema,
  gameListSchema,
  breadcrumbSchema,
} from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata(lang as Lang, "/game-development");
}

export default async function GameDevelopmentPage() {
  return (
    <main>
      <Hero />
      <TechStackBar />
      <GameServices />
      <Portfolio />
      <Founder />
      <Contact />
      <JsonLd data={gameDevServiceSchema()} />
      <JsonLd data={gameListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Game Development Agency", path: "/game-development" },
        ])}
      />
    </main>
  );
}