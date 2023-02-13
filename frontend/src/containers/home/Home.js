import React from "react";
import Header from "components/Header";
import HomeProductList from "./components/HomeProductList";
import HomePostList from "./components/HomePostList";
import Footer from "components/Footer";
import RegisterNofication from "./components/RegisterNofication";
import CarouselBanner from "./components/CarouselBanner";
import { Input, Row, Col } from 'antd';
import { Form } from "react-router-dom";
import { notification } from 'antd';
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <CarouselBanner />
        <HomeProductList />
        <HomePostList />
      </div>
      <Footer />
    </>
  );
};

export default Home;
