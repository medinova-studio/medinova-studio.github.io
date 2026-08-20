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
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { translations, Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata(lang as Lang, "/agency");
}

export default async function AgencyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
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
      <JsonLd data={faqSchema(translations[l].agency.faq.items)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: `/${l}` },
          { name: "Medinova Growth Agency", path: `/${l}/agency` },
        ])}
      />
    </main>
  );
}