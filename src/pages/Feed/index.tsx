import React from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import ProfileSidebar from "../../components/ProfileSidebar";

import "./styles.css";

const Feed = () => {
  return (
    <>
      <Header />

      <section className="main">
        <div className="feed">
          <div className="container">
            <Post />
          </div>
        </div>

        <ProfileSidebar />
      </section>
    </>
  );
};

export default Feed;
