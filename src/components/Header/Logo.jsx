import React from "react";

const Logo = () => {
  return (
    <div className="w-2/6 flex justify-start items-center">
      <img
        src="/logo.png"
        alt="Company Logo"
        className="object-contain w-16 h-12"
      />
    </div>
  );
};

export default Logo;
