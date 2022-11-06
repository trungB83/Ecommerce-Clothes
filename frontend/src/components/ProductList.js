import React, { useContext } from "react";
import "../assets/styles/list-product.css";
import { Link } from "react-router-dom";
import Context from "../store/Context";
import { addCartProduct } from "./../store/Action";

const ProductList = (props) => {
  const [state, dispatch] = useContext(Context);
  console.log("state", state);
  const handleAddProduct = (item) => {
    console.log("item", item);
    const productInfo = { ...item };
    productInfo.count += 1;
    console.log("productInfo", productInfo);
    dispatch(addCartProduct(productInfo));
  };

  return (
    <>
      <div className="list-product-main">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="wrapper-head-left">
                <h1 className="title-page">
                  {props.currentCategory.product_category_name}
                </h1>
                <div className="navigation">
                  <ul className="nav-main">
                    <li className="nav-item">
                      <Link to="#">Trang Chủ</Link>
                    </li>
                    /
                    <li className="nav-item">
                      <Link to="#">
                        {props.currentCategory.product_category_name}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-5 wrapper-head-right">
              <div className="wrapper-head-right">
                <div className="show-number-item">
                  <p>Hiển thị tất cả {props.products.length} kết quả</p>
                </div>
                <form method="get" className="form-sort">
                  <select className="sort">
                    <option value="normal" defaultValue="selected">
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
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6" key={index}>
                <Link
                  to={`/product-detail/${product.prod_id}`}
                  className="product-small"
                >
                  <div className="box-image">
                    <img
                      className="thumbnail"
                      src={product.prod_thumbnail}
                      alt="thumbnail"
                    />
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">{product.prod_name}</h5>
                    <p className="price-product">
                      {product.prod_price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                </Link>
                <button
                className="AddToCart"
                  type="primary"
                  onClick={() => handleAddProduct(product)}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
