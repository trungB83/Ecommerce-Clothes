import {
  CalendarOutlined,
  GroupOutlined,
  MailOutlined,
  TagsOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons"
import React from "react"
import { Col, Row, Button } from "antd"
import { auth } from "constants/constant"
import routes from "../../../../core-authent/constants/routes"

import { getObjectLocal } from "utils/localStorage"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Profile.scss"
import { API_URL } from "config"
import Avatar from "../../../../assets/images/avatar.png"
function Profile() {
  const [userInfo, setUserInfo] = useState(null)
  const [userInfoMore, setUserInfoMore] = useState([])

  useEffect(() => {
    const userInfoLocal = getObjectLocal(auth.USER_INFO)
    if (userInfoLocal) {
      setUserInfo(userInfoLocal)
      const createdDate = userInfoLocal.ngay_tao
        ? `Ngày tạo: ${userInfoLocal.ngay_tao}`
        : "Ngày tạo: --"
      const userGroup = userInfoLocal.ten_nhom_nhan_vien
        ? `Tên nhóm nhân viên: ${userInfoLocal.ten_nhom_nhan_vien}`
        : "Tên nhóm nhân viên: --"
      const userStatus = userInfoLocal.trang_thai
        ? `Trạng thái: ${userInfoLocal.trang_thai}`
        : "Trạng thái: --"
      const userAdress = userInfoLocal.dia_chi
        ? `Địa chỉ: ${userInfoLocal.dia_chi}`
        : "Địa chỉ: --"
      const userGender = userInfoLocal.gioi_tinh
        ? `Giới tính: ${userInfoLocal.gioi_tinh}`
        : "Giới tính: --"
      setUserInfoMore([
        ...userInfoMore,
        createdDate,
        userGroup,
        userStatus,
        userAdress,
        userGender
      ])
    }
  }, [])

  return (
    <>
      <div className="pageProfileDetail">
        <h1>Hồ sơ thành viên</h1>
        <Row gutter={16} className="ProfileDetail">
          <Col span={5} className="ProfileDetail-Left">
            <div className="ProfileDetail-Left-inner">
              <h2>Thông tin cơ bản</h2>
              <div className="ProfileDetail-avatar">
                <img
                  className="user-avatar"
                  src={
                    userInfo && userInfo.anh_dai_dien
                      ? `${API_URL}${userInfo.anh_dai_dien}`
                      : Avatar
                  }
                  alt="avatar"
                />
              </div>
              <h1 className="ProfileDetail-name">
                {userInfo && userInfo.ten_nhan_vien
                  ? userInfo.ten_nhan_vien
                  : "Tên nhân viên"}
              </h1>
              <Link
                to={`${routes.dashboard}${routes.adduser}`}
                className="Navto-addUser"
              >
                <Button className="ProfileDetail-editUser ant-btn-round">
                  Cập nhật thành viên
                </Button>
              </Link>
            </div>
          </Col>
          <Col span={19} className="ProfileDetail-right">
            <div className="ProfileDetail-text">
              <div className="ProfileDetail-permision">
                <div className="ProfileDetail-permision__title">
                  <GroupOutlined /> NHÓM TÀI KHOẢN
                </div>
                <div className="ProfileDetail-permision__data">
                  {userInfo && userInfo.ten_nhom_nhan_vien
                    ? userInfo.ten_nhom_nhan_vien
                    : "Học sinh"}
                </div>
              </div>
              <div className="ProfileDetail-gender">
                <div className="ProfileDetail-gender__title">
                  <UsergroupAddOutlined /> GIỚI TÍNH
                </div>
                <div className="ProfileDetail-gender__data">
                  {userInfo && userInfo.gioi_tinh ? userInfo.gioi_tinh : "Nam"}
                </div>
              </div>
              <div className="ProfileDetail-phone">
                <div className="ProfileDetail-phone__title">
                  <UsergroupAddOutlined /> SỐ ĐIỆN THOẠI
                </div>
                <div className="ProfileDetail-phone__data">
                  {userInfo && userInfo.so_dien_thoai
                    ? userInfo.so_dien_thoai
                    : "0971 888 999"}
                </div>
              </div>
              <div className="ProfileDetail-email">
                <div className="ProfileDetail-email__title">
                  <MailOutlined /> E-MAIL
                </div>
                <div className="ProfileDetail-email__data">
                  {userInfo && userInfo.email
                    ? userInfo.email
                    : "demo@gmail.com"}
                </div>
              </div>
              <div className="ProfileDetail-address">
                <div className="ProfileDetail-address__title">
                  <TagsOutlined />
                  {userInfo && userInfo.dia_chi ? userInfo.dia_chi : "Hà nội"}
                </div>
                <div className="ProfileDetail-address__data">Địa chỉ</div>
              </div>
              <div className="ProfileDetail-date">
                <div className="ProfileDetail-date__title">
                  <CalendarOutlined /> NGÀY THAM GIA
                </div>
                <div className="ProfileDetail-date__data">
                  {userInfo && userInfo.ngay_tao ? userInfo.ngay_tao : "2022"}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Profile
