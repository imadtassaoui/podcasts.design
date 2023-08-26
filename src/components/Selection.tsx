import Button from "@/components/ui/Button";
import Span from "@/components/ui/Span";
import Image from "next/image";
import { FC } from "react";

//icons
import coffee from "@/icons/coffee.svg";
import Card from "@/components/ui/Card";
import Headline from "@/components/ui/Headline";
import Link from "next/link";

const Selection: FC = ({}) => {
  const heading: Array<string> = "Browse+cherry-picked+design+podcasts+.".split(
    "+"
  );
  const keyword: string = "cherry-picked";

  return (
    <section className="flex flex-col gap-16 px-4 py-8 lg:px-16 lg:flex-row lg:justify-between lg:py-24 lg:items-center">
      <div className="flex flex-col gap-12 lg:w-1/2">
        <div className="flex flex-col gap-6">
          <Headline variant="h2" heading={heading} keyword={keyword} />
          <p>
            Here, you can explore a carefully selected array of insightful
            design discussions and conversations. Immerse yourself in the world
            of creativity, innovation, and aesthetics as we bring you the finest
            cherry-picked design podcasts. Happy listening!
          </p>
        </div>
        <Link href="/browse">
          <Button
            variant="primary"
            label="Discover podcasts"
            icon="headphones"
          />
        </Link>
      </div>
      <div className="flex flex-col w-full gap-4 md:flex-row  md:flex-wrap md:justify-end">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Selection;
