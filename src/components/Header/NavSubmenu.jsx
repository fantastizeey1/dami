import { NavLink } from "react-router-dom";

const NavSubmenu = ({ items, isMobile, closeMenu }) => {
  if (!items) return null;

  return (
    <div
      className={`flex flex-col ${
        isMobile
          ? "ml-4 mt-2 space-y-2"
          : "absolute left-0 mt-2  shadow-md rounded-md p-2 w-48"
      }`}
    >
      {items.map((label, i) => (
        <NavLink
          key={i}
          to={label.toLowerCase().replace(/ /g, "-")}
          onClick={isMobile ? closeMenu : undefined}
          className="px-3 py-1 hover:text-brand-primary"
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavSubmenu;
