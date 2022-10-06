import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductMain from "../../components/ProductMain";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProduct(productRes.data.list);
      console.log("product respon", productRes.data);
      const detailProduct = productRes.data.list.find(prod => prod.prod_id === params.productId )
      console.log("123" , detailProduct);
      setProduct(detailProduct);
    };
    if(params.productId){
      getProducts();
    }
  }, [params.productId]);
  return (
    <>
      <Header />
      <ProductMain product={product}/>
      <Footer />
    </>
  );
};

export default ProductDetail;
