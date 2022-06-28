import React from "react";
import imgPost from "../assets/images/20190225_1551097166_mega-6208-3-247x296.jpg";

const PostList = () => {
  return (
    <div>
      <div className="list-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-list">
                <div className="box-list">
                  <div className="box-img">
                    <img className="img" src={imgPost} alt="" />
                  </div>
                  <div className="box-text">
                    <div className="title">
                      <h3 className="title">Titleposst</h3>
                      <p className="description">Description</p>
                    </div>
                  </div>
                </div>
                <div className="box-list">
                  <div className="box-img">
                    <img className="img" src={imgPost} alt="" />
                  </div>
                  <div className="box-text">
                    <div className="title">
                      <h3 className="title">Titleposst</h3>
                      <p className="description">Description</p>
                    </div>
                  </div>
                </div>
                <div className="box-list">
                  <div className="box-img">
                    <img className="img" src={imgPost} alt="" />
                  </div>
                  <div className="box-text">
                    <div className="title">
                      <h3 className="title">Titleposst</h3>
                      <p className="description">Description</p>
                    </div>
                  </div>
                </div>
                <div className="box-list">
                  <div className="box-img">
                    <img
                      className="img"
                      src="./img/20190225_1551097166_mega-6208-3-247x296.jpg"
                      alt=""
                    />
                  </div>
                  <div className="box-text">
                    <div className="title">
                      <h3 className="title">Titleposst</h3>
                      <p className="description">Description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
