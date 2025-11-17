import { NavLink } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NavSubmenu from "./NavSubmenu";
import { navItems } from "./navigation-data";
import { Button } from "../ui/Button";

const MobileNav = ({
  isOpen,
  setIsOpen,
  openSubmenuIndex,
  setOpenSubmenuIndex,
}) => {
  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="md:hidden bg-gray-100 dark:bg-gray-700 shadow-md mx-3 mt-2 rounded-md p-4 space-y-4">
      {navItems.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center">
            <NavLink
              to={item.name.toLowerCase().replace(/ /g, "-")}
              onClick={closeMenu}
              className="hover:text-brand-primary"
            >
              {item.name}
            </NavLink>

            {item.submenu && (
              <button
                onClick={() =>
                  setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)
                }
              >
                {openSubmenuIndex === index ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </button>
            )}
          </div>

          {item.submenu && openSubmenuIndex === index && (
            <NavSubmenu items={item.submenu} isMobile closeMenu={closeMenu} />
          )}
        </div>
      ))}

      <Button
        onClick={closeMenu}
        className="w-full mt-2 bg-brand-primary text-brand-text"
      >
        Book a Strategy Call
      </Button>
    </nav>
  );
};

export default MobileNav;
