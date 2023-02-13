import "assets/styles/register-content.scss"
import { Button, Checkbox, Form, Input, notification } from "antd"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { statusNotification } from "core-authent/constants/constant"
import routes from "core-authent/constants/routes"
import { renderContentNoti } from "core-authent/utils/utils"
import { httpClient } from "store/api"
import Header from "components/Header";
import Footer from "components/Footer";

function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [formAddUser] = Form.useForm();
  const navigate = useNavigate()

  const onFinish = values => {
    if (
      values &&
      values.username &&
      values.fullname &&
      values.email &&
      values.password &&
      values.re_password
    ) {
      const body = {
        username: values.username.trim(),
        fullname: values.fullname.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
        re_password: values.re_password.trim(),
        user_cate_id: 3,
        status: "active",
      }
      handleRegister(body)
    } else {
      return
    }
  }


  const handleRegister = async body => {
    setIsLoading(true)
    try {
      const response = await httpClient.post(routes.auth.apiRegister, body)
      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.success
      ) {
        setIsLoading(false)
        notification.success({
          ...renderContentNoti(statusNotification.register.REGISTER_SUCCESS)
        })
        navigate(routes.auth.login)
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
      <Header />
      <div className="container">
        <div className="main">
          <Form
            form={formAddUser}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="on"
            className="formLogin"
          >
            <h1 className="formLogin__title">Đăng ký</h1>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập!"
                }
              ]}
            >
              <Input placeholder="Tên đăng nhập " />
            </Form.Item>

            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên người dùng!"
                }
              ]}
            >
              <Input placeholder="Tên người dùng " />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Vui lòng nhập đúng định dạng email!"
                },
                {
                  required: true,
                  message: "Vui lòng nhập Email!"
                }
              ]}
            >
              <Input placeholder="Email " />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!"
                }
              ]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item
              name="re_password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!"
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error("Không trùng khớp mật khẩu!"))
                  }
                })
              ]}
            >
              <Input.Password placeholder="Xác nhận mật khẩu" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16
              }}
              className="group-cb-forgot"
            >
              <Checkbox>Tự động đăng nhập</Checkbox>
              <Link to="/user/forgot" className="group-cb-forgot__link">
                Quên mật khẩu
              </Link>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={isLoading}
                block
              >
                Đăng ký
              </Button>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16
              }}
            >
              <Button>
                <Link to={routes.auth.login}>Đăng nhập</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />

    </>

  )
}
export default Register
