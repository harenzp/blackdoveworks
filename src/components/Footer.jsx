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
                <a href="mailto:christianreypiape@gmail.com" className="hover:underline">
                  christianreypiape@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+639311161150" className="hover:underline">
                  +639311161150
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-5 text-white/70 font-medium">Follow</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="https://www.linkedin.com/in/christian-rey-piape" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/harenzp" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/harenznopra" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/harenzzz" target="_blank" rel="noopener noreferrer" className="hover:underline">
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