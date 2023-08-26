import { FC } from "react";

import type { Metadata } from "next";
import Headline from "@/components/ui/Headline";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Search from "@/components/ui/Search";
import FilterElement from "@/components/ui/FilterElement";

export const metadata: Metadata = {
  title: "Browse Podcasts",
  description: "Browse podcasts by category, language, and more.",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const heading: Array<string> = "Browse+cherry-picked+design+podcasts+.".split(
    "+"
  );
  const keyword: string = "cherry-picked";

  return (
    <div className="">
      <div className="flex flex-col px-4 pt-16 pb-8 gap-8 lg:px-16">
        <Headline variant={"h2"} heading={heading} keyword={keyword} />
        <div className="flex w-full gap-8 flex-col md:flex-row md:justify-between">
          <div className=" flex  flex-wrap gap-2">
            <FilterElement label="All" />
            <FilterElement label="UI/UX Design" />
            <FilterElement label="Branding" />
            <FilterElement label="All" />
            <FilterElement label="UI/UX Design" />
            <FilterElement label="Branding" />
          </div>
          <Search />
        </div>
      </div>
      <div className="px-4 pb-16 flex  flex-wrap w-full gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default page;
