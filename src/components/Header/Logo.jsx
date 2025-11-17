import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/inky.png"
        alt="Company Logo"
        className="object-contain w-16 h-14"
      />
      <p className="text-2xl font-semibold">InkyRepertoire</p>
    </Link>
  );
};

export default Logo;
