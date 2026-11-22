import { describe, expect, it } from "vitest";
import { ALL_BLOG_SLUGS, BLOG_POSTS, blogPostBySlug } from "@/lib/blog";
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

  it("has every blog locale catalog and resolves known posts", () => {
    for (const lang of ["en", "fr", "ar"] as const) {
      expect(BLOG_POSTS[lang].length).toBeGreaterThan(0);
      for (const post of BLOG_POSTS[lang]) {
        expect(blogPostBySlug(lang, post.slug)).toBe(post);
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
