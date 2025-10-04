import React, { useEffect, useRef } from "react";
import IconWrapper from "../IconWrapper";
import { Button } from "../../ui/Button";

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
      <div className="flex-1 space-y-6 gap-3">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl ">
            <IconWrapper Icon={Icon} />
          </div>
          <h3 className="h3">{title}</h3>
        </div>
        <p className="body-text">{description}</p>
        {/* <a href="/learn" className="inline-block">
          <Button className="">
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
          </Button>
        </a> */}
      </div>

      <div className="flex-1 image-container group">
        <div className=" rounded-2xl  border-8 border-white max-w-full aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
