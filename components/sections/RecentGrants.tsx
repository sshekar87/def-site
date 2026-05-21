import Link from "next/link";
import { recentGrants, grantCategoryLabel, formatCurrency } from "@/content/grants";
import { cn } from "@/lib/cn";

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
        <div className="grants-grid">
          {recentGrants.map((grant, i) => (
            <Link
              key={grant.id}
              href="/grants/awarded"
              className={cn(
                "grant-card reveal",
                `grant-${grant.bg}`,
                i === 0 && "featured",
              )}
              aria-label={`Grant: ${grant.title}`}
            >
              <div className="grant-content">
                <div className="grant-meta">
                  <span>{grantCategoryLabel[grant.category]}</span>
                  <span className="grant-amount">{formatCurrency(grant.amount)}</span>
                </div>
                <div className="grant-body">
                  <h3 className="grant-title">{grant.title}</h3>
                  <div className="grant-school">
                    {grant.school} · {grant.teacher}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
