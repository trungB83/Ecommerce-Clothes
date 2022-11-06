import { Pagination } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../store/Context";
import { addCartProduct } from "./../store/Action";
const productsPerPage = 4;

const HomeProductList = (props) => {
  console.log("props", props);
  const [number, setNumber] = useState(1);
  const [state, dispatch] = useContext(Context);

  //   handle Pagination
  const handlePage = (pageNumber) => setNumber(pageNumber);
  let newData = props.products.slice(
    (number - 1) * productsPerPage,
    productsPerPage * number
  );
  console.log("newData", newData);

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
      <div className="product-list">
        <div className="container">
          <div className="wrap-cate-title">
            <div className="row">
              <div className="col-lg-6">
                <div className="wrapper-title-categories">
                  Bộ sưu tập nổi bật
                </div>
              </div>
              <div className="col-lg-6">
                <div className="menu-categories">
                  <ul className="list-menu-categories">
                    <li className="nav-link-category">
                      <Link to="#">Váy đầm công sở</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Giày</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Quần</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Set bộ</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Set jean áo phông</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-list-products">
            <h4 className="title-list-products">Sản phẩm mới nhất</h4>
            <div className="row">
              {newData.map((product, index) => (
                <div
                  className="col-lg-2 col-md-4 col-sm-6 col-xs-6 "
                  key={index}
                >
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
            <div className="pagination">
              <Pagination
                defaultCurrent={number}
                pageSize={productsPerPage}
                total={props.products.length}
                onChange={handlePage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductList;
