import React from "react";

const GrowthMessage = ({
  icon,
  title,
  description,
  image,
  reversed,
  delay,
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl opacity-0"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s forwards`,
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col min-h-[400px] z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-maroon/90 mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
          {title}
        </h3>
        <p className="text-gray-200 leading-relaxed transform transition-transform duration-500 group-hover:-translate-y-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GrowthMessage;
