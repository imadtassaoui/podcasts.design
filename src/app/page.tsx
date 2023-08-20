import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

//components
import Hero from "@/sections/Hero";
import Selection from "@/sections/Selection";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "HomePage",
  description: "TODO",
};

export default function Home() {
  return (
    <main className="">
      <div className="fixed bottom-0 left-0">
        <ThemeToggle />
      </div>
      <Hero />
      <Selection />
      <Footer />
    </main>
  );
}
