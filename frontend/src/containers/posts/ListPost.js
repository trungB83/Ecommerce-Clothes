import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "assets/styles/post-list.scss"
import { useSelector } from 'react-redux';
import { fetchPosts } from "store/posts/actions";
import { useDispatch } from 'react-redux';
import breadcrumbBanner from "assets/images/breadcrumb-bg.jpg"
import postImageDefault from "assets/images/img-default-post.jpg"
import { Link } from "react-router-dom";
import moment from "moment";

const ListPost = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  const postData = postsState.list.result.data

  return (
    <>
      <Header />
      <section className="breadcrumb-blog">

        <div className="banner-img">
          <img src={breadcrumbBanner} alt="breadcumb" />
        </div>
        <div className="banner-text">
          <h2>Tin tức</h2>
        </div>
      </section>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            {postsState.loading && <div>Loadding...</div>}
            {!postsState.loading && postsState.error ? <div>Error: {postsState.error}</div> : null}
            {!postsState.loading && postsState.list.result.data ? (
              postData.map(post => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={post.post_id}>
                  <div className="blog__item">
                    <div className="blog__item__pic ">
                      <img src={post.image ? post.image : postImageDefault} alt="thumbnail-post" />
                    </div>
                    <div className="blog__item__text">
                      <span>{moment(post.created_at).format("DD/MM/YYYY | HH:mm")}</span>
                      <h5>{post.name}</h5>
                      <Link to={`/post-detail/${post.post_id}`}>Đọc thêm</Link>
                    </div>
                  </div>
                </div>
              ))
            ) : `Đang tải ....`}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ListPost;
