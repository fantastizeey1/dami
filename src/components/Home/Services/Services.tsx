import React from "react";
import { PenTool, Magnet, MailCheck } from "lucide-react";
import ServiceSection from "./ServiceSection";
import SectionFade from "../../ui/SectionFade";

const Services = () => {
  const services = [
    {
      title: "Email Copywriting",
      description:
        "We use words to power your business through email copy. With this service, you can rest easy knowing that your copywriting is covered, ready to generate more income.",
      Icon: PenTool,
      image:
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Lead Magnet Creation",
      description:
        "To attract subscribers, we will create the right kind of lead magnet for your small business. We ensure that your lead magnet is irresistible to your audience.",
      Icon: Magnet,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Email Marketing & Execution",
      description:
        "We create a strategy based on your needs including email templates, copywriting, delivery and tracking.",
      Icon: MailCheck,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section className="w-full relative px-4 sm:px-8 pt-16 pb-36 lg:py-56  bg-brand-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="h2 mb-4">EMAIL MARKETING SERVICES</h2>
          <p className="body-text max-w-xl mx-auto ">
            We've spent time understanding the psychology of selling to make
            running your business your only focus.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceSection
              key={service.title}
              service={service}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <SectionFade
        fromColor="#FFD166"
        toColor="#06B6D4"
        height={150}
        curve="smooth"
        className="absolute bottom-[0] left-0"
      />
    </section>
  );
};

export default Services;
