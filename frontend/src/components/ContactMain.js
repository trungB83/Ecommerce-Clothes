import React, { } from "react";


const Footer = () => {
  return (
    <div>
         <div className="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="kf_add" style="color: #222;">
                        <h3>MUA HÀNG TẠI HÀ NỘI</h3>
                        <li className="add_kf">
                            Số 337 Phố Huế - Quận Hai Bà Trưng - TP. Hà Nội (Việt Nam)
                        </li>
                        <li className="hotline_kf">
                            <i style="font-style: normal;font-size: 22px;float: left;margin-top: 0px;margin-right: 5px;">☏</i> Hotline<b>
                            <i style="font-size: 15px;font-style: normal;"> (024)</i> 625 33 337</b>- Di động<b> 0946.296.234</b>
                        </li>
                        <li className="add_kf">
                            Số 38 Trần Thái Tông - Quận Cầu Giấy - TP. Hà Nội (Việt Nam)
                        </li>
                        <li className="hotline_kf">
                            <i style="font-style: normal;font-size: 22px;float: left;margin-top: 0px;margin-right: 5px;">☏</i> Hotline<b>
                            <i style="font-size: 15px;font-style: normal;"> (024)</i> 234 83838</b> - Di động<b> 0976.55.66.33</b></li>
                        <h3 style="margin-top: 20px;">MUA HÀNG TẠI TP.HCM</h3>
                        <li className="add_kf">Số 41 Lê Văn Sĩ - Phường 13 - Quận Phú Nhuận -  TP. HCM (Việt Nam)</li>
                        <li className="hotline_kf"><i style="font-style: normal;font-size: 22px;float: left;margin-top: 0px;margin-right: 5px;">☏</i> Hotline<b>
                        <i style="font-size: 15px;font-style: normal;"> (028)</i> 2253 68 48</b> - Di động<b> 0912.01.9996</b>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <div className="wrapper-contact">
                        <form method="POST" className="contactForm">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-form">
                                        <H2>LIÊN HỆ VỚI CHÚNG TÔI</H2>
                                    </div>
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label for="name" className="label">Họ và Tên</label>
                                    <input type="text" className="form-control" name="name"  id="name"/>
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label for="email" className="label">E-mail</label>
                                    <input type="text" className="form-control" name="email"  id="email"/>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="message" className="label">Nội dung</label>
                                    <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <input type="submit" value="Gửi thư" className="btn-primary"/>
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

export default Footer;
