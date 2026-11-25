import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "../../assets/css/NotFound.module.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.text}>
        Sorry, the page or product you are looking for doesn't exist or may
        have been moved. Please check the URL or go back to the homepage.
      </p>
      <Link to="/" className={styles.btn}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;