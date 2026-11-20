import styles from "../../assets/css/Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.content}>
            <span className={styles.subtitle}>Newsletter</span>
            <h2 className={styles.title}>Subscribe Karein, Offers Payein</h2>
            <p className={styles.description}>
              Naye arrivals, exclusive discounts aur special deals sab se pehle apne email par hasil karein.
            </p>
          </div>

          <div className={styles.formWrap}>
            <div className={styles.form}>
              <div className={styles.inputWrap}>
                <svg className={styles.mailIcon} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  placeholder="Apna email likhein"
                  className={styles.input}
                />
              </div>
              <button type="button" className={styles.button}>Subscribe</button>
            </div>
            <p className={styles.note}>Hum aap ka email kabhi share nahi karte.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;