import { useMemo } from "react";

interface BackgroundImage {
  url: string;
  alt: string;
}

interface BackgroundSliderProps {
  images: BackgroundImage[];
  duration?: number; // Seconds
  overlay?: boolean;
}

const BackgroundSlider = ({
  images = [],
  duration = 40,
  overlay = true,
}: BackgroundSliderProps) => {
  // Clone images for the infinite loop effect
  const doubledImages = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900 select-none">
      {/* 
          INLINE STYLES FOR DYNAMIC ANIMATION
          We use a CSS variable --duration to control speed without re-rendering classes.
      */}
      <div
        className="flex h-full w-max animate-slide"
        style={
          {
            "--duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        {doubledImages.map((image, index) => (
          <div
            key={`${image.url}-${index}`}
            className="h-full flex-shrink-0 relative"
          >
            {/* 
                CRITICAL: loading="eager" 
                This is above the fold. Load it NOW.
            */}
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-auto max-w-none object-cover"
              loading="eager"
              decoding="sync"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      {overlay && (
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-10" />
      )}

      {/* 
         Tailwind doesn't have a built-in infinite scroll keyframe by default unless configured.
         We inject this ONCE using a style block, or better, you add it to tailwind.config.ts.
         For now, this local style block is acceptable for portability.
      */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide var(--duration) linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundSlider;
