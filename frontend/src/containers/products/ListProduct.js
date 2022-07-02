import React, { useState,useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import axios from "axios";


const ListProduct = () => {
  const [products, setProducts] = useState([]);

  // useEffect( async () => {
  //   let res = await axios.get("http://localhost:3003/products");
  //   setProducts(res.data.list);
  //   console.log(res.data);
  // },[])
  
  return (
    <>
      <Header />
      <ProductList products={products}/>
      <Footer />
    </>
  );
};

export default ListProduct;
