import React, { } from "react";
import bannerTop from "../assets/images/deal_top.jpg";
import logo from "../assets/images/02_logo.png";
import imgWrapper from "../assets/images/shipping-icon-v.png";
import { Link } from "react-router-dom";

const Header = () => {
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
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="wrapper-cart">
                  <div className="wrapper-hotline">
                    <a to="#" className="btn-hotline">
                      <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                      098989898
                    </a>
                  </div>
                  <div className="wrapper-icon">
                    <a to="#" className="cart">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
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
                    <a to="#">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Trang chủ</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Giới thiệu</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Áo</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Giày</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Quần</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Set bộ</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Set jean áo phông</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Túi xách</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Váy đầm</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Tin tức</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Chính sách</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#">Liên hệ</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapper-menu-right">
                <button className="btn-sale">Sale now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
