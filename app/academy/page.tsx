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

export const metadata: Metadata = {
  title: {
    absolute: "Medinova Academy — تعلّم ألعاب الفيديو والبرمجة بالمغرب",
  },
  description:
    "كورسات أونلاين فـ البرمجة، Unity 3D، والـ Vibe Coding للأطفال والكبار.",
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
    </div>
  );
}
