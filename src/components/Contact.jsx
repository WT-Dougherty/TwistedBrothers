import { useState } from 'react';
import { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    inquiry: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        location: '',
        inquiry: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="container">
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="City, Country"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inquiry" className="form-label">
                Inquiry
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                className="form-textarea"
                required
                rows="6"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitted}>
              {isSubmitted ? 'Message Sent' : 'Send Message'}
            </button>

            {isSubmitted && (
              <div className="form-success">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

