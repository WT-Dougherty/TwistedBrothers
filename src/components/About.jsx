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
      { threshold: 0.1 }
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
          <p className="about-description">
            Crafting authentic pretzels with passion and tradition, bringing
            fresh-baked goodness to your neighborhood.
          </p>
        </div>

        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          <div className="about-text">
            <div className="about-text-block">
              <h3 className="about-subtitle">Our Story</h3>
              <p className="about-paragraph">
                What started as a passion for traditional baking has grown into
                a mobile kitchen dedicated to bringing you the finest
                hand-crafted pretzels. Every batch is made fresh daily using
                time-honored recipes and the finest ingredients.
              </p>
            </div>
            <div className="about-text-block">
              <h3 className="about-subtitle">Our Mission</h3>
              <p className="about-paragraph">
                We believe in the simple joy of a perfectly baked pretzel. Our
                mission is to share this experience with our community, one
                warm, golden-brown pretzel at a time. From classic salted to
                innovative flavors, we're committed to quality in every bite.
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
