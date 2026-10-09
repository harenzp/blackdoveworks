import { useState } from "react"
import ProcessStep from "./ProcessStep"
import discoverImage from "../assets/discover.jpg";
import designImage from "../assets/design.jpg";
import developImage from "../assets/develop.jpg";
import launchImage from "../assets/launch.jpg";


const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We start with a conversation. I get to know you, your brand, your goals, and what you want the website to achieve. From there, we define the direction and what needs to be built.",
    image: discoverImage
  },
  {
    number: "02",
    title: "Design",
    description: "With the direction clear, I shape the visual experience around your brand. I focus on making it feel intentional, easy to use, and genuinely yours.",
    image: designImage
  },
  {
    number: "03",
    title: "Develop",
    description: "Once the design is ready, I bring it to life with clean, responsive, and high-performing development. I follow modern web standards and best practices, with attention to accessibility, performance, responsiveness, and SEO.",
    image: developImage
  },
  {
    number: "04",
    title: "Launch and Beyond",
    description: "Before anything goes live, I thoroughly test the website across devices and screen sizes. I make sure the technical SEO foundations are in place, everything works as it should, and the site is ready to be discovered, used, and built on.",
    image: launchImage
  }
]

const Process = () => {
  const [activeStep, setActiveStep] = useState(processSteps[0]);

  return (
    <section id="process" className="px-5 py-20">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-6xl font-medium">The Process</h2>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="flex max-w-200 flex-col gap-8">
            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                {...step}
                onHover={() => setActiveStep(step)}
              />
            ))}
          </div>

          <div className="hidden overflow-hidden lg:block">
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process