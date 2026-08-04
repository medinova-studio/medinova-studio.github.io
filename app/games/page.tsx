import type { Metadata } from "next";
import GamesPageContent from "./GamesPageContent";

export const metadata: Metadata = {
  title: "Game Dev & Custom Software — Medinova Studio",
  description:
    "Cross-platform game development and custom software. Prototype Pack, Full Cross-Platform Pack, and B2B AR/VR & enterprise software quotes.",
};

export default function GamesPage() {
  return <GamesPageContent />;
}
