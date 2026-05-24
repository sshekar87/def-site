# Airtable demo setup — board-ready base in ~5 minutes of clicks

## Goal

A working Airtable base you can demo to the board: one grant application form, a Kanban "Pipeline" view showing the review workflow, and 8 sample applications spread across statuses so it looks lived-in.

## Current state (2026-05-24)

The base, table, all 21 fields, and 8 sample records were built via the Airtable MCP server from a Claude Code session. You don't need to rebuild them. To start from scratch (e.g. wiping and redoing for a different workspace), see [Appendix A](#appendix-a--rebuilding-the-base-from-scratch).

- **Workspace:** Dedham Education Foundation
- **Base:** DEF Grant Intake — `appSLj7GHmHTotHx2`
- **Table:** Applications — `tblSiZ5AyQzmBt0sJ` (one table for all three grant types — Enrichment, Innovation, Nancy Bradley — with a `Grant type` field to distinguish them)
- **Live link:** https://airtable.com/appSLj7GHmHTotHx2/tblSiZ5AyQzmBt0sJ

### Why one table, not three

The three DEF grants (Enrichment, Innovation, Nancy Bradley) ask 80%+ of the same questions and share the same review workflow (score → discuss → award). One table with a `Grant type` field gives the board a unified Pipeline showing the year's full intake, easy cross-grant reporting, and one schema to maintain. A single Apply form puts `Grant type` as the first visible question — the applicant self-selects which grant they're applying for.

What still needs UI clicks (Airtable's Meta API doesn't expose these): the `Submitted` created-time field, all custom views (Pipeline, Needs Review, By School, the Apply form), reordering `Grant type` next to the primary field, and the optional status-change automation. That's the rest of this doc.

---

## Step 1 — Add the Submitted created-time field + reorder Grant type (30 seconds)

**1a — Submitted field.** Open the table. Click `+` to the right of the last column → **Created time** → name it **Submitted** → format your preference (friendly or US). Airtable backfills timestamps for the 8 existing records using their original create time.

**1b — Drag Grant type next to the primary field.** The new `Grant type` column lands at the far right by default. Click and drag its column header so it sits immediately after `Program title`. (Airtable's API can't reorder fields — UI only.)

## Step 2 — Build the Pipeline (Kanban) — the centerpiece view

1. **+ Create...** (bottom-left view list) → **Kanban**.
2. Name it **Pipeline**.
3. **Stack by:** Status.
4. **Card fields:** Program title (always shown), Grant type, Teacher name, School, Requested amount, Average score.
5. Drag the columns left-to-right: **Submitted → Under review → Awarded → Partially awarded → Reimbursed → Declined**.

This is the view the board will spend the most time on.

## Step 3 — Two more demo-worthy grid views

**Needs Review** (Grid)
- **+ Create...** → **Grid** → name **Needs Review**
- Filter: Status is any of **Submitted** or **Under review**
- Sort: Submitted ↑ (oldest first)
- Shows what the board needs to act on right now.

**By School** (Grid)
- **+ Create...** → **Grid** → name **By School**
- Group by: School
- Sort: Cycle ↓
- Shows distribution / which schools are applying.

## Step 4 — Build the Apply form view (single shared form)

One form view handles all three grant types. The applicant picks which grant they're applying for as the first question, then fills out the rest. No per-grant duplicate forms, no URL prefill hacks, no twice-a-year edits — set it up once and leave it.

### Why a single form (rather than three)

Earlier drafts of this doc proposed three separate form views (one per grant), with Grant type either pre-filled via URL params or set as a hidden default. Both add operational complexity for marginal applicant-facing polish. A single form with `Grant type` as the first visible question is:

- One URL on the website forever
- Available for all three grants year-round (matters for Nancy Bradley's rolling cycle)
- Self-correcting — the applicant explicitly declares which grant they want, so misrouted applications are nearly impossible
- Zero maintenance — no field swapping each cycle

If a specific grant ever needs meaningfully different questions (e.g., Innovation requires a multi-year impact plan that Enrichment doesn't), revisit splitting into separate forms. Until then, one form wins.

### Build it

1. **+ Create...** → **Form** → name it **`Apply`**.
2. In the field sidebar, set field visibility:
   - **Visible** (in this order, top to bottom): Grant type, Program title, Teacher name, Teacher email, School, Grade level, Principal name, Principal email, Short pitch, Full description, Requested amount, Students reached, Timeline, Supporting documents
   - **Hidden:** Status, Cycle, Submitted, Reviewer notes, Reviewer 1/2/3 score, Average score, Awarded amount, Assignee
3. Mark required: **Grant type, Program title, Teacher name, Teacher email, School, Short pitch, Requested amount**.
4. Top of form:
   - **Title:** `DEF Grant Application`
   - **Description:** `For Dedham teachers and community members. Choose the grant you're applying for above — Enrichment (Fall cycle), Innovation (Spring cycle), or Nancy Bradley (year-round). You'll hear back within 4–6 weeks. Questions? Email grants@dedham-education.org.`
5. **After-submit message:** `Thanks! You'll hear back within 4–6 weeks of the cycle deadline. Questions? Reply to your confirmation email or write grants@dedham-education.org.`
6. Click **Share form** → copy the public URL. This is the single application link to embed on `/grants` or share with teachers.

## Step 5 — Optional: a status-change automation

This is the *"wait, it emails the teacher automatically?"* moment.

1. **Automations** (top nav) → **Create new automation**.
2. **Trigger:** When a record matches conditions → Status = **Awarded**.
3. **Action:** Send email →
    - To: `{{Teacher email}}`
    - Subject: **"Your DEF grant has been awarded"**
    - Body: short congrats template referencing `{{Program title}}` and `{{Awarded amount}}` and what to do next.

Bonus second automation: trigger = record created → email applicant a confirmation. Same pattern.

## Step 6 — Share for the demo

- Click **Share** (top right) → invite board members as **Editor** (free tier: up to 5 editors) or **Commenter** (unlimited).
- For the actual demo, you don't even need them logged in — just screen-share the base.

---

## 2-minute talk track for the board

> Today, grant applications come into a Google Form, responses sit in a Google Sheet I sort manually, reviews happen in email threads, and decisions live in a separate doc. There's no single source of truth.
>
> Here's what it could look like instead. [Show **Pipeline**.] Every application is a card. You can see the whole cycle at a glance. Click a card — full detail, no separate tabs. Score it; the average updates. Change status to **Awarded** — the applicant gets an email within the minute.
>
> Cost: free for our volume. We'd start with one cycle's application to test the workflow, then convert the rest. The DEF website doesn't change — we just swap which form is embedded.

## Likely board questions

- **"What if our reviewer is out of town?"** → Asynchronous. They review at their pace.
- **"What if we have 30 applications?"** → Filter by school, sort by Average score, knock out 10 in 30 minutes.
- **"Can applicants edit after submission?"** → Configurable. Default no.
- **"What happens to the Google Form data we have?"** → Export → import into Airtable. One-time migration.
- **"What if we outgrow free?"** → Team plan is $10/user/month. At our volume that's likely a year-plus out.
- **"Where does the data live? Who owns it?"** → DEF's Airtable account (Sukesh or board treasurer as owner). Exportable any time.

---

## Optional: embedding the form on the DEF site

Once the Apply form exists, Airtable gives you an embed snippet — paste it into `/grants` (replacing or sitting alongside the **Start your application** button) and the form renders inline. Iframe is responsive; no extra dev work.

```html
<iframe
  class="airtable-embed"
  src="https://airtable.com/embed/YOUR_FORM_ID"
  frameborder="0"
  onmousewheel=""
  width="100%"
  height="720"
  style="background: transparent;"
></iframe>
```

This is the simplest path. For a more branded experience later, swap to **Tally** as the form layer (Tally embed → posts to the same Airtable base).

---

## Appendix A — Rebuilding the base from scratch

You only need this if you're starting over (different workspace, wiping the demo, etc.). Day-to-day work goes through the UI on the existing base.

The fastest path is the Airtable MCP server in Claude Code, which can recreate the base + table + fields + sample records in a single session. Field-by-field schema and the 8 sample applications live in `docs/airtable-demo-sample-data.csv` (also importable manually via "Import data → CSV file").

### Schema reference

**Applicant-facing fields (will appear on the form)**

| Field name | Type | Notes |
|---|---|---|
| Program title | Single line text | Primary field |
| Teacher name | Single line text | |
| Teacher email | Email | |
| School | Single select | Options: Avery, Greenlodge, Oakdale, Riverdale, DMS, DHS |
| Grade level | Single line text | |
| Principal name | Single line text | |
| Principal email | Email | |
| Short pitch | Long text | Placeholder: "1–2 sentences. The hook." |
| Full description | Long text | |
| Requested amount | Currency | USD |
| Students reached | Number | Integer |
| Timeline | Long text | When the program runs |
| Supporting documents | Attachment | Optional |

**Board / workflow fields (hidden from the form)**

| Field name | Type | Notes |
|---|---|---|
| Grant type | Single select | Enrichment, Innovation, Nancy Bradley — visible question on the Apply form |
| Status | Single select | Submitted (gray), Under review (blue), Awarded (green), Partially awarded (yellow), Reimbursed (purple), Declined (red) |
| Cycle | Single select | Fall 2025, Spring 2026, Fall 2026 — hidden from the form. Set by the board during review based on the Submitted date. Add new cycle options as needed (~30 sec, ~2× per year). |
| Submitted | Created time | Auto-set — UI only, not API-creatable |
| Reviewer notes | Long text | Internal |
| Reviewer 1 score | Rating | Max 5 stars |
| Reviewer 2 score | Rating | Max 5 stars |
| Reviewer 3 score | Rating | Max 5 stars |
| Average score | Formula | See formula below |
| Awarded amount | Currency | USD |
| Assignee | Collaborator | Single |

**Average score formula** (handles partial scoring — divides by the number of reviewers who actually scored, not always by 3):

```
IF(
  AND({Reviewer 1 score} = BLANK(), {Reviewer 2 score} = BLANK(), {Reviewer 3 score} = BLANK()),
  BLANK(),
  ROUND(
    ({Reviewer 1 score} + {Reviewer 2 score} + {Reviewer 3 score}) /
    (IF({Reviewer 1 score} > 0, 1, 0) + IF({Reviewer 2 score} > 0, 1, 0) + IF({Reviewer 3 score} > 0, 1, 0)),
    1
  )
)
```
