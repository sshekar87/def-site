# CLAUDE.md — DEF Website (v1)

## What this is

A modern marketing website for the **Dedham Education Foundation** (DEF), a 30-year-old 501(c)(3) that funds teacher-led programs in Dedham Public Schools. Currently on Squarespace; we're rebuilding on Next.js + Vercel for a board-led refresh.

**This is v1: marketing site only.** No backend, no auth, no database. Donations link out to existing PayPal/Givebutter (we'll wire up Givebutter properly in v1.1). The goal is a board-presentable, deployable site that replaces the current Squarespace experience.

## Owner & context

- **Owner:** Sukesh Shekar (DEF board member). Solo operator for technical work.
- **Stack experience:** Sukesh has shipped Next.js + Vercel + Supabase apps before (Altgage Realtor App, rates.altgage.com). He's non-technical by training but works closely with Claude Code as his coding partner.
- **Maintenance plan:** Sukesh maintains v1 alone. Other board members are non-technical and won't touch the code. This means: keep dependencies minimal, content should be editable by changing markdown/JSON files (not deploying code), and avoid clever abstractions.

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + CSS variables for brand tokens
- **Fonts:** Fraunces (serif headlines) + DM Sans (body) — Google Fonts via `next/font`
- **Hosting:** Vercel (preview deploys per PR, prod on main)
- **Analytics:** Vercel Analytics + Google Analytics 4
- **Forms:** Native HTML forms posting to Formspree or Resend (decide in build phase)
- **Images:** `next/image` with local files in `/public` (no CMS yet)
- **Icons:** Lucide React

**No backend in v1.** No database, no auth, no API routes (except maybe a single contact form handler).

## Brand

### Colors (CSS variables in `app/globals.css`)

```css
--crimson: #9d273f;       /* primary CTAs, headline accents */
--crimson-dark: #7a1d30;  /* hover states */
--crimson-deep: #4a1220;  /* footer background */
--gold: #f1961e;          /* impact numbers, awards, celebration */
--blue: #0b4bba;          /* trust signals, links */
--green: #118d70;         /* teachers section, secondary CTAs */
--mint: #41e596;          /* small hover accents, dark-bg highlights */
--cream: #faf6ee;         /* page background */
--cream-warm: #f2ead9;    /* card backgrounds */
--ink: #1a1410;           /* primary text */
--ink-soft: #4a423a;      /* body text */
--muted: #8a7f72;         /* captions, secondary text */
--line: #e6dec8;          /* borders, dividers */
```

### Type

- **Headlines:** Fraunces (weights 400, 500, 700). Italics for accent words inside headlines (`<em>change</em>`).
- **Body:** DM Sans (400, 500, 600).
- **Mono (rare):** SF Mono / Menlo system stack for things like EIN.

### Aesthetic

Editorial magazine, not corporate nonprofit. Generous white space. Serif + italic accents underlined in gold. Subtle paper grain via SVG noise on body. **Avoid generic "Inter on white" AI slop.**

## Site map (v1 scope)

9 pages total. Each is a route in `app/`.

1. `/` — Home (hero, impact strip, recent grants, how-it-works, teachers banner, event feature, sponsors, story, donate CTA)
2. `/about` — Mission, 30-year history, board roster, financials snapshot
3. `/grants` — Three grant types (Enrichment, Innovation, Nancy Bradley), deadlines, embedded application links
4. `/grants/awarded` — Searchable list of awarded grants by year/school/category
5. `/grants/reimbursements` — Teacher utility page for grant reimbursement process
6. `/grants/stec-award` — Christine Stec Rock Star Educator Award (single canonical page; fix the old typo URL)
7. `/events/dash` — DEF Dash 5K (consolidates Dash, Map, Pictures)
8. `/events/spelling-bee` — Spelling Bee
9. `/donate` — Donation page (currently links to PayPal; will embed Givebutter in v1.1)
10. `/contact` — Contact form + FAQ

Plus utility: `/privacy`, `/accessibility`, `/404`.

## What's already done

- **Design language:** Approved homepage prototype lives in `/reference/prototype.html` (single-file HTML). Use as the visual source of truth for layout, color application, and typography. Sections from this prototype are spec for `/` page components.
- **Strategy doc:** `/reference/DEF_Website_Strategy.docx` — board-facing rationale. Read for context on audience, sitemap decisions, and the 90-day plan. Don't change the structure described there without asking.

## Working agreement

- **Daily scope files** in `/docs/build-plan/`: `day-01.md`, `day-02.md`, etc. Each file is ~1 day's worth of focused work. Work one day at a time; don't jump ahead.
- **Component library first:** Before building pages, build the shared components in `/components/ui/` and `/components/sections/`. Pages assemble sections.
- **Content lives in `/content/`** as markdown or TypeScript objects. Grant lists, board members, sponsors, etc. should be editable by changing a single file, not redeploying code.
- **No premature optimization:** No i18n, no CMS, no headless setup, no MDX unless we explicitly need it. Keep it boring and obvious.
- **Accessibility is non-negotiable:** WCAG 2.1 AA target. Every image has alt text. Color contrast checked. Keyboard navigation works. Use semantic HTML (`<nav>`, `<main>`, `<article>`).
- **SEO basics from day 1:** Every page has unique `<title>`, `<meta description>`, OG image. Sitemap and robots.txt before launch.

## Out of scope for v1

- Donation processing (link out to existing PayPal for now)
- Email subscriptions / Resend integration
- Drip campaigns
- CRM / Supabase
- Admin dashboard
- Multi-language
- Blog
- Search (beyond client-side filtering on `/grants/awarded`)

All of the above is v1.1+. Don't preemptively wire any of it.

## Style notes for Claude Code

- **Ask before adding dependencies.** Especially anything that requires config (Storybook, MDX, CMS clients).
- **Prefer composition over abstraction.** Sukesh maintains this solo; a section component that's 60 lines of clear JSX beats 20 lines of clever abstraction.
- **Match the prototype's polish.** This site is a board-facing artifact. Pixel quality matters. Generous spacing, real type hierarchy, considered hover states.
- **Real content, not Lorem Ipsum.** If a section needs copy, write it (board will edit later). Lorem Ipsum makes preview reviews useless.
- **Photos:** Use placeholder gradient cards (like the prototype) until real photos exist. Don't pull stock photography.

## Done when

- All 9 routes ship with real (or board-edit-ready) content
- Lighthouse: 95+ on Performance, Accessibility, Best Practices, SEO on `/`
- Mobile-tested on iPhone + Android viewport
- Deployed to Vercel preview URL Sukesh can share with the board
- Reviewed by Sukesh before merging to `main`

When v1 is shipped, archive this `CLAUDE.md` and start `CLAUDE.md` for v1.1.
