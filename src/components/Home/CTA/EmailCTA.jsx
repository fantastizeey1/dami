import React, { useState } from "react";
import CTAContent from "./CTAContent";
import CTAButton from "./CTAButton";
import { useForm } from "../../../FormProvider";
import SectionFade from "../../ui/SectionFade";
import CalendlyPopup from "../../CalendlyPopup";
import { Button } from "../../ui/Button";
import { ArrowRight } from "lucide-react";

const EmailCTA = () => {
  const { setShowForm } = useForm();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-brand-neutral pt-24 pb-56">
      <div className="relative flex flex-col items-center justify-between gap-16">
        <CTAContent />
        <div className="mt-8 flex justify-center md:justify-start">
          <Button
            onClick={() => setShowPopup(true)}
            className="group flex items-center gap-2 md:px-6 md:py-4 px-4 py-3 text-lg md:text-xl bg-brand-primary text-white hover:bg-brand-hover transition"
          >
            Let’s Collaborate
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <CalendlyPopup open={showPopup} onClose={() => setShowPopup(false)} />
        </div>
      </div>
      <SectionFade
        fromColor="#F5F5DC"
        toColor="#CDB4DB"
        height={150}
        curve="linear"
        className="absolute -bottom-[0] left-0 z-10"
      />
    </section>
  );
};

export default EmailCTA;
