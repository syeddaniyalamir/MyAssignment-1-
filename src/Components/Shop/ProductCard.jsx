
import { useNavigate } from "react-router-dom";
import Products from "../../Data/Products.json";
import styles from "../../assets/css/ProductCard.module.css";

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {Products.map((list) => {
            return (
              <div key={list.id} className={styles.card}>

                <div className={styles.imageWrap}>
                  <img
                    src={list.productimage}
                    alt={list.productname}
                    className={styles.image}
                  />

                  <div className={styles.hoverOverlay}>
                    <button onClick={()=>navigate(`/shopdetails/${list.id}/`)} className={styles.detailsBtn}>
                      See Details
                    </button>
                  </div>
                </div>

                <div className={styles.info}>
                  <p className={styles.category}>
                    {list.productname}
                  </p>

                  <h3 className={styles.name}>
                    {list.Productdesc}
                  </h3>

                  <span className={styles.price}>
                    {list.productprice}
                  </span>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ProductCard;
