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
      const currentPosts = postRes.data.list.filter(item => item.post_category_id == params.postCategoryId);
      setPosts(currentPosts);
      const currentCate = postRes.data.category_list.find(item => item.post_category_id == params.postCategoryId);
      setCurrentCategory(currentCate);
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
