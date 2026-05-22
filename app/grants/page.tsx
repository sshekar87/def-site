import Link from "next/link";
import type { Metadata } from "next";
import { cycles, formatCycleDate } from "@/content/cycles";
import { formatCurrency } from "@/content/grants";
import {
  grantTypes,
  grantsHeroCopy,
  faq,
  reviewTimeline,
  reimbursementSteps,
  REIMBURSEMENT_FORM_URL,
} from "@/content/grant-types";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grants for DPS Teachers",
  description:
    "Three grant categories, two cycles a year, one short application. DEF funds Dedham teachers' best classroom ideas.",
};

export default function GrantsPage() {
  const open = cycles.find((c) => c.status === "open");

  return (
    <>
      <section className="page-hero theme-crimson">
        <div className="wrap">
          <div className="section-eyebrow mark-square">{grantsHeroCopy.eyebrow}</div>
          <h1>
            Have an idea? <em>We want to fund it.</em>
          </h1>
          <p className="lede">{grantsHeroCopy.sub}</p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          {open && (
            <div className="current-cycle-card" id="current-cycle">
              <div>
                <span className="current-cycle-label">Open now</span>
                <div className="current-cycle-name">{open.name}</div>
                <div className="current-cycle-meta">
                  Applications open through{" "}
                  <strong style={{ color: "var(--gold)" }}>
                    {formatCycleDate(open.closesOn)}
                  </strong>
                  . Up to {formatCurrency(open.maxAward)} per grant. Cycle for{" "}
                  {open.season === "spring" ? "Spring" : "Fall"} {open.year}.
                </div>
                <Link
                  href={open.applicationUrl}
                  className="btn btn-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start your application →
                </Link>
              </div>
              <div>
                <p style={{ color: "rgba(250,246,238,0.85)", fontSize: 15, lineHeight: 1.6 }}>
                  Applications take about 20 minutes. Your principal needs to sign
                  off before submission. Board reviews every proposal — we
                  notify within 4–6 weeks of the deadline.
                </p>
              </div>
            </div>
          )}

          <div className="section-eyebrow mark-square">Three grant types</div>
          <h2 className="section-heading">
            Find the cycle that <em>fits your idea</em>.
          </h2>

          <div className="grant-types-stack">
            {grantTypes.map((type) => (
              <article key={type.slug} className={`grant-type ${type.color}`}>
                <details open={open?.grantType === type.slug}>
                  <summary>
                    <div>
                      <div className="grant-type-name">{type.name}</div>
                      <div className="grant-type-pitch">{type.shortPitch}</div>
                    </div>
                    <div className="grant-type-meta">
                      <strong>up to {formatCurrency(type.maxAward)}</strong>
                      {type.cycle} cycle
                    </div>
                  </summary>
                  <div className="grant-type-body">
                    <p>{type.description}</p>
                    <h4>Recent examples</h4>
                    <ul>
                      {type.examples.map((ex) => (
                        <li key={ex}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-square">The review process</div>
          <h2 className="section-heading">From idea to reimbursement.</h2>
          <div className="review-timeline">
            {reviewTimeline.map((step, i) => (
              <div key={step.title} className="review-step">
                <div className="review-step-num">Step {i + 1}</div>
                <div className="review-step-title">{step.title}</div>
                <div className="review-step-body">{step.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="reimbursements">
        <div className="wrap">
          <div className="section-eyebrow mark-square">For funded teachers</div>
          <h2 className="section-heading">
            How to <em>get reimbursed</em>.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: "var(--ink-soft)",
              fontSize: 17,
              maxWidth: 640,
            }}
          >
            Congratulations on your grant. Here&apos;s exactly what to do with
            your receipts — submit within 30 days of program completion.
          </p>

          <div className="review-timeline" style={{ marginTop: 40 }}>
            {reimbursementSteps.map((step, i) => (
              <div key={step.title} className="review-step">
                <div className="review-step-num">Step {i + 1}</div>
                <div className="review-step-title">{step.title}</div>
                <div className="review-step-body">{step.body}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href={REIMBURSEMENT_FORM_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the reimbursement form →
            </Link>
            <a
              href={`mailto:${siteConfig.emails.treasurer}`}
              className="btn btn-secondary"
            >
              Email the treasurer
            </a>
          </div>

          <div style={{ marginTop: 48 }}>
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: 24,
                marginBottom: 16,
                color: "var(--ink)",
                letterSpacing: "-0.015em",
              }}
            >
              If a vendor needs to be paid directly
            </h3>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65, maxWidth: 640 }}>
              Some vendors require deposits or invoiced payment before the
              program runs. That&apos;s fine — email{" "}
              <a
                href={`mailto:${siteConfig.emails.treasurer}`}
                style={{
                  color: "var(--crimson)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                {siteConfig.emails.treasurer}
              </a>{" "}
              with the invoice and we&apos;ll cut a check directly to the
              vendor, as long as the amount fits your funded budget.
            </p>
          </div>

        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-square">FAQ</div>
          <h2 className="section-heading">
            Applying &amp; reimbursement, <em>answered</em>.
          </h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="section-heading">Ready to apply?</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16 }}>
            {open ? (
              <>
                {open.name} applications are open through{" "}
                <strong>{formatCycleDate(open.closesOn)}</strong>.
              </>
            ) : (
              "No cycles are currently open. The next cycle opens in fall."
            )}
          </p>
          {open && (
            <div style={{ marginTop: 32 }}>
              <Link
                href={open.applicationUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start your application →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
