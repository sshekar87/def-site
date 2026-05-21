import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const ROUTES = [
  "/",
  "/mission",
  "/grants",
  "/grants/awarded",
  "/grants/reimbursements",
  "/grants/stec-award",
  "/events/dash",
  "/events/spelling-bee",
  "/donate",
  "/contact",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/grants") || path === "/donate" ? 0.8 : 0.6,
  }));
}
