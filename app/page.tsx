import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Playground from "@/components/sections/Playground";
export default function Home(){
  return(
    <div className="  bg-black w-full text-snow  md:px-10 px-6 lg:px-15 min-h-screen ">
      <Hero />
      <Playground />
      <About />
    </div>
  )
}