import Link from "next/link";
import type { Metadata } from "next";
import { cycles, formatCycleDate } from "@/content/cycles";
import { formatCurrency } from "@/content/grants";
import {
  grantTypes,
  grantsHeroCopy,
  eligibilityFaq,
  reviewTimeline,
} from "@/content/grant-types";

export const metadata: Metadata = {
  title: "Grants for DPS Teachers",
  description:
    "Three grant categories, three cycles a year, one short application. DEF funds Dedham teachers' best classroom ideas.",
};

export default function GrantsPage() {
  const open = cycles.find((c) => c.status === "open");

  return (
    <>
      <section className="page-hero theme-crimson">
        <div className="wrap">
          <div className="section-eyebrow mark-square">{grantsHeroCopy.eyebrow}</div>
          <h1>
            Have an idea? <em>We probably want to fund it.</em>
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

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow mark-square">Eligibility & FAQ</div>
          <h2 className="section-heading">Quick answers.</h2>
          <div className="faq-list">
            {eligibilityFaq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="section-heading">Ready to apply?</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16 }}>
            {open ? (
              <>
                {open.name} applications are open through{" "}
                <strong>{formatCycleDate(open.closesOn)}</strong>.
              </>
            ) : (
              "No cycles are currently open. The next cycle opens in fall — sign up for updates below."
            )}
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {open && (
              <Link
                href={open.applicationUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start your application →
              </Link>
            )}
            <Link href="/grants/reimbursements" className="btn btn-secondary">
              I&apos;m already funded — how do I get reimbursed?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
