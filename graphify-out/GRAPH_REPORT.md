# Graph Report - medinova-studio.github.io  (2026-08-12)

## Corpus Check
- 45 files · ~574,093 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 292 nodes · 403 edges · 24 communities (17 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0707771c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useLang
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
- academy/page.tsx
- package.json
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
- README.md
- LanguageContext.tsx
- Components
- route.ts
- Components

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 37 edges
2. `compilerOptions` - 16 edges
3. `Button()` - 10 edges
4. `academyWhatsAppUrl()` - 9 edges
5. `Components` - 8 edges
6. `Components` - 8 edges
7. `Reveal()` - 7 edges
8. `scripts` - 6 edges
9. `include` - 6 edges
10. `Contact()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AgencyPage()` --calls--> `useLang()`  [EXTRACTED]
  app/agency/page.tsx → lib/LanguageContext.tsx
- `Footer()` --calls--> `useLang()`  [EXTRACTED]
  components/Footer.tsx → lib/LanguageContext.tsx
- `Navbar()` --calls--> `useLang()`  [EXTRACTED]
  components/Navbar.tsx → lib/LanguageContext.tsx
- `WhatsAppWidget()` --calls--> `useLang()`  [EXTRACTED]
  components/WhatsAppWidget.tsx → lib/LanguageContext.tsx
- `AnnouncementBar()` --calls--> `useLang()`  [EXTRACTED]
  components/academy/AnnouncementBar.tsx → lib/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (24 total, 7 thin omitted)

### Community 0 - "useLang"
Cohesion: 0.16
Nodes (18): AgencyPage(), buildSchema(), Contact(), FormValues, Founder(), GameServices(), Hero(), Game (+10 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.07
Nodes (27): class-variance-authority, clsx, @hookform/resolvers, lucide-react, motion, @netlify/plugin-nextjs, next, dependencies (+19 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.06
Nodes (30): Border Radius Scale, Brand & Accent, Breakpoints, Collapsing Strategy, Colors, Decorative Depth, Do, Do's and Don'ts (+22 more)

### Community 4 - "devDependencies"
Cohesion: 0.08
Nodes (25): autoprefixer, eslint, eslint-config-next, next-sitemap, devDependencies, autoprefixer, eslint, eslint-config-next (+17 more)

### Community 5 - "academy/page.tsx"
Cohesion: 0.10
Nodes (22): metadata, AnnouncementBar(), Certification(), highlightIcons, Community(), featureIcons, FAQ(), Hero() (+14 more)

### Community 6 - "package.json"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, postbuild, start (+1 more)

### Community 7 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, outputDirectory

### Community 13 - "opencode.ai/DESIGN.md"
Cohesion: 0.06
Nodes (30): Border Radius Scale, Brand & Accent, Breakpoints, Collapsing Strategy, Colors, Decorative Depth, Do, Do's and Don'ts (+22 more)

### Community 14 - "SKILL.md"
Cohesion: 0.40
Nodes (4): Capabilities & Workflows, Instructions, Purpose, Web Deployment Diagnostics

### Community 15 - "opencode.json"
Cohesion: 0.40
Nodes (4): lsp, plugin, $schema, .opencode/plugins/graphify.js

### Community 18 - "LanguageContext.tsx"
Cohesion: 0.17
Nodes (14): metadata, viewport, Footer(), Navbar(), AcademyTranslation, Lang, LANG_LABELS, LANGS (+6 more)

### Community 19 - "Components"
Cohesion: 0.25
Nodes (8): Buttons, Cards & Containers, Components, Footer, Inputs & Forms, Navigation, Pricing Tabs, Status & Build Page

### Community 20 - "route.ts"
Cohesion: 0.67
Nodes (3): escapeHtml(), POST(), runtime

### Community 23 - "Components"
Cohesion: 0.25
Nodes (8): Badges & Chips, Buttons, Cards & Containers, Components, Footer, Inline, Inputs & Forms, Navigation

## Knowledge Gaps
- **153 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `metadata`, `runtime` (+148 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `LanguageContext.tsx`, `academy/page.tsx`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _153 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `DESIGN.md` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._