import React from "react";
import HeroContent from "./HeroContent";
import BackgroundSlider from "../../BackgroundSlider";

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
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Reusable Background Slider */}
      <BackgroundSlider images={backgroundImages} duration={40} overlay />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto  px-8 min-h-screen flex items-center pt-24">
        <div className="w-full">
          <HeroContent />
        </div>
      </div>
    </main>
  );
};

export default Hero;
