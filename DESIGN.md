---
version: beta
name: Algorithmics-light-blue-yellow
description: "A light, playful product-and-education marketing system built around an icy blue-white canvas (#F0F5FF), a royal-blue primary (#2455E6), and a single yellow accent (#FFD749). The system echoes the warmth of ed-tech playgrounds (Algorithmics) while staying tuned to Medinova's cool blue/cyan globe logo. Headings run Plus Jakarta Sans at 600–800 with tight tracking; body runs Geist; uppercase micro-labels run Geist Mono at 11px with 0.14em letter-spacing. Cards are pure white with hairline borders, soft shadows, and a 3px colored top border; dark moments (footer, social cards) sit on deep navy (#101A33)."

colors:
  primary: "#2455E6"
  primary-hover: "#1D46C6"
  primary-focus: "#1634A8"
  primary-soft: "#E8EEFF"
  accent: "#FFD749"
  accent-ink: "#7A5C00"
  accent-soft: "#FFF3C4"
  ink: "#14151A"
  ink-muted: "#3E4049"
  ink-subtle: "#6B6F7A"
  ink-tertiary: "#9CA0A8"
  canvas: "#F0F5FF"
  surface-1: "#FFFFFF"
  surface-2: "#EAF0FB"
  surface-3: "#E1E9F7"
  surface-4: "#D9E4F4"
  hairline: "#DCE4F2"
  hairline-strong: "#C6D2E9"
  hairline-tertiary: "#B3C1DD"
  navy: "#101A33"
  navy-1: "#16223F"
  navy-2: "#27365C"
  navy-ink: "#B9C6DE"
  navy-muted: "#C9D4EA"
  navy-tertiary: "#8FA1C4"
  navy-accent: "#6E8CFF"
  whatsapp: "#25d366"
  whatsapp-hover: "#1fb458"
  whatsapp-deep: "#128c7e"
  whatsapp-text: "#0E7A46"
  whatsapp-border: "#B5E3C9"
  semantic-success: "#27a644"
  semantic-error: "#ff3b30"
  logo-blue: "#0050A0"
  logo-sky: "#00A0F0"
  logo-cyan: "#22D3EE"

typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 54px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -1.0px
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.6px
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.4px
  headline:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.3px
  card-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.30
    letterSpacing: 0
  subhead:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: Geist
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: Geist
    fontSize: 12.5px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Geist Mono
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0.14em
  mono:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0.05em

rounded:
  xs: 6px
  sm: 8px
  md: 11px
  lg: 14px
  xl: 16px
  xxl: 20px
  xxxl: 24px
  pill: 9999px
  full: 9999px
  photo: 34px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
    shadow: 0 4px 14px rgba(36,85,230,0.28)
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    border: 1px {colors.hairline}
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    shadow: 0 10px 28px rgba(20,21,26,0.18)
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-hover}"
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
    border: 1px {colors.hairline}
    top-border: 3px {colors.primary}
    shadow: 0 12px 32px rgba(20,21,26,0.06)
  feature-card-yellow:
    backgroundColor: "{colors.surface-1}"
    top-border: 3px {colors.accent}
  status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  eyebrow-badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    border: 1px rgba(36,85,230,0.20)
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 6px 12px
  top-nav:
    backgroundColor: "rgba(240,245,255,0.94)"
    textColor: "{colors.ink-subtle}"
    height: 56px
    border-bottom: 1px {colors.hairline}
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.navy-muted}"
    typography: "{typography.body-sm}"
    padding: 56px 32px
    footer-heading:
      color: "{colors.accent}"
      typography: "{typography.eyebrow}"
  hero-photo:
    rounded: "{rounded.photo}"
    shadow: 0 20px 48px rgba(20,21,26,0.14)
  input:
    backgroundColor: "{colors.surface-1}"
    border: 1px {colors.hairline}
    focus-border: "{colors.primary}"
    focus-ring: 3px rgba(36,85,230,0.18)
    rounded: "{rounded.md}"
    padding: 10px 12px
  stat-number:
    fontFamily: Plus Jakarta Sans
    color: "{colors.primary}"
    fontSize: 40px
    fontWeight: 800
---

## Overview

Medinova's light redesign replaces the former near-black Linear-style canvas with a **light, airy, blue-and-yellow** system. The page canvas is an icy blue-white (`{colors.canvas}` #F0F5FF) chosen to sit inside the logo's own cool blue/cyan family (`{colors.logo-sky}`, `{colors.logo-cyan}`). Cards lift onto pure white (`{colors.surface-1}`) with hairline borders (`{colors.hairline}` #DCE4F2) and soft neutral shadows — depth is carried by the white-on-blue lift plus a **3px colored top border** (`{colors.primary}` royal blue, or `{colors.accent}` yellow for featured cards), echoing Algorithmics' card treatment.

The single warm accent is **yellow** (`{colors.accent}` #FFD749): used for the eyebrow dot, featured-card top borders, footer column headings, "New" badges, and the occasional stat highlight. The primary action color is **royal blue** (`{colors.primary}` #2455E6) with a darker hover (`{colors.primary-hover}`). WhatsApp CTAs stay **green** (`{colors.whatsapp}` #25d366) as the recognizable contact affordance.

Dark moments are reserved and intentional: the **footer** and **social/OG cards** sit on deep navy (`{colors.navy}` #101A33), which matches the logo's darkest tones. Everything else lives on the light canvas.

**Key Characteristics:**
- **Light blue-white canvas** — `{colors.canvas}` #F0F5FF, cool-toned to match the logo.
- **Royal-blue primary** `{colors.primary}` #2455E6 + **yellow accent** `{colors.accent}` #FFD749.
- **Playful rounded geometry** — buttons 11px, cards 14–20px, hero photos 34px.
- **Mono uppercase eyebrows** — Geist Mono 11px / 0.14em tracking, the signature editorial rhythm.
- **White cards + 3px colored top borders** carry hierarchy (no drop-shadow stacking).
- **Navy footer & social cards** as the only dark surfaces.
- **WhatsApp stays green** (`{colors.whatsapp}`) everywhere it appears.
- Subtle **zellige watermark** (blue geometric pattern, `public/images/zellige.svg`) at low opacity in heroes for Moroccan identity.

## Colors

### Brand & Accent
- **Royal Blue** (`{colors.primary}`): primary CTA, links, eyebrow text, metric numbers, featured borders.
- **Blue Hover** (`{colors.primary-hover}`): hovered primary CTA.
- **Blue Focus** (`{colors.primary-focus}`): focus ring tint.
- **Blue Soft** (`{colors.primary-soft}`): pill/chip backgrounds behind blue text.
- **Yellow** (`{colors.accent}`): eyebrow dots, featured card top-borders, footer headings, "New" badges, highlights. Never a full-section fill.
- **Yellow Ink** (`{colors.accent-ink}`): dark text guaranteed readable on yellow.

### Surface
- **Canvas** (`{colors.canvas}`): default page background — icy blue-white #F0F5FF.
- **Surface 1** (`{colors.surface-1}`): pure white cards.
- **Surface 2** (`{colors.surface-2}`): one step down (hover cards, chips, dropdowns).
- **Surface 3 / 4**: two/three steps down — nested panels.
- **Hairline** family: 1px borders on cards, inputs, dividers.
- **Navy** (`{colors.navy}` + `navy-1/2`): footer, social cards, dark OG. `navy-muted`/`navy-tertiary`/`navy-accent` are its light-on-dark text tokens.
- **Logo blues**: `logo-blue`/`logo-sky`/`logo-cyan` — reserved for logo-adjacent graphics and hero fills.

### Text
- **Ink** (`{colors.ink}`): headlines — near-black #14151A.
- **Ink Muted** (`{colors.ink-muted}`): emphasized secondary #3E4049.
- **Ink Subtle** (`{colors.ink-subtle}`): default body #6B6F7A.
- **Ink Tertiary** (`{colors.ink-tertiary}`): captions, meta #9CA0A8.

### Semantic
- **Success Green** (`{colors.semantic-success}`): success states.
- **Error** (`{colors.semantic-error}` #ff3b30): form validation.
- **WhatsApp** family: the green contact color (`{colors.whatsapp}` solid, `whatsapp-hover`, `whatsapp-deep`, `whatsapp-text`/`whatsapp-border` for outline variants).

## Typography

### Font Family
- **Plus Jakarta Sans** — headings and buttons; fallback `system-ui, sans-serif`. Carries `display-xl` → `card-title`, `button`.
- **Geist** — body text and UI labels.
- **Geist Mono** — `eyebrow`, `mono` captions, meta, stat footnotes.

All three ship via `next/font/google` (`Plus_Jakarta_Sans`, `Geist`, `Geist_Mono`) as CSS vars `--font-display`, `--font-sans`, `--font-mono`.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 54px | 800 | 1.08 | Hero headline |
| `{typography.display-lg}` | 40px | 700 | 1.12 | Section openers |
| `{typography.display-md}` | 30px | 700 | 1.15 | Sub-section headlines |
| `{typography.headline}` | 22px | 700 | 1.25 | Card / pricing titles |
| `{typography.card-title}` | 16px | 700 | 1.30 | Feature card titles |
| `{typography.body}` | 15px | 400 | 1.55 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.55 | Card body, footer |
| `{typography.caption}` | 12.5px | 500 | 1.40 | Meta, captions |
| `{typography.button}` | 14px | 700 | 1.20 | Button labels |
| `{typography.eyebrow}` | 11px | 600 | 1.30 | Mono section eyebrows (0.14em) |
| `{typography.mono}` | 12px | 400 | 1.50 | Mono captions (0.05em) |

### Principles
- Display at weight 700–800, tight but not extreme negative tracking (−1px at 54px).
- Body at weight 400, generous 1.55 line height, `text-balance` on display lines.
- Eyebrows are **always** mono uppercase with wide tracking — they are the taxonomic voice, set in blue (`{colors.primary}`) on `{colors.primary-soft}`, usually with a small yellow `{colors.accent}` dot.

## Layout

### Spacing
- Base unit 4px. Tokens: `{spacing.xxs}` 4 · `{spacing.xs}` 8 · `{spacing.sm}` 12 · `{spacing.md}` 16 · `{spacing.lg}` 24 · `{spacing.xl}` 32 · `{spacing.xxl}` 48 · `{spacing.section}` 80px.
- Card padding: 24px. CTA banners: 48px. Section rhythm: 80–96px.

### Grid & Container
- Max content width ~1200px (matches the reference); horizontal padding 24px.
- Card grids: 3-up desktop, 2-up tablet, 1-up mobile.
- Hero photo frames `clamp()` fluid heights.

## Elevation & Depth
Light theme depth is carried by the **white-on-blue lift** + hairline borders + a soft neutral shadow:

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on canvas | Hero text, footers, page chrome |
| 1 | White `{colors.surface-1}` card, 1px hairline, 3px colored top-border | Feature cards, pricing cards |
| 2 | `{colors.surface-2}` + stronger hairline | Hovered cards, dropdowns |
| 3 | Focus ring | Focused inputs/buttons |
| Dark | Navy `{colors.navy}` | Footer, social cards, OG |

No stacked multi-layer shadows; the 3px top border is the signature hierarchy cue.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | tiny chips |
| `{rounded.sm}` | 8px | check chips |
| `{rounded.md}` | 11px | buttons, inputs, icon tiles |
| `{rounded.lg}` | 14px | feature cards |
| `{rounded.xl}` | 16px | primary card radius |
| `{rounded.xxl}` | 20px | larger panels |
| `{rounded.xxxl}` | 24px | CTA banners, hero frames |
| `{rounded.photo}` | 34px | hero photographs |
| `{rounded.pill}` | 9999px | pills, badges, avatars |

## Components

### Buttons
- **Primary**: royal blue, white text, radius 11px, padding 10px 18px, soft blue shadow. Hover `{colors.primary-hover}`.
- **Secondary**: white, ink text, 1px hairline border. Hover surface-2.
- **WhatsApp**: solid `{colors.whatsapp}` green, white text — **keep green**; hover `{colors.whatsapp-hover}`. Outline variant uses `whatsapp-text`/`whatsapp-border`.

### Eyebrow Badge
Mono uppercase pill: `{colors.primary-soft}` bg, `{colors.primary}` text, 1px `rgba(36,85,230,0.2)` border, radius pill, with a small yellow `{colors.accent}` dot. Used at every section opener.

### Feature Card
White, radius 14–16px, 1px hairline, **3px `{colors.primary}` top border** (`{colors.accent}` for featured). Soft shadow. Hover lifts to surface-2.

### Stat Number
Plus Jakarta Sans 40px/800 in `{colors.primary}` with a caption beneath.

### Top Nav
Sticky, translucent `rgba(240,245,255,0.94)` + backdrop blur, 56px, hairline bottom border. Logo left, links + language switcher center/right, blue primary CTA.

### Footer
Deep navy `{colors.navy}`, text `{colors.navy-muted}`. Column headings mono uppercase **yellow** `{colors.accent}`. Links hover white. Social tiles `white/10`. Bottom bar `white/10` border.

### Inputs
White, 1px hairline, radius 11px; focus = `{colors.primary}` border + 3px blue-tinted ring.

## Do's and Don'ts

### Do
- Keep the canvas cool/blue — it matches the logo (`{colors.canvas}`).
- Use royal blue for primary actions and yellow as the single warm accent.
- Use mono uppercase eyebrows at every section opener.
- Use the 3px colored top-border to color-code cards.
- Keep WhatsApp CTAs green.
- Reserve navy for footer and dark social/OG surfaces.
- Use `{colors.surface-1}` white for cards on the blue canvas.

### Don't
- Don't reintroduce the dark canvas as the default surface.
- Don't add purple/lavender anywhere (logo family is blue/cyan).
- Don't make yellow a section background or card fill.
- Don't pill-round CTAs (buttons stay 11px).
- Don't use pure `#000000` or pure `#FFFFFF` as full canvases.
- Don't introduce a second warm accent alongside yellow.

## Responsive Behavior
- Breakpoints: Desktop-XL 1440 / Desktop 1280 / Tablet 1024 (3-up → 2-up) / Mobile-Lg 768 (nav hamburger) / Mobile 480 (single column; display-xl scales 54px → ~36px).
- Touch targets: CTAs ≥ 40px tall; pills ≥ 36px; inputs ≥ 44px on touch.
- Eyebrow badges may drop the dot on small screens but never lose the mono tracking.

## Iteration Guide
1. Reference components by their token names above before restyling.
2. Every section opener: eyebrow badge + display-lg title + subtitle.
3. Cards default to `{colors.surface-1}` white with the 3px top border.
4. Run `npx @google/design.md lint DESIGN.md` after edits.
5. Keep `{colors.primary}` blue and `{colors.accent}` yellow as the only chromatic pair.
6. Verify any dark surface is one of the `{colors.navy}` tokens.

## Known Gaps
- Hero photographs: the live site currently has no large hero photos; `{rounded.photo}` is defined for when real product/team photos are added.
- The zellige watermark (`public/images/zellige.svg`) is decorative; replace with a higher-fidelity asset if desired.
- Plus Jakarta Sans caps at weight 800 — `font-black` (900) is not available; use 800.
