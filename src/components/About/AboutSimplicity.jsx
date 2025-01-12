import React from "react";

const AboutSimplicity = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Email Marketing Doesn't Have to Be Complex
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We understand that keeping up with marketing trends and expert
              advice can be overwhelming. That's why we're here to simplify the
              process for you.
            </p>
            <ul className="space-y-4">
              {[
                "Simplified marketing strategies",
                "Expert handling of emails and lead magnets",
                "Professional landing page creation",
                "Proven methods to boost profits",
                "Guided approach to list growth",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#850000] rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimplicity;
