import React from "react";
import ImageColumn from "./ImageColumn";

const column1Images = [
  {
    url: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=500&h=600&fit=crop",
    alt: "Modern Email Newsletter Template",
  },
  {
    url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=600&fit=crop",
    alt: "Email Marketing Campaign",
  },
  {
    url: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=500&h=600&fit=crop",
    alt: "Email Analytics Dashboard",
  },
  {
    url: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=500&h=600&fit=crop",
    alt: "Email Design Layout",
  },
];

const column2Images = [
  {
    url: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=500&h=600&fit=crop",
    alt: "Marketing Analytics",
  },
  {
    url: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=500&h=600&fit=crop",
    alt: "Email Campaign Results",
  },
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=600&fit=crop",
    alt: "Email Marketing Stats",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=600&fit=crop",
    alt: "Marketing Performance",
  },
];

const Hero = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-8 min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-brand-black dark:text-white">
            Email Marketing <br />
            <span className="bg-gradient-to-r from-brand-maroon via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-rose-500 dark:via-purple-500 dark:to-pink-500">
              that works for you
            </span>
          </h1>
          <p className="font-body text-xl text-brand-gray dark:text-gray-300 mb-8">
            Delight your audience with unique emails, crafted with ease.
          </p>
          <div className="space-y-3">
            <a
              href="#start"
              aria-label="Start for free"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-body font-bold text-white transition-all duration-200 bg-gradient-to-r from-brand-maroon via-purple-600 to-pink-600 hover:opacity-90 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-maroon dark:from-rose-500 dark:via-purple-500 dark:to-pink-500"
            >
              <span>Start for free</span>
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </a>
            <p className="font-body text-sm text-brand-gray dark:text-gray-400">
              1,500 emails & 100 contacts per month.{" "}
              <span className="font-semibold">No credit card required</span>
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="w-full md:w-1/2 flex justify-center gap-8 overflow-hidden h-[600px]">
          <ImageColumn images={column1Images} direction="up" />
          <ImageColumn images={column2Images} direction="down" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
