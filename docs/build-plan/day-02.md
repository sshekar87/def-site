# Day 2 — Complete the homepage

## Goal

All 9 homepage sections from the prototype, polished and responsive. End the day with a homepage that Sukesh can show a board member with pride.

## Reference

The single source of truth is `/reference/prototype.html`. Match its layout, spacing, color application, and typography. Where the prototype has gradient cards, keep gradient cards (real photos come in v1.2).

## Sections to build (in order)

### 1. `components/sections/ImpactStrip.tsx`
- Dark `bg-ink` band with gold accent radial gradients
- Three big serif stats with gold-colored numbers
- Real numbers go in `content/impact.ts`:
  ```ts
  export const impactStats = {
    totalGranted: "$1M+",       // VERIFY WITH BOARD
    teachersFunded: "120+",     // VERIFY WITH BOARD
    studentsReached: "3,200",   // VERIFY WITH BOARD
  };
  ```
- Add a `// TODO: verify with board` comment so we don't forget

### 2. `components/sections/RecentGrants.tsx`
- 3-card grid (1.4fr / 1fr / 1fr), one featured tall card
- Data from `content/grants.ts` (start with 3 real Fall 2025 grants if Sukesh has them; otherwise the prototype's placeholders)
- Each card: category pill, dollar amount, title, school + teacher
- Gradient backgrounds: green (innovation), blue (enrichment), gold (Nancy Bradley)
- Link to `/grants/awarded` for the full list

### 3. `components/sections/HowItWorks.tsx`
- Three steps, dashed connector line between
- Numbered circles in crimson/green/gold
- Centered section heading: "A simple loop. *No bureaucracy.*"

### 4. `components/sections/TeachersBanner.tsx`
- Full-bleed deep green panel with radial mint glow
- Left: pitch + "Apply for a grant" CTA on cream button
- Right: two deadline cards in glassmorphism (current cycle + next cycle)
- Deadline data from `content/cycles.ts`

### 5. `components/sections/EventFeature.tsx`
- 2-column: crimson date card + content
- Hardcoded to next major event (Dash or Spelling Bee, whichever is closer)
- Pull from `content/events.ts`

### 6. `components/sections/Sponsors.tsx`
- Logo grid (6 placeholder cards for now)
- "Become a 2026 sponsor" link to blue
- Data from `content/sponsors.ts` (empty array OK for v1)

### 7. `components/sections/Story.tsx`
- Full-bleed `bg-ink` section
- Massive "30" in gold on the left
- Two-paragraph history on the right
- Gold CTA button "Read our full story"

### 8. `components/sections/DonateCTA.tsx`
- Centered, large editorial headline
- Amount selector (5 buttons + Other), default $100 active
- Two CTAs: "Give $X today" (primary, dynamic) + "Make it monthly"
- 501(c)(3) note in italic muted

### 9. Wire everything into `app/page.tsx`
- Import all sections in order
- Verify no layout shift, smooth scroll between sections

## Content files to create

```
content/
  impact.ts          # totalGranted, teachersFunded, studentsReached
  grants.ts          # recent grants for homepage + full awarded list (used later)
  cycles.ts          # current and upcoming grant cycles with deadlines
  events.ts          # upcoming events with dates, locations, descriptions
  sponsors.ts        # sponsor logos + URLs
  board.ts           # board roster (for /about, but create file now)
```

Each file is a typed export. No CMS. Sukesh edits these directly.

## Interactions

- Donate amount selector: click updates active state + updates the primary CTA text
- Section reveal on scroll: gentle fade-up via `IntersectionObserver` (copy from prototype's script)
- Sticker wobble: keep the CSS keyframe animation from prototype

## Acceptance

- Homepage matches prototype's visual quality
- All 9 sections render, all responsive at 380px, 768px, 1280px
- Lighthouse Performance 90+, Accessibility 95+
- No console errors or warnings
- Vercel preview deploys cleanly

## Do not

- Build other routes yet (Day 3)
- Add an animation library (Framer Motion etc.) — CSS + IntersectionObserver only
- Use any image other than CSS gradients for cards
- Add a contact form anywhere

## Hand off to Day 3

Day 3 builds `/about` and `/grants` (the grant overview page, not awarded list).
