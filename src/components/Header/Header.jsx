import React, { useState, useEffect } from "react";
import { navItems } from "./navigation-data";
import ThemeToggle from "../ThemeToggle";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";
import CTAButton from "./CTAButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-white/50 dark:bg-gray-900/50"
      }`}
    >
      <header className="w-full md:max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative dark:text-gray-100 text-gray-900">
        <Logo />
        <div className="flex items-center gap-12">
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

export default Header;
