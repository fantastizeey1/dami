import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils"; // Use your new utility
import { SubMenuItem } from "./navigation-data";

interface NavSubmenuProps {
  items: SubMenuItem[];
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavSubmenu = ({ items, isMobile, closeMenu }: NavSubmenuProps) => {
  return (
    <div
      className={cn(
        "flex flex-col",
        isMobile
          ? "ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-2"
          : "absolute left-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 py-2 z-50"
      )}
    >
      {items.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={isMobile ? closeMenu : undefined}
          className={({ isActive }) =>
            cn(
              "block px-4 py-2 text-sm transition-colors hover:text-brand-primary hover:bg-gray-50",
              isActive ? "text-brand-primary font-medium" : "text-gray-600"
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavSubmenu;
