# Graph Report - medinova-studio.github.io  (2026-08-06)

## Corpus Check
- 31 files · ~342,989 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 223 nodes · 258 edges · 21 communities (14 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `208ab1dd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- LanguageContext.tsx
- compilerOptions
- package.json
- DESIGN.md
- devDependencies
- AcademyPricing.tsx
- include
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
- useLang
- Components
- route.ts

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 23 edges
2. `compilerOptions` - 16 edges
3. `Components` - 8 edges
4. `Components` - 8 edges
5. `include` - 6 edges
6. `scripts` - 5 edges
7. `Colors` - 5 edges
8. `Typography` - 5 edges
9. `Responsive Behavior` - 5 edges
10. `Colors` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AgencyPage()` --calls--> `useLang()`  [EXTRACTED]
  app/agency/page.tsx → lib/LanguageContext.tsx
- `AcademyPricing()` --calls--> `useLang()`  [EXTRACTED]
  components/AcademyPricing.tsx → lib/LanguageContext.tsx
- `FAQ()` --calls--> `useLang()`  [EXTRACTED]
  components/FAQ.tsx → lib/LanguageContext.tsx
- `Footer()` --calls--> `useLang()`  [EXTRACTED]
  components/Footer.tsx → lib/LanguageContext.tsx
- `Navbar()` --calls--> `useLang()`  [EXTRACTED]
  components/Navbar.tsx → lib/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (21 total, 7 thin omitted)

### Community 0 - "LanguageContext.tsx"
Cohesion: 0.19
Nodes (13): metadata, viewport, Footer(), Navbar(), Lang, LANG_LABELS, LANGS, RTL_LANGS (+5 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 2 - "package.json"
Cohesion: 0.10
Nodes (19): @netlify/plugin-nextjs, next, dependencies, @netlify/plugin-nextjs, next, react, react-dom, resend (+11 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.06
Nodes (30): Border Radius Scale, Brand & Accent, Breakpoints, Collapsing Strategy, Colors, Decorative Depth, Do, Do's and Don'ts (+22 more)

### Community 4 - "devDependencies"
Cohesion: 0.13
Nodes (15): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+7 more)

### Community 5 - "AcademyPricing.tsx"
Cohesion: 0.28
Nodes (4): academyPackages, AcademyPkg, AcademyPricing(), FAQ()

### Community 6 - "include"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

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
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

### Community 18 - "useLang"
Cohesion: 0.19
Nodes (9): AgencyPage(), Contact(), Founder(), GameServices(), Hero(), Game, Portfolio(), TechStackBar() (+1 more)

### Community 19 - "Components"
Cohesion: 0.25
Nodes (8): Buttons, Cards & Containers, Components, Footer, Inputs & Forms, Navigation, Pricing Tabs, Status & Build Page

### Community 20 - "route.ts"
Cohesion: 0.67
Nodes (3): escapeHtml(), POST(), runtime

## Knowledge Gaps
- **125 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `runtime`, `metadata`, `viewport` (+120 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `LanguageContext.tsx`, `AcademyPricing.tsx`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `runtime` to the rest of the system?**
  _125 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `DESIGN.md` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._