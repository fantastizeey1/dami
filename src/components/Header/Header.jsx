import React, { useState, useEffect } from "react";
import { navItems } from "./navigation-data";
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
    <header
      className={`fixed inset-x-0  top-0 z-50 transition-all duration-300 
      ${
        isScrolled
          ? "bg-brand-accent/80 backdrop-blur-md shadow-md"
          : "bg-brand-accent/50 backdrop-blur-sm"
      }
      `}
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <DesktopNav
            navItems={navItems}
            openSubmenuIndex={openSubmenuIndex}
            setOpenSubmenuIndex={setOpenSubmenuIndex}
          />
          <CTAButton />
        </div>

        {/* Mobile Menu Toggle (hidden on desktop) */}
        <div className="md:hidden">
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        openSubmenuIndex={openSubmenuIndex}
        setOpenSubmenuIndex={setOpenSubmenuIndex}
      />
    </header>
  );
};

export default Header;
