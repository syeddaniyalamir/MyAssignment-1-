
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import style from "../../assets/css/Hero.module.css";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.heroContent}>
        <span className={style.tagline}>
          PREMIUM COLLECTION 2026
        </span>

        <h1>
          DEFINE YOUR
          <span> OWN STYLE.</span>
        </h1>

        <p className={style.description}>
          Discover a world of style, elegance and confidence.
          Explore our latest collection and find the pieces
          that make every moment yours.
        </p>

        <div className={style.heroButtons}>
          <Link to="/shop" className={style.shopBtn}>
            Explore Collection
            <FiArrowUpRight />
          </Link>

          <Link to="/" className={style.aboutBtn}>
            Discover More
          </Link>
        </div>

        <div className={style.heroStats}>
          <div>
            <h3>500+</h3>
            <span>Products</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Quality</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>Support</span>
          </div>
        </div>
      </div>

      <div className={style.heroVisual}>
        <div className={style.imageFrame}>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
            alt="Premium fashion collection"
          />

          <div className={style.imageOverlay}></div>

          <div className={style.floatingCard}>
            <span>NEW ARRIVALS</span>
            <h3>Style that speaks.</h3>
            <p>Explore the latest trends</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
