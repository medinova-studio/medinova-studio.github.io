# Graph Report - medinova-studio.github.io  (2026-08-20)

## Corpus Check
- 89 files · ~207,007 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 508 nodes · 934 edges · 27 communities (21 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ab1c1cee`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useLang
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
- jsonLd.ts
- academy/page.tsx
- vercel.json
- graphify.js
- next.config.mjs
- next-env.d.ts
- postcss.config.mjs
- tailwind.config.ts
- opencode.ai/DESIGN.md
- SKILL.md
- opencode.json
- AGENTS.md
- i18n.ts
- middleware.ts
- layout.tsx
- agency-contact/route.ts
- fix-sitemap.mjs
- og.tsx
- optimize-images.mjs

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 61 edges
2. `buildPageMetadata()` - 19 edges
3. `Lang` - 18 edges
4. `Button()` - 16 edges
5. `compilerOptions` - 16 edges
6. `breadcrumbSchema()` - 13 edges
7. `Reveal()` - 12 edges
8. `ogFonts()` - 12 edges
9. `trackEvent()` - 11 edges
10. `ogCardContent()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/layout.tsx → lib/metadata.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/who-we-are/page.tsx → lib/metadata.ts
- `generateMetadata()` --calls--> `alternatesFor()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/metadata.ts
- `CoursePage()` --calls--> `breadcrumbSchema()`  [EXTRACTED]
  app/[lang]/academy/courses/[slug]/page.tsx → lib/jsonLd.ts
- `generateMetadata()` --calls--> `buildPageMetadata()`  [EXTRACTED]
  app/[lang]/academy/page.tsx → lib/metadata.ts

## Import Cycles
- None detected.

## Communities (27 total, 6 thin omitted)

### Community 0 - "useLang"
Cohesion: 0.09
Nodes (40): buildSchema(), Contact(), FormValues, Founder(), GameServices(), buildSchema(), ContactSection(), FormValues (+32 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.06
Nodes (33): class-variance-authority, clsx, @hookform/resolvers, lucide-react, motion, @netlify/plugin-nextjs, next, @next/third-parties (+25 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.05
Nodes (37): Brand & Accent, Buttons, Colors, Components, Do, Do's and Don'ts, Don't, Elevation & Depth (+29 more)

### Community 4 - "devDependencies"
Cohesion: 0.05
Nodes (39): autoprefixer, eslint, eslint-config-next, next-sitemap, devDependencies, autoprefixer, eslint, eslint-config-next (+31 more)

### Community 5 - "jsonLd.ts"
Cohesion: 0.09
Nodes (32): AcademyPage(), AgencyPage(), BlogPostPage(), GameDevelopmentPage(), RootLayout(), Home(), generateMetadata(), WhoWeArePage() (+24 more)

### Community 6 - "academy/page.tsx"
Cohesion: 0.07
Nodes (35): COURSE_ACCENTS, COURSE_IMAGES, CoursePage(), PageProps, AnnouncementBar(), COURSE_IMAGES, Courses(), FAQ() (+27 more)

### Community 7 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, outputDirectory

### Community 13 - "opencode.ai/DESIGN.md"
Cohesion: 0.05
Nodes (38): Badges & Chips, Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors (+30 more)

### Community 14 - "SKILL.md"
Cohesion: 0.40
Nodes (4): Capabilities & Workflows, Instructions, Purpose, Web Deployment Diagnostics

### Community 15 - "opencode.json"
Cohesion: 0.40
Nodes (4): lsp, plugin, $schema, .opencode/plugins/graphify.js

### Community 17 - "i18n.ts"
Cohesion: 0.07
Nodes (38): generateMetadata(), generateMetadata(), generateMetadata(), BlogPage(), generateMetadata(), PageProps, generateMetadata(), PageProps (+30 more)

### Community 18 - "middleware.ts"
Cohesion: 0.50
Nodes (4): config, getPreferredLocale(), LOCALES, middleware()

### Community 19 - "layout.tsx"
Cohesion: 0.14
Nodes (15): geist, geistMono, generateMetadata(), jakarta, FacebookPixel(), ACADEMY_HREFS(), AGENCY_HREFS(), Footer() (+7 more)

### Community 20 - "agency-contact/route.ts"
Cohesion: 0.21
Nodes (12): getClientIp(), ipHits, isRateLimited(), POST(), row(), runtime, getClientIp(), ipHits (+4 more)

### Community 23 - "fix-sitemap.mjs"
Cohesion: 0.40
Nodes (4): __dirname, LOCALES, sitemapPath, xml

### Community 25 - "og.tsx"
Cohesion: 0.09
Nodes (32): alt, contentType, OpengraphImage(), runtime, size, alt, contentType, OpengraphImage() (+24 more)

### Community 26 - "optimize-images.mjs"
Cohesion: 0.40
Nodes (3): raws, results, ROOT

## Knowledge Gaps
- **227 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `COURSE_IMAGES`, `COURSE_ACCENTS` (+222 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `i18n.ts`, `layout.tsx`, `jsonLd.ts`, `academy/page.tsx`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `Lang` connect `i18n.ts` to `useLang`, `layout.tsx`, `jsonLd.ts`, `academy/page.tsx`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _227 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useLang` be split into smaller, more focused modules?**
  _Cohesion score 0.08571428571428572 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._