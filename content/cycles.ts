// TODO: verify with board — exact deadlines and award caps for each cycle
export type GrantTypeSlug = "enrichment" | "innovation" | "nancy-bradley";

export type Cycle = {
  id: string;
  name: string;
  season: "spring" | "fall";
  year: number;
  grantType: GrantTypeSlug;
  opensOn: string; // ISO date
  closesOn: string; // ISO date
  maxAward: number; // dollars
  applicationUrl: string; // links to Google Form / Doc
  status: "open" | "upcoming" | "closed";
};

export const cycles: Cycle[] = [
  {
    id: "innovation-spring-2026",
    name: "Innovation Grant",
    season: "spring",
    year: 2026,
    grantType: "innovation",
    opensOn: "2026-02-01",
    closesOn: "2026-03-15",
    maxAward: 5000,
    // Innovation applications use a Google Doc template that teachers copy + submit.
    applicationUrl:
      "https://docs.google.com/document/d/174qecwh87NncAOOEfmB4aWCDXW-56GiqHoXBiwMLL5U/copy",
    status: "open",
  },
  {
    id: "enrichment-fall-2026",
    name: "Enrichment Grant",
    season: "fall",
    year: 2026,
    grantType: "enrichment",
    opensOn: "2026-09-01",
    closesOn: "2026-10-15",
    maxAward: 3000,
    applicationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdMjEX9ozFBystDTvTcbeWWPLrQmQCEO78Y7DYKf9ftxZo2wg/closedform",
    status: "upcoming",
  },
  {
    id: "nancy-bradley-fall-2026",
    name: "Nancy Bradley Memorial",
    season: "fall",
    year: 2026,
    grantType: "nancy-bradley",
    opensOn: "2026-09-01",
    closesOn: "2026-10-15",
    maxAward: 2500,
    // TODO: real Nancy Bradley application URL from board.
    applicationUrl: "https://forms.gle/nancy-bradley-fall-2026",
    status: "upcoming",
  },
];

export const currentCycle = cycles.find((c) => c.status === "open") ?? cycles[0];

export const currentCycleStatus = {
  pillLabel: `${currentCycle.season === "spring" ? "Spring" : "Fall"} Cycle`,
  message: `${currentCycle.name} applications open through ${formatCycleDate(
    currentCycle.closesOn,
  )}`,
};

export function formatCycleDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
