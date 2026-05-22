export const siteConfig = {
  name: "Dedham Education Foundation",
  shortName: "DEF",
  tagline: "Funding the moments that enrich learning.",
  description:
    "For 30 years, DEF has funded teacher-led programs that public school budgets can't reach — from author visits to robotics to live theater.",
  url: "https://dedhameducationfoundation.org",
  ein: "22-3135168",
  founded: 1995,
  paypalUrl: "https://www.paypal.com/paypalme/DedhamEdFoundation",
  paypalHandle: "paypal.me/DedhamEdFoundation",
  venmoUrl: "https://venmo.com/u/DedhamEducation-Foundation",
  venmoHandle: "@DedhamEducation-Foundation",
  emails: {
    info: "info@dedhameducationfoundation.org",
    grants: "grants@dedhameducationfoundation.org",
    treasurer: "treasurer@dedhameducationfoundation.org",
  },
  social: {
    instagram: "https://www.instagram.com/dedhameducationfoundation",
    facebook: "https://www.facebook.com/DedhamEducationFoundation",
  },
};

// Order matters — left-to-right in the nav. `children` triggers a dropdown.
export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const navLinks: NavLink[] = [
  { href: "/events/spelling-bee", label: "Spelling Bee" },
  { href: "/events/dash", label: "DEF Dash" },
  {
    href: "/grants",
    label: "Grants",
    children: [
      // Apply + reimbursement live on one page now, so one nav link covers it.
      { href: "/grants", label: "How to apply" },
      { href: "/grants/awarded", label: "Awarded grants" },
      { href: "/grants/stec-award", label: "Stec Educator Award" },
    ],
  },
  { href: "/mission", label: "Mission" },
  { href: "/get-involved", label: "Get Involved" },
];
