import React from "react";
import { useInView } from "./useInView";

const ServiceSection = ({ service, index }) => {
  const [ref, isVisible] = useInView();
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className={`py-16 ${
        index !== 0 ? "border-t border-gray-200 dark:border-gray-700" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-12`}
        >
          <div
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isVisible
                ? `opacity-100 ${isEven ? "translate-x-0" : "-translate-x-0"}`
                : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
            }`}
          >
            <div className="text-[#850000] dark:text-[#850000] mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-lg text-black/80 dark:text-gray-300 mb-6">
              {service.description}
            </p>
            <a href="/learn" className="inline-block">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#850000]  text-white rounded-lg transition-all duration-300 transform hover:translate-x-1">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isVisible
                ? `opacity-100 ${isEven ? "translate-x-0" : "-translate-x-0"}`
                : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
