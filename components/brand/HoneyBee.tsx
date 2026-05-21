// Cartoon honeybee mark for the Spelling Bee page. Pure SVG so it scales,
// animates via CSS (.bee-floater / .bee-wing in globals.css), and stays light.
// Antennae + wings + striped body, no facial features — matches the friendly
// flyer-style bee without being a literal copy.

type HoneyBeeProps = {
  className?: string;
  ariaLabel?: string;
};

export function HoneyBee({ className = "bee-floater", ariaLabel }: HoneyBeeProps) {
  const decorative = ariaLabel === undefined;
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      width="56"
      height="56"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antennae */}
      <g stroke="#1a1410" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M30 18 Q28 10 24 8" />
        <path d="M40 18 Q42 10 46 8" />
        <circle cx="24" cy="8" r="2" fill="#1a1410" stroke="none" />
        <circle cx="46" cy="8" r="2" fill="#1a1410" stroke="none" />
      </g>

      {/* Wings (back layer, animated via .bee-wing) */}
      <g className="bee-wing" opacity="0.7">
        <ellipse
          cx="24"
          cy="34"
          rx="14"
          ry="11"
          fill="#d8e2f4"
          stroke="#0b4bba"
          strokeWidth="1.4"
        />
        <ellipse
          cx="56"
          cy="34"
          rx="14"
          ry="11"
          fill="#d8e2f4"
          stroke="#0b4bba"
          strokeWidth="1.4"
        />
      </g>

      {/* Body — striped oval */}
      <g>
        <ellipse cx="40" cy="48" rx="20" ry="18" fill="#f1961e" />
        {/* Stripes */}
        <path
          d="M28 38 Q40 36 52 38 L52 42 Q40 40 28 42 Z"
          fill="#1a1410"
        />
        <path
          d="M26 48 Q40 46 54 48 L54 52 Q40 50 26 52 Z"
          fill="#1a1410"
        />
        <path
          d="M28 58 Q40 60 52 58 L52 62 Q40 64 28 62 Z"
          fill="#1a1410"
        />
        {/* Body outline */}
        <ellipse
          cx="40"
          cy="48"
          rx="20"
          ry="18"
          fill="none"
          stroke="#1a1410"
          strokeWidth="1.8"
        />
        {/* Stinger */}
        <path d="M60 50 L66 52 L60 54 Z" fill="#1a1410" />
      </g>
    </svg>
  );
}
