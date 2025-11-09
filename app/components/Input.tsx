import React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={`
            p-4
            w-full
            text-white 
            text-base
            bg-gray-800
            border-transparent
            rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        `}
        {...props}
      />
    )
  }
)