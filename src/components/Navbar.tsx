import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignInButton";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navbar = async () => {
  // const session = await getServerSession();
  return (
    <div className=" px-4 pt-8 top-0 left-0 w-full flex justify-between lg:px-16">
      <Link href="/" className="text-xl flex items-center">
        <span className="">podcasts</span>
        <span className="text-orange-50">.</span>
        <span className="">design</span>
      </Link>

      <Link href="/browse" className={cn(buttonVariants({ variant: "link" }))}>
        Discover+
      </Link>
    </div>
  );
};

export default Navbar;
