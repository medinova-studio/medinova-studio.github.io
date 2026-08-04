"use client";

import { useLang } from "@/lib/LanguageContext";
import PageHeader from "@/components/PageHeader";
import AcademyPricing from "@/components/pricing/AcademyPricing";
import FAQ from "@/components/FAQ";

export default function AcademyPageContent() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        badge={t.pillars.academy}
        title={t.pillars.academyTitle}
        subtitle={t.pillars.academySubtitle}
      />
      <AcademyPricing hideHeader />
      <FAQ />
    </>
  );
}
