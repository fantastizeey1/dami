import React from "react";
import { PenTool, Magnet, MailCheck } from "lucide-react";
import ServiceSection from "./ServiceCard";

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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          EMAIL MARKETING SERVICES
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
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
    </section>
  );
};

export default Services;
