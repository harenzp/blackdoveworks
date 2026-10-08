import { useState } from "react"
import ProcessStep from "./ProcessStep"


const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We start with a conversation. I get to know you, your brand, your goals, and what you want the website to achieve. From there, we define the direction and what needs to be built.",
    image: "/discover.jpg"
  },
  {
    number: "02",
    title: "Design",
    description: "With the direction clear, I shape the visual experience around your brand. I focus on making it feel intentional, easy to use, and genuinely yours.",
    image: "/design.jpg"
  },
  {
    number: "03",
    title: "Develop",
    description: "Once the design is ready, I bring it to life with clean, responsive, and high-performing development. I follow modern web standards and best practices, with attention to accessibility, performance, responsiveness, and SEO.",
    image: "/develop.jpg"
  },
  {
    number: "04",
    title: "Launch and Beyond",
    description: "Before anything goes live, I thoroughly test the website across devices and screen sizes. I make sure the technical SEO foundations are in place, everything works as it should, and the site is ready to be discovered, used, and built on.",
    image: "/launch.jpg"
  }
]

const Process = () => {
  const [activeStep, setActiveStep] = useState(processSteps[0]);

  return (
    <section id="process" className="px-5 py-20">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-6xl font-medium">The Process</h2>

        <div className="flex flex-wrap gap-10">
          <div className="flex max-w-200 flex-col gap-8">
            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                {...step}
                onHover={() => setActiveStep(step)}
              />
            ))}
          </div>

          <div className="h-100 w-80 overflow-hidden">
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