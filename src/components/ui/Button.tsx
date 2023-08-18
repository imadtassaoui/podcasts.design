import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva("p-4 text-5 font-500 rounded-xl", {
  variants: {
    variant: {
      primary: "bg-black text-white dark:bg-white dark:text-black",
      secondary: "bg-white text-black",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, className }))}
        disabled={isLoading}
      >
        {isLoading ? <Loader2 /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
