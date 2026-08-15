# Graph Report - medinova-studio.github.io  (2026-08-15)

## Corpus Check
- 67 files · ~584,076 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 386 nodes · 576 edges · 26 communities (18 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f0900757`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Button.tsx
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
- academy/page.tsx
- scripts
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
- LanguageContext.tsx
- useLang
- agency-contact/route.ts
- terms/page.tsx
- og.tsx

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 53 edges
2. `compilerOptions` - 16 edges
3. `Button()` - 14 edges
4. `academyWhatsAppUrl()` - 9 edges
5. `Reveal()` - 8 edges
6. `ogFonts()` - 8 edges
7. `Components` - 8 edges
8. `Medinova Studio` - 8 edges
9. `Components` - 8 edges
10. `cn()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/academy/opengraph-image.tsx → lib/og.tsx
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/agency/opengraph-image.tsx → lib/og.tsx
- `OpengraphImage()` --calls--> `ogFonts()`  [EXTRACTED]
  app/opengraph-image.tsx → lib/og.tsx
- `Contact()` --calls--> `useLang()`  [EXTRACTED]
  components/Contact.tsx → lib/LanguageContext.tsx
- `Footer()` --calls--> `useLang()`  [EXTRACTED]
  components/Footer.tsx → lib/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (26 total, 8 thin omitted)

### Community 0 - "Button.tsx"
Cohesion: 0.12
Nodes (20): metadata, buildSchema(), Contact(), FormValues, Founder(), GameServices(), buildSchema(), ContactSection() (+12 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.07
Nodes (27): class-variance-authority, clsx, @hookform/resolvers, lucide-react, motion, @netlify/plugin-nextjs, next, dependencies (+19 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.04
Nodes (46): Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors, Components (+38 more)

### Community 4 - "devDependencies"
Cohesion: 0.07
Nodes (27): autoprefixer, eslint, eslint-config-next, next-sitemap, devDependencies, autoprefixer, eslint, eslint-config-next (+19 more)

### Community 5 - "academy/page.tsx"
Cohesion: 0.10
Nodes (22): metadata, AnnouncementBar(), Certification(), highlightIcons, Community(), featureIcons, FAQ(), Hero() (+14 more)

### Community 6 - "scripts"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, dev, lint, postbuild, start (+2 more)

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

### Community 18 - "LanguageContext.tsx"
Cohesion: 0.11
Nodes (23): inter, metadata, spaceGrotesk, viewport, ACADEMY_HREFS, AGENCY_HREFS, Footer(), GAME_DEV_HREFS (+15 more)

### Community 19 - "useLang"
Cohesion: 0.20
Nodes (13): metadata, CTABanner(), FAQ(), Hero(), LandingHeader(), pillarIcons, Pillars(), Pricing() (+5 more)

### Community 20 - "agency-contact/route.ts"
Cohesion: 0.21
Nodes (12): getClientIp(), ipHits, isRateLimited(), POST(), row(), runtime, getClientIp(), ipHits (+4 more)

### Community 25 - "og.tsx"
Cohesion: 0.12
Nodes (21): alt, contentType, OpengraphImage(), runtime, size, alt, contentType, OpengraphImage() (+13 more)

## Knowledge Gaps
- **195 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `runtime`, `alt` (+190 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `Button.tsx`, `LanguageContext.tsx`, `academy/page.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _195 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12063492063492064 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._