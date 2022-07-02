import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/images/20200718_1595086365_listen-to-the-cicadas-web.jpg";
import Header from "../../components/Header";
import HomeProductList from "../../components/HomeProductList";
import HomePostList from "../../components/HomePostList";
import Footer from "../../components/Footer";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProducts(productRes.data.list);
      console.log("product respon", productRes.data);
    };
  
    const getPosts = async () => {
      let postRes = await axios.get("http://localhost:3003/posts");
      setPosts(postRes.data.list);
      console.log("post respose", postRes.data);
    };
    getProducts();
    getPosts();
  }, []);

  return (
    <>
      <Header />
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
