import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="md:hidden absolute right-2 p-2 focus:outline-none"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
    >
      {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
