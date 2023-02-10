import React from "react";
import CommonModal from "./CommonModal";
import ProfileImg from "../../Images/profile.png";

const ProfileModal = () => {
  return (
    <div className="Common-Modal">
      <CommonModal headerName={{ value: "PROFILE" }} />
      <div style={{ display: "flex", marginTop: "5%" }}>
        <img src={ProfileImg} alt="student" style={{ width: "40%" }} />
        <div style={{ marginLeft: "10%", width: "50%" }}>
          <div>
            NAME :<br /> ABHINAV GAUR
          </div>
          <br />
          <br />
          <div>
            CLASS :<br /> XII
          </div>
          <br />
          <br />
          <div>
            EMAIL :<br /> dawnstar15072000@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
