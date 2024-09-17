import TimelineItem from "@/components/TimelineItem";

export default function Experience() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="experience">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Experience
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title="MERN Stack Developer at NovaNectar Services Pvt. Ltd.">
            <p><strong>2024 – Present | Uttarakhand, India</strong></p>
            <ul className="list-disc pl-5">
              <li>Developed responsive, interactive, and user-friendly UI components using React.</li>
              <li>Designed and implemented RESTful APIs using Node.js and Express.</li>
              <li>Managed MongoDB databases for data consistency and security.</li>
              <li>Collaborated with cross-functional teams to deliver integrated solutions.</li>
              <li>Deployed full-stack applications, ensuring minimal downtime.</li>
            </ul>
          </TimelineItem>
          <TimelineItem title="Solution Developer at Quadwave Consulting Pvt. Ltd.">
            <p><strong>2022 – 2024 | Pune, India</strong></p>
            <ul className="list-disc pl-5">
              <li>Built scalable software solutions across the development lifecycle.</li>
              <li>Created maintainable code adhering to best practices.</li>
              <li>Implemented solutions to complex technical problems.</li>
              <li>Collaborated with teams to ensure high-quality integration.</li>
            </ul>
          </TimelineItem>
          <TimelineItem title="Software Developer Intern at HotSync Software Solutions">
            <p><strong>2022 | Pune, India</strong></p>
            <ul className="list-disc pl-5">
              <li>Designed modern, user-friendly interfaces.</li>
              <li>Supported development and maintenance of enterprise-level software.</li>
              <li>Ensured smooth project execution and delivery.</li>
            </ul>
          </TimelineItem>
        </div>
      </section>
    </>
  );
}
