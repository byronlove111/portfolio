import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lowercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-background text-primary border-2 border-primary hover:scale-110 transition-transform duration-300",
        link: "bg-background text-primary font-normal hover:underline underline-offset-4",
        linkBold:
          "text-primary font-bold hover:scale-110 transition-transform duration-300 underline underline-offset-4",
        smallButton:
          "bg-background text-primary border-[1px] font-normal border-primary",
      },
      size: {
        default: "h-10 px-6 py-2 min-w-40",
        transparent: "h-10",
        small: "h-7 w-16 px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
