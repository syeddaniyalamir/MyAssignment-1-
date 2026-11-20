import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiArrowRight
} from "react-icons/fi";

import style from "../assets/css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>

      <div className={style.footerContainer}>

        {/* BRAND SECTION */}
        <div className={style.footerBrand}>
          <Link to="/" className={style.logo}>
            E-COMMERCE
          </Link>

          <p>
            Discover your style with our premium collection.
            Quality, elegance and comfort — all in one place.
          </p>

          <div className={style.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={style.footerLinks}>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div className={style.footerLinks}>
          <h3>Customer Support</h3>

          <Link to="/faq">FAQs</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Return Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* NEWSLETTER */}
        <div className={style.newsletter}>
          <h3>Stay Connected</h3>

          <p>
            Subscribe to receive updates about new arrivals
            and exclusive offers.
          </p>

          <form className={style.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />

            <button type="submit" aria-label="Subscribe">
              <FiArrowRight />
            </button>
          </form>

          <div className={style.email}>
            <FiMail />
            <span>support@example.com</span>
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className={style.footerBottom}>
        <p>
          © {new Date().getFullYear()} E-COMMERCE. All Rights Reserved.
        </p>

        <p>
          Designed with elegance.
        </p>
      </div>

    </footer>
  );
};

export default Footer;