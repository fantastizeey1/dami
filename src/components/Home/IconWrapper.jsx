import React from "react";

const IconWrapper = ({ Icon }) => {
  return (
    <div className="relative group">
      <Icon className="w-full h-full text-text animate-float" />
    </div>
  );
};

export default IconWrapper;
