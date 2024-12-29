import React from "react";

import IconWrapper from "../IconWrapper";

const ServiceCard = ({ title, description, Icon }) => {
  return (
    <div className="group h-full flex flex-col justify-start items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
        <IconWrapper Icon={Icon} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transform transition-all duration-300 group-hover:translate-y-[-2px]">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 flex-grow transition-opacity duration-300 group-hover:opacity-90">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
