import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/style.css";
import Home from "./containers/home/Home";
import ListPost from "./containers/posts/ListPost";
import PostDetail from "./containers/posts/PostDetail";
import ProductDetail from "./containers/products/ProductDetail";
import ListProduct from "./containers/products/ListProduct";
import Cart from "./containers/cart/Cart";
import Login from "./containers/login/Login";
import Contact from "./containers/contact/Contact";
import Register from "./containers/register/Register";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/post-category/:postCategoryId"
          element={<ListPost />}
        ></Route>
        <Route path="/post-detail/:postId" element={<PostDetail />}></Route>
        <Route
          path="/product-category/:productCategoryId"
          element={<ListProduct />}
        ></Route>
        <Route
          path="/product-detail/:productId"
          element={<ProductDetail />}
        ></Route>
        <Route path="/cart/" element={<Cart />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>
        <Route path="/contact/" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
