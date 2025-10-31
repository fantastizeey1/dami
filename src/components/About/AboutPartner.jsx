import SectionFade from "../ui/SectionFade";

const AboutPartner = () => {
  return (
    <section className="relative py-32 lg:py-56 bg-brand-hover ">
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
            <h2 className="text-4xl font-bold mb-6 ">
              Your Most Important Asset
            </h2>
            <p className="text-lg  mb-8">
              Your email list is more than just contacts - it's the foundation
              of your business growth. We help you nurture and expand this
              valuable asset to drive real results for your bottom line.
            </p>
            {/* <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "98%", label: "Client Satisfaction" },
                { stat: "2.5x", label: "Average ROI" },
                { stat: "45%", label: "List Growth" },
                { stat: "24/7", label: "Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gray-50"
                >
                  <div className="text-3xl font-bold ">{item.stat}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <SectionFade
        fromColor="#CDB4DB"
        toColor="#F5F5DC"
        height={150}
        curve="linear"
        className="absolute -bottom-[0] left-0 z-10"
      />
    </section>
  );
};

export default AboutPartner;
