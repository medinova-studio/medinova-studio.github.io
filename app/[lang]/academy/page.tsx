import type { Metadata } from "next";
import AnnouncementBar from "@/components/academy/AnnouncementBar";
import Hero from "@/components/academy/Hero";
import Why from "@/components/academy/Why";
import Founder from "@/components/academy/Founder";
import Work from "@/components/academy/Work";
import Courses from "@/components/academy/Courses";
import Teaching from "@/components/academy/Teaching";
import FAQ from "@/components/academy/FAQ";
import FinalCta from "@/components/academy/FinalCta";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import JsonLd from "@/components/JsonLd";
import {
  academySchema,
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
  return buildPageMetadata(lang as Lang, "/academy");
}

export default async function AcademyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Hero />
      <Why />
      <Founder />
      <Work />
      <Courses />
      <Teaching />
      <FAQ />
      <FinalCta />
      <WhatsAppWidget />
      <JsonLd data={academySchema()} />
      <JsonLd data={faqSchema(translations[l].academy.faq.items)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: `/${l}` },
          { name: "Medinova Academy", path: `/${l}/academy` },
        ])}
      />
    </div>
  );
}