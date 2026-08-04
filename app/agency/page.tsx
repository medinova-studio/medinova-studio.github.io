import type { Metadata } from "next";
import AgencyPageContent from "./AgencyPageContent";

export const metadata: Metadata = {
  title: "B2B Agency Services — Medinova Studio",
  description:
    "360° B2B growth packages: full-funnel marketing, content production, paid ads, and AI WhatsApp routing. Pack ESSENTIEL, PRO GROWTH, and ENTERPRISE.",
};

export default function AgencyPage() {
  return <AgencyPageContent />;
}
