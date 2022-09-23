import React, { useState , useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactMain from "../../components/ContactMain";
import axios from "axios";


const Login = () => {

const [categoryProducts, setCategoryProducts] = useState([]);
const [categoryPosts, setCategoryPost] = useState([]);


useEffect(() => {
  const getNav = async () => {
    let postRes = await axios.get("http://localhost:3003/posts");
    setCategoryPost(postRes.data.category_list);
    let productRes = await axios.get("http://localhost:3003/products");
    setCategoryProducts(productRes.data.category_list);
  };
    getNav()
}, []);


  return (
    <div>
      <Header category_list={categoryProducts} categoryPosts={categoryPosts}/>
      <ContactMain />
      <Footer />
    </div>
  );
};

export default Login;
