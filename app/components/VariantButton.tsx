import { ButtonHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const variantButton = tv({
    base: 'font-semibold text-white text-sm py-1 px-4 rounded-full active:opacity-80 transition-colors duration-200',
    
    variants: {
        variant: {
            primary: 'bg-gray-600 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full ',
            secondary: 'bg-blue-600 hover:bg-gray-700 text-white text-xs py-2 px-4 rounded-full ',
            terciary: 'bg-red-600 hover:bg-gray-700 text-white text-xs py-2 px-4 rounded-full ',
            quarternary: 'bg-purple-600 hover:bg-gray-700 text-white text-xs py-2 px-4 rounded-full ',
            quinternary: 'bg-none hover:bg-gray-700 text-white text-xs py-2 px-4 rounded-full ',
            solid: 'text-white',
            outline: 'bg-transparent border-2 border-white text-white',
            ghost: 'bg-transparent text-white hover:bg-white hover:text-black',
        },
    },
  },
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof variantButton> {
  asChild?: boolean;
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={variantButton({ variant, className })} />
  );
}
