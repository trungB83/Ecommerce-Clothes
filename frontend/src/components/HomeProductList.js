import React from "react";

const HomeProductList = (props) => {
  console.log(props);

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
                      <a href="#">Váy đầm công sở</a>
                    </li>
                    <li className="nav-link-category">
                      <a href="#">Giày</a>
                    </li>
                    <li className="nav-link-category">
                      <a href="#">Quần</a>
                    </li>
                    <li className="nav-link-category">
                      <a href="#">Set bộ</a>
                    </li>
                    <li className="nav-link-category">
                      <a href="#">Set jean áo phông</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-list-products">
            <h4 className="title-list-products">Sản phẩm mới nhất</h4>
            <div className="row">
              {props.products.map((product, index) => (
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 " key={product.prod_id}>
                  <div className="product-small">
                    <div className="box-image">
                      <a href="">
                        <img
                          className="thumbnail"
                          src={product.prod_thumbnail}
                          alt="thumbnail"
                        />
                      </a>
                    </div>
                    <div className="box-text">
                      <h5 className="title-product">
                        <a href="#">{product.prod_name}</a>
                      </h5>
                      <p className="price-product">{product.prod_price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductList;
