# Graph Report - medinova-studio.github.io  (2026-08-12)

## Corpus Check
- 53 files · ~577,251 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 312 nodes · 459 edges · 23 communities (16 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `593c1309`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Button.tsx
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
- useLang
- route.ts

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 49 edges
2. `compilerOptions` - 16 edges
3. `Button()` - 11 edges
4. `academyWhatsAppUrl()` - 9 edges
5. `Components` - 8 edges
6. `Components` - 8 edges
7. `Reveal()` - 7 edges
8. `SectionHeader()` - 6 edges
9. `scripts` - 6 edges
10. `include` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Contact()` --calls--> `useLang()`  [EXTRACTED]
  components/Contact.tsx → lib/LanguageContext.tsx
- `Footer()` --calls--> `useLang()`  [EXTRACTED]
  components/Footer.tsx → lib/LanguageContext.tsx
- `Founder()` --calls--> `useLang()`  [EXTRACTED]
  components/Founder.tsx → lib/LanguageContext.tsx
- `GameServices()` --calls--> `useLang()`  [EXTRACTED]
  components/GameServices.tsx → lib/LanguageContext.tsx
- `Hero()` --calls--> `useLang()`  [EXTRACTED]
  components/Hero.tsx → lib/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (23 total, 7 thin omitted)

### Community 0 - "Button.tsx"
Cohesion: 0.15
Nodes (16): buildSchema(), Contact(), FormValues, Founder(), GameServices(), Hero(), Game, Portfolio() (+8 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.07
Nodes (27): class-variance-authority, clsx, @hookform/resolvers, lucide-react, motion, @netlify/plugin-nextjs, next, dependencies (+19 more)

### Community 3 - "DESIGN.md"
Cohesion: 0.05
Nodes (38): Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors, Components (+30 more)

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
Cohesion: 0.05
Nodes (38): Badges & Chips, Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors (+30 more)

### Community 14 - "SKILL.md"
Cohesion: 0.40
Nodes (4): Capabilities & Workflows, Instructions, Purpose, Web Deployment Diagnostics

### Community 15 - "opencode.json"
Cohesion: 0.40
Nodes (4): lsp, plugin, $schema, .opencode/plugins/graphify.js

### Community 18 - "LanguageContext.tsx"
Cohesion: 0.17
Nodes (14): metadata, viewport, Footer(), Navbar(), AcademyTranslation, Lang, LANG_LABELS, LANGS (+6 more)

### Community 19 - "useLang"
Cohesion: 0.20
Nodes (12): Comparison(), CTABanner(), FAQ(), clientLogos, Hero(), pillarIcons, Pillars(), Pricing() (+4 more)

### Community 20 - "route.ts"
Cohesion: 0.67
Nodes (3): escapeHtml(), POST(), runtime

## Knowledge Gaps
- **156 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `lsp`, `metadata`, `runtime` (+151 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLang()` connect `useLang` to `Button.tsx`, `LanguageContext.tsx`, `academy/page.tsx`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `lsp` to the rest of the system?**
  _156 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `DESIGN.md` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._