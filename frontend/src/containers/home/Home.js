import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/images/20200718_1595086365_listen-to-the-cicadas-web.jpg";
import Header from "../../components/Header";
import HomeProductList from "../../components/HomeProductList";
import HomePostList from "../../components/HomePostList";
import Footer from "../../components/Footer";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProducts(productRes.data.list);
      setCategoryProducts(productRes.data.category_list);
      let postRes = await axios.get("http://localhost:3003/posts");
      setCategoryPost(postRes.data.category_list);
  
      console.log("productRes", productRes);
      // console.log("product respon", productRes.data);
      // console.log("product category respon", productRes.data.category_list);
    };
  
    const getPosts = async () => {
      let postRes = await axios.get("http://localhost:3003/posts");
      setPosts(postRes.data.list);
      // console.log("post respose", postRes.data);
    };
    getProducts();
    getPosts();
  }, []);
  console.log("log-cate",categoryProducts);


  return (
    <>
      <Header category_list={categoryProducts} categoryPosts={categoryPosts}/>
      <div className="main-content">
        <div className="main-banner">
          <img className="banner-img" src={bannerImg} alt="banner" />
        </div>
        <HomeProductList products={products} />
        <HomePostList posts={posts}/>
      </div>
      <Footer />
    </>
  );
};

export default Home;