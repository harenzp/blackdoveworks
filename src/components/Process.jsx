
import { useState } from "react";
import ProcessStep from "./ProcessStep";

import discoverGif from "../assets/discovergif.gif";
import designGif from "../assets/designgif.gif";
import developGif from "../assets/developgif.gif";
import launchGif from "../assets/launchgif.gif";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a conversation. I get to know you, your brand, your goals, and what you want the website to achieve. From there, we define the direction and what needs to be built.",
    image: discoverGif,
  },
  {
    number: "02",
    title: "Design",
    description:
      "With the direction clear, I shape the visual experience around your brand. I focus on making it feel intentional, easy to use, and genuinely yours.",
    image: designGif,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Once the design is ready, I bring it to life with clean, responsive, and high-performing development. I follow modern web standards and best practices, with attention to accessibility, performance, and SEO.",
    image: developGif,
  },
  {
    number: "04",
    title: "Launch and Beyond",
    description:
      "Before anything goes live, I thoroughly test the website across devices and screen sizes. I make sure the technical SEO foundations are in place, everything works as it should, and the site is ready to be discovered, used, and built on.",
    image: launchGif,
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="px-5 py-20 md:px-10 md:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex justify-center md:mb-20">
          <h2 className="font-archivo text-3xl sm:text-6xl font-medium">
            The Process
          </h2>
        </div>

        <div
          className="mx-auto flex max-w-5xl flex-col gap-5"
        >
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              isActive={activeStep === index}
              onActivate={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
