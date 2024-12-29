import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BelowFold from "./components/Hero/BelowFold";
import Services from "./components/Services/Services";
import WhychooseUs from "./components/WhychooseUs/WhychooseUs";
import TestimonialSlider from "./components/Testimonial/Testimonial";
import EmailCTA from "./components/CTA/EmailCTA";

function App() {
  return (
    <main className="min-w-full dark:bg-gray-900">
      <Header />
      <Hero />
      <BelowFold />
      <Services />
      <WhychooseUs />
      <TestimonialSlider />
      <EmailCTA />
    </main>
  );
}

export default App;
