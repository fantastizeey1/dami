import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDarkMode}
      className="p-2  border w-fit rounded-full dark:bg-gray-200 bg-gray-800 text-white dark:text-black transition-all hover:opacity-80"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? <FiSun size={25} /> : <FiMoon size={25} />}
    </button>
  );
};

export default ThemeToggle;
