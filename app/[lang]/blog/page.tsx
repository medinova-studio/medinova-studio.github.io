import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { alternatesFor } from "@/lib/metadata";
import { translations, type Lang } from "@/lib/i18n";
import { blogPostsFor } from "@/lib/blog";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const l = lang as Lang;
  const t = translations[l].blog;
  const alternates = alternatesFor(l, "/blog");
  return {
    metadataBase: new URL("https://www.medinovastudio.com"),
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    openGraph: {
      type: "website",
      locale: l === "en" ? "en_US" : l === "fr" ? "fr_FR" : "ar_MA",
      url: `https://www.medinovastudio.com/${l}/blog`,
      siteName: "Medinova Studio",
      title: t.metaTitle,
      description: t.metaDescription,
    },
    alternates,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = translations[l].blog;
  const posts = blogPostsFor(l);

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/15 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
            {t.badge}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight text-balance leading-[1.08] max-w-3xl">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-subtle leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="relative border-t border-hairline">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${l}/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-hairline bg-surface-1 overflow-hidden shadow-[0_12px_32px_rgba(20,21,26,0.05)] transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] bg-navy overflow-hidden">
                  <Image
                    src={post.hero}
                    alt={post.title}
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <span className="hidden sm:inline w-px h-3.5 bg-hairline-strong" />
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-tertiary">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[15px] text-ink-subtle leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-hairline">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:gap-2.5">
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}