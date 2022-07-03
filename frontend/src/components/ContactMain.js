import React from "react";
import "../assets/styles/contact.css";

const Footer = () => {
  return (
    <>
      <div className="wrapper-contact">
        <div className="group-contact">
          <div className="contact-box">
            <form className="form">
              <h2 className="title">Contact Us</h2>
              <div className="input-box">
                <input type="text" placeholder="Họ và Tên..."></input>
              </div>
              <div className="input-box">
                <input
                  type="Email"
                  className="form-input"
                  placeholder="Email.."
                ></input>
              </div>
              <div className="input-box">
                <textarea
                  className="area-input"
                  placeholder="Nội dung..."
                ></textarea>
              </div>
              <div className="button-box">
                <button className="btn-submit">Gửi tin </button>
              </div>
            </form>
          </div>
          <div className="contact-box2">
            <ul className="list-address">
              <li className="address">
                Số 337 Phố Huế - Quận Hai Bà Trưng - TP. Hà Nội (Việt Nam)
              </li>
              <li className="phone">
                <i>☏</i> Hotline
                <b>
                  <i> (024)</i> 625 33 337
                </b>
                - Di động<b> 0946.296.234</b>
              </li>
              <li className="address">
                Số 38 Trần Thái Tông - Quận Cầu Giấy - TP. Hà Nội (Việt Nam)
              </li>
              <li className="phone">
                <i>☏</i> Hotline
                <b>
                  <i> (024)</i> 234 83838
                </b>{" "}
                - Di động<b> 0976.55.66.33</b>
              </li>
              <li className="address">
                Số 38 Trần Thái Tông - Quận Cầu Giấy - TP. Hà Nội (Việt Nam)
              </li>
              <li className="phone">
                <i>☏</i> Hotline
                <b>
                  <i> (024)</i> 234 83838
                </b>{" "}
                - Di động<b> 0976.55.66.33</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
