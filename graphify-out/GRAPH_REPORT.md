# Graph Report - medinova-studio.github.io  (2026-08-15)

## Corpus Check
- 74 files · ~586,198 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 417 nodes · 674 edges · 26 communities (18 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c021f2c9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Button.tsx
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
- jsonLd.ts
- useLang
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
- i18n.ts
- agency/page.tsx
- agency-contact/route.ts
- terms/page.tsx
- og.tsx

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 59 edges
2. `Button()` - 16 edges
3. `compilerOptions` - 16 edges
4. `Reveal()` - 11 edges
5. `academyWhatsAppUrl()` - 9 edges
6. `ogFonts()` - 8 edges
7. `Components` - 8 edges
8. `Medinova Studio` - 8 edges
9. `Components` - 8 edges
10. `cn()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `faqSchema()`  [EXTRACTED]
  app/page.tsx → lib/jsonLd.ts
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/academy/opengraph-image.tsx → lib/og.tsx
- `AcademyPage()` --calls--> `faqSchema()`  [EXTRACTED]
  app/academy/page.tsx → lib/jsonLd.ts
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/agency/opengraph-image.tsx → lib/og.tsx
- `RootLayout()` --calls--> `graphSchema()`  [EXTRACTED]
  app/layout.tsx → lib/jsonLd.ts

## Import Cycles
- None detected.

## Communities (26 total, 8 thin omitted)

### Community 0 - "Button.tsx"
Cohesion: 0.09
Nodes (30): GameDevelopmentPage(), metadata, Home(), metadata, metadata, About(), buildSchema(), Contact() (+22 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.05
Nodes (37): class-variance-authority, clsx, @hookform/resolvers, lucide-react, motion, @netlify/plugin-nextjs, next, dependencies (+29 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.04
Nodes (46): Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors, Components (+38 more)

### Community 4 - "devDependencies"
Cohesion: 0.07
Nodes (27): autoprefixer, eslint, eslint-config-next, next-sitemap, devDependencies, autoprefixer, eslint, eslint-config-next (+19 more)

### Community 5 - "jsonLd.ts"
Cohesion: 0.14
Nodes (18): inter, metadata, RootLayout(), spaceGrotesk, viewport, JsonLd(), JsonLdProps, ACADEMY_ID (+10 more)

### Community 6 - "useLang"
Cohesion: 0.11
Nodes (29): metadata, AnnouncementBar(), Certification(), highlightIcons, Community(), featureIcons, FAQ(), Hero() (+21 more)

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

### Community 18 - "i18n.ts"
Cohesion: 0.14
Nodes (15): ACADEMY_HREFS, AGENCY_HREFS, Footer(), GAME_DEV_HREFS, LEGAL_HREFS, SOCIAL_LINKS, LandingHeader(), sectionLinks (+7 more)

### Community 19 - "agency/page.tsx"
Cohesion: 0.17
Nodes (13): AcademyPage(), AgencyPage(), metadata, CTABanner(), FAQ(), pillarIcons, Pillars(), Pricing() (+5 more)

### Community 20 - "agency-contact/route.ts"
Cohesion: 0.21
Nodes (12): getClientIp(), ipHits, isRateLimited(), POST(), row(), runtime, getClientIp(), ipHits (+4 more)

### Community 25 - "og.tsx"
Cohesion: 0.12
Nodes (21): alt, contentType, OpengraphImage(), runtime, size, alt, contentType, OpengraphImage() (+13 more)

## Knowledge Gaps
- **203 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `runtime`, `alt` (+198 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `Button.tsx`, `i18n.ts`, `agency/page.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `dependencies`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _203 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08705882352941176 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._
- **Should `DESIGN.md` be split into smaller, more focused modules?**
  _Cohesion score 0.041666666666666664 - nodes in this community are weakly interconnected._