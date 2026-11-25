import { useNavigate } from "react-router-dom";
import Products from "../../Data/Products.json";
import styles from "../../assets/css/NewArrivals.module.css";

const NewArrivals = () => {
  const navigate = useNavigate();

  // Akhri 4 products, naya pehle
  const newProducts = [...Products].reverse().slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Just Landed</span>
          <h2 className={styles.heading}>New Arrivals</h2>
          <p className={styles.subheading}>
            Check out the latest products added to our store.
          </p>
        </div>

        <div className={styles.grid}>
          {newProducts.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <span className={styles.badge}>New</span>
                <img
                  src={item.productimage}
                  alt={item.productname}
                  className={styles.image}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.name}>{item.productname}</h3>
                <p className={styles.price}>{item.productprice}</p>

                <button
                  className={styles.btn}
                  onClick={() => navigate(`/shopdetails/${item.id}`)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.viewAll} onClick={() => navigate("/shop")}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;