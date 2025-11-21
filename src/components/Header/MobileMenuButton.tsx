import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({ isOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
    <button
      className="md:hidden p-2 text-gray-700 hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md"
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
    </button>
  );
};

export default MobileMenuButton;
