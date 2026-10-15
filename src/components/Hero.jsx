const Hero = () => {
  return (
    <section id="hero" className="flex h-svh px-2 sm:px-5 pt-30 pb-20 sm:pb-4">
      <div className="flex flex-wrap w-full gap-15 justify-between mt-auto">
        <div className="flex flex-col gap-5 sm:gap-10">
          <h1 className="font-archivo text-[clamp(2rem,18vw,15rem)] sm:text-[clamp(2rem,15vw,15rem)] font-bold leading-[0.8]">Christian<br/>Rey<br/>Piape.</h1>
          <p className="text-xl sm:text-[clamp(1rem,3vw,2.75rem)] ml-2 sm:ml-4">zero tolerance for mediocrity.</p>
        </div>
        <div className="mx-auto sm:mx-0 text-center sm:text-left flex max-w-xs sm:max-w-[45ch] text-sm sm:text-base">
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