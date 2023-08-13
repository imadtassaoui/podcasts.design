import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("p-4 text-5 font-500 rounded-xl", {
  variants: {
    type: {
      primary: "bg-black text-white",
      secondary: "bg-white text-black",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ type, className }))}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
