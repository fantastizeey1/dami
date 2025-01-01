import React, { useState, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton ";
import ThemeToggle from "./ThemeToggle";

const ScrollToTopAndThemeToggleWrapper = ({ isDarkMode, toggleTheme }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the user is near the bottom of the page
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    setIsVisible(pageHeight - scrollPosition < 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-1 flex flex-col gap-4">
      {/* Scroll to Top Button */}
      <ScrollToTopButton isVisible={isVisible} />

      {/* Theme Toggle Button */}
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default ScrollToTopAndThemeToggleWrapper;
