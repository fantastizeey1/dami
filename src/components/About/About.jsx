import React from "react";
import AboutHero from "./AboutHero";
import ServiceSection from "./ServiceSection";
import AboutSimplicity from "./AboutSimplicity";
import AboutValue from "./AboutValue";
import AboutPartner from "./AboutPartner";
import GrowthSection from "./GrowthSection";
import EmailCTA from "../Home/CTA/EmailCTA";

const About = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <AboutHero />
      <GrowthSection />
      <ServiceSection />
      <AboutSimplicity />
      <AboutValue />
      <AboutPartner />
      <EmailCTA />
    </div>
  );
};

export default About;
