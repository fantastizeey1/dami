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
      title: "Thorough understanding of small businesses",
      description:
        "We understand what makes small businesses tick. That is why we want to work with you to ensure that you put the money on the table inside your pocket - through emails.",
      Icon: Brain,
    },
    {
      title: "Humanised email copywriting",
      description:
        "We're not against AI but you hired humans not bots. Your copywriting will be written for humans with emotions.",
      Icon: Users,
    },
  ];

  return (
    <section className="w-full  border-t-8 border-white px-8 py-32 bg-brand-accent ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">WHY CHOOSE US</h2>
          <p className="body-text max-w-3xl mx-auto">
            We deliver results through personalised strategies and
            human-centered approach
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
