import React from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`p-2 rounded-full shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={25} className="text-white" />
    </button>
  );
};

export default ScrollToTopButton;
