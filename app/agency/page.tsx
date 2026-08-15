import type { Metadata } from "next";
import LandingHeader from "@/components/growth/LandingHeader";
import Hero from "@/components/growth/Hero";
import Pillars from "@/components/growth/Pillars";
import Process from "@/components/growth/Process";
import Pricing from "@/components/growth/Pricing";
import Terms from "@/components/growth/Terms";
import FAQ from "@/components/growth/FAQ";
import CTABanner from "@/components/growth/CTABanner";
import ContactSection from "@/components/growth/ContactSection";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema } from "@/lib/jsonLd";
import { translations } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Growth Agency — 360° Digital Growth & AI Automation",
  description:
    "High-converting web platforms, AI acquisition systems, and digital growth engines.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com/agency",
    siteName: "Medinova Studio",
    title: "Medinova Growth — 360° Digital Growth & AI Automation Agency",
    description:
      "High-converting web platforms, AI acquisition systems, and digital growth engines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medinova Growth — 360° Digital Growth & AI Automation Agency",
    description:
      "High-converting web platforms, AI acquisition systems, and digital growth engines.",
  },
  alternates: {
    canonical: "/agency",
  },
};

export default function AgencyPage() {
  return (
    <main>
      <LandingHeader />
      <Hero />
      <Pillars />
      <Process />
      <Pricing />
      <Terms />
      <FAQ />
      <CTABanner />
      <ContactSection />
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqSchema(translations.en.agency.faq.items)} />
    </main>
  );
}
