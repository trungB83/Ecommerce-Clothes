import React, {useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import axios from "axios";

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getPosts = async () => {
      let postRes = await axios.get("http://localhost:3003/posts");
      setPosts(postRes.data.list);
      console.log("post respose", postRes.data);
    };
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <PostList posts={posts}/>
      <Footer />
    </>
  );
};

export default ListPost;
