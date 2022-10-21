import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const params = useParams();
  
  useEffect(() => {
    const getPosts = async () => {
      let postRes = await axios.get("http://localhost:3003/posts");
      console.log("postRes", postRes);
      const currentPosts = postRes.data.list.filter(item => item.post_category_id == params.postCategoryId);
      console.log("currentPosts", currentPosts);
      setPosts(currentPosts);
      const currentCate = postRes.data.category_list.find(item => item.post_category_id == params.postCategoryId);
      setCurrentCategory(currentCate);
      console.log("currentCategory", currentCategory);
    };
    if (params.postCategoryId) {
      getPosts()
    }
  }, [params]);

  return (
    <>
      <Header/>
      <PostList posts={posts}/>
      <Footer />
    </>
  );
};

export default ListPost;
