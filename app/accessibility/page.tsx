import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Our accessibility commitment, current standards, and how to report an issue.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-eyebrow">Accessibility</div>
          <h1>
            Accessibility <em>statement</em>.
          </h1>
          <p className="lede">
            DEF&apos;s site aims to meet WCAG 2.1 AA. Here&apos;s where we are,
            and how to flag anything we&apos;ve missed.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="prose">
            <h2>Our target</h2>
            <p>
              The Dedham Education Foundation is committed to making this site
              usable by everyone in our community, regardless of ability. We
              target conformance with the{" "}
              <a
                href="https://www.w3.org/TR/WCAG21/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1 at the AA
                level
              </a>
              .
            </p>

            <h2>What we&apos;ve done</h2>
            <ul>
              <li>
                Semantic HTML throughout — navigation, headings, landmarks,
                form labels.
              </li>
              <li>
                Color contrast checked against WCAG AA targets (4.5:1 for body
                text, 3:1 for large text and UI components).
              </li>
              <li>
                Keyboard navigation supported — every interactive element is
                focusable and has a visible focus state.
              </li>
              <li>
                Skip-to-content link at the top of every page for screen reader
                and keyboard users.
              </li>
              <li>Alternative text on every meaningful image.</li>
              <li>
                <code>prefers-reduced-motion</code> respected — entrance
                animations are softened to near-instant if your system is set
                to reduce motion.
              </li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              We use placeholder photo tiles in event galleries until real
              photos are added. Once real photos arrive, every one will get
              descriptive alt text.
            </p>

            <h2>Report an issue</h2>
            <p>
              If something on this site is hard to use with a screen reader, a
              keyboard, magnification, or for any other reason — please email{" "}
              <a href={`mailto:${siteConfig.emails.info}`}>
                {siteConfig.emails.info}
              </a>
              . We treat accessibility reports as priority and will respond
              within a week.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
