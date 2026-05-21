import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Christine Stec Award — old typo URL and legacy paths
      {
        source: "/chrstine-stec-rock-star-educator-award",
        destination: "/grants/stec-award",
        permanent: true,
      },
      {
        source: "/christine-stec-award",
        destination: "/grants/stec-award",
        permanent: true,
      },

      // About / org pages
      // /about was the original route; renamed to /mission to match the nav label.
      { source: "/about", destination: "/mission", permanent: true },
      { source: "/about/:path*", destination: "/mission/:path*", permanent: true },
      { source: "/our-mission", destination: "/mission", permanent: true },
      {
        source: "/board-of-directors",
        destination: "/mission#board",
        permanent: true,
      },
      { source: "/contact-us", destination: "/contact", permanent: true },

      // Grants
      { source: "/grantsoverview", destination: "/grants", permanent: true },
      {
        source: "/grantreimbursements",
        destination: "/grants/reimbursements",
        permanent: true,
      },
      {
        source: "/awarded-grants",
        destination: "/grants/awarded",
        permanent: true,
      },

      // Events
      { source: "/def-dash-5k", destination: "/events/dash", permanent: true },
      {
        source: "/def-dash-map",
        destination: "/events/dash#course",
        permanent: true,
      },
      {
        source: "/def-dash-pictures",
        destination: "/events/dash#photos",
        permanent: true,
      },
      {
        source: "/spelling-bee",
        destination: "/events/spelling-bee",
        permanent: true,
      },

      // Donor recognition / community
      { source: "/thanksdef", destination: "/donate", permanent: true },
      {
        source: "/dpssnowdayraffle",
        destination: "/events/dash",
        permanent: false,
      },

      // Legacy login (remove after confirming usage with Sukesh)
      {
        source: "/def-board-login-1",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
