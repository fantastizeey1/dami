import React from "react";
import HeroContent from "./HeroContent";
import BackgroundSlider from "../../BackgroundSlider";

const backgroundImages = [
  // {
  //   url: "/dammy1.jpg",
  //   alt: "Modern Workspace with Laptop",
  // },
  // {
  //   url: "/dammy2.png",
  //   alt: "Team Collaboration",
  // },
  {
    url: "/dammy3.jpg",
    alt: "Analytics Dashboard",
  },
  {
    url: "/dammy4.jpg",
    alt: "Startup Team Meeting",
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
