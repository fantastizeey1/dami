import React from "react";
import Hero from "./Hero/Hero";
import BelowFold from "./Hero/BelowFold";
import Services from "./Services/Services";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import TestimonialSlider from "./Testimonial/Testimonial";
import EmailCTA from "./CTA/EmailCTA";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <BelowFold />
      <Services />
      <WhyChooseUs />
      <TestimonialSlider />
      <EmailCTA />
      <Footer />
    </div>
  );
};

export default Home;
