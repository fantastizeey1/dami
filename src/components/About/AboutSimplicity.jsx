import SectionFade from "../ui/SectionFade";

const AboutSimplicity = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-brand-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:mb-20">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="h2 font-bold mb-6 ">
              Email Marketing Doesn't Have to Be Complex
            </h2>
            <p className="text-xl leading-normal  mb-6">
              It takes time and effort to understand marketing lingo. We get it.
              Targeting your audience through several marketing channels can be
              exhausting. Trying to stay on top of everything ‘experts’ advise
              can quickly become overwhelming. You don’t have to experience
              marketing burnout now that you’ve found us. We take care of your
              emails, lead magnets and landing pages, the ingredients to boost
              your profits. Take the guesswork out of your marketing and watch
              your email list grow faster.
            </p>
          </div>
        </div>
      </div>
      <SectionFade
        fromColor="#FFD166"
        toColor="#06B6D4"
        height={150}
        curve="linear"
        className="absolute -bottom-[0] left-0 "
      />
    </section>
  );
};

export default AboutSimplicity;
