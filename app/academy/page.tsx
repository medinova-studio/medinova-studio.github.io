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
import { faqSchema } from "@/lib/jsonLd";
import { translations } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute:
      "Medinova Academy — Coding & Game Development Courses for Ages 7+",
  },
  description:
    "Practical technology and coding education for learners aged 7+, taught through real projects by the founder of Medinova Studio. Learn digital skills, Scratch, Python, game development, web development and creative design.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com/academy",
    siteName: "Medinova Studio",
    title:
      "Medinova Academy — Coding & Game Development Courses for Ages 7+",
    description:
      "Practical technology and coding education for learners aged 7+, taught through real projects by the founder of Medinova Studio.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Medinova Academy — Coding & Game Development Courses for Ages 7+",
    description:
      "Practical technology and coding education for learners aged 7+, taught through real projects by the founder of Medinova Studio.",
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
      <Why />
      <Founder />
      <Work />
      <Courses />
      <Teaching />
      <FAQ />
      <FinalCta />
      <WhatsAppWidget />
      <JsonLd data={faqSchema(translations.en.academy.faq.items)} />
    </div>
  );
}