import { Carousel, Row, Col } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'store/posts/actions';
import postImageDefault from 'assets/images/img-default-post.jpg';
import moment from 'moment';
import "./post-list.scss"

const HomePostList = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  const postData = postsState.list.result.data
  // const postLastest = postData.slice(0, 3)
  return (
    <div>
      <div className="post-list">
        <div className="container">
          <h2 className="header-section">Tin tức</h2>
          <Row gutter={16}>
            {postsState.loading && <div>Loadding...</div>}
            {!postsState.loading && postsState.error ? <div>Error: {postsState.error}</div> : null}
            {!postsState.loading && postsState.list.result.data ? (
              postData.slice(0, 3).map((post) => (
                <Col
                  xs={24} sm={24} md={12} lg={8}
                  key={post.post_id}
                > 
                  <div className="blog__item">
                    <Link
                      to={`/post-detail/${post.post_id}`}
                      className="post-small"
                    >
                      <div className="blog__item__pic">
                        <img
                          className="thumbnail-post"
                          src={post.image ? post.image : postImageDefault}
                          alt="thumbnail"
                        />
                      </div>
                      <div className="blog__item__text">
                        <span><img src="img/icon/calendar.png" alt="" />{moment(post.created_at).format("DD/MM/YYYY | HH:mm")}</span>
                        <h5>{post.name}</h5>
                        <Link to={`/post-detail/${post.post_id}`}>Đọc thêm</Link>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))
            ) : "Đang tải ...."}
          </Row>
        </div>
      </div>
    </div >
  );
};

export default HomePostList;
