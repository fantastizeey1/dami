import React, { useState } from "react";
import CTAContent from "./CTAContent";
import CTAButton from "./CTAButton";
import { useForm } from "../../../FormProvider";

const EmailCTA = () => {
  const { setShowForm } = useForm();

  return (
    <section className="relative w-full overflow-hidden bg-brand-neutral py-24">
      <div className="relative flex flex-col items-center justify-between gap-16">
        <CTAContent />
        <div className="flex-shrink-0 animate-float">
          <CTAButton text="Ask us how" onClick={() => setShowForm(true)} />
        </div>
      </div>
    </section>
  );
};

export default EmailCTA;
