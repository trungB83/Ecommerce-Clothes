import React, { useState } from "react";
import "./App.css";
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
// import ProfileListDashBoard from './containers/dashboard/pages/profileList/profileList';
// import ProfileDashBoard from './containers/dashboard/pages/profile/Profile';
// import AddUser from './containers/dashboard/pages/profile/compoent/addUser/AddUser'
// import PostDashBoard from './containers/dashboard/pages/postList/PostList';
// import AddPost from './containers/dashboard/pages/postList/compoent/addUser/AddPost'
import DashBoard from "./containers/dashboard/DashBoard";
import Customer from "./containers/customer/Customer";

const App = () => {
  // const [cartItem, setCartItem] = useState([]);
  // const onAdd = (product) => {
  //   const exist = cartItem.find((item) => item.id === product.id);
  //   if (exist) {
  //     setCartItem(
  //       cartItem.map((item) =>
  //         item.id === product.id ? { ...exist, qty: exist + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCartItem([...cartItem, { ...product, qty: 1 }]);
  //   }
  // };

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
        <Route path="/user/:userId" element={<Customer />}></Route>
        <Route path="/register/" element={<Register />}></Route>
        <Route path="/contact/" element={<Contact />}></Route>
        <Route path="admin/dashboard" element={<DashBoard />}>
          {/* <Route path="home" element={<HomeDashBoard />} />
          <Route path="profile" element={<ProfileDashBoard />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="posts" element={<PostDashBoard />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="profile-list" element={<ProfileListDashBoard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
