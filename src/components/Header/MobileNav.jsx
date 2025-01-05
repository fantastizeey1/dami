import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NavSubmenu from "./NavSubmenu";
import { NavLink } from "react-router-dom";

const MobileNav = ({
  isOpen,
  navItems,
  openSubmenuIndex,
  setOpenSubmenuIndex,
}) => {
  if (!isOpen) return null;

  return (
    <nav className="mx-2 mt-2 rounded-md flex flex-col space-y-4 p-4 md:hidden bg-gray-100 dark:bg-gray-700 shadow-md">
      {navItems.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex justify-between items-center">
            <NavLink
              to={`${item.name.toLowerCase().replace(/ /g, "-")}`}
              className="hover:text-[#850000]"
              aria-label={`Go to ${item.name}`}
            >
              {item.name}
            </NavLink>
            {item.submenu && (
              <button
                className="ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSubmenuIndex(
                    openSubmenuIndex === index ? null : index
                  );
                }}
                aria-label={`Toggle submenu for ${item.name}`}
              >
                {openSubmenuIndex === index ? (
                  <FiChevronUp size={16} />
                ) : (
                  <FiChevronDown size={16} />
                )}
              </button>
            )}
          </div>
          {item.submenu && openSubmenuIndex === index && (
            <NavSubmenu items={item.submenu} isMobile />
          )}
        </div>
      ))}
    </nav>
  );
};

export default MobileNav;
