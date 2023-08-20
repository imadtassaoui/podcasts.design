import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignInButton";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  // const session = await getServerSession();
  return (
    <div className=" px-4 pt-8 top-0 left-0 w-full flex justify-between">
      <Link href="/" className="text-xl flex items-center">
        <span className="">podcasts</span>
        <span className="text-orange-50">.</span>
        <span className="">design</span>
      </Link>

      <Link
        href="/browse"
        className="py-2 px-3 rounded-xl text-dark-10 text-xl bg-light-85 hover:bg-light-80 dark:text-light-90 dark:bg-dark-20 dark:hover:bg-dark-30 "
      >
        Discover+
      </Link>
    </div>
  );
};

export default Navbar;
