import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

export const spanVariants = cva("rounded-xl last:text-orange-50 ", {
  variants: {
    variant: {
      keyword: "bg-light-85 dark:bg-dark-20 ",
    },
    size: {
      h1: "p-2 last:mx-[-16px]",
      h2: "px-1 last:mx-[-4px]",
    },
  },
});

interface SpanProps
  extends ButtonHTMLAttributes<HTMLBodyElement>,
    VariantProps<typeof spanVariants> {}

const Span: FC<SpanProps> = (
  { className, variant, size, children, ...props },
  ref
) => {
  return (
    <span
      ref={ref}
      {...props}
      className={cn(spanVariants({ variant, size, className }))}
    >
      {children}
    </span>
  );
};

Span.displayName = "Span";
export default Span;
