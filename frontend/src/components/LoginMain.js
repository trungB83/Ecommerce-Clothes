import React from "react";
import "../assets/styles/login.css";
const LoginMain = () => {
  return (
    <>
      <div className="login">
        <div className="login-box">
          <h2 className="title">Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <div className="button-box">
              <button class="btn-submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginMain;
