import React from "react";
import { PenTool, Magnet, MailCheck } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Email Copywriting",
      description:
        "We use words to power your business through email copy. With this service, you can rest easy knowing that your copywriting is covered, ready to generate more income.",
      Icon: PenTool,
    },
    {
      title: "Lead Magnet Creation",
      description:
        "To attract subscribers, we will create the right kind of lead magnet for your small business. We ensure that your lead magnet is irresistible to your audience.",
      Icon: Magnet,
    },
    {
      title: "Email Marketing & Execution",
      description:
        "We create a strategy based on your needs including email templates, copywriting, delivery and tracking.",
      Icon: MailCheck,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-24 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          EMAIL MARKETING SERVICES
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We've spent time understanding the psychology of selling to make
          running your business your only focus.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex-1 min-w-0">
            <ServiceCard
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
