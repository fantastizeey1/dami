export const TestimonialContent = ({ testimonial }) => {
  return (
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-start md:text-start items-start px-4 text-justify">
      <h3 className="h3   mb-4">{testimonial.quote}</h3>

      <div className="flex items-center text-start justify-start gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/48";
          }}
        />
        <div>
          <p className="body-text font-bold">{testimonial.name}</p>
          <p className="body-text">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};
