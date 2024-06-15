import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("whitespace-nowrap", {
  variants: {
    variant: {
      primary: "bg-neutral-800 text-white",
      ghost:
        "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
      link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
    },
    size: {
      sm: "px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className="border border-transparent rounded-xl bg-gradient-to-b from-neutral-600 to-neutral-800 bg-origin-border bg-clip-['content-box, border-box'] inline-flex items-center justify-center overflow-hidden">
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
