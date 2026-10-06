import Accordion from "./Accordion"

const FAQ = () => {
  return (
    <section id="faq" className="flex flex-col items-center py-20">
      <h2 className="text-6xl font-semibold mb-12">FAQ</h2>

      <div className="p-4 max-w-300">
        <Accordion title="How do we start a project?" 
                  answer="We begin with a short discovery call or message exchange to understand your goals and direction. From there, I define the scope and provide a tailored proposal.
                          Approve the proposal, submit the initial project deposit, and we’ll get started." />
        
        <Accordion title="How much does a project cost?" 
                  answer="Most projects range from $800 to $1,400 USD, depending on the scope and complexity. Every project is scoped around what your website actually needs." />
        
        <Accordion title="How do we communicate and stay organized?" 
                  answer="I keep communication simple and transparent. Projects are organized with clear timelines, deliverables, and progress updates, with regular Loom updates, WhatsApp, and calls when important decisions need to be made." />

        <Accordion title="How long does a project take?" 
                  answer="Most projects are completed within 2 to 4 weeks. Timelines vary depending on the scope, but I establish clear milestones from day one to keep everything on track." />

        <Accordion title="Do you offer support after launch?" 
                  answer="Yes. I provide post-launch support to help with fixes, updates, and any issues that come up after the website goes live. Ongoing support can also be arranged depending on what you need." />
      </div>
    </section>
  )
}

export default FAQ