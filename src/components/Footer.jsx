const Footer = () => {
  return (
    <section id="footer" className="py-5 pt-60 px-6 bg-black">
      <div className="flex justify-between flex-col-reverse gap-30 sm:items-end sm:flex-row text-white">
        <div className="flex flex-col">
          <h2 className="font-archivo font-semibold">Christian Rey Piape</h2>
          <p className="font-archivo font-medium text-md">© 2026 All rights reserved</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 sm:mr-30">
          <div className="flex flex-col">
            <h3 className="mb-5 text-white/70 font-medium">Contact</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#email" className="hover:underline">
                  christianreypiape@gmail.com
                </a>
              </li>
              <li>
                <a href="phone" className="hover:underline">
                  +639311161150
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-5 text-white/70 font-medium">Follow</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#github" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#x" className="hover:underline">
                  Twitter/X
                </a>
              </li>
              <li>
                <a href="#facebook" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#spotify" className="hover:underline">
                  Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer