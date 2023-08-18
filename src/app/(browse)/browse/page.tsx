import { FC } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Podcasts",
  description: "Browse podcasts by category, language, and more.",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div>Hello</div>;
};

export default page;
