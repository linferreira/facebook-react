import React from "react";

import Typing from "../Typing";

import "./styles.css";

const ProfileInfo = () => {
  return (
    <>
      <div className="profile-image">
        <Typing />
      </div>

      <div className="profile-name">
        <span>Amarilda Curvada</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
