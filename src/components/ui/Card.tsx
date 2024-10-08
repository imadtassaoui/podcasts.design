import { FC } from "react";

//assets
import sample from "@/assets/podcast-sample.png";
import Image from "next/image";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  "flex gap-4 w-full p-2 pb-4 rounded-xl border dark:border-dark-30 dark:bg-dark-20 border-light-85 bg-light-95 md:w-[223px]",
  {
    variants: {
      variant: {
        verti: "flex-col",
        hori: "flex-row",
      },
      text: {
        full: "flex flex-col px-2 gap-1 w-full",
        partial: "flex flex-col px-2 gap-1 w-3/5",
      },
    },
    defaultVariants: {
      variant: "verti",
      text: "full",
    },
  }
);

interface cardsProps {}

const Card: FC<cardsProps> = ({}) => {
  return (
    <div className="pt-2 ">
      <div className="flex flex-col gap-4 w-full p-2 pb-4 rounded-xl border dark:border-dark-30 dark:bg-dark-20 border-light-85 bg-light-95 md:w-[223px]">
        <Image
          src={sample}
          alt="podcast sample"
          className="w-full rounded-lg shadow-xl"
        />
        <div className="flex flex-col px-2 gap-1 w-3/5">
          <h3 className="text-xl  font-bold">NN/g UX Podcast</h3>
          <p className="text-xl  ">Nielsen Norman Group</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
