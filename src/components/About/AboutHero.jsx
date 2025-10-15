import { ArrowRight } from "lucide-react";
import BackgroundSlider from "../BackgroundSlider";
import { Button } from "../ui/Button";

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
    alt: "Modern Workspace with Laptop",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
    alt: "Team Collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop",
    alt: "Analytics Dashboard",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
    alt: "Startup Team Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
    alt: "Digital Marketing Presentation",
  },
];

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-secondary">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 min-h-screen flex items-center pt-24 ">
        <div className="  md:max-w-3xl">
          <h1 className="h1 text-brand-text  md:mx-0 mb-9">
            Email Always Wins the Day
          </h1>
          <p className="body-text  md:text-[32px] mb-8 leading-normal">
            We prioritise small and medium-sized businesses interested in
            building trust through email.
          </p>
          <p className="body-text   md:text-[32px] mb-12 leading-normal">
            We get excited by all things copywriting, turning words to wonder.
          </p>
          <a href="#services">
            <Button className="animate-bounce-subtle px-8 py-4" size="lg">
              Discover How
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
