import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christine Stec Rock Star Educator Award",
  description:
    "DEF's annual award honoring a Dedham Public School educator who makes students feel like rock stars — in memory of Christine Stec, longtime Oakdale 4th grade teacher.",
};

const NOMINATION_FORM_URL = "https://forms.gle/stec-nomination-2026";

const recipients = [
  {
    year: 2025,
    name: "Elaine Sheehy",
    role: "School counselor, Riverdale Elementary",
    nomineePool: "Selected from 31 nominated educators across all seven Dedham Public Schools",
    quotes: [
      {
        attribution: "From a nomination",
        text: "Elaine Sheehy goes above and beyond to provide Riverdale students with enriching learning opportunities that extend far beyond the classroom. This year, she secured a grant to bring multicultural counseling into our school, which has been instrumental in supporting our refugee students. Elaine also established a free soccer club for Riverdale students, complete with transportation, and partnered with Dedham High School student volunteers to run the program. Additionally, she brought in the Girls' LEAP self-defense program, offering a 10-week afterschool program at no cost to students. These initiatives not only provide invaluable experiences but also create a sense of belonging and empowerment for our students.",
      },
      {
        attribution: "From a colleague",
        text: "Elaine Sheehy celebrates every student by recognizing their individuality and contributions to our school community. As our school adjustment counselor, she has the unique opportunity to connect with all students, not just those in one classroom. She consistently highlights student achievements through our “You've Been Caught Following the Riverdale Core Values” initiative, reinforcing positive behaviors and character. Beyond school-wide recognition, Elaine makes it a priority to personally celebrate students by reaching out to families with positive emails and shout-outs. She also leads the 5th-grade community service projects, ensuring students' efforts to give back are highlighted in the principal's newsletter.",
      },
    ],
  },
  {
    year: 2024,
    name: "Maureen Blazejewski",
    role: "Teacher, Avery Elementary",
    nomineePool: "Selected from 27 nominated educators across all seven Dedham Public Schools. A long-time Dedham resident and DPS graduate.",
    quotes: [
      {
        attribution: "From a nomination",
        text: "Maureen teaches ALL students. You will NEVER EVER hear Maureen state a negative, such as, ‘________ won't be able to do that or learn that.’ Instead you observe how Maureen thoughtfully pre-plans and determines how to support her students so that all students are successful. Maureen regularly introduces new strategies tailored to our daughter's needs to help her be as successful as she can be in the classroom and with other students.",
      },
      {
        attribution: "From a colleague",
        text: "Maureen enriches her students' learning by providing extension activities. Students are currently learning about the systems of the human body. Maureen has created a hands-on magnetic skeleton with labels so students can identify and see the various parts of the skeletal system. She has also created a 3D model of the lungs to enrich students' learning, and recorded herself reading so that if a student is absent he/she can listen to it the next day and not fall behind. Maureen also gets to know each student individually and allowed each student to be ‘Student of the Week,’ where each student created a poster highlighting their family, cultures, and interests.",
      },
    ],
  },
];

export default function StecAwardPage() {
  return (
    <>
      <section className="page-hero theme-crimson">
        <div className="wrap">
          <div className="section-eyebrow mark-square">A DEF award</div>
          <h1>
            The Christine Stec <em>Rock Star Educator</em> Award.
          </h1>
          <p className="lede">
            Each year, DEF honors a Dedham Public School educator who makes
            students feel like rock stars — just as Christine Stec did, every
            day, for her 4th graders at Oakdale.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="prose">
            <h2>Inspired by Christine.</h2>
            <p>
              Christine Stec was a longtime Oakdale 4th-grade teacher and Dedham
              resident who lifted up our community. She lost a courageous battle
              with cancer in March 2023, but she left behind a powerful legacy.
            </p>
            <p>
              Over the years, Christine submitted several grant applications to
              DEF to benefit her students — one of the many ways she set the
              standard as an educator in Dedham. The inspiration for the
              award&apos;s name is both Christine&apos;s extraordinary skill and
              enthusiasm as a &ldquo;rock star&rdquo; educator and her practice
              of celebrating her own students as rock stars.
            </p>
            <p>
              Each year in her classroom, every student got to be the &ldquo;rock
              star&rdquo; for a week — with activities that highlighted what
              made each child thrive. Kids shared favorite activities and
              hobbies with their classmates, caregivers were invited in to eat
              lunch with their rock star, and classmates created a poster
              celebrating what they appreciated about them.
            </p>
            <p>
              Inspired by Christine&apos;s overflowing positive energy and
              exemplary commitment to the students of Dedham, DEF recognizes
              one educator each year who helps students feel like rock stars
              every day, just as Christine did.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-square">About the award</div>
          <h2 className="section-heading">
            One educator a year. <em>$500 to keep the work going.</em>
          </h2>

          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            <div
              style={{
                background: "var(--cream)",
                border: "1px solid var(--line)",
                borderLeft: "5px solid var(--crimson)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                Who&apos;s eligible
              </div>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                Educators directly supporting the academic and social-emotional
                skills of Dedham&apos;s students — teachers, counselors,
                reading specialists, librarians, special education teachers,
                school psychologists.
              </p>
            </div>
            <div
              style={{
                background: "var(--cream)",
                border: "1px solid var(--line)",
                borderLeft: "5px solid var(--gold)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                Who can nominate
              </div>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                Students, families, colleagues, administrators, and school
                committee members. Anyone in the Dedham Public School
                community.
              </p>
            </div>
            <div
              style={{
                background: "var(--cream)",
                border: "1px solid var(--line)",
                borderLeft: "5px solid var(--blue)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                How it&apos;s decided
              </div>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                A DEF board committee reviews every nomination; the full board
                votes on the winner. Announced and recognized at public events
                including School Committee meetings.
              </p>
            </div>
            <div
              style={{
                background: "var(--cream)",
                border: "1px solid var(--line)",
                borderLeft: "5px solid var(--green)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                What the winner gets
              </div>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                A $500 DEF grant for educational supplies or programs to
                benefit students in their classroom or school — plus
                community-wide recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="nominate">
        <div
          className="wrap"
          style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}
        >
          <div className="section-eyebrow mark-square center">2026 nominations</div>
          <h2 className="section-heading">
            Nominations open <em>January 5</em>.
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16, marginBottom: 32 }}>
            Submissions close January 30, 2026. The 2026 winner is announced in
            March.
          </p>
          <Link
            href={NOMINATION_FORM_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit a nomination →
          </Link>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow mark-square">Past winners</div>
          <h2 className="section-heading">
            Meet Dedham&apos;s Rock Star <em>Educators</em>.
          </h2>

          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 40 }}>
            {recipients.map((r) => (
              <article
                key={r.year}
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: 32,
                }}
              >
                <header
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 32,
                        fontWeight: 500,
                        color: "var(--crimson)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.05,
                      }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 14,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--muted)",
                        fontWeight: 600,
                      }}
                    >
                      {r.role}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 28,
                      fontWeight: 500,
                      color: "var(--gold)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {r.year}
                  </div>
                </header>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    fontStyle: "italic",
                    marginBottom: 24,
                  }}
                >
                  {r.nomineePool}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {r.quotes.map((q, i) => (
                    <blockquote
                      key={i}
                      style={{
                        margin: 0,
                        padding: "16px 0 16px 20px",
                        borderLeft: "3px solid var(--gold)",
                        background: "transparent",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: 17,
                          lineHeight: 1.55,
                          color: "var(--ink)",
                          letterSpacing: "-0.005em",
                          fontStyle: "italic",
                        }}
                      >
                        &ldquo;{q.text}&rdquo;
                      </p>
                      <cite
                        style={{
                          display: "block",
                          marginTop: 12,
                          fontSize: 12,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--muted)",
                          fontStyle: "normal",
                          fontWeight: 600,
                        }}
                      >
                        — {q.attribution}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div
          className="wrap"
          style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}
        >
          <h2 className="section-heading">
            Know a Dedham educator who deserves this?
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 16, marginBottom: 32 }}>
            Tell us about them. Nominations from students, parents, and
            colleagues are all welcome.
          </p>
          <Link
            href={NOMINATION_FORM_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nominate a rock star educator →
          </Link>
        </div>
      </section>
    </>
  );
}
