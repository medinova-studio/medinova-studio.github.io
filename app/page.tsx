import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStackBar from "@/components/TechStackBar";
import Founder from "@/components/Founder";
import Portfolio from "@/components/Portfolio";
import GameServices from "@/components/GameServices";
import Contact from "@/components/Contact";

const title =
  "Medinova Studio — Moroccan Independent Game Studio & Interactive Tech Hub";
const description =
  "Custom Unity C# gameplay mechanics, immersive AR/VR simulations, high-performance WebGL browser portals, and cross-platform game production — from Kenitra, Morocco.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com",
    siteName: "Medinova Studio",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStackBar />
      <Founder />
      <Portfolio />
      <GameServices />
      <Contact />
    </main>
  );
}