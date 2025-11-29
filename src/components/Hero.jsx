import "./Hero.css";

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
        <a href="#products" className="hero-cta">
          See Our Menu
        </a>
      </div>
      <div className="hero-image-container">
        <img src="/about.jpeg" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
