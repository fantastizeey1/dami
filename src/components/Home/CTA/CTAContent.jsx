import React from "react";

const CTAContent = () => {
  return (
    <div className="space-y-6 text-center md:text-left max-w-4xl">
      <div className="relative">
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in">
          Your most important asset is your{" "}
          <span className="relative inline-block">
            <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-brand-maroon to-pink-600 opacity-25 blur-lg animate-pulse"></span>
            <span className="relative bg-gradient-to-r from-brand-maroon to-pink-600 bg-clip-text text-transparent">
              Email List
            </span>
          </span>
        </h2>
      </div>
      <p className="text-xl text-gray-600 dark:text-gray-300 animate-slide-up-2">
        Let's make it count towards your bottom line
      </p>
    </div>
  );
};

export default CTAContent;
