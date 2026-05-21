export type Sponsor = {
  name: string;
  url?: string;
  tier?: "title" | "gold" | "silver" | "supporter";
};

// Real sponsor logos go here once Sukesh transcribes them. Placeholder cards
// render automatically when this array is empty.
export const sponsors: Sponsor[] = [];

export const sponsorsCopy = {
  label: "Proudly supported by Dedham businesses",
  becomeSponsorCta: "Become a 2026 sponsor",
  becomeSponsorHref: "/contact?inquiry=sponsor-2026",
};
