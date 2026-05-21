import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Five ways to support the Dedham Education Foundation: donate, sponsor an event, join the board, volunteer for a day, or spread the word.",
};

const ways = [
  {
    title: "Donate",
    body: "The simplest way in. One-time, monthly, or by mailed check — every dollar feeds the next grant cycle.",
    cta: { label: "Donate", href: "/donate" },
    accent: "green",
  },
  {
    title: "Sponsor an event",
    body: "Dedham businesses sponsor the Dash, the Spelling Bee, individual rounds, or year-long impact. Logo placement, employee engagement, and a great line in your community-impact report.",
    cta: { label: "Talk to us about sponsoring", href: "/contact?inquiry=sponsor-2026" },
    accent: "gold",
  },
  {
    title: "Join the board",
    body: "DEF is an all-volunteer board. We add members in rolling waves. If you live in Dedham and want to shape how this works for the next decade, get in touch.",
    cta: { label: "Express interest", href: "/contact?inquiry=board" },
    accent: "crimson",
  },
  {
    title: "Volunteer for a day",
    body: "The Dash needs course marshals, registration helpers, and finish-line photographers. The Bee needs judges, ushers, and word-list readers. Lowest commitment, highest fun.",
    cta: { label: "Sign up to volunteer", href: "/contact?inquiry=volunteer-day" },
    accent: "blue",
  },
  {
    title: "Spread the word",
    body: "Tag DEF on Instagram and Facebook. Share a grant story with a neighbor. Forward this site to a teacher you love.",
    cta: { label: "Follow on Instagram", href: siteConfig.social.instagram, external: true },
    accent: "mint",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="page-hero theme-mixed">
        <div className="wrap">
          <div className="section-eyebrow">Get involved</div>
          <h1>
            Dedham&apos;s schools are <em>powered by neighbors</em>.
          </h1>
          <p className="lede">
            DEF is funded, run, and championed by Dedham residents. There are
            five ways to be part of it — pick one (or all).
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="involve-grid">
            {ways.map((w, i) => (
              <article key={w.title} className={`involve-card accent-${w.accent}`}>
                <div className="involve-num">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="involve-title">{w.title}</h2>
                <p className="involve-body">{w.body}</p>
                {w.cta.external ? (
                  <a
                    href={w.cta.href}
                    className="involve-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {w.cta.label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <Link href={w.cta.href} className="involve-cta">
                    {w.cta.label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="section-eyebrow center">Still deciding?</div>
          <h2 className="section-heading">
            Send a note. We <em>read everything</em>.
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16, marginBottom: 24 }}>
            Not sure where you fit? Tell us what you care about (your kid&apos;s
            school, a specific grant type, a skill you have) and we&apos;ll
            point you to the right thing.
          </p>
          <Link href="/contact?inquiry=general" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
