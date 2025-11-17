import { FiMenu, FiX } from "react-icons/fi";

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="md:hidden p-2"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
    >
      {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
    </button>
  );
};

export default MobileMenuButton;
