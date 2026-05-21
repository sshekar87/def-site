import Link from "next/link";
import { featuredHomepageEvent } from "@/content/events";

export function EventFeature() {
  const evt = featuredHomepageEvent;
  return (
    <section className="event" id="events">
      <div className="wrap event-inner">
        <div className="event-visual">
          <div className="event-date">
            {evt.displayDate.month}
            <br />
            {evt.displayDate.day}
            <small>{evt.saveTheDateLabel}</small>
          </div>
          <div>
            <div className="event-name">{evt.name}</div>
            <div className="event-details">
              <span>{evt.location}</span>
              {evt.locationLine2 && <span>{evt.locationLine2}</span>}
            </div>
          </div>
        </div>
        <div>
          <div className="section-eyebrow mark-circle">Coming up</div>
          <h2 className="section-heading">
            Our biggest day of the year, <em>powered by you</em>.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-soft)",
              lineHeight: 1.6,
              margin: "32px 0",
            }}
          >
            {evt.shortPitch}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={`/events/${evt.slug}`} className="btn btn-primary">
              Learn more about the Dash
            </Link>
            <Link href={evt.sponsorUrl} className="btn btn-secondary">
              Become a sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
