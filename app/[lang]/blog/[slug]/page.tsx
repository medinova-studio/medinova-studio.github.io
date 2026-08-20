import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import FinalCta from "@/components/academy/FinalCta";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonLd";
import { alternatesFor } from "@/lib/metadata";
import { translations, type Lang } from "@/lib/i18n";
import { ALL_BLOG_SLUGS, blogPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["en", "fr", "ar"];
  return locales.flatMap((lang) =>
    ALL_BLOG_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const l = lang as Lang;
  const post = blogPostBySlug(l, slug);
  const basePath = `/blog/${slug}`;
  const alternates = alternatesFor(l, basePath);
  if (!post) return {};
  return {
    metadataBase: new URL("https://www.medinovastudio.com"),
    title: { absolute: post.title },
    description: post.description,
    openGraph: {
      type: "article",
      locale: l === "en" ? "en_US" : l === "fr" ? "fr_FR" : "ar_MA",
      url: `https://www.medinovastudio.com/${l}${basePath}`,
      siteName: "Medinova Studio",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Medinova Studio"],
    },
    alternates,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const l = lang as Lang;
  const post = blogPostBySlug(l, slug);
  const t = translations[l].blog;

  if (!post) return null;

  const crumb = `/${l}/blog/${post.slug}`;

  return (
    <main className="min-h-screen">
      <article>
        <header className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/15 to-transparent" />
          <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
            <Link
              href={`/${l}/blog`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-subtle transition-colors hover:text-ink"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              {t.backLabel}
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <span className="hidden sm:inline w-px h-3.5 bg-hairline-strong" />
              <span className="inline-flex items-center gap-1.5 text-ink-tertiary">
                <CalendarDays className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-ink-tertiary">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight text-balance leading-[1.12]">
              {post.title}
            </h1>
          </div>
        </header>

        <div className="relative aspect-[16/9] max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl border border-hairline bg-navy overflow-hidden shadow-[0_16px_40px_rgba(20,21,26,0.10)]">
            <Image
              src={post.hero}
              alt={post.title}
              fill
              sizes="(min-width:1024px) 62vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-lg sm:text-xl text-ink-subtle leading-relaxed">
            {post.intro}
          </p>

          <div className="mt-10 space-y-10">
            {post.sections.map((section, i) => (
              <section key={i}>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-snug">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-ink-subtle leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <FinalCta />

      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          url: `https://www.medinovastudio.com${crumb}`,
          image: post.hero,
          datePublished: post.date,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumbHome, path: `/${l}` },
          { name: t.title, path: `/${l}/blog` },
          { name: post.title, path: crumb },
        ])}
      />
    </main>
  );
}