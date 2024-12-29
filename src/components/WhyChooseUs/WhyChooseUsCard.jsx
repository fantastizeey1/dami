import React from "react";
import IconWrapper from "../IconWrapper";

const WhyChooseUsCard = ({ title, description, Icon }) => {
  return (
    <div className="h-full flex flex-col justify-start text-center items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <IconWrapper Icon={Icon} />

      <h3 className="text-xl mt-2 font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
