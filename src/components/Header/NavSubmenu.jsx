import React from "react";
import { NavLink } from "react-router-dom";

const NavSubmenu = ({ items, isMobile = false, closeMenu }) => {
  const baseClasses = isMobile
    ? "mt-2 flex flex-col bg-gray-100 dark:bg-gray-700 shadow-md rounded-md p-2"
    : "absolute left-0 top-full flex flex-col bg-gray-100 dark:bg-gray-700 shadow-md rounded-md z-10 pointer-events-auto";

  return (
    <div className={baseClasses}>
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={`#${item.toLowerCase().replace(/ /g, "-")}`}
          className="px-4 py-2 hover:text-[#850000] whitespace-nowrap"
          aria-label={`Go to ${item}`}
          onClick={isMobile ? closeMenu : null} // Close menu for mobile navigation
        >
          {item}
        </NavLink>
      ))}
    </div>
  );
};

export default NavSubmenu;
