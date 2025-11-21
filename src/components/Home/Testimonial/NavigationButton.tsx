export const NavigationButton = ({
  direction = "left",
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`absolute z-10  rounded-full p-4 
        ${direction === "left" ? "left-4" : "right-4"} 
         transition-colors 

        `}
      aria-label={`${direction === "left" ? "Previous" : "Next"} testimonial`}
    >
      {children}
    </button>
  );
};
