# Airtable rollout plan — post-demo execution

This is the work that happens **after** the board sees the demo (`docs/airtable-demo-setup.md`) and approves moving grant intake to Airtable. Do not start any of this until that decision is made.

The demo base is real and complete; what's missing is the wiring to the public DEF site and the cutover from Google Forms.

---

## Decision required from the board (before Phase 1)

Get explicit yes/no on:

- **Move grant intake to Airtable?** (the headline ask)
- **Cutover style:** hard cut at the start of next cycle, or run Google Forms + Airtable in parallel for one cycle as a safety net? (recommend hard cut — parallel doubles the work and confuses applicants)
- **Who owns the base?** Sukesh today; ideally a second board member added as Owner for SPOF mitigation (per board pushback noted in project memory)
- **Notification preference:** board reviews live in Airtable (log in), or get emailed digests? Affects whether Phase 3 builds a digest automation
- **Historical data:** import the last 1–2 years of Google Form responses into Airtable for continuity, or start fresh? (recommend start fresh — historical data lives in old Google Sheets and is one click away if needed)

---

## Phase 1: Embed the form on `/grants` (~30 min of dev work)

**Trigger:** board says yes.

### 1.1 Get the embed snippet

From the Airtable base → **Apply** form view → **Share form** → **Embed this form on your site** → copy the `<iframe>` snippet. It looks like:

```html
<iframe
  class="airtable-embed"
  src="https://airtable.com/embed/app.../shr..."
  frameborder="0"
  onmousewheel=""
  width="100%"
  height="720"
  style="background: transparent;"
></iframe>
```

### 1.2 Update `/grants` route

Current state: `/grants` describes the three grant types with a "Start your application" button that links out (currently a placeholder or Google Form URL).

Changes needed:
- Replace the "Start your application" button with the embedded form, OR keep the button as a scroll-to-form anchor that scrolls down to the embed
- Decide on placement: embed at the bottom of the page (most common), or as a tabbed/accordion section per grant type (more polish)
- Update copy above the form to explain: one form covers all three grants; pick from the Grant type dropdown at the top of the form

**Recommended layout:**
1. Existing hero / intro
2. Three grant-type cards (Enrichment, Innovation, Nancy Bradley) with descriptions, deadlines, recent-grant examples
3. "Apply now" anchor link → scrolls to embed
4. Single embedded Airtable form at the bottom

### 1.3 Build a thin React wrapper component

Create `components/sections/GrantApplicationForm.tsx`:

```tsx
export function GrantApplicationForm() {
  return (
    <section id="apply" className="...">
      <h2>Apply for a grant</h2>
      <p>Choose your grant type at the top of the form. Questions? grants@dedham-education.org</p>
      <iframe
        className="airtable-embed"
        src={process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL}
        width="100%"
        height="720"
        title="DEF Grant Application"
      />
    </section>
  );
}
```

Why env var: keeps the form URL out of the codebase (the URL itself isn't a secret, but if Airtable ever re-issues it, you change one env var instead of the source code). Add `NEXT_PUBLIC_AIRTABLE_FORM_URL` to Vercel project settings.

### 1.4 Test in preview

- Push to a branch, get a Vercel preview URL
- Submit a test application from the preview
- Verify it lands in Airtable with the correct Grant type
- Check mobile rendering — Airtable iframes can be tall; the form might need `min-height` adjustments on small screens
- Confirm the iframe doesn't break the page's `meta viewport` / scroll behavior

### 1.5 Ship to production

Standard PR → merge → Vercel auto-deploys. Update the v1 CLAUDE.md to note `/grants` now uses Airtable.

---

## Phase 2: Operational cutover (~1 hour of clicking + comms)

**Trigger:** Phase 1 ships, board confirms they're seeing test submissions correctly.

### 2.1 Turn off old Google Forms

Don't delete — just **close to new responses**. In each Google Form: Responses tab → toggle "Accepting responses" off. Add a closing message: "This form is no longer accepting submissions. Please apply at https://def.org/grants instead."

Forms to close:
- Enrichment Grant Google Form
- Any Innovation Grant intake (currently Google Doc?)
- Nancy Bradley intake

### 2.2 Notify the audience

- Email to the teacher distribution list: "We've moved our grant application to a new system. Apply at def.org/grants. Same questions, faster review."
- Update any printed materials, school newsletters, principal communications that reference the old URL
- Update DEF social media bio links / pinned posts

### 2.3 Add a second board owner

The "Sukesh is a single point of failure" concern from the board pushback gets a real mitigation. In Airtable Share → invite a second board member as **Owner** (free tier allows multiple owners). Recommended: board treasurer or president.

### 2.4 Document the review workflow for the board

Short one-pager in `docs/board-workflow.md` covering:
- How to log into Airtable
- Where the Pipeline view is, what each Status means
- How to score an application (Reviewer 1/2/3 fields)
- How to move records from Submitted → Under review → Awarded
- Who to ask if something looks wrong

---

## Phase 3: Polish (optional — pick what's worth it)

Do these only if the board adopts the system and you find specific friction. None are required for the basic workflow.

### 3.1 Status-change automation
Already drafted in `docs/airtable-demo-setup.md` Step 5. Auto-email teacher when their record flips to Awarded. ~2 min to enable.

### 3.2 Submission confirmation automation
Trigger: record created. Action: email applicant a "Thanks, we received your application" with a copy of what they submitted. Reduces "did my form go through?" emails. ~3 min.

### 3.3 Auto-Cycle assignment
Trigger: record created. Action: set Cycle field based on Submitted date (Aug–Oct → Fall {year}, Jan–Apr → Spring {year}, otherwise leave blank for manual handling). Removes one click from board review. ~5 min, but watch the edge cases.

### 3.4 New-application notifications
Trigger: record created. Action: post to a Slack channel or email a designated board member. Optional but useful for "we need to start reviewing" awareness.

### 3.5 Cycles linked table
If the manual Cycle-dropdown update twice a year ever becomes annoying (it won't for a while), promote Cycle from a single-select to a linked record to a `Cycles` table. Schema migration described in `docs/airtable-demo-setup.md` Option 2.

### 3.6 Awarded grants pulled from Airtable
The `/grants/awarded` route currently uses static content in the repo. Once Airtable has a year of Awarded records, that page could pull from a filtered view of the base (Status = Awarded OR Reimbursed, sorted by year). Reduces the manual upkeep when boards roster changes.

---

## Estimated total work (assuming Phase 1 + 2, skipping Phase 3)

| Phase | Work | Duration |
|---|---|---|
| 1 — Embed | Dev: iframe wrapper, env var, branch, preview, ship | ~30 min |
| 2 — Cutover | Close old forms, comms, add 2nd owner, write workflow doc | ~1 hr |
| **Total** | **One focused afternoon** | **~1.5 hrs** |

Phase 3 items are 5 min – 1 hour each, do them à la carte.

---

## What this plan is NOT

- **Not** building Innovation or Nancy Bradley as separate forms — that decision is already in `airtable-demo-setup.md` (one form, Grant type is a question on the form)
- **Not** migrating the other intake flows (Stec nominations, reimbursement submissions, sponsor inquiries) yet — those are separate Airtable tables in the same base, plan them in their own docs when the grants pilot proves out
- **Not** building anything custom — no admin UI, no auth flow, no Supabase storage of applications. The whole point is Airtable IS the admin UI
