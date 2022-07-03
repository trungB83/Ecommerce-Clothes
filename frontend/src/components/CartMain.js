import React from "react";
import { Link } from "react-router-dom";
import thumbnailProduct from "../assets/images/20190227_1551259013_dam-lua-co-tru-tay-lung-hoa-tiet-hoa-van-1-247x296.jpg";
import "../assets/styles/cart.css";

const CartMain = () => {
  return (
    <div>
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title">
                <h4 className="title-cart">Giỏ hàng</h4>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="box-cart">
                <div className="row main-product">
                  <div className="col-2 image">
                    <img className="img-fluid" src={thumbnailProduct} />
                  </div>
                  <div className="col name">
                    <div className="row">
                      Đầm xòe xếp tầng tay lửng bo chun - M
                    </div>
                  </div>
                  <div className="col quatity">
                    <input type="number" value="4" min="1" class="quantity-field"/>
                  </div>
                  <div className="col price">
                    425.000đ <span className="close"></span>
                  </div>
                  <div className="col delete">
                    <button className="delete-btn">Xóa</button>
                  </div>
                </div>
                <div className="row main-product">
                  <div className="col-2 image">
                    <img className="img-fluid" src={thumbnailProduct} />
                  </div>
                  <div className="col name">
                    <div className="row">
                      Đầm xòe xếp tầng tay lửng bo chun - M
                    </div>
                  </div>
                  <div className="col quatity">
                    <input type="number" value="4" min="1" class="quantity-field"/>
                  </div>
                  <div className="col price">
                    425.000đ <span className="close"></span>
                  </div>
                  <div className="col delete">
                    <button className="delete-btn">Xóa</button>
                  </div>
                </div>
              </div>

              <div className="back-to-shop">
                <Link to="/" className="back"><i class="fa fa-angle-left" aria-hidden="true"></i> TIẾP TỤC XEM SẢN PHẨM</Link>
              </div>
            </div>


            
            <div className="col-lg-4 ">
              <div className="box-summary">
                <div className="title-summary">
                  <h5>
                    Cộng giỏ hàng
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col">Tạm tính</div>
                  <div className="col text-right">425.000đ</div>
                </div>
                <form>
                  <p>Đơn vị vận chuyển</p>
                  <select className="shipType">
                    <option className="text-muted">viettel-post 25.000</option>
                  </select>
                  <p>Mã ưu đãi</p>
                  <input id="code" placeholder="Nhập mã ưu đãi" />
                </form>
                <div className="row Total">
                  <div className="col">Tổng đơn hàng</div>
                  <div className="col text-right">450.000đ</div>
                </div>
                <div className="box-button">
                  <button className="btn-submit">Đặt đơn hàng</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
