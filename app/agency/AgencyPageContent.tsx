"use client";

import { useLang } from "@/lib/LanguageContext";
import PageHeader from "@/components/PageHeader";
import AgencyPricing from "@/components/pricing/AgencyPricing";

export default function AgencyPageContent() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        badge={t.pillars.agency}
        title={t.pillars.agencyTitle}
        subtitle={t.pillars.agencySubtitle}
      />
      <AgencyPricing hideHeader />
    </>
  );
}
