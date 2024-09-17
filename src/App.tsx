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
       <div className="space-y-20 md:space-y-0">
        <Navbar />
        <Hero />
        <About />
      </div>
      {/* <Skills /> */}
      {/* <OrbitSkills /> */}
      <div className="flex flex-col md:flex-row gap-8 items-center mx-4 md:mx-10">
        <div className="flex-1">
          <IconCloudSkills />
        </div>
        <div className="flex-1">
          <OrbitSkills />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mx-4 md:mx-5">
        <div className="flex-1">
          <Experience />
        </div>
        <div className="flex-1">
          <Education />
        </div>
      </div>
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
