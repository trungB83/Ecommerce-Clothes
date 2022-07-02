import React from "react";
import imgPost from "../assets/images/20190225_1551097166_mega-6208-3-247x296.jpg";
import '../assets/styles/detail-post.css';


const PostList = (props) => {
  console.log(props);

  return (
    <div>
      <div className="list-post">
        <div className="container">
          <div className="row">
          {props.posts.map((post, index)=> (
            <div className="col-lg-12" key={post.post_id}>
                <div className="main-list">
                  <div className="box-list">
                    <div className="box-img">
                      <img className="img" src={imgPost} alt="" />
                    </div>
                    <div className="box-text">
                      <div className="title">
                        <h3 className="title">{post.post_name}</h3>
                        <p className="description">{post.post_description}</p>
                      </div>
                    </div>
                  </div>
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
