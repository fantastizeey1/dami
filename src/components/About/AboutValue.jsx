import React from "react";
import { Shield, Users, Target } from "lucide-react";
import ValueCard from "./ValueCard";

const values = [
  {
    icon: Shield,
    title: "Trusted Excellence",
    description:
      "We deliver objective marketing inputs that work, backed by proven results and expertise.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Users,
    title: "Passionate Team",
    description:
      "Our enthusiastic team is committed to transforming businesses through effective communication.",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "We aim for extraordinary results 100% of the time, focusing on measurable outcomes.",
    imageSrc:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800",
  },
];

const AboutValue = () => {
  return (
    <section className="py-20 lg:py-40 bg-brand-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Your Trusted Value Partner
          </h2>
          <p className="text-2xl max-w-2xl mx-auto">
            We're more than just a service provider - we're your strategic
            partner in achieving extraordinary marketing results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="opacity-0"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`,
              }}
            >
              <ValueCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValue;
