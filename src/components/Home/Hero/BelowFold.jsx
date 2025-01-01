import React from "react";
import { Mail, TrendingUp, Download } from "lucide-react";

const BelowFold = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-24 bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left side with image */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-brand-maroon to-pink-600 rounded-full opacity-20 blur-2xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop"
              alt="Email Marketing Success"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Your email list is directly linked to your{" "}
              <span className="bg-gradient-to-r from-brand-maroon to-pink-600 bg-clip-text text-transparent">
                profits
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The more your clients view you as trustworthy, the more likely
              they are to buy from you
            </p>
          </div>

          {/* Download CTA */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <Download className="w-6 h-6 text-brand-maroon dark:text-pink-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Download my cheat sheet to email marketing
              </h3>
            </div>
            <button className="w-full bg-gradient-to-r from-brand-maroon via-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Your Free Cheat Sheet
            </button>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-brand-maroon dark:text-pink-500 flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-300">
                More people have access to the internet than ever before. But we
                are frequently interrupted by ads and coming-soons. This
                interruption has led to shorter attention spans.
              </p>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-brand-maroon dark:text-pink-500 flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-300">
                Email cuts all that out. By opting to receive your emails,
                potential customers are focused on your message. Plus anyone
                with a smartphone already has an email address. So make use of
                what your customers already have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowFold;
