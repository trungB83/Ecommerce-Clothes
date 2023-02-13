import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "assets/styles/cart.scss";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Steps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantityCart,
  addCartItem,
  removeFromCart,
  getTotals,
  clearCart
} from "store/cart/reducers";
import { CloseCircleOutlined, DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";
import imgProductDefault from "assets/images/product/product-2.jpg";

const { Step } = Steps

const Cart = () => {
  const cart = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const DeleteCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const ClearCart = (item) => {
    dispatch(clearCart(item))
  }

  const DecreaseQuantity = (item) => {
    dispatch(decreaseQuantityCart(item));
  };

  const IncreaseQuantity = (item) => {
    dispatch(addCartItem(item));
  };

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });


  return (
    <>
      <Header />
      <section className="shopping-cart spad">
        <div className="container">
        <Steps current={0} className="step-bradcrumb">
          <Step title="Đang tiến hành" description="Giỏ hàng" />
          <Step title="Đang đợi" description="Tạo Đơn hàng"/>
          <Step title="Đang đợi" description="Hoàn thành tạo đơn hàng" />
        </Steps>
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                {cart.cartItems.length === 0 ? (
                  <div className="emty_cart">
                    <h1 className="h2">Giỏ hàng của bạn hiện đang trống</h1>
                    <p>Trước khi tiến hành thanh toán, bạn phải thêm một số sản phẩm vào giỏ hàng của mình. Bạn sẽ tìm thấy rất nhiều sản phẩm thú vị trên trang "Cửa hàng" của chúng tôi.</p>
                  </div>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cartItems.map((item, index) => (
                        <tr key={index}>
                          <td className="product__cart__item">
                            <div className="product__cart__item__pic">
                              <img src={item.image ? item.image : imgProductDefault} alt={item.name} />
                            </div>
                            <div className="product__cart__item__text">
                              <h6>{item.name}</h6>
                              <h5>{VND.format(item.sale_price ? item.sale_price : item.price)}</h5>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <div className="quantity">
                              <button
                                className="btn-change"
                                onClick={() => IncreaseQuantity(item)}
                              >
                                <UpSquareOutlined />
                              </button>
                              <p>{item.quantity}</p>
                              <button
                                className="btn-change"
                                onClick={() => DecreaseQuantity(item)}
                              >
                                <DownSquareOutlined />
                              </button>
                            </div>
                          </td>
                          <td className="cart__price">{VND.format((item.sale_price ? item.sale_price : item.price) * item.quantity)}</td>
                          <td className="cart__close">
                            <Button danger onClick={() => DeleteCart(item)}>
                              <CloseCircleOutlined />
                            </Button>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                )}

              </div>
              <div className="row button-cart">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/">Trở lại trang chủ</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Button onClick={() => ClearCart(cart.cartItems)} className="continue__btn">
                    Xóa toàn bộ sản phẩm
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Mã giảm giá</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Áp dụng</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Tổn đơn hàng</h6>
                <ul>
                  <li>Giảm giá <span>0</span></li>
                  <li>Tổng giá tiền <span>{VND.format(cart.cartTotalAmount)}</span></li>
                </ul>
                <Link to="/checkout" className="primary-btn">Tiến hành thanh toán</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
