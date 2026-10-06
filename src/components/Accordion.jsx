import {useState} from "react";

const Accordion = ({title, answer}) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className="p-3">
      <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full py-3">
        <h3 className="font-archivo font-medium text-2xl">{title}</h3>
        {accordionOpen ? (
          <span>-</span>
        ) : (
          <span>+</span>
        )}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <p className="overflow-hidden max-w-3xl">{answer}</p>
      </div>
    </div>
  )
}

export default Accordion