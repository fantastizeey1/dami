import React from "react";
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
            Email Always Wins the Day
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 animate-fade-in-delay">
            We prioritize small and medium-sized businesses interested in
            building trust through email marketing excellence.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 animate-bounce-subtle"
          >
            Discover How
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
