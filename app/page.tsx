import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import TechStackBar from "@/components/TechStackBar";
import Hub from "@/components/Hub";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/jsonLd";
import { translations } from "@/lib/i18n";

const title =
  "Medinova Studio — Game Development Studio & Coding Academy in Kenitra, Morocco";
const description =
  "Medinova Studio is an active game development studio & coding academy in Kenitra, Morocco — custom Unity C# game development, AR/VR & WebGL experiences, AI growth systems, and certified coding tracks in Scratch, Python, and Unity C#.";

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
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <TechStackBar />
      <Hub />
      <Portfolio />
      <Contact />
      <JsonLd data={faqSchema(translations.en.faq.items)} />
    </main>
  );
}