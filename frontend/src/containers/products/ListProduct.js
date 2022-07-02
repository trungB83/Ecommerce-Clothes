import React, { useState,useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import axios from "axios";


const ListProduct = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProducts(productRes.data.list);
      console.log("product respon", productRes.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <ProductList products={products}/>
      <Footer />
    </>
  );
};

export default ListProduct;
