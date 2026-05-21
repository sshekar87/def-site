import Link from "next/link";
import { sponsors, sponsorsCopy } from "@/content/sponsors";

export function Sponsors() {
  // If no real sponsors yet, render 6 placeholder cards so the grid still feels right.
  const displaySponsors =
    sponsors.length > 0
      ? sponsors
      : Array.from({ length: 6 }, (_, i) => ({
          name: `Sponsor ${i + 1}`,
          url: undefined,
        }));

  return (
    <section className="sponsors">
      <div className="wrap">
        <div className="sponsors-label">{sponsorsCopy.label}</div>
        <div className="sponsors-grid">
          {displaySponsors.map((s) => {
            const inner = <span>{s.name}</span>;
            return s.url ? (
              <a
                key={s.name}
                href={s.url}
                className="sponsor-logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={s.name} className="sponsor-logo">
                {inner}
              </div>
            );
          })}
        </div>
        <Link href={sponsorsCopy.becomeSponsorHref} className="sponsors-link">
          {sponsorsCopy.becomeSponsorCta} →
        </Link>
      </div>
    </section>
  );
}
