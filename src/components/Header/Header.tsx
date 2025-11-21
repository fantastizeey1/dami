import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-hover/80 backdrop-blur-lg shadow-md"
          : "bg-brand-hover/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <DesktopNav
            openSubmenuIndex={openSubmenuIndex}
            setOpenSubmenuIndex={setOpenSubmenuIndex}
          />

          <Button
            onClick={() => setShowPopup(true)}
            className="px-6 py-3 bg-brand-primary text-brand-text hover:bg-brand-hover"
          >
            Book a Strategy Call
          </Button>

          <CalendlyPopup open={showPopup} onClose={() => setShowPopup(false)} />
        </div>

        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      <MobileNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        openSubmenuIndex={openSubmenuIndex}
        setOpenSubmenuIndex={setOpenSubmenuIndex}
      />
    </header>
  );
};

export default Header;
