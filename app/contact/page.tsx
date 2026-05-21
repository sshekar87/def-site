import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "We're an all-volunteer board. Here's how to reach us about grants, donations, sponsorships, and more.",
};

const contactRoutes = [
  {
    label: "General questions",
    body: "Anything that doesn't fit below — events, partnerships, press.",
    href: `mailto:${siteConfig.emails.info}`,
    address: siteConfig.emails.info,
  },
  {
    label: "Grant applications & reimbursements",
    body: "For teachers applying for or running a DEF-funded program.",
    href: `mailto:${siteConfig.emails.grants}`,
    address: siteConfig.emails.grants,
  },
  {
    label: "Donations & sponsorships",
    body: "Stock gifts, DAFs, sponsorships, employer matches, anything finance-side.",
    href: `mailto:${siteConfig.emails.treasurer}`,
    address: siteConfig.emails.treasurer,
  },
];

type SearchParams = Promise<{ inquiry?: string }>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const params = (await searchParams) ?? {};
  const inquiry = params.inquiry ?? "";

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-eyebrow">Contact</div>
          <h1>
            We&apos;re an all-volunteer board. <em>Here&apos;s how to reach us.</em>
          </h1>
          <p className="lede">
            For the fastest reply, email the address that matches your
            question. The form below works too — it goes to the board
            President&apos;s inbox.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow">By topic</div>
          <h2 className="section-heading">Who to email.</h2>
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {contactRoutes.map((r) => (
              <div
                key={r.label}
                style={{
                  background: "var(--cream-warm)",
                  borderRadius: 8,
                  padding: 24,
                  border: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 500,
                    fontSize: 18,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {r.label}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-soft)",
                    lineHeight: 1.55,
                    marginBottom: 16,
                  }}
                >
                  {r.body}
                </p>
                <a
                  href={r.href}
                  style={{
                    color: "var(--crimson)",
                    fontWeight: 600,
                    fontSize: 14,
                    borderBottom: "1.5px solid currentColor",
                    paddingBottom: 2,
                  }}
                >
                  {r.address}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow">Send a message</div>
          <h2 className="section-heading">
            Or use the form. We <em>read everything</em>.
          </h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", maxWidth: 600 }}>
            We typically reply within 3–5 business days. For grant deadlines or
            event logistics that need same-week answers, email directly.
          </p>
          <div style={{ marginTop: 32 }}>
            <ContactForm defaultInquiry={inquiry} />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow">Mailing address</div>
          <h2 className="section-heading">Mail.</h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 17 }}>
            Dedham Education Foundation, Inc.
            <br />
            P.O. Box 245
            <br />
            Dedham, MA 02027
          </p>
        </div>
      </section>
    </>
  );
}
