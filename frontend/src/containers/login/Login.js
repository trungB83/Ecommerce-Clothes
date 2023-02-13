import "assets/styles/login-content.scss"
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, statusNotification } from "core-authent/constants/constant";
import { renderContentNoti } from "core-authent/utils/utils";
import { httpClient } from "store/api";
import { setLocal, setObjectLocal } from "core-authent/utils/localStorage";
import routes from "core-authent/constants/routes";
import Header from "components/Header";
import Footer from "components/Footer";



function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = values => {
    if (values && values.username && values.password) {
      const body = {
        username: values.username.trim(),
        password: values.password.trim()
      }
      handleLogin(body)
    } else {
      return
    }
  }
  
  const handleLogin = async body => {
    setIsLoading(true)
    try {
      const response = await httpClient.post(routes.auth.apiLogin, body)
      if (
        response?.data?.data &&
        response?.data?.accessToken &&
        response?.data?.success == true
      ) {
        setIsLoading(false)
        setLocal(auth.TOKEN, response.data.accessToken)
        setObjectLocal(auth.USER_INFO, response.data.data)
        notification.success({
          ...renderContentNoti(statusNotification.login.LOGIN_SUCCESS)
        })
        response.data.data.user_cate_id === 1 ? navigate(routes.dashboard) : navigate(`${routes.customer}${response?.data?.data?.user_id}`)
      } else {
        setIsLoading(false)
        notification.error({ ...renderContentNoti() })
      }
    } catch (error) {
      setIsLoading(false)
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.error &&
        error.response.status !== 500 &&
        error.response.status !== 401
      ) {
        notification.error(
          ...renderContentNoti(
            statusNotification.login.LOGIN_FAIL,
            error.response.error
          )
          
        )
      }
    }
  }
  

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className="formLogin"
          >
            <h1 className="formLogin__title">Đăng nhập</h1>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập!",
                },
              ]}
            >
              <Input placeholder="Tên đăng nhập " />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
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
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ><Button >
                <Link to="/register">Đăng ký</Link>
              </Button>
            </Form.Item>

          </Form>

        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;
