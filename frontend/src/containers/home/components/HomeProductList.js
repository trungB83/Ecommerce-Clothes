import { Button, Radio, Col } from "antd";
import React, { useEffect, useState, Pagination } from "react";
import { Link } from "react-router-dom";
import { addCartItem, getTotals } from "store/cart/reducers";
import imgHeart from "assets/images/icon/heart.png";
import imgSearch from "assets/images/icon/search.png";
import imgCart from "assets/images/icon/cart.png"
import imgProductDefault from "assets/images/product/product-2.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'store/products/actions';

const HomeProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const productState = useSelector((state) => state.products);
  const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, page]);
  const productData = productState.list.result.data


  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const addToCart = (item) => {
    dispatch(addCartItem(item));
  };

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const PAGE_SIZE = 16

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
              {productState.loading && <div>Loadding...</div>}
              {!productState.loading && productState.error ? <div>Error: {productState.error}</div> : null}
              {!productState.loading && productState.list.result?.data ? (
                productData.slice(0, 16).map((product, index) => (
                  <Col lg={6} md={12} sm={12} xs={12} key={index}>
                    <div className="product__item">
                      <div className="product__item__pic">
                        <Link to={`/product-detail/${product.product_id}`}>
                          <img src={product.image ? product.image : imgProductDefault} alt="thumbnail-product" />
                        </Link>
                        <ul className="product__hover">
                          <li>
                            <Link to="#">
                              <img src={imgHeart} alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link to={`/product-detail/${product.product_id}`}>
                              <img src={imgSearch} alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={() => addToCart(product)}>
                              <img src={imgCart} alt="" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>
                          <Link to={`/product-detail/${product.product_id}`}>
                            {product.name}
                          </Link></h6>
                        <h5>{VND.format(product.sale_price ? product.sale_price : product.price)}<span>{VND.format(product.price ? product.price : '')}</span></h5>
                      </div>
                    </div>
                  </Col>

                ))) : "Đang tải ...."}
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__pagination">
                    {/* <Pagination
                      defaultCurrent={1}
                      defaultPageSize={PAGE_SIZE}
                      onChange={page => setPage(page)}
                      current={page}
                      total={productData?.length}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductList;
