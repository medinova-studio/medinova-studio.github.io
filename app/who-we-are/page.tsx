import type { Metadata } from "next";
import About from "@/components/About";
import Founder from "@/components/Founder";

export const metadata: Metadata = {
  title: { absolute: "Who We Are — Medinova Studio" },
  description:
    "Medinova Studio is an active game development studio and certified coding academy in Kenitra, Morocco — Unity C# games, AR/VR & WebGL experiences, B2B growth systems, and certified coding tracks in Scratch, Python, and Unity C#.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com/who-we-are",
    siteName: "Medinova Studio",
    title: "Who We Are — Medinova Studio",
description:
      "Medinova Studio is an active game development studio and certified coding academy in Kenitra, Morocco — Unity C# games, AR/VR & WebGL experiences, B2B growth systems, and certified coding tracks in Scratch, Python, and Unity C#.",
  },
  alternates: {
    canonical: "/who-we-are",
  },
};

export default function WhoWeArePage() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-[1.08] tracking-tight">
            Who We Are
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-subtle leading-relaxed">
            The story, people, and mission behind Medinova Studio.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />
      </section>
      <About />
      <Founder />
    </main>
  );
}