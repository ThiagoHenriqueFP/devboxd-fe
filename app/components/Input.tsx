import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={`
            p-2
            w-full
            text-white 
            text-base
            bg-zinc-700
            border-transparent
            rounded-full
            placeholder-gray-400
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${className}
        `}
      {...props}
    />
  );
});

Input.displayName = "Input";
