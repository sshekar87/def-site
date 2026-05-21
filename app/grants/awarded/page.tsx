import type { Metadata } from "next";
import { AwardedClient } from "./AwardedClient";
import { awardedGrants } from "@/content/awarded-grants";
import { formatCurrency } from "@/content/grants";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Awarded grants",
  description:
    "Every grant DEF has awarded across Dedham Public Schools, searchable by year, school, and category.",
};

export default function AwardedGrantsPage() {
  const total = awardedGrants.reduce((sum, g) => sum + g.amount, 0);
  const latestYear = Math.max(...awardedGrants.map((g) => g.year));
  const latestYearCount = awardedGrants.filter((g) => g.year === latestYear).length;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-eyebrow mark-square">Awarded grants</div>
          <h1>
            Every grant. <em>Every classroom.</em>
          </h1>
          <p className="lede">
            More than {siteConfig.founded < 2026 ? "$1M" : formatCurrency(total)} granted
            to Dedham Public Schools since 1995. {latestYearCount} grants funded in {latestYear}{" "}
            alone.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <AwardedClient />
        </div>
      </section>
    </>
  );
}
