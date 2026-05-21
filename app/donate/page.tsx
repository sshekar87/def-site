import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { MonthlyNotify } from "@/components/forms/MonthlyNotify";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Every dollar funds a program a Dedham student will remember. Donate to the Dedham Education Foundation.",
};

// Ordered base → apex so the pyramid renders from a broad foundation of small
// gifts ($25) to the apex of larger ones ($500).
const impactBands = [
  {
    amount: "$500",
    body: "funds a Shakespeare performance for the entire middle school.",
    tier: "tier-top" as const,
  },
  {
    amount: "$100",
    body: "funds one author visit for a Dedham 4th grade class.",
    tier: "tier-mid" as const,
  },
  {
    amount: "$25",
    body: "funds classroom supplies for one Tide Pools field trip.",
    tier: "tier-base" as const,
  },
];

type GivingMethod = {
  primary: boolean;
  title: string;
  handle?: string;
  body: string;
  cta: string | null;
  href: string | null;
  external: boolean;
};

const givingMethods: GivingMethod[] = [
  {
    primary: true,
    title: "PayPal",
    handle: siteConfig.paypalHandle,
    body: "Credit cards, Apple Pay, and PayPal balances. Picks up your saved payment method if you already use PayPal — the fastest path on most devices.",
    cta: "Give via PayPal",
    href: siteConfig.paypalUrl,
    external: true,
  },
  {
    primary: true,
    title: "Venmo",
    handle: siteConfig.venmoHandle,
    body: "Quick from your phone. Pay the foundation directly — open the app, search the handle, send the amount. No fees, no fuss.",
    cta: "Give via Venmo",
    href: siteConfig.venmoUrl,
    external: true,
  },
  {
    primary: false,
    title: "Monthly giving",
    body: "Recurring monthly support is the most reliable way to fund grant cycles. We're switching providers in early 2026 — drop your email to be notified when it goes live.",
    cta: null,
    href: null,
    external: false,
  },
  {
    primary: false,
    title: "Stock, DAF, or planned giving",
    body: "We accept appreciated securities, donor-advised fund grants, and legacy gifts. Email our treasurer to coordinate.",
    cta: "Email treasurer",
    href: `mailto:${siteConfig.emails.treasurer}?subject=DAF%20%2F%20stock%20%2F%20planned%20gift`,
    external: false,
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="page-hero theme-green">
        <div className="wrap">
          <div className="section-eyebrow mark-triangle">Donate</div>
          <h1>
            Every dollar funds <em>a program</em> a Dedham student will
            remember.
          </h1>
          <p className="lede">
            DEF is an all-volunteer, 501(c)(3) public charity. Your gift goes
            directly into the next grant cycle, not into overhead — there is no
            overhead.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow mark-triangle">Four ways to give</div>
          <h2 className="section-heading">Pick what works for you.</h2>
          <div className="giving-methods">
            {givingMethods.map((m) => (
              <div
                key={m.title}
                className={`giving-card${m.primary ? " primary" : ""}`}
              >
                <h3>{m.title}</h3>
                {m.handle && <div className="giving-handle">{m.handle}</div>}
                <p>{m.body}</p>
                {m.title === "Monthly giving" ? (
                  <div id="monthly" style={{ marginTop: 12 }}>
                    <MonthlyNotify />
                  </div>
                ) : m.cta && m.href ? (
                  m.external ? (
                    <a
                      href={m.href}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {m.cta}
                    </a>
                  ) : (
                    <a href={m.href} className="btn btn-primary">
                      {m.cta}
                    </a>
                  )
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-triangle">What your gift does</div>
          <h2 className="section-heading">
            What every dollar <em>actually buys</em>.
          </h2>
          <div className="impact-pyramid">
            {impactBands.map((b) => (
              <div key={b.amount} className={`impact-pyramid-tier ${b.tier}`}>
                <div className="impact-amount">{b.amount}</div>
                <div className="impact-band-text">{b.body}</div>
              </div>
            ))}
          </div>
          <p className="impact-pyramid-note">
            Every gift sits in the triangle. Smaller gifts at the base, larger
            ones at the apex — together they build the next grant cycle.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow mark-triangle">Tax info</div>
          <h2 className="section-heading">501(c)(3), Dedham-grown.</h2>
          <div className="prose" style={{ marginTop: 32, marginLeft: 0 }}>
            <p>
              The Dedham Education Foundation is a 501(c)(3) public charity
              registered in Massachusetts. Your donation is tax-deductible to
              the fullest extent of the law.
            </p>
            <p>
              <strong>Legal name:</strong> Dedham Education Foundation, Inc.
              <br />
              <strong>EIN:</strong>{" "}
              <span className="ein" style={{ color: "var(--ink-soft)" }}>
                {siteConfig.ein}
              </span>
              <br />
              <strong>Mailing address:</strong> P.O. Box 245, Dedham, MA 02027
            </p>
            <p>
              For one-time gifts, PayPal will email your receipt directly. For
              checks or other gifts, the treasurer will mail an
              acknowledgement within two weeks of receipt.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-triangle">Employer match</div>
          <h2 className="section-heading">Double your gift, for free.</h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 17, maxWidth: 640 }}>
            Many Dedham-area employers (state agencies, big employers in 128,
            and most large healthcare systems) will match employee donations
            dollar-for-dollar. Check with your HR team — and tell them DEF is a
            registered 501(c)(3) under our EIN above.
          </p>
        </div>
      </section>
    </>
  );
}
