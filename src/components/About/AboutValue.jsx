import React from "react";
import { Shield, Users, CheckCircle } from "lucide-react";
import ValueCard from "./ValueCard";
import SectionFade from "../ui/SectionFade";

const values = [
  {
    icon: Shield,
    title: "Trusted Excellence",
    description:
      "Whatever your marketing business needs, we want you to see us as your trusted value partner who provides objective marketing inputs that work",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Users,
    title: "Passionate Team",
    description:
      "We’re a small team of enthusiastic everyday people on a mission to transform small and medium-sized businesses to their full capacity. We encourage one another with open communication and we are committed to our clients.",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: CheckCircle,
    title: "Results Driven",
    description:
      "We aim for extraordinary results 100% of the time, and we value our clients. We groom our minds for success and we are ready to help leverage your business, copy by copy..",
    imageSrc:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800",
  },
];

const AboutValue = () => {
  return (
    <section className="relative py-20 lg:py-40 bg-brand-accent -z-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="h2 font-bold mb-6 ">Your Trusted Value Partner</h2>
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
      <SectionFade
        fromColor="#06B6D4"
        toColor="#CDB4DB"
        height={150}
        curve="linear"
        className="absolute -bottom-[0] left-0 -z-10"
      />
    </section>
  );
};

export default AboutValue;
