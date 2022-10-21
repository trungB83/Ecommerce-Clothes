import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      console.log("product respon", productRes);
      const curProd= productRes.data.list;
      console.log("curProd", curProd);
      const currentProducts = curProd.filter(item => item.prod_category_id == params.productCategoryId);
      setProducts(currentProducts);
      console.log("products after", products);
      const currentCate = productRes.data.category_list.find(item => item.product_category_id == params.productCategoryId);
      setCurrentCategory(currentCate);
    };
    if (params.productCategoryId) {
      getProducts();
    }

    
  }, [params]);
  console.log("currentCategory", currentCategory);

  
  return (
    <>
      <Header/>
      <ProductList products={products} currentCategory={currentCategory}/>
      <Footer />
    </>
  );
};

export default ListProduct;
