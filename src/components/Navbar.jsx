const Navbar = () => {
  return (
    <header className="static">
        <nav className="navbar">
            <ul className="flex gap-5">
                <li><a href="#about" className="link-hover px-1">About</a></li>
                <li><a href="#selected-work" className="link-hover px-1">Work</a></li>
                <li><a href="#process" className="link-hover px-1">Process</a></li>
                <li><a href="#faq" className="link-hover px-1">FAQ</a></li>
            </ul>
            <a href="#chat" className="link-hover px-1">Let's Chat!</a>
        </nav>
    </header>
  )
}

export default Navbar