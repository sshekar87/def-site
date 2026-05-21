# DEF Website — Claude Code handoff bundle

This folder contains everything Claude Code needs to build the new Dedham Education Foundation website.

## Quick start

```bash
# 1. Create a new GitHub repo `def-site`, clone it locally
git clone git@github.com:your-username/def-site.git
cd def-site

# 2. Copy this entire handoff bundle into the repo root
#    (CLAUDE.md, docs/, reference/)

# 3. Open in Claude Code
claude

# 4. First message to Claude Code:
#    "Read CLAUDE.md, then read docs/build-plan/day-01.md, then start Day 1."
```

## What's in here

```
CLAUDE.md                          # Agent orientation — read first
docs/
  build-plan/
    day-01.md                      # Day 1: bootstrap + nav + hero
    day-02.md                      # Day 2: complete homepage
    day-03.md                      # Day 3: /about + /grants
    day-04.md                      # Day 4: /grants/awarded + /reimbursements
    day-05.md                      # Day 5: /events + /donate + /contact
    day-06.md                      # Day 6: SEO, redirects, polish, launch prep
  v1-1-roadmap.md                  # Post-launch: Givebutter, Resend, sharing
reference/
  prototype.html                   # Approved homepage prototype (visual source of truth)
  DEF_Website_Strategy.docx        # Board-facing strategy document
```

## How to work the plan

- **One day at a time.** Don't let Claude Code jump ahead.
- **End-of-day check:** Each day file has an "Acceptance" section. Verify it before moving on.
- **Vercel previews:** Push to a branch per day, review the preview before merging to `main`.
- **Don't expand scope.** Anything that doesn't fit a day plan goes in `docs/v1-1-roadmap.md`.

## Sequence

| Day | Focus | Outcome |
|---|---|---|
| 1 | Bootstrap + nav + hero | Empty Next.js app deploys, homepage hero looks like prototype |
| 2 | Complete homepage | All 9 homepage sections shipped |
| 3 | /about + /grants | Two of three biggest secondary pages |
| 4 | /grants/awarded + reimbursements + stec | Searchable grant database, teacher utility |
| 5 | /events + /donate + /contact | Event pages, donate (PayPal link), contact |
| 6 | Polish + launch prep | SEO, redirects, accessibility, board-ready Vercel URL |

Estimated: **6 focused days = ~2 weeks calendar time** with normal interruptions. Aligns with the 90-day timeline in the strategy doc (Phase 2: Build, days 31–60).

## Before starting Day 1

Verify with Sukesh:
- [ ] GitHub repo created
- [ ] Vercel account ready (existing Altgage Vercel account fine)
- [ ] Brand colors confirmed (#9d273f, #f1961e, #0b4bba, #41e596 / #118d70)
- [ ] Domain decision: build under `def-preview.vercel.app` for board review; flip DNS only after approval
- [ ] No plan changes from the board yet that would invalidate the strategy doc

## Reporting up

After each day, Sukesh shares a Vercel preview link with the board (informally, not for approval) so they see progress. Formal review at end of v1.

## When v1 ships

1. Archive this `CLAUDE.md` to `CLAUDE-v1.md`
2. Create new `CLAUDE.md` for v1.1 work
3. Start v1.1 from `docs/v1-1-roadmap.md`
