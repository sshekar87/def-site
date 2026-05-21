import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <div className="hero-tag">
            Empowering Dedham Public Schools teachers since 1995
          </div>
          <h1>
            Funding the moments that <em>enrich</em>
            {" "}
            learning.
          </h1>
          <p className="hero-sub">
            For 30 years, we&apos;ve funded teacher-led programs that public
            school budgets can&apos;t reach — from author visits and live theater to
            robotics and field trips that spark something lasting.
          </p>
          <div className="hero-ctas">
            <Link href="/donate" className="btn btn-primary">
              Donate now
              <ArrowRight size={18} className="btn-arrow" aria-hidden="true" />
            </Link>
            <Link href="/grants/awarded" className="btn btn-secondary">
              See what we fund
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card-1">
            <div className="hero-card-content">
              <div className="hero-card-label">Spring 2026 · Innovation Grant</div>
              <div className="hero-card-title">
                &ldquo;My students built a working hydroponic garden.&rdquo;
              </div>
            </div>
          </div>
          <div className="hero-card hero-card-2">
            <div>
              <div className="hero-card-label" style={{ color: "var(--ink)", opacity: 0.7 }}>
                Awarded
              </div>
              <div className="hero-card-big-num">$44K</div>
            </div>
            <div className="hero-card-small-text">
              Fall 2024 enrichment grants funded across all DPS schools
            </div>
          </div>
          <div className="hero-card hero-card-3">
            <div>
              <div className="hero-card-label">2024 Rock Star Educator</div>
              <div className="hero-card-big-num" style={{ fontSize: 36 }}>
                Maureen B.
              </div>
            </div>
          </div>
          <div className="sticker">
            Spring
            <br />
            cycle
            <br />
            <em>NOW</em>
            <br />
            open
          </div>
        </div>
      </div>
    </section>
  );
}
