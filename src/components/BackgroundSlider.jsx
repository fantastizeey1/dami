import React, { useMemo } from "react";

const BackgroundSlider = ({ images = [], duration = 40, overlay = true }) => {
  const doubledImages = useMemo(() => [...images, ...images], [images]);

  const totalWidth = `${images.length * 100}%`;

  return (
    <>
      <style>{`
        @keyframes slideBackground {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slide-background {
          width: 200%;
          display: flex;
          animation: slideBackground ${duration}s linear infinite;
        }

        .slide-item {
          flex: 0 0 ${100 / images.length}%;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 slide-background">
          {doubledImages.map((image, index) => (
            <div key={index} className="slide-item">
              <img
                src={image.url}
                alt={image.alt || `slide-${index}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {overlay && (
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        )}
      </div>
    </>
  );
};

export default BackgroundSlider;
