import React, { useState, useEffect } from "react";
// import LoginMain from "../../components/LoginMain";
import "../../assets/styles/login.css";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("login")) {
      history.push("/add");
    }
  }, []);

  async function Login(username, password) {
    console.warn(username, password);
    let item = (username, password);
    let result = await fetch(" http://localhost:3003/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("JSON", JSON.stringify(result));
    history.push("/add");
  }

  return (
    <div>
      <div className="login">
        <div className="login-box">
          <h2 className="title">Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                name=""
                required=""
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="button-box">
              <Link to="/">
                <button onClick={Login} className="btn-submit ">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
