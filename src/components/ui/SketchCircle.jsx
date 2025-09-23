// components/SketchCircle.jsx
import React from "react";

const SketchCircle = ({ children, color = "#FFD166" }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute inset-0 w-[140%] h-[200%] -left-[20%] -top-[50%] z-0"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
      >
        {/* Rough hand-drawn oval */}
        <path
          d="M10,20 
             C10,5 110,5 110,20 
             C110,35 10,35 10,20
             Z"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Slightly offset second stroke for sketch effect */}
        <path
          d="M12,22 
             C12,7 108,7 108,22 
             C108,33 12,33 12,22
             Z"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>
    </span>
  );
};

export default SketchCircle;
