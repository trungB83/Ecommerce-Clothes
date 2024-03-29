import React from "react";
import '../assets/styles/list-post.css';
import { Link } from 'react-router-dom';


const PostList = (props) => {

  return (
    <div>
      <div className="list-post">
        <div className="container">
          <div className="row">
          {props.posts.map((post)=> (
            <div className="col-lg-12" key={post.post_id}>
                <div className="main-list">
                  <Link to={`/post-detail/${post.post_id}`} className="box-list">
                    <div className="box-img">
                      <img className="img" src={post.post_thumbnail} alt="" />
                    </div>
                    <div className="box-text">
                      <div className="title">
                        <h3 className="title">{post.post_name}</h3>
                        <p className="description">{post.post_description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
          </div>
          )
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
