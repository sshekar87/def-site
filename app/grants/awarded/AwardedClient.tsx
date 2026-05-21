"use client";

import { useMemo, useState } from "react";
import {
  awardedGrants,
  schoolDisplay,
  categoryDisplay,
  type AwardedCategory,
  type SchoolSlug,
} from "@/content/awarded-grants";
import { formatCurrency } from "@/content/grants";
import { cn } from "@/lib/cn";

const PAGE_SIZE = 24;

const CATEGORIES: AwardedCategory[] = [
  "enrichment",
  "innovation",
  "nancy-bradley",
  "stec-award",
];

export function AwardedClient() {
  const years = useMemo(
    () => Array.from(new Set(awardedGrants.map((g) => g.year))).sort((a, b) => b - a),
    [],
  );
  const schools = useMemo(
    () => Array.from(new Set(awardedGrants.map((g) => g.school))) as SchoolSlug[],
    [],
  );

  const [year, setYear] = useState<number | "all">("all");
  const [school, setSchool] = useState<SchoolSlug | "all">("all");
  const [activeCategories, setActiveCategories] = useState<Set<AwardedCategory>>(
    new Set(),
  );
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return awardedGrants
      .filter((g) => (year === "all" ? true : g.year === year))
      .filter((g) => (school === "all" ? true : g.school === school))
      .filter((g) =>
        activeCategories.size === 0 ? true : activeCategories.has(g.category),
      )
      .filter((g) => {
        if (!q) return true;
        return [g.title, g.description, g.teacher, schoolDisplay[g.school].name]
          .filter(Boolean)
          .some((v) => v!.toLowerCase().includes(q));
      })
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  }, [year, school, activeCategories, search]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  const toggleCategory = (c: AwardedCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
    setPage(1);
  };

  const clear = () => {
    setYear("all");
    setSchool("all");
    setActiveCategories(new Set());
    setSearch("");
    setPage(1);
  };

  return (
    <>
      <div className="filter-bar">
        <div className="filter-row">
          <div className="filter-field">
            <label htmlFor="year">Year</label>
            <select
              id="year"
              value={year}
              onChange={(e) => {
                setYear(e.target.value === "all" ? "all" : Number(e.target.value));
                setPage(1);
              }}
            >
              <option value="all">All years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="school">School</label>
            <select
              id="school"
              value={school}
              onChange={(e) => {
                setSchool(e.target.value as SchoolSlug | "all");
                setPage(1);
              }}
            >
              <option value="all">All schools</option>
              {schools.map((s) => (
                <option key={s} value={s}>
                  {schoolDisplay[s].name}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="search"
              placeholder="Search title, teacher, school…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>
        <div className="filter-chips">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={cn("chip", activeCategories.has(c) && "active")}
              onClick={() => toggleCategory(c)}
              aria-pressed={activeCategories.has(c)}
            >
              {categoryDisplay[c]}
            </button>
          ))}
          {(activeCategories.size > 0 ||
            year !== "all" ||
            school !== "all" ||
            search) && (
            <button type="button" className="chip clear" onClick={clear}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="results-count">
        Showing {visible.length} of {filtered.length} grants
        {filtered.length === awardedGrants.length ? "" : ` (filtered from ${awardedGrants.length})`}
      </div>

      {visible.length === 0 ? (
        <div className="empty-state">
          <h3>No grants match those filters.</h3>
          <p>
            Try clearing a filter or removing the search term. Some older grant
            data is still being transcribed from prior years.
          </p>
        </div>
      ) : (
        <div className="awarded-grid">
          {visible.map((g) => (
            <article key={g.id} className="awarded-card">
              <div className="awarded-meta">
                <span className={`awarded-pill ${g.category}`}>
                  {categoryDisplay[g.category]}
                </span>
                <span className="awarded-amount">{formatCurrency(g.amount)}</span>
              </div>
              <h3 className="awarded-title">{g.title}</h3>
              {g.description && <p className="awarded-desc">{g.description}</p>}
              <div className="awarded-foot">
                <span>{schoolDisplay[g.school].name}</span>
                {g.teacher && <span>{g.teacher}</span>}
                {g.grade && <span>{g.grade}</span>}
                <span>
                  {g.cycle === "spring" ? "Spring" : "Fall"} {g.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {hasMore && (
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setPage((p) => p + 1)}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}
