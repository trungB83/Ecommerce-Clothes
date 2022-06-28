import React, { Component } from "react";
import bannerImg from "../../assets/images/20200718_1595086365_listen-to-the-cicadas-web.jpg";
import Header from "../../components/Header";
import HomeProductList from "../../components/HomeProductList";
import HomePostList from "../../components/HomePostList";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="main-banner">
          <img className="banner-img" src={bannerImg} alt="banner" />
        </div>
        <HomeProductList />
        <HomePostList />
      </div>
      <Footer />
    </>
  );
};

export default Home;