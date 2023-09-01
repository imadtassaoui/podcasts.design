import * as React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Headline from "@/components/ui/Headline";
import Link from "next/link";

//icons
import coffee from "@/icons/Coffee.svg";
//assets
import heroImageMobile from "@/assets/hero-image-mobile.png";
import heroImageTablet from "@/assets/hero-image-tablet.png";
import heroImageDesk from "@/assets/hero-image-desk.png";

const Hero = () => {
  const h1: Array<string> = "Most loved+design+podcasts+library+.".split("+");
  const h1Keyword: string = "Most loved";

  return (
    <section className="flex flex-col gap-8 py-16 w-full lg:flex-row lg:items-center lg:px-16 lg:justify-between lg:py-24 lg:pt-12">
      <div className="flex flex-col gap-12 px-4 lg:px-0  lg:w-2/5">
        <div className="flex flex-col gap-8 ">
          <Headline variant="h1" heading={h1} keyword={h1Keyword} />
          <p>
            Lorem ipsum dolor sit amet consectetur. Nulla ipsum purus amet
            fermentum dis velit vestibulum. Sed id ullamcorper in urna malesuada
            id ipsum egestas ipsum.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/browse">
            <Button label="Discover+" variant="primary" icon="headphones" />
          </Link>
          <Link
            target="_blank"
            href="https://www.buymeacoffee.com/podcasts.design"
          >
            <Button label="Support us" variant="secondary" icon="coffee" />
          </Link>
        </div>
      </div>
      {/* {window.innerWidth <= 640 ? (
        <Image
          src={heroImageMobile}
          alt="hero image"
          className="w-full lg:w-3/5 "
        />
      ) : window.innerWidth <= 768 ? (
        <Image
          src={heroImageTablet}
          alt="hero image"
          className="w-full lg:w-3/5 "
        />
      ) : window.innerWidth <= 1024 ? (
        <Image
          src={heroImageDesk}
          alt="hero image"
          className="w-full lg:w-3/5 "
        />
      ) : null} */}

      <Image
        src={heroImageMobile}
        alt="hero image"
        className="w-full lg:w-3/5 "
      />
    </section>
  );
};

export default Hero;
