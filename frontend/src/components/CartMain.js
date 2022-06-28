import React from "react";
import { Link } from "react-router-dom";
import thumbnailProduct from "../assets/images/20190227_1551259013_dam-lua-co-tru-tay-lung-hoa-tiet-hoa-van-1-247x296.jpg";

const CartMain = () => {
  return (
    <div>
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-md-8 box-cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4 className="title-cart">Giở hàng</h4>
                  </div>
                </div>
              </div>
              <div className="row main-product">
                <div className="col-2">
                  <img className="img-fluid" src={thumbnailProduct} />
                </div>
                <div className="col">
                  <div className="row">
                    Đầm xòe xếp tầng tay lửng bo chun - M
                  </div>
                </div>
                <div className="col">
                  <Link href="#">-</Link>
                  <Link href="#" className="border">
                    1
                  </Link>
                  <Link href="#">+</Link>
                </div>
                <div className="col">
                  425.000đ <span className="close"></span>
                </div>
              </div>
              <div className="row main-product">
                <div className="col-2">
                  <img className="img-fluid" src={thumbnailProduct} />
                </div>
                <div className="col">
                  <div className="row">
                    Đầm xòe xếp tầng tay lửng bo chun - M
                  </div>
                </div>
                <div className="col">
                  <Link href="#">-</Link>
                  <Link href="#" className="border">
                    1
                  </Link>
                  <Link href="#">+</Link>
                </div>
                <div className="col">
                  425.000đ <span className="close"></span>
                </div>
              </div>
              <div className="row main-product">
                <div className="col-2">
                  <img className="img-fluid" src={thumbnailProduct} />
                </div>
                <div className="col">
                  <div className="row">
                    Đầm xòe xếp tầng tay lửng bo chun - M
                  </div>
                </div>
                <div className="col">
                  <Link href="#">-</Link>
                  <Link href="#" className="border">
                    1
                  </Link>
                  <Link href="#">+</Link>
                </div>
                <div className="col">
                  425.000đ <span className="close"></span>
                </div>
              </div>
              <div className="back-to-shop">
                <Link to="/">&leftarrow;</Link>
                <span className="text-muted">TIẾP TỤC XEM SẢN PHẨM</span>
              </div>
            </div>
            <div className="col-md-4 box-summary">
              <div>
                <h5>
                  <b>Cộng giỏ hàng</b>
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
              <button className="btn-submit">Đặt đơn hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
