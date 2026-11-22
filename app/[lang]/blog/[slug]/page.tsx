import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import FinalCta from "@/components/academy/FinalCta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/jsonLd";
import { alternatesFor } from "@/lib/metadata";
import { translations, type Lang } from "@/lib/i18n";
import { BLOG_POSTS, blogPostBySlug, relatedBlogPostsFor } from "@/lib/blog";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/block-shooter-cannon-3-in-1/id6821152782";
const APP_ICON_URL = "/images/games/block-shooter-cannon-3-in-1.jpg";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["en", "fr", "ar"] as const;
  return locales.flatMap((lang) =>
    BLOG_POSTS[lang].map((p) => ({ lang, slug: p.slug }))
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
      images: [post.hero],
    },
    alternates,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const l = lang as Lang;
  const post = blogPostBySlug(l, slug);
  const t = translations[l].blog;

  if (!post) notFound();

  const crumb = `/${l}/blog/${post.slug}`;
  const relatedPosts = relatedBlogPostsFor(l, post);
  const isGamingPost = post.slug.startsWith("gta-6-");

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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary">
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
              alt={post.heroAlt ?? post.title}
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

          {isGamingPost && post.sections.length > 3 && (
            <nav
              aria-label={t.articleContents}
              className="mt-8 rounded-xl border border-hairline bg-surface-1 p-5 sm:p-6"
            >
              <h2 className="font-display text-base font-bold text-ink">
                {t.articleContents}
              </h2>
              <ol className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {post.sections.map((section, index) => (
                  <li key={`${section.heading}-${index}`}>
                    <a
                      href={`#article-section-${index + 1}`}
                      className="group inline-flex items-start gap-2.5 text-sm leading-relaxed text-ink-subtle transition-colors hover:text-primary"
                    >
                      <span className="mt-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-soft px-1 text-[11px] font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {post.videoId && (
            <figure className="mt-8 overflow-hidden rounded-2xl border border-hairline bg-navy">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${post.videoId}`}
                  title={post.videoTitle ?? "Official GTA VI video"}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-navy-muted">
                {post.videoTitle} —{" "}
                {l === "fr"
                  ? "vidéo officielle de Rockstar, pour illustrer l'univers du jeu ; ce n'est ni un benchmark ni un guide des emplacements."
                  : l === "ar"
                    ? "لقطات رسمية من Rockstar لتوضيح عالم اللعبة؛ وليست اختبار أداء أو دليلًا للمواقع."
                    : "official Rockstar footage for visual context; it is not a performance benchmark or location walkthrough."}
              </figcaption>
            </figure>
          )}

          <div className="mt-12 space-y-12">
            {post.sections.map((section, i) => {
              const hasImage = Boolean(section.image);
              if (hasImage) {
                return (
                  <section
                    key={i}
                    className="rounded-2xl border border-hairline bg-surface-1 overflow-hidden shadow-[0_12px_32px_rgba(20,21,26,0.05)]"
                  >
                    <div
                      className={`flex flex-col ${section.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-0`}
                    >
                      <div className="w-full md:w-[42%] shrink-0 relative bg-surface-2 border-b md:border-b-0 md:border-r border-hairline last:border-r-0 last:border-b-0 overflow-hidden">
                        <div className="relative aspect-[4/3] md:aspect-[4/3]">
                          <Image
                            src={section.image!}
                            alt={section.imageAlt ?? section.heading}
                            fill
                            sizes="(min-width:768px) 30vw, 90vw"
                            className="object-contain p-5 sm:p-6"
                          />
                        </div>
                      </div>
                      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                        <h2
                          id={`article-section-${i + 1}`}
                          className="scroll-mt-24 font-display text-xl sm:text-2xl font-bold text-ink tracking-tight leading-snug"
                        >
                          {section.heading}
                        </h2>
                        <p className="mt-3 text-[15px] sm:text-base text-ink-subtle leading-relaxed">
                          {section.body}
                        </p>
                        {section.bullets && section.bullets.length > 0 && (
                          <ul className="mt-4 space-y-1.5">
                            {section.bullets.map((item, idx) => (
                              <li key={idx} className="flex gap-2 text-[14px] sm:text-[15px] text-ink-subtle leading-relaxed">
                                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.bodyAfter && (
                          <p className="mt-4 text-[15px] sm:text-base text-ink-subtle leading-relaxed">
                            {section.bodyAfter}
                          </p>
                        )}
                      </div>
                    </div>
                  </section>
                );
              }
              const faqHeaderIndex = post.sections.findIndex((s) =>
                ["Frequently Asked Questions", "Questions fréquentes", "الأسئلة الشائعة"].includes(s.heading.trim())
              );
              const isFaqQuestion =
                faqHeaderIndex !== -1 &&
                i > faqHeaderIndex &&
                /[?؟]\s*$/.test(section.heading.trim());
              return (
                <section key={i} className={isFaqQuestion ? "rounded-xl border border-hairline bg-surface-1 p-5 sm:p-6" : ""}>
                  <h2
                    id={`article-section-${i + 1}`}
                    className={
                      isFaqQuestion
                        ? "scroll-mt-24 font-display text-base sm:text-lg font-semibold text-ink tracking-tight leading-snug"
                        : "scroll-mt-24 font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-snug"
                    }
                  >
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base sm:text-lg text-ink-subtle leading-relaxed">
                    {section.body}
                  </p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 text-[15px] sm:text-base text-ink-subtle leading-relaxed">
                          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.steps && section.steps.length > 0 && (
                    <ol className="mt-4 space-y-2.5">
                      {section.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-[15px] sm:text-base text-ink-subtle leading-relaxed">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-soft border border-primary/20 text-xs font-bold text-primary shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="flex-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.bodyAfter && (
                    <p className="mt-4 text-base sm:text-lg text-ink-subtle leading-relaxed">
                      {section.bodyAfter}
                    </p>
                  )}
                </section>
              );
            })}
          </div>

          {post.course && (
            <div className="mt-12 rounded-2xl border border-hairline bg-surface-1 p-6 sm:p-8 shadow-[0_12px_32px_rgba(20,21,26,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t.courseTitle}
              </span>
              <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
                {post.course.label}
              </h2>
              <p className="mt-3 text-base text-ink-subtle leading-relaxed">
                {post.course.body}
              </p>
              <Link
                href={`/${l}/academy/courses/${post.course.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-ink"
              >
                {t.readMore}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          )}

          {post.slug.startsWith("gta-6-") && (
            <aside className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-surface-1">
              <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
                <Image
                  src={APP_ICON_URL}
                  alt="Block Shooter Cannon : 3 in 1 app icon"
                  width={88}
                  height={88}
                  className="h-20 w-20 shrink-0 rounded-2xl border border-hairline object-cover sm:h-[88px] sm:w-[88px]"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {l === "fr"
                      ? "Notre dernier jeu iOS"
                      : l === "ar"
                        ? "أحدث ألعابنا على iOS"
                        : "Our latest iOS game"}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold text-ink">
                    Block Shooter Cannon : 3 in 1
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                    {l === "fr"
                      ? "Découvrez notre dernier jeu iOS : un puzzle de blocs gratuit avec trois modes — Arcade, Rush et Smash — jouable hors ligne selon sa fiche App Store. Il n’est pas lié à GTA VI ni à Rockstar."
                      : l === "ar"
                        ? "جرّبوا أحدث ألعابنا على iOS: لعبة ألغاز كتل مجانية بثلاثة أوضاع هي Arcade وRush وSmash، وتذكر صفحة App Store أنها تعمل دون اتصال. اللعبة غير مرتبطة بـ GTA VI أو Rockstar."
                        : "Try our latest iOS game: a free block-clearing puzzle with Arcade, Rush, and Smash modes. Its App Store listing says it can be played offline. It is not affiliated with GTA VI or Rockstar."}
                  </p>
                </div>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  {l === "fr"
                    ? "Essayer sur l’App Store"
                    : l === "ar"
                      ? "جرّبها على App Store"
                      : "Try it on the App Store"}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </a>
              </div>
            </aside>
          )}

          {post.sources && post.sources.length > 0 && (
            <section className="mt-12 border-t border-hairline pt-6">
              <h2 className="font-display text-lg font-bold text-ink">
                {l === "fr"
                  ? "Sources et références"
                  : l === "ar"
                    ? "المصادر والمراجع"
                    : "Sources and references"}
              </h2>
              <ul className="mt-3 space-y-2">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-hover"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
              {post.updatedAt && (
                <p className="mt-4 text-xs text-ink-tertiary">
                  {l === "fr"
                    ? "Informations vérifiées le"
                    : l === "ar"
                      ? "تم التحقق من المعلومات في"
                      : "Information checked on"}{" "}
                  {post.updatedAt}
                </p>
              )}
            </section>
          )}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section
          aria-labelledby="related-posts-heading"
          className="border-t border-hairline bg-surface-2/50"
        >
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2
              id="related-posts-heading"
              className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {t.relatedTitle}
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${l}/blog/${related.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-surface-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(20,21,26,0.08)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                    <Image
                      src={related.hero}
                      alt={related.heroAlt ?? related.title}
                      fill
                      sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {related.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                      {related.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-subtle">
                      {related.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {t.readMore}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isGamingPost && <FinalCta />}

      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          url: `https://www.medinovastudio.com${crumb}`,
          image: post.hero,
          datePublished: post.date,
          dateModified: post.updatedAt ?? post.date,
          inLanguage:
            l === "fr" ? "fr" : l === "ar" ? "ar" : "en",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumbHome, path: `/${l}` },
          { name: t.title, path: `/${l}/blog` },
          { name: post.title, path: crumb },
        ])}
      />
      {post.slug === "english-coding-classes-for-kids-in-morocco" &&
        (() => {
          const faqHeaderIndex = post.sections.findIndex((s) =>
            ["Frequently Asked Questions", "Questions fréquentes", "الأسئلة الشائعة"].includes(s.heading.trim())
          );
          if (faqHeaderIndex === -1) return null;
          const faqSections = post.sections
            .slice(faqHeaderIndex + 1)
            .filter((s) => /[?؟]\s*$/.test(s.heading.trim()));
          if (faqSections.length === 0) return null;
          return (
            <JsonLd
              data={faqSchema(
                faqSections.map((s) => ({ q: s.heading, a: s.body }))
              )}
            />
          );
        })()}
    </main>
  );
}