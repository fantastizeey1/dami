import React from "react";
import { Target, Users, Brain } from "lucide-react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Bespoke plans for your business",
      description:
        "Our email marketing plans are not a one-size-fit-all. Your plan is customised to your business approach for maximum effectiveness.",
      Icon: Target,
    },
    {
      title: "Humanised email copywriting",
      description:
        "We're not against AI but you hired humans not bots. Your copywriting will be written for humans with emotions.",
      Icon: Users,
    },
    {
      title: "Thorough understanding of small businesses",
      description:
        "We understand what makes small businesses tick. That is why we want to work with you to ensure that you put the money on the table inside your pocket - through emails.",
      Icon: Brain,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-24 bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          WHY CHOOSE US
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We deliver results through personalized strategies and human-centered
          approach
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex-1 min-w-0">
            <WhyChooseUsCard
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.Icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
