"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageSuggestion from "@/components/LanguageSuggestion";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean) ?? [];
  const section = (["en", "fr", "ar"] as string[]).includes(segments[0]) ? segments[1] : segments[0];
  const hasSubBar = section === "agency" || section === "academy" || section === "game-development";
  return (
    <>
      <Navbar />
      <div className={hasSubBar ? "pt-24" : "pt-14"}>{children}</div>
      <Footer />
      <LanguageSuggestion />
    </>
  );
}
