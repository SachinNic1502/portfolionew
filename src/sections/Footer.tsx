import { Icon } from "@iconify/react";

export default function Footer() {
  const contactDetails = [
    {
      href: "mailto:itsachinrathod@gmail.com",
      icon: "ic:baseline-email",
      label: "Email",
      info: "itsachinrathod@gmail.com",
    },
    {
      href: "tel:+919876543210",
      icon: "mdi:phone",
      label: "Mobile",
      info: "+91 93099 31886",
    },
    {
      href: "https://github.com/SachinNic1502",
      icon: "akar-icons:github-fill",
      label: "GitHub",
      info: "/SachinNic1502",
    },
    {
      href: "https://linkedin.com/in/sachin-rathod-241623250",
      icon: "mdi:linkedin",
      label: "LinkedIn",
      info: "/in/sachin-rathod-241623250",
    },
  ];

  return (
    <footer className="bg-gray-900 w-full py-6">
      <header className="mx-6 pt-6 md:mx-10">
        <a href="#" className="text-2xl md:text-4xl font-semibold tracking-tight text-white flex flex-row">
          <p className="text-sky-300">Sachin</p> Rathod
        </a>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-16 md:h-2 pt-1"></div>
      </header>
      <div className="mx-6 md:mx-10">
        <div className="flex flex-col md:flex-row mt-5">
          <a className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300" href="#start">Start</a>
          <a className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300" href="#about">About</a>
          <a className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300" href="#skills">Skills</a>
          <a className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300" href="#experience">Experience</a>
          <a className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300" href="#education">Education</a>
          <a className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300" href="#projects">Projects</a>
          <a className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300" href="#contact">Contact</a>
        </div>
        <div className="mt-5 flex flex-col md:flex-row justify-center items-center">
          {contactDetails.map(({ href, icon, info }, index) => (
            <a key={index} href={href} className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300 flex items-center">
              <Icon icon={icon} className="mr-2" /> {info}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        <p>&copy; 2024 Sachin Rathod. All rights reserved.</p>
      </div>
      <div className="flex justify-center mt-4">
        <a href="#" className="text-white hover:text-sky-300 transition-all duration-300 flex items-center">
          <Icon icon="mdi:arrow-up" className="mr-2" /> Back to Top
        </a>
      </div>
    </footer>
  );
}
