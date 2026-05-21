# Day 3 — About + Grants overview

## Goal

Two of the most important secondary pages: `/about` (the credibility page) and `/grants` (the teacher conversion page).

## `/about`

### Structure
1. Hero with editorial headline: "Funded by Dedham. *For Dedham.*"
2. The 30-year story in 3 paragraphs (use draft in strategy doc, refine for tone)
3. Impact-by-the-numbers — different presentation from homepage; bar chart or stacked stats by year (granted amount per cycle, 2020 → 2025)
4. Board roster — photo + name + role grid. Use placeholder avatars (initial in colored circle) until photos arrive.
5. Annual reports section — placeholder for 990s / annual letters. Show empty state: "Annual reports coming Spring 2026."
6. CTA at bottom: "Want to join the board? Get in touch."

### Components
- `components/sections/AboutHero.tsx`
- `components/sections/StorySection.tsx` — long-form prose, max-width ~640px, larger body text
- `components/sections/YearlyGrants.tsx` — stacked bars or simple list of $X granted in 20XX
- `components/sections/BoardGrid.tsx` — 4-col grid, role label, name, term
- `components/sections/AnnualReports.tsx` — empty state with explanation

### Data
- `content/board.ts` — start with this roster (from current site):
  - April (Wilmar) Dasuta — President
  - Carolyn Smith — VP
  - Julia Prentice — Treasurer
  - Carolann Adams — Secretary
  - Members: Stephen Acosta, Christina Alejandre, Ulysses Andrews, Sheneya Carter, Monica De Winter, Catrell Booker Hoban, Justin Humphreys, Tara Ikenouye, Trish Kelleher, Paul McMurtry, Clarissa Robyn, Sukesh Shekar, Sandy Sicard, Emily Walton
  - Student board: Rihanna Rhau, Thomas Vurmo, Sofia Vergara

### Avatar fallback
Initial in crimson/gold/blue/green circle (rotate colors). No stock photos.

## `/grants`

This is the teacher conversion page. The single job: get a teacher to apply.

### Structure
1. Editorial hero: "Have an idea? We probably want to fund it."
2. **Right now** — current cycle status card, pinned to top. Big, hard to miss.
3. Three grant types as expandable cards:
   - **Enrichment** — supplements existing curriculum (speakers, performances, museum visits). Fall cycle. Up to $X.
   - **Innovation** — new pilot programs aligned to district strategic plan. Spring cycle. Up to $X.
   - **Nancy Bradley Memorial** — world languages and cultures. Either cycle.
4. **Eligibility & FAQ** — accordion, ~6 questions
5. **The review process** — visual timeline (apply → review → notify → run program → reimburse)
6. CTA: "Start your application" linking to current Google Form / Doc

### Components
- `components/sections/GrantsHero.tsx`
- `components/sections/CurrentCycle.tsx` — highlighted card with current cycle, deadline, "Apply now" CTA
- `components/sections/GrantTypeCard.tsx` — reusable, expandable
- `components/sections/EligibilityFAQ.tsx` — accordion
- `components/sections/ReviewTimeline.tsx` — horizontal stepper

### Data
- `content/cycles.ts` — extend from Day 2 with full cycle calendar (cycle name, type, opens, closes, max award, application URL)
- `content/grant-types.ts` — long-form description of each grant type, eligibility, examples

### Important
- Application links go to the **existing Google Forms / Google Docs** from the current site. Don't build a form.
- Keep all three grant types collapsible (accordion or tabs). Default to expanded for the current cycle's grant type.

## Acceptance

- `/about` and `/grants` shipped, linked from nav
- Board roster reads naturally (no awkward formatting)
- Current cycle is impossible to miss on `/grants`
- Mobile-tested
- Lighthouse 90+ on both routes

## Do not

- Build `/grants/awarded` yet (Day 4 — it's the searchable database, deserves its own day)
- Build a custom application form
- Add board member bios (just role + name in v1)

## Hand off to Day 4

Day 4 builds `/grants/awarded` (searchable list) and `/grants/reimbursements` (teacher utility page).
