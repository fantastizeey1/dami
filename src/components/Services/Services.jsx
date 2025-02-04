import React from "react";
import Hero from "./Hero";
import ServiceCards from "./ServiceCards";
import CTA from "./CTA";
import { servicesData } from "./servicesData";
import EmailCTA from "../Home/CTA/EmailCTA";
import Footer from "../Home/Footer/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <ServiceCards services={servicesData} />
      <EmailCTA />
      <Footer />
    </div>
  );
};

export default Services;
