# Day 1 — Foundation

## Goal

Working Next.js app deployed to Vercel with brand tokens, fonts, base layout, and the homepage hero + nav.

## Tasks

### 1. Bootstrap
- `npx create-next-app@latest def-site --typescript --tailwind --app --src-dir=false --import-alias "@/*"`
- Initial commit, push to GitHub
- Connect repo to Vercel, confirm first deploy succeeds

### 2. Install minimal deps
```
npm install lucide-react clsx tailwind-merge
```
Stop. Don't add anything else without asking.

### 3. Brand tokens
- Add the full CSS variable palette (from `CLAUDE.md`) to `app/globals.css` under `:root`
- Configure Tailwind v4 to expose these as classes (e.g. `bg-crimson`, `text-cream`)
- Add Fraunces + DM Sans via `next/font/google` in `app/layout.tsx`

### 4. Base layout
- `app/layout.tsx`: HTML shell with font variables, body grain texture (SVG noise via CSS background)
- `components/site/TopBar.tsx`: thin top bar with active cycle pill ("Spring cycle open") + login links
- `components/site/Nav.tsx`: sticky nav, logo mark + name, links to 5 sections, donate CTA
- `components/site/Footer.tsx`: 4-column footer matching prototype

### 5. Homepage hero
- `app/page.tsx`: route shell
- `components/sections/Hero.tsx`: matches prototype hero — headline with italic+gold-underlined "change", subhead, two CTAs, layered offset cards on the right (crimson + gold + green), wobbling blue sticker
- Real copy from prototype, not Lorem

### 6. Deploy & verify
- Push to main, verify Vercel preview
- Send Sukesh the URL

## Acceptance

- Lands on `/`, sees nav + topbar + hero
- Fonts loaded, brand colors applied
- Mobile viewport: nav collapses, hero stacks
- Vercel preview URL works

## Do not

- Build other pages yet
- Add analytics, OG images, or SEO meta beyond `<title>` / `<meta description>` on `/`
- Wire up any forms
- Add a CMS

## Hand off to Day 2

Day 2 builds the remaining homepage sections: impact strip, recent grants, how-it-works, teachers banner, event feature, sponsors, story, donate CTA.
