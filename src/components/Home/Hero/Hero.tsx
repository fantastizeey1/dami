import HeroContent from "./HeroContent";
import BackgroundSlider from "../../BackgroundSlider";

const backgroundImages = [
  {
    url: "/dammy3.jpg",
    alt: "Analytics Dashboard",
  },
  {
    url: "/dammy4.jpg",
    alt: "Startup Team Meeting",
  },
  // Add 2 more images. Infinite sliders look glitchy with only 2 items.
  {
    url: "/dammy3.jpg", // Temporary duplicate for smooth looping
    alt: "Analytics Dashboard Duplicate",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Background Layer */}
      <BackgroundSlider images={backgroundImages} duration={60} overlay />

      {/* Content Layer (Z-Index 20 ensures it sits above the overlay) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-20">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
