import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/styles/cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart,setCart] = useState([]);

  const handleClick = (item) =>{
    console.log("item");
  };

  return (
    <>
      <Header />
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
                    <img className="img-fluid" src="" alt="thumbnail product" />
                  </div>
                  <div className="col name">
                    <div className="row">
                      Đầm xòe xếp tầng tay lửng bo chun - M
                    </div>
                  </div>
                  <div className="col quatity">
                    <button onChange={handleClick(+1)} className="btn-change ">+</button>
                    <p>1</p>
                    <button onChange={handleClick(-1)} className="btn-change">-</button>
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
      <Footer />
    </>
  );
};

export default Cart;
