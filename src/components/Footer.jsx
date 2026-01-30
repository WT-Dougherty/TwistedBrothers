import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="stamp-span">
        <div class="horizontal-line"></div>
        <img src="./icons/stamp.png" alt="stamp" className="stamp" />
        <div class="horizontal-line"></div>
      </div>
      <div className="socials">
        <a
          target="_blank"
          href="https://www.instagram.com/twistedbrotherspretzels?igsh=dmcwOHV4YnlxY2h6&utm_source=qr"
        >
          <img src="./icons/insta.svg" className="social-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/share/1CzBCDmU84/?mibextid=wwXIfr"
        >
          <img src="./icons/fb.svg" className="social-icon" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>Based in Bozeman, MT • Serving the Gallatin Valley & beyond</p>
        <p>&copy; 2025 Twisted Brothers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
