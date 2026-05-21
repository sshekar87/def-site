// DEF Dash 5K brand mark. Blue circle with "5K" in cream serif, an inset
// gold ring (finish-line feel), and a subtle gold dash crossing the bottom.

type DashLogoProps = {
  size?: number;
  variant?: "mark" | "lockup";
  className?: string;
};

export function DashLogo({
  size = 40,
  variant = "mark",
  className,
}: DashLogoProps) {
  const mark = (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="DEF Dash 5K"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Base blue disc */}
      <circle cx="32" cy="32" r="32" fill="#0b4bba" />
      {/* Inset gold ring — finish-line target */}
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="#f1961e"
        strokeWidth="1.5"
        opacity="0.7"
      />
      {/* Gold dash crossing the bottom — the 'dash' suggestion */}
      <rect x="20" y="50" width="24" height="2.5" fill="#f1961e" rx="1.25" />
      {/* 5K wordmark */}
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="Fraunces, 'Times New Roman', serif"
        fontWeight="600"
        fontSize="26"
        letterSpacing="-1.2"
        fill="#faf6ee"
      >
        5K
      </text>
    </svg>
  );

  if (variant === "lockup") {
    return (
      <span
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: Math.max(8, size * 0.18),
        }}
      >
        {mark}
        <span
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 500,
            fontSize: size * 0.5,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            color: "currentColor",
          }}
        >
          DEF Dash
        </span>
      </span>
    );
  }

  return <span className={className}>{mark}</span>;
}
