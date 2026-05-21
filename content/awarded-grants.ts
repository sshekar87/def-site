export type AwardedCategory =
  | "enrichment"
  | "innovation"
  | "nancy-bradley"
  | "stec-award";

export type SchoolSlug =
  | "avery"
  | "oakdale"
  | "riverdale"
  | "greenlodge"
  | "dms"
  | "dhs"
  | "district";

export type AwardedGrant = {
  id: string;
  year: number;
  cycle: "fall" | "spring";
  category: AwardedCategory;
  title: string;
  description?: string;
  amount: number;
  school: SchoolSlug;
  teacher?: string;
  grade?: string;
  link?: string;
};

export const schoolDisplay: Record<
  SchoolSlug,
  { name: string; tone: "crimson" | "gold" | "blue" | "green" | "mint" | "ink" | "muted" }
> = {
  avery: { name: "Avery Elementary", tone: "crimson" },
  oakdale: { name: "Oakdale Elementary", tone: "gold" },
  riverdale: { name: "Riverdale Elementary", tone: "blue" },
  greenlodge: { name: "Greenlodge Elementary", tone: "green" },
  dms: { name: "Dedham Middle School", tone: "mint" },
  dhs: { name: "Dedham High School", tone: "ink" },
  district: { name: "District-wide", tone: "muted" },
};

export const categoryDisplay: Record<AwardedCategory, string> = {
  enrichment: "Enrichment",
  innovation: "Innovation",
  "nancy-bradley": "Nancy Bradley",
  "stec-award": "Stec Award",
};

// TODO: from Sukesh transcription — full list from current site + Fall 2024 screenshots
export const awardedGrants: AwardedGrant[] = [
  {
    id: "hydroponic-avery-2026",
    year: 2026,
    cycle: "spring",
    category: "innovation",
    title: "Hydroponic garden in a 3rd grade classroom",
    description:
      "Mr. Patel's class designed, built, and ran a closed-loop hydroponic system across the school year — every student grew lettuce, basil, and accountability.",
    amount: 3800,
    school: "avery",
    teacher: "Mr. Patel",
    grade: "Grade 3",
  },
  {
    id: "shakespeare-dms-2025",
    year: 2025,
    cycle: "fall",
    category: "enrichment",
    title: "Romeo & Juliet at DMS",
    description:
      "Commonwealth Shakespeare brought a touring production of Romeo & Juliet to the DMS auditorium, paired with two in-class workshops on Elizabethan English.",
    amount: 2400,
    school: "dms",
    teacher: "Ms. Coen",
    grade: "Grades 7–8",
  },
  {
    id: "french-festival-dhs-2025",
    year: 2025,
    cycle: "fall",
    category: "nancy-bradley",
    title: "French film festival & cultural exchange",
    description:
      "Three contemporary French films screened with francophone discussion guides; DHS Level 3 and 4 French classes hosted students from a sister school in Lyon.",
    amount: 1950,
    school: "dhs",
    teacher: "Mme. Laurent",
    grade: "Grades 10–12",
  },
  {
    id: "rock-detectives-oakdale-2024",
    year: 2024,
    cycle: "fall",
    category: "enrichment",
    title: "Rock Detectives",
    description:
      "A hands-on geology unit with field samples from the Boston Basin — every Oakdale 4th grader took home a labeled specimen tray.",
    amount: 1800,
    school: "oakdale",
    teacher: "Mrs. Stec",
    grade: "Grade 4",
  },
  {
    id: "tide-pools-avery-2024",
    year: 2024,
    cycle: "spring",
    category: "enrichment",
    title: "Tide Pools",
    description:
      "Avery 1st graders visited Nahant for a guided tide-pool exploration paired with a classroom marine-life unit.",
    amount: 2100,
    school: "avery",
    teacher: "Mrs. Lopez",
    grade: "Grade 1",
  },
  {
    id: "chhandika-elementary-2024",
    year: 2024,
    cycle: "fall",
    category: "nancy-bradley",
    title: "Chhandika Indian classical dance residency",
    description:
      "A two-week dance residency across all four Dedham elementary schools, culminating in joint performances at the Endicott Estate.",
    amount: 3200,
    school: "district",
    teacher: "PE & Arts teams",
  },
  {
    id: "nano-brothers-greenlodge-2023",
    year: 2023,
    cycle: "spring",
    category: "enrichment",
    title: "Nano Brothers at Greenlodge",
    description:
      "Museum of Science brought their Nano Brothers juggling-science show to the K–2 hallway, plus follow-up science kits for every classroom.",
    amount: 1650,
    school: "greenlodge",
    teacher: "Ms. Reynolds",
    grade: "Grades K–2",
  },
  {
    id: "sensory-tools-riverdale-2023",
    year: 2023,
    cycle: "spring",
    category: "innovation",
    title: "Sensory tools for the inclusion classroom",
    description:
      "A complete sensory-tools kit (weighted lap pads, fidget tools, noise-canceling headphones) for Riverdale's inclusion classrooms.",
    amount: 2800,
    school: "riverdale",
    teacher: "Ms. Reilly",
    grade: "Grades K–5",
  },
  {
    id: "robotics-club-dms-2024",
    year: 2024,
    cycle: "spring",
    category: "innovation",
    title: "After-school robotics club kit",
    description:
      "Two full LEGO Spike Prime sets and a year of consumables for the new DMS after-school robotics club — 24 sixth and seventh graders served.",
    amount: 3400,
    school: "dms",
    teacher: "Mr. Yamada",
    grade: "Grades 6–7",
  },
  {
    id: "stec-2025-sheehy",
    year: 2025,
    cycle: "spring",
    category: "stec-award",
    title: "Christine Stec Rock Star Educator Award — Elaine Sheehy",
    description:
      "Selected from 31 nominated educators. Recognized for multicultural counseling supporting refugee students, a free soccer club run with DHS volunteers, the Girls' LEAP self-defense program, and the “Caught Following the Riverdale Core Values” initiative.",
    amount: 500,
    school: "riverdale",
    teacher: "Elaine Sheehy",
  },
  {
    id: "stec-2024-blazejewski",
    year: 2024,
    cycle: "spring",
    category: "stec-award",
    title: "Christine Stec Rock Star Educator Award — Maureen Blazejewski",
    description:
      "Selected from 27 nominated educators. Recognized for thoughtful pre-planning to support every learner — magnetic skeleton system, 3D lungs model, recorded read-alouds, and a Student of the Week tradition celebrating each child's family, culture, and interests.",
    amount: 500,
    school: "avery",
    teacher: "Maureen Blazejewski",
  },
];
