import React from "react";

export const NavigationButton = ({
  direction = "left",
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`absolute z-10 bg-white dark:bg-slate-800 rounded-full p-4 
        ${direction === "left" ? "left-4" : "right-4"} 
        hover:bg-gray-100 transition-colors 

        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-maroon 
        disabled:opacity-50 disabled:cursor-not-allowed`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} testimonial`}
    >
      {children}
    </button>
  );
};
