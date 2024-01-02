import React from "react";
import { cn } from "@/utils/helper";

type ButtonType = {
  children: React.ReactNode;
  variant: "outline" | "default";
  disabled: boolean;
  className: string;
  type: "submit" | "button";
  title: string;
  onClick: () => void;
};
export const Button: React.FC<Partial<ButtonType>> = ({
  children,
  variant,
  disabled,
  type,
  className,
  ...props
}) => {
  const variantClasses = {
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    default: "border",
    // Add other variants here...
  };

  // Common classes for all buttons
  const commonClasses = "px-4 py-2 rounded focus:outline-none focus:ring";

  // Disabled state classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Combine all classes
  const classes = cn(
    commonClasses,
    variantClasses[variant || "default"] || "default",
    disabledClasses,
    className
  );

  return (
    <button {...props} type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};
