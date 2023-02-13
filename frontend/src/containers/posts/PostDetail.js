import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import 'assets/styles/detail-post.scss'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchDetailPost, fetchPosts } from "store/posts/actions";
import { useSelector, useDispatch } from 'react-redux';
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import postImageDefault from "assets/images/img-default-post.jpg"
import moment from "moment";
import { Form, Input } from 'antd';

const { TextArea } = Input;

const PostDetail = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const postState = useSelector((state) => state.posts)
  useEffect(() => {
    dispatch(fetchPosts())
    if (params.id) {
      dispatch(fetchDetailPost(params.id));
    }
  }, [dispatch, params.id]);
  const postById = postState.item.result.data
  const postData = postState.list.result.data
  const [commentForm] = Form.useForm();

  const onSubmitComment = (values) => {
    if (
      values.fullname ||
      values.content
    ) {
      const body = {
        fullname: values.fullname.trim(),
        content: values.content ? values.content.trim() : "",
      };
    }
  };
  return (
    <>
      <Header />
      {postState.loading && <div>Loadding...</div>}
      {!postState.loading && postState.error ? <div>Error: {postState.error}</div> : null}
      {!postState.loading && postState.item.result.data && postState.list.result.data ? (
        <>
          <section className="blog-hero spad">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-9 text-center">
                  <div className="blog__hero__text">
                    <h2>{postById.name}</h2>
                    <ul>
                      <li>{postById.created_ad}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="blog-details spad">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-12">
                  <div className="blog__details__pic">
                    <img src={postById.image ? postById.image : postImageDefault} alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="blog__details__content">
                    <div className="blog__details__share">
                      <span>share</span>
                      <ul>
                        <li><Link to="#"><FacebookOutlined /></Link></li>
                        <li><Link to="#" className="twitter"><TwitterOutlined /></Link></li>
                        <li><Link to="#" className="youtube"><YoutubeOutlined /></Link></li>
                        <li><Link to="#" className="linkedin"><LinkedinOutlined /></Link></li>
                      </ul>
                    </div>
                    <div className="blog__details__text">
                      <div
                        dangerouslySetInnerHTML={{ __html: postById.content }}
                      />
                    </div>
                    <div className="blog__details__option">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="blog__details__tags">
                            <Link to="#">#Fashion</Link>
                            <Link to="#">#Trending</Link>
                            <Link to="#">#2020</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog__details__btns">
                      <div className="row">
                        {postData.filter((item) => item.post_cate_id === postById.post_cate_id).slice(0, 2).map((post) => (
                          <div className="col-lg-6 col-md-6 col-sm-6">
                            <Link to={`/post-detail/${post.post_id}`} className="blog__details__btns__item">
                              <p><span className="arrow_left"></span>{moment(post.created_at).format("DD/MM/YYYY | HH:mm")}</p>
                              <h5>{post.name}</h5>
                            </Link>
                          </div>
                        ))}


                      </div>
                    </div>
                    <div className="blog__details__comment">
                      <h4>Để lại bình luận</h4>
                      <Form name="basic"
                        autoComplete="off"
                        form={commentForm}
                        onFinish={onSubmitComment}
                      >
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <Form.Item
                              name="fullname"
                              rules={[
                                {
                                  required: true,
                                  message: "Vui lòng nhập tên!",
                                },
                              ]}>
                              <Input placeholder="Họ tên"
                                size="large" />
                            </Form.Item>
                          </div>
                        </div>
                        <div className="col-lg-12 text-center">
                          <Form.Item name="content">
                            <TextArea placeholder="Comment"></TextArea>
                          </Form.Item>
                          <button type="submit" className="site-btn">Đăng bình luận</button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : "Đang tải ...."}

      <Footer />
    </>
  );
};

export default PostDetail;
