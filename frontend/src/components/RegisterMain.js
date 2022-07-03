import React, { Component } from "react";

const RegisterMain = () => {
  return (
    <div>
       <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper-register">
                        <form method="POST" className="registerForm">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-form">
                                        <h2>Đăng ký</h2>
                                    </div>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="username" className="label">Tên đăng nhập</label>
                                    <input type="text" className="form-control" name="username"  id="name"/>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="password" className="label">Mật khẩu</label>
                                    <input type="password" className="form-control" name="password"  id="email"/>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="name" className="label">Họ và tên</label>
                                    <input type="text" className="form-control" name="name"  id="name"/>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="phone" className="label">Số điện thoại</label>
                                    <input type="phone" className="form-control" name="phone"  id="name"/>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="email" className="label">Email</label>
                                    <input type="email" className="form-control" name="email"  id="name"/>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="address" className="label">Địa chỉ</label>
                                    <input type="text" className="form-control" name="address"  id="name"/>
                                </div>
                                <div className="col-lg-12 sub-group">
                                    <p>Bạn đã có tài khoản ? </p>
                                    <a href="" className="back-to-login">Đăng nhập</a>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <input type="submit" value="Đăng kí" className="btn-primary"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default RegisterMain;