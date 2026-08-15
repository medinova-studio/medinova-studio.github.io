import type { Metadata } from "next";
import AnnouncementBar from "@/components/academy/AnnouncementBar";
import Hero from "@/components/academy/Hero";
import Proof from "@/components/academy/Proof";
import Tracks from "@/components/academy/Tracks";
import Community from "@/components/academy/Community";
import Certification from "@/components/academy/Certification";
import Pricing from "@/components/academy/Pricing";
import FAQ from "@/components/academy/FAQ";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/jsonLd";
import { translations } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: "Medinova Academy — Learn to Code, Create Video Games & Master AI",
  },
  description:
    "Learn Scratch, Python, and Unity C# directly from active game engineering professionals.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com/academy",
    siteName: "Medinova Studio",
    title: "Medinova Academy — Learn to Code, Create Video Games & Master AI",
    description:
      "Learn Scratch, Python, and Unity C# directly from active game engineering professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medinova Academy — Learn to Code, Create Video Games & Master AI",
    description:
      "Learn Scratch, Python, and Unity C# directly from active game engineering professionals.",
  },
  alternates: {
    canonical: "/academy",
  },
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Hero />
      <Proof />
      <Tracks />
      <Community />
      <Certification />
      <Pricing />
      <FAQ />
      <WhatsAppWidget />
      <JsonLd data={faqSchema(translations.en.academy.faq.items)} />
    </div>
  );
}
