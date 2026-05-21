export type BoardMember = {
  name: string;
  role?: string;
  type: "officer" | "member" | "student";
};

export const boardMembers: BoardMember[] = [
  { name: "April (Wilmar) Dasuta", role: "President", type: "officer" },
  { name: "Carolyn Smith", role: "Vice President", type: "officer" },
  { name: "Julia Prentice", role: "Treasurer", type: "officer" },
  { name: "Carolann Adams", role: "Secretary", type: "officer" },
  { name: "Stephen Acosta", type: "member" },
  { name: "Christina Alejandre", type: "member" },
  { name: "Ulysses Andrews", type: "member" },
  { name: "Sheneya Carter", type: "member" },
  { name: "Monica De Winter", type: "member" },
  { name: "Catrell Booker Hoban", type: "member" },
  { name: "Justin Humphreys", type: "member" },
  { name: "Tara Ikenouye", type: "member" },
  { name: "Trish Kelleher", type: "member" },
  { name: "Paul McMurtry", type: "member" },
  { name: "Clarissa Robyn", type: "member" },
  { name: "Sukesh Shekar", type: "member" },
  { name: "Sandy Sicard", type: "member" },
  { name: "Emily Walton", type: "member" },
  { name: "Rihanna Rhau", role: "Student Board", type: "student" },
  { name: "Thomas Vurmo", role: "Student Board", type: "student" },
  { name: "Sofia Vergara", role: "Student Board", type: "student" },
];

// Annual granted totals — TODO: verify with treasurer
export const yearlyGranted: { year: number; total: number }[] = [
  { year: 2020, total: 38000 },
  { year: 2021, total: 41500 },
  { year: 2022, total: 47000 },
  { year: 2023, total: 52000 },
  { year: 2024, total: 58000 },
  { year: 2025, total: 64000 },
];
