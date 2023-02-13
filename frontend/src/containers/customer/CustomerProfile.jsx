import { Layout, Table, Modal, Form, Input, Button, Space, Row, Col, TreeSelect } from "antd";
import React, { useState, useEffect } from "react";
import { LogoutOutlined, EnvironmentOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import "assets/styles/user-profile.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import routes from "core-authent/constants/routes";
import { auth } from "core-authent/constants/constant";
import { clearLocal, getObjectLocal } from "core-authent/utils/localStorage";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailUser } from 'store/users/actions';
import { fetchOrder } from 'store/orders/actions';
import { updateUser } from 'store/users/actions';
import { fetchOrderItem } from "store/order-items/actions";
import moment from 'moment';
import { setObjectLocal } from 'core-authent/utils/localStorage';
import imgProductDefault from "assets/images/product/product-2.jpg";

const { TextArea } = Input;

export default function CustomerProfile() {
  const orderState = useSelector((state => state.orders))
  let [dataDetailOrder, setDataDetailOrder] = useState({});
  let [dataDetailOrderTable, setDataDetailOrderTable] = useState([]);
  const [isModalLogout, setIsModalLogout] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpenUpdateUser, setIsModalOpenUpdateUser] = useState(false);
  const navigate = useNavigate();
  const params = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrder())
  }, [dispatch]);
  
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  
  const [userInfo] = useState(() => {
    const userInfoLocal = localStorage.getItem(auth.USER_INFO);
    if (userInfoLocal) {
      return getObjectLocal(auth.USER_INFO);
    } else {
      return {};
    }
  });
  const orderData = orderState.list.result?.data?.filter(items => items.user_id == userInfo.user_id)
  
  
  const reload = () => window.location.reload();

  // logout
  const showModalLogout = () => {
    setIsModalLogout(true);
  };
  const handleOkLogout = () => {
    handleLogout();
  };

  const handleCancelLogout = () => {
    setIsModalLogout(false);
  };

  const handleLogout = () => {
    setIsModalLogout(false);
    navigate(routes.auth.login);
    clearLocal();
  };

  // detail order
  const showModalDetail = (value) => {
    setDataDetailOrder(dataDetailOrder = value)
    setDataDetailOrderTable(dataDetailOrderTable = value.order_items)
    setIsModalOpen(true);
  };

  const handleOkDetail = () => {
    setIsModalOpen(false);
  };

  const handleCancelDetail = () => {
    setIsModalOpen(false);
  };

  // update user
  const [formUpdateUser] = Form.useForm();
  const showModalUpdateUser = (data) => {
    setCurrentUser(data);
    formUpdateUser.setFieldsValue({
      fullname: data?.fullname,
      phone: data?.phone,
      address: data?.address,
      email: data?.email,
    });
    setIsModalOpenUpdateUser(true);
  };

  const handleOkUpdateUser = (data) => {
    onSubmitUpdate(data)
    setIsModalOpenUpdateUser(false);
    formUpdateUser.resetFields();
  };
  const onSubmitUpdate = (values) => {
    if (params?.id) {
      setCurrentUser(values);
      if (
        (values && values?.fullname?.trim() !== currentUser?.fullname) ||
        values?.email?.trim() !== currentUser?.email ||
        values?.address?.trim() !== currentUser?.address ||
        values?.phone?.trim() !== currentUser?.phone
      ) {
        const body = {
          id: params?.id,
          fullname: values?.fullname.trim(),
          address: values?.address ? values?.address.trim() : "",
          email: values?.email ? values?.email.trim() : "",
          phone: values?.phone ? values?.phone.trim() : null
        };
        const bodylocal = {
          user_id: params?.id,
          fullname: values?.fullname.trim(),
          address: values?.address ? values?.address.trim() : "",
          email: values?.email ? values?.email.trim() : "",
          phone: values?.phone ? values?.phone.trim() : null,
          user_cate_id: currentUser.user_cate_id
        };
        dispatch(updateUser(body));
        setObjectLocal(auth.USER_INFO, bodylocal)
        setIsModalOpenUpdateUser(false);
        reload()
      } else {
        return;
      }
    }
  };

  const handleCancelUpdateUser = () => {
    formUpdateUser.resetFields();
    setIsModalOpenUpdateUser(false);
  };

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "order_id",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Tổng tiền đơn hàng",
      dataIndex: "order_total_price",
      key: "order_total_price",
      render: (text) => <p>{text ? VND.format(text) : "--"}</p>,
    },
    {
      title: "Đơn vị giao vận",
      dataIndex: "deliver",
      key: "deliver",
      render: (text) => <p>{text?.name ? text?.name : "--"}</p>,
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "payment",
      key: "payment",
      render: (text) => <p>{text?.name ? text?.name : "--"}</p>,
    },
    {
      title: "Tạo vào lúc",
      dataIndex: "created_at",
      render: (text) => (
        <span className="p_info">
          {text ? moment(text).format("DD/MM/YYYY | HH:mm") : "--"}
        </span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "name",
      render: (text) => <p>{text ? text : "--"}</p>,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              onClick={() => showModalDetail(record)}
              type="primary"
              size="large"
              className="button-control"
            >
              Chi tiết
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <div className="container">
      <div className="CusstomProfile">
        <Layout>
          <div className="CusstomProfile__top">
            <h1>Tài khoản của bạn</h1>
            <Link onClick={showModalLogout}>
              <LogoutOutlined /> Thoát
            </Link>
          </div>
          <div className="CusstomProfile__middle">
            <Table columns={columns}
              dataSource={orderData}
              pagination={{
                onChange: (page) => {
                },
                pageSize: 5,
              }}
              rowKey="order_id"
            />
          </div>

          <div className="CusstomProfile__bottom">
            {userInfo ? (<div>
              <h3 className="CusstomProfile__bottom-item">
                {userInfo?.fullname}
              </h3>
              <div className="CusstomProfile__bottom-item">
                {userInfo?.email}
              </div>
              <div className="CusstomProfile__bottom-item">
                {userInfo?.address
                  ? userInfo?.address
                  : "Chưa nhập địa chỉ địa chỉ"}
              </div>
              <div className="CusstomProfile__bottom-item">
                {userInfo?.phone
                  ? userInfo?.phone
                  : "Chưa nhập số điện thoại"}
              </div>
              <div className="CusstomProfile__bottom-item">
                <Link onClick={() => showModalUpdateUser(userInfo)}>Thay đổi thông tin cá nhân</Link>
              </div>
            </div>) : "không có dữ lệu"}

          </div>
        </Layout>
        <Modal
          title="Xác nhận"
          open={isModalLogout}
          onOk={handleOkLogout}
          onCancel={handleCancelLogout}
        >
          <p>Bạn có chắc chắn muốn đăng xuất?</p>
        </Modal>
        <Modal
          className="modalOder"
          title="Chi tiết đơn hàng"
          width={1000}
          open={isModalOpen}
          onCancel={handleCancelDetail}
          onOk={handleOkDetail}
          okText="OK"
          cancelText="Đóng"
        >
          <div>
            <>
              <h3>
                Đơn hàng : #{dataDetailOrder.order_id} đặt lúc {moment(dataDetailOrder.created_at).format("DD/MM/YYYY | HH:mm")}
              </h3>
              <div className="modalOder__info">
                <h4>Thông tin đơn hàng: </h4>
                <p>Tình trạng đơn hàng: {dataDetailOrder.status ? dataDetailOrder.status : "Chưa cập nhật"}</p>
                <p>Họ và tên người nhận : {dataDetailOrder.fullname ? dataDetailOrder.fullname : "Chưa cập nhật"}</p>
                <p>Địa chỉ : {dataDetailOrder.address ? dataDetailOrder.address : "Chưa cập nhật"} </p>
                <p>Số điện thoại : {dataDetailOrder.phone ? dataDetailOrder.phone : "Chưa cập nhật"}</p>
              </div>
            </>
            <div className="modalOder__products">
              <table className="modalOder__products-table">
                <thead>
                  <tr>
                    <th style={{width: '60%'}}>Sản phẩm</th>
                    <th style={{width: '20%'}}>Ảnh</th>
                    <th style={{width: '10%'}}>Số lượng</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {dataDetailOrderTable ? dataDetailOrderTable.map((item, index) => (
                    <tr key={index} className="order-items-list">
                      <td>{item.name}</td>
                      <td><img src={item.image} className="order-items-list_image" alt={item.name}/></td>
                      <td>{item.quantity}</td>
                      <td>{VND.format(item.sale_price ? item.sale_price : item.price)}</td>
                    </tr>
                  )) : "Đang tải ...."}

                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="2">Tổng tiền</th>
                    <td>{VND.format(dataDetailOrder.order_total_price)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </Modal>

        <Modal
          title="SỬA THÔNG TIN NHẬN HÀNG"
          open={isModalOpenUpdateUser}
          onOk={handleOkUpdateUser}
          onCancel={handleCancelUpdateUser}
          footer={null}
        >
          <Form
            name="formUpdateUser"
            autoComplete="off"
            form={formUpdateUser}
            labelCol={{ span: 9 }}
            onFinish={onSubmitUpdate}
          >
            <Form.Item
              label="Tên người nhận"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên người nhận!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Tên người nhận"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Số điện thoại!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Số điện thoại"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Địa chỉ!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<EnvironmentOutlined />}
                placeholder="Địa chỉ"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Vui lòng nhập đúng định dạng Email!",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Sửa
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
