import React from "react";

interface SketchCircleProps {
  children: React.ReactNode;
  color?: string;
}

const SketchCircle = ({ children, color = "#FFD166" }: SketchCircleProps) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>

      <svg
        className="absolute inset-0 -left-[10%] -top-[20%] w-[120%] h-[150%] z-0 pointer-events-none select-none"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Rough hand-drawn oval */}
        <path
          d="M10,20 C10,5 110,5 110,20 C110,35 10,35 10,20 Z"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Offset stroke for realism */}
        <path
          d="M12,22 C12,7 108,7 108,22 C108,33 12,33 12,22 Z"
          stroke={color}
          strokeWidth="2"
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

export default SketchCircle;
