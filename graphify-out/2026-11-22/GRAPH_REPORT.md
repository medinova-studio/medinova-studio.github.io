# Graph Report - medinova-studio.github.io  (2026-11-22)

## Corpus Check
- 101 files · ~298,567 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 587 nodes · 1148 edges · 37 communities (25 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cd69d586`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useLang
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
- metadata.ts
- courses/[slug]/page.tsx
- vercel.json
- graphify.js
- next.config.mjs
- next-env.d.ts
- postcss.config.mjs
- tailwind.config.ts
- opencode.ai/DESIGN.md
- Web Deployment Diagnostics
- opencode.json
- AGENTS.md
- academy/page.tsx
- Handoff — Medinova Academy funnel audit + build
- proxy.ts
- agency-contact/route.ts
- fix-sitemap.mjs
- og.tsx
- optimize-images.mjs
- generate-icons.mjs
- Footer.tsx
- i18n.ts
- blog/[slug]/page.tsx
- LanguageSuggestion.tsx
- gtaBlog.ts
- who-we-are/page.tsx
- blog/page.tsx

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 67 edges
2. `Lang` - 22 edges
3. `buildPageMetadata()` - 19 edges
4. `trackEvent()` - 17 edges
5. `compilerOptions` - 16 edges
6. `Button()` - 15 edges
7. `translations` - 15 edges
8. `breadcrumbSchema()` - 13 edges
9. `Reveal()` - 12 edges
10. `trackLeadOnce()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/who-we-are/page.tsx → lib/metadata.ts
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/metadata.ts
- `CoursePage()` --calls--> `breadcrumbSchema()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/jsonLd.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/academy/page.tsx → lib/metadata.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/agency/page.tsx → lib/metadata.ts

## Import Cycles
- None detected.

## Communities (37 total, 7 thin omitted)

### Community 0 - "useLang"
Cohesion: 0.09
Nodes (41): GameDevelopmentPage(), Home(), buildSchema(), Contact(), FormValues, GameServices(), buildSchema(), ContactSection() (+33 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.06
Nodes (31): class-variance-authority, clsx, @hookform/resolvers, lucide-react, @netlify/plugin-nextjs, @next/third-parties, dependencies, class-variance-authority (+23 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.05
Nodes (37): Brand & Accent, Buttons, Colors, Components, Do, Do's and Don'ts, Don't, Elevation & Depth (+29 more)

### Community 4 - "devDependencies"
Cohesion: 0.05
Nodes (39): autoprefixer, eslint, eslint-config-next, devDependencies, autoprefixer, eslint, eslint-config-next, next-sitemap (+31 more)

### Community 5 - "metadata.ts"
Cohesion: 0.14
Nodes (14): generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), DATE_LOCALES (+6 more)

### Community 6 - "courses/[slug]/page.tsx"
Cohesion: 0.09
Nodes (47): COURSE_ACCENTS, COURSE_IMAGES, CoursePage(), PageProps, COURSE_IMAGES, Courses(), FinalCta(), handleSubmit() (+39 more)

### Community 7 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, framework, headers, installCommand, outputDirectory

### Community 13 - "opencode.ai/DESIGN.md"
Cohesion: 0.05
Nodes (38): Badges & Chips, Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors (+30 more)

### Community 15 - "opencode.json"
Cohesion: 0.40
Nodes (4): lsp, plugin, $schema, .opencode/plugins/graphify.js

### Community 17 - "academy/page.tsx"
Cohesion: 0.08
Nodes (30): AcademyPage(), AgencyPage(), RootLayout(), AnnouncementBar(), FAQ(), Founder(), Hero(), trustIcons (+22 more)

### Community 18 - "Handoff — Medinova Academy funnel audit + build"
Cohesion: 0.22
Nodes (8): Audit findings (confirmed), Decisions locked, Goal, Handoff — Medinova Academy funnel audit + build, Pending from user (blockers to execute), Plan, Project facts (verified), When we resume

### Community 19 - "proxy.ts"
Cohesion: 0.67
Nodes (3): getPreferredLocale(), LOCALES, proxy()

### Community 20 - "agency-contact/route.ts"
Cohesion: 0.17
Nodes (16): getClientIp(), ipHits, isRateLimited(), POST(), pruneHits(), row(), runtime, sanitizeSubjectPart() (+8 more)

### Community 23 - "fix-sitemap.mjs"
Cohesion: 0.40
Nodes (4): __dirname, LOCALES, sitemapPath, xml

### Community 25 - "og.tsx"
Cohesion: 0.09
Nodes (32): alt, contentType, OpengraphImage(), runtime, size, alt, contentType, OpengraphImage() (+24 more)

### Community 26 - "optimize-images.mjs"
Cohesion: 0.40
Nodes (3): raws, results, ROOT

### Community 27 - "generate-icons.mjs"
Cohesion: 0.29
Nodes (5): logoPng, logoSvgPath, match, root, svg

### Community 28 - "Footer.tsx"
Cohesion: 0.48
Nodes (6): ACADEMY_HREFS(), AGENCY_HREFS(), Footer(), GAME_DEV_HREFS(), LEGAL_HREFS(), SOCIAL_LINKS

### Community 29 - "i18n.ts"
Cohesion: 0.16
Nodes (14): geist, geistMono, jakarta, viewport, SiteChrome(), Navbar(), ProductCard, AcademyTranslation (+6 more)

### Community 30 - "blog/[slug]/page.tsx"
Cohesion: 0.14
Nodes (18): BlogPostPage(), generateMetadata(), PageProps, ALL_BLOG_SLUGS, AR, BLOG_POSTS, BlogPost, blogPostBySlug() (+10 more)

### Community 31 - "LanguageSuggestion.tsx"
Cohesion: 0.15
Nodes (15): RouteTracker(), ConsentAnalytics(), COOKIE_CONSENT_KEY, hasAnalyticsConsent(), CookieConsent(), COPY, FacebookPixel(), detectLang() (+7 more)

### Community 34 - "gtaBlog.ts"
Cohesion: 0.14
Nodes (12): AR, COVER_ART_REVEAL, EN, EXTENDED_LOOK, EXTRA_SECTIONS, FR, GTA_MEDIA, GtaDraft (+4 more)

### Community 35 - "who-we-are/page.tsx"
Cohesion: 0.28
Nodes (7): generateMetadata(), WhoWeArePage(), About(), Founder(), JsonLd(), JsonLdProps, personSchema()

### Community 36 - "blog/page.tsx"
Cohesion: 0.38
Nodes (6): generateMetadata(), BlogPage(), generateMetadata(), PageProps, blogPostsFor(), alternatesFor()

## Knowledge Gaps
- **247 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `COURSE_IMAGES`, `COURSE_ACCENTS` (+242 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 272 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `who-we-are/page.tsx`, `courses/[slug]/page.tsx`, `academy/page.tsx`, `Footer.tsx`, `i18n.ts`, `LanguageSuggestion.tsx`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `Lang` connect `i18n.ts` to `useLang`, `gtaBlog.ts`, `who-we-are/page.tsx`, `blog/page.tsx`, `metadata.ts`, `courses/[slug]/page.tsx`, `academy/page.tsx`, `blog/[slug]/page.tsx`, `LanguageSuggestion.tsx`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _247 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useLang` be split into smaller, more focused modules?**
  _Cohesion score 0.08653026427962489 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._