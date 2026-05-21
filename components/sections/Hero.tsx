"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Two grant moments that toggle between the front (large crimson) and
// middle (medium gold) tiles. Click either tile to swap which sits in front.
const grantTiles = [
  {
    label: "Spring 2026 · Innovation Grant",
    headline: "My students built a working hydroponic garden.",
    detail: "Avery Elementary · Mr. Patel · 3rd grade",
  },
  {
    label: "Fall 2024 · Awarded",
    headline: "$44K",
    detail: "Enrichment grants funded across all DPS schools",
  },
];

// Fixed: small green tile showcases the current Stec Rock Star Educator.
const stecAward = {
  label: "2025 Stec Educator Award",
  headline: "Elaine Sheehy",
  detail: "Riverdale school counselor",
};

export function Hero() {
  const [frontIdx, setFrontIdx] = useState(0);
  const front = grantTiles[frontIdx];
  const back = grantTiles[1 - frontIdx];
  const swap = () => setFrontIdx((i) => (i === 0 ? 1 : 0));

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

        <div className="hero-visual">
          {/* Slot 0: large crimson tile — front-of-mind grant moment */}
          <button
            type="button"
            className="hero-card hero-card-1 hero-card-button"
            onClick={swap}
            aria-label={`Grant moment: ${front.headline}. Click to swap with the next moment.`}
          >
            <div className="hero-card-content">
              <div className="hero-card-label">{front.label}</div>
              <div className="hero-card-title">{front.headline}</div>
              {front.detail && (
                <div className="hero-card-detail">{front.detail}</div>
              )}
            </div>
          </button>

          {/* Slot 1: medium gold tile — second grant moment */}
          <button
            type="button"
            className="hero-card hero-card-2 hero-card-button"
            onClick={swap}
            aria-label={`Grant moment: ${back.headline}. Click to bring forward.`}
          >
            <div>
              <div
                className="hero-card-label"
                style={{ color: "var(--ink)", opacity: 0.7 }}
              >
                {back.label}
              </div>
              <div className="hero-card-big-num">{back.headline}</div>
            </div>
            <div className="hero-card-small-text">{back.detail}</div>
          </button>

          {/* Slot 2: small green tile — Stec Educator Award */}
          <div
            className="hero-card hero-card-3"
            aria-label={`${stecAward.label}: ${stecAward.headline}`}
          >
            <div>
              <div className="hero-card-label">{stecAward.label}</div>
              <div
                className="hero-card-big-num"
                style={{ fontSize: 28 }}
              >
                {stecAward.headline}
              </div>
            </div>
            <div className="hero-card-small-text">{stecAward.detail}</div>
          </div>

          {/* Event shape stickers — the trademark shapes for the two events */}
          <Link
            href="/events/dash"
            className="hero-sticker circle"
            aria-label="DEF Dash 5K — October 5"
          >
            <span className="sticker-mark">5K</span>
            <span className="sticker-foot">Oct 5</span>
          </Link>
          <Link
            href="/events/spelling-bee"
            className="hero-sticker hex"
            aria-label="DEF Spelling Bee — March 12"
          >
            <span className="sticker-mark">Bee</span>
            <span className="sticker-foot">Mar 12</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
