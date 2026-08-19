# Graph Report - medinova-studio.github.io  (2026-08-19)

## Corpus Check
- 77 files · ~661,855 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 419 nodes · 679 edges · 25 communities (17 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `db82903b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Button.tsx
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
- privacy/page.tsx
- useLang
- agency-contact/route.ts
- terms/page.tsx
- ogFonts

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 61 edges
2. `Button()` - 16 edges
3. `compilerOptions` - 16 edges
4. `Reveal()` - 12 edges
5. `ogFonts()` - 12 edges
6. `academyWhatsAppUrl()` - 9 edges
7. `Components` - 8 edges
8. `Medinova Studio` - 8 edges
9. `Components` - 8 edges
10. `cn()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/academy/opengraph-image.tsx → lib/og.tsx
- `AcademyPage()` --calls--> `faqSchema()`  [EXTRACTED]
  app/academy/page.tsx → lib/jsonLd.ts
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/agency/opengraph-image.tsx → lib/og.tsx
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/game-development/opengraph-image.tsx → lib/og.tsx
- `RootLayout()` --calls--> `graphSchema()`  [EXTRACTED]
  app/layout.tsx → lib/jsonLd.ts

## Import Cycles
- None detected.

## Communities (25 total, 8 thin omitted)

### Community 0 - "Button.tsx"
Cohesion: 0.09
Nodes (29): GameDevelopmentPage(), metadata, metadata, metadata, About(), Founder(), buildSchema(), Contact() (+21 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.05
Nodes (37): class-variance-authority, clsx, @hookform/resolvers, lucide-react, motion, @netlify/plugin-nextjs, next, dependencies (+29 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.05
Nodes (37): Brand & Accent, Buttons, Colors, Components, Do, Do's and Don'ts, Don't, Elevation & Depth (+29 more)

### Community 4 - "devDependencies"
Cohesion: 0.07
Nodes (27): autoprefixer, eslint, eslint-config-next, next-sitemap, devDependencies, autoprefixer, eslint, eslint-config-next (+19 more)

### Community 5 - "jsonLd.ts"
Cohesion: 0.07
Nodes (31): AcademyPage(), AgencyPage(), geist, geistMono, jakarta, metadata, RootLayout(), viewport (+23 more)

### Community 6 - "academy/page.tsx"
Cohesion: 0.15
Nodes (16): metadata, FAQ(), FinalCta(), Hero(), trustIcons, stepIcons, Teaching(), itemIcons (+8 more)

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

### Community 19 - "useLang"
Cohesion: 0.12
Nodes (26): metadata, AnnouncementBar(), COURSE_IMAGES, Courses(), CTABanner(), FAQ(), Hero(), LandingHeader() (+18 more)

### Community 20 - "agency-contact/route.ts"
Cohesion: 0.21
Nodes (12): getClientIp(), ipHits, isRateLimited(), POST(), row(), runtime, getClientIp(), ipHits (+4 more)

### Community 25 - "ogFonts"
Cohesion: 0.08
Nodes (31): alt, contentType, OpengraphImage(), runtime, size, alt, contentType, OpengraphImage() (+23 more)

## Knowledge Gaps
- **204 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `runtime`, `alt` (+199 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `Button.tsx`, `jsonLd.ts`, `academy/page.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `dependencies`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _204 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08521870286576169 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._
- **Should `DESIGN.md` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._