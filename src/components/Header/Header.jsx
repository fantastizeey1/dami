import React, { useState, useEffect } from "react";
import { navItems } from "./navigation-data";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";
import CTAButton from "./CTAButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-white/50 dark:bg-gray-900/50"
      } text-gray-900 dark:text-gray-100`}
    >
      <header className="w-full max-w-7xl mx-auto px-6 py-4 flex dark:text-white justify-between items-center relative">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <DesktopNav
            navItems={navItems}
            openSubmenuIndex={openSubmenuIndex}
            setOpenSubmenuIndex={setOpenSubmenuIndex}
          />
          <div className="hidden md:block">
            <CTAButton />
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        openSubmenuIndex={openSubmenuIndex}
        setOpenSubmenuIndex={setOpenSubmenuIndex}
      />
    </div>
  );
};
