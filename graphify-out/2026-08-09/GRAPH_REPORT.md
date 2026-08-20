# Graph Report - medinova-studio.github.io  (2026-08-09)

## Corpus Check
- 39 files · ~449,301 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 248 nodes · 316 edges · 20 communities (13 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dfb38c0a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app/page.tsx
- compilerOptions
- dependencies
- DESIGN.md
- devDependencies
- useLang
- Components
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
- route.ts

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 37 edges
2. `compilerOptions` - 16 edges
3. `Components` - 8 edges
4. `Components` - 8 edges
5. `include` - 6 edges
6. `academyWhatsAppUrl()` - 5 edges
7. `scripts` - 5 edges
8. `Colors` - 5 edges
9. `Typography` - 5 edges
10. `Responsive Behavior` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AgencyPage()` --calls--> `useLang()`  [EXTRACTED]
  app/agency/page.tsx → lib/LanguageContext.tsx
- `Contact()` --calls--> `useLang()`  [EXTRACTED]
  components/Contact.tsx → lib/LanguageContext.tsx
- `Footer()` --calls--> `useLang()`  [EXTRACTED]
  components/Footer.tsx → lib/LanguageContext.tsx
- `Founder()` --calls--> `useLang()`  [EXTRACTED]
  components/Founder.tsx → lib/LanguageContext.tsx
- `GameServices()` --calls--> `useLang()`  [EXTRACTED]
  components/GameServices.tsx → lib/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (20 total, 7 thin omitted)

### Community 0 - "app/page.tsx"
Cohesion: 0.16
Nodes (7): Contact(), Founder(), GameServices(), Hero(), Game, Portfolio(), TechStackBar()

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.09
Nodes (21): lucide-react, @netlify/plugin-nextjs, next, dependencies, lucide-react, @netlify/plugin-nextjs, next, react (+13 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.05
Nodes (38): Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors, Components (+30 more)

### Community 4 - "devDependencies"
Cohesion: 0.13
Nodes (15): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+7 more)

### Community 5 - "useLang"
Cohesion: 0.12
Nodes (21): metadata, AgencyPage(), AnnouncementBar(), Certification(), highlightIcons, Community(), featureIcons, FAQ() (+13 more)

### Community 6 - "Components"
Cohesion: 0.25
Nodes (8): Badges & Chips, Buttons, Cards & Containers, Components, Footer, Inline, Inputs & Forms, Navigation

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
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

### Community 18 - "LanguageContext.tsx"
Cohesion: 0.17
Nodes (14): metadata, viewport, Footer(), Navbar(), AcademyTranslation, Lang, LANG_LABELS, LANGS (+6 more)

### Community 20 - "route.ts"
Cohesion: 0.67
Nodes (3): escapeHtml(), POST(), runtime

## Knowledge Gaps
- **134 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `metadata`, `runtime`, `metadata` (+129 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `app/page.tsx`, `LanguageContext.tsx`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `dependencies`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `metadata` to the rest of the system?**
  _134 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `DESIGN.md` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._