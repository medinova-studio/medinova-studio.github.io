---
name: web-deployment-diagnostics
description: # Web Deployment & Build Diagnostics

## Purpose
Enables Zoo to diagnose, fix, and optimize web project builds, configuration mismatches, and deployment errors across modern frameworks and hosting providers.

## Capabilities & Workflows
1. **Directory & Output Verification:** 
   - Inspect build outputs (`dist`, `build`, `.next`, `out`) against project configuration files (`package.json`, `vercel.json`, `vite.config.js`, `next.config.js`).
   - Fix routing and single-page app fallback rules (e.g., rewriting `/*` to `index.html`).

2. **Environment & Pipeline Audit:**
   - Verify environment variable requirements between local `.env.example` files and remote build environments.
   - Audit `scripts` inside `package.json` to ensure `npm run build` generates files where hosting providers expect them.

3. **Dependency & Transpilation Debugging:**
   - Catch missing peer dependencies, TypeScript compilation errors, and bundler path alias mismatches (`@/components/*`).
modeSlugs:
  - website-devolpment
---

# Web Deployment Diagnostics

## Instructions

Add your skill instructions here.
