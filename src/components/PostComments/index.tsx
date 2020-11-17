import React from "react";

import "./styles.css";

import Person from "../../assets/person3.jpg";

const PostComments = () => {
  return (
    <div className="post-comments">
      <div className="comment">
        <div className="comment-profile-image">
          <div className="comment-image-board">
            <img src={Person} alt="Person" />
          </div>
        </div>
        <div className="comment-content">
          <div className="comment-profile-name">Fugiro Nakwonby</div>
          <div className="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eleifend id massa quis condimentum
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
