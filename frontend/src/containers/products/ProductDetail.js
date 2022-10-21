import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductMain from "../../components/ProductMain";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProduct(productRes.data.list);
      console.log("product respon", productRes.data);
      setCategoryProducts(productRes.data.category_list);
      let postRes = await axios.get("http://localhost:3003/posts");
      setCategoryPost(postRes.data.category_list);

      const detailProduct = productRes.data.list.find(prod => prod.prod_id == params.productId )
      console.log("detailProduct" , detailProduct);
      setProduct(detailProduct);
    };
    if(params.productId){
      getProducts();
    }
  }, [params.productId]);

  console.log("category_list", categoryProducts);
  console.log("categoryPosts", categoryPosts);
  
  return (
    <>
      <Header category_list={categoryProducts} categoryPosts={categoryPosts}/>
      <ProductMain product={product}/>
      <Footer />
    </>
  );
};

export default ProductDetail;
