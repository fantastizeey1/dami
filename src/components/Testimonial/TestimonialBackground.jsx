import React from "react";

export const TestimonialBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Left quote */}
      <div
        className="absolute -left-8 top-0 w-[400px] h-[400px] opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M169.333 169.333H84.6667V84.6667H169.333V169.333ZM169.333 0H84.6667C37.9733 0 0 37.9733 0 84.6667V169.333C0 216.027 37.9733 254 84.6667 254H169.333C216.027 254 254 216.027 254 169.333V84.6667C254 37.9733 216.027 0 169.333 0Z' fill='%23850000'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: "rotate(180deg)",
        }}
      />

      {/* Right quote */}
      <div
        className="absolute -right-8 bottom-0 w-[400px] h-[400px] opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M169.333 169.333H84.6667V84.6667H169.333V169.333ZM169.333 0H84.6667C37.9733 0 0 37.9733 0 84.6667V169.333C0 216.027 37.9733 254 84.6667 254H169.333C216.027 254 254 216.027 254 169.333V84.6667C254 37.9733 216.027 0 169.333 0Z' fill='%23850000'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};
