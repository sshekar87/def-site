import Link from "next/link";
import type { Metadata } from "next";
import { boardMembers, yearlyGranted } from "@/content/board";
import { formatCurrency } from "@/content/grants";
import { MissionThenNow } from "@/components/sections/MissionThenNow";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Funded by Dedham, for Dedham. Mission, board, financials, and 30-year history of the Dedham Education Foundation.",
};

const AVATAR_CYCLE = ["avatar-crimson", "avatar-gold", "avatar-blue", "avatar-green"] as const;

function initials(name: string): string {
  return name
    .replace(/\([^)]*\)/g, " ") // strip parenthetical bits like "(Wilmar)"
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function AboutPage() {
  const maxYearly = Math.max(...yearlyGranted.map((y) => y.total));
  const officers = boardMembers.filter((m) => m.type === "officer");
  const members = boardMembers.filter((m) => m.type === "member");
  const students = boardMembers.filter((m) => m.type === "student");

  return (
    <>
      <section className="page-hero theme-crimson-deep">
        <div className="wrap">
          <div className="section-eyebrow">Our mission</div>
          <h1>
            <em>Empowering</em> our teachers.
            <br />
            <em>Enriching</em> our students.
            <br />
            <em>Enhancing</em> our schools.
          </h1>
          <p className="lede">
            Dedicated to supporting, enhancing, and enriching the Dedham Public
            Schools since 1995 — funded by Dedham, for Dedham.
          </p>
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow">The mission in three parts</div>
          <h2 className="section-heading">
            What we <em>actually do</em>.
          </h2>
          <div className="mission-triplet">
            <article className="mission-triplet-card accent-blue">
              <div className="mission-triplet-num">01</div>
              <h3>Raise money.</h3>
              <p>
                DEF is funded by Dedham, for Dedham. Events like the DEF Dash
                5K and the Spelling Bee, plus year-round donations and Dedham
                business sponsorships, fund every grant we award. The whole
                town is part of how this works.
              </p>
              <a href="/get-involved" className="mission-triplet-link">
                Get involved →
              </a>
            </article>
            <article className="mission-triplet-card accent-green">
              <div className="mission-triplet-num">02</div>
              <h3>Grant awards.</h3>
              <p>
                Three grant cycles a year fund the classroom ideas DPS budgets
                can&apos;t reach — author visits, robotics kits, hydroponic
                gardens, Shakespeare for middle schoolers, sensory tools for
                inclusion classrooms. Plus our annual{" "}
                <a
                  href="/grants/stec-award"
                  style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  Christine Stec Rock Star Educator Award
                </a>
                , recognizing a Dedham educator who makes students feel like
                rock stars. Teachers apply directly — no committee in Boston,
                no bureaucracy.
              </p>
              <a href="/grants" className="mission-triplet-link">
                See how grants work →
              </a>
            </article>
            <article className="mission-triplet-card accent-gold">
              <div className="mission-triplet-num">03</div>
              <h3>Create opportunity.</h3>
              <p>
                Programs and experiences that don&apos;t already exist within
                the classroom. Around 3,200 Dedham students reach DEF-funded
                programs each year, K–12. Every grant we award is judged on
                one question: what changes for a kid in a Dedham classroom
                because of this? The moments that turn into lifelong memories
                — those are the ones we fund.
              </p>
              <a href="/grants/awarded" className="mission-triplet-link">
                See what we&apos;ve funded →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow">Then & now</div>
          <h2 className="section-heading">
            How it started, <em>how it&apos;s going</em>.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: "var(--ink-soft)",
              fontSize: 17,
              maxWidth: 640,
            }}
          >
            Thirty years of grants. Same all-volunteer model. Different scale.
            Tap either card below to see how DEF started — and how it&apos;s
            still going.
          </p>
          <MissionThenNow />
        </div>
      </section>

      <section className="about-section alt">
        <div className="wrap">
          <div className="section-eyebrow">By the numbers</div>
          <h2 className="section-heading">
            What we&apos;ve <em>granted</em>, year by year.
          </h2>
          <div className="yearly-grid">
            {yearlyGranted.map((row) => (
              <div key={row.year} className="yearly-row">
                <div className="yearly-year">{row.year}</div>
                <div className="yearly-track">
                  <div
                    className="yearly-fill"
                    style={{ width: `${(row.total / maxYearly) * 100}%` }}
                  />
                </div>
                <div className="yearly-amount">{formatCurrency(row.total)}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, color: "var(--muted)", fontSize: 14 }}>
            {/* TODO: verify with treasurer */}
            Annual totals reflect grants paid out in each fiscal year. Final
            FY2025 numbers pending audit.
          </p>
        </div>
      </section>

      <section className="about-section" id="board">
        <div className="wrap">
          <div className="section-eyebrow">The board</div>
          <h2 className="section-heading">
            An all-volunteer board of <em>your neighbors</em>.
          </h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", maxWidth: 640 }}>
            DEF has no paid staff. Every grant decision, every fundraising
            event, every dollar reimbursed is handled by volunteer board members
            who live and work in Dedham.
          </p>

          <h3 style={{ marginTop: 48, marginBottom: 8, fontFamily: "var(--serif)", fontWeight: 500, fontSize: 20 }}>
            Officers
          </h3>
          <div className="board-grid">
            {officers.map((m, i) => (
              <BoardCard key={m.name} member={m} idx={i} />
            ))}
          </div>

          <h3 style={{ marginTop: 64, marginBottom: 8, fontFamily: "var(--serif)", fontWeight: 500, fontSize: 20 }}>
            Members
          </h3>
          <div className="board-grid">
            {members.map((m, i) => (
              <BoardCard key={m.name} member={m} idx={i + 4} />
            ))}
          </div>

          {students.length > 0 && (
            <>
              <h3 style={{ marginTop: 64, marginBottom: 8, fontFamily: "var(--serif)", fontWeight: 500, fontSize: 20 }}>
                Student Board
              </h3>
              <div className="board-grid">
                {students.map((m, i) => (
                  <BoardCard key={m.name} member={m} idx={i + 18} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="about-section alt" id="reports">
        <div className="wrap">
          <div className="section-eyebrow">Financials</div>
          <h2 className="section-heading">Annual reports.</h2>
          <div className="empty-state" style={{ marginTop: 32 }}>
            <h3>Annual reports coming Spring 2026.</h3>
            <p>
              We&apos;re assembling our 2025 annual report and republishing past
              990s on this page. For specific numbers in the meantime, email{" "}
              <a href="mailto:treasurer@dedhameducationfoundation.org" style={{ color: "var(--crimson)" }}>
                our treasurer
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="section-heading" style={{ marginBottom: 24 }}>
            Want to join the board?
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, marginBottom: 24 }}>
            We add board members in rolling waves. If you live in Dedham and want
            to help shape the next decade of DEF, we want to hear from you.
          </p>
          <Link href="/contact?inquiry=board" className="btn btn-primary">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}

function BoardCard({
  member,
  idx,
}: {
  member: { name: string; role?: string };
  idx: number;
}) {
  const color = AVATAR_CYCLE[idx % AVATAR_CYCLE.length];
  return (
    <div className="board-card">
      <div className={`avatar-circle ${color}`} aria-hidden="true">
        {initials(member.name)}
      </div>
      <div>
        {member.role && <div className="board-role">{member.role}</div>}
        <div className="board-name">{member.name}</div>
      </div>
    </div>
  );
}
