import React from "react";
import "../assets/styles/list-product.css";
import { Link } from "react-router-dom";

const PostList = (props) => {
  console.log(props);
  return (
    <>
      <div className="list-product-main">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="wrapper-head-left">
                <h1 className="title-page">Áo</h1>
                <div className="navigation">
                  <ul className="nav-main">
                    <li className="nav-item">
                      <Link to="#">Trang Chủ</Link>
                    </li>
                    /
                    <li className="nav-item">
                      <Link to="#">Áo</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-5 wrapper-head-right">
              <div className="wrapper-head-right">
                <div className="show-number-item">
                  <p>Hiển thị tất cả 11 kết quả</p>
                </div>
                <form method="get" className="form-sort">
                  <select className="sort">
                    <option value="normal" selected="selected">
                      Thứ tự mặc định
                    </option>
                    <option value="popularity">
                      Thứ tự theo mức độ phổ biến
                    </option>
                    <option value="rating">Thứ tự theo điểm đánh giá</option>
                    <option value="date">Thứ tự theo mức mới nhất</option>
                    <option value="price">Thứ tự theo giá: thấp đến cao</option>
                    <option value="price-desc">
                      Thứ tự theo giá: cao đến thấp
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row main-products">
            {props.products.map((product, index) => (
              <div
                className="col-lg-2 col-md-4 col-sm-6 col-xs-6"
                key={product.prod_id}
              >
                <div className="product-small">
                  <div className="box-image">
                    <Link to="">
                      <img
                        className="thumbnail"
                        src={product.prod_thumbnail}
                        alt="thumbnail"
                      />
                    </Link>
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">
                      <Link to="#">{product.prod_name}</Link>
                    </h5>
                    <p className="price-product">{product.prod_price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
