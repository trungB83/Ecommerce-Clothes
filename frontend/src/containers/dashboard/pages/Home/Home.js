import "./Home.css"
import { Col, Row, Table } from "antd"
import {
  FileSearchOutlined,
  ProfileOutlined,
  RightOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons"
import React from "react"
import { Link } from "react-router-dom"
import routes from "../../../../core-authent/constants/routes"

import { useEffect, useState } from "react"
import { pathApi } from "../../../../core-authent/constants/pathApi"
import { BASE_URL } from "../../../../config"

function Home() {
  const [gridDataPost, SetGridDataPost] = useState([])
  const [gridDataUser, SetGridDataUser] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const responsePost = await fetch(`${BASE_URL}${pathApi.post.posts}`)
    const responseUser = await fetch(`${BASE_URL}${pathApi.profile.profiles}`)

    const jsonDataPost = await responsePost.json()
    const dataPost = jsonDataPost.data
    SetGridDataPost(gridDataPost)

    const jsonDataUser = await responseUser.json()
    const dataUser = jsonDataUser.data
    SetGridDataUser(gridDataUser)
  }
  console.log("gridDataPost", gridDataPost)

  const columnsPost = [
    {
      title: "Id",
      dataIndex: "tin_tuc_id"
    },
    {
      title: "Tiêu đề",
      dataIndex: "tieu_de"
    },
    {
      title: "Nhóm bài viết",
      dataIndex: "nhom_tin_tuc_id"
    },
    {
      title: "Tác giả",
      dataIndex: "nguoi_tao"
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao"
    },
    {
      title: "Trạng thái",
      dataIndex: "trang_thai"
    }
  ]
  const columnsUser = [
    {
      title: "Id Group",
      dataIndex: "nhom_nhan_vien_id"
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien"
    },
    {
      title: "Họ và tên",
      dataIndex: "ten_nhan_vien"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Địa chỉ",
      dataIndex: "dia_chi"
    },
    {
      title: "Tuổi",
      dataIndex: "tuoi"
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao"
    }
  ]

  return (
    <>
      <div className="pageHome">
        <Row gutter={16} className="father-panel HomeDashBoard">
          <Col span={24} className="HomeDashBoard_item">
            <div className="HomeDashBoard__title-box">
              <h1>THỐNG KÊ CHUNG</h1>
            </div>
            <div className="HomeDashBoard__content-box">
              <h1>CHÀO MỪNG BẠN ĐẾN VỚI HỆ THỐNG QUẢN LÝ</h1>
              <div className="HomeDashBoard__content-text">
                <Row>
                  <Col
                    span={12}
                    className="HomeDashBoard__content-panel user-panel"
                  >
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <UsergroupAddOutlined style={{ fontSize: "3em" }} />
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Tài khoản <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                  <Col
                    span={12}
                    className="HomeDashBoard__content-panel post-panel"
                  >
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <FileSearchOutlined style={{ fontSize: "3em" }} />
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Bài viết <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                  <Col
                    span={12}
                    className="HomeDashBoard__content-panel product-panel"
                  >
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <ProfileOutlined style={{ fontSize: "3em" }} />
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Sản phẩm <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                  <Col
                    span={12}
                    className="HomeDashBoard__content-panel product-panel"
                  >
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <ProfileOutlined style={{ fontSize: "3em" }} />
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Đơn hàng <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="child-panel HomeDashBoard">
          <Col span={11} className="HomeDashBoard_item">
            <div className="HomeDashBoard__title-box">
              <h1>TÀI KHOẢN MỚI</h1>
            </div>
            <div className="HomeDashBoard__content-box">
              <Table
                // itemLayout="horizontal"
                pagination={{
                  onChange: page => {
                    console.log(page)
                  },
                  pageSize: 10
                }}
                columns={columnsUser}
                dataSource={gridDataUser}
              />
            </div>
          </Col>
          <Col span={11} className="HomeDashBoard_item">
            <div className="HomeDashBoard__title-box">
              <h1>TIN TỨC MỚI</h1>
            </div>
            <div className="HomeDashBoard__content-box">
              <Table
                // itemLayout="horizontal"
                pagination={{
                  onChange: page => {
                    console.log(page)
                  },
                  pageSize: 10
                }}
                columns={columnsPost}
                dataSource={gridDataPost}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
