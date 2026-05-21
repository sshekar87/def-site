import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cycles, formatCycleDate } from "@/content/cycles";

export function TeachersBanner() {
  const openCycle = cycles.find((c) => c.status === "open");
  const upcomingCycles = cycles.filter((c) => c.status === "upcoming");

  return (
    <section className="teachers" id="for-teachers">
      <div className="wrap">
        <div className="teachers-inner">
          <div>
            <div className="teachers-eyebrow">For DPS Teachers</div>
            <h2>
              Have an idea? <br />
              We probably want to fund it.
            </h2>
            <p>
              Three grant cycles a year, three categories: Enrichment, Innovation,
              and the Nancy Bradley Memorial Fund for world languages and cultures.
              Applications take about 20 minutes.
            </p>
            <Link href="/grants" className="btn btn-on-green">
              Apply for a grant
              <ArrowRight size={18} className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
          <div className="teachers-deadline">
            {openCycle && (
              <div className="deadline-card reveal">
                <div className="deadline-label">Open now</div>
                <div className="deadline-name">{openCycle.name}</div>
                <div className="deadline-date">
                  Applications due {formatCycleDate(openCycle.closesOn)}
                </div>
              </div>
            )}
            {upcomingCycles.length > 0 && (
              <div className="deadline-card reveal">
                <div className="deadline-label">Coming this fall</div>
                <div className="deadline-name">
                  {upcomingCycles.map((c) => c.name.split(" ")[0]).join(" + ")}
                </div>
                <div className="deadline-date">
                  Cycle opens {formatCycleDate(upcomingCycles[0].opensOn)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
