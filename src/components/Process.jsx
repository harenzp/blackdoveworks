import ProcessStep from "./ProcessStep"


const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We start with a conversation. I get to know you, your brand, your goals, and what you want the website to achieve. From there, we define the direction and what needs to be built."
  },
  {
    number: "02",
    title: "Design",
    description: "With the direction clear, I shape the visual experience around your brand. I focus on making it feel intentional, easy to use, and genuinely yours." 
  },
  {
    number: "03",
    title: "Develop",
    description: "Once the design is ready, I bring it to life with clean, responsive, and high-performing development. I follow modern web standards and best practices, with attention to accessibility, performance, responsiveness, and SEO."
  },
  {
    number: "04",
    title: "Launch and Beyond",
    description: "Before anything goes live, I thoroughly test the website across devices and screen sizes. I make sure the technical SEO foundations are in place, everything works as it should, and the site is ready to be discovered, used, and built on."
  }
]

const Process = () => {
  return (
    <section id="process" className="py-20 px-5">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-6xl font-medium">The Process</h2>
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-8 max-w-200">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
          <div className="w-80 h-100 bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}

export default Process