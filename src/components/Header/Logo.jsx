import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Logo = () => {
  return (
    <div className=" flex flex-row justify-start items-center">
      <Link to="/">
        {" "}
        {/* Wrap the image with Link */}
        <div className="flex flex-row justify-start items-center">
          <img
            src="/inky.png"
            alt="Company Logo"
            className="object-contain w-16 h-14"
          />
          <p className="text-2xl">InkyRepertoire</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
