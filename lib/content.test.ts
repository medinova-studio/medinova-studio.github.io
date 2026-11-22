import { describe, expect, it } from "vitest";
import {
  ALL_BLOG_SLUGS,
  BLOG_POSTS,
  blogPostBySlug,
  relatedBlogPostsFor,
} from "@/lib/blog";
import { COURSE_CATALOG, COURSE_SLUGS, isCourseSlug } from "@/lib/courses";
import { alternatesFor } from "@/lib/metadata";
import { translations } from "@/lib/i18n";

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

  it("includes the GTA guides in every locale with localized sources and media", () => {
    const gtaSlugs = [
      "gta-6-pc-port-news",
      "gta-6-ps5-vs-xbox-performance",
      "gta-6-price-in-morocco",
      "gta-6-beginners-tips",
      "gta-6-hidden-locations-secrets",
      "gta-6-giveaways-free-codes",
      "gta-6-editions-standard-vs-ultimate",
      "gta-6-online-multiplayer-status",
      "gta-6-leonida-pc-recompilation-project",
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
        expect(post?.heroAlt).toBeTruthy();
        expect(post?.sections.length).toBeGreaterThanOrEqual(4);
        const articleWords = [
          post?.intro,
          ...(post?.sections.flatMap((section) => [
            section.heading,
            section.body,
            section.bodyAfter,
            ...(section.bullets ?? []),
            ...(section.steps ?? []),
          ]) ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .trim()
          .split(/\s+/).length;
        expect(articleWords).toBeGreaterThan(400);
        if (slug === "gta-6-giveaways-free-codes") {
          expect(post?.hero).toBe("/images/blog/gta-6-giveaway-check.svg");
          expect(post?.videoId).toBeUndefined();
          expect(post?.sources?.some((source) => source.url.includes("1620498"))).toBe(true);
          expect(post?.title).toContain("GTA 6");
        } else if (slug === "gta-6-editions-standard-vs-ultimate") {
          expect(post?.hero).toBe("/images/blog/gta-6-editions-guide.svg");
          expect(post?.sources?.some((source) => source.url === "https://www.playstation.com/en-us/games/grand-theft-auto-vi/")).toBe(true);
        } else if (slug === "gta-6-online-multiplayer-status") {
          expect(post?.hero).toBe("/images/blog/gta-6-single-player-guide.svg");
          expect(post?.sources?.some((source) => source.url === "https://www.playstation.com/en-us/games/grand-theft-auto-vi/")).toBe(true);
        } else if (slug === "gta-6-leonida-pc-recompilation-project") {
          expect(post?.hero).toBe("/images/blog/gta-6-leonida-pc-project.svg");
          expect(post?.videoId).toBeUndefined();
          expect(post?.sources?.some((source) => source.url === "https://github.com/R0Y00/Xbox2Windows")).toBe(true);
          expect(post?.sources?.some((source) => source.url === "https://github.com/ItsNotRexed/Leonida")).toBe(true);
          if (lang === "en") {
            expect(post?.title).toBe("GTA 6 PC Port: What Leonida Can (and Can’t) Do Yet");
          }
        } else {
          expect(post?.hero).toMatch(/^https:\/\/i\.ytimg\.com\/vi\/.+\/maxresdefault\.jpg$/);
          expect(post?.videoId).toMatch(/^[A-Za-z0-9_-]{11}$/);
          expect(post?.videoTitle).toBeTruthy();
        }
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

  it("labels the localized gaming blog section as gaming news", () => {
    expect(translations.en.blog.gamingCategory).toBe("Gaming News");
    expect(translations.fr.blog.gamingCategory).toBe("Actualités gaming");
    expect(translations.ar.blog.gamingCategory).toBe("أخبار الألعاب");
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
