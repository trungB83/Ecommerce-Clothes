import {
  CalendarOutlined,
  GroupOutlined,
  MailOutlined,
  TagsOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons"
import React from "react"
import { Col, Row, Button } from "antd"
import { auth } from "core-authent/constants/constant"
import routes from "core-authent/constants/routes"
import { getObjectLocal } from "core-authent/utils/localStorage"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Profile.scss"
import { API_URL } from "config"
import Avatar from "assets/images/avatar.png"
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailUser } from 'store/users/actions';

function Profile() {
  const [userInfo, setUserInfo] = useState(null)
  const [userInfoMore, setUserInfoMore] = useState([])
  const userState = useSelector(state => state.users)
  const dispatch = useDispatch()
  const userData = userState.item.result?.data
  useEffect(() => {
    const userInfoLocal = getObjectLocal(auth.USER_INFO)
    dispatch(fetchDetailUser(userInfoLocal.user_id))
    if (userData) {
      setUserInfo(userData)
      const createdDate = userData.created_at
        ? `Ngày tạo: ${userData.created_at}`
        : "Ngày tạo: --"

      const userStatus = userData.user_cate?.name
        ? `Phân quyền: ${userData.user_cate?.name}`
        : "Phân quyền: --"
      const userAdress = userData.address
        ? `Địa chỉ: ${userData.address}`
        : "Địa chỉ: --"
      const userGender = userData.gender
        ? `Giới tính: ${userData.gender}`
        : "Giới tính: --"
      setUserInfoMore([
        ...userInfoMore,
        createdDate,
        userStatus,
        userAdress,
        userGender
      ])
    }
  }, [])
  // console.log(222, userData);
  // console.log(123, userInfo);

  return (
    <>
      <div className="page-profile-detail">
        <h1>Hồ sơ thành viên</h1>
        {userState && userState.item.result && userInfo ? (<Row gutter={16} className="profile-detail">
          <Col span={5} className="profile-detail-Left">
            <div className="profile-detail-Left-inner">
              <h2>Thông tin cơ bản</h2>
              <div className="profile-detail-avatar">
                <img
                  className="user-avatar"
                  src={
                    userInfo && userInfo.image
                      ? `${API_URL}${userInfo.image}`
                      : Avatar
                  }
                  alt="avatar"
                />
              </div>
              <h1 className="profile-detail-name">
                {userInfo && userInfo.fullname
                  ? userInfo.fullname
                  : "Tên người dùng"}
              </h1>
              <Link
                to={`${routes.dashboard}${routes.user.addUserPage}/${userInfo?.user_id}`}
                className="Navto-addUser"
              >
                <Button className="profile-detail-editUser ant-btn-round">
                  Cập nhật thành viên
                </Button>
              </Link>
            </div>
          </Col>
          <Col span={19} className="profile-detail-right">
            <div className="profile-detail-text">
              <div className="profile-detail-permision">
                <div className="profile-detail-permision__title">
                  <GroupOutlined /> NHÓM TÀI KHOẢN
                </div>
                <div className="profile-detail-permision__data">
                  {userInfo && userInfo.user_cate.name
                    ? userInfo.user_cate.name
                    : "Chưa cập nhật"}
                </div>
              </div>
              <div className="profile-detail-gender">
                <div className="profile-detail-gender__title">
                  <UsergroupAddOutlined /> GIỚI TÍNH
                </div>
                <div className="profile-detail-gender__data">
                  {userInfo && userInfo.gender == 1 ? "Nam" : "Nữ"}
                </div>
              </div>
              <div className="profile-detail-phone">
                <div className="profile-detail-phone__title">
                  <UsergroupAddOutlined /> SỐ ĐIỆN THOẠI
                </div>
                <div className="profile-detail-phone__data">
                  {userInfo && userInfo.phone
                    ? userInfo.phone
                    : "Chưa cập nhật"}
                </div>
              </div>
              <div className="profile-detail-email">
                <div className="profile-detail-email__title">
                  <MailOutlined /> E-MAIL
                </div>
                <div className="profile-detail-email__data">
                  {userInfo && userInfo.email
                    ? userInfo.email
                    : "Chưa cập nhật"}
                </div>
              </div>
              <div className="profile-detail-address">
                <div className="profile-detail-address__title">
                  <TagsOutlined />Địa chỉ
                </div>
                <div className="profile-detail-address__data">{userInfo && userInfo.address ? userInfo.address : "Chưa cập nhật"}</div>
              </div>
              <div className="profile-detail-date">
                <div className="profile-detail-date__title">
                  <CalendarOutlined /> NGÀY THAM GIA
                </div>
                <div className="profile-detail-date__data">
                  {userInfo && userInfo.created_at ? moment(userInfo.created_at).format("DD/MM/YYYY | HH:mm") : "Chưa cập nhật"}
                </div>
              </div>
            </div>
          </Col>
        </Row>) : "Đang cập nhật"}

      </div>
    </>
  )
}

export default Profile
