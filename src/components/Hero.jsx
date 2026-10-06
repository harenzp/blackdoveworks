const Hero = () => {
  return (
    <section id="hero" className="flex h-svh px-5 py-4">
      <div className="flex flex-wrap w-full gap-10 justify-between mt-auto">
        <div className="flex flex-col gap-8">
          <h1 className="font-archivo text-[clamp(2rem,15vw,15rem)] font-bold leading-[0.8]">Christian<br/>Rey<br/>Piape.</h1>
          <p className="text-[clamp(1rem,3vw,2.75rem)] ml-4">zero tolerance for mediocrity.</p>
        </div>
        <div className="flex max-w-[45ch]">
          <p>
            I love designing and developing modern websites for brands that refuse to conform. 
            Every project is crafted with intention, engineered for performance, 
            and shaped around your brand's identity.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default Hero