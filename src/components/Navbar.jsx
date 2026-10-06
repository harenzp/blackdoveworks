const Navbar = () => {
  return (
    <header className="static">
        <nav className="navbar">
            <ul className="flex gap-5">
                <li><a href="#about">About</a></li>
                <li><a href="#selected-work">Work</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
            </ul>
            <a href="#chat">Let's Chat!</a>
        </nav>
    </header>
  )
}

export default Navbar