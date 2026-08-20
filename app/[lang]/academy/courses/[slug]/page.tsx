import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  CalendarClock,
  GraduationCap,
  MonitorPlay,
  Sparkles,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Teaching from "@/components/academy/Teaching";
import FAQ from "@/components/academy/FAQ";
import FinalCta from "@/components/academy/FinalCta";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import WhatsAppCta from "@/components/analytics/WhatsAppCta";
import { courseSchema, breadcrumbSchema } from "@/lib/jsonLd";
import { alternatesFor } from "@/lib/metadata";
import { translations, type Lang } from "@/lib/i18n";
import { ACADEMY_WHATSAPP_MESSAGE } from "@/lib/academy";
import { COURSE_CATALOG, COURSE_SLUGS, isCourseSlug } from "@/lib/courses";

const COURSE_IMAGES: Record<string, string> = {
  "digital-essentials": "/images/academy/digital-essentials.webp",
  scratch: "/images/academy/scratch.webp",
  python: "/images/academy/python.webp",
  roblox: "/images/academy/roblox.webp",
  "unity-csharp": "/images/academy/unity.webp",
  "web-development": "/images/academy/web-development.webp",
  "creative-design": "/images/academy/creative-design.webp",
};

const COURSE_ACCENTS: Record<string, string> = {
  scratch: "from-[#F59E0B]/20 to-transparent",
  python: "from-[#3776AB]/25 to-transparent",
  roblox: "from-[#DC2626]/20 to-transparent",
  "unity-csharp": "from-[#3C3C3C]/30 to-transparent",
  "web-development": "from-[#8B5CF6]/20 to-transparent",
  "creative-design": "from-[#EC4899]/20 to-transparent",
  "digital-essentials": "from-[#10B981]/20 to-transparent",
};

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["en", "fr", "ar"];
  return locales.flatMap((lang) =>
    COURSE_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const l = lang as Lang;
  const detail = COURSE_CATALOG[l]?.[slug as (typeof COURSE_SLUGS)[number]];
  const basePath = `/academy/courses/${slug}`;
  const alternates = alternatesFor(l, basePath);
  if (!detail) return {};
  return {
    metadataBase: new URL("https://www.medinovastudio.com"),
    title: { absolute: detail.meta.title },
    description: detail.meta.description,
    openGraph: {
      type: "website",
      locale: l === "en" ? "en_US" : l === "fr" ? "fr_FR" : "ar_MA",
      url: `https://www.medinovastudio.com/${l}${basePath}`,
      siteName: "Medinova Studio",
      title: detail.meta.title,
      description: detail.meta.description,
      images: [
        `https://www.medinovastudio.com/images/academy/${slug}.webp`,
      ],
    },
    alternates,
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { lang, slug } = await params;
  const l = lang as Lang;

  if (!isCourseSlug(slug)) return null;

  const t = translations[l].academy;
  const detail = COURSE_CATALOG[l][slug];
  const course = t.courses.items.find((c) => c.name) ?? t.courses.items[0];
  const index = COURSE_SLUGS.indexOf(slug);
  const localizedName = t.courses.items[index]?.name ?? slug;

  const crumb = `/${l}/academy/courses/${slug}`;
  const otherCourses = COURSE_SLUGS.filter((s) => s !== slug);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b ${
            COURSE_ACCENTS[slug] ?? "from-primary/20 to-transparent"
          }`}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-ink-tertiary"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={`/${l}`} className="transition-colors hover:text-ink">
                  {t.breadcrumb.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/${l}/academy`}
                  className="transition-colors hover:text-ink"
                >
                  {t.breadcrumb.academy}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink" aria-current="page">
                {localizedName}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                {t.courses.badge}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight text-balance leading-[1.08]">
                {localizedName}
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-ink-subtle leading-relaxed">
                {detail.hero.sub}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-2 border border-hairline text-sm font-semibold text-ink">
                  <CalendarClock className="w-4 h-4 text-primary" />
                  {t.courses.agesLabel} {course.age}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-2 border border-hairline text-sm font-semibold text-ink">
                  <MonitorPlay className="w-4 h-4 text-primary" />
                  {t.onlineLabel}
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppCta
                  message={ACADEMY_WHATSAPP_MESSAGE}
                  source={`course-${slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:bg-primary-hover active:scale-[0.98] transition-all"
                >
                  {t.finalCta.cta}
                </WhatsAppCta>
                <Link
                  href={`/${l}/academy#courses`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-surface-1 border border-hairline text-ink text-sm font-medium hover:bg-surface-2 hover:border-hairline-strong active:scale-[0.98] transition-all"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  {t.viewAllLabel}
                </Link>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl border border-hairline bg-navy overflow-hidden shadow-[0_12px_32px_rgba(20,21,26,0.06)]">
              <Image
                src={COURSE_IMAGES[slug]}
                alt={localizedName}
                fill
                sizes="(min-width:1024px) 46vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative border-t border-hairline">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight text-balance">
                {t.outcomesTitle}
              </h2>
              <p className="mt-4 text-base text-ink-subtle leading-relaxed">
                {course.desc}
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {detail.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-surface-1 p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] text-ink leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="relative border-t border-hairline">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            {t.courseDetailsTitle}
          </h2>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {detail.details.map((d) => (
              <div
                key={d.label}
                className="rounded-xl border border-hairline bg-surface-1 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary">
                  {d.label}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-ink">
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Teaching />
      <FAQ />
      <FinalCta />

      {/* Other courses */}
      <section className="relative border-t border-hairline">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            {t.moreCoursesTitle}
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherCourses.map((s) => (
              <Link
                key={s}
                href={`/${l}/academy/courses/${s}`}
                className="group flex flex-col rounded-xl border border-hairline bg-surface-1 overflow-hidden transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] bg-navy">
                  <Image
                    src={COURSE_IMAGES[s]}
                    alt={t.courses.items[COURSE_SLUGS.indexOf(s)]?.name ?? s}
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                    {t.courses.items[COURSE_SLUGS.indexOf(s)]?.name ?? s}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-tertiary">
                    {t.courses.agesLabel}{" "}
                    {t.courses.items[COURSE_SLUGS.indexOf(s)]?.age}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppWidget />
      <JsonLd
        data={courseSchema(l, slug, {
          name: localizedName,
          description: detail.hero.sub,
          age: course.age,
          image: COURSE_IMAGES[slug],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumb.home, path: `/${l}` },
          { name: t.breadcrumb.academy, path: `/${l}/academy` },
          { name: localizedName, path: crumb },
        ])}
      />
    </main>
  );
}