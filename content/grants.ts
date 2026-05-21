// Recent grants shown on the homepage. Awarded archive lives in `awarded-grants.ts`.
import type { GrantTypeSlug } from "./cycles";

export type RecentGrant = {
  id: string;
  category: GrantTypeSlug;
  amount: number;
  title: string;
  school: string;
  teacher: string;
  bg: "bg-1" | "bg-2" | "bg-3" | "bg-4";
  featured?: boolean;
};

export const recentGrants: RecentGrant[] = [
  {
    id: "hydroponic-avery-2026",
    category: "innovation",
    amount: 3800,
    title: "Hydroponic garden in a 3rd grade classroom",
    school: "Avery Elementary",
    teacher: "Mr. Patel",
    bg: "bg-1",
    featured: true,
  },
  {
    id: "shakespeare-dms-2025",
    category: "enrichment",
    amount: 2400,
    title: "Shakespeare in the schools",
    school: "Dedham Middle School",
    teacher: "Ms. Coen",
    bg: "bg-2",
  },
  {
    id: "french-festival-dhs-2025",
    category: "nancy-bradley",
    amount: 1950,
    title: "French film festival & cultural exchange",
    school: "Dedham High",
    teacher: "Mme. Laurent",
    bg: "bg-3",
  },
];

export const grantCategoryLabel: Record<GrantTypeSlug, string> = {
  enrichment: "Enrichment",
  innovation: "Innovation Grant",
  "nancy-bradley": "Nancy Bradley Fund",
};

export function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
