import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 shadow-lg shadow-lime-500/25 hover:shadow-xl hover:shadow-lime-500/30 hover:from-lime-500 hover:to-lime-600 hover:scale-105 active:scale-95 border-0",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        outline:
          "border-2 border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-105 active:scale-95",
        link: "text-lime-600 underline-offset-4 hover:underline hover:text-lime-700",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base font-bold",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
