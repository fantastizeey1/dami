import React from "react";

const AboutPartner = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Business partnership"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Most Important Asset
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Your email list is more than just contacts - it's the foundation
              of your business growth. We help you nurture and expand this
              valuable asset to drive real results for your bottom line.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "98%", label: "Client Satisfaction" },
                { stat: "2.5x", label: "Average ROI" },
                { stat: "45%", label: "List Growth" },
                { stat: "24/7", label: "Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700"
                >
                  <div className="text-3xl font-bold text-[#850000] dark:text-[#a03434]">
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPartner;
