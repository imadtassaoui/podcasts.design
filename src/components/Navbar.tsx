import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignInButton";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <div>
      <Link href="/">podcasts.design</Link>

      <ThemeToggle />

      {session ? (
        <>
          <Link
            className={buttonVariants({ variant: "primary" })}
            href="/dashboard"
          >
            Dashboard
          </Link>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Navbar;
