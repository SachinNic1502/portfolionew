import OrbitingCircles from "../components/magicui/orbiting-circles";
import skills from '@/data/skills.json'
import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Adjust the path if needed

interface Skill {
  name: string;
  icon: string;
}

const generateRadii = (start: number, increment: number, count: number): number[] => {
  return Array.from({ length: count }, (_, index) => start + index * increment);
};

function OrbitSkills() {
  // Create an array of radii for inner and outer circles
  const innerRadii = generateRadii(50, 30, 5); // Starts at 50, increases by 30, 5 radii
  const outerRadii = generateRadii(50, 30, 6);

  return (
    <section id="skills">
     

      <div className="relative flex h-[600px] w-[700px] mt-28 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Skills
        </span>

        {/* Inner Circles */}
        {skills.slice(0, 13).map((skill, index) => (
          <OrbitingCircles
            key={skill.icon} // Use unique skill.icon as key
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={index * 15}
            radius={innerRadii[index % innerRadii.length]} // Cycle through predefined radii
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center justify-center h-full w-full">
                    <Icon icon={skill.icon} className="text-2xl" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white">
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </OrbitingCircles>
        ))}

        {/* Outer Circles */}
        {skills.slice(13, 27).map((skill, index) => (
          <OrbitingCircles
            key={skill.icon} // Use unique skill.icon as key
            className="size-[50px] border-none bg-transparent"
            radius={outerRadii[index % outerRadii.length]} // Cycle through predefined radii
            duration={20}
            delay={index * 15}
            reverse
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center justify-center h-full w-full">
                    <Icon icon={skill.icon} className="text-3xl" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white">
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </OrbitingCircles>
        ))}
        
      </div>
    </section>
  );
}

export default OrbitSkills;
