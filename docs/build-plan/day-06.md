# Day 6 — Launch polish

## Goal

Take the working v1 from "looks good" to "ready to show the board with confidence."

## SEO + meta

- Every route has a unique `<title>`, `<meta description>`, and OG image (1200×630)
- OG images generated dynamically with `next/og` (one template, route-specific text)
- `app/sitemap.ts` — generate sitemap from known routes
- `app/robots.ts` — allow all, link to sitemap
- Schema.org markup on `/`:
  - `Organization` / `NonProfitOrganization`
  - `Event` for upcoming events
- Canonical URLs set on every page

## Analytics

- Vercel Analytics enabled (free tier)
- Google Analytics 4 added via `next/script` with `afterInteractive` strategy
- Define key events to track:
  - `donate_click` (any donate button click)
  - `grant_apply_click`
  - `event_register_click`
  - `share_click`
  - `email_signup`
- Do NOT track PII in event payloads

## Accessibility audit

- Run axe DevTools on every route, fix all violations
- Color contrast check: every text/background combo passes WCAG AA (4.5:1 normal, 3:1 large)
- Keyboard nav: tab through every route, focus states visible everywhere
- Skip-to-content link in `app/layout.tsx`
- All images have alt text (descriptive, not "image of...")
- All forms have proper labels and error states
- Heading hierarchy: one h1 per page, no skipped levels

## Performance

- Lighthouse 95+ on `/` for Performance, Accessibility, Best Practices, SEO
- All other routes: 90+ across the board
- Images: `next/image` everywhere, proper sizes prop, no layout shift
- Fonts: `display: swap`, preloaded
- No client-side JS on routes that don't need it (use `'use client'` only where required)

## Redirects from old Squarespace site

Build the full map in `docs/redirects.md` and add to `next.config.js`:

```
/our-mission → /about
/board-of-directors → /about#board
/contact-us → /contact
/def-dash-5k → /events/dash
/def-dash-map → /events/dash#course
/def-dash-pictures → /events/dash#photos
/spelling-bee → /events/spelling-bee
/christine-stec-award → /grants/stec-award
/chrstine-stec-rock-star-educator-award → /grants/stec-award
/dpssnowdayraffle → /events (or temporarily /events/raffle if currently active)
/thanksdef → /donors (build placeholder for v1)
/grantsoverview → /grants
/grantreimbursements → /grants/reimbursements
/awarded-grants → /grants/awarded
/def-board-login-1 → /contact (or remove; verify usage with Sukesh first)
```

Test every redirect after deploy.

## Custom 404

- `app/not-found.tsx`
- Friendly editorial 404, not generic
- Links back to common destinations (home, donate, grants)
- Search-style call to action: "Looking for something? Here's where it might have moved."

## Privacy + Accessibility pages

- `app/privacy/page.tsx` — short, plain-English. We collect: form submissions, basic analytics. We don't sell data. Standard nonprofit boilerplate.
- `app/accessibility/page.tsx` — WCAG 2.1 AA target, how to report issues, contact info

## Domain + DNS prep

- Document the DNS changes needed to point `dedhameducationfoundation.org` from Squarespace to Vercel
- Do NOT actually flip DNS in this phase — only document
- Confirm Vercel custom domain settings ready (CNAME, A records noted)

## Pre-launch checklist (Sukesh's review)

Create `docs/pre-launch-checklist.md` with:
- [ ] All 9 routes load
- [ ] All redirects tested
- [ ] All forms submit
- [ ] Donate buttons go to PayPal
- [ ] Mobile-tested on real iPhone + Android device
- [ ] Lighthouse scores meet targets
- [ ] No console errors on any page
- [ ] OG share preview tested (paste URL into iMessage, Facebook, LinkedIn)
- [ ] Board roster correct and up to date
- [ ] Grant amounts and dates verified with board
- [ ] EIN visible in footer
- [ ] All `// TODO` comments resolved or moved to v1.1 tracker

## Acceptance

- Vercel preview URL ready to share with the board
- Sukesh has signed off on every page
- Lighthouse meets targets
- Redirects fully tested
- v1.1 issue tracker created in `docs/v1-1-roadmap.md`

## Do not

- Flip DNS yet — that's a separate decision after board approval
- Build the Givebutter integration
- Build admin dashboards
- Add features beyond what's in the day plans

## Launch sequence (after board approval)

1. Final preview review with board
2. Email blast to donor list with launch announcement
3. Social posts (Facebook + Instagram)
4. DNS flip
5. Monitor analytics for 48 hours
6. Debrief, plan v1.1
