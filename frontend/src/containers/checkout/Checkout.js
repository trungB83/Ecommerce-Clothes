import Header from "components/Header";
import Footer from "components/Footer";
import "assets/styles/checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, Steps } from "antd";
import { useEffect, useState } from "react";
import imgProductDefault from "assets/images/product/product-2.jpg";
import { addOrder, addOrderItem } from "store/orders/actions";
import { fetchDeliver } from 'store/delivers/actions';
import { fetchPayment } from "store/payments/actions";
import { clearCart } from "store/cart/reducers";
import { useNavigate } from "react-router-dom";
import { getObjectLocal } from 'core-authent/utils/localStorage';
import { auth } from 'core-authent/constants/constant';

const { TextArea } = Input;
const { Option } = Select;
const { Step } = Steps;

function Checkout() {
    const cart = useSelector((state) => state.carts);
    const order = useSelector((state) => state.orders);
    const paymentState = useSelector((state) => state.payments);
    const deliverState = useSelector((state) => state.delivers);
    const [valueDeliver, setValueDeliver] = useState("");
    const [valuePayment, setValuePayment] = useState("");
    const [checkoutForm] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const total = cart.cartTotalAmount.toFixed(2)

    const [userInfo] = useState(() => {
        const userInfoLocal = localStorage.getItem(auth.USER_INFO);
        if (userInfoLocal) {
            return getObjectLocal(auth.USER_INFO);
        } else {
            return {};
        }
    });

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    useEffect(() => {
        dispatch(fetchPayment());
        dispatch(fetchDeliver())
    }, []);

    useEffect(()=> (
        checkoutForm.setFieldsValue({
            fullname : userInfo?.fullname,
            email: userInfo?.email,
            phone: userInfo?.phone,
            address: userInfo?.address
        })
    ),[])

    const handlePayment = (newValue) => {
        setValuePayment(newValue);
    };
    const handleDelivery = (newValue) => {
        setValueDeliver(newValue);
    };

    const onSubmit = (values) => {
        if (
            (values && values.payment_id && values.deliver_id) ||
            values.fullname ||
            values.description ||
            values.phone ||
            values.address ||
            values.order_total_price

        ) {
            const orderItems = localStorage.getItem(`cartItems`)
            const body = {
                user_id: userInfo.user_id ? userInfo.user_id : null,
                fullname: values.fullname.trim(),
                description: values.description ? values.description.trim() : "",
                phone: values.phone ? values.phone.trim() : "",
                address: values.address ? values.address.trim() : "",
                order_total_price: total ? total : 0,
                payment_id: values.payment_id ? values.payment_id : null,
                deliver_id: values.deliver_id ? values.deliver_id : null,
                status: values.status ? values.status : "active",
                order_items: JSON.parse(orderItems)
            };
            dispatch(addOrder(body));
            navigate("/checkout-complete")
            dispatch(clearCart())
        }
    };
    return (
        <>
            <Header />
            <section className="checkout spad">
                <div className="container">
                    <Steps current={1} className="step-bradcrumb">
                        <Step title="Hoàn thành" description="Giỏ hàng"/>
                        <Step title="Đang tiến hành" description="Tạo Đơn hàng"/>
                        <Step title="Đang đợi" description="Hoàn thành tạo đơn hàng"/>
                    </Steps>
                    <div className="checkout__form">
                        <Form
                            layout="vertical"
                            className="category-form"
                            form={checkoutForm}
                            onFinish={onSubmit}
                        >
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <h4 className="checkout__title">Chi tiết thanh toán</h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Form.Item
                                                label="Tên người nhận"
                                                name="fullname"
                                                className="checkout__input"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Vui lòng nhập tên người nhận!",
                                                    },
                                                ]}>
                                                <Input
                                                    placeholder="Tên người nhận"
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form.Item
                                                label="Số điện thoại"
                                                name="phone"
                                                className="checkout__input"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Vui lòng nhập số điện thoại!",
                                                    },
                                                ]}>
                                                <Input
                                                    placeholder="Số điện thoại"
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </div>

                                    </div>
                                    <Form.Item
                                        label="Địa chỉ"
                                        name="address"
                                        className="checkout__input"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập tên người nhận!",
                                            },
                                        ]}>
                                        <Input
                                            placeholder="Địa chỉ chi tiết"
                                            size="large"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        className="checkout__input"
                                        rules={[
                                            {
                                                type: "email",
                                                message: "Vui lòng nhập đúng định dạng email",
                                            },
                                        ]}>
                                        <Input
                                            placeholder="Email"
                                            size="large"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Ghi chú cho đơn hàng"
                                        name="description"
                                        className="checkout__input"
                                    >
                                        <TextArea
                                            placeholder="description"
                                            rows={6}
                                        />
                                    </Form.Item>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Form.Item
                                                label="Phương thức thanh toán"
                                                name="payment_id" size="large" rules={[
                                                    {
                                                        required: true,
                                                        message: "Vui lòng chọn phương thức thanh toán!",
                                                    },
                                                ]}>
                                                <Select
                                                    showSearch={false}
                                                    value={valuePayment}
                                                    loading={paymentState.loading}
                                                    onChange={handlePayment}
                                                >
                                                    {
                                                        paymentState.list.result.data ?
                                                            paymentState.list.result.data.map((item) => (
                                                                <Option key={item.payment_id} value={item.payment_id}>
                                                                    {item.name}
                                                                </Option>
                                                            ))
                                                            : null
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form.Item
                                                label="Phương thức giao hàng"
                                                name="deliver_id" size="large" rules={[
                                                    {
                                                        required: true,
                                                        message: "Vui lòng chọn phương thức giao hàng!",
                                                    },
                                                ]}>
                                                <Select
                                                    showSearch={false}
                                                    value={valueDeliver}
                                                    loading={deliverState.loading}
                                                    onChange={handleDelivery}
                                                >
                                                    {deliverState.list.result.data ? deliverState.list.result.data.map((item) => (
                                                        <Option key={item.deliver_id} value={item.deliver_id}>
                                                            {item.name}
                                                        </Option>)) : null}
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4 className="order__title">Đơn hàng của bạn</h4>
                                        <div className="checkout__order__products">
                                            <p>
                                                Sản phẩm
                                            </p>
                                            <span>Tạm tính</span>
                                        </div>
                                        <ul className="checkout__total__products">
                                            {cart.cartItems.map((item, index) => (
                                                <li key={index}>
                                                    <div className="product-item">
                                                        <div className="product__cart__item__pic">
                                                            <img src={item.image ? item.image : imgProductDefault} alt={item.name} />
                                                        </div>
                                                        <div className="product__cart__item__text">
                                                            <h6>{item.name}</h6>
                                                            <h5>{VND.format(item.sale_price ? item.sale_price : item.price)}</h5>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        x{item.quantity}
                                                    </p>
                                                    <span>
                                                        {VND.format((item.sale_price ? item.sale_price : item.price) * item.quantity)}
                                                    </span>
                                                </li>
                                            ))}

                                        </ul>
                                        <ul className="checkout__total__all">
                                            <li>Số lượng sản phẩm
                                                <Form.Item name="quantity">
                                                    <span>
                                                        {cart.cartTotalQuantity}
                                                    </span>
                                                </Form.Item>
                                            </li>
                                            <li>Tổng giá
                                                <span>
                                                    <Form.Item name="order_total_price">
                                                        {VND.format(cart.cartTotalAmount)}
                                                    </Form.Item>
                                                </span>
                                            </li>
                                        </ul>
                                        <button type="submit" className="site-btn">Đặt hàng</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Checkout