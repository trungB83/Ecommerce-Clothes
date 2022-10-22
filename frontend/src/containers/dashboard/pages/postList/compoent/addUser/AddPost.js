import { UnorderedListOutlined } from "@ant-design/icons"
import { Button, Col, DatePicker, Form, Input, Radio, Row } from "antd"
import TextArea from "antd/lib/input/TextArea"
import TreeSelect, { TreeNode } from "antd/lib/tree-select"
import routes from "../../../../core-authent/constants/routes"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./AddPost.scss"

const genderOption = [
  {
    label: "Nam",
    value: "1"
  },
  {
    label: "Nữ",
    value: "0"
  }
]

const handleDOB = (date, dateString) => {
  console.log(date, dateString)
}

function AddPost() {
  const [valueGender, setValueGender] = useState("Apple")
  const [valueStatus, setValueStatus] = useState(undefined)

  const handleGender = value => {
    console.log("gender checked", value)
    setValueGender(value)
  }

  const handleStatus = newValue => {
    setValueStatus(newValue)
  }

  return (
    <>
      <div className="pageAddUser">
        <Row gutter={16} className="first-row">
          <Col span={18}>
            <h1 className="pageAddUser_title">Thêm Mới Thành Viên</h1>
          </Col>
          <Col span={6}>
            <Link to={`${routes.dashboard}${routes.profilelist}`}>
              <Button className="pageAddUser_toList ant-btn-round">
                <UnorderedListOutlined />
                Danh sách thành viên
              </Button>
            </Link>
          </Col>
        </Row>
        <Row gutter={16} className="ProfileDetail">
          <Col span={18} className="ProfileDetail_left">
            <div className="ProfileDetail_left-inner">
              <Row gutter={16}>
                <Col span={12}>
                  <Form>
                    <Form.Item
                      label="Họ và tên"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Input placeholder="Tên đăng nhập" />
                    </Form.Item>

                    <Form.Item
                      label="Tên đăng nhập"
                      name="ten_tai_khoan"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Input placeholder="Tên đăng nhập" />
                    </Form.Item>

                    <Form.Item
                      label="E-mail"
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "Vui lòng nhập đúng định dạng email!"
                        },
                        {
                          required: true,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Input placeholder="E-mail" />
                    </Form.Item>

                    <Form.Item
                      label="Số điện thoại"
                      name="so_dien_thoai"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Input placeholder="Số điện thoại" />
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={12}>
                  <Form>
                    <Form.Item
                      label="Nơi làm việc"
                      name="noi_lam_viec"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Input placeholder="Nơi làm việc" />
                    </Form.Item>

                    <Form.Item
                      label="Công việc"
                      name="cong_viec"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Input placeholder="Công việc" />
                    </Form.Item>

                    <Form.Item
                      label="Địa chỉ"
                      name="dia_chi"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Input placeholder="Địa chỉ" />
                    </Form.Item>

                    <Form.Item
                      label="Giới tính"
                      name="gioi_tinh"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng điền đủ trường này"
                        }
                      ]}
                    >
                      <Radio.Group
                        options={genderOption}
                        onChange={handleGender}
                        value={valueGender}
                        optionType="button"
                      />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form>
                    <Form.Item
                      label="Mật khẩu"
                      name="mat_khau"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập đủ trường này!"
                        }
                      ]}
                    >
                      <Input.Password placeholder="Mật khẩu" />
                    </Form.Item>
                    <Form.Item
                      label="Giới thiệu"
                      name="gioi_thieu"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập đủ trường này!"
                        }
                      ]}
                    >
                      <TextArea
                        rows={4}
                        placeholder="Nội dung..."
                        maxLength={6}
                      />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={6} className="ProfileDetail_right">
            <div className="ProfileDetail_right-inner">
              <div className="ProfileDetail_right-item">
                <div className="ProfileDetail_right-item__title">
                  <h2>Ảnh đại diện</h2>
                </div>
                <div className="ProfileDetail_right-item__content">
                  <Button className="btn-control red-6">Làm lại</Button>
                  <Button className="btn-control green-6">Xuất bản</Button>
                </div>
              </div>
              <div className="ProfileDetail_right-item">
                <div className="ProfileDetail_right-item__title">
                  <h2>Sinh nhật</h2>
                </div>
                <div className="ProfileDetail_right-item__content">
                  <DatePicker onChange={handleDOB} />
                </div>
              </div>
              <div className="ProfileDetail_right-item">
                <div className="ProfileDetail_right-item__title">
                  <h2>Trạng thái</h2>
                </div>
                <div className="ProfileDetail_right-item__content">
                  <TreeSelect
                    showSearch
                    style={{ width: "100%" }}
                    value={valueStatus}
                    dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={handleStatus}
                  >
                    <TreeNode value="Bị khóa" title="active"></TreeNode>
                    <TreeNode value="Đang hoạt động" title="block"></TreeNode>
                  </TreeSelect>
                </div>
              </div>
              <div className="ProfileDetail_right-item">
                <div className="ProfileDetail_right-item__title">
                  <h2>Xuất bản</h2>
                </div>
                <div className="ProfileDetail_right-item__content">
                  <Button style={{ width: "100%" }}>Chọn file</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AddPost
