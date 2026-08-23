import { describe, expect, it } from "vitest";
import { LANGS, translations, type Lang } from "./i18n";
import { COURSE_CATALOG, COURSE_SLUGS } from "./courses";
import {
  ALL_BLOG_SLUGS,
  BLOG_POSTS,
  blogPostBySlug,
  blogPostsFor,
} from "./blog";

describe("course data integrity", () => {
  it("has a catalog entry for every course slug in every language", () => {
    for (const lang of LANGS) {
      for (const slug of COURSE_SLUGS) {
        const detail = COURSE_CATALOG[lang][slug];
        expect(detail, `${lang}/${slug} missing from COURSE_CATALOG`).toBeDefined();
        expect(detail.outcomes.length).toBeGreaterThan(0);
        expect(detail.details.length).toBeGreaterThan(0);
      }
    }
  });

  it("keeps courses.items positionally aligned with COURSE_SLUGS in every language", () => {
    for (const lang of LANGS) {
      const items = translations[lang].academy.courses.items;
      expect(
        items.length,
        `${lang}: courses.items length must match COURSE_SLUGS`
      ).toBe(COURSE_SLUGS.length);
      COURSE_SLUGS.forEach((slug, i) => {
        expect(items[i], `${lang}: missing localized name for ${slug}`).toBeTruthy();
      });
    }
  });
});

describe("blog data integrity", () => {
  it("resolves every EN slug in every language", () => {
    for (const lang of LANGS) {
      for (const slug of ALL_BLOG_SLUGS) {
        const post = blogPostBySlug(lang, slug);
        expect(post, `${lang}/${slug} missing`).toBeDefined();
      }
    }
  });

  it("has identical slug sets across languages", () => {
    const enSlugs = [...BLOG_POSTS.en.map((p) => p.slug)].sort();
    for (const lang of ["fr", "ar"] as Lang[]) {
      const slugs = [...BLOG_POSTS[lang].map((p) => p.slug)].sort();
      expect(slugs, `${lang} blog slugs diverge from en`).toEqual(enSlugs);
    }
  });

  it("lists every post on the blog index for each language", () => {
    for (const lang of LANGS) {
      expect(blogPostsFor(lang).length).toBe(BLOG_POSTS.en.length);
    }
  });

  it("points related links and course cross-sells at real targets", () => {
    for (const lang of LANGS) {
      for (const post of blogPostsFor(lang)) {
        for (const relatedSlug of post.related ?? []) {
          expect(
            blogPostBySlug(lang, relatedSlug),
            `${lang}/${post.slug}: broken related link '${relatedSlug}'`
          ).toBeDefined();
        }
        if (post.course) {
          expect(
            COURSE_SLUGS,
            `${lang}/${post.slug}: unknown course slug '${post.course.slug}'`
          ).toContain(post.course.slug);
        }
      }
    }
  });
});
