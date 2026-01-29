import { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="container">
        <div className={`about-header ${isVisible ? "visible" : ""}`}>
          <h2 className="about-title">About Us</h2>
        </div>

        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          <div className="about-text">
            <div className="about-text-block">
              <h3 className="about-subtitle">About Us</h3>
              <p className="about-paragraph">
                Twisted Brothers Pretzels is a Bozeman-based food trailer
                serving hot, handmade soft pretzels from a vintage-style
                Airstream. Inspired by old-school roadside stands and Montana
                summers, we focus on simple, comforting food done well — classic
                salted pretzels, pretzel-wrapped brats, and house-made sauces
                like warm beer cheese and honey mustard. Our trailer's open
                window and warm glow make Twisted Brothers a natural gathering
                spot at festivals, markets, and community events across Montana.
              </p>
            </div>
            <div className="about-text-block">
              <h3 className="about-subtitle">Catering & Events</h3>
              <p className="about-paragraph">
                Twisted Brothers Pretzels caters private events, weddings,
                tailgates, breweries, and festivals across Montana. Pretzels can
                be served fresh from the trailer, or pre-ordered for indoor
                events and private gatherings.
              </p>
            </div>
          </div>
          <div className="about-image-container">
            <img
              src="/sunny.jpeg"
              alt="About our pretzel truck"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
