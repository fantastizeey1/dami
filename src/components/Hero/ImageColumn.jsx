import React from "react";

const ImageColumn = ({ images, direction }) => {
  return (
    <div
      className={`flex md:mt-[200px] flex-col gap-6 animate-slide-${direction} hover:pause-animation`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden md:h-[300px] md:w-[250px] hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageColumn;
