import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
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
  "figma",
];

function IconCloudSkills() {
  return (
    <section id="skills" className="py-12">
      <header className="mx-6 pt-6 md:mx-10 text-center md:text-left">
        <h1 className="text-white font-bold text-3xl md:text-5xl">
          Skills
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
            .
          </b>
        </h1>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2 mx-auto md:mx-0"></div>
        <p className="text-gray-400 font-[400] text-md mt-3 md:max-w-md">
          Technologies and tools I have used.
        </p>
      </header>
      <div className="relative flex justify-center mt-8 px-4 md:px-0">
        <div className="relative mr-2 h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-full md:max-w-[42rem] flex items-center justify-center overflow-hidden rounded-lg border bg-background p-4 sm:px-8 sm:py-10">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
}

export default IconCloudSkills;
