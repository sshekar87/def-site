// Dedham Public Schools — the four elementary schools, plus middle and high.
// School site URLs are placeholders; replace with real district URLs.
export type DPSSchool = {
  slug: "avery" | "greenlodge" | "oakdale" | "riverdale" | "dms" | "dhs";
  name: string;
  level: "elementary" | "middle" | "high";
  url: string;
  accent: "crimson" | "green" | "gold" | "blue" | "mint" | "ink";
};

// One brand color per school so each tile is identifiably "theirs":
//   Avery → blue · Greenlodge → green · Oakdale → gold · Riverdale → crimson
// Middle and high schools sit outside the four-color elementary scheme.
export const dpsSchools: DPSSchool[] = [
  {
    slug: "avery",
    name: "Avery Elementary",
    level: "elementary",
    url: "https://www.dedham.k12.ma.us/Domain/8",
    accent: "blue",
  },
  {
    slug: "greenlodge",
    name: "Greenlodge Elementary",
    level: "elementary",
    url: "https://www.dedham.k12.ma.us/Domain/9",
    accent: "green",
  },
  {
    slug: "oakdale",
    name: "Oakdale Elementary",
    level: "elementary",
    url: "https://www.dedham.k12.ma.us/Domain/10",
    accent: "gold",
  },
  {
    slug: "riverdale",
    name: "Riverdale Elementary",
    level: "elementary",
    url: "https://www.dedham.k12.ma.us/Domain/11",
    accent: "crimson",
  },
  {
    slug: "dms",
    name: "Dedham Middle School",
    level: "middle",
    url: "https://www.dedham.k12.ma.us/Domain/12",
    accent: "mint",
  },
  {
    slug: "dhs",
    name: "Dedham High School",
    level: "high",
    url: "https://www.dedham.k12.ma.us/Domain/13",
    accent: "ink",
  },
];

export const elementarySchools = dpsSchools.filter((s) => s.level === "elementary");
