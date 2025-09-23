import React from "react";
import { Mail, TrendingUp, Download } from "lucide-react";
import { Button } from "../../ui/Button";
import SectionDivider from "../../ui/SectionDivider";
import SketchCircle from "../../ui/SketchCircle";

const BelowFold = () => {
  return (
    <section className="relative w-full px-8 py-40 bg-brand-primary border-t-8 border-white ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left side with image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-8 border-white max-w-full aspect-[16/9]">
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop"
              alt="Email Marketing Success"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="space-y-8 ">
          <div className="space-y-6">
            <h2 className=" h2 font-bold">
              Your email list is directly linked to your{" "}
              <SketchCircle>profits</SketchCircle>
            </h2>
            <p className="text-lg">
              The more your clients view you as trustworthy, the more likely
              they are to buy from you
            </p>
          </div>

          {/* Download CTA */}
          <div className="p-6 rounded-xl bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <Download className="w-6 h-6 text-brand-maroon dark:text-pink-500" />
              <h3 className="text-xl font-semibold">
                Download my cheat sheet to email marketing
              </h3>
            </div>

            <Button
              variant="secondary"
              className="bg-brand-neutral text-brand-text"
            >
              Get Your Free Cheat Sheet
            </Button>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="w-6 h-6" />
              <p>
                More people have access to the internet than ever before. But we
                are frequently interrupted by ads and coming-soons. This
                interruption has led to shorter attention spans.
              </p>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6" />
              <p>
                Email cuts all that out. By opting to receive your emails,
                potential customers are focused on your message. Plus anyone
                with a smartphone already has an email address. So make use of
                what your customers already have.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slanted white border + section divider */}
      <SectionDivider />
    </section>
  );
};

export default BelowFold;
