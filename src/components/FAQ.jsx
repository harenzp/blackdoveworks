import Accordion from "./Accordion"

const FAQ = () => {
  return (
    <section id="faq" className="flex flex-col items-center py-20">
      <h2 className="text-6xl font-semibold mb-12">FAQ</h2>

      <div className="p-4 max-w-300">
        <Accordion title="How do we start a project?" 
                  answer="We begin with a short discovery call or message exchange to understand your goals and direction. 
                          From there, we define the scope and provide a tailored proposal.
                          Approve the proposal, submit the initial project deposit, and we’ll get started." />
        
        <Accordion title="How much does a project cost?" 
                  answer="Projects typically range from $800 to $2,400 USD, depending on the scope, complexity, and requirements." />
        
        <Accordion title="How do we communicate and stay organized?" 
                  answer="We keep communication simple and transparent. Every project is managed 
                          in Notion with clear timelines, deliverables, and progress updates.
                          We share regular Loom updates, stay in touch through WhatsApp, and 
                          schedule calls whenever important decisions or project milestones arise." />

        <Accordion title="How long does a project take?" 
                  answer="Most projects are completed within 2 to 8 weeks. Timelines vary depending on the scope, 
                          but we establish clear milestones from day one to keep everything on track." />

        <Accordion title="Do you offer support after launch?" 
                  answer="Yes. Ongoing support and improvements are available depending on your needs." />
      </div>
    </section>
  )
}

export default FAQ