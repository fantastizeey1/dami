import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import NavSubmenu from "./NavSubmenu";
import { navItems } from "./navigation-data";
import { Button } from "../ui/Button"; // Ensure this path is correct
import CalendlyPopup from "../CalendlyPopup"; // Ensure this path is correct
import { cn } from "../../lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  openSubmenuIndex: number | null;
  setOpenSubmenuIndex: (index: number | null) => void;
}

const MobileNav = ({
  isOpen,
  setIsOpen,
  openSubmenuIndex,
  setOpenSubmenuIndex,
}: MobileNavProps) => {
  const [showPopup, setShowPopup] = useState(false);

  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="md:hidden bg-white dark:bg-gray-800 shadow-xl border-t border-gray-100 dark:border-gray-700 mx-4 mt-2 rounded-xl p-5 space-y-2 animate-in slide-in-from-top-2 duration-200 z-50 absolute left-0 right-0">
        {navItems.map((item, index) => (
          <div
            key={item.name}
            className="border-b border-gray-50 dark:border-gray-700 last:border-0 pb-2 last:pb-0"
          >
            <div className="flex justify-between items-center">
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cn(
                    "block py-2 text-lg font-medium transition-colors w-full",
                    isActive
                      ? "text-brand-primary"
                      : "text-gray-700 dark:text-gray-200"
                  )
                }
              >
                {item.name}
              </NavLink>

              {/* Only show toggle button if submenu exists */}
              {item.submenu && (
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent NavLink click if nested
                    setOpenSubmenuIndex(
                      openSubmenuIndex === index ? null : index
                    );
                  }}
                  className="p-2 active:bg-gray-100 rounded-full"
                  aria-label="Toggle submenu"
                >
                  {openSubmenuIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              )}
            </div>

            {/* Mobile Submenu */}
            {item.submenu && openSubmenuIndex === index && (
              <NavSubmenu items={item.submenu} isMobile closeMenu={closeMenu} />
            )}
          </div>
        ))}

        <div className="pt-4">
          <Button
            onClick={() => {
              closeMenu();
              setShowPopup(true);
            }}
            className="w-full bg-brand-primary text-white hover:bg-brand-hover shadow-md"
          >
            Book a Strategy Call
          </Button>
        </div>
      </div>

      {/* Popup Rendered Outside the Menu DOM */}
      <CalendlyPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default MobileNav;
