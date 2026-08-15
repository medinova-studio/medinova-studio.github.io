import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStackBar from "@/components/TechStackBar";
import GameServices from "@/components/GameServices";
import Portfolio from "@/components/Portfolio";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { gameDevServiceSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: { absolute: "Game Development Agency — Medinova Studio" },
  description:
    "Custom Unity C# game development, AR/VR & WebGL experiences, and cross-platform game production — an active game development studio based in Kenitra, Morocco.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com/game-development",
    siteName: "Medinova Studio",
    title: "Game Development Agency — Medinova Studio",
    description:
      "Custom Unity C# game development, AR/VR & WebGL experiences, and cross-platform game production — an active game development studio based in Kenitra, Morocco.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Medinova Studio — Game Development Agency in Kenitra, Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/game-development",
  },
};

export default function GameDevelopmentPage() {
  return (
    <main>
      <Hero />
      <TechStackBar />
      <GameServices />
      <Portfolio />
      <Founder />
      <Contact />
      <JsonLd data={gameDevServiceSchema()} />
    </main>
  );
}