import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the Dedham Education Foundation handles personal information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-eyebrow">Privacy</div>
          <h1>Privacy policy.</h1>
          <p className="lede">
            Plain English. Last updated May 2026.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="prose">
            <h2>What we collect</h2>
            <p>
              We collect only the information you choose to give us. That
              includes:
            </p>
            <ul>
              <li>
                Anything you submit through our contact or notify-me forms
                (name, email, message).
              </li>
              <li>
                Anonymous analytics — which pages get visited, how often, from
                what general region. We use Vercel Analytics and Google
                Analytics 4 for this. Neither stores personally identifying
                information.
              </li>
              <li>
                If you donate through PayPal or another processor, that
                processor (not DEF) handles your payment information per their
                own privacy policy.
              </li>
            </ul>

            <h2>What we do with it</h2>
            <p>
              We use what you give us to respond to you, to acknowledge gifts,
              and to send the occasional update if you&apos;ve asked to hear
              from us. We don&apos;t sell or rent any of it — full stop.
            </p>

            <h2>What we don&apos;t do</h2>
            <ul>
              <li>We don&apos;t sell or trade your data.</li>
              <li>
                We don&apos;t track you across the rest of the web with
                advertising pixels.
              </li>
              <li>
                We don&apos;t share donor lists outside the DEF board and our
                processors (PayPal, our bank, Resend in v1.1).
              </li>
            </ul>

            <h2>Cookies</h2>
            <p>
              The site uses minimal cookies: one for site analytics, one for
              session state when you submit a form. No advertising cookies.
            </p>

            <h2>Questions or removal requests</h2>
            <p>
              Email{" "}
              <a href={`mailto:${siteConfig.emails.info}`}>
                {siteConfig.emails.info}
              </a>{" "}
              and we&apos;ll remove your information from our records within a
              week.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
