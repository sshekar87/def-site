# Airtable demo setup — 15 minutes to a board-ready demo

## Goal

A working Airtable base you can demo to the board: one grant application form, a Kanban "Pipeline" view showing the review workflow, and 8 sample applications spread across statuses so it looks lived-in.

## What you'll end up with

- An Airtable base called **DEF Grant Intake**, one table (**Enrichment Applications**), ~20 fields
- A public form (**Apply**) ready to share or embed on `/grants`
- A Kanban view (**Pipeline**) with cards moving Submitted → Under review → Awarded → Reimbursed
- Two more grid views (**Needs Review**, **By School**) to demo the collaborative review story
- 8 sample applications already in the table

Total time: ~15 minutes. Cost: $0 (free tier).

---

## Step 1 — Create the base

1. Sign up at [airtable.com](https://airtable.com) (free).
2. Create new base → **Start from scratch** → name it **DEF Grant Intake**.
3. Rename the default "Table 1" to **Enrichment Applications**.

## Step 2 — Add the fields

Delete Airtable's default Name / Notes / Status fields, then add these. The **Program title** field must be the primary (first) field — Airtable uses it as the row title everywhere.

### Applicant-facing fields (will appear on the form)

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

### Board / workflow fields (hidden from the form)

| Field name | Type | Notes |
|---|---|---|
| Status | Single select | Submitted (gray), Under review (blue), Awarded (green), Partially awarded (yellow), Declined (red), Reimbursed (purple) |
| Cycle | Single select | Spring 2026, Fall 2026 |
| Submitted | Created time | Auto-set |
| Reviewer notes | Long text | Internal |
| Reviewer 1 score | Rating | Max 5 stars |
| Reviewer 2 score | Rating | Max 5 stars |
| Reviewer 3 score | Rating | Max 5 stars |
| Average score | Formula | `ROUND(({Reviewer 1 score} + {Reviewer 2 score} + {Reviewer 3 score}) / 3, 1)` |
| Awarded amount | Currency | USD |
| Assignee | Collaborator | Single |

## Step 3 — Import the sample data

In this folder: **`airtable-demo-sample-data.csv`** (8 applications spread across statuses).

1. Click the dropdown arrow next to the table name → **Import data** → **CSV file**.
2. Upload the CSV. Airtable will preview the columns.
3. Map columns to fields (most match automatically by name).
4. Import. You'll have 8 applications, mostly Spring 2026.

## Step 4 — Build the Form view (the applicant experience)

1. Click **+ Create...** → **Form**.
2. Rename to **Apply**.
3. In the field-list sidebar, toggle OFF every board/workflow field — leave only the 13 applicant-facing ones.
4. Top of form: title **"Enrichment Grant Application"** + a short intro paragraph.
5. Add field descriptions where helpful (e.g., on **Short pitch**: "1–2 sentences. The hook.").
6. Mark required: Teacher name, Teacher email, School, Program title, Short pitch, Requested amount.
7. After-submit message: **"Thanks! You'll hear back within 4–6 weeks of the cycle deadline."**
8. Click **Share form** at the top — copy the public URL. This is what gets embedded on the DEF site or shared with teachers.

## Step 5 — Build the Pipeline (Kanban) — the centerpiece view

1. **+ Create...** → **Kanban**.
2. Name it **Pipeline**.
3. **Stack by:** Status.
4. **Card fields:** Program title (always), Teacher name, School, Requested amount, Average score.
5. Drag the columns left-to-right so the flow reads: **Submitted → Under review → Awarded → Partially awarded → Reimbursed → Declined**.

This is the view the board will spend the most time on.

## Step 6 — Two more demo-worthy views

**Needs Review** (Grid)
- Filter: Status is one of **Submitted** or **Under review**
- Sort: Submitted ↑ (oldest first)
- Shows what the board needs to act on right now.

**By School** (Grid)
- Group by: School
- Sort: Cycle ↓
- Shows distribution / which schools are applying.

## Step 7 — Optional: a status-change automation

This is the *"wait, it emails the teacher automatically?"* moment.

1. **Automations** (top nav) → **Create new automation**.
2. **Trigger:** When a record matches conditions → Status = **Awarded**.
3. **Action:** Send email →
    - To: `{{Teacher email}}`
    - Subject: **"Your DEF grant has been awarded"**
    - Body: short congrats template referencing `{{Program title}}` and `{{Awarded amount}}` and what to do next.

Bonus second automation: trigger = record created → email applicant a confirmation. Same pattern.

## Step 8 — Share for the demo

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

Airtable forms come with an embed snippet — paste it into `/grants` (replacing or sitting alongside the **Start your application** button) and the form renders inline. Iframe is responsive; no extra dev work.

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
