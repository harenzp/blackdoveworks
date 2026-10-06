const Footer = () => {
  return (
    <section id="footer" className="py-6 px-5">
      <div className="flex gap-15 items-center justify-between">
        <div className="flex flex-col gap-0">
          <div className="flex items-center">
            <h2 className="font-archivo font-bold text-[clamp(2rem,6vw,7rem)] leading-[1.2]">BLACK DOVE WORKS.</h2>
            <h2 className="font-archivo font-bold text-[clamp(1.5rem,6vw,2.5rem)]">©2026</h2>
          </div>
          <p className="text-[clamp(1rem,2vw,2.125rem)]">A creative development studio run by a creative developer.</p>
        </div>
        <div className="flex">
          <ul className="flex flex-col items-end gap-1">
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default Footer