import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import SectionFade from "../ui/SectionFade";
import { useState } from "react";
import CalendlyPopup from "../CalendlyPopup";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-secondary ">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 min-h-screen flex items-center pt-24">
        <div className="max-w-5xl ">
          <h1 className="h1 font-bold text-brand-text mb-8 pb-4 bg-clip-text   animate-fade-in">
            Words that sparkle, <br />
            Strategy that sticks
          </h1>
          <p className="body-text text-brand-text md:text-2xl  mb-12 animate-fade-in-delay">
            We write your emails so that you can focus on the nitty-gritty of
            your business.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Button
              onClick={() => setShowPopup(true)}
              className="group flex items-center gap-2 md:px-6 md:py-4 px-4 py-3 text-lg md:text-xl bg-brand-primary text-white hover:bg-brand-hover transition"
            >
              Let’s Collaborate
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <CalendlyPopup
              open={showPopup}
              onClose={() => setShowPopup(false)}
            />
          </div>
        </div>
      </div>
      <SectionFade
        fromColor="#FFD166"
        toColor="#FF6F61"
        height={150}
        curve="linear"
        className="absolute -bottom-[5px] left-0 "
      />
    </section>
  );
};

export default Hero;
