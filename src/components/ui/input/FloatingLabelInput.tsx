import { cn } from "@/utils/helper";
import React, { useState } from "react";

type FloatingLabelInputProps = {
  label: string;
  type?: "text" | "number";
};
const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type = "text",
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative border-b border-gray-300 rounded-md shadow-sm w-full">
      <input
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        className={cn(
          `w-full z-10 relative py-2 bg-transparent focus:outline-none`,
          focus || value ? "" : ""
        )}
      />
      <label
        className={cn(
          "absolute left-0 top-0 transition-all z-0",
          focus || value ? "transform -translate-y-2 scale-75" : "py-2"
        )}
        style={{ transformOrigin: "0 0" }}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
