import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BelowFold from "./components/Hero/BelowFold";
import Services from "./components/Services/Services";
import TestimonialSlider from "./components/Testimonial/Testimonial";
import EmailCTA from "./components/CTA/EmailCTA";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ScrollToTopAndThemeToggleWrapper from "./components/ScrollToTopAndThemeToggleWrapper";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };
  return (
    <main className="min-w-full dark:bg-gray-900">
      <Header />
      <Hero />
      <BelowFold />
      <Services />
      <WhyChooseUs />
      <TestimonialSlider />
      <EmailCTA />
      {/* Scroll to Top and Theme Toggle Buttons */}
      <ScrollToTopAndThemeToggleWrapper
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </main>
  );
}

export default App;
