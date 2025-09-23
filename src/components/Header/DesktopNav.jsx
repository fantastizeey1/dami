import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NavSubmenu from "./NavSubmenu";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={`${item.name.toLowerCase().replace(/ /g, "-")}`}
            className=" flex items-center "
            aria-label={`Go to ${item.name}`}
          >
            {item.name}
            {item.submenu && (
              <span className="ml-1">
                {openSubmenuIndex === index ? (
                  <FiChevronUp size={16} />
                ) : (
                  <FiChevronDown size={16} />
                )}
              </span>
            )}
          </NavLink>
          {item.submenu && openSubmenuIndex === index && (
            <NavSubmenu items={item.submenu} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNav;
