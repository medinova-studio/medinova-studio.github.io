# Handoff — Medinova Academy funnel audit + build

Status: PAUSED — waiting for user to prepare testimonial videos. Do not start implementation yet (user asked to pause).

## Goal
Audit `/[lang]/academy` and the 7 course-detail pages, fix correctness issues, and build them into an effective sales funnel for the Moroccan market.

## Decisions locked
- Scope: correctness fixes **+** full funnel build.
- Social proof: user has real recorded student testimonial videos; will provide names/cities/courses/quotes later.
- Locales: all three (en/fr/ar) in lockstep. RTL for AR.
- Location: *forget the address* — remote academy; make copy location-neutral ("Online across Morocco"), no Rabat/Kenitra claim.
- Video hosting: YouTube **unlisted** + `youtube-nocookie` click-to-play facade (no self-host).
- Urgency: yes, add it.

## Project facts (verified)
- Next.js (App Router) + React 18 + TS + Tailwind 3.4. **Not static export** — `next.config.mjs` is bare (`reactStrictMode` only). Deploys to Vercel + Netlify (both meter bandwidth).
- Pricing single source `lib/pricing.ts`: `sessionMinutes:90`, `sessionsPerMonth:4`, `termMonths:3`, `monthly:300`, `term:800`, `currency:"MAD"`; derived `TERM_SESSIONS:12`, `TERM_LIST_COST:900`, `TERM_SAVING:100`.
- Courses `lib/courses.ts`: `COURSE_SLUGS` = digital-essentials, scratch, python, roblox, unity-csharp, web-development, creative-design. `COURSE_CATALOG[lang][slug]` with `{ meta, hero.sub, outcomes[], details[] }`.
- i18n `lib/i18n.ts` typed dicts. Academy copy: **EN ~1010–1330**, **FR ~1937–2236**, **AR ~2857–3156**.
- Academy index `app/[lang]/academy/page.tsx`: AnnouncementBar, Hero, Why, Courses, Teaching, Founder, Work, Pricing(leadCapture), FAQ, FinalCta(leadCapture), StickyCta, ViewContent, academySchema JSON-LD.
- Course page `app/[lang]/academy/courses/[slug]/page.tsx`: hero + Outcomes + Details, then `<Pricing courseName leadCapture/>`, `<Teaching/>`, `<FAQ/>`, `<FinalCta courseName leadCapture/>`, `<StickyCta/>`, `<ViewContent contentId=slug value=PRICING.monthly/>`, other-courses grid, courseSchema + breadcrumbSchema.
- Analytics `lib/analytics.ts`: `trackEvent` → gtag + fbq `trackCustom`; `trackLeadOnce` (FB Lead + GA `lead`, once/session); keys `medinova-fb-lead-sent`, `medinova-fb-lead-event-id`.
- WhatsApp `lib/academy.ts`: number `212703702976`; builders `academyWhatsAppUrl`, `academyPlanWhatsAppUrl(lang, plan, course)`, `academyLeadWhatsAppUrl`, `academyTrialWhatsAppUrl`. Component `components/analytics/WhatsAppCta.tsx` (href/message/source/onClick → `whatsapp_click` + `trackLeadOnce`).
- SEO `lib/jsonLd.ts`, `lib/metadata.ts` (`SITE="https://www.medinovastudio.com"`), per-route `opengraph-image.tsx`, sitemap/robots/`llms.txt`.
- Design tokens `tailwind.config.ts` + `app/globals.css` — `primary.soft`, `accent.ink/soft`, `hairline.tertiary`, `surface.2`, `whatsapp.*`, `navy`, `ink.*` all exist. `.form-input`, `.eyebrow`, `.card-accent` classes exist.
- `id="cta"` is unique (only `FinalCta.tsx`, conditional branches at :49 and :152). Not a bug.
- Public assets: `public/images/academy/*.webp`, `public/images/Founder.webp`, `public/images/zellige.svg`.

## Audit findings (confirmed)
1. **NAP/geo inconsistency:** hero badge says "Rabat, Morocco"/"Rabat, Maroc" (`lib/i18n.ts:1943,1947`) + metadata title Rabat (`lib/metadata.ts:11,17`), but schema address = **Kenitra** (`lib/jsonLd.ts:79,115`). → Make location-neutral per decision.
2. **AR hero badge parity bug** (`lib/i18n.ts:2863`): claims "الذكاء الاصطناعي" (AI) + 💻 emoji; EN/FR don't. → Mirror EN/FR.
3. **Dead urgency copy:** `hero.scarcity` never rendered (`components/academy/Hero.tsx` uses only badge/headline/subheadline/cta/trust) and empty all locales; `finalCta.scarcity` empty all locales. → Wire (Phase 1) or remove.
4. **Duplicate course pages:** identical `<Teaching/>` + academy-wide `<FAQ/>` on all 7 (`[slug]/page.tsx:245-246`); only outcomes/details differ. → per-course FAQ.
5. **`courseSchema.teaches` generic** identical for all courses (`lib/jsonLd.ts:264`). → per-course.
6. Cosmetic: FR FAQ indentation (`lib/i18n.ts:2192`).
7. **No social proof anywhere** (repo-wide search found none). Biggest conversion gap.
8. Hero CTA scrolls to `#courses` (not lead form / WhatsApp); WhatsApp-only (no phone/email fallback).

## Plan
**Phase 0 — Correctness**
- Location-neutral hero/subheadline + metadata (en/fr/ar); adjust/remove `LocalBusiness` postal address in `lib/jsonLd.ts` (keep `areaServed: MA`, `courseMode: Online`) unless user wants local SEO.
- Fix AR hero badge (`lib/i18n.ts:2863`).
- Per-course `teaches` in `lib/courses.ts` → `lib/jsonLd.ts:264`.
- FR indentation `lib/i18n.ts:2192`.

**Phase 1 — Funnel**
1. `components/academy/TestimonialVideo.tsx` — client facade: `next/image` poster + play button → injects `<iframe src="https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0&modestbranding=1&playsinline=1">` only on click; `loading="lazy"`, `allowFullScreen`, a11y `aria-label`. Data in `lib/videos.ts` (`{id, poster, name, city, course, aspect}`). Local posters at `public/images/academy/testimonials/` (no `remotePatterns` config needed; no Google request until click).
2. `components/academy/SocialProof.tsx` — video testimonials + text quotes; `academy.socialProof` i18n (en/fr/ar). Academy index after Founder; course pages optional (filter by course).
3. Urgency: wire `hero.scarcity` into `Hero.tsx`; next-cohort/seats line in `Pricing` + `FinalCta`; one evergreen-safe constant.
4. Hero secondary CTA "free trial → WhatsApp" (`Hero.tsx` + course hero) via `WhatsAppCta`, `source="academy_hero"`.
5. Per-course FAQ in `COURSE_CATALOG` (fallback to academy FAQ).
6. Phone/email fallback line in `FinalCta`/footer.

**Phase 2 — Measurement**
- `trackEvent("testimonial_play",{id})`, `trackEvent("cta_click",{source,location})`, FAQ opens; keep `trackLeadOnce`; verify `ViewContent` both pages.

## Pending from user (blockers to execute)
1. Per testimonial: unlisted YouTube **URL/ID**, **first name**, **city**, **course**, **quote**, + explicit **parental-consent** confirmation.
2. Video **aspect**: vertical 9:16 (phone) or horizontal 16:9? (decides card layout).
3. Confirm location-neutral copy ("Online across Morocco", no city).

## When we resume
Exit pause → confirm blockers 1–3 → execute Phase 0 → 1 → 2 → run `npm run lint` / tests (`vitest`) → `graphify update .`.