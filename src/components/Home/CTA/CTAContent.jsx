import React from "react";
import SketchCircle from "../../ui/SketchCircle";
import SketchUnderline from "../../ui/SketchUnderline";

const CTAContent = () => {
  return (
    <div className="space-y-6 text-center md:mx-3 md:text-left max-w-4xl">
      <div className="relative">
        <h2 className="h2 text-7xl leading-relaxed animate-fade-in">
          Your most important asset is your
          <span className="md:ml-12 lg:ml-9">
            <SketchUnderline color="#06b6d4">Email List</SketchUnderline>
          </span>
        </h2>
      </div>
      <p className="h3  animate-slide-up-2">
        Let's make it count towards your bottom line
      </p>
    </div>
  );
};

export default CTAContent;
