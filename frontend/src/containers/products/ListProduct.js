import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      const currentProducts = productRes.data.list.filter(item => item.prod_category_id == params.productCategoryId);
      setProducts(currentProducts);
      setCategoryProducts(productRes.data.category_list);
      const currentCate = productRes.data.category_list.find(item => item.product_category_id == params.productCategoryId);
      setCurrentCategory(currentCate);
      console.log("product respon", productRes.data);
      let postRes = await axios.get("http://localhost:3003/posts");
      setCategoryPost(postRes.data.category_list);
    };
    if (params.productCategoryId) {
      getProducts();
    }

    
  }, [params]);
  console.log(currentCategory);

  
  return (
    <>
      <Header category_list={categoryProducts} categoryPosts={categoryPosts}/>
      <ProductList products={products} currentCategory={currentCategory}/>
      <Footer />
    </>
  );
};

export default ListProduct;
