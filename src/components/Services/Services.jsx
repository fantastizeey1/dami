import React from "react";
import Hero from "./Hero";
import ServiceCards from "./ServiceCards";
import CTA from "./CTA";
import { servicesData } from "./servicesData";
import EmailCTA from "../Home/CTA/EmailCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <ServiceCards services={servicesData} />
      <EmailCTA />
    </div>
  );
};

export default Services;
