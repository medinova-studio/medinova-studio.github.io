# Medinova Studio

Marketing site for **Medinova Studio** — a Moroccan independent game studio & interactive tech hub. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 16 · React 18 · TypeScript
- **Styling**: Tailwind CSS 3.4 · `class-variance-authority` · `tailwind-merge`
- **Forms**: `react-hook-form` + `zod`
- **Email**: Resend (`app/api/contact/route.ts`)
- **Animations**: `motion` · **Icons**: `lucide-react`
- **SEO**: `next-sitemap` (sitemap.xml + robots.txt)

## Pages

| Route      | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `/`        | Home — hero, tech stack, founder, portfolio, services, contact     |
| `/agency`  | 360° digital growth & AI automation agency landing                 |
| `/academy` | Medinova Academy — online coding / game-dev courses                |

## i18n

English, French, and Arabic (RTL) via a client-side language context:

- `lib/i18n.ts` — typed translation dictionaries (`en`, `fr`, `ar`)
- `lib/LanguageContext.tsx` — `LanguageProvider` + `useLang()` hook, persists choice to `localStorage` (`medinova-lang`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Create `.env.local` with your Resend key for the contact form:

```
RESEND_API_KEY=re_...
```

## Scripts

```bash
npm run dev        # dev server
npm run build      # production build
npm run postbuild  # generate sitemap (next-sitemap)
npm start          # serve production build
npm run lint       # eslint
npm test           # vitest unit tests
```

## Deploy

Configured for both **Netlify** (`netlify.toml`) and **Vercel** (`vercel.json`). The sitemap canonical domain is configured in `next-sitemap.config.js`.

## Design system

Follow the Linear-style design tokens in [`DESIGN.md`](./DESIGN.md) for any UI work. Tokens are mapped into Tailwind in `tailwind.config.ts` (colors, surfaces, harlines, fonts).
