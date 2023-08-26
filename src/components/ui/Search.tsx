import { FC } from "react";

//icons
import search from "@/icons/search.svg";
import Image from "next/image";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div className="p-3 flex gap-2 bg-[#E0E0E0] rounded-xl  dark:bg-dark-20 justify-start w-[208px] focus:w-full h-fit md:w-[260px]">
      <Image src={search} alt="search icon" />
      <input
        className="  bg-[#E0E0E0] dark:bg-dark-20  placeholder:text-light-60  text-dark-10 dark:text-light-90 text-base box-border focus:outline-none outline-none w-full focus:transition-width ease-in-out duration-300"
        placeholder="Search for a podcast"
        type="text"
      />
    </div>
  );
};

export default Search;
