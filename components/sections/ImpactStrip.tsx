import { impactStats, impactCopy } from "@/content/impact";

export function ImpactStrip() {
  return (
    <section className="impact">
      <div className="wrap impact-inner">
        <div className="impact-eyebrow">{impactCopy.eyebrow}</div>
        <div className="impact-grid">
          <div className="impact-stat reveal">
            <span className="impact-num">
              $<span>{impactStats.totalGranted.replace(/^\$/, "")}</span>
            </span>
            <p className="impact-label">{impactCopy.totalGrantedLabel}</p>
          </div>
          <div className="impact-stat reveal">
            <span className="impact-num">
              <span>{impactStats.teachersFunded}</span>
            </span>
            <p className="impact-label">{impactCopy.teachersFundedLabel}</p>
          </div>
          <div className="impact-stat reveal">
            <span className="impact-num">
              <span>{impactStats.studentsReached}</span>
            </span>
            <p className="impact-label">{impactCopy.studentsReachedLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
