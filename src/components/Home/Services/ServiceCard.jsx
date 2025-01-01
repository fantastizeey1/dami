import React, { useEffect, useRef } from "react";
import IconWrapper from "../IconWrapper";

const ServiceSection = ({ service, isReversed }) => {
  const { title, description, Icon, image } = service;
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col gap-8 ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center opacity-0 translate-y-10 transition-all duration-700 ${
        isReversed ? "slide-left" : "slide-right"
      }`}
    >
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900 transition-colors duration-300">
            <IconWrapper Icon={Icon} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
          {description}
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:translate-x-1">
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
      </div>

      <div className="flex-1">
        <div className="image-container group">
          <div className="image-wrapper">
            <img src={image} alt={title} className="service-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
