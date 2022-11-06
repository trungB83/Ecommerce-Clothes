import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/style.css";
import "antd/dist/antd.css";
import Home from "./containers/home/Home";
import ListPost from "./containers/posts/ListPost";
import PostDetail from "./containers/posts/PostDetail";
import ProductDetail from "./containers/products/ProductDetail";
import ListProduct from "./containers/products/ListProduct";
import Cart from "./containers/cart/Cart";
import Login from "./containers/login/Login";
import Contact from "./containers/contact/Contact";
import Register from "./containers/register/Register";
import ProfileListDashBoard from "./containers/dashboard/pages/profileList/ProfileList";
import ProfileDashBoard from "./containers/dashboard/pages/profile/Profile";
import PostDashBoard from "./containers/dashboard/pages/postList/PostList";
import DashBoard from "./containers/dashboard/DashBoard";
import Customer from "./containers/customer/Customer";
import OrderList from "./containers/dashboard/pages/orderList/OrderList";
import ProductList from "./containers/dashboard/pages/productList/ProductList";
import HomeDashBoard from "./containers/dashboard/pages/Home/Home";
import "./App.css";
import Provider from "./store/Provider";
const App = () => {
  return (
    <Provider>
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
          <Route path="/user/:userId" element={<Customer />}></Route>
          <Route path="/register/" element={<Register />}></Route>
          <Route path="/contact/" element={<Contact />}></Route>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="home" element={<HomeDashBoard />} />
            <Route path="profile" element={<ProfileDashBoard />} />
            <Route path="posts" element={<PostDashBoard />} />
            <Route path="profile-list" element={<ProfileListDashBoard />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="order-list" element={<OrderList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
