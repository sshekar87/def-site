# Day 5 — Events + Donate

## Goal

Two event landing pages and the donate page. End the day with all 9 core routes shipped.

## `/events/dash`

The DEF Dash 5K is the biggest fundraiser of the year. This page consolidates the current site's `/def-dash-5k`, `/def-dash-map`, and `/def-dash-pictures` into one.

### Structure
1. **Hero** — bold date display, name, location, register CTA
2. **What it is** — 2 paragraphs of warm, plain-English description
3. **Course map** — embedded Google Map or static image with route
4. **Schedule** — timeline of the day (registration → kid's fun run → 5K → awards → cider donuts)
5. **What your registration funds** — tie back to grants (this is the donor moment)
6. **Photos from past Dashes** — masonry grid, lazy-loaded
7. **Sponsors of this year's Dash** — logo grid (separate from main sponsors)
8. **Register + Sponsor CTAs** at bottom

### Components
- `components/sections/EventHero.tsx` — reusable for Dash + Spelling Bee (props: date, name, location, ctaText, ctaHref)
- `components/sections/EventSchedule.tsx`
- `components/sections/EventPhotos.tsx` — masonry/grid, hover zoom
- `components/sections/EventCourseMap.tsx` — image with caption (Google Maps embed if URL provided)

### Data
- `content/events.ts` — extend with full Dash event object including schedule items, course image URL, photo URLs, sponsor list

### Photos
- Use 6 placeholder colored squares for now. Sukesh provides real photos before launch.
- Set proper `next/image` sizing; lazy load below the fold.

## `/events/spelling-bee`

Same structure as Dash but with bee-specific content. Reuse `EventHero` and other shared components.

### Adjustments
- Drop course map (not relevant)
- Add a "How it works" section instead (team format, word lists, age divisions)
- Add a "Star spellers" section recognizing winners

## `/donate`

The donate page is the single most important conversion page on the site.

**For v1: link out to existing PayPal.** We're not embedding Givebutter yet (v1.1).

### Structure
1. Editorial hero: "Every dollar funds *a program* a Dedham student will remember."
2. **Three ways to give** — three side-by-side cards:
   - **One-time** (most prominent) → PayPal link, with amount suggestions
   - **Monthly** → "Coming soon — sign up to be notified" + email capture
   - **Stock / DAF / planned giving** → "Email our treasurer" with mailto link
3. **What your gift does** — three example impact bands:
   - "$25 funds classroom supplies for one Tide Pools field trip"
   - "$100 funds one author visit for a Dedham 4th grade class"
   - "$500 funds a Shakespeare performance for the entire middle school"
4. **Tax info** — 501(c)(3) status, EIN, donation confirmation policy
5. **Donor recognition** — link to `/donors` page (build empty for v1, full in v1.1)
6. **Employer match** — short paragraph + link to common employer match form

### Components
- `components/sections/DonateHero.tsx`
- `components/sections/GivingMethods.tsx` — three-card layout
- `components/sections/ImpactBands.tsx` — visual impact tiers
- `components/sections/TaxInfo.tsx`

### Email capture for monthly notify
Use **Formspree** free tier for now (no Resend integration in v1). 50 submissions/month is plenty.
- Form posts to a Formspree endpoint
- Show success state inline (no page reload)
- Add `// TODO: replace with Resend in v1.1` comment

## `/contact`

Simple contact page for completeness.

### Structure
1. Heading + brief: "We're an all-volunteer board. Here's how to reach us."
2. Direct emails:
   - General inquiries → info@dedhameducationfoundation.org (or current address)
   - Grant questions → grants@...
   - Treasurer / donations → treasurer@...
   - Press → use board president email
3. Contact form (Formspree)
4. Mailing address
5. Social links

### Components
- `components/sections/ContactGrid.tsx`
- `components/forms/ContactForm.tsx`

## Acceptance

- All three event pages shipped
- `/donate` linked from nav, footer, hero, and every CTA across the site
- PayPal link works (use existing `paypal.me/DedhamEdFoundation`)
- Formspree forms verified to submit and acknowledge
- All 9 routes from the sitemap shipped
- Mobile-tested on all new routes

## Do not

- Embed Givebutter (v1.1)
- Build a custom donation form
- Wire up Resend
- Add Venmo QR (Sukesh will add to donor recognition page later if desired)

## Hand off to Day 6

Day 6 is polish: SEO, OG images, accessibility audit, performance, redirects from all old URLs, analytics, and 404 page.
