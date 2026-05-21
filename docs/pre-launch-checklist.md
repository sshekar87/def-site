# Pre-launch checklist

Walk through this before sharing the Vercel preview with the full board, and again before flipping DNS.

## Content & data
- [ ] Board roster correct in `content/board.ts`
- [ ] Annual granted totals in `content/board.ts` (`yearlyGranted`) verified with treasurer
- [ ] Impact strip numbers in `content/impact.ts` verified with board
- [ ] Recent grants in `content/grants.ts` reflect the current cycle
- [ ] Current cycle deadline + application URL in `content/cycles.ts`
- [ ] Sample awarded grants in `content/awarded-grants.ts` replaced with real archive
- [ ] EIN in `lib/site.ts` (and visible in footer) replaced with real number
- [ ] PayPal donate URL in `lib/site.ts` is correct
- [ ] Mailing address (P.O. Box 245 placeholder) confirmed

## Routes
- [ ] Every nav and footer link resolves to a real page
- [ ] `/`, `/about`, `/grants`, `/grants/awarded`, `/grants/reimbursements`, `/grants/stec-award`, `/events/dash`, `/events/spelling-bee`, `/donate`, `/contact`, `/privacy`, `/accessibility` all load
- [ ] Old Squarespace redirects work — visit `/our-mission`, `/def-dash-5k`, `/chrstine-stec-rock-star-educator-award`, etc. on the deployed Vercel preview
- [ ] Custom 404 (`app/not-found.tsx`) renders for unknown paths

## Forms
- [ ] `NEXT_PUBLIC_FORMSPREE_ENDPOINT` set in Vercel project env (contact form)
- [ ] `NEXT_PUBLIC_FORMSPREE_MONTHLY` set in Vercel project env (monthly notify form on /donate)
- [ ] Both forms tested with a real submission
- [ ] Confirmation states render correctly after submit

## Donate buttons
- [ ] DonateCTA preset buttons hit the correct PayPal hosted button
- [ ] `/donate` "Donate via PayPal" CTA goes to the real PayPal URL
- [ ] "Email treasurer" mailto opens correctly on iOS and Android

## SEO
- [ ] Each page has a unique title (verify in browser tab)
- [ ] OG image renders (paste a Vercel URL into iMessage, Facebook, LinkedIn — preview should show DEF card)
- [ ] `app/sitemap.ts` includes every route
- [ ] `robots.ts` allows crawling and links sitemap
- [ ] Schema.org JSON-LD present on `/` (view-source, search `application/ld+json`)

## Analytics
- [ ] Vercel Analytics enabled in Vercel project settings
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` set in Vercel env (optional but desired)
- [ ] Real-time hits show up in GA4 within 30 seconds of a manual visit

## Accessibility
- [ ] axe DevTools run on every route, zero serious/critical violations
- [ ] Tab through every route — focus state visible, no traps
- [ ] Skip-to-content link works (press Tab on a fresh page)
- [ ] Color contrast checked on every text/background combo (especially crimson on cream, gold on ink)
- [ ] `prefers-reduced-motion` honored (toggle in macOS Settings or Chrome devtools)
- [ ] All images have alt text

## Performance
- [ ] Lighthouse 95+ on `/` for Perf, A11y, Best Practices, SEO
- [ ] Lighthouse 90+ on every other route
- [ ] No layout shift on hero (`hero-visual` aspect-ratio reserved)
- [ ] Fonts use `display: swap` (already set)
- [ ] No console errors or warnings on any route

## Mobile
- [ ] iPhone Safari: nav collapses, hero stacks, no horizontal scroll
- [ ] Android Chrome: same
- [ ] 380px viewport: amount buttons fit, footer stacks to 1-column
- [ ] Pinch-zoom works on photos (no `user-scalable=no`)

## Cleanup before flipping DNS
- [ ] All `// TODO` comments resolved or moved to `docs/v1-1-roadmap.md`
- [ ] No `console.log` debugging left in
- [ ] No placeholder EIN, no placeholder PayPal URL
- [ ] No raw `forms.gle/REPLACE` links
