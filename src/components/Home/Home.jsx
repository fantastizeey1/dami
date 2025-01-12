import React from "react";
import Hero from "./Hero/Hero";
import BelowFold from "./Hero/BelowFold";
import Services from "./Services/Services";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import TestimonialSlider from "./Testimonial/Testimonial";
import EmailCTA from "./CTA/EmailCTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <BelowFold />
      <Services />
      <WhyChooseUs />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
