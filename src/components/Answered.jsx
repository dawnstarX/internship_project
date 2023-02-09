import { useContext } from "react";
import { ques } from "../Context";

const Answered = () => {
  const { cur, status, option } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;
  const [OPTION, setQuestion] = option;

  return <div></div>;
};

export default Answered;
