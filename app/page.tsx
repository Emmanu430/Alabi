import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Playground from "@/components/sections/Playground";
export default function Home(){
  return(
    <main className="  bg-black w-full text-snow  md:px-10 px-6 lg:px-15 min-h-screen ">
      <Hero />
      <Playground />
      <Work />
      <About />
    </main>
  )
}