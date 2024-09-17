import IconCloud from "@/components/magicui/icon-cloud";
import skills from '@/data/skills.json'
const slugs = [
    
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
function IconCloudSkills  () {
  return (
    <section id="skills">
      <header className="mx-6 pt-6 md:mx-10">
        <h1 className="text-white font-bold text-3xl md:text-5xl">
          Skills
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
            .
          </b>
        </h1>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        <p className="text-gray-400 font-[400] text-md mt-3">
          Technologies and tools I used.
        </p>
      </header>
        <div className="relative flex ml-20 h-[600px] max-w-[42rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
    </section>
  )
}
export default IconCloudSkills