import HyperText from "@/components/magicui/hyper-text";
import NumberTicker from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import {
  IoDocumentTextOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";

export default function Hero() {
  return (
    <section
      className="h-[90vh] bg-gray-950 flex items-center justify-center"
      id="hero"
    >
      <div className="text-center mx-4 md:mx-10">
        <div className="w-full flex justify-center items-center mt-10 mb-5">
          <div className="text-white py-1.5 px-4 font-mono text-sm bg-gray-900 rounded-full md:py-2 md:px-6 md:text-xl">
            Hello <span className="inline-block animate-wave">👋</span>, I'm
            Sachin Rathod
          </div>
        </div>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-6xl text-white mt-1 md:mx-20">
          Experienced{" "}
          <HyperText
            className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400"
            text="Solutions Developer"
          />{" "}
          specializing in{" "}
          <HyperText
            className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400"
            text="MERN-stack development"
          />
        </h1>
        <div className="flex justify-center items-center mt-5">
          <ul className="gap-3 flex flex-col md:flex-row justify-between items-center sm:gap-12 text-white w-full sm:w-auto">
            <li className="flex flex-col items-center gap-2">
              <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                +1.5
              </span>
              <span className="text-sm leading-tight text-center">
                Years of
                <br />
                experience
              </span>
            </li>
            <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col items-center gap-2">
              <span className="flex items-center text-white font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                <NumberTicker value={100} className="text-white" />+
              </span>
              <span className="text-sm leading-tight text-center">
                Happy Customer
              </span>
            </li>
            <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col items-center gap-2">
              <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                <NumberTicker value={10} className="text-white" />+
              </span>
              <span className="text-sm leading-tight text-center">
                Project Completed
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center w-full mt-7 md:mt-10">
          <Button
            onClick={() => window.open("/Sachin-RathodCV.pdf", "_blank")}
            className="px-5 py-2 bg-white text-gray-900 text-md rounded-full mx-3 font-mono hover:bg-gray-100 md:scale-110 md:mx-14"
          >
            <IoDocumentTextOutline className="mr-1 h-4 w-4" />
            Resume
          </Button>
          <Button
            onClick={() => {
              const contactSection = document.querySelector(
                "#contact"
              ) as HTMLElement;
              window.scrollTo({
                top: contactSection?.offsetTop || 0,
                behavior: "smooth",
              });
            }}
            className="px-5 py-2 bg-gray-900 text-white text-md rounded-full mx-3 font-mono md:scale-110 md:mx-14"
          >
            <IoChatbubbleEllipsesOutline className="mr-1 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
