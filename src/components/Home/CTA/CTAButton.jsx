// CTAButton.jsx

import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/Button";

const CTAButton = ({
  text,
  onClick,
  className = "",
  iconClassName = "",
  gradientClassName = "",
  ...props
}) => {
  return (
    <Button onClick={onClick}>
      <span className="relative flex items-center text-xl md:text-2xl">
        {text}
        <ArrowRight
          className={`w-6 h-6 md:w-8 md:h-8 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${iconClassName}`}
        />
      </span>
    </Button>
  );
};

export default CTAButton;
