import React, { useContext } from "react";
import { ques } from "../Context";
import Form from "./Form";
import "../styles/Content.css";

const Content = () => {
  const { cur } = useContext(ques);
  const [CUR, setCur] = cur;

  return (
    <div className="content-box">
      <div className="description">Question{CUR}</div>
      <Form />
    </div>
  );
};

export default Content;
