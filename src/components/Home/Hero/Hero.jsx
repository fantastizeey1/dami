import React from "react";
import HeroContent from "./HeroContent";

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
    alt: "Modern Workspace with Laptop",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
    alt: "Team Collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop",
    alt: "Analytics Dashboard",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
    alt: "Startup Team Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
    alt: "Digital Marketing Presentation",
  },
];

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes slideBackground {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .slide-background {
          animation: slideBackground 40s linear infinite;
        }
      `}</style>

      <main className="relative w-full min-h-screen overflow-hidden">
        {/* Fullscreen Background Slideshow */}
        <div className="absolute inset-0 flex slide-background">
          {backgroundImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {backgroundImages.map((image, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0 w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 min-h-screen flex items-center pt-24">
          <div className="w-full">
            <HeroContent />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
