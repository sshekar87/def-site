import Link from "next/link";
import type { Metadata } from "next";
import { findEvent } from "@/content/events";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DEF Dash 5K",
  description:
    "The DEF Dash 5K is Dedham Education Foundation's biggest fundraiser of the year. Bring the kids, bring the strollers, stay for the cider donuts.",
};

export default function DashPage() {
  const evt = findEvent("dash");
  return (
    <>
      <section className="event-hero theme-blue">
        <div className="wrap">
          <div className="event-hero-inner">
            <div className="event-hero-date circle">
              {evt.displayDate.month}
              <br />
              {evt.displayDate.day}
              <small>{evt.saveTheDateLabel}</small>
            </div>
            <div>
              <div className="section-eyebrow mark-circle" style={{ color: "var(--gold)" }}>
                The DEF Dash 5K · 2026
              </div>
              <h1>One morning. One Town. One million little reasons to run.</h1>
              <p className="lede">{evt.shortPitch}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={evt.registerUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for the Dash
                  <ArrowRight size={18} className="btn-arrow" aria-hidden="true" />
                </a>
                <Link href={evt.sponsorUrl} className="btn btn-secondary">
                  Become a sponsor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="prose">
            <h2>What it is.</h2>
            {evt.longDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt" id="course">
        <div className="wrap">
          <div className="section-eyebrow mark-circle">The course</div>
          <h2 className="section-heading">A loop through Dedham&apos;s prettiest mile.</h2>
          <p style={{ color: "var(--ink-soft)", marginTop: 16, maxWidth: 640 }}>
            The course starts at the Endicott Estate, winds through residential
            Dedham, and finishes back on the lawn. Strollers welcome, dogs on a
            leash, kids&apos; fun run before the main start.
          </p>
          <div className="course-map" role="img" aria-label="Course map placeholder">
            Course map · final route confirmed in late August
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow mark-circle">Schedule</div>
          <h2 className="section-heading">Morning of the Dash.</h2>
          <div className="schedule">
            {evt.schedule?.map((row) => (
              <div key={row.time} className="schedule-row">
                <div className="schedule-time">{row.time}</div>
                <div className="schedule-label">{row.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-circle">Where your registration goes</div>
          <h2 className="section-heading">
            Every Dash bib funds <em>a real grant</em>.
          </h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 17, maxWidth: 640 }}>
            The Dash is the single largest source of funding for DEF&apos;s
            grant cycles. Last year&apos;s race paid for the Innovation cycle
            outright — hydroponic gardens, robotics kits, sensory tools, and a
            dozen smaller programs. Your registration is funding the next one.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/grants/awarded" className="btn btn-secondary">
              See what last year funded
            </Link>
            <Link href="/donate" className="btn btn-primary">
              Donate instead of running
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section" id="photos">
        <div className="wrap">
          <div className="section-eyebrow mark-circle">Past Dashes</div>
          <h2 className="section-heading">
            Photos from the last <em>three</em> Dashes.
          </h2>
          <div className="photo-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="photo-tile" aria-hidden="true">
                Photo placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="section-heading">
            See you on the <em>Endicott lawn</em>.
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16, marginBottom: 24 }}>
            October {evt.displayDate.day}, 2026 · 8:30 AM start
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={evt.registerUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register now
            </a>
            <Link href={evt.sponsorUrl} className="btn btn-secondary">
              Sponsor the Dash
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
