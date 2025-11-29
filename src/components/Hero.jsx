import "./Hero.css";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-line">Motto P1,</span>
          <span className="hero-line">Motto P2</span>
        </h1>
        <p className="hero-description">
          Some general description here about the truck/ point of the truck
        </p>
        <Link to="menu" className="hero-cta btn">
          See Our Menu
        </Link>
      </div>
      <div className="hero-image-container">
        <img src="/about.jpeg" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
