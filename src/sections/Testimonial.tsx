import Marquee from "@/components/magicui/marquee";

const testimonials = [
  {
    name: "Dr. Amol Nate",
    position: "Founder, SanjivaniCare Hospital",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6O43UKY8a8DjQi3ICP7Gr8jMRk4hRq2_gMymsb3vST-DMfXmUGwAxCAWKXySPmr2OaLM&usqp=CAU", 
    text: "SanjivaniCare has been a breakthrough in offering quality healthcare to our patients. Thanks to the website, we have improved patient engagement and streamlined appointment scheduling. It was a pleasure working with Sachin, who delivered a professional and efficient solution."
  },
  {
    name: "MylapKart Team",
    position: "E-Commerce Website",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6O43UKY8a8DjQi3ICP7Gr8jMRk4hRq2_gMymsb3vST-DMfXmUGwAxCAWKXySPmr2OaLM&usqp=CAU", 
    text: "MylapKart has become a favorite among our users, thanks to the seamless shopping experience Sachin has created for us. The site is fast, user-friendly, and perfectly tailored to our needs. We couldn't have asked for a better developer."
  },
  {
    name: "Vikas Bundhe",
    position: "Owner, Fintex Finance",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6O43UKY8a8DjQi3ICP7Gr8jMRk4hRq2_gMymsb3vST-DMfXmUGwAxCAWKXySPmr2OaLM&usqp=CAU", 
    text: "The Fintex Finance website has taken our financial consultancy business to the next level. Sachin was fantastic in understanding our requirements and building a solution that helps us engage better with our clients. Highly recommended!"
  }
];

// Splitting testimonials into rows for the marquee
const firstRow = testimonials.slice(0, testimonials.length);

interface TestimonialCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ img, name, username, body }) => {
  return (
    <div className="bg-gray-800 text-white rounded-md mx-4 py-6 px-4 md:py-8 md:px-6 max-w-xs md:max-w-md relative">
      <div className="bg-yellow-400 h-1 w-8 md:w-12 mb-4 md:mb-6 animate-grow"></div>
      <div className="text-yellow-400 text-xl md:text-2xl absolute left-4 md:left-6 top-4 md:top-8">“</div>
      <div className="text-yellow-400 text-xl md:text-2xl absolute right-4 md:right-6 top-4 md:top-8">”</div>
      <p className="text-justify text-xs md:text-base leading-relaxed mb-4 md:mb-6">{body}</p>
      <div className="flex items-center">
        <img src={img} alt={name} className="rounded-full border-4 border-yellow-400 h-16 w-16 object-cover" />
        <div className="ml-2 md:ml-4">
          <h4 className="text-base md:text-lg font-bold">{name}</h4>
          <p className="text-xs md:text-sm text-gray-400">{username}</p>
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <section className="pb-5 w-full bg-gray-950" id="testimonials">
      <header className="mx-6 pt-6 md:mx-10">
        <h1 className="text-white font-bold text-3xl md:text-5xl">
          Testimonials
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
            .
          </b>
        </h1>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
      </header>

      <div className="mx-4 md:mx-10 mt-12 flex flex-col items-center">
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:h-[500px] md:w-[80%] md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <TestimonialCard
                key={index} // Use index if no unique key like `id` is available
                img={review.photo}
                name={review.name}
                username={review.position}
                body={review.text}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
