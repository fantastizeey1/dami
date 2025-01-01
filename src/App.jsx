import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BelowFold from "./components/Hero/BelowFold";
import Services from "./components/Services/Services";
import TestimonialSlider from "./components/Testimonial/Testimonial";
import EmailCTA from "./components/CTA/EmailCTA";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
function App() {
  return (
    <main className="min-w-full dark:bg-gray-900">
      <Header />
      <Hero />
      <BelowFold />
      <Services />
      <WhyChooseUs />
      <TestimonialSlider />
      <EmailCTA />
    </main>
  );
}

export default App;
