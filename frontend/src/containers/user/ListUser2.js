import React, { useEffect, useState } from "react";
import imgProduct from "../../assets/images/20200805_1596564496_dam-suong-co-tron-2099-valentino-1-247x296.png";
import axios from "axios";
import api from '../../api/products';
const ListUser2 = () => {
  const [products, setProduct] = useState([]);
  // useEffect(() =>{
  //   //goi api 
  //   getAllProduct()
  // },[])
  async function getAllProduct() {
    try {
      const product = await api.get('product-detail');
      console.log(product.data);
      setProduct(products.data);
    }
    catch (err) {
      console.log("Error products");
    }
  }
  const elementListProduct = products.map((product,index) =>{
    
  })


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
                      <a href="#">Trang Chủ</a>
                    </li>
                    /
                    <li className="nav-item">
                      <a href="#">Áo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-5 wrapper-head-right">
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
            <div className="row main-products">
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                <div className="product-small">
                  <div className="box-image">
                    <a href="">
                      <img className="thumbnail" src={imgProduct} alt="thumbnail" />
                    </a>
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">
                      <a href="#">Đầm suông cổ tròn “2099 Valentino”</a>
                    </h5>
                    <p className="price-product">880.000đ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                <div className="product-small">
                  <div className="box-image">
                    <a href="">
                      <img className="thumbnail" src={imgProduct} alt="thumbnail" />
                    </a>
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">
                      <a href="#">Đầm suông cổ tròn “2099 Valentino”</a>
                    </h5>
                    <p className="price-product">880.000đ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                <div className="product-small">
                  <div className="box-image">
                    <a href="">
                      <img className="thumbnail" src={imgProduct} alt="thumbnail" />
                    </a>
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">
                      <a href="#">Đầm suông cổ tròn “2099 Valentino”</a>
                    </h5>
                    <p className="price-product">880.000đ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                <div className="product-small">
                  <div className="box-image">
                    <a href="">
                      <img className="thumbnail" src={imgProduct} alt="thumbnail" />
                    </a>
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">
                      <a href="#">Đầm suông cổ tròn “2099 Valentino”</a>
                    </h5>
                    <p className="price-product">880.000đ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                <div className="product-small">
                  <div className="box-image">
                    <a href="">
                      <img className="thumbnail" src={imgProduct} alt="thumbnail" />
                    </a>
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">
                      <a href="#">Đầm suông cổ tròn “2099 Valentino”</a>
                    </h5>
                    <p className="price-product">880.000đ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                <div className="product-small">
                  <div className="box-image">
                    <a href="">
                      <img className="thumbnail" src={imgProduct} alt="thumbnail" />
                    </a>
                  </div>
                  <div className="box-text">
                    <h5 className="title-product">
                      <a href="#">Đầm suông cổ tròn “2099 Valentino”</a>
                    </h5>
                    <p className="price-product">880.000đ</p>
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


export default ListUser2;
