import React, {useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import axios from "axios";

const ListPost = () => {
  const [posts, setPosts] = useState([]);

  // useEffect( async () => {
  //   let res = await axios.get("http://localhost:3003/posts");
  //   setPosts(res.data.p_list);
  //   console.log(res.data);
  // },[])

  return (
    <>
      <Header />
      <PostList post={posts}/>
      <Footer />
    </>
  );
};

export default ListPost;
