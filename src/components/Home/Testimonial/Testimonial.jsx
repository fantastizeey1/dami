import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "./testimonialData";
import { NavigationButton } from "./NavigationButton";
import { TestimonialContent } from "./TestimonialContent";
import SectionDivider from "../../ui/SectionDivider";
import SectionFade from "../../ui/SectionFade";

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [current, isTransitioning]);

  const prev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [current, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(next, 30000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative bg-brand-hover md:min-h-[500px] flex items-center px-12 overflow-hidden pb-[100px]">
      <NavigationButton direction="left" onClick={prev}>
        <ArrowLeft className="w-6 h-6 " />
      </NavigationButton>

      <div className="w-full py-5 md:py-20">
        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <TestimonialContent testimonial={testimonials[current]} />
        </div>
      </div>

      <NavigationButton direction="right" onClick={next}>
        <ArrowRight className="w-6 h-6 " />
      </NavigationButton>

      <SectionFade
        fromColor="#CDB4DB"
        toColor="#F5F5DC"
        height={150}
        curve="linear"
        className="absolute -bottom-[0] left-0 z-10"
      />
    </section>
  );
};

export default TestimonialSlider;
