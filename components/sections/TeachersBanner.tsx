import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cycles, formatCycleDate } from "@/content/cycles";
import { formatCurrency } from "@/content/grants";

export function TeachersBanner() {
  // The teachers banner only surfaces the two flagship grant categories
  // teachers ask about most: Innovation (Spring) and Enrichment (Fall).
  // Nancy Bradley still has a full home on the /grants page.
  const innovation = cycles.find((c) => c.grantType === "innovation");
  const enrichment = cycles.find((c) => c.grantType === "enrichment");

  return (
    <section className="teachers" id="for-teachers">
      <div className="wrap">
        <div className="teachers-inner">
          <div>
            <div className="teachers-eyebrow">For DPS Teachers</div>
            <h2>
              Have an idea? <br />
              We want to fund it.
            </h2>
            <p>
              Two grant cycles a year. Applications take about 20 minutes
              and go to a Dedham board — there&apos;s no committee in Boston
              to wait on.
            </p>
            <Link href="/grants" className="btn btn-on-green">
              Apply for a grant
              <ArrowRight size={18} className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
          <div className="teachers-deadline">
            {innovation && (
              <div className="deadline-card reveal">
                <div className="deadline-label">
                  {innovation.status === "open" ? "Open now" : "Spring cycle"}
                </div>
                <div className="deadline-name">Innovation Grant</div>
                <div className="deadline-date">
                  {innovation.status === "open"
                    ? `Applications due ${formatCycleDate(innovation.closesOn)}`
                    : `Cycle opens ${formatCycleDate(innovation.opensOn)}`}
                </div>
                <div className="deadline-detail">
                  Up to {formatCurrency(innovation.maxAward)} per grant.
                </div>
                <div className="deadline-detail">
                  New pilot programs and bigger classroom ideas.
                </div>
              </div>
            )}
            {enrichment && (
              <div className="deadline-card reveal">
                <div className="deadline-label">
                  {enrichment.status === "open" ? "Open now" : "Fall cycle"}
                </div>
                <div className="deadline-name">Enrichment Grant</div>
                <div className="deadline-date">
                  {enrichment.status === "open"
                    ? `Applications due ${formatCycleDate(enrichment.closesOn)}`
                    : `Cycle opens ${formatCycleDate(enrichment.opensOn)}`}
                </div>
                <div className="deadline-detail">
                  Up to {formatCurrency(enrichment.maxAward)} per grant.
                </div>
                <div className="deadline-detail">
                  Author visits, museum trips, live performances.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
