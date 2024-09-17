import Project from "@/components/ProjectCard";
import scThumbnail from "@/assets/images/sanjivanihome.png";
import lapkartThumbnail from "@/assets/images/mylapkart1.png";

export default function Projects() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="projects">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Projects
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-7 md:mx-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap mt-12 md:justify-center ">
          <Project
            title="Mylapkart"
            description="An e-commerce platform developed using React, Node.js, Express, and MongoDB, integrated with Razorpay for payments and hosted on Render and Hostinger."
            image={lapkartThumbnail}
            link="https://mylapkart.com"
            repo="https://github.com/SachinNic1502/Lapkart1.1"
            langs={[
              "React",
              "Tailwindcss",
              "Node.js",
              "Express",
              "MongoDB",
              "Razorpay",
              "Cloudinary",
              "Render",
              "Hostinger",
              "JWT",
            ]}
          />
          <Project
            title="SanjivaniCare"
            description="A comprehensive healthcare website providing various services and information. Built with React, Framer Motion for animations, and styled using Tailwind CSS."
            image={scThumbnail} 
            link="https://sanjivanicare.in" 
            repo="https://github.com/SachinNic1502/sanjeevani_hospital" // Replace this with the GitHub repository URL
            langs={[
              "React",
              "Motion Framer",
              "Tailwindcss",
              "React Icons"
            ]}
          />

          {/* <Project
            title="ShortRL" 
            description="Easy to use URL Shortener, paste your link and get shortened one."
            image={shortRL}
            link="https://shortrl.libyzxy0.com"
            repo="https://github.com/libyzxy0/url-shortener"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "Node.js",
              "Express"
            ]}
          />
        <Project
            title="Nice Tea"
            description="Simple Milktea shop showcasing MilkTea products."
            image={niceTea}
            link="https://nicetea.vercel.app"
            repo="https://github.com/libyzxy0/nicetea"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript"
            ]}
          />
          <Project
            title="TikDown.click"
            description="A website where you can download tiktok videos without watermark."
            link="https://tikdown.click"
            repo="https://github.com/libyzxy0/tiktok-downloader"
            image={tikDownThumbnail}
            langs={["Vue", "JavaScript", "Tailwindcss", "Express", "Vercel"]}
          />
          <Project
            title="Shoti API"
            description="API that sends a lot of beautiful, cute, and hot girl tiktok videos."
            image={shotiThumbnail}
            link="https://shoti-api.deno.dev"
            repo="https://github.com/libyzxy0/shoti"
            langs={[
              "Nuxt",
              "JavaScript",
              "Express",
              "Node.js",
              "Tailwindcss",
              "MongoDB",
            ]}
          />
          <Project
            title="Modern Portfolio"
            description="A modern portfolio using react, tailwindcss and shadcn ui."
            image={pThumbnail}
            link="https://libyzxy0.com"
            repo="https://github.com/libyzxy0/modern-portfolio"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "ShadcnUI"
            ]}
          />
          <Project
            title="Weather App"
            description="A simple weather forecast website using React."
            image={wThumbnail}
            link="https://weather-app-beryl-five.vercel.app"
            repo="https://github.com/libyzxy0/weather-app"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "ShadcnUI"
            ]}
          /> */}
        </div>
      </section>
    </>
  );
}
