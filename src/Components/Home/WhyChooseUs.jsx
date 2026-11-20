
import styles from "../../assets/css/WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Why Choose Us</span>
          <h2 className={styles.title}>Why Shop With Us?</h2>
          <p className={styles.description}>
            Quality, trust, and excellent service are what define us.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Original Quality</h3>
            <p className={styles.cardText}>
              Every product is 100% original and reaches you only after passing our quality checks.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Fast Delivery</h3>
            <p className={styles.cardText}>
              Enjoy fast and secure delivery across Pakistan, right to your doorstep.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Easy Returns</h3>
            <p className={styles.cardText}>
              Not satisfied with your purchase? Enjoy hassle-free returns and exchanges.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Secure Payment</h3>
            <p className={styles.cardText}>
              Your payments and personal information are always kept safe and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
