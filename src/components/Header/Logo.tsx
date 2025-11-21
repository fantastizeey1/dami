import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/inkyRepertoire.svg"
        alt="Company Logo"
        className="object-contain w-56 h-14"
      />
    </Link>
  );
};

export default Logo;
