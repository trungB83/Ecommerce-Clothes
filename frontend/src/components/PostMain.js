import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/detail-post.css";

const PostMain = (props) => {
  console.log(props);
  return (
    <div>
      <div className="post">
        <div className="container">
          <div className="row" key={props.post.post_id}>
            <div className="col-lg-12">
              <div className="title-post">
                <h2 className="entry-title">{props.post.post_name}</h2>
              </div>
              <div className="main-post">
                <p>{props.post.post_content}</p>
                <div className="imgWrapper"><img
                  className="img-thumbnail"
                  src={props.post.post_thumbnail}
                  alt="img-thumbnail"
                /></div>
                
              </div>
              <div className="list-post">
                <h3 className="more">Xem thêm</h3>
                <ul className="more-post-list">
                  <li className="list-inline">
                    <Link to="#">
                      ĐIỆU ĐÀ VỚI VÁY ÁO XUYÊN THẤU CHẤT LIỆU ORGANZA
                    </Link>
                  </li>
                  <li className="list-inline">
                    <Link to="#">
                      TƯNG BỪNG TAN DỊCH CÙNG NHAU LIÊN HOAN SALE LỄ 30-04
                    </Link>
                  </li>
                  <li className="list-inline">
                    <Link to="#">
                      Váy hoa nhí – cơn sốt mùa hè của mọi cô gái
                    </Link>
                  </li>
                  <li className="list-inline">
                    <Link to="#">
                      10 Set quần áo nâng tầm thời trang mặc nhà
                    </Link>
                  </li>
                  <li className="list-inline">
                    <Link to="#">
                      Tiệc hè sang trọng – Dành cho quý cô thành đạt
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="share-social">
                <ul className="share-social-list">
                  <li className="share-social-item">
                    <Link to="">
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li className="share-social-item">
                    <Link to="">
                      <i
                        className="fa fa-twitter-square"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li className="share-social-item">
                    <Link to="">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="share-social-item">
                    <Link to="">
                      <i
                        className="fa fa-pinterest-square"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li className="share-social-item">
                    <Link to="">
                      <i
                        className="fa fa-pinterest-square"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
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
