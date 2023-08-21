import Image from "next/image";
import { FC } from "react";

//assets
import coffeeMobile from "@/assets/coffee-mobile.png";
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const headline: Array<string> = "Buy+us+a coffee+support+the+project+.".split(
    "+"
  );
  const keyword: string = "a coffee";
  return (
    <footer className="flex w-full flex-col gap-8 p-1 bg-dark-10 dark:bg-dark-15">
      <div className="flex flex-col gap-12  ">
        <div className="flex flex-col gap-6">
          <Headline variant="h2" heading={headline} keyword={keyword} />{" "}
          <p>
            If you enjoy the content on this design podcasts library and find it
            valuable, consider supporting the project by buying us a coffee.
            Thanks a latte!
          </p>
        </div>
        <Button variant="secondary" label="Buy us a coffee" />
      </div>
      <Image src={coffeeMobile} alt="coffee" />
    </footer>
  );
};

export default Footer;
