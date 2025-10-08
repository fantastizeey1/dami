import React from "react";

const ValueCard = ({ icon: Icon, title, description, imageSrc }) => {
  return (
    <div className="group relative overflow-hidden shadow-xl shadow-gray-300 rounded-2xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-maroon/90 mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
          <Icon className="w-10 h-10 text-[white]" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
          {title}
        </h3>
        <p className="text-gray-200 text-body transform transition-transform duration-500 group-hover:-translate-y-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
