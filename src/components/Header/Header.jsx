import { useState, useEffect } from "react";
import { navItems } from "./navigation-data";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";
import { Button } from "../ui/Button";
import CalendlyPopup from "../CalendlyPopup";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Detect scroll for header blur + background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-hover/80 backdrop-blur-md shadow-md"
          : "bg-brand-hover/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <DesktopNav
            navItems={navItems}
            openSubmenuIndex={openSubmenuIndex}
            setOpenSubmenuIndex={setOpenSubmenuIndex}
          />

          <div className="flex items-center">
            <Button
              onClick={() => setShowPopup(true)}
              className="group flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 text-[14px] md:text-xl bg-brand-primary text-brand-text hover:bg-brand-hover transition"
            >
              Book a Strategy Call
            </Button>
          </div>

          <CalendlyPopup open={showPopup} onClose={() => setShowPopup(false)} />
        </div>

        {/* Mobile Menu Button */}
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
