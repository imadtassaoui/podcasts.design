import { FC } from "react";

import type { Metadata } from "next";
import Headline from "@/components/ui/Headline";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Search from "@/components/ui/Search";

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
      <div className="px-4 py-16">
        <Headline variant={"h2"} heading={heading} keyword={keyword} />
        <div className="flex w-full justify-between">
          {/* //filter
        //search */}
          <div className="filter w-3"></div>
          <Search />
        </div>
      </div>
      <div className="px-4 py-16">
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
