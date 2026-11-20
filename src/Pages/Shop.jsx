import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/Shop/ProductCard";
import { useEffect } from "react";

const Shop = () => {
  useEffect(()=>{
    document.title = "Our Products"
  },[])
  return (
    <div>
      <Navbar/>
      <ProductCard/>
      <Footer/>
    </div>
  )
}

export default Shop
