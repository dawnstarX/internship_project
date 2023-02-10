import React, { useContext } from "react";
import { ques } from "../Context";
import Form from "./Form";
import Dropdown from "./Dropdown.jsx";
import "../styles/Content.css";

const Content = () => {
  const { cur } = useContext(ques);
  const [CUR, setCur] = cur;

  return (
    <div className="content-box">
      <div className="description">
        <p>Question :{CUR}</p>
        <Dropdown style={{ marginleft: "auto", maarginRight: "2%" }} />
      </div>
      <Form />
    </div>
  );
};

export default Content;
