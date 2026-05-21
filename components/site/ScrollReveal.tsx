"use client";

import { useEffect } from "react";

// Adds a CSS `.in` modifier to any element with `.reveal` once it intersects
// the viewport. Pair with the `.reveal` / `.reveal.in` rules in globals.css.
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = document.querySelectorAll(".reveal");
    if (targets.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${i * 60}ms`;
            el.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
