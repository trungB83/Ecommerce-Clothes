import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";

const ListProduct = () => {
  return (
    <>
      <Header />
      <ProductList/>
      <Footer />
    </>
  );
};

export default ListProduct;
