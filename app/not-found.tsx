import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <h2>That page got an extension.</h2>
      <p>
        We restructured the site this year, so a few pages have new addresses.
        Here&apos;s where you might be headed.
      </p>
      <div className="not-found-links">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/grants" className="btn btn-secondary">
          Apply for a grant
        </Link>
        <Link href="/donate" className="btn btn-secondary">
          Donate
        </Link>
        <Link href="/grants/awarded" className="btn btn-secondary">
          See what we&apos;ve funded
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact us
        </Link>
      </div>
    </section>
  );
}
