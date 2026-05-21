import Link from "next/link";
import type { Metadata } from "next";
import { boardMembers, yearlyGranted } from "@/content/board";
import { formatCurrency } from "@/content/grants";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Funded by Dedham, for Dedham. Mission, board, financials, and 30-year history of the Dedham Education Foundation.",
};

const AVATAR_CYCLE = ["avatar-crimson", "avatar-gold", "avatar-blue", "avatar-green"] as const;

function initials(name: string): string {
  return name
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
      <section className="page-hero">
        <div className="wrap">
          <div className="section-eyebrow">Our mission</div>
          <h1>
            Funded by Dedham. <em>For Dedham.</em>
          </h1>
          <p className="lede">
            Thirty years of putting Dedham teachers&apos; best ideas into Dedham
            classrooms, paid for by Dedham neighbors and Dedham businesses.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="prose">
            <h2>How it started, how it&apos;s going.</h2>
            <p>
              In 1995, a small group of Dedham parents and teachers noticed
              something familiar: the most memorable moments in school — a
              touring theater company performing Shakespeare for 7th graders, a
              working scientist visiting a 4th grade classroom, a robotics kit
              that turned a quiet kid into the team captain — were exactly the
              kinds of things district budgets weren&apos;t built to fund.
            </p>
            <p>
              They started DEF as a way to fill that gap, fund it locally, and
              keep it honest. Three decades and more than a million dollars in
              grants later, we&apos;re still doing it the same way: an
              all-volunteer board, three grant cycles a year, and every dollar
              we raise going back into Dedham Public Schools.
            </p>
            <p>
              We are not a school. We are not the PTO. We are a 501(c)(3)
              public charity whose only job is to fund the moments that move
              the needle for Dedham students, year after year.
            </p>
          </div>
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
                Student board
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
