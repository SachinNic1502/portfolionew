import HyperText from "@/components/magicui/hyper-text";
import NumberTicker from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import { IoDocumentTextOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { ConfettiButton } from "@/components/magicui/confetti";
export default function Hero() {
  const handleClick = () => {
    // Show the confetti effect first
    // Delay the PDF opening by 5 seconds (5000 milliseconds)
    setTimeout(() => {
      window.open("/Sachin-RathodCV.pdf", "_blank");
    }, 5000);
  };
  return (
    <section className="h-[80vh] md:h-[90vh] bg-gray-950 flex items-center justify-center" id="hero">
      <div className="text-center mx-4 md:mx-10">
        {/* Greeting */}
        <div className="w-full flex justify-center items-center mt-10 mb-5">
          <div className="text-white py-1.5 px-4 font-mono text-sm bg-gray-900 rounded-full md:py-2 md:px-6 md:text-xl">
            Hello <span className="inline-block animate-wave">👋</span>, I'm Sachin Rathod
          </div>
        </div>
        {/* Hero Text */}
        <h1 className="scroll-m-20 text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-1 mx-4 sm:mx-10 md:mx-20">
          Experienced{" "}
          <HyperText className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400" text="Solutions Developer" />{" "}
          specializing in{" "}
          <HyperText className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400" text="MERN-stack development" />
        </h1>
        {/* Stats */}
        <div className="flex justify-center items-center mt-5">
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-white text-center">
            <li className="flex flex-col items-center gap-2">
              <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                +1.5
              </span>
              <span className="text-sm leading-tight">Years of<br />experience</span>
            </li>
            <span className="hidden sm:block h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col items-center gap-2">
              <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                <NumberTicker value={100} className="text-white" />+
              </span>
              <span className="text-sm leading-tight">Happy Customers</span>
            </li>
            <span className="hidden sm:block h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col items-center gap-2">
              <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                <NumberTicker value={10} className="text-white" />+
              </span>
              <span className="text-sm leading-tight">Projects Completed</span>
            </li>
          </ul>
        </div>
        {/* Buttons */}
        <div className="text-center w-full mt-7 md:mt-10">
        <ConfettiButton>
      <Button
        onClick={handleClick}
        className="px-4 py-2 bg-white text-gray-900 text-sm md:text-md rounded-full mx-2 md:mx-8 font-mono hover:bg-gray-100 md:scale-110"
      >
        <IoDocumentTextOutline className="mr-1 h-4 w-4" /> Resume
      </Button>
    </ConfettiButton>
          <ConfettiButton>
          <Button
            onClick={() => {
              const contactSection = document.querySelector("#contact") as HTMLElement;
              window.scrollTo({
                top: contactSection?.offsetTop || 0,
                behavior: "smooth",
              });
            }}
            className="px-4 py-2 bg-gray-900 text-white text-sm md:text-md rounded-full mx-2 md:mx-8 font-mono md:scale-110"
          >
            <IoChatbubbleEllipsesOutline className="mr-1 h-4 w-4" /> Contact
          </Button>
          </ConfettiButton>
        </div>
      </div>
    </section>
  );
}
