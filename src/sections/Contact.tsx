import { Icon } from "@iconify/react";
import SlideAnimation from "@/components/slideInAnimation";

export default function Contact() {
  const contactDetails = [
    {
      href: "mailto:itsachinrathod@gmail.com",
      icon: "ic:baseline-email",
      label: "Email",
      info: "itsachinrathod@gmail.com",
    },
    {
      href: "tel:+919876543210", // Replace with your actual number
      icon: "mdi:phone",
      label: "Mobile",
      info: "+91 93099 31886", // Replace with your actual number
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
    <section className="pb-5 w-full bg-gray-950" id="contact">
      <header className="mx-6 pt-6 md:mx-10">
        <h1 className="text-white font-bold text-3xl md:text-5xl">
          Contact
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
            .
          </b>
        </h1>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
      </header>
      <div className="mx-6 md:mx-10 mt-5 flex flex-col md:flex-row md:flex-wrap mb-3">
        {contactDetails.map((contact, index) => (
          <SlideAnimation key={index}>
            <a
              href={contact.href}
              className="flex flex-row text-sky-300 items-center mt-5 mr-5"
            >
              <Icon className="h-16 w-16" icon={contact.icon} />
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold mx-2">
                  {contact.label}
                </h1>
                <p className="text-gray-400 mx-2">{contact.info}</p>
              </div>
            </a>
          </SlideAnimation>
        ))}
      </div>
    </section>
  );
}
