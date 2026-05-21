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
  starSpellers?: { year: number; name: string; grade?: string }[];
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
    location: "Dedham Middle School · 6:00 PM",
    locationLine2: "Open to adult teams of 3",
    shortPitch:
      "Team up with three friends, pick a costume, and try not to miss \"weird\" in the third round.",
    longDescription: [
      "The Spelling Bee is DEF's most beloved indoor tradition. Teams of three compete head-to-head through increasingly absurd word lists; the audience cheers, heckles, and donates.",
      "It's silly, it's competitive, and every dollar raised that night goes directly into the next grant cycle. Bring a costume; the photo wall is real.",
    ],
    registerUrl: "https://forms.gle/spelling-bee-2026",
    sponsorUrl: "/contact?inquiry=sponsor-bee",
    starSpellers: [
      { year: 2025, name: "The Logophiles", grade: "Adult team" },
      { year: 2024, name: "The Vocabulary Vultures", grade: "Adult team" },
      { year: 2023, name: "Spell Check Required", grade: "Adult team" },
    ],
  },
];

export const featuredHomepageEvent = events[0];

export function findEvent(slug: "dash" | "spelling-bee"): EventInfo {
  const evt = events.find((e) => e.slug === slug);
  if (!evt) throw new Error(`Unknown event slug: ${slug}`);
  return evt;
}
