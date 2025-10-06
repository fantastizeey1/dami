import { ArrowRight } from "lucide-react";
import BackgroundSlider from "../BackgroundSlider";
import SectionDivider from "../ui/SectionDivider";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <BackgroundSlider
        images={backgroundImages}
        duration={60}
        overlay={false}
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/40 "></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="lg:max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text ">
            Email Always Wins the Day
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 ">
            We prioritise small and medium-sized businesses interested in
            building trust through email marketing excellence.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent rounded-full  transition-all transform hover:scale-105 animate-bounce-subtle"
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
