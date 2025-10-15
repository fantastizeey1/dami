import AboutHero from "./AboutHero";
import ServiceSection from "./ServiceSection";
import AboutSimplicity from "./AboutSimplicity";
import AboutValue from "./AboutValue";
import AboutPartner from "./AboutPartner";
import GrowthSection from "./GrowthSection";
import EmailCTA from "../Home/CTA/EmailCTA";
import Footer from "../Home/Footer/Footer";

const About = () => {
  return (
    <div className="overflow-hidden  transition-colors duration-300">
      <AboutHero />
      <GrowthSection />
      <AboutSimplicity />
      <AboutValue />
      <AboutPartner />
      <EmailCTA />
      <Footer />
    </div>
  );
};

export default About;
