"use client";

import { useLang } from "@/lib/LanguageContext";
import PageHeader from "@/components/PageHeader";
import GamePricing from "@/components/pricing/GamePricing";

export default function GamesPageContent() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        badge={t.pillars.games}
        title={t.pillars.gamesTitle}
        subtitle={t.pillars.gamesSubtitle}
      />
      <GamePricing hideHeader />
    </>
  );
}
