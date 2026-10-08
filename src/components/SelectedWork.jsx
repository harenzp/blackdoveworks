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
    category: "Web Design & Development",
    year: "2026",
    image: JadeMysticImage,
    link: "https://www.jademysticinteriors.com/",
  },
  {
    title: "Jordan Solender",
    category: "Web Design & Development",
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
]

const SelectedWork = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
      };

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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className="overflow-hidden py-20"
    >
      <div className="container-site">
        <h2 className="mb-16 text-6xl font-medium">
          Selected Work.
        </h2>
      </div>

      <div ref={trackRef} className="flex w-max gap-6 px-5 md:px-8 lg:px-10">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-[60vw] shrink-0 md:w-[55vw] lg:w-[42vw]"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-4 flex justify-between gap-4">
              <div>
                <h3 className="text-xl font-medium">
                  {project.title}
                </h3>
                <p className="text-sm opacity-60">
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

export default SelectedWork