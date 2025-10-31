import React, { useState } from "react";
import CTAContent from "./CTAContent";
import CTAButton from "./CTAButton";
import { useForm } from "../../../FormProvider";
import SectionFade from "../../ui/SectionFade";

const EmailCTA = () => {
  const { setShowForm } = useForm();

  return (
    <section className="relative w-full overflow-hidden bg-brand-neutral pt-24 pb-56">
      <div className="relative flex flex-col items-center justify-between gap-16">
        <CTAContent />
        <div className="flex-shrink-0 animate-float">
          <CTAButton text="Ask us how" onClick={() => setShowForm(true)} />
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
