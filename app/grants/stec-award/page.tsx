import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christine Stec Rock Star Educator Award",
  description:
    "The Christine Stec Rock Star Educator Award recognizes excellence in Dedham Public Schools educators. Nominations open each spring.",
};

const recipients = [
  { year: 2024, name: "Maureen Blazejewski", note: "Two decades of elementary literacy leadership." },
  { year: 2023, name: "TBD" },
  { year: 2022, name: "TBD" },
  { year: 2021, name: "TBD" },
];

export default function StecAwardPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-eyebrow">A DEF award</div>
          <h1>
            The Christine Stec <em>Rock Star Educator</em> Award.
          </h1>
          <p className="lede">
            Each spring, DEF recognizes one Dedham educator whose work has
            changed students&apos; lives in lasting ways. Named for Christine
            Stec, a beloved Oakdale teacher whose own classroom set the bar.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="prose">
            <h2>The story behind the award</h2>
            <p>
              Christine Stec taught at Oakdale Elementary for years. Her
              classroom was the kind of place students remember decades later —
              hands-on, demanding, deeply kind. When she passed, the DEF board
              created this award to recognize the educators in DPS who do the
              same kind of work today.
            </p>
            <p>
              The award is given annually at the DEF Dash to a Dedham educator
              nominated by their colleagues, parents, or students. The
              recipient receives $1,000 and DEF&apos;s deepest gratitude.
            </p>

            <h2>Past recipients</h2>
          </div>

          <div className="star-spellers" style={{ maxWidth: 680, margin: "32px auto 0" }}>
            {recipients.map((r) => (
              <div key={r.year} className="star-row">
                <div className="star-year">{r.year}</div>
                <div>
                  <div className="star-name">{r.name}</div>
                  {r.note && <div className="star-grade">{r.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="section-eyebrow center">Nominate</div>
          <h2 className="section-heading">
            Know a Dedham educator who deserves this?
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16, marginBottom: 32 }}>
            Nominations open February 1 and close April 1 each year. The
            recipient is announced at the DEF Dash 5K in early October.
          </p>
          <Link
            href="https://forms.gle/stec-nomination"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nominate a Dedham educator →
          </Link>
        </div>
      </section>
    </>
  );
}
