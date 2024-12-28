import React from "react";

const NavSubmenu = ({ items, isMobile = false }) => {
  const baseClasses = isMobile
    ? "mt-2 flex flex-col bg-gray-100 dark:bg-gray-700 shadow-md rounded-md p-2"
    : "absolute left-0 top-full flex flex-col bg-gray-100 dark:bg-gray-700 shadow-md rounded-md z-10 pointer-events-auto";

  return (
    <div className={baseClasses}>
      {items.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase().replace(/ /g, "-")}`}
          className="px-4 py-2 hover:text-green-500 whitespace-nowrap"
          aria-label={`Go to ${item}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavSubmenu;
