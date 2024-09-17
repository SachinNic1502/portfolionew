import SlideAnimation from "@/components/slideInAnimation";

export default function About() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="about">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            About
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 md:ml-10 md:mr-40 mt-8">
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
            I am a Solution Developer with 1.5 years of experience, specializing in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). I excel at building responsive front-end interfaces, creating robust back-end services, and designing efficient database solutions. With a focus on delivering high-quality code, I thrive in dynamic team environments, consistently contributing to the successful deployment of scalable applications.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
            I hold a Master’s degree in Computer Applications from PCCOE Pune and have worked on several projects, including MyLapKart and Sanjeevani Care, developing e-commerce and healthcare web solutions using cutting-edge technologies.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
            In the future, I am excited to continue collaborating on innovative projects with exceptional teams. My aim is to use my skills to make systems better and faster, especially on the frontend. I am passionate about growing, learning new things, and working with others to create impactful solutions. I'm all about doing my best and making a meaningful difference in the tech world.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
            To continuously improve my skills in full-stack development, with a focus on optimizing frontend performance and enhancing user experience. I strive to contribute to innovative projects, collaborate with talented teams, and make a meaningful impact by developing faster, more efficient solutions that deliver exceptional results.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              I'm all about doing my best and making a difference in tech.
            </p>
          </SlideAnimation>
        </div>
      </section>
    </>
  );
}
