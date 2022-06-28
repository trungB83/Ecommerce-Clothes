import React, { Component } from "react";

const LoginMain = () => {
  return (
    <div>
       <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper-login">
                        <form method="POST" className="loginForm">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-form">
                                        <H2>Đăng nhập</H2>
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
                                <div className="col-lg-12 sub-group">
                                    <a href="">Quên mật khẩu</a>
                                    <a href="">Đăng kí</a>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <input type="submit" value="Đăng nhập" className="btn-primary"/>
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

export default LoginMain;