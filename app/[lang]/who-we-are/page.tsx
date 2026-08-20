import type { Metadata } from "next";
import About from "@/components/About";
import Founder from "@/components/Founder";
import JsonLd from "@/components/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata(lang as Lang, "/who-we-are");
}

export default async function WhoWeArePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
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
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: `/${l}` },
          { name: "Who We Are", path: `/${l}/who-we-are` },
        ])}
      />
    </main>
  );
}