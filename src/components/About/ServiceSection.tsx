import React from "react";
import { Mail, Target, TrendingUp } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing Excellence",
      description:
        "We craft compelling copy designed to engage your audience and boost your profits through effective email campaigns.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Approach",
      description:
        "Our passionate marketers have expertise across various industries, ensuring your message reaches the right audience.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      description:
        "Growing your list equals direct revenue. We help you understand why email marketing is your next strategic step.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-40 bg-brand-secondary ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2  border-black border-8"
            >
              <div className="w-16 h-16 mb-6 rounded-full  flex items-center justify-center ">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 ">{service.title}</h3>
              <p className="">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
