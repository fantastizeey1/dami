import Hero from "./Hero/Hero";
import BelowFold from "./Hero/BelowFold";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import TestimonialSlider from "./Testimonial/Testimonial";
import EmailCTA from "./CTA/EmailCTA";
import { SEO } from "../SEO";

const Home = () => {
  return (
    <>
      {/* 1. SEO Metadata */}
      <SEO
        title="Turn your email list into steady income"
        description="New to email? Stop losing sales to the competition. We manage your full email system and write persuasive copy that converts your list into customers, stress-free. Book your free strategy call!"
      />

      {/* 2. The Content */}
      <Hero />
      <BelowFold />
      <WhyChooseUs />
      <TestimonialSlider />
      <EmailCTA />
    </>
  );
};

export default Home;
