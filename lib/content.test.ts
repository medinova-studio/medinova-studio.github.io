import { describe, expect, it } from "vitest";
import {
  ALL_BLOG_SLUGS,
  BLOG_POSTS,
  blogPostBySlug,
  relatedBlogPostsFor,
} from "@/lib/blog";
import { COURSE_CATALOG, COURSE_SLUGS, isCourseSlug } from "@/lib/courses";
import { alternatesFor } from "@/lib/metadata";

describe("content catalog consistency", () => {
  it("has every course in every locale", () => {
    for (const lang of ["en", "fr", "ar"] as const) {
      for (const slug of COURSE_SLUGS) {
        expect(COURSE_CATALOG[lang][slug]).toBeDefined();
      }
    }
  });

  it("recognizes only declared course slugs", () => {
    expect(isCourseSlug("python")).toBe(true);
    expect(isCourseSlug("not-a-course")).toBe(false);
  });

  it("has no duplicate blog slugs", () => {
    expect(new Set(ALL_BLOG_SLUGS).size).toBe(ALL_BLOG_SLUGS.length);
  });

  it("includes the five GTA guides in every locale with sources and media", () => {
    const gtaSlugs = [
      "gta-6-pc-port-news",
      "gta-6-ps5-vs-xbox-performance",
      "gta-6-price-in-morocco",
      "gta-6-beginners-tips",
      "gta-6-hidden-locations-secrets",
    ];
    for (const lang of ["en", "fr", "ar"] as const) {
      expect(BLOG_POSTS[lang].slice(-gtaSlugs.length).map((post) => post.slug)).toEqual(gtaSlugs);
      expect(
        new Set(gtaSlugs.map((slug) => blogPostBySlug(lang, slug)?.hero)).size
      ).toBe(gtaSlugs.length);
      for (const slug of gtaSlugs) {
        const post = blogPostBySlug(lang, slug);
        expect(post).toBeDefined();
        expect(post?.sources?.length).toBeGreaterThan(0);
        expect(post?.hero).toMatch(/^https:\/\/i\.ytimg\.com\/vi\/.+\/maxresdefault\.jpg$/);
        expect(post?.videoId).toMatch(/^[A-Za-z0-9_-]{11}$/);
        expect(post?.videoTitle).toBeTruthy();
        expect(post?.sections.length).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it("has every blog locale catalog and resolves known posts", () => {
    for (const lang of ["en", "fr", "ar"] as const) {
      expect(BLOG_POSTS[lang].length).toBeGreaterThan(0);
      for (const post of BLOG_POSTS[lang]) {
        expect(blogPostBySlug(lang, post.slug)).toBe(post);
        expect(post.readingTime.trim()).not.toBe("");
      }
    }
  });

  it("provides three relevant same-topic recommendations for every post", () => {
    for (const lang of ["en", "fr", "ar"] as const) {
      for (const post of BLOG_POSTS[lang]) {
        const recommendations = relatedBlogPostsFor(lang, post);
        expect(recommendations).toHaveLength(3);
        expect(recommendations.some((related) => related.slug === post.slug)).toBe(false);
        expect(
          recommendations.every(
            (related) =>
              related.slug.startsWith("gta-6-") === post.slug.startsWith("gta-6-")
          )
        ).toBe(true);
      }
    }
  });

  it("builds consistent hreflang alternates", () => {
    expect(alternatesFor("en", "/academy").languages).toEqual({
      en: "/en/academy",
      fr: "/fr/academy",
      ar: "/ar/academy",
      "x-default": "/en/academy",
    });
  });
});
