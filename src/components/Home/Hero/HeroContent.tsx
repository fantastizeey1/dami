import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/Button";
import CalendlyPopup from "../../CalendlyPopup";

const HeroContent = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full relative text-center md:text-left">
      {/* Heading */}
      <h1 className="h1 text-[50px] md:text-[60px] text-brand-secondary max-w-3xl mx-auto md:mx-0">
        Build your{" "}
        <span className="relative inline-block text-brand-primary">
          communication superpower
        </span>{" "}
        through email marketing
      </h1>

      {/* Subtext */}
      <p className="body-text md:text-[32px] text-brand-secondary max-w-3xl mx-auto md:mx-0 mt-6">
        Start sending emails to your list to boost your sales
      </p>

      {/* CTA Section */}
      <div className="mt-8 flex justify-center md:justify-start">
        <Button
          onClick={() => setShowPopup(true)}
          className="group flex items-center gap-2 md:px-6 md:py-4 px-4 py-3 text-lg md:text-xl bg-brand-primary text-white hover:bg-brand-hover transition shadow-lg hover:shadow-xl"
        >
          Let’s Collaborate
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>

        {/* Render the Popup. 
            React determines if the content inside renders based on the 'open' prop logic 
        */}
        <CalendlyPopup open={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </div>
  );
};

export default HeroContent;
