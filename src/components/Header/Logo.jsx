import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Logo = () => {
  return (
    <div className="w-2/6 flex justify-start items-center">
      <Link to="/">
        {" "}
        {/* Wrap the image with Link */}
        <img
          src="/logo.png"
          alt="Company Logo"
          className="object-contain w-16 h-12"
        />
      </Link>
    </div>
  );
};

export default Logo;
