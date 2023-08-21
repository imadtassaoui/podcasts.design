import { FC } from "react";
import Image from "next/image";

//components
import Headline from "./ui/Headline";
import Button from "./ui/Button";

//assets
import coffeeMobile from "@/assets/coffee-mobile.png";

interface CallToActionProps {}

const CallToAction: FC<CallToActionProps> = ({}) => {
  const headline: Array<string> = "Buy+us+a coffee+support+the+project+.".split(
    "+"
  );
  const keyword: string = "a coffee";

  return (
    <section className="flex overflow-hidden rounded-xl mx-4 my-8 flex-col gap-4  bg-dark-10 dark:bg-dark-15">
      <div className="flex flex-col gap-12 p-8">
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
        <Button variant="secondary" label="Buy us a coffee" />
      </div>
      <Image src={coffeeMobile} alt="coffee" className="w-full" />
    </section>
  );
};

export default CallToAction;
