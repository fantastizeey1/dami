import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "./testimonialData";
import { NavigationButton } from "./NavigationButton";
import { TestimonialContent } from "./TestimonialContent";
import { TestimonialBackground } from "./TestimonialBackground";

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
    <section className="relative bg-gray-100  dark:bg-gray-900 md:min-h-[500px] flex items-center px-12 overflow-hidden">
      <NavigationButton direction="left" onClick={prev}>
        <ArrowLeft className="w-6 h-6 dark:text-gray-100 text-gray-900" />
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
        <ArrowRight className="w-6 h-6 dark:text-gray-100 text-gray-900" />
      </NavigationButton>
    </section>
  );
};

export default TestimonialSlider;
