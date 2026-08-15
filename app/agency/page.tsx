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

export const metadata: Metadata = {
  title: "Growth Agency — 360° Digital Growth & AI Automation",
  description:
    "Custom high-converting websites, cinematic media production, performance paid ads, and AI WhatsApp automation — Medinova Growth engineers your customer acquisition from click to conversion.",
  openGraph: {
    type: "website",
    title: "Medinova Growth — 360° Digital Growth & AI Automation Agency",
    description:
      "Custom high-converting websites, cinematic media production, performance paid ads, and AI WhatsApp automation — engineered acquisition from click to conversion.",
    images: [
      {
        url: "/images/Founder.jpg",
        width: 800,
        height: 1001,
        alt: "Medinova Studio",
      },
    ],
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
    </main>
  );
}
