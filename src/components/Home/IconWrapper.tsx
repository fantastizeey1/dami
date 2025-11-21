import type { ComponentType } from "react";

type IconWrapperProps = {
  Icon: ComponentType<{ className?: string }>;
};

const IconWrapper = ({ Icon }: IconWrapperProps) => {
  return (
    <div className="relative group">
      <Icon className="w-full h-full text-text animate-float" />
    </div>
  );
};

export default IconWrapper;
