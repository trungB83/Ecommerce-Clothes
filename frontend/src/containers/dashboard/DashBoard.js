import {
  AuditOutlined,
  CreditCardOutlined,
  DownOutlined,
  FileSearchOutlined,
  FolderOpenOutlined,
  HomeFilled,
  LogoutOutlined,
  SlidersOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "../../assets/images/megaLogo.png";
import "./DashBoard.scss";
import { Dropdown, Layout, Menu, Modal, Space } from "antd";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import routes from "core-authent/constants/routes";

import { clearLocal, getObjectLocal } from "core-authent/utils/localStorage";
import avatarDefault from "assets/images/avatar.png";
import { auth } from "core-authent/constants/constant";
import { BASE_URL, API_URL } from "config";

const { Header, Content, Footer, Sider } = Layout;

const DashBoard = () => {
  const [isModalLogout, setIsModalLogout] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [userInfo] = useState(() => {
    const userInfoLocal = localStorage.getItem(auth.USER_INFO);
    if (userInfoLocal) {
      return getObjectLocal(auth.USER_INFO);
    } else {
      return {};
    }
  });

  
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

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link to={`${routes.dashboard}${routes.profile}`}>
              Trang cá nhân
            </Link>
          ),
          key: "0",
          icon: <UserOutlined />,
        },
        {
          type: "divider",
        },
        {
          label: (
            <p className="btn_logout" onClick={showModalLogout}>
              Đăng xuất
            </p>
          ),
          key: "1",
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="dashboard__aside"
        >
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <Menu theme="dark" defaultSelectedKeys={"1"} mode="inline">
            <Menu.Item icon={<HomeFilled />} key={"1"}>
              <Link
                defaultChecked={true}
                to={`${routes.dashboard}${routes.homedashboard}`}
              >
                Trang chủ
              </Link>
            </Menu.Item>
            <Menu.SubMenu
              title="Bài viết"
              icon={<FileSearchOutlined />}
              key={"2"}
            >
              <Menu.Item icon={<FileSearchOutlined />} key={"3"}>
                <Link to={`${routes.dashboard}${routes.post.main_route}`}>
                  Bài viết
                </Link>
              </Menu.Item>
              <Menu.Item icon={<FileSearchOutlined />} key={"4"}>
                <Link to={`${routes.dashboard}${routes.post.addPostPage}`}>
                  Thêm bài viết
                </Link>
              </Menu.Item>
              <Menu.Item icon={<FileSearchOutlined />} key={"5"}>
                <Link to={`${routes.dashboard}${routes.post_cate.main_route}`}>
                  Danh mục bài viết
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Người dùng" icon={<UserOutlined />} key={"6"}>
              <Menu.Item icon={<UserOutlined />} key={"7"}>
                <Link to={`${routes.dashboard}${routes.user.main_route}`}>
                  Danh sách người dùng
                </Link>
              </Menu.Item>
              <Menu.Item icon={<UserOutlined />} key={"8"}>
                <Link to={`${routes.dashboard}${routes.user.addUserPage}`}>
                  Thêm người dùng
                </Link>
              </Menu.Item>
              <Menu.Item icon={<UserOutlined />} key={"9"}>
                <Link to={`${routes.dashboard}${routes.user_cate.main_route}`}>
                  Vai trò
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              title="Sản phẩm"
              icon={<FileSearchOutlined />}
              key={"10"}
            >
              <Menu.Item icon={<CreditCardOutlined />} key={"11"}>
                <Link
                  defaultChecked={true}
                  to={`${routes.dashboard}${routes.product.main_route}`}
                >
                  Sản phẩm
                </Link>
              </Menu.Item>
              <Menu.Item icon={<CreditCardOutlined />} key={"12"}>
                <Link
                  defaultChecked={true}
                  to={`${routes.dashboard}${routes.product.addProductPage}`}
                >
                  Thêm sản phẩm
                </Link>
              </Menu.Item>
              <Menu.Item icon={<CreditCardOutlined />} key={"13"}>
                <Link
                  defaultChecked={true}
                  to={`${routes.dashboard}${routes.product_cate.main_route}`}
                >
                  Danh mục sản phẩm
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              title="Đơn hàng"
              icon={<FileSearchOutlined />}
              key={"14"}
            >
              <Menu.Item icon={<AuditOutlined />} key={"15"}>
                <Link to={`${routes.dashboard}${routes.order.main_route}`}>
                  Đơn hàng
                </Link>
              </Menu.Item>
              <Menu.Item icon={<CreditCardOutlined />} key={"16"}>
                <Link
                  defaultChecked={true}
                  to={`${routes.dashboard}${routes.payment.main_route}`}
                >
                  Thanh toán
                </Link>
              </Menu.Item>
              <Menu.Item icon={<UserAddOutlined />} key={"17"}>
                <Link
                  defaultChecked={true}
                  to={`${routes.dashboard}${routes.deliver.main_route}`}
                >
                  Giao vận
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item icon={<FolderOpenOutlined />} key={"18"}>
              <Link
                defaultChecked={true}
                to={`${routes.dashboard}${routes.file.main_route}`}
              >
                Thư viện tệp tin
              </Link>
            </Menu.Item>
            <Menu.Item icon={<SlidersOutlined />} key={"19"}>
              <Link
                defaultChecked={true}
                to={`${routes.dashboard}${routes.option.main_route}`}
              >
                Cài đặt
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="dashboard-header" style={{ padding: 0 }}>
            <div className="dashboard-header__search"></div>
            <div className="dashboard-header__user">
              <Dropdown overlay={menu} trigger={["click"]}>
                <div
                  className="wrapper_user"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    <img
                      className="user_avatar"
                      src={
                        userInfo.image
                          ? `${API_URL}/api/v1/${userInfo.image}`
                          : avatarDefault
                      }
                      alt="avatar"
                    />
                    {userInfo.fullname}
                    <DownOutlined />
                  </Space>
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Dashboard ©2022 Created by BuiTrung
          </Footer>
        </Layout>
      </Layout>
      <Modal
        title="Xác nhận"
        open={isModalLogout}
        onOk={handleOkLogout}
        onCancel={handleCancelLogout}
      >
        <p>Bạn có chắc chắn muốn đăng xuất?</p>
      </Modal>
    </>
  );
};

export default DashBoard;
