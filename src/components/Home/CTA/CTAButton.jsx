// CTAButton.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const CTAButton = ({
  text,
  onClick,
  className = "",
  iconClassName = "",
  gradientClassName = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      <div
        className={`absolute inset-0 w-full h-full bg-gradient-to-r from-brand-maroon via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-110 ${gradientClassName}`}
      />
      <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_60%)]" />
      <span className="relative flex items-center text-xl md:text-2xl">
        {text}
        <ArrowRight
          className={`w-6 h-6 md:w-8 md:h-8 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${iconClassName}`}
        />
      </span>
    </button>
  );
};

export default CTAButton;
