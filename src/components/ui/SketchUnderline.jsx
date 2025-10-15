// components/ui/SketchUnderline.jsx
// components/SketchUnderline.jsx
import React from "react";

const SketchUnderline = ({ children, color = "#FFD166" }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute left-0 bottom-0 w-full h-[60%] z-0 pointer-events-none"
        viewBox="0 0 120 30"
        preserveAspectRatio="none"
      >
        {/* Main artistic underline - more fluid and brushy */}
        <path
          d="M5,20 
             C 20,22 25,15 40,18 
             C 55,21 65,25 80,18
             C 95,12 105,20 115,16"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Imperfect shadow line for hand-drawn effect */}
        <path
          d="M7,22 
             C 22,24 27,17 42,20 
             C 57,23 67,27 82,20
             C 97,14 107,22 117,18"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        {/* Light dry-brush stroke accent — subtle touch */}
        <path
          d="M5,23 
             C 35,28 80,12 115,20"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    </span>
  );
};

export default SketchUnderline;
