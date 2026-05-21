export type EventInfo = {
  id: string;
  slug: "dash" | "spelling-bee";
  name: string;
  date: string; // ISO
  displayDate: { month: string; day: string };
  saveTheDateLabel: string;
  location: string;
  locationLine2?: string;
  shortPitch: string;
  longDescription: string[];
  registerUrl: string;
  sponsorUrl: string;
  schedule?: { time: string; label: string }[];
  starSpellers?: {
    year: number;
    name: string;
    grade?: string;
    schoolSlug?: "avery" | "greenlodge" | "oakdale" | "riverdale";
  }[];
};

export const events: EventInfo[] = [
  {
    id: "dash-2026",
    slug: "dash",
    name: "The DEF Dash 5K",
    date: "2026-10-05",
    displayDate: { month: "Oct", day: "05" },
    saveTheDateLabel: "Save the date",
    location: "Endicott Estate · 8:30 AM",
    locationLine2: "Family-friendly · Strollers welcome",
    shortPitch:
      "Our biggest day of the year — bring the kids, bring the strollers, bring the dog. Stay for the cider donuts.",
    longDescription: [
      "The DEF Dash is what makes the grant cycles possible. Every registration, every sponsor, every cider donut sold goes back to Dedham teachers and Dedham classrooms.",
      "It's also one of the best days on the Dedham calendar — a chance to see neighbors, teachers, board members, and current and former DPS students all in one place, all in support of the same thing.",
    ],
    registerUrl: "https://runsignup.com/Race/MA/Dedham/DEFDash5K",
    sponsorUrl: "/contact?inquiry=sponsor-dash",
    schedule: [
      { time: "7:30 AM", label: "Registration & bib pickup opens" },
      { time: "8:15 AM", label: "Kids' fun run lineup at the gazebo" },
      { time: "8:30 AM", label: "5K race start" },
      { time: "9:30 AM", label: "Cider donuts, coffee, and finish-line awards" },
      { time: "10:00 AM", label: "Group photo on the Endicott lawn" },
    ],
  },
  {
    id: "spelling-bee-2026",
    slug: "spelling-bee",
    name: "DEF Spelling Bee",
    date: "2026-03-08",
    displayDate: { month: "Mar", day: "08" },
    saveTheDateLabel: "Coming soon",
    location: "Dedham Middle School Auditorium · 4:00 PM",
    locationLine2: "Grades 3–5 · All four elementary schools",
    shortPitch:
      "Dedham's elementary-school spelling championship. Each school sends its best 3rd–5th graders; one champion is crowned for the year.",
    longDescription: [
      "The DEF Spelling Bee is a community celebration of Dedham's youngest spellers. Every spring, 3rd-, 4th-, and 5th-grade champions from Avery, Greenlodge, Oakdale, and Riverdale compete onstage at Dedham Middle School.",
      "Each school runs its own classroom-level rounds in the weeks leading up; finalists advance to represent their school at the DEF stage. Parents, siblings, teachers, and neighbors fill the auditorium. Every dollar raised that afternoon goes directly into the next grant cycle.",
    ],
    registerUrl: "https://forms.gle/spelling-bee-2026-school-coordinator",
    sponsorUrl: "/contact?inquiry=sponsor-bee",
    starSpellers: [
      { year: 2025, name: "Maya R.", grade: "5th grade · Greenlodge", schoolSlug: "greenlodge" },
      { year: 2024, name: "Lucas P.", grade: "4th grade · Oakdale", schoolSlug: "oakdale" },
      { year: 2023, name: "Aanya S.", grade: "5th grade · Avery", schoolSlug: "avery" },
    ],
  },
];

export const featuredHomepageEvent = events[0];

export function findEvent(slug: "dash" | "spelling-bee"): EventInfo {
  const evt = events.find((e) => e.slug === slug);
  if (!evt) throw new Error(`Unknown event slug: ${slug}`);
  return evt;
}
