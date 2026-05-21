# DNS flip — Squarespace → Vercel

Do not run this until the board has approved the Vercel preview and the pre-launch checklist is fully green.

## Goal

Move `dedhameducationfoundation.org` (and any `www.` subdomain) to point at the Vercel-hosted Next.js site, with zero downtime and all old Squarespace URLs redirecting cleanly.

## Pre-flight

1. Confirm Vercel project is on a paid or Pro plan that supports custom domains (free Hobby tier does — DEF should be fine on free).
2. Verify `next.config.ts` redirects cover every legacy Squarespace URL you can find. Add any missing ones — they're cheap.
3. Make a static export or screenshot pass of the current Squarespace site so the board has a "before" reference.
4. Have the Squarespace admin login handy.

## Steps

### 1. Add the domain in Vercel
- Vercel dashboard → Project → Settings → Domains → Add
- Add both `dedhameducationfoundation.org` and `www.dedhameducationfoundation.org`
- Vercel will show the DNS records you need (A record for apex, CNAME for www)

### 2. Update DNS at the registrar (NOT in Squarespace)
- Log into the registrar where the domain is registered (likely GoDaddy or Squarespace Domains)
- Apex record: A `76.76.21.21` (Vercel's IP — confirm in Vercel UI)
- www record: CNAME `cname.vercel-dns.com`
- TTL: 3600 (1 hour) — gives a quick fallback if we need to roll back
- Remove existing Squarespace A/AAAA records

### 3. Wait for propagation
- DNS typically propagates within 10–30 minutes; can take up to 24 hours globally
- Watch in Vercel dashboard — the domain status will flip from "Invalid Configuration" to "Valid"
- Vercel auto-issues a Let's Encrypt SSL certificate once DNS resolves

### 4. Verify
- Visit `https://dedhameducationfoundation.org` — should hit the new Next.js site
- Visit `https://www.dedhameducationfoundation.org` — should redirect to the apex (Vercel default)
- Test 5+ old Squarespace URLs (e.g. `/our-mission`, `/def-dash-5k`, `/christine-stec-award`)
- Submit one contact form, one monthly-notify form — confirm Formspree receives it

### 5. Decommission Squarespace
- Do NOT delete the Squarespace site for at least 7 days — keeps a fallback if DNS needs to revert
- After 7 days of clean Vercel traffic with no support reports, pause/cancel Squarespace subscription

## Rollback

If something is badly broken post-flip:
1. Revert DNS to Squarespace's original A/CNAME records
2. Vercel deploys are not affected — the site keeps working at `<project>.vercel.app` while DNS is rolled back
3. Debug, redeploy, re-flip
