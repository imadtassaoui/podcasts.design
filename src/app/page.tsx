import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

//components
import Hero from "@/components/Hero";
import Selection from "@/components/Selection";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

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
      <CallToAction />
      <Footer />
    </main>
  );
}
