import Hero from "./Hero";
import ServiceCards from "./ServiceCards";
import { servicesData } from "./servicesData";
import EmailCTA from "../Home/CTA/EmailCTA";
import { SEO } from "../SEO";

const Services = () => {
  return (
    <>
      {/* 1. SEO Injection */}
      <SEO
        title="Our Services"
        description="From full-service email management to high-converting copywriting. Explore the services that turn your subscribers into loyal revenue sources."
      />

      {/* 2. Page Content */}
      <div className="min-h-screen  transition-colors duration-300">
        <Hero />
        <ServiceCards services={servicesData} />
        <EmailCTA />
      </div>
    </>
  );
};

export default Services;
