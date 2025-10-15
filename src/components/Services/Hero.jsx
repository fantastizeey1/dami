import { useInView } from "./useInView";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const Hero = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-secondary ">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 min-h-screen flex items-center pt-24">
        <div className="max-w-5xl ">
          <h1 className="h1 font-bold text-brand-text mb-8 pb-4 bg-clip-text   animate-fade-in">
            Words that sparkle, <br />
            Strategy that sticks
          </h1>
          <p className="text-body text-brand-text md:text-2xl  mb-12 animate-fade-in-delay">
            We write your emails so that you can focus on the nitty-gritty of
            your business.
          </p>
          <a href="#services">
            <Button className="animate-bounce-subtle px-8 py-4" size="lg">
              Let’s Collaborate
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
