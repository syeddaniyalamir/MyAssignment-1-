import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import Testimonials from "../Components/Home/Testimonials";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Newsletter from "../Components/Home/Newsletter";
import { use, useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    document.title = "Home Page"
  },[])
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
