import React from "react";
import { useInView } from "./useInView";

const CTA = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className="py-20 bg-white dark:bg-gray-900  transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Your most important asset as a business owner is your email list
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's make it count towards your bottom line
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform">
            Ask us how
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
