import React from "react";

const BackgroundSlider = ({ images = [], duration = 40, overlay = true }) => {
  return (
    <>
      <style>{`
        @keyframes slideBackground {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .slide-background {
          animation: slideBackground ${duration}s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        {/* Sliding container */}
        <div className="absolute inset-0 flex slide-background">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {images.map((image, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0 w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Optional dark overlay */}
        {overlay && <div className="absolute inset-0 bg-black bg-opacity-60" />}
      </div>
    </>
  );
};

export default BackgroundSlider;
