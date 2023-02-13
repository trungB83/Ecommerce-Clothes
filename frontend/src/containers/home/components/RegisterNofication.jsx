
import React from "react";
import { Input, Row } from 'antd';
import { Form } from "react-router-dom";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import './register-email.scss'
import { Col } from 'antd';
import { notification } from 'antd';

const RegisterNofication = () => {
    // const onSubmit = () => {
    //     notification.success({
    //         message: `Đăng kí nhận tin thành công thành công!`,
    //     });
    // }

    return (
        <div className="register-section">
            <div className="container">
                <Row>
                    <Col xl={8}>
                        <MailOutlined />Đăng ký nhận tin
                    </Col>
                    <Col xl={16}>
                        <Form >
                            <Form.Item>
                                <Input placeholder="Email@email.com"
                                    rules={[
                                        {
                                            type: "email",
                                            message: "Vui lòng nhập đúng định dạng Email!",
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item>
                                <button type="submit">Đăng ký</button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col xl={8}>
                        <PhoneOutlined />Hỗ trợ / Mua hàng: 0909.775.415
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default RegisterNofication

