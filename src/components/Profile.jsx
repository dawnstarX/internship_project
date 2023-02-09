import React from "react";
import "../styles/Profile.css";
import Timer from "./Timer";

const Profile = () => {
  return (
    <div className="profile">
      <div className="image">
        <img src={require("../Images/profile.png")} alt="a student" />
      </div>
      <div className="timer">
        <p>Time Left:</p>
        <br />
        <Timer />

        <br />
        <p>Abhinav Gaur</p>
      </div>
    </div>
  );
};

export default Profile;
