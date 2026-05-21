"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

const PRESETS = [25, 50, 100, 250, 500] as const;

export function DonateCTA() {
  const [selected, setSelected] = useState<number | "other">(100);

  const ctaLabel =
    selected === "other"
      ? "Give a custom amount today"
      : `Give $${selected} today`;

  // PayPal.me uses path-style amounts: paypal.me/<handle>/<amount>
  const ctaHref =
    selected === "other"
      ? "/donate"
      : `${siteConfig.paypalUrl}/${selected}`;

  return (
    <section className="cta" id="donate">
      <div className="wrap">
        <div className="section-eyebrow center mark-triangle">Make a donation</div>
        <h2>
          Every dollar funds <em>a program</em> a Dedham student will remember.
        </h2>
        <div className="cta-amounts" role="radiogroup" aria-label="Donation amount">
          {PRESETS.map((amt) => (
            <button
              key={amt}
              type="button"
              role="radio"
              aria-checked={selected === amt}
              className={cn("amount-btn", selected === amt && "active")}
              onClick={() => setSelected(amt)}
            >
              ${amt}
            </button>
          ))}
          <button
            type="button"
            role="radio"
            aria-checked={selected === "other"}
            className={cn("amount-btn", selected === "other" && "active")}
            onClick={() => setSelected("other")}
          >
            Other
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 16,
          }}
        >
          <Link
            href={ctaHref}
            className="btn btn-primary"
            target={selected === "other" ? undefined : "_blank"}
            rel={selected === "other" ? undefined : "noopener noreferrer"}
          >
            {ctaLabel}
          </Link>
          <Link href="/donate#monthly" className="btn btn-secondary">
            Make it monthly
          </Link>
        </div>
        <p className="cta-note">
          DEF is a 501(c)(3) nonprofit. Your gift is tax-deductible to the
          fullest extent of the law.
        </p>
      </div>
    </section>
  );
}
