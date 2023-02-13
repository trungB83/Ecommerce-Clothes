import React, { useEffect, useState } from "react";
import "assets/styles/list-product.scss";
import { Link } from "react-router-dom";
import { addCartItem, getTotals } from "store/cart/reducers";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Col, Pagination, Row } from "antd";
import imgHeart from "assets/images/icon/heart.png";
import imgSearch from "assets/images/icon/search.png";
import imgCart from "assets/images/icon/cart.png"
import imgProductDefault from "assets/images/product/product-2.jpg";
import Header from "components/Header";
import Footer from "components/Footer";
import { fetchProducts } from 'store/products/actions';
import { fetchProductCates } from 'store/product-cates/actions';

const PAGE_SIZE = 16

const ListProduct = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const productState = useSelector((state) => state.products);
  const productCateState = useSelector((state) => state.product_cates)
  const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductCates());
  }, [dispatch, page]);
  const productData = productState.list.result.data
  const productCateData = productCateState.list.result.data

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);


  // cart functions
  const addToCart = (item) => {
    dispatch(addCartItem(item));
  };
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const handleCategory = (e) => {
    const dataFiltered = productData.filter(item => item.product_cate_id === e.target.value)
    console.log(`radio checked:${e.target.value}`);
  };
  const handleSize = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const handleColor = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
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
      <section className="shop spad">
        <div className="container">
          {productState.loading && <div>Loadding...</div>}
          {!productState.loading && productState.error ? <div>Error: {productState.error}</div> : null}
          {!productState.loading && productState.list.result.data ? (
            <div className="row">
              {/* <div className="col-lg-3">
              <div className="shop__sidebar">
                <div className="shop__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><span className="icon_search"></span></button>
                  </form>
                </div>
                <div className="shop__sidebar__accordion">
                  {productCateState.loading && <div>Loadding...</div>}
                  {!productCateState.loading && productCateState.error ? <div>Error: {productCateState.error}</div> : null}
                  {!productCateState.loading && productCateState.list.result.data ? (
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-heading">
                          <a >Danh mục</a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__categories">
                              <Radio.Group onChange={handleCategory}>
                                {productCateData.map((item) => (
                                  <Radio.Button value={item.product_cate_id}>{item.name}</Radio.Button>
                                ))}
                              </Radio.Group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <a data-toggle="collapse" data-target="#collapseThree">Khoảng giá</a>
                        </div>
                        <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__price">
                              <ul>
                                <li><Link to="#">$0.00 - $50.00</Link></li>
                                <li><Link to="#">$50.00 - $100.00</Link></li>
                                <li><Link to="#">$100.00 - $150.00</Link></li>
                                <li><Link to="#">$150.00 - $200.00</Link></li>
                                <li><Link to="#">$200.00 - $250.00</Link></li>
                                <li><Link to="#">250.00+</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <a data-toggle="collapse" data-target="#collapseFour">Kích cỡ</a>
                        </div>
                        <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__size">
                              <Radio.Group onChange={handleSize}>
                                <Radio.Button value="xs">xs</Radio.Button>
                                <Radio.Button value="sm">sm</Radio.Button>
                                <Radio.Button value="md">md</Radio.Button>
                                <Radio.Button value="xl">xl</Radio.Button>
                                <Radio.Button value="2xl">2xl</Radio.Button>
                                <Radio.Button value="3xl">3xl</Radio.Button>
                                <Radio.Button value="4xl">4xl</Radio.Button>
                              </Radio.Group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <a data-toggle="collapse" data-target="#collapseFive">Màu sắc</a>
                        </div>
                        <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__color">
                              <Radio.Group onChange={handleColor}>
                                <Radio.Button value="c-1" className="c-1"></Radio.Button>
                                <Radio.Button value="c-2" className="c-2"></Radio.Button>
                                <Radio.Button value="c-3" className="c-3"></Radio.Button>
                                <Radio.Button value="c-4" className="c-4"></Radio.Button>
                                <Radio.Button value="c-5" className="c-5"></Radio.Button>
                                <Radio.Button value="c-6" className="c-6"></Radio.Button>
                                <Radio.Button value="c-7" className="c-7"></Radio.Button>
                                <Radio.Button value="c-8" className="c-8"></Radio.Button>
                                <Radio.Button value=" c-9" className="c-9"></Radio.Button>
                              </Radio.Group>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                </div>
              </div>
            </div> */}
              {/* <div className="col-lg-9"> */}
              <div className="col-lg-12">
                <div className="shop__product__option">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__left">
                        <p> Hiển thị {PAGE_SIZE} sản phẩm trên {productData?.length}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__right">
                        <p>Sắp xếp theo giá:</p>
                        <select>
                          <option value="">Giá: Giảm dần</option>
                          <option value="">Giá: Tắng dần</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <Row gutter={16}>
                  {productData.map((product, index) => (
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
                  ))}
                </Row>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="product__pagination">
                      <Pagination
                        defaultCurrent={1}
                        defaultPageSize={PAGE_SIZE}
                        onChange={page => setPage(page)}
                        current={page}
                        total={productData?.length}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          ) : "Đang tải ...."}
        </div>

      </section>
      <Footer />
    </>
  );
};

export default ListProduct;
