import { NavLink } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NavSubmenu from "./NavSubmenu";
import { navItems } from "./navigation-data";

const DesktopNav = ({ openSubmenuIndex, setOpenSubmenuIndex }) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => item.submenu && setOpenSubmenuIndex(index)}
          onMouseLeave={() => setOpenSubmenuIndex(null)}
        >
          <NavLink
            to={item.name.toLowerCase().replace(/ /g, "-")}
            className="flex items-center hover:text-brand-primary transition"
          >
            {item.name}

            {item.submenu && (
              <span className="ml-1">
                {openSubmenuIndex === index ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
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
