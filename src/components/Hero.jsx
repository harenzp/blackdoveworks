const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-4 h-svh px-5 py-4">
      <div className="flex justify-between mt-auto">
        <h1 className="font-archivo text-[15rem] font-bold leading-[0.75]">Black<br/>Dove<br/>Works.</h1>
        <div className="flex max-w-[45ch]">
          <p>
            We design and develop modern websites for brands that refuse to conform. 
            Every project is crafted with intention, engineered for performance, 
            and shaped around your brand's identity.
            <br/>Built and run by a creative dev.
          </p>
        </div>
      </div>
      <div>
        <p className="text-[4.5rem]">zero tolerance for mediocrity.</p>
      </div>
    </section>
  )
}

export default Hero