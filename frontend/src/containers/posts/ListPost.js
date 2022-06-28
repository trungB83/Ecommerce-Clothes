import React, { Component } from "react";
import bannerImg from "../../assets/images/20200718_1595086365_listen-to-the-cicadas-web.jpg";
import Header from "../../components/Header";
import ProductList from "../../components/HomeProductList";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";

const ListPost = () => {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  );
};

export default ListPost;
