import type { GrantTypeSlug } from "./cycles";

export type GrantType = {
  slug: GrantTypeSlug;
  name: string;
  shortPitch: string;
  description: string;
  examples: string[];
  cycle: "Fall" | "Spring" | "Either";
  maxAward: number;
  color: "green" | "blue" | "gold";
};

export const grantTypes: GrantType[] = [
  {
    slug: "enrichment",
    name: "Enrichment Grants",
    shortPitch: "Supplement existing curriculum with experiences students remember.",
    description:
      "Enrichment grants bring an existing lesson to life — author visits, live performances, museum trips, guest scientists. If it deepens a unit students are already studying, this is the grant.",
    examples: [
      "An author visit tied to a 5th grade reading unit",
      "Commonwealth Shakespeare bringing Romeo & Juliet to DMS",
      "A Museum of Science demonstration for the K–2 hallway",
    ],
    cycle: "Fall",
    maxAward: 3000,
    color: "blue",
  },
  {
    slug: "innovation",
    name: "Innovation Grants",
    shortPitch:
      "New pilot programs that try something Dedham classrooms haven't done before.",
    description:
      "Innovation grants pilot something new — a technology, program, or curriculum approach Dedham classrooms haven't tried before. Usually a multi-month commitment aligned with the district strategic plan.",
    examples: [
      "A working hydroponic garden in a 3rd grade classroom",
      "A robotics curriculum pilot for after-school engineering club",
      "Sensory-tools program supporting students with autism",
    ],
    cycle: "Spring",
    maxAward: 5000,
    color: "green",
  },
  {
    slug: "nancy-bradley",
    name: "Nancy Bradley Memorial Fund",
    shortPitch:
      "Funds world languages and cultures programming. Named for a beloved Dedham educator.",
    description:
      "The Nancy Bradley Memorial Fund supports world languages and cultures — language programs, cultural exchanges, anything that opens students' eyes to the world. Named for a beloved Dedham educator.",
    examples: [
      "A French film festival and cultural exchange at DHS",
      "Chhandika Indian classical dance for the elementary schools",
      "Spanish-language storytellers for K-1 read-alouds",
    ],
    cycle: "Either",
    maxAward: 2500,
    color: "gold",
  },
];

export const grantsHeroCopy = {
  eyebrow: "Apply for a grant",
  headline: "Have an idea? We want to fund it.",
  sub: "K–12 across Dedham Public Schools — elementary, middle, and high school. Three grant categories, three cycles a year, one short application. We're a Dedham board funding Dedham teachers — no bureaucracy, no committee in Boston to wait on.",
};

// One combined FAQ for the whole /grants page — ordered by the applicant's
// journey: applying first, then reimbursement. The standalone "Reimbursement
// FAQ" and the "How do I get reimbursed?" entry were dropped: the on-page
// reimbursement steps section already answers that in full.
export const faq = [
  {
    q: "Who can apply?",
    a: "Any educator employed by Dedham Public Schools — at any of the four elementary schools (Avery, Greenlodge, Oakdale, Riverdale), Dedham Middle School, or Dedham High School. Classroom teachers, specialists, librarians, counselors, and administrators are all eligible. Parent-led PTO requests should go through your school's PTO, not DEF.",
  },
  {
    q: "Can I apply for more than one grant in a cycle?",
    a: "Yes, though we tend to fund one strong proposal per teacher per cycle. If you have multiple ideas, prioritize the one most ready to run this school year.",
  },
  {
    q: "Do I need administrator approval?",
    a: "Yes — your principal must sign off on the proposal before we review it. The application includes a section for their approval.",
  },
  {
    q: "How are decisions made?",
    a: "Every application is reviewed by at least three board members against published criteria: alignment with district strategic plan, student impact, feasibility, and fit with the grant type. We notify applicants within 4–6 weeks of the deadline.",
  },
  {
    q: "What counts as a complete receipt?",
    a: "An itemized receipt or invoice showing vendor name, date, and the items purchased. Credit card statements alone don't count.",
  },
  {
    q: "What if I lost a receipt?",
    a: "Email our treasurer with what you remember (vendor, date, approximate amount). Most vendors can email a duplicate; we can usually work it out as long as the gap is small.",
  },
  {
    q: "Can DEF pay a vendor directly?",
    a: "Yes — for deposits or invoices that require advance payment, contact the treasurer before the program. We can issue a check directly to the vendor as long as it matches the funded budget.",
  },
  {
    q: "How long does reimbursement take?",
    a: "Two to three weeks from the date we receive a complete reimbursement packet (receipts + signed form). Direct vendor payments are faster.",
  },
  {
    q: "What if I go over budget?",
    a: "We reimburse up to the funded amount. Anything beyond that is the teacher's or PTO's to cover. If you think you'll need more, reach out before going over — we can sometimes amend.",
  },
];

export const REIMBURSEMENT_FORM_URL =
  "https://docs.google.com/document/d/def-reimbursement-form";

export const reimbursementSteps = [
  {
    title: "Save every original receipt",
    body: "Itemized only — credit card statements alone do not count. Take a photo if the paper one is fading.",
  },
  {
    title: "Complete the reimbursement form",
    body: "Fillable Google Doc — list each receipt and the grant it's tied to.",
  },
  {
    title: "Submit within 30 days of program completion",
    body: "Email the form + scanned receipts to our treasurer, or drop the original packet at the DEF mailbox at Dedham Town Hall.",
  },
  {
    title: "Watch for your reimbursement check",
    body: "Two to three weeks from a complete packet. Direct deposit available on request.",
  },
];

export const reviewTimeline = [
  {
    title: "Apply",
    body: "Submit your proposal through the cycle's application form. Takes about 20 minutes.",
  },
  {
    title: "Board review",
    body: "Three+ board members read every application and score it against the published criteria.",
  },
  {
    title: "Notify",
    body: "You'll hear back within 4–6 weeks — funded, partially funded, or with feedback for next cycle.",
  },
  {
    title: "Run the program",
    body: "Run your program during the school year. Take photos, take notes — we'll want to share the story.",
  },
  {
    title: "Reimburse",
    body: "Submit receipts within 30 days of completion. We turn around reimbursements within two weeks.",
  },
];
