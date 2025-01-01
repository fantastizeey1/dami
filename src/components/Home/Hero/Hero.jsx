import React from "react";
import HeroContent from "./HeroContent";
import ImageColumn from "./ImageColumn";

const column1Images = [
  {
    url: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=500&h=600&fit=crop",
    alt: "Modern Email Newsletter Template",
  },
  {
    url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=600&fit=crop",
    alt: "Email Marketing Campaign",
  },
  {
    url: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=500&h=600&fit=crop",
    alt: "Email Analytics Dashboard",
  },
];

const column2Images = [
  {
    url: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=500&h=600&fit=crop",
    alt: "Marketing Analytics",
  },
  {
    url: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=500&h=600&fit=crop",
    alt: "Email Campaign Results",
  },
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=600&fit=crop",
    alt: "Email Marketing Stats",
  },
];

const Hero = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-8 min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <HeroContent />
        <div className="w-full md:w-1/2 flex justify-center gap-8 overflow-hidden h-[300px] md:h-[600px]">
          <ImageColumn images={column1Images} direction="up" />
          <ImageColumn images={column2Images} direction="down" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
