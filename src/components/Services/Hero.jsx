import React from "react";
import { useInView } from "./useInView";

const Hero = () => {
  const [ref, isVisible] = useInView();

  return (
    <div className="container mx-auto px-6 py-28">
      <div className="flex flex-col lg:flex-row items-center">
        <div
          ref={ref}
          className={`lg:w-1/2 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Copywriting is our business
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We exist to build trust through emails. Our company fully manages
            your email list so that you can focus on the nitty-gritty of your
            business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform">
            Let's Collaborate
          </button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80"
            alt="Email Marketing"
            className="service-image-2 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
