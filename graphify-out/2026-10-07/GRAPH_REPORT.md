# Graph Report - medinova-studio.github.io  (2026-10-07)

## Corpus Check
- 93 files · ~238,793 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 540 nodes · 1042 edges · 30 communities (18 shown, 7 thin omitted)
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
- academy/Pricing.tsx
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
- academy/page.tsx
- agency-contact/route.ts
- fix-sitemap.mjs
- og.tsx
- optimize-images.mjs
- generate-icons.mjs
- i18n.ts

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

## Communities (30 total, 7 thin omitted)

### Community 0 - "useLang"
Cohesion: 0.09
Nodes (37): buildSchema(), Contact(), FormValues, Founder(), GameServices(), buildSchema(), ContactSection(), FormValues (+29 more)

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

### Community 6 - "academy/Pricing.tsx"
Cohesion: 0.15
Nodes (30): COURSE_IMAGES, Courses(), FinalCta(), handleSubmit(), Pricing(), WhatsAppCta(), WhatsAppIcon(), WhatsAppWidget() (+22 more)

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
Cohesion: 0.07
Nodes (42): AcademyPage(), AgencyPage(), BlogPostPage(), generateMetadata(), PageProps, GameDevelopmentPage(), RootLayout(), Home() (+34 more)

### Community 18 - "middleware.ts"
Cohesion: 0.50
Nodes (4): config, getPreferredLocale(), LOCALES, middleware()

### Community 19 - "academy/page.tsx"
Cohesion: 0.08
Nodes (24): COURSE_ACCENTS, COURSE_IMAGES, CoursePage(), PageProps, AnnouncementBar(), FAQ(), Founder(), Hero() (+16 more)

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

### Community 28 - "i18n.ts"
Cohesion: 0.06
Nodes (47): generateMetadata(), generateMetadata(), generateMetadata(), BlogPage(), generateMetadata(), PageProps, generateMetadata(), geist (+39 more)

## Knowledge Gaps
- **229 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `COURSE_IMAGES`, `COURSE_ACCENTS` (+224 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 252 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `jsonLd.ts`, `academy/page.tsx`, `i18n.ts`, `academy/Pricing.tsx`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `Lang` connect `i18n.ts` to `useLang`, `jsonLd.ts`, `academy/page.tsx`, `academy/Pricing.tsx`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _229 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useLang` be split into smaller, more focused modules?**
  _Cohesion score 0.09471153846153846 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._