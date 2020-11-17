import React from "react";

import PostAction from "../PostAction/index";
import PostComments from "../PostComments";
import PostContent from "../PostContent";
import PostHeader from "../PostHeader";
import PostSendCommentForm from "../PostSendCommentForm";

import "./styles.css";

const Post = () => {
  return (
    <div className="post">
      <PostHeader />
      <PostContent />
      <PostAction />
      <PostComments />
      <PostSendCommentForm />
    </div>
  );
};

export default Post;
