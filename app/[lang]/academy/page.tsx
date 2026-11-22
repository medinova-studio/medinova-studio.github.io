import type { Metadata } from "next";
import AnnouncementBar from "@/components/academy/AnnouncementBar";
import Hero from "@/components/academy/Hero";
import Why from "@/components/academy/Why";
import Founder from "@/components/academy/Founder";
import Work from "@/components/academy/Work";
import Courses from "@/components/academy/Courses";
import Pricing from "@/components/academy/Pricing";
import Teaching from "@/components/academy/Teaching";
import FAQ from "@/components/academy/FAQ";
import FinalCta from "@/components/academy/FinalCta";
import StickyCta from "@/components/academy/StickyCta";
import ViewContent from "@/components/analytics/ViewContent";
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
      <Courses />
      <Teaching />
      <Founder />
      <Work />
      <Pricing leadCapture />
      <FAQ />
      <FinalCta leadCapture />
      <StickyCta />
      <ViewContent contentName="Medinova Academy" contentType="product_list" />
      <JsonLd data={academySchema(l)} />
      <JsonLd data={faqSchema(translations[l].academy.faq.items)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: translations[l].common.home, path: `/${l}` },
          { name: "Medinova Academy", path: `/${l}/academy` },
        ])}
      />
    </div>
  );
}