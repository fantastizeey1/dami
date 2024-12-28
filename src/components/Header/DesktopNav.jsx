import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NavSubmenu from "./NavSubmenu";

const DesktopNav = ({ navItems, openSubmenuIndex, setOpenSubmenuIndex }) => {
  return (
    <div className="hidden md:flex space-x-6">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => setOpenSubmenuIndex(index)}
          onMouseLeave={() => setOpenSubmenuIndex(null)}
        >
          <a
            href={`#${item.name.toLowerCase().replace(/ /g, "-")}`}
            className="hover:text-green-500 flex items-center text-gray-900 dark:text-gray-100"
            aria-label={`Go to ${item.name}`}
          >
            {item.name}
            {item.submenu && (
              <span className="ml-1 text-gray-600 dark:text-gray-400">
                {openSubmenuIndex === index ? (
                  <FiChevronUp size={16} />
                ) : (
                  <FiChevronDown size={16} />
                )}
              </span>
            )}
          </a>
          {item.submenu && openSubmenuIndex === index && (
            <NavSubmenu items={item.submenu} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNav;
