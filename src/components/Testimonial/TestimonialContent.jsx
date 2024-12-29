import React from "react";

export const TestimonialContent = ({ testimonial }) => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto flex flex-col justify-start text-start items-start px-4">
      <p className="dark:text-white text-slate-700 text-4xl font-semibold mb-12 leading-tight text-center">
        {testimonial.quote}
      </p>

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
          <p className="dark:text-white  text-slate-700font-medium">
            {testimonial.name}
          </p>
          <p className="dark:text-gray-300 text-slate-600">
            {testimonial.position}
          </p>
        </div>
      </div>
    </div>
  );
};
