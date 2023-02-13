import React from "react";
import "assets/styles/contact.scss";

const Footer = () => {
  return (
    <>
      <div className="map">
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.988211049866!2d105.8369637!3d21.022739599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1672764738099!5m2!1svi!2s"
          width="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-text-field">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__text">
                <div className="section-title">
                  <h2>Liên hệ với chúng tôi</h2>
                </div>
                <ul>
                  <li>
                    <h4>MUA HÀNG TẠI HÀ NỘI</h4>
                    <p>
                      Số 337 Phố Huế - Quận Hai Bà Trưng - TP. Hà Nội (Việt Nam)
                      <br />
                      0946.296.234
                    </p>
                    <p>
                      Số 38 Trần Thái Tông - Quận Cầu Giấy - TP. Hà Nội (Việt
                      Nam)
                      <br />
                      0976.55.66.33
                    </p>
                  </li>
                  <li>
                    <h4>MUA HÀNG TẠI TP.HCM</h4>
                    <p>
                      Số 41 Lê Văn Sĩ - Phường 13 - Quận Phú Nhuận - TP. HCM
                      (Việt Nam) <br />
                      0912.01.9996
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Tên" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Nội dung"></textarea>
                      <button type="submit" className="site-btn">
                        Gửi
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
