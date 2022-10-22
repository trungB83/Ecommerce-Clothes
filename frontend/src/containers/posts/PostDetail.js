import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostMain from "../../components/PostMain";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  useEffect(() => {
    const getPosts = async () => {
      let postRes = await axios.get("http://localhost:3003/posts");
      setPost(postRes.data.list);
      const detailPost = postRes.data.list.find(
        (prod) => prod.post_id == params.postId
      );
      setPost(detailPost);
    };
    if (params.postId) {
      getPosts();
    }
  }, [params.postId]);

  return (
    <div>
      <Header />
      <PostMain post={post} />
      <Footer />
    </div>
  );
};

export default PostDetail;
