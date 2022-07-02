import React, {  } from "react";
import { Link } from "react-router-dom";
import thumbnailPost1 from "../assets/images/20200805_1596564496_dam-suong-co-tron-2099-valentino-1-247x296.png";


const HomePostList = (props) => {
console.log(props);
  return (
    <div>
      <div className="post-list">
        <div className="container-fuid">
          <div className="row">
          {props.posts.map((post, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6" >
              <div className="post-small">
                <div className="box-image">
                  <Link to="/post-detail/1">
                    <img className="thumbnail-post" src={thumbnailPost1} />
                  </Link>
                </div>
                <div className="box-text">
                  <h5 className="title-post">
                    <a href="#">
                      Tiệc hè sang trọng – Dành cho quý cô thành đạt”
                    </a>
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
