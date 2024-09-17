import { Navbar } from "@/components/ui/navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
// import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import IconCloudSkills from "@/sections/IconCloudSkills";
import OrbitSkills from "./sections/OrbitSkills";
import Testimonial from "./sections/Testimonial";
// import OrbitSkills from "./sections/OrbitSkills";
export default function App() {
  return (
    <main className="w-full h-auto poppins-regular">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <OrbitSkills/> */}
      <div className="flex gap-8 items-center ">
      <IconCloudSkills />
      <OrbitSkills />
    </div>
      <div className="flex flex-col md:flex-row">
        <Experience />
        <Education />
      </div>
      <Projects />
      <Testimonial/>
      <Contact />
      <Footer />
    </main>
  );
}
