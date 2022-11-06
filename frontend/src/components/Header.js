import React, { useEffect, useState } from "react";
import bannerTop from "../assets/images/deal_top.jpg";
import logo from "../assets/images/02_logo.png";
import imgWrapper from "../assets/images/shipping-icon-v.png";
import { Link } from "react-router-dom";
import { API_LOCAL_URL } from "../config";
import axios from "axios";
import {
  ShoppingCartOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const Header = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let prodRes = await axios.get(`${API_LOCAL_URL}/products`);
      setCategoryProducts(prodRes.data.category_list);
      let postRes = await axios.get(`${API_LOCAL_URL}/posts`);
      setCategoryPost(postRes.data.category_list);
    };
    getCategories();
  }, []);
  return (
    <div>
      <div className="header">
        <div className="topbar-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <img className="banner-top" src={bannerTop} alt="banner-top" />
              </div>
            </div>
          </div>
        </div>

        <div className="main-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="wrapper-logo">
                  <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="wrapper-search">
                  <div className="wrapper-left">
                    <img src={imgWrapper} alt="shipleft" />
                  </div>
                  <div className="wrapper-right">
                    <input
                      type="text"
                      name="search"
                      placeholder="Nhập sản phẩm cần tìm..."
                      id="search-bar"
                    />
                    <button className="submit-search">
                      <SearchOutlined style={{ fontSize: '150%'}}/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="wrapper-cart">
                  <div className="wrapper-hotline">
                    <Link to="#" className="btn-hotline">
                      <PhoneOutlined style={{ fontSize: '150%'}}/>
                      098989898
                    </Link>
                  </div>
                  <div className="wrapper-icon">
                    <Link to="/cart/" className="cart">
                      <ShoppingCartOutlined style={{ fontSize: '150%'}}/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-menu">
          <div className="container">
            <div className="wrapper-bottom-menu">
              <div className="wrapper-menu-left">
                <ul className="nav-bar">
                  <li className="nav-link vertical-menu">
                    <Link to="#">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/">Trang chủ</Link>
                  </li>

                  {categoryProducts &&
                    categoryProducts.map((categoryProducts, index) => (
                      <span className="nav-link" key={index}>
                        <Link
                          to={`/product-category/${categoryProducts.product_category_id}`}
                        >
                          {categoryProducts.product_category_name}
                        </Link>
                      </span>
                    ))}
                  {categoryPosts &&
                    categoryPosts.map((categoryPosts, index) => (
                      <li className="nav-link" key={index}>
                        <Link
                          to={`/post-category/${categoryPosts.post_category_id}`}
                        >
                          Tin Tức
                        </Link>
                      </li>
                    ))}

                  <li className="nav-link">
                    <Link to="/contact/">Liên hệ</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapper-menu-right">
                <Link to="/login">
                  <button className="btn-sale">Đăng nhập</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
