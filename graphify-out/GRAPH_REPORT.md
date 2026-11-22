# Graph Report - medinova-studio.github.io  (2026-11-22)

## Corpus Check
- 101 files · ~300,067 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 588 nodes · 1149 edges · 32 communities (20 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c6c127cd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useLang
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
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
- Handoff — Medinova Academy funnel audit + build
- proxy.ts
- agency-contact/route.ts
- fix-sitemap.mjs
- og.tsx
- optimize-images.mjs
- generate-icons.mjs
- Footer.tsx
- blog/[slug]/page.tsx
- i18n.ts

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
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/metadata.ts
- `CoursePage()` --calls--> `breadcrumbSchema()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/jsonLd.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/academy/page.tsx → lib/metadata.ts
- `AcademyPage()` --calls--> `breadcrumbSchema()`  [EXTRACTED]
  app/[lang]/academy/page.tsx → lib/jsonLd.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/agency/page.tsx → lib/metadata.ts

## Import Cycles
- None detected.

## Communities (32 total, 7 thin omitted)

### Community 0 - "useLang"
Cohesion: 0.06
Nodes (54): GameDevelopmentPage(), Home(), About(), AnnouncementBar(), FAQ(), Founder(), Hero(), trustIcons (+46 more)

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

### Community 6 - "academy/page.tsx"
Cohesion: 0.08
Nodes (50): COURSE_ACCENTS, COURSE_IMAGES, CoursePage(), PageProps, COURSE_IMAGES, Courses(), FinalCta(), handleSubmit() (+42 more)

### Community 7 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, framework, headers, installCommand, outputDirectory

### Community 13 - "opencode.ai/DESIGN.md"
Cohesion: 0.05
Nodes (38): Badges & Chips, Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors (+30 more)

### Community 15 - "opencode.json"
Cohesion: 0.40
Nodes (4): lsp, plugin, $schema, .opencode/plugins/graphify.js

### Community 17 - "jsonLd.ts"
Cohesion: 0.13
Nodes (21): AcademyPage(), AgencyPage(), RootLayout(), WhoWeArePage(), ACADEMY_ID, academyNode(), academySchema(), faqSchema() (+13 more)

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

### Community 30 - "blog/[slug]/page.tsx"
Cohesion: 0.07
Nodes (37): generateMetadata(), BlogPage(), generateMetadata(), PageProps, BlogPostPage(), generateMetadata(), PageProps, ALL_BLOG_SLUGS (+29 more)

### Community 31 - "i18n.ts"
Cohesion: 0.06
Nodes (43): generateMetadata(), generateMetadata(), generateMetadata(), geist, geistMono, generateMetadata(), jakarta, viewport (+35 more)

## Knowledge Gaps
- **248 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `COURSE_IMAGES`, `COURSE_ACCENTS` (+243 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 273 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `Footer.tsx`, `academy/page.tsx`, `i18n.ts`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `Lang` connect `i18n.ts` to `useLang`, `jsonLd.ts`, `academy/page.tsx`, `blog/[slug]/page.tsx`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _248 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useLang` be split into smaller, more focused modules?**
  _Cohesion score 0.06384065372829417 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._