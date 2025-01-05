import React from "react";
import ServiceSection from "./ServiceSection";

const ServiceCards = ({ services }) => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      {services.map((service, index) => (
        <ServiceSection key={service.title} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServiceCards;
