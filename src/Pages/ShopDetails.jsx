
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styles from "../assets/css/ShopDetails.module.css";
import { useParams } from "react-router-dom";
import Products from "../Data/Products.json"
import { useEffect, useState } from "react";
import NotFound from "../Components/404/NotFound"

const ShopDetails = () => {
  const [click, setClick] = useState(0);

  const {id} = useParams();

  const product = Products.filter(
  (item) => item.id === Number(id)
)[0];

useEffect(()=>{
  document.title = "Product Details"
},[])

  return (
<>
{product ? (

  <div>
      <Navbar />
      
      <section className={styles.section}>
      <div className={styles.container}>
          <div className={styles.detailsGrid}>
            <div className={styles.imageWrap}>
              <img
              src={product.productimage}
              alt={product.name}
              className={styles.image}
              />
                </div>
                
            <div className={styles.info}>
            <span className={styles.category}>
            {product.productname}
              </span>

              <p className={styles.description}>
              {product.Productdesc}
              </p>
              
              <h2 className={styles.price}>
              {product.productprice}
              </h2>
              
              <div className={styles.quantity}>
              <button onClick={()=>setClick(click - 1)}>-</button>
                <span>{click}</span>
                <button onClick={()=>setClick(click + 1)}>+</button>
                <button onClick={()=>setClick(0)}>x</button>
                </div>

              <button className={styles.cartBtn}>
                Add to Cart
              </button>

              <button className={styles.buyBtn}>
                Buy Now
                </button>
            </div>
            
            </div>
            </div>
            </section>
            
            <Footer />
            </div>
            ) : (<NotFound/>)}
              </>
            );
};

export default ShopDetails;
