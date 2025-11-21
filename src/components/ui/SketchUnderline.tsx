import React from "react";

interface SketchUnderlineProps {
  children: React.ReactNode;
  color?: string;
  offset?: string | number; // Accepts "0.4em" or just 10
}

const SketchUnderline = ({
  children,
  color = "#FF2D95",
  offset = "0.4em",
}: SketchUnderlineProps) => {
  return (
    <span className="relative inline-block">
      {/* Text Layer (Above) */}
      <span className="relative z-10">{children}</span>

      {/* Decoration Layer (Behind) */}
      <svg
        className="absolute left-0 z-0 pointer-events-none select-none"
        style={{
          bottom: typeof offset === "number" ? `${offset}px` : `-${offset}`, // Handle both numbers and strings
          width: "100%",
          height: "0.8em",
          overflow: "visible",
        }}
        viewBox="0 0 120 30"
        preserveAspectRatio="none"
        aria-hidden="true" // Critical: Screen readers should ignore this
      >
        {/* First underline - main bold curve */}
        <path
          d="M5 16 C 35 8, 85 8, 115 16"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke" // Keeps line thickness consistent on resize
        />

        {/* Second underline - thinner echo */}
        <path
          d="M8 20 C 38 12, 82 12, 112 20"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
};

export default SketchUnderline;
