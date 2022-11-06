import React, { useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/styles/cart.css";
import { Link } from "react-router-dom";
import { get } from "lodash";
import Context from "../../store/Context";
import { Button, Form, Input, Radio, Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  addOrderProduct,
} from "./../../store/Action";
const Cart = () => {
  const [state, dispatch] = useContext(Context);
  const [formAdd] = Form.useForm();
  let [key, setKey] = useState(() => {
    let dataKey = localStorage.getItem("key");
    return dataKey ? JSON.parse(dataKey) * Math.random() : Math.random();
  });

  const [isModalVisibleForm, setIsModalVisibleForm] = useState(false);

  console.log("stateCart", state);

  function PriceProduct(price, tonggia) {
    return Number(price * tonggia).toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  }

  const handleAddMember = (values) => {
    
    const info = { ...values,...state.productCart.Carts };
    console.log("info", info);
    randomKey();
    info.key = uuidv4();

    dispatch(addOrderProduct(info));
    formAdd.resetFields();
    console.log("values", values);
    alert("Đặt hàng thành công!");
    setIsModalVisibleForm(false);
  };

  const randomKey = () => {
    let keyRandom = Math.random();
    if (key !== keyRandom) {
      setKey((preValue) => (preValue = keyRandom));
    } else {
      randomKey();
    }
  };

  const showModalAdd = () => {
    setIsModalVisibleForm(true);
    formAdd.resetFields();
  };

  const handleOkAdd = () => {
    setIsModalVisibleForm(false);
  };

  const handleCancelAdd = () => {
    setIsModalVisibleForm(false);
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
                {get(state, "productCart.Carts", []).map((cartItem, index) => (
                  <div className="row main-product" key={index}>
                    <div className="col-2 image">
                      <img
                        className="img-fluid"
                        src={cartItem.image}
                        alt="thumbnail product"
                      />
                    </div>
                    <div className="col name">
                      <div className="row">{cartItem.name}</div>
                    </div>
                    <div className="col quatity">
                      <button
                        className="btn-change"
                        onClick={() => IncreaseQuantity(index)}
                      >
                        +
                      </button>
                      <p>{cartItem.quantity}</p>
                      <button
                        className="btn-change"
                        onClick={() => DecreaseQuantity(index)}
                      >
                        -
                      </button>
                    </div>
                    <div className="col price">
                      {PriceProduct(cartItem.price, cartItem.quantity)}
                      <span className="close"></span>
                    </div>
                    <div className="col delete">
                      <button
                        className="delete-btn"
                        onClick={() => DeleteCart(index)}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}
                {get(state, "productCart.Carts", []).length === 0 && (
                  <div>Giỏ hàng trống</div>
                )}
              </div>

              <div className="back-to-shop">
                <Link to="/" className="back">
                  <i className="fa fa-angle-left" aria-hidden="true"></i> TIẾP
                  TỤC XEM SẢN PHẨM
                </Link>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className="box-summary">
                <div className="title-summary">
                  <h5>Cộng giỏ hàng</h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col">Tạm tính</div>
                  <div className="col text-right">
                    {state.productCart.Carts.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                </div>
                <form>
                  <p>Đơn vị vận chuyển</p>
                  <select className="shipType">
                    <option className="text-muted">
                      viettel-post (Miễn phí)
                    </option>
                  </select>
                  <p>Mã ưu đãi</p>
                  <input id="code" placeholder="Nhập mã ưu đãi" />
                </form>
                <div className="row Total">
                  <div className="col">Tổng đơn hàng</div>
                  <div className="col text-right">
                    {state.productCart.Carts.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                </div>
                <div className="box-button">
                  <button className="btn-submit" onClick={showModalAdd}>
                    Đặt đơn hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="Thông tin đơn hàng"
          open={isModalVisibleForm}
          onOk={handleOkAdd}
          onCancel={handleCancelAdd}
          footer={null}
          width={1000}
          className="modalOder"
        >
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            onFinish={handleAddMember}
            autoComplete="off"
            form={formAdd}
          >
            <Form.Item label="Họ và tên" name="fullName">
              <Input
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên của bạn!",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "Vui lòng nhập đúng định dạng email!",
                },
                {
                  required: true,
                  message: "Vui lòng nhập email của bản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Số điện thoại" name="phone">
              <Input
                rules={[
                  {
                    type: "number",
                    message: "Vui lòng nhập đúng định dạng số!",
                  },
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại của bạn!",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="Địa chỉ" name="address">
              <Input
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ của bản!",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <div className="modalOder__products">
                <table className="modalOder__products-table">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Ảnh sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {get(state, "productCart.Carts", []).map(
                      (cartItem, index) => (
                        <tr key={index}>
                          <td>{cartItem.name}</td>
                          <td>
                            <img
                              className="img-mini"
                              src={cartItem.image}
                              alt="thumbnail product"
                            />
                          </td>
                          <td>{cartItem.quantity}</td>
                          <td>
                            {PriceProduct(cartItem.price, cartItem.quantity)}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="3">Tổng tiền</th>
                      <td>
                        {state.productCart.Carts.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        ).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Form.Item>
            <Form.Item className="wrapperButton">
              <Button className="btnCenter" type="primary" htmlType="submit">
                Đặt hàng
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
