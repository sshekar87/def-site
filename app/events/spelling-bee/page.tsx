import Link from "next/link";
import type { Metadata } from "next";
import { findEvent } from "@/content/events";

export const metadata: Metadata = {
  title: "DEF Spelling Bee",
  description:
    "DEF's indoor fundraiser. Team up with three friends, pick a costume, and try not to miss \"weird\" in round three.",
};

const howItWorks = [
  {
    title: "Teams of three",
    body: "Three spellers, one captain. Form your own team or get assigned the night of.",
  },
  {
    title: "Costumes encouraged",
    body: "Best costume gets immortalized on the DEF Instagram. Last year had three Marie Antoinettes.",
  },
  {
    title: "Word lists scale up",
    body: "Round one is words you know. Round five is words even etymologists argue about. Audience votes on contested calls.",
  },
  {
    title: "Audience donates",
    body: "Heckle, cheer, donate. Every dollar raised in the room goes to the next grant cycle.",
  },
];

export default function SpellingBeePage() {
  const evt = findEvent("spelling-bee");
  return (
    <>
      <section className="event-hero">
        <div className="wrap">
          <div className="event-hero-inner">
            <div className="event-hero-date hex">
              {evt.displayDate.month}
              <br />
              {evt.displayDate.day}
              <small>{evt.saveTheDateLabel}</small>
            </div>
            <div>
              <div className="section-eyebrow mark-hex" style={{ color: "var(--gold)" }}>
                DEF Spelling Bee · 2026
              </div>
              <h1>The most fun you can have spelling &ldquo;mnemonic&rdquo;.</h1>
              <p className="lede">{evt.shortPitch}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={evt.registerUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Form a team
                </a>
                <Link href={evt.sponsorUrl} className="btn btn-secondary">
                  Sponsor a round
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

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-hex">How it works</div>
          <h2 className="section-heading">
            Four things to know <em>before you team up</em>.
          </h2>
          <div className="howit-grid" style={{ marginTop: 48, gridTemplateColumns: "repeat(2, 1fr)" }}>
            {howItWorks.map((row, i) => (
              <div key={row.title} className="step">
                <div className="step-num">{i + 1}</div>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow mark-hex">Star spellers</div>
          <h2 className="section-heading">Past winning teams.</h2>
          <div className="honeycomb">
            {evt.starSpellers?.map((s) => (
              <div key={`${s.year}-${s.name}`} className="hex-tile">
                <div className="hex-year">{s.year}</div>
                <div className="hex-name">{s.name}</div>
                {s.grade && <div className="hex-grade">{s.grade}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="section-heading">
            Ready to spell <em>&ldquo;cornflower&rdquo;</em>?
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16, marginBottom: 24 }}>
            Team registration opens in January. Audience tickets go on sale a
            month later.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={evt.registerUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Form a team
            </a>
            <Link href={evt.sponsorUrl} className="btn btn-secondary">
              Sponsor a round
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
