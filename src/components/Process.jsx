import ProcessStep from "./ProcessStep"


const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We get to know your brand, goals, audience, and vision. This is where we ask questions, explore ideas, and define what success looks like."
  },
  {
    number: "02",
    title: "Design",
    description: "With a clear direction in place, we craft a visual experience that reflects your brand while keeping usability and intention at the center." 
  },
  {
    number: "03",
    title: "Develop",
    description: "Once the design is approved, we bring it to life with clean, responsive, and high-performing development, paying close attention to every detail."
  },
  {
    number: "04",
    title: "Launch and Beyond",
    description: "After thorough testing and refinement, your website is ready to go live. We make sure everything performs as intended and is built to grow with your business."
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