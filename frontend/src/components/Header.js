import React, { useState, useEffect } from "react";
import logo from "../assets/images/02_logo.png";
import { Link } from "react-router-dom";
import "assets/styles/header.scss";
import imgHeart from "assets/images/icon/heart.png";
import imgCart from "assets/images/icon/cart.png"
import {
  SearchOutlined,
} from "@ant-design/icons";
import routes from "core-authent/constants/routes";
import { useSelector, useDispatch } from 'react-redux';
import { getLocal, getObjectLocal } from 'core-authent/utils/localStorage';
import { auth } from 'core-authent/constants/constant';
import { getTotals } from 'store/cart/reducers';

  

const Header = () => {
  const { cartTotalQuantity } = useSelector(state => state.carts)
  const [userInfo] = useState(() => {
    const userInfoLocal = localStorage.getItem(auth.USER_INFO);
    if (userInfoLocal) {
      return getObjectLocal(auth.USER_INFO);
    } else {
      return {};
    }
  });

  const cart = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

const getID = userInfo.user_id;
const isAuthCheck = !getLocal(auth.TOKEN) ? routes.auth.login : `${routes.customer}${getID}`
const setTitle = !getLocal(auth.TOKEN) ? 'Đăng nhập' : 'Tài khoản'
  return (
    <div>
      <div className="header">
        <div className="main-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 ">
                <div className="wrapper-search">

                  <div className="wrapper-right">
                    <input
                      type="text"
                      name="search"
                      placeholder="Nhập sản phẩm cần tìm..."
                      id="search-bar"
                    />
                    <button className="submit-search">
                      <SearchOutlined style={{ fontSize: "150%" }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="wrapper-logo">
                  <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="header__nav__option" bis_skin_checked="1">
                  <Link to="#"><img src={imgHeart} alt="" /></Link>
                  <Link to="/cart"><img src={imgCart} alt="" /><p>{cartTotalQuantity}</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-menu">
          <div className="container">
            <div className="wrapper-bottom-menu">
              <div className="wrapper-menu-left">
                <nav className="header__navigate">
                  <ul className="header__navigate-list">
                    <li className="header__navigate-item">
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="header__navigate-item">
                      <Link to="/about-us">Giới thiệu</Link>
                    </li>
                    <li className="header__navigate-item">
                      <Link to="/product-list">
                        Sản phẩm
                      </Link>
                    </li>
                    <li className="header__navigate-item">
                      <Link to="/post-list">Tin Tức</Link>
                    </li>
                    <li className="header__navigate-item">
                      <Link to="/contact">Liên hệ</Link>
                    </li>
                    <li className="header__navigate-item">
                      <Link to={isAuthCheck}>{setTitle}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;
