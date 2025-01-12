import React, { useState } from "react";
import { useForm } from "../../FormProvider";

const CTAButton = () => {
  const { setShowForm } = useForm();

  return (
    <button
      onClick={() => setShowForm(true)}
      className="bg-[#850000] px-4 py-2 rounded-2xl hover:bg-[#ac4949] text-white text-sm mr-16 md:mr-0"
      aria-label="Book a Strategy Call"
    >
      Book a Strategy Call
    </button>
  );
};

export default CTAButton;
