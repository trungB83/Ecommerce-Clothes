import { Layout, Table, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import "../assets/styles/CusstomProfile.scss";
import { Link, useNavigate , useParams} from "react-router-dom";
import routes from "../core-authent/constants/routes";
import { auth } from "../core-authent/constants/constant";
import { clearLocal, getObjectLocal } from "../core-authent/utils/localStorage";
import { API_LOCAL_URL } from "../config";
import axios from "axios";

export default function CustomerProfile() {
  const [isModalLogout, setIsModalLogout] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gridData, SetGridData] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({})
  const params = useParams();
  console.log("params" ,params);
  const [userInfo] = useState(() => {
    const userInfoLocal = localStorage.getItem(auth.USER_INFO);
    if (userInfoLocal) {
      return getObjectLocal(auth.USER_INFO);
    } else {
      return {};
    }
  });
  console.log("userInfo", userInfo);

  const navigate = useNavigate();
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
    navigate(routes.login);
    clearLocal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "order_id",
      render: (text) => <a onClick={showModal}>{text}</a>,
    },
    {
      title: "Ngày đặt",
      dataIndex: "order_date",
    },
    {
      title: "Trạng thái thanh toán",
      dataIndex: "oder_status",
    },
    {
      title: "Tổng tiền",
      dataIndex: "oder_total",
    },
  ];

  const getOrder = async () => {
    let dataRes = await axios.get(`${API_LOCAL_URL}/orders`);
    console.log("oderRes", dataRes);
    SetGridData(dataRes.data.list);
    const currentOrder = dataRes.data.list.find(item => item.order_id == params.orderId);
    setCurrentOrder(currentOrder);
    console.log("currentOrder", currentOrder);
  };

  useEffect(() => {
    getOrder();
  }, [params]);

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
            <Table columns={columns} dataSource={gridData} />
          </div>

          <div className="CusstomProfile__bottom">
            <div>
              <h3 className="CusstomProfile__bottom-item">
                {userInfo.ten_nhan_vien}
              </h3>
              <div className="CusstomProfile__bottom-item">
                {userInfo.email}
              </div>
              <div className="CusstomProfile__bottom-item">
                {userInfo.dia_chi
                  ? userInfo.dia_chi
                  : "Chưa nhập địa chỉ địa chỉ"}
              </div>
              <div className="CusstomProfile__bottom-item">
                {userInfo.so_dien_thoai
                  ? userInfo.so_dien_thoai
                  : "Chưa nhập số điện thoại"}
              </div>
              <div className="CusstomProfile__bottom-item">
                <Link to="">Thay đổi địa chỉ</Link>
              </div>
            </div>
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
          onCancel={handleCancel}
          okText="OK"
          cancelText="Đóng"
        >
          <div>
            <h3>
              Đơn hàng : #1000049552{} đặt lúc 06 02, 2020 10:53SA{}
            </h3>
            <div className="modalOder__info">
              <h4>Địa chỉ nhận thanh toán</h4>
              <p>Tình trạng thanh toán: pending</p>
              <p>Họ và tên người nhận : Bùi Quang Trung</p>
              <p>Địa chỉ : Hà Nội </p>
              <p>Số điện thoại : 09888888888</p>
            </div>
            <div className="modalOder__products">
              <table className="modalOder__products-table">
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Mã sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>tên sản phẩm</td>
                    <td>Giá sản phẩm</td>
                    <td>1</td>
                    <td>Giá</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="3">Tổng tiền</th>
                    <td>Tổng giá tiền</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
