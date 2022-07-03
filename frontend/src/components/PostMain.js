import React, { } from "react";
import { Link } from "react-router-dom";
import thumbnails from "../assets/images/20190227_1551259013_dam-lua-co-tru-tay-lung-hoa-tiet-hoa-van-1-247x296.jpg"
import "../assets/styles/detail-post.css"

const PostMain = () => {
  return (
    <div>
        <div className="post">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-post">
                        <h2 className="entry-title">Váy hoa nhí – cơn sốt mùa hè của mọi cô gái</h2>
                    </div>
                    <div className="main-post">
                        <p>Những chiếc váy in hoa với hàng trăm kiểu họa tiết, màu sắc hiện đang làm mưa làm gió không chỉ tại xứ sở Kim Chi mà còn trở thành hot trend mà mọi cô gái Việt Nam phải có sẵn trong tủ.</p>
                        <p>Vài năm trở lại đây, xu hướng váy xòe in họa tiết là item rất được ưa chuộng tại thị trường Hàn Quốc. Những chiếc váy phong cách vừa bánh bèo vừa tiểu thư này dường như phù hợp với mọi cô gái, từ những cô nàng tín đồ của phong cách vintage, cho đến những cô nàng muốn “nhảy” hình tượng từ sexy, quyến rũ sang kiểu trẻ trung hiện đại.</p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p>Vintage style là cách ăn mặc theo phong cách cổ điển, hoài cổ. Những năm gần đây, phong cách này rất được ưa chuộng, và dần phổ biến trong giới trẻ, chứ không riêng gì các tín đồ sành thời trang. Đặc biệt, các thiết kế in hoa như: áo sơ mi, chân váy, váy dài, yếm….đều rất được yêu thích.</p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p>Một góc của phong cách này chính là các mẫu váy hoa nhí. Đặc điểm chung của những chiếc váy hoạ tiết hoa nhí thường sử dụng nền màu pastel rất dịu nhẹ tạo cảm giác ”mát” hơn cho những hè, tiêu chí không quá nổi bật nhưng cũng không đơn điệu như những màu đơn sắc.</p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p>Màu sắc của item này vốn đa dạng và phong phú, nhưng nổi bật nhất vẫn là hai gam hot trend trắng ngà và vàng mù tạt. Những gam màu này thuộc tông sáng, áp dụng với những kiểu váy cổ điển thì sẽ giúp tôn lên nét dịu dàng, tiểu thư, càng khiến họa tiết hoa in trên vải “có hồn”.</p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p>Nếu như đầu năm 2019, item này tập trung chủ yếu vào họa tiết hoa nhí với màu sắc dễ chịu, đáng yêu, và thị hành trong mọi shop thời trang, thì đến năm 2020 là thời đại của những họa tiết bản to, cách điệu, và nhấn nhá màu sắc đậm hơn. Kiểu dáng cũng thay đổi nhiều. Trend váy hoa của mùa xuân hè 2019 vẫn bám sát vào phom dáng suông rộng thoải mái, dài tay hoặc 2 dây với chiều dài phổ biến nhất là dạng midi ngang bắp chân. Từ việc tập trung vào form suông hoặc baby doll thì năm nay, các dáng váy tầng, chân váy xòe, siết eo và dáng body được sử dụng nhiều hơn hẳn.</p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p>Lý do item này thịnh hành và được ưa chuộng, ngoài họa tiết hoa nhí giúp hack tuổi và mang lại vẻ nữ tính đáng yêu, kiểu váy này còn cực kỳ thoải mái, dễ diện và phối phụ kiện, cũng như không kén dáng người.</p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                        <p><img className="lazy-load-active" src={thumbnails} alt="thumbnail"/></p>
                    </div>
                    <div className="list-post">
                            <h3 className="more">Xem thêm</h3>
                            <ul className="more-post-list">
                                <li className="list-inline"><Link to="#">ĐIỆU ĐÀ VỚI VÁY ÁO XUYÊN THẤU CHẤT LIỆU ORGANZA</Link></li>
                                <li className="list-inline"><Link to="#">TƯNG BỪNG TAN DỊCH CÙNG NHAU LIÊN HOAN SALE LỄ 30-04</Link></li>
                                <li className="list-inline"><Link to="#">Váy hoa nhí – cơn sốt mùa hè của mọi cô gái</Link></li>
                                <li className="list-inline"><Link to="#">10 Set quần áo nâng tầm thời trang mặc nhà</Link></li>
                                <li className="list-inline"><Link to="#">Tiệc hè sang trọng – Dành cho quý cô thành đạt</Link></li>
                            </ul>
                    </div>
                    <div className="share-social">
                        <ul className="share-social-list">
                                <li className="share-social-item"><Link to=""><i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </Link></li>
                                <li className="share-social-item"><Link to=""><i className="fa fa-twitter-square" aria-hidden="true"></i>
                                </Link></li>
                                <li className="share-social-item"><Link to=""><i className="fa fa-envelope" aria-hidden="true"></i>
                                </Link></li>
                                <li className="share-social-item"><Link to=""><i className="fa fa-pinterest-square" aria-hidden="true"></i>
                                </Link></li>
                                <li className="share-social-item"><Link to=""><i className="fa fa-pinterest-square" aria-hidden="true"></i>
                                </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default PostMain;