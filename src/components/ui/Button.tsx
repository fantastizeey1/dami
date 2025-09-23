import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-semibold rounded-2xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

const sizeStyles = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

const variantStyles = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-hover focus:ring-brand-primary",
  secondary:
    "border bg-brand-secondary border-brand-secondary text-brand-primary hover:bg-brand-hover hover:text-white focus:ring-brand-secondary",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props // ✅ forward everything else (onClick, aria-label, type, etc.)
}) => {
  return (
    <button
      {...props} // ✅ ensures onClick works
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
