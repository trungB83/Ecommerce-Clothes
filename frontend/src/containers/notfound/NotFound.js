import React from 'react';
import { Link } from 'react-router-dom';
import Header from "components/Header";
import Footer from "components/Footer";
import { Button, Result } from 'antd';
const NotFound = () => (
    <>
        <Header />
        <Result
            status="404"
            title="404"
            subTitle="Xin lỗi trang bạn tìm không có"
            extra={<Button type="primary">Trở về trang chủ</Button>}
        />
        <Footer />
    </>

);

export default NotFound;