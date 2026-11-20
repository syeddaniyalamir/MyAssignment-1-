
import styles from "../../assets/css/Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.description}>
            Hear about the experiences of our happy customers.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <svg className={styles.quoteIcon} viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
              <path d="M9.17 6A5.17 5.17 0 0 0 4 11.17V18h6.83v-6.83H7.5A1.67 1.67 0 0 1 9.17 9.5V6zm9 0A5.17 5.17 0 0 0 13 11.17V18h6.83v-6.83H16.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
            </svg>
            <div className={styles.stars}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className={styles.text}>
              The watch is completely original and the packaging was excellent. Delivery was also on time. I will definitely order again.
            </p>
            <div className={styles.user}>
              <div>
                <h4 className={styles.userName}>Ahmed Khan</h4>
                <p className={styles.userRole}>Karachi</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <svg className={styles.quoteIcon} viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
              <path d="M9.17 6A5.17 5.17 0 0 0 4 11.17V18h6.83v-6.83H7.5A1.67 1.67 0 0 1 9.17 9.5V6zm9 0A5.17 5.17 0 0 0 13 11.17V18h6.83v-6.83H16.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
            </svg>
            <div className={styles.stars}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className={styles.text}>
              The chain quality is amazing, with excellent polish and finishing. A great collection for the price.
            </p>
            <div className={styles.user}>
              <div>
                <h4 className={styles.userName}>Hassan Ali</h4>
                <p className={styles.userRole}>Lahore</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <svg className={styles.quoteIcon} viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
              <path d="M9.17 6A5.17 5.17 0 0 0 4 11.17V18h6.83v-6.83H7.5A1.67 1.67 0 0 1 9.17 9.5V6zm9 0A5.17 5.17 0 0 0 13 11.17V18h6.83v-6.83H16.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
            </svg>
            <div className={styles.stars}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className={styles.text}>
              The perfume fragrance lasts for a long time. Customer support also answered all my questions quickly.
            </p>
            <div className={styles.user}>
              <div>
                <h4 className={styles.userName}>Usman Raza</h4>
                <p className={styles.userRole}>Islamabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
