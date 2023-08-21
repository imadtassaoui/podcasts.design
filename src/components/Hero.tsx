import Button from "@/components/ui/Button";
import Image from "next/image";

//icons
import coffee from "@/icons/coffee.svg";
//assets
import heroImageMobile from "@/assets/hero-image-mobile.png";
import Headline from "@/components/ui/Headline";

const Hero = () => {
  const h1: Array<string> = "Most loved+design+podcasts+library+.".split("+");
  const h1Keyword: string = "Most loved";

  return (
    <section className="flex flex-col gap-8 py-16 w-full">
      <div className="flex flex-col gap-16 px-4 ">
        <div className="flex flex-col gap-8 ">
          <Headline variant="h1" heading={h1} keyword={h1Keyword} />
          <p>
            Lorem ipsum dolor sit amet consectetur. Nulla ipsum purus amet
            fermentum dis velit vestibulum. Sed id ullamcorper in urna malesuada
            id ipsum egestas ipsum.
          </p>
        </div>
        <div className="flex gap-2">
          <Button label="Discover+" variant="primary">
            <Image className="" src={coffee} alt="icon" />
          </Button>
          <Button label="Support us" variant="secondary">
            <Image src={coffee} alt="icon" />
          </Button>
        </div>
      </div>

      <Image src={heroImageMobile} alt="hero image" className="w-full" />
    </section>
  );
};

export default Hero;
