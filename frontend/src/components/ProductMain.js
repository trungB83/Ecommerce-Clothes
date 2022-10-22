import React, {  } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/detail-product.css"


const ProductMain = (props) => {
  return (
    <div>
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper-navigation">
                <ul className="nav">
                  <li className="nav-link">
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  /
                  <li className="nav-link">
                    <Link to="">Đầm</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product">
                <div className="row" key={props.product.prod_id}>
                <div className="col-lg-6">
                  <div className="wrapper-image">
                    <img
                      className="img-product"
                      src={props.product.prod_thumbnail}
                      alt="img-detail"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wrapper-text">
                    <h1 className="title-product">
                      {props.product.prod_name}
                    </h1>
                    <p className="price-product">{props.product.prod_price}</p>
                    <div className="short-decription-product">
                      <p>
                        {props.product.prod_description}
                      </p>
                    </div>

                    <button className="btn-submit">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <p>Thêm vào giỏ hàng</p>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
