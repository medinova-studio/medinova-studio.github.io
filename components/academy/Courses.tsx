"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { COURSE_SLUGS } from "@/lib/courses";
import { trackEvent } from "@/lib/analytics";

const COURSE_IMAGES = [
  "/images/academy/digital-essentials.webp",
  "/images/academy/scratch.webp",
  "/images/academy/python.webp",
  "/images/academy/roblox.webp",
  "/images/academy/unity.webp",
  "/images/academy/web-development.webp",
  "/images/academy/creative-design.webp",
];

export default function Courses() {
  const { t, lang } = useLang();
  const { courses } = t.academy;

  return (
    <section
      id="courses"
      className="relative py-16 sm:py-20 border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {courses.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {courses.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-2xl mx-auto mt-4 leading-relaxed">
            {courses.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.items.map((course, i) => {
            const isLast = i === courses.items.length - 1;
            return (
              <article
                key={course.name}
                className={`group flex flex-col card-accent rounded-2xl border border-hairline bg-surface-1 overflow-hidden shadow-[0_12px_32px_rgba(20,21,26,0.05)] transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5 ${
                  isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <Link
                  href={`/${lang}/academy/courses/${COURSE_SLUGS[i]}`}
                  className="relative aspect-video overflow-hidden"
                  onClick={() =>
                    trackEvent("view_course", {
                      course: COURSE_SLUGS[i],
                      lang,
                    })
                  }
                >
                  <Image
                    src={COURSE_IMAGES[i]}
                    alt={course.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </Link>
                <div className="flex flex-col flex-1 p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <Link
                      href={`/${lang}/academy/courses/${COURSE_SLUGS[i]}`}
                      className="font-display text-xl font-bold text-ink leading-snug transition-colors hover:text-primary"
                      onClick={() =>
                        trackEvent("view_course", {
                          course: COURSE_SLUGS[i],
                          lang,
                        })
                      }
                    >
                      {course.name}
                    </Link>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-soft border border-primary/20 text-xs font-semibold text-primary whitespace-nowrap">
                      <CalendarClock className="w-3.5 h-3.5" />
                      {courses.agesLabel} {course.age}
                    </span>
                  </div>
                  <p className="text-[15px] text-ink-subtle leading-relaxed">
                    {course.desc}
                  </p>

                  {course.levels && (
                    <div className="mt-5 pt-5 border-t border-hairline">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary">
                          {courses.progressionLabel}
                        </span>
                        <span className="hidden sm:inline w-px h-4 bg-hairline-strong" />
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted">
                          {course.levels[0].label}
                          <ArrowRight className="w-3.5 h-3.5 text-primary rtl:rotate-180" />
                          {course.levels[1].label}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {course.levels.map((level) => (
                          <div
                            key={level.label}
                            className="rounded-md bg-surface-2 border border-hairline p-3"
                          >
                            <p className="text-xs font-semibold text-ink mb-1.5">
                              {level.label}
                            </p>
                            <ul className="space-y-1">
                              {level.topics.map((topic) => (
                                <li
                                  key={topic}
                                  className="flex items-start gap-1.5 text-xs text-ink-subtle leading-snug"
                                >
                                  <span className="mt-1 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-5 border-t border-hairline">
                    <Link
                      href={`/${lang}/academy/courses/${COURSE_SLUGS[i]}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                      onClick={() =>
                        trackEvent("view_course", {
                          course: COURSE_SLUGS[i],
                          lang,
                        })
                      }
                    >
                      {courses.viewLabel}
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}