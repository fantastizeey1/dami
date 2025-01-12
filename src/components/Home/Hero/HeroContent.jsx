import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../../ContactForm";

const HeroContent = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full md:w-1/2">
      <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
        Build your{" "}
        <span className="bg-gradient-to-r from-brand-maroon via-purple-600 to-pink-600 bg-clip-text text-transparent">
          communication superpower
        </span>{" "}
        through email marketing
      </h1>
      <p className="font-body text-xl text-gray-600 dark:text-gray-300 mb-8">
        Start sending emails to your list to boost your sales
      </p>
      <div className="space-y-3">
        <button
          onClick={() => setShowForm(true)}
          className="group inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-brand-maroon via-purple-600 to-pink-600 rounded-xl hover:opacity-90 transition-opacity"
        >
          Let's Collaborate
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default HeroContent;
