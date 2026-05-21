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

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{siteConfig.name}</h3>
            <p>
              Dedicated to supporting, enhancing, and enriching the Dedham Public
              Schools since {siteConfig.founded}.
            </p>
            <div className="ein">EIN: {siteConfig.ein} · 501(c)(3)</div>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/mission">Our story</Link></li>
              <li><Link href="/mission#board">Board &amp; volunteers</Link></li>
              <li><Link href="/mission#reports">Annual reports</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Grants</h4>
            <ul>
              <li><Link href="/grants">Apply for a grant</Link></li>
              <li><Link href="/grants/awarded">Awarded grants</Link></li>
              <li><Link href="/grants/reimbursements">Reimbursements</Link></li>
              <li><Link href="/grants/stec-award">Stec Award</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get involved</h4>
            <ul>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/events/dash">DEF Dash</Link></li>
              <li><Link href="/events/spelling-bee">Spelling Bee</Link></li>
              <li><Link href="/contact">Volunteer</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
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
