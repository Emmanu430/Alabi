import Hero from "@/components/sections/Hero";
import Playground from "@/components/sections/Playground";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="px-6 md:px-10 lg:px-15">
      <Hero />
      <Playground />
      <Work />
      <About />
    </main>
  );
}