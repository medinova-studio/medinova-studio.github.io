"use client";

import Image from "next/image";
import { ArrowRight, CalendarClock } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

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
  const { t } = useLang();
  const { courses } = t.academy;

  return (
    <section
      id="courses"
      className="relative py-20 sm:py-28 border-t border-hairline"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {courses.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance max-w-3xl mx-auto">
            {courses.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-subtle max-w-2xl mx-auto mt-4 leading-relaxed">
            {courses.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {courses.items.map((course, i) => (
            <article
              key={course.name}
              className="group flex flex-col rounded-lg border border-hairline bg-surface-1 overflow-hidden transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={COURSE_IMAGES[i]}
                  alt={course.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                    {course.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-soft border border-primary/20 text-[11px] font-semibold text-primary whitespace-nowrap">
                    <CalendarClock className="w-3.5 h-3.5" />
                    {courses.agesLabel} {course.age}
                  </span>
                </div>
                <p className="text-sm text-ink-subtle leading-relaxed">
                  {course.desc}
                </p>

                {course.levels && (
                  <div className="mt-4 pt-4 border-t border-hairline">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-tertiary">
                        {courses.progressionLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
                        {course.levels[0].label}
                        <ArrowRight className="w-3.5 h-3.5 text-primary rtl:rotate-180" />
                        {course.levels[1].label}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {course.levels.map((level) => (
                        <div
                          key={level.label}
                          className="rounded-md bg-surface-2 border border-hairline p-3"
                        >
                          <p className="text-[11px] font-semibold text-ink mb-1.5">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}