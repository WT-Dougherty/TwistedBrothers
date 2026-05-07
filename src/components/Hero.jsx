import "./Hero.css";
import { Link } from "react-scroll";
import ImageBanner from "./ImageBanner";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Serving hot, handmade soft pretzels from a vintage-style Airstream,
            blending Montana roadside nostalgia with fun, comforting food people
            line up for.
          </h1>
          <div className="btn-container">
            <Link to="contact" className="hero-cta btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <ImageBanner path={"people"} />
    </section>
  );
}

export default Hero;
