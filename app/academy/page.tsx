import type { Metadata } from "next";
import AcademyPageContent from "./AcademyPageContent";

export const metadata: Metadata = {
  title: "Medinova Academy — Coding for Ages 7 to Adults",
  description:
    "Project-based coding academy. Junior Explorers (450 DHS), Future Game Creators (650 DHS), and Pro Dev & Adult Masterclass (1,200 DHS), plus a full parent FAQ.",
};

export default function AcademyPage() {
  return <AcademyPageContent />;
}
