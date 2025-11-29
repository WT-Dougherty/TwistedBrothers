import { useState } from "react";
import { useEffect, useRef } from "react";
import "./Contact.css";

function Contact() {
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
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="container">
        <div className={`contact-header ${isVisible ? "visible" : ""}`}>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className={`contact-content ${isVisible ? "visible" : ""}`}>
          <form
            action="https://formsubmit.co/connorsimko1@gmail.com"
            method="POST"
            id="contact-form"
          >
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="location">Location:</label>
            <input type="text" id="location" name="location" required />

            <label for="inquiry">Inquiry:</label>
            <textarea
              id="inquiry"
              name="inquiry"
              rows="5"
              cols="50"
              maxlength="500"
            ></textarea>

            <input className="btn" type="submit" value="send-inquiry" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
