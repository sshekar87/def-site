# v1.1 Roadmap — Donations, drips, sharing, and grant intake

This is the planning doc for **after** v1 launches and the board is happy. Don't start any of this until v1 is in production.

## v1.1 scope

Four pillars:
1. **Real donation processing** via Givebutter
2. **Email drip campaigns** via Resend
3. **Frictionless sharing** across the site
4. **Grant intake + management** via Airtable (optionally with Tally)

## Pillar 1: Donations (Givebutter)

### Pre-work (board + ops)
- Board approves move from PayPal/Venmo to Givebutter
- Apply for Givebutter nonprofit account (~1 week to verify 501(c)(3))
- Connect DEF bank account for payouts
- Set up tax receipt template with DEF letterhead

### Build
- Embed Givebutter widget on `/donate` (replaces PayPal link)
- Embed Givebutter event ticketing on `/events/dash` and `/events/spelling-bee`
- Set up peer-to-peer fundraising pages for Dash runners (Givebutter native feature)
- Add webhook receiver at `/api/webhooks/givebutter` to capture donation events into Supabase

### What Givebutter handles for us
- One-time + recurring donations
- Tax receipts (automated)
- Event ticketing + check-in
- Donor dashboard (login.givebutter.com)
- Refund handling
- Stripe/PayPal payment processing

### What we own
- The page design around the embedded widget
- Webhook handling for the drip triggers
- Donor data in our Supabase for cross-platform views

## Pillar 2: Email drips (Resend)

### Database (Supabase)

```sql
-- contacts: everyone who has donated or registered for an event
create table contacts (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text,
  last_name text,
  source text,                    -- 'donation' | 'event_dash' | 'event_bee' | 'newsletter' | 'contact_form'
  first_seen_at timestamptz default now(),
  last_seen_at timestamptz default now(),
  total_donated_cents integer default 0,
  donation_count integer default 0,
  event_count integer default 0,
  subscribed boolean default true,
  unsubscribe_token text default gen_random_uuid()::text
);

-- interactions: every donation, event signup, etc
create table interactions (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade,
  type text not null,             -- 'donation' | 'event_signup' | 'newsletter_signup' | 'contact_form'
  amount_cents integer,
  event_slug text,                -- 'dash-2026' | 'spelling-bee-2026'
  metadata jsonb,
  occurred_at timestamptz default now()
);

-- email_sends: tracking what was sent to whom
create table email_sends (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id),
  campaign_slug text not null,    -- 'donation_thanks' | 'dash_t-30d' | 'dash_t-7d' | etc
  resend_id text,                 -- Resend's message ID
  sent_at timestamptz default now(),
  opened_at timestamptz,
  clicked_at timestamptz
);
```

### Triggered campaigns (transactional via Resend)

| Trigger | Campaign | Timing |
|---|---|---|
| Donation received | `donation_thanks` (receipt + thanks) | Immediate |
| First-time donor | `welcome_donor` (3-email onboarding) | T+0, T+3d, T+10d |
| Recurring donor signup | `welcome_recurring` | Immediate |
| Lapsed donor (no gift in 365d) | `reactivate_donor` | Yearly check |
| Dash signup | `dash_pre_event` series | T-30d, T-14d, T-7d, T-1d |
| Dash completed | `dash_post_event` | T+1d, T+30d (impact) |
| Spelling Bee signup | `bee_pre_event` series | T-21d, T-7d, T-1d |
| Newsletter signup | `newsletter_welcome` | Immediate |

### Broadcast (monthly newsletter)

Use **Beehiiv** (separate from Resend). Why separate:
- Different content type (editorial, not transactional)
- Different authoring (board members write it, not me)
- Beehiiv has built-in subscriber growth tools (paid plans for nonprofits ~$30/mo)
- Sukesh stays out of the workflow once it's set up

Sync Supabase contacts with subscribed=true to Beehiiv list weekly via a Vercel cron job.

### React Email templates

Store templates in `/emails/`:
- `donation-thanks.tsx`
- `welcome-donor.tsx`
- `welcome-recurring.tsx`
- `reactivate-donor.tsx`
- `dash-pre-event.tsx`
- `dash-post-event.tsx`
- `bee-pre-event.tsx`
- `newsletter-welcome.tsx`

Each template uses DEF brand colors and Fraunces serif. Test in Resend preview before going live.

### Unsubscribe + compliance

- One-click unsubscribe link in every email (use `unsubscribe_token` from contacts table)
- Unsubscribe handler at `/api/unsubscribe?token=...` flips `subscribed = false`
- Newsletter and transactional are separate preferences (don't unsubscribe from receipts)
- Honor CAN-SPAM: physical address in footer, clear sender identity

## Pillar 3: Sharing layer

### Universal share button component

`components/ui/ShareButton.tsx`

Behavior:
- **Mobile:** native `navigator.share()` — opens iOS/Android share sheet (iMessage, WhatsApp, etc.)
- **Desktop fallback:** dropdown with copy-link, Facebook, X, LinkedIn, email
- Trackable: fires `share_click` analytics event with `{ page, method }`

Drop into:
- Every grant card on `/grants/awarded` ("Share this story")
- Donation confirmation page ("Tell three friends, double your impact")
- Event pages ("Invite a neighbor")
- Story / impact pages

### Personalized share URLs

For Dash participants and recurring donors, generate a personal share URL:
- `def.org/dash/sukesh-shekar` → personal Dash fundraising page (Givebutter handles this natively when peer-to-peer is enabled)
- `def.org/i-support/sukesh-shekar` → personal "I support DEF" landing page with their name

Implementation:
- Slug stored in Givebutter for Dash
- For "i-support" pages, generate from contact name after first donation; store in `contacts.share_slug`

### Open Graph polish

Already done in v1 (Day 6). For v1.1:
- Per-grant OG image with grant title + amount + school
- Per-event OG image with event name + date
- A/B test OG copy after 1 month of analytics

### "Add to calendar" buttons

On every event page:
- Google Calendar deep link
- Apple Calendar (.ics file)
- Outlook link

Implementation: `<AddToCalendar>` component using the `add-to-calendar-button` npm package or hand-rolled .ics generation.

## Pillar 4: Grant intake + management (Airtable)

Replaces the current Google Forms / Google Docs / scattered-inbox workflow for grant applications, Stec nominations, reimbursement submissions, and sponsor inquiries. The board ends up with one place to review and triage every inbound request, with multi-board-member collaboration built in.

### Recommended setup

One Airtable base, multiple tables:
- Innovation Grant applications
- Enrichment Grant applications
- Nancy Bradley applications
- Stec Educator Award nominations
- Reimbursement submissions
- Sponsor inquiries

**Forms:** use Airtable's built-in form view per table. Free, native to Airtable, submissions land directly in the relevant table — no integration to build or maintain. Embed each form on the corresponding DEF site page via iframe (or link out).

**Reviewing:** each table gets multiple views — a "Pipeline" kanban (submitted → reviewed → awarded → reimbursed), grid for spreadsheet-style sorting, filtered views per school / cycle / year. Board members invited as Airtable collaborators can score, tag, comment, and change status — no developer in the loop.

**Automations (Airtable native, free tier):** auto-confirm to applicant on submission, notify board when a new application lands, status-change emails ("Your grant has been awarded").

### Why Airtable over Google Sheets

Sheets stores data; Airtable runs a workflow. Real field types (file attachments for receipts, dropdowns for status, multi-select for tags), multiple views on the same data, native automations, and a board-friendly UI all out of the box.

### Optional: Tally for nicer-looking forms

Airtable's form view is functional but visibly an Airtable form. If form design matters (especially for public-facing grant applications), use **Tally** as the form layer instead — clean design, custom branding, embeds seamlessly on the DEF site, posts directly to Airtable. Free tier covers DEF's volume.

**Verdict:** start with Airtable forms only — one tool, zero friction. Add Tally later if/when the board wants more designed forms.

### Skip

A custom Next.js form + Supabase + admin UI. Building a board-facing admin dashboard is its own project; Airtable IS that dashboard, prebuilt.

### Pilot path

1. Set up one Airtable base + one form for the next cycle's Enrichment application (an afternoon's work).
2. Run that cycle end-to-end through Airtable — applications come in, board reviews in-app, status flips, applicants get auto-confirmations.
3. Once the workflow is confirmed, convert the remaining intake points (other grant types, Stec nomination, reimbursement, sponsor inquiries) one at a time.

### Migration off Google Forms / Docs

| Currently | Becomes |
|---|---|
| Innovation Grant Google Doc template | Airtable form, same fields |
| Enrichment Grant Google Form | Airtable form |
| Nancy Bradley application | New Airtable form |
| Stec Educator Award nomination | New Airtable form |
| Reimbursement Google Doc | Airtable form with file-attachment fields for receipts |
| Sponsor inquiries (`/contact?inquiry=sponsor-*`) | Dedicated Airtable form embedded on `/get-involved` |

### Open questions for board

- Are board members willing to log into Airtable to review applications, or do we want emailed digests?
- Should we keep old Google Forms accessible for one transitional cycle, or hard-cut?
- Who on the board owns the Airtable base (admin / billing if we ever outgrow free)?

## Sequencing

Suggested order for v1.1 (each ~1 week of focused work):

1. **Week 1:** Givebutter account setup + embedded widgets on `/donate` and event pages
2. **Week 2:** Supabase schema + webhook receiver + contact ingestion working
3. **Week 3:** First two drip campaigns: `donation_thanks` + Dash pre-event series
4. **Week 4:** Remaining drip campaigns + unsubscribe flow + Beehiiv newsletter setup
5. **Week 5:** Sharing layer (ShareButton + personalized URLs + add-to-calendar)
6. **Week 6:** Polish, testing, launch v1.1 to board for review

## Costs (recurring)

| Service | Plan | Monthly |
|---|---|---|
| Vercel | Hobby (free) | $0 |
| Supabase | Free tier | $0 |
| Resend | Pro | $20 |
| Beehiiv | Launch (free up to 2,500 subs) | $0 |
| Givebutter | Free + transaction fees | $0 base |
| Airtable | Free (1,000 records, 5 editors) | $0 |
| Tally (optional) | Free | $0 |
| Domain | (existing) | — |
| **Total** | | **~$20/month** |

Airtable Team plan ($10/seat/month) only kicks in if DEF outgrows the free tier — based on current volume (~50–100 applications + nominations + inquiries per year), that's likely a year or two out.

Transaction fees on Givebutter: ~3% + 30¢ per donation, optionally passed to donor.

## Open questions for board (v1.1)

- Do we want donors to be able to choose whether their name appears on the public donor recognition page?
- Should monthly donors get a "DEF Sustaining Member" tier name + recognition?
- Should the newsletter be monthly or quarterly?
- Who from the board is the named sender on the newsletter (President? Or a content-focused board member)?
- Are we OK using Supabase to store donor PII (US-based servers, encryption at rest)?
