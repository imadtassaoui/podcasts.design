import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import Span from "./Span";
import { cn } from "@/lib/utils";

const healineVariants = cva("flex flex-wrap", {
  variants: {
    variant: {
      h1: "text-[64px] leading-[60px]",
      h2: "text-[40px]",
    },
  },
});

interface HeadlineProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof healineVariants> {
  heading: Array<string>;
  keyword: string;
  spanClass?: string;
}

const Headline: FC<HeadlineProps> = ({
  className,
  variant,
  heading,
  keyword,
  spanClass,
}) => {
  if (variant === "h1")
    return (
      <h1 className={cn(healineVariants({ variant, className }))}>
        {heading.map((span, index) => {
          return (
            <Span
              variant={span === keyword ? "keyword" : null}
              size="h1"
              key={index}
              className={spanClass && span === keyword ? spanClass : ""}
            >
              {span}
            </Span>
          );
        })}
      </h1>
    );
  else
    return (
      <h2 className={cn(healineVariants({ variant, className }))}>
        {heading.map((span, index) => {
          return (
            <Span
              variant={span === keyword ? "keyword" : null}
              size="h2"
              key={index}
              className={spanClass && span === keyword ? spanClass : ""}
            >
              {span}
            </Span>
          );
        })}
      </h2>
    );
};

export default Headline;
