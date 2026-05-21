import Link from "next/link";
import { awardedGrants, schoolDisplay, categoryDisplay } from "@/content/awarded-grants";
import { formatCurrency } from "@/content/grants";

// Show the most recent grants in a horizontal scroll carousel. Sorted by year
// descending, then alphabetical so the layout is stable across builds.
const showcase = [...awardedGrants]
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
  .slice(0, 8);

export function RecentGrants() {
  return (
    <section className="grants" id="recent-grants">
      <div className="wrap">
        <div className="grants-header">
          <div>
            <div className="section-eyebrow mark-square">Recent grants in action</div>
            <h2 className="section-heading">
              What your dollars <em>actually fund</em>.
            </h2>
          </div>
          <Link href="/grants/awarded" className="grants-link">
            See all awarded grants →
          </Link>
        </div>
      </div>
      <div className="grants-carousel-wrap">
        <div
          className="grants-carousel"
          role="region"
          aria-label="Recent grants — scroll to see more"
          tabIndex={0}
        >
          {showcase.map((g) => (
            <article key={g.id} className={`grant-card-scroll cat-${g.category}`}>
              <div className="scroll-meta">
                <span className="scroll-pill">{categoryDisplay[g.category]}</span>
                <span className="scroll-amount">{formatCurrency(g.amount)}</span>
              </div>
              <h3 className="scroll-title">{g.title}</h3>
              {g.description && <p className="scroll-desc">{g.description}</p>}
              <div className="scroll-foot">
                <span>{schoolDisplay[g.school].name}</span>
                {g.teacher && <span>{g.teacher}</span>}
                {g.grade && <span>{g.grade}</span>}
                <span>
                  {g.cycle === "spring" ? "Spring" : "Fall"} {g.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="wrap">
        <div className="grants-scroll-hint" aria-hidden="true">
          Scroll for more →
        </div>
      </div>
    </section>
  );
}
