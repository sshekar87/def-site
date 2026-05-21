import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/site/TopBar";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Analytics } from "@/components/site/Analytics";
import { siteConfig } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Resolve the canonical site URL for metadata + OG image links.
//   1. Explicit NEXT_PUBLIC_SITE_URL wins (set this once DNS is flipped to
//      dedhameducationfoundation.org).
//   2. VERCEL_PROJECT_PRODUCTION_URL — the *stable public* production alias
//      (def-site.vercel.app). This MUST be used instead of VERCEL_URL: the
//      latter is the per-deployment host (def-site-<hash>.vercel.app) which
//      sits behind Vercel Deployment Protection (401). An og:image pointing
//      at a 401'd host means iMessage/Slack/LinkedIn show no preview image.
//   3. VERCEL_URL — last-resort for non-production preview builds.
//   4. Local fallback: siteConfig.url.
const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : siteConfig.url);

const ogTitle = `${siteConfig.name} — ${siteConfig.tagline}`;
const ogDescription =
  "Dedham's volunteer-run education foundation. $500K+ granted to DPS teachers since 1995, K–12, across all six Dedham schools.";

export const metadata: Metadata = {
  metadataBase: new URL(resolvedSiteUrl),
  title: {
    default: ogTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: ogDescription,
  applicationName: siteConfig.name,
  keywords: [
    "Dedham Education Foundation",
    "Dedham Public Schools",
    "DPS grants",
    "DEF Dash",
    "DEF Spelling Bee",
    "Christine Stec Award",
    "Massachusetts nonprofit",
    "education grants",
    "teacher grants",
  ],
  authors: [{ name: siteConfig.name, url: resolvedSiteUrl }],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: ogTitle,
    description: ogDescription,
    url: resolvedSiteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: ogTitle,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <TopBar />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
