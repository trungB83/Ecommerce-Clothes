import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailProduct, fetchProducts } from 'store/products/actions';
import { addCartItem } from 'store/cart/reducers';
import imgProductDefault from "assets/images/product/product-2.jpg";
import iconHotline from "assets/images/dt.jpg"
import { Link } from "react-router-dom";
import "assets/styles/detail-product.scss";
import { Breadcrumb, Button, Tabs, Radio } from "antd";
import imgHeart from "assets/images/icon/heart.png";
import imgSearch from "assets/images/icon/search.png";
import parse from 'html-react-parser';
import { getTotals } from 'store/cart/reducers';


const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  const productState = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(fetchProducts());
    if (params.id) {
      dispatch(fetchDetailProduct(params.id));
    }
  }, [params.id]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const productById = productState.item.result?.data
  const productData = productState.list.result?.data

  const onChange = (key) => {
    console.log(key);
  };

  const addToCart = (item) => {
    dispatch(addCartItem(item));
  };

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const handleSize = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const handleColor = (e) => {
    console.log(`color checked:${e.target.value}`);
  }
  return (

    <>
      <Header />
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Cửa hàng</h4>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to="/">Trang chủ</Link></Breadcrumb.Item>
                  <Breadcrumb.Item>
                    Cửa hàng
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-details">
        <div className="container">
          {productState.loading && <div>Loadding...</div>}
          {!productState.loading && productState.error ? <div>Error: {productState.error}</div> : null}
          {!productState.loading && productState.item.result.data ? (
            <div className="row">
              <div className="col-lg-5"><div className="product__details__pic">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="product__side__pic__item">
                        <img src={productById.image ? productById.image : imgProductDefault} alt="" />
                      </div>,
                    </div>
                  </div>
                </div>
              </div></div>
              <div className="col-lg-7"><div className="product__details__content">
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                      <div className="product__details__text">

                        <h4>{productById.name}</h4>

                        <h3>{VND.format(productById.sale_price ? productById.sale_price : productById.price)}<span>{productById.sale ? VND.format(productById.price) : ''}</span></h3>
                        {/* <div className="product__details__option">
                          <div className="product__details__option__size">
                            <span>Size:</span>
                            <Radio.Group onChange={handleSize} defaultValue="xxl">
                              <Radio.Button value="xxl">xxl</Radio.Button>
                              <Radio.Button value="xl">xl</Radio.Button>
                              <Radio.Button value="l">l</Radio.Button>
                              <Radio.Button value="sm">sm</Radio.Button>
                            </Radio.Group>
                          </div>
                          <div className="product__details__option__color">
                            <span>Màu sắc:</span>
                            <Radio.Group onChange={handleColor} defaultValue="sp-1">
                              <Radio.Button value="sp-1" className="c-1"></Radio.Button>
                              <Radio.Button value="sp-2" className="c-2"></Radio.Button>
                              <Radio.Button value="sp-3" className="c-3"></Radio.Button>
                              <Radio.Button value="sp-4" className="c-4"></Radio.Button>
                              <Radio.Button value="c-9" className="sp-9"></Radio.Button>
                            </Radio.Group>
                          </div>
                        </div> */}
                        <div className="product__details__cart__option">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </div>
                          <Button onClick={() => addToCart(productById)} className="primary-btn">Thêm vào giỏ hàng</Button>
                        </div>

                        <div className="product__details__last__option">

                          <ul>
                            <li><span>Mã sản phẩm:</span> {productById.sku}</li>
                          </ul>
                          <>
                            <ul className="product-info-feature">
                              <li>
                                <div className="icon"><img src="https://routine.vn/static/version1675007169/frontend/Magenest/routine/vi_VN/images/ghn.png" alt="" /></div>
                                <div className="text"><strong>Giao hàng nhanh</strong>
                                  <p>Từ 2 - 5 ngày</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon"><img src="https://routine.vn/static/version1675007169/frontend/Magenest/routine/vi_VN/images/free.png" alt="" /></div>
                                <div className="text"><strong>Miễn phí vận chuyển</strong>
                                  <p>Đơn hàng từ 199k</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon"><img src="https://routine.vn/static/version1675007169/frontend/Magenest/routine/vi_VN/images/order.png" alt="" /></div>
                                <div className="text"><strong>Theo dõi đơn hàng <br></br>một cách dễ dàng</strong></div>
                              </li>
                              <li>
                                <div className="icon"><img src="https://routine.vn/static/version1675007169/frontend/Magenest/routine/vi_VN/images/returns.png" alt="" /></div>
                                <div className="text"><strong>Đổi trả tận nơi <br></br>nhanh chóng</strong></div>
                              </li>
                              <li>
                                <div className="icon"><img src="https://routine.vn/static/version1675007169/frontend/Magenest/routine/vi_VN/images/pay.png" alt="" /></div>
                                <div className="text"><strong>Thanh toán dễ dàng <br></br>nhiều hình thức</strong></div>
                              </li>
                              <li>
                                <div className="icon"><img src="https://routine.vn/static/version1675007169/frontend/Magenest/routine/vi_VN/images/hotline.png" alt="" /></div>
                                <div className="text"><strong>Hotline hỗ trợ</strong>
                                  <h3>09 999 999</h3>
                                </div>
                              </li>
                            </ul>
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="product__details__tab">
                      <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        items={[
                          {
                            className: "nav-item",
                            label: `Mô tả`,
                            key: '1',
                            children: parse(productById.description)
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : ""}
        </div>
      </section>
      <section className="related spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="related-title">Các sản phẩm liên quan</h3>
            </div>
          </div>
          <div className="row">
            {productState.loading && <div>Loadding...</div>}
            {!productState.loading && productState.error ? <div>Error: {productState.error}</div> : null}
            {!productState.loading && productState.list.result.data ? (
              productData.filter((item) => item?.product_cate_id === productById?.product_cate_id).slice(0, 4).map((product, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6" key={index}>
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
                          <Link to="#">
                            <img src={imgSearch} alt="" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>{product.name}</h6>
                      <h5>{product.price}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : "Đang tải ...."}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProductDetail;
