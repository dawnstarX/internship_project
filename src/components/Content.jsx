import React, { useContext } from "react";
import { ques } from "../Context";
import "../styles/Content.css";

const Content = () => {
  const { cur, status } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;

  return (
    <div>
      question no {CUR} has status {STATUS[CUR]}
    </div>
  );
};

export default Content;
