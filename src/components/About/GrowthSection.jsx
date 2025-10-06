import React from "react";
import GrowthMessage from "./GrowthMessage";
import { LineChart, Users, Target, Briefcase } from "lucide-react";

const GrowthSection = () => {
  const messages = [
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Growing your list = Direct revenue",
      description:
        "Transform your email list into a powerful revenue-generating asset that drives sustainable business growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Expertise Across Industries",
      description:
        "Our passionate and talented marketers have expertise in various industries. No matter your business type, we deliver compelling copy designed to engage your audience and boost your profits.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Your Next Strategic Step",
      description:
        "We help you understand why email marketing is the next most sensible step if you are really serious about growing your business.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Flexible Team Ready to Work",
      description:
        "No matter if you are founder, editor and sales person rolled into one. Or you have a lean team, we craft content that will entice your customers and leave them wanting more. Our team is flexible and ready to work.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-20 bg-brand-primary border-t-8 border-white ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Growing your list = Direct revenue
          </h2>
          <p className="text-xl  max-w-2xl mx-auto">
            Transform your email marketing strategy into a powerful revenue
            engine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {messages.map((message, index) => (
            <GrowthMessage key={index} {...message} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
