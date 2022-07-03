import React, { } from "react";
import { Link } from "react-router-dom";
import logoFooter from "../assets/images/02_logo.png";
import "../assets/styles/style.css";



const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="wrapper-logo-footer">
                  <Link to="">
                    <img src={logoFooter} alt="logo_img" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-content">
                  <h4 className="tittle-footer">
                    CÔNG TY CỔ PHẦN THỜI TRANG LIBERTY
                  </h4>
                  <p>Trụ sở chính: 307 Đê La Thành - Đống Đa - Hà Nội</p>
                  <p>VPGD: 258 Phố Huế - Hai Bà Trưng - Hà Nội</p>
                  <p>Hotline: 024.66.811.666 </p>
                  <p>Liên hệ mở đại lý: 024.66.811.666</p>
                  <p>MST: 0107825324. Ngày cấp 28/4/2017</p>
                  <p>Đăng ký tại sở kế hoạch và đầu tư thành phố Hà Nội</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-content">
                  <h4 className="title-footer">
                    CÔNG TY CỔ PHẦN THỜI TRANG LIBERTY
                  </h4>
                  <p>Trụ sở chính: 307 Đê La Thành - Đống Đa - Hà Nội</p>
                  <p>VPGD: 258 Phố Huế - Hai Bà Trưng - Hà Nội</p>
                  <p>Hotline: 024.66.811.666 </p>
                  <p>Liên hệ mở đại lý: 024.66.811.666</p>
                  <p>MST: 0107825324. Ngày cấp 28/4/2017</p>
                  <p>Đăng ký tại sở kế hoạch và đầu tư thành phố Hà Nội</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-link">
                  <div className="social">
                    <h3 className="title-footer">SOCIAL PAGE</h3>
                    <ul>
                      <li>
                        <Link to="#">
                          <i
                            className="fa fa-facebook-official"
                            aria-hidden="true"
                          ></i>
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i
                            className="fa fa-twitter-square"
                            aria-hidden="true"
                          ></i>
                          Twiter
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                          Youtobe
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i
                            className="fa fa-google-plus-square"
                            aria-hidden="true"
                          ></i>
                          Google+
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="support">
                    <h3 className="title-footer">Hỗ trợ thanh toán</h3>
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-cc-visa" aria-hidden="true"></i>
                          Visa
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-money" aria-hidden="true"></i>Tiền
                          mặt
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-exchange" aria-hidden="true"></i>
                          Chuyển khoản
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa fa-credit-card-alt"
                            aria-hidden="true"
                          ></i>
                          Atm
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nocoppyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-bottom-footer">
                  <h4>MEGAFASHION - THE WORLD OF FASHION</h4>
                  <p>Copyrigh 2015 megafashion.vn All Right Reserved</p>
                  <p>Trụ sở: Số 337 Phố Huế - Quận Hai Bà Trưng - TP. Hà Nội</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
