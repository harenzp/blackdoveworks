import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AmyDawnImage from "../assets/AmyDawn.avif";
import JadeMysticImage from "../assets/JadeMystic.avif";
import JordanSolenderImage from "../assets/JordanSolender.avif";
import MOCImage from "../assets/MOC.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Amy Dawn Photography",
    category: "Web Design & Development",
    year: "2026",
    image: AmyDawnImage,
    link: "https://www.amydawnphotography.com/",
  },
  {
    title: "Jade Mystic Interiors",
    category: "Development",
    year: "2026",
    image: JadeMysticImage,
    link: "https://www.jademysticinteriors.com/",
  },
  {
    title: "Jordan Solender",
    category: "Development",
    year: "2026",
    image: JordanSolenderImage,
    link: "https://www.jordansolender.com/",
  },
  {
    title: "Murder ov Crows",
    category: "Web Design & Development",
    year: "2026",
    image: MOCImage,
    link: "https://murder-ov-crows.webflow.io/",
  },
];

const SelectedWork = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getScrollAmount = () =>
        track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className="overflow-hidden py-10 md:py-30"
    >
      <div className="px-5 md:px-8 lg:px-10">
        <h2 className="mb-10 text-center sm:text-left text-3xl font-medium sm:mb-16 sm:text-6xl">
          Selected Work.
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex w-full flex-col gap-10 px-5 md:w-max md:flex-row md:gap-6 md:px-8 lg:px-10"
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-[55vw] md:shrink-0 lg:w-[42vw]"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-4 flex justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-xl font-medium">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-60">
                  {project.category}
                </p>
              </div>

              <span className="text-sm opacity-60">
                {project.year}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;