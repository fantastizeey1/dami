import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-sm border rounded-lg transition-all hover:opacity-80"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
