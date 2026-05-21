import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grant reimbursements",
  description:
    "Step-by-step reimbursement process for Dedham teachers who have received a DEF grant.",
};

const REIMBURSEMENT_FORM_URL =
  "https://docs.google.com/document/d/def-reimbursement-form";

const faqs = [
  {
    q: "What if I lost a receipt?",
    a: "Email our treasurer with what you remember (vendor, date, approximate amount). Most vendors can email a duplicate; we can usually work it out as long as the gap is small.",
  },
  {
    q: "Can DEF pay vendors directly?",
    a: "Yes — for deposits or invoices that require advance payment, contact the treasurer before the program. We can issue a check directly to the vendor as long as it matches the funded budget.",
  },
  {
    q: "How long does reimbursement take?",
    a: "Two to three weeks from the date we receive a complete reimbursement packet (receipts + signed form). Direct vendor payments are faster.",
  },
  {
    q: "What counts as a complete receipt?",
    a: "Itemized receipt or invoice showing vendor name, date, and the items purchased. Credit card statements alone don't count.",
  },
  {
    q: "I went over budget — what now?",
    a: "We reimburse up to the funded amount. Anything beyond that is the teacher's or PTO's to cover. Reach out before going over budget if you think you'll need more — we can sometimes amend.",
  },
];

export default function ReimbursementsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-eyebrow">For funded teachers</div>
          <h1>
            How to get <em>reimbursed</em>.
          </h1>
          <p className="lede">
            Congratulations on your grant. Here&apos;s exactly what to do with
            your receipts.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="prose">
            <h2>The four-step process</h2>
            <ol>
              <li>
                <strong>Save every original receipt.</strong> Itemized only —
                credit card statements alone do not count. Take a photo if the
                paper one is fading.
              </li>
              <li>
                <strong>Complete the reimbursement form.</strong>{" "}
                <Link
                  href={REIMBURSEMENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the reimbursement form
                </Link>
                {" "}— it&apos;s a fillable Google Doc. List each receipt and the
                grant it&apos;s tied to.
              </li>
              <li>
                <strong>Submit within 30 days of program completion.</strong>{" "}
                Email the completed form plus scanned/photographed receipts to{" "}
                <a href={`mailto:${siteConfig.emails.treasurer}`}>
                  {siteConfig.emails.treasurer}
                </a>
                , or drop the original packet at the DEF mailbox at Dedham
                Town Hall.
              </li>
              <li>
                <strong>Watch for the reimbursement check.</strong> Two to
                three weeks from receipt of a complete packet. Direct deposit
                available on request.
              </li>
            </ol>
            <h2>If you need a vendor paid directly</h2>
            <p>
              Some vendors require deposits or invoiced payment before the
              program runs. That&apos;s fine — email{" "}
              <a href={`mailto:${siteConfig.emails.treasurer}`}>
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
          <div className="section-eyebrow">Reimbursement FAQ</div>
          <h2 className="section-heading">Common questions.</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <h2 className="section-heading">Still have questions?</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16, marginBottom: 24 }}>
            Our treasurer answers reimbursement questions personally — usually within a day or two.
          </p>
          <a href={`mailto:${siteConfig.emails.treasurer}`} className="btn btn-primary">
            Email the treasurer
          </a>
        </div>
      </section>
    </>
  );
}
