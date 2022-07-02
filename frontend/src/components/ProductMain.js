import React, {  } from "react";
import imgProduct from "../assets/images/20200526_1590426385_2020_05_24_16_09_img_0039-247x296.jpg"


const ProductMain = () => {
  return (
    <div>
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper-navigation">
                <ul className="nav">
                  <li className="nav-link">
                    <a href="">Trang Chủ</a>
                  </li>
                  /
                  <li className="nav-link">
                    <a href="">Váy Đầm</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product">
              <div className="row">
                <div className="col-lg-6">
                  <div className="wrapper-image">
                    <img
                      className="img-product"
                      src={imgProduct}
                      alt="img-detail"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wrapper-text">
                    <h1 className="title-product">
                      Đầm xòe xếp tầng tay lửng bo chun
                    </h1>
                    <p className="price-product">425.000đ</p>
                    <div className="short-decription-product">
                      <p>
                        Đầm thiết kế dáng suông. Thiết kế cổ đầm dáng tròn, tay
                        đầm dáng ngắn. Đầm tone trơn phối chữ “2099 Valentino”.
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
