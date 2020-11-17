import React from "react";

import Person from "../../assets/person2.jpg";

import "./styles.css";

const PostHeader = () => {
  return (
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={Person} alt="Person" />
        </div>
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">João da Silva</div>
        <div className="post-date">Feb 17 at 10:45PM</div>
      </div>
    </div>
  );
};

export default PostHeader;
