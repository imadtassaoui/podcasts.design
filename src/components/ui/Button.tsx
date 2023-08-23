import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";

//icons
import headphones from "@/icons/headphones.svg";
import coffee from "@/icons/coffee.svg";
import Icon from "@/icons/Icon";

export const buttonVariants = cva(
  "p-4 self-start w-auto text-5 text rounded-xl text-xl transition-colors ease-in duration-400 flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        primary:
          "bg-dark-10 text-light-90 dark:bg-light-90 dark:text-dark-10 dark:hover:bg-light-85",
        secondary:
          "bg-light-85 text-dark-10 hover:bg-light-80 dark:bg-dark-20 dark:text-light-90 dark:hover:bg-dark-30",
        link: "py-2 px-3 rounded-xl text-dark-10 text-base bg-light-85 hover:bg-light-80 dark:text-light-90 dark:bg-dark-20 dark:hover:bg-dark-30 ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  label?: string;
  icon?: string;
  iconColor?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      isLoading,
      label,
      icon,
      iconColor,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, className }))}
        disabled={isLoading}
      >
        {icon === "headphones" ? (
          <Icon icon={icon} color={iconColor ? iconColor : ""} />
        ) : icon === "coffee" ? (
          <Icon icon={icon} color={iconColor ? iconColor : ""} />
        ) : null}
        <label>{label}</label>
        {/* {isLoading ? <Loader2 className="" /> : null} */}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
