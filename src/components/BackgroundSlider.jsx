import React, { useMemo } from "react";

const BackgroundSlider = ({ images = [], duration = 40, overlay = true }) => {
  const doubledImages = useMemo(() => [...images, ...images], [images]);

  return (
    <>
      <style>{`
        @keyframes slideBackground {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slide-background {
          display: inline-flex;
          width: fit-content;
          animation: slideBackground ${duration}s linear infinite;
        }

        .slide-item {
          flex: none; /* <-- Important: prevents stretching */
          height: 100%;
        }

        .slide-item img {
          height: 100%;
          width: auto; /* <-- Keep natural aspect ratio */
          object-fit: cover; 
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        {/* SCROLLING STRIP */}
        <div className="absolute inset-0">
          <div className="slide-background h-full">
            {doubledImages.map((image, index) => (
              <div key={index} className="slide-item">
                <img
                  src={image.url}
                  alt={image.alt || `slide-${index}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DARK OVERLAY */}
        {overlay && (
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        )}
      </div>
    </>
  );
};

export default BackgroundSlider;
