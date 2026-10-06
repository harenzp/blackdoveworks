const About = () => {
  return (
    <section id="about" className="py-20 px-5 flex flex-col gap-8">
      <div className="max-w-230 mx-auto text-center">
        <p>
            Black Dove Works was founded for visionary founders who want to work with like-minded people who genuinely care about what they create. Our goal isn’t just to make your website look good, but to build something that works, connects, and leaves a lasting impression.
            <br />
            <br />
            We believe every project deserves our full attention. That’s why we intentionally take on a limited number of clients at a time. We immerse ourselves in your vision, take ownership of every detail, and care deeply about both the people behind the business and the people behind the screen.
            <br />
            <br />
            Quality always comes before speed. Rushed work never reaches its full potential, and we won’t compromise your vision just to deliver faster. We’d rather create something exceptional than something rushed.
        </p>
      </div>
      <div className="flex items-center gap-3 mx-auto">
        <div className="w-15 rounded-full overflow-hidden">
          <img src="/christianReyPiape.avif" alt="About Image" />
        </div>
        <div className="flex flex-col gap-0">
          <h3 className="text-md font-medium">Christian Rey Piape</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>
      </div>
    </section>
  )
}

export default About