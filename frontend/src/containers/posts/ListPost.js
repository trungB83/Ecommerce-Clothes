import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [categoryProducts, setCategoryProducts] = useState([]);
  const params = useParams();
  
  useEffect(() => {
    const getPosts = async () => {
      let postRes = await axios.get("http://localhost:3003/posts");
      const currentPosts = postRes.data.list.filter(item => item.post_category_id == params.postCategoryId);
      console.log("22", postRes.data.list.filter(item => item.post_category_id == params.postCategoryId));
      setPosts(currentPosts);
      setCategoryPost(postRes.data.category_list);
      const currentCate = postRes.data.category_list.find(item => item.post_category_id == params.postCategoryId);
      setCurrentCategory(currentCate);
      let productRes = await axios.get("http://localhost:3003/products");
      setCategoryProducts(productRes.data.category_list);
    };
    if (params.postCategoryId) {
      getPosts()
    }
  }, [params]);

  return (
    <>
      <Header category_list={categoryProducts} categoryPosts={categoryPosts}/>
      <PostList posts={posts}/>
      <Footer />
    </>
  );
};

export default ListPost;
