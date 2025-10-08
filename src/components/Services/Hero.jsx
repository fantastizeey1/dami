import React from "react";
import { useInView } from "./useInView";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import BackgroundSlider from "../BackgroundSlider";

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
  const [ref, isVisible] = useInView();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <BackgroundSlider
        images={backgroundImages}
        duration={60}
        overlay={false}
      />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/40 "></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 min-h-screen flex items-center pt-24">
        <div className="max-w-5xl ">
          <h1 className="h1 font-bold mb-8 pb-4 bg-clip-text   animate-fade-in">
            Words that sparkle, <br />
            trategy that sticks
          </h1>
          <p className="text-xl md:text-2xl  mb-12 animate-fade-in-delay">
            We write your emails so that you can focus on the nitty-gritty of
            your business.
          </p>
          <a href="#services">
            <Button className="animate-bounce-subtle px-8 py-4" size="lg">
              Let’s Collaborate
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
