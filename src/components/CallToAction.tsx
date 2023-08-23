import { FC } from "react";
import Image from "next/image";

//components
import Headline from "./ui/Headline";
import Button from "./ui/Button";

//assets
import coffeeMobile from "@/assets/coffee-tablet.png";

interface CallToActionProps {}

const CallToAction: FC<CallToActionProps> = ({}) => {
  const headline: Array<string> =
    "Buy+us+a coffee,+support+the+project+.".split("+");
  const keyword: string = "a coffee,";

  return (
    <section className="flex overflow-hidden rounded-xl mx-4 my-8 flex-col gap-4  bg-dark-10 dark:bg-dark-15 md:flex-row">
      <div className="flex flex-col gap-12 p-8 md:p-12 md:w-10/12">
        <div className="flex flex-col gap-6">
          <Headline
            variant="h2"
            heading={headline}
            keyword={keyword}
            className="text-light-90"
            spanClass="text-dark-10 dark:text-light-90"
          />{" "}
          <p className="text-light-90">
            If you enjoy the content on this design podcasts library and find it
            valuable, consider supporting the project by buying us a coffee.
            Thanks a latte!
          </p>
        </div>
        <Button
          variant="primary"
          label="Buy us a coffee"
          icon="coffee"
          iconColor="#1B1918"
          className="text-dark-10 bg-light-85 dark:bg-light-85 hover:bg-light-80 hover:dark:bg-light-80"
        />
      </div>
      <Image
        src={coffeeMobile}
        alt="coffee"
        className="w-full md:w-auto md:h-full md:object-contain shadow-lg"
      />
    </section>
  );
};

export default CallToAction;
