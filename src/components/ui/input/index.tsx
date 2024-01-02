import React from "react";
import { cn } from "@/utils/helper";

type InputType = {
  label: string;
  name: string;
  id: string;
  type: string;
  placeholder: string;
  className: string;
  value: string;
  autoFocus: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = React.forwardRef<HTMLInputElement, Partial<InputType>>(
  ({ className, ...props }, ref) => {
    const classes = cn(
      "border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm",
      className
    );

    return <input {...props} className={cn(classes, className)} ref={ref} />;
  }
);
