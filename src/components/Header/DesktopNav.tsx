import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import NavSubmenu from "./NavSubmenu";
import { navItems } from "./navigation-data";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  openSubmenuIndex: number | null;
  setOpenSubmenuIndex: (index: number | null) => void;
}

const DesktopNav = ({
  openSubmenuIndex,
  setOpenSubmenuIndex,
}: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item, index) => (
        <div
          key={item.name}
          className="relative group h-full flex items-center"
          // Only trigger state if there is actually a submenu
          onMouseEnter={() => item.submenu && setOpenSubmenuIndex(index)}
          onMouseLeave={() => setOpenSubmenuIndex(null)}
        >
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-1 text-base font-medium transition-colors hover:text-brand-primary py-4",
                // Active state logic
                isActive
                  ? "text-brand-primary"
                  : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            {item.name}

            {/* Conditionally render chevron only if submenu exists */}
            {item.submenu && (
              <span className="text-xs ml-1">
                {openSubmenuIndex === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            )}
          </NavLink>

          {/* Dropdown rendering */}
          {item.submenu && openSubmenuIndex === index && (
            <NavSubmenu items={item.submenu} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
