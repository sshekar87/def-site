"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Era = "then" | "now";

const eras: Record<
  Era,
  {
    photoLabel: string;
    photoAccent: "crimson" | "gold";
    tabLabel: string;
    tabYears: string;
    label: string;
    headline: string;
    stats: { num: string; label: string }[];
    explainer: string[];
  }
> = {
  then: {
    photoLabel: "Photo coming · 1995",
    photoAccent: "crimson",
    tabLabel: "How it started",
    tabYears: "1995",
    label: "1995 · How it started",
    headline: "A small group of Dedham parents and teachers.",
    stats: [
      { num: "1", label: "founding board, all volunteer" },
      { num: "$10K", label: "first-year grants awarded" },
      { num: "3", label: "grant categories from day one" },
    ],
    explainer: [
      "In 1995, a small group of Dedham parents and teachers noticed something familiar: the most memorable moments in school — a touring theater company performing Shakespeare for 7th graders, a working scientist visiting a 4th grade classroom, a robotics kit that turned a quiet kid into the team captain — were exactly the kinds of things district budgets weren't built to fund.",
      "They started DEF as a way to fill that gap, fund it locally, and keep it honest.",
    ],
  },
  now: {
    photoLabel: "Photo coming · today",
    photoAccent: "gold",
    tabLabel: "How it's going",
    tabYears: "2026",
    label: "Today · How it's going",
    headline: "A 30-year community track record.",
    stats: [
      { num: "~25", label: "all-volunteer board members + student board" },
      { num: "$500K+", label: "granted to Dedham Public Schools since 1995" },
      { num: "3,200", label: "students reached each year, K–12" },
    ],
    explainer: [
      "Three decades and more than half a million dollars in grants later, we're still doing it the same way: an all-volunteer board, two grant cycles a year, and every dollar we raise going back into Dedham Public Schools.",
      "We are not a school. We are not the PTO. We are a 501(c)(3) public charity whose only job is to fund the moments that move the needle for Dedham students, year after year.",
    ],
  },
};

export function MissionThenNow() {
  // Default to "now" — the board sees the current scale on load and can
  // toggle back to 1995 for the origin story.
  const [era, setEra] = useState<Era>("now");
  const active = eras[era];

  return (
    <div className="mission-thennow">
      <div className="mission-thennow-tabs" role="tablist">
        {(Object.keys(eras) as Era[]).map((key) => {
          const data = eras[key];
          const selected = key === era;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selected}
              className={cn("mission-thennow-tab", selected && "active", `accent-${data.photoAccent}`)}
              onClick={() => setEra(key)}
            >
              <div className="mission-thennow-photo" aria-hidden="true">
                <span>{data.photoLabel}</span>
              </div>
              <div className="mission-thennow-tab-foot">
                <div className="mission-thennow-tab-label">{data.tabLabel}</div>
                <div className="mission-thennow-tab-years">{data.tabYears}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div
        className="mission-thennow-content"
        role="tabpanel"
        aria-live="polite"
        key={era}
      >
        <div className="mission-thennow-stats">
          {active.stats.map((stat) => (
            <div key={stat.label} className="mission-thennow-stat">
              <div className={cn("mission-thennow-stat-num", `accent-${active.photoAccent}`)}>
                {stat.num}
              </div>
              <div className="mission-thennow-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mission-thennow-explainer">
          <div className={cn("mission-thennow-eyebrow", `accent-${active.photoAccent}`)}>
            {active.label}
          </div>
          <h3>{active.headline}</h3>
          {active.explainer.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
