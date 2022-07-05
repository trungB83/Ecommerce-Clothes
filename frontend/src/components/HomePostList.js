import React, {  } from "react";
import { Link } from "react-router-dom";

const HomePostList = (props) => {
console.log(props);
  return (
    <div>
      <div className="post-list">
        <div className="container-fuid">
          <div className="row">
          {props.posts.map((post, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6" key={post.post_id} >
              <div className="post-small">
                <div className="box-image">
                  <Link to={`/post-detail/${post.post_id}`}>
                    <img className="thumbnail-post" src={post.post_thumbnail} alt="thumbnail"/>
                  </Link>
                </div>
                <div className="box-text">
                  <h5 className="title-post">
                    <Link to="/post-detail/" >
                      Tiệc hè sang trọng – Dành cho quý cô thành đạt”
                    </Link>
                  </h5>
                  <p className="date-post">12/09/2020</p>
                </div>
              </div>
            </div>
          ))} 
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePostList;
