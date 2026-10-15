import { useState } from "react";

const Navbar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("christianreypiape@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = "mailto:christianreypiape@gmail.com";
    }
  };

  return (
    <header className="static">
      <nav className="navbar flex-wrap items-end gap-1 text-sm sm:text-lg">
        <ul className="flex gap-1">
          <li>
            <a href="#about" className="link-hover px-1">
              About
            </a>
          </li>
          <li>
            <a href="#selected-work" className="link-hover px-1">
              Work
            </a>
          </li>
          <li>
            <a href="#process" className="link-hover px-1">
              Process
            </a>
          </li>
          <li>
            <a href="#faq" className="link-hover px-1">
              FAQ
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="link-hover px-1 cursor-pointer"
          aria-live="polite"
        >
          {copied ? "email copied!" : "christianreypiape@gmail.com"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;