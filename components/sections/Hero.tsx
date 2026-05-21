"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

// Each tile keeps its own content. Clicking just shuffles which one sits
// on top — no text swapping. Crimson = program moment. Gold = funding stat.
// Green = Stec Educator Award.

export function Hero() {
  const [frontIdx, setFrontIdx] = useState(0);

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
          {/* Crimson — grant program moment (always). */}
          <button
            type="button"
            className={cn(
              "hero-card hero-card-1 hero-card-button",
              frontIdx === 0 && "active-front",
            )}
            onClick={() => setFrontIdx(0)}
            aria-label="Innovation Grant moment — bring to front"
            aria-pressed={frontIdx === 0}
          >
            <div className="hero-card-content">
              <div className="hero-card-label">
                Spring 2026 · Innovation Grant
              </div>
              <div className="hero-card-title">
                My students built a working hydroponic garden.
              </div>
              <div className="hero-card-detail">
                Avery Elementary · Mr. Patel · 3rd grade
              </div>
            </div>
          </button>

          {/* Gold — funding stat (always). */}
          <button
            type="button"
            className={cn(
              "hero-card hero-card-2 hero-card-button",
              frontIdx === 1 && "active-front",
            )}
            onClick={() => setFrontIdx(1)}
            aria-label="Fall 2024 awarded funding — bring to front"
            aria-pressed={frontIdx === 1}
          >
            <div>
              <div
                className="hero-card-label"
                style={{ color: "var(--ink)", opacity: 0.7 }}
              >
                Fall 2024 · Awarded
              </div>
              <div className="hero-card-big-num">$44K</div>
            </div>
            <div className="hero-card-small-text">
              Enrichment grants funded across all DPS schools
            </div>
          </button>

          {/* Green — Stec Educator Award (static). */}
          <div
            className="hero-card hero-card-3"
            aria-label="2025 Stec Educator Award — Elaine Sheehy"
          >
            <div>
              <div className="hero-card-label">2025 Stec Educator Award</div>
              <div className="hero-card-big-num" style={{ fontSize: 28 }}>
                Elaine Sheehy
              </div>
            </div>
            <div className="hero-card-small-text">
              Riverdale school counselor
            </div>
          </div>

          {/* Event shape stickers — non-overlapping with the gold tile. */}
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
