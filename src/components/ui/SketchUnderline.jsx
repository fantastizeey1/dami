// components/ui/SketchUnderline.jsx
import React from "react";

const SketchUnderline = ({ children, color = "#FF2D95", offset = "0.4em" }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>

      <svg
        className="absolute left-0 z-0 pointer-events-none"
        style={{
          bottom: `-${offset}`,
          width: "100%",
          height: "0.8em",
          overflow: "visible",
        }}
        viewBox="0 0 120 30"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* First underline - main bold curve (downward arc) */}
        <path
          d="M5 16 
             C 35 8, 85 8, 115 16"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Second underline - slightly lower and thinner */}
        <path
          d="M8 20 
             C 38 12, 82 12, 112 20"
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
