# Graph Report - medinova-studio.github.io  (2026-10-05)

## Corpus Check
- 93 files · ~240,770 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 539 nodes · 1059 edges · 34 communities (22 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `14502dc5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useLang
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
- i18n.ts
- academy/page.tsx
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
- jsonLd.ts
- middleware.ts
- Footer.tsx
- agency-contact/route.ts
- fix-sitemap.mjs
- og.tsx
- optimize-images.mjs
- generate-icons.mjs
- Lang
- layout.tsx
- blog.ts
- blog/page.tsx

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 65 edges
2. `Lang` - 21 edges
3. `buildPageMetadata()` - 19 edges
4. `compilerOptions` - 16 edges
5. `Button()` - 15 edges
6. `trackEvent()` - 15 edges
7. `translations` - 14 edges
8. `breadcrumbSchema()` - 13 edges
9. `Reveal()` - 12 edges
10. `trackLeadOnce()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/metadata.ts
- `CoursePage()` --calls--> `breadcrumbSchema()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/jsonLd.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/academy/page.tsx → lib/metadata.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/agency/page.tsx → lib/metadata.ts
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/[lang]/blog/[slug]/page.tsx → lib/metadata.ts

## Import Cycles
- None detected.

## Communities (34 total, 7 thin omitted)

### Community 0 - "useLang"
Cohesion: 0.08
Nodes (44): GameDevelopmentPage(), Home(), itemIcons, Why(), GAME_IMAGES, Work(), buildSchema(), Contact() (+36 more)

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

### Community 5 - "i18n.ts"
Cohesion: 0.18
Nodes (13): detectLang(), FLAGS, hasLangCookie(), LanguageSuggestion(), NATIVE_LABELS, SiteChrome(), Navbar(), ProductCard (+5 more)

### Community 6 - "academy/page.tsx"
Cohesion: 0.08
Nodes (50): COURSE_ACCENTS, COURSE_IMAGES, CoursePage(), PageProps, AnnouncementBar(), COURSE_IMAGES, Courses(), FAQ() (+42 more)

### Community 7 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, outputDirectory

### Community 13 - "opencode.ai/DESIGN.md"
Cohesion: 0.05
Nodes (38): Badges & Chips, Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors (+30 more)

### Community 15 - "opencode.json"
Cohesion: 0.40
Nodes (4): lsp, plugin, $schema, .opencode/plugins/graphify.js

### Community 17 - "jsonLd.ts"
Cohesion: 0.09
Nodes (31): AcademyPage(), AgencyPage(), BlogPostPage(), generateMetadata(), PageProps, RootLayout(), WhoWeArePage(), About() (+23 more)

### Community 18 - "middleware.ts"
Cohesion: 0.50
Nodes (4): config, getPreferredLocale(), LOCALES, middleware()

### Community 19 - "Footer.tsx"
Cohesion: 0.48
Nodes (6): ACADEMY_HREFS(), AGENCY_HREFS(), Footer(), GAME_DEV_HREFS(), LEGAL_HREFS(), SOCIAL_LINKS

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

### Community 28 - "Lang"
Cohesion: 0.13
Nodes (15): generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata() (+7 more)

### Community 29 - "layout.tsx"
Cohesion: 0.25
Nodes (6): geist, geistMono, jakarta, viewport, FacebookPixel(), LanguageProvider()

### Community 30 - "blog.ts"
Cohesion: 0.22
Nodes (8): ALL_BLOG_SLUGS, AR, BLOG_POSTS, BlogPost, BlogSection, EN, FR, HERO

### Community 31 - "blog/page.tsx"
Cohesion: 0.38
Nodes (6): generateMetadata(), BlogPage(), generateMetadata(), PageProps, blogPostsFor(), alternatesFor()

## Knowledge Gaps
- **229 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `COURSE_IMAGES`, `COURSE_ACCENTS` (+224 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 252 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `jsonLd.ts`, `Footer.tsx`, `i18n.ts`, `academy/page.tsx`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `Lang` connect `Lang` to `useLang`, `i18n.ts`, `academy/page.tsx`, `jsonLd.ts`, `layout.tsx`, `blog.ts`, `blog/page.tsx`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _229 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useLang` be split into smaller, more focused modules?**
  _Cohesion score 0.0791476407914764 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._