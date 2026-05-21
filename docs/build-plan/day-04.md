# Day 4 — Awarded grants database + reimbursements

## Goal

Replace the current site's screenshot-based grant list with a real, searchable, filterable database. Plus the teacher reimbursement utility page.

## `/grants/awarded`

This is the page that proves to donors the money goes somewhere.

### Structure
1. Page hero with totals: "$1M+ granted since 1995, across 47 grants in 2024–25 alone"
2. **Filters bar** — Year (dropdown), School (dropdown), Category (chips: Enrichment / Innovation / Nancy Bradley / Stec Award), Search input
3. **Results grid** — card per grant: category pill, amount, title, school, teacher, year, optional photo
4. Empty state when filters yield nothing
5. "Show more" pagination or infinite scroll (start with show-more at 24 per page)

### Data shape (`content/awarded-grants.ts`)
```ts
export type AwardedGrant = {
  id: string;
  year: number;            // 2025
  cycle: 'fall' | 'spring';
  category: 'enrichment' | 'innovation' | 'nancy-bradley' | 'stec-award';
  title: string;
  description?: string;     // 1-2 sentences
  amount: number;          // dollars
  school: 'avery' | 'oakdale' | 'riverdale' | 'greenlodge' | 'dms' | 'dhs' | 'district';
  teacher?: string;
  grade?: string;
  photoUrl?: string;       // public path
  link?: string;           // optional external link to learn more
};

export const awardedGrants: AwardedGrant[] = [
  // Start with what's on the current site:
  // Rock Detectives (Oakdale, Mrs. Stec, 4th grade, ~2018)
  // Romeo & Juliet at DMS (Commonwealth Shakespeare)
  // Tide Pools (Avery, 1st grade, 2018)
  // Chhandika dance
  // Nano Brothers (Museum of Science)
  // + Fall 2024 screenshot entries (Sukesh will transcribe)
];
```

### Components
- `components/sections/AwardedHero.tsx`
- `components/awarded/FilterBar.tsx` — controlled state, URL-synced (use `useSearchParams`)
- `components/awarded/GrantCard.tsx`
- `components/awarded/GrantsGrid.tsx`
- `components/awarded/EmptyState.tsx`

### Filtering logic
- Client-side only (the list is <500 items, fits in JS bundle)
- Filters compose with AND logic
- Search is case-insensitive substring match on title, description, teacher, school

### School display
Map slugs to display names + colors:
- `avery` → Avery Elementary (crimson)
- `oakdale` → Oakdale Elementary (gold)
- `riverdale` → Riverdale Elementary (blue)
- `greenlodge` → Greenlodge Elementary (green)
- `dms` → Dedham Middle School (mint)
- `dhs` → Dedham High School (deep ink)
- `district` → District-wide (muted)

### Important
- Sukesh will transcribe the existing screenshot grant lists into `awarded-grants.ts` separately. Build the component assuming the data exists; create ~10 sample entries to demo the filters.
- Mark obvious placeholders with `// TODO: from Sukesh transcription`

## `/grants/reimbursements`

Utility page for teachers who've already received a grant.

### Structure
1. Simple header: "How to get reimbursed for your grant"
2. Step-by-step (numbered list, generous spacing):
   - Save all original receipts
   - Complete the reimbursement form (link to current Google Doc)
   - Submit within 30 days of program completion
   - Mail to DEF Treasurer or scan + email
3. FAQ:
   - "What if I lost a receipt?"
   - "Can DEF pay vendors directly?"
   - "How long does reimbursement take?"
4. Contact CTA: "Questions? Email treasurer@..."

### Components
- Reuse `EligibilityFAQ.tsx` from Day 3
- Otherwise just a clean prose page using shared `<Prose>` component (create on this day if not present)

## `/grants/stec-award`

Single canonical page for the Christine Stec Rock Star Educator Award (replacing the duplicate pages with one typo'd URL on the current site).

### Structure
1. Hero: photo of Christine Stec + the award name
2. The story — who Christine was, why the award exists
3. Past recipients (years + names + photos when available)
   - 2024: Maureen Blazejewski
   - prior years TBD
4. Nomination process and timeline
5. CTA: "Nominate a Dedham educator"

## Redirects

Add to `next.config.js`:
```js
redirects() {
  return [
    {
      source: '/chrstine-stec-rock-star-educator-award',  // old typo URL
      destination: '/grants/stec-award',
      permanent: true,
    },
    {
      source: '/christine-stec-award',
      destination: '/grants/stec-award',
      permanent: true,
    },
    // ... add all old Squarespace URLs here as we identify them
  ];
}
```

Full redirect map lives in `docs/redirects.md` — build it up as we find old URLs.

## Acceptance

- `/grants/awarded` with working filters and ~10 sample grants
- `/grants/reimbursements` and `/grants/stec-award` shipped
- Old-URL redirects work (test by visiting old Squarespace URLs after deploy)
- All three pages linked from nav and footer

## Do not

- Build a backend search index (client-side is fine)
- Add image upload for grants
- Try to scrape the old Squarespace grant list — Sukesh will transcribe

## Hand off to Day 5

Day 5 builds `/events/dash`, `/events/spelling-bee`, and `/donate`.
