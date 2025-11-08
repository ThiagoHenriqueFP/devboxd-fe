import { ButtonHTMLAttributes } from 'react';
import {tv, VariantProps} from 'tailwind-variants';

export const variantButton = tv({
    base: 'font-semibold text-white text-sm py-1 px-4 rounded-full active:opacity-80',
    
    variants: {
        variant: {
            solid: 'text-white',
            outline: 'bg-transparent border-2 border-white text-white',
            ghost: 'bg-transparent text-white hover:bg-white hover:text-black',
        },
        color: {
            primary: 'bg-purple-600 hover:bg-purple-700',
            secondary: 'bg-red-600 hover:bg-red-700',
            success: 'bg-green-600 hover:bg-green-700',
            warning: 'bg-yellow-500 hover:bg-yellow-600'
        },
        size: {
            small: 'text-xs py-1 px-3',
            medium: 'text-sm py-2 px-4',
            large: 'text-lg py-3 px-6'
        }, 
        radius: {
            none: 'rounded-none',
            sm: 'rounded-md',
            md: 'rounded-lg', 
            lg: 'rounded-xl', 
            full: 'rounded-full', 
        },
        disabled: {
            true: 'opacity-50 cursor-not-allowed',
            false: ''
        },
    },
    compoundVariants: [
        {
            variant: 'solid',
            color: 'primary',
            class: 'bg-purple-600 hover:bg-purple-700'
        },
        {
            variant: 'solid',
            color: 'secondary',
            class: 'bg-red-600 hover:bg-red-700'
        },
        {
            variant: 'outline',
            color: 'primary',
            class: 'border-purple-600 text-purple-600 hover:bg-purple-100'
        },
        {
            variant: 'outline',
            color: 'secondary',
            class: 'border-red-600 text-red-600 hover:bg-red-100'
        },
        {
            variant: 'ghost',
            color: 'primary',
            class: 'text-purple-600 hover:bg-purple-100'
        },
        {
            variant: 'ghost',
            color: 'secondary',
            class: 'text-red-600 hover:bg-red-100'
        },
    ],
    defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'medium',
        radius: 'md',
        disabled: false
    }
});

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof variantButton> {
  asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  return <button {...props} className={variantButton({ variant, className })} />
}