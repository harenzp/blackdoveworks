
import { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen((prev) => !prev);
  };

  return (
    <div
      onClick={toggleAccordion}
      className="cursor-pointer bg-transparent text-black transition-colors duration-300 hover:bg-black hover:text-white"
    >
      <button
        onClick={(event) => {
          event.stopPropagation();
          toggleAccordion();
        }}
        aria-expanded={accordionOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-6 px-4 py-4 text-left"
      >
        <h3 className="font-archivo text-xl font-medium md:text-2xl">
          {title}
        </h3>

        <span className="shrink-0 text-2xl">
          {accordionOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl px-4 pb-5 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;