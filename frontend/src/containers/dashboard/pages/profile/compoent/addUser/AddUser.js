import { UnorderedListOutlined } from "@ant-design/icons"
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Radio,
  Row
} from "antd"
import React from "react"
import FormItem from "antd/es/form/FormItem"
import TextArea from "antd/lib/input/TextArea"
import TreeSelect, { TreeNode } from "antd/lib/tree-select"
import { httpClient } from "../../../../../../axiosClient"
import { statusNotification } from "../../../../../../core-authent/constants/constant"
import { pathApi } from "../../../../../../core-authent/constants/pathApi"
import routes from "../../../../../../core-authent/constants/routes"

import { renderContentNoti } from "../../../../../../core-authent/utils/utils"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./AddUser.css"

const defaultUser = {
  ten_nhan_vien: "",
  ten_tai_khoan: "",
  email: "",
  so_dien_thoai: "",
  anh_dai_dien: "",
  mat_khau: "",
  chuc_vu: "",
  don_vi: "",
  nhom_nhan_vien_id: "",
  trang_thai: "active",
  dia_chi: "",
  ngay_sinh: "",
  gioi_thieu: "",
  gioi_tinh: 1,
  ma_gioi_thieu: ""
}

const handleDOB = (date, dateString) => {
  console.log(date, dateString)
}

function AddUser() {
  // const [isLoading, setIsLoading] = useState(false)
  const [valueGender, setValueGender] = useState("Apple")
  const [valueStatus, setValueStatus] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleGender = value => {
    console.log("radio3 checked", value)
    setValueGender(value)
  }

  const handleStatus = newValue => {
    setValueStatus(newValue)
    console.log(newValue)
  }

  const onFinish = values => {
    console.log("values", values)
    if (
      values &&
      values.ten_tai_khoan &&
      values.ten_nhan_vien &&
      values.email &&
      values.mat_khau
    ) {
      const body = {
        ten_tai_khoan: values.ten_tai_khoan.trim(),
        ten_nhan_vien: values.ten_nhan_vien.trim(),
        email: values.email.trim(),
        mat_khau: values.mat_khau.trim(),
        dia_chi: values.dia_chi.trim(),
        chuc_vu: values.chuc_vu.trim(),
        don_vi: values.don_vi.trim(),
        so_dien_thoai: values.so_dien_thoai.trim(),
        gioi_tinh: values.gioi_tinh,
        trang_thai: values.trang_thai.trim(),
        gioi_thieu: values.trang_thai.trim()
      }
      handleRegister(body)
    } else {
      return
    }
  }

  const handleRegister = async body => {
    setIsLoading(true)
    try {
      const response = await httpClient.post(pathApi.profile.profiles, body)
      if (
        response &&
        response.data &&
        response.data.token &&
        response.data.data &&
        response.data.success
      ) {
        setIsLoading(false)
        navigate(routes.login)
        notification.success({
          ...renderContentNoti(statusNotification.register.REGISTER_SUCCESS)
        })
      } else {
        setIsLoading(false)
        notification.success({ ...renderContentNoti() })
      }
    } catch (error) {
      setIsLoading(false)
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error &&
        !error.response.data.success &&
        error.response.status !== 500 &&
        error.response.status !== 401
      ) {
        notification.success({
          ...renderContentNoti(
            statusNotification.register.REGISTER_FAIL,
            error.response.data.error
          )
        })
      }
    }
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
          <Form
            onFinish={onFinish}
            initialValues={defaultUser}
            className="form-father"
          >
            <Col span={18} className="ProfileDetail_left">
              <div className="ProfileDetail_left-inner">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Họ và tên"
                      name="ten_nhan_vien"
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
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Nơi làm việc"
                      name="don_vi"
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
                      name="chuc_vu"
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
                        options={[
                          { label: "Nam", value: 1 },
                          { label: "Nữ", value: 0 }
                        ]}
                        onChange={handleGender}
                        value={valueGender}
                        optionType="button"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
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
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={6} className="ProfileDetail_right">
              <div className="ProfileDetail_right-inner">
                <div className="ProfileDetail_right-item">
                  <div className="ProfileDetail_right-item__title">
                    <h2>Xuất bản</h2>
                  </div>
                  <div className="ProfileDetail_right-item__content">
                    <Button className="btn-control red-6">Làm lại</Button>
                    <Button className="btn-control green-6" htmlType="submit">
                      Xuất bản
                    </Button>
                  </div>
                </div>
                <div className="ProfileDetail_right-item">
                  <div className="ProfileDetail_right-item__title">
                    <h2>Sinh nhật</h2>
                  </div>
                  <div className="ProfileDetail_right-item__content">
                    <FormItem name="ngay_sinh">
                      <DatePicker
                        onChange={handleDOB}
                        showToday={true}
                        style={{ width: "100%" }}
                        format="DD/MM/yyyy"
                      />
                    </FormItem>
                  </div>
                </div>
                <div className="ProfileDetail_right-item">
                  <div className="ProfileDetail_right-item__title">
                    <h2>Trạng thái</h2>
                  </div>
                  <div className="ProfileDetail_right-item__content">
                    <FormItem name="trang_thai">
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
                        <TreeNode value="Bị khóa" title="block"></TreeNode>
                        <TreeNode
                          value="Đang hoạt động"
                          title="active"
                        ></TreeNode>
                      </TreeSelect>
                    </FormItem>
                  </div>
                </div>
                <div className="ProfileDetail_right-item">
                  <div className="ProfileDetail_right-item__title">
                    <h2>Ảnh đại diện</h2>
                  </div>
                  <div className="ProfileDetail_right-item__content">
                    <FormItem>
                      <Button style={{ width: "100%" }}>Chọn file</Button>
                    </FormItem>
                  </div>
                </div>
              </div>
            </Col>
          </Form>
        </Row>
      </div>
    </>
  )
}

export default AddUser
