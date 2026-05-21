import Link from "next/link";
import { siteConfig } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-9h3l1-4h-4V7c0-1 .5-2 2-2h2V1.5C16 1.5 14.5 1 13 1c-3 0-5 2-5 5v3H5v4h3v9h5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

const columns: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "About",
    links: [
      { href: "/mission", label: "Our mission" },
      { href: "/mission#board", label: "Board & volunteers" },
      { href: "/mission#reports", label: "Annual reports" },
      { href: "/get-involved", label: "Get involved" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Events",
    links: [
      { href: "/events/dash", label: "DEF Dash 5K" },
      { href: "/events/spelling-bee", label: "DEF Spelling Bee" },
      { href: "/contact?inquiry=sponsor-2026", label: "Sponsor an event" },
    ],
  },
  {
    heading: "Grants",
    links: [
      { href: "/grants", label: "How to apply" },
      { href: "/grants/awarded", label: "Awarded grants" },
      { href: "/grants/reimbursements", label: "Get reimbursed" },
      { href: "/grants/stec-award", label: "Stec Award" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          {columns.map((col) => (
            <div key={col.heading} className="footer-col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/donate"
            className="footer-donate-card"
            aria-label="Donate to the Dedham Education Foundation"
          >
            <span className="footer-donate-eyebrow">Make a gift</span>
            <span className="footer-donate-title">Donate</span>
            <span className="footer-donate-sub">
              Every dollar funds the next grant cycle. No overhead — we&apos;re
              all-volunteer.
            </span>
            <span className="footer-donate-arrow">
              Give now <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>

        <div className="footer-brand-row">
          <div className="footer-brand-info">
            <div className="logo-mark" aria-hidden="true">D</div>
            <div>
              <h3>{siteConfig.name}</h3>
              <p>
                Dedicated to supporting, enhancing, and enriching the Dedham
                Public Schools since {siteConfig.founded}.
              </p>
            </div>
          </div>
          <div className="ein">EIN: {siteConfig.ein} · 501(c)(3)</div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="footer-social">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a href={`mailto:${siteConfig.emails.info}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
          <div className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            {" · "}
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
