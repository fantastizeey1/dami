import AboutHero from "./AboutHero";
import AboutSimplicity from "./AboutSimplicity";
import AboutValue from "./AboutValue";
import AboutPartner from "./AboutPartner";
import GrowthSection from "./GrowthSection";
import EmailCTA from "../Home/CTA/EmailCTA";
import { SEO } from "../SEO";

const About = () => {
  return (
    <>
      {/* 1. SEO Injection */}
      <SEO
        title="About Us"
        description="We are your partners in email growth. Discover how InkyRepertoire simplifies email marketing to drive value, build relationships, and increase revenue."
      />

      {/* 2. Page Content */}
      <div className="overflow-hidden transition-colors duration-300">
        <AboutHero />
        <GrowthSection />
        <AboutSimplicity />
        <AboutValue />
        <AboutPartner />
        <EmailCTA />
      </div>
    </>
  );
};

export default About;
