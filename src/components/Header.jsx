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
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
          </button>
        </div>

        <div className="header-center">
          <a href="/" className="logo">
            Twisted Brothers
          </a>
        </div>

        <div className="header-right">
          <nav className="header-nav">
            <Link to="hero">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link to="hero" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="menu" onClick={() => setIsMenuOpen(false)}>
            Menu
          </Link>
          <Link to="about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
