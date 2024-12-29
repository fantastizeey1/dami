import React from "react";

const IconWrapper = ({ Icon }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon to-pink-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative h-12 w-12 bg-gradient-to-r from-brand-maroon to-pink-600 p-2.5 rounded-xl transform group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-full h-full text-white animate-float" />
      </div>
    </div>
  );
};

export default IconWrapper;
