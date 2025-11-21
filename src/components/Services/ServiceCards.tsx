import SectionFade from "../ui/SectionFade";
import React from "react";
import ServiceSection from "../Home/Services/ServiceSection";

export type Service = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
};

interface ServiceCardsProps {
  services: Service[];
}

const ServiceCards = ({ services }: ServiceCardsProps) => {
  return (
    <section className="relative w-full px-4 sm:px-8 py-56 bg-brand-primary">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceSection
              key={service.title}
              service={service}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <SectionFade
        fromColor="#FF6F61"
        toColor="#F5F5DC"
        height={150}
        curve="linear"
        className="absolute -bottom-[1px] left-0"
      />
    </section>
  );
};

export default ServiceCards;
