import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./resets.css";
// import "antd/dist/antd.css";
import 'antd/dist/antd.min.css'
import "assets/styles/main-style.scss";
import { Provider } from "react-redux";
import store from "store/store";
import Guard from "core-authent/guards/Guard";
import GuardLogin from 'core-authent/guards/GuardLogin';
import GuardUser from 'core-authent/guards/GuardUser'
import GuardAdmin from 'core-authent/guards/GuardAdmin';

import ProfileListDashBoard from "containers/dashboard/pages/users/profileList/ProfileList";
import ProfileDashBoard from "containers/dashboard/pages/users/profile/Profile";
import PostDashBoard from "containers/dashboard/pages/posts/PostList";
import OrderDashBoard from "containers/dashboard/pages/orders/orderList/OrderList";
import MediaDashBoard from "containers/dashboard/pages/media-list/MediaList";
import DeliverDashBoard from "containers/dashboard/pages/orders/deliver/Deliver";
import UserCateDashBoard from "containers/dashboard/pages/users/cate/UserCate";
import PaymentDashBoard from "containers/dashboard/pages/orders/payment/Payment";
import DashBoard from "containers/dashboard/DashBoard";
import Customer from "containers/customer/Customer";
import ProductList from "containers/dashboard/pages/product/ProductList";
import ProductCate from "containers/dashboard/pages/product/ProductCate";
import PostCate from "containers/dashboard/pages/posts/PostCate";
import HomeDashBoard from "containers/dashboard/pages/Home/Home";
import UserForm from "containers/dashboard/pages/users/profile/UserForm";
import PostForm from "containers/dashboard/pages/posts/PostForm";
import ProductForm from "containers/dashboard/pages/product/ProductForm";
import Setting from "containers/dashboard/pages/setting/Setting";
import Loading from "components/Loading";
import NotFound from "containers/notfound/NotFound";
import ThanksAfterOrder from "containers/thankyou/ThanksAfterOrder"

const Home = React.lazy(() => import("containers/home/Home"));
const ListPost = React.lazy(() => import("containers/posts/ListPost"));
const PostDetail = React.lazy(() => import("containers/posts/PostDetail"));
const ProductDetail = React.lazy(() =>
  import("containers/products/ProductDetail")
);
const ListProduct = React.lazy(() => import("containers/products/ListProduct"));
const Cart = React.lazy(() => import("containers/cart/Cart"));
const Checkout = React.lazy(() => import("containers/checkout/Checkout"));
const Login = React.lazy(() => import("containers/login/Login"));
const Contact = React.lazy(() => import("containers/contact/Contact"));
const Register = React.lazy(() => import("containers/register/Register"));
const AboutUs = React.lazy(()=> import("containers/about/AboutUs"))




const App = () => {

  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/post-list"
              element={<ListPost />}
            ></Route>
            <Route path="/post-detail/:id" element={<PostDetail />}></Route>
            <Route
              path="/product-list"
              element={<ListProduct />}
            ></Route>
            <Route
              path="/product-detail/:id"
              element={<ProductDetail />}
            ></Route>
            <Route path="/cart/" element={<Cart />}></Route>
            <Route path="/checkout/" element={<Checkout />}></Route>
            <Route path="/checkout-complete/" element={<ThanksAfterOrder />}></Route>
            <Route path="/contact/" element={<Contact />}></Route>
            <Route path="/about-us/" element={<AboutUs />}></Route>
            <Route element={<GuardLogin />}>
              <Route path="/login/" element={<Login />}></Route>
              <Route path="/register/" element={<Register />}></Route>
            </Route>
            <Route element={<Guard />}>
              <Route element={<GuardUser />}>
                <Route path="home" element={<HomeDashBoard />} />
                <Route path="profile" element={<ProfileDashBoard />} />
              </Route>
              <Route path="/user/:id" element={<Customer />}></Route>
              <Route path="/dashboard" element={<DashBoard />}>
                <Route element={<GuardAdmin />}>
                  <Route path="home" element={<HomeDashBoard />} />
                  <Route path="profile" element={<ProfileDashBoard />} />
                  <Route path="post-list" element={<PostDashBoard />} />
                  <Route path="post-form" element={<PostForm />} />
                  <Route path="post-form/:id" element={<PostForm />} />
                  <Route path="post-cate-list" element={<PostCate />} />
                  <Route path="user-list" element={<ProfileListDashBoard />} />
                  <Route path="user-form" element={<UserForm />} />
                  <Route path="user-form/:id" element={<UserForm />} />
                  <Route path="user-cate-list" element={<UserCateDashBoard />} />
                  <Route path="order-list" element={<OrderDashBoard />} />
                  <Route path="deliver-list" element={<DeliverDashBoard />} />
                  <Route path="payment-list" element={<PaymentDashBoard />} />
                  <Route path="product-list" element={<ProductList />} />
                  <Route path="product-form" element={<ProductForm />} />
                  <Route path="product-form/:id" element={<ProductForm />} />
                  <Route path="product-cate-list" element={<ProductCate />} />
                  <Route path="media-list" element={<MediaDashBoard />} />
                  <Route path="setting" element={<Setting />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};

export default App;
