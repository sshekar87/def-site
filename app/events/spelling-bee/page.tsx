import Link from "next/link";
import type { Metadata } from "next";
import { findEvent } from "@/content/events";
import { elementarySchools, dpsSchools } from "@/content/schools";
import { HoneyBee } from "@/components/brand/HoneyBee";

export const metadata: Metadata = {
  title: "DEF Spelling Bee",
  description:
    "Dedham's elementary-school spelling championship. 3rd, 4th, and 5th graders from Avery, Greenlodge, Oakdale, and Riverdale compete onstage every spring.",
};

const howItWorks = [
  {
    title: "Schools run their rounds",
    body: "Avery, Greenlodge, Oakdale, and Riverdale each run their own classroom and school-wide rounds in February. Teachers coordinate.",
  },
  {
    title: "Finalists represent",
    body: "Top spellers from each school — usually 3 per grade — advance to the DEF stage at Dedham Middle School in March.",
  },
  {
    title: "Onstage at DMS",
    body: "Word lists scale up by grade. Audience cheers, parents cry. Tie-breakers happen. One champion per grade is crowned.",
  },
  {
    title: "Funds the next cycle",
    body: "Sponsorships and audience donations go directly into the next round of Innovation, Enrichment, and Nancy Bradley grants.",
  },
];

export default function SpellingBeePage() {
  const evt = findEvent("spelling-bee");
  return (
    <>
      <section className="event-hero theme-gold">
        <HoneyBee />
        <div className="wrap">
          <div className="event-hero-inner">
            <div className="event-hero-date hex">
              {evt.displayDate.month}
              <br />
              {evt.displayDate.day}
              <small>{evt.saveTheDateLabel}</small>
            </div>
            <div>
              <div className="section-eyebrow mark-hex">
                DEF Spelling Bee · 2026
              </div>
              <h1>
                Dedham&apos;s best <em>3rd, 4th, and 5th graders</em>. Onstage.
              </h1>
              <p className="lede">{evt.shortPitch}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={evt.registerUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  School coordinator info
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
          <div className="section-eyebrow mark-hex">The four schools</div>
          <h2 className="section-heading">
            Where the bee <em>starts</em>.
          </h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", maxWidth: 640 }}>
            Every Dedham elementary school runs its own bee. Talk to your
            child&apos;s teacher about classroom-round timing, or visit your
            school&apos;s site for school-wide details.
          </p>
          <div className="honeycomb" style={{ marginTop: 32 }}>
            {elementarySchools.map((s) => (
              <a
                key={s.slug}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hex-tile accent-${s.accent}`}
              >
                <div className="hex-year">{s.name.split(" ")[0]}</div>
                <div className="hex-name">Elementary</div>
                <div className="hex-grade">Visit school site →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow mark-hex">How it works</div>
          <h2 className="section-heading">
            From classroom rounds to the <em>DMS stage</em>.
          </h2>
          <div
            className="howit-grid"
            style={{ marginTop: 48, gridTemplateColumns: "repeat(2, 1fr)" }}
          >
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

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-hex">Past champions</div>
          <h2 className="section-heading">Bee history.</h2>
          <div className="honeycomb">
            {evt.starSpellers?.map((s) => {
              const accent = s.schoolSlug
                ? dpsSchools.find((sc) => sc.slug === s.schoolSlug)?.accent
                : undefined;
              return (
                <div
                  key={`${s.year}-${s.name}`}
                  className={`hex-tile${accent ? ` accent-${accent}` : ""}`}
                >
                  <div className="hex-year">{s.year}</div>
                  <div className="hex-name">{s.name}</div>
                  {s.grade && <div className="hex-grade">{s.grade}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="section-heading">
            Want your school to sponsor a <em>round</em>?
          </h2>
          <p
            style={{
              color: "var(--ink-soft)",
              fontSize: 17,
              marginTop: 16,
              marginBottom: 24,
            }}
          >
            DEF runs the Bee, but it&apos;s funded by Dedham businesses,
            families, and friends-of-school. Sponsorships range from $250
            (round) to $2,500 (title sponsor).
          </p>
          <Link href={evt.sponsorUrl} className="btn btn-primary">
            Become a Bee sponsor
          </Link>
        </div>
      </section>
    </>
  );
}
