import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button
            className="menu-toggle menu-toggle-left btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
          </button>
        </div>

        <div className="header-center">
          <a href="/" className="logo btn">
            Twisted Brothers
          </a>
        </div>

        <div className="header-right">
          <nav className="header-nav">
            <Link to="hero" className="btn">
              Home
            </Link>
            <Link to="menu" className="btn">
              Menu
            </Link>
            <Link to="about" className="btn">
              About
            </Link>
            <Link to="contact" className="btn">
              Contact
            </Link>
          </nav>
          <button
            className="menu-toggle menu-toggle-right btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link to="hero" className="btn" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="menu" className="btn" onClick={() => setIsMenuOpen(false)}>
            Menu
          </Link>
          <Link to="about" className="btn" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link
            to="contact"
            className="btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
