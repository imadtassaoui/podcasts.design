import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full flex justify-between px-4 mb-12 lg:px-16 lg:mb-8">
      <p className="text-base">©️ podcasts.design</p>
      <p className="text-base">By Imad</p>
    </footer>
  );
};

export default Footer;
