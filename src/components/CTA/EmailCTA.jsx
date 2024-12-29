import React from "react";
import CTAContent from "./CTAContent";
import CTAButton from "./CTAButton";

const EmailCTA = () => {
  const handleCTAClick = () => {
    window.location.href = "#contact";
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800 opacity-40" />
      <div className="max-w-7xl mx-auto px-8 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
        <div className="relative flex flex-col items-center justify-between gap-16">
          <CTAContent />
          <div className="flex-shrink-0 animate-float">
            <CTAButton text="Ask us how" onClick={handleCTAClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCTA;
