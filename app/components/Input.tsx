import React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ placeholder, className, ...props }, ref) => {
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
            rounded-2xl
            placeholder-gray-400
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent
            autofill:bg-zinc-700 autofill:text-white
            ${className}
        `}
      {...props}
    />
  );
});

Input.displayName = "Input";
