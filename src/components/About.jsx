const About = () => {
  return (
    <section id="about" className="py-20 px-5 flex flex-col gap-8">
      <div className="max-w-230 mx-auto text-center">
        <p>
            I’m Christian Rey Piape, a web designer and developer who cares deeply about the work I put into the world.
            <br />
            <br />
            I design and build websites for people and brands with something worth saying. I like working closely with the people behind the business, understanding what they’re trying to build, and turning that into something that feels intentional, works well, and actually feels like them.
            <br />
            <br />
            I don’t believe in rushing good work just to get it out the door. I’d rather take the time to think through the details, refine the rough edges, and build something I’m genuinely proud to put my name on.
        </p>
      </div>
      <div className="flex items-center gap-3 mx-auto">
        <div className="w-15 rounded-full overflow-hidden">
          <img src="/christianReyPiape.avif" alt="About Image" />
        </div>
        <div className="flex flex-col gap-0">
          <h3 className="text-md font-medium">Christian Rey Piape</h3>
          <p className="text-gray-600">Dopest mthfcka alive! ⚒️</p>
        </div>
      </div>
    </section>
  )
}

export default About