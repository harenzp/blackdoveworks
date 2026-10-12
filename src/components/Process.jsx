
import { useState } from "react";
import ProcessStep from "./ProcessStep";

import discoverImage from "../assets/discover.jpg";
import designImage from "../assets/design.jpg";
import developImage from "../assets/develop.jpg";
import launchImage from "../assets/launch.jpg";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a conversation. I get to know you, your brand, your goals, and what you want the website to achieve. From there, we define the direction and what needs to be built.",
    image: discoverImage,
  },
  {
    number: "02",
    title: "Design",
    description:
      "With the direction clear, I shape the visual experience around your brand. I focus on making it feel intentional, easy to use, and genuinely yours.",
    image: designImage,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Once the design is ready, I bring it to life with clean, responsive, and high-performing development. I follow modern web standards and best practices, with attention to accessibility, performance, and SEO.",
    image: developImage,
  },
  {
    number: "04",
    title: "Launch and Beyond",
    description:
      "Before anything goes live, I thoroughly test the website across devices and screen sizes. I make sure the technical SEO foundations are in place, everything works as it should, and the site is ready to be discovered, used, and built on.",
    image: launchImage,
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="px-5 py-20 md:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-300">
        <div className="mb-12 flex  justify-center md:mb-16">
          <h2 className="font-archivo text-6xl font-semibold ">
            The Process
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:gap-16">
          <div className="flex flex-col">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                isActive={activeStep === index}
                onActivate={() => setActiveStep(index)}
              />
            ))}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-black/5 lg:aspect-auto lg:min-h-full">
            {processSteps.map((step, index) => (
              <img
                key={step.number}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-in-out ${
                  activeStep === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;