import { useContext } from "react";
import { ques } from "../Context";

const Singlebutton = ({ buttonNumber }) => {
  const { cur, status } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;

  const questionHandler = function (e) {
    setCur(+e.target.value);
  };
  const colorArray = ["white", "green", "red", "purple", "yellow", "grey"];
  const color = colorArray[STATUS[buttonNumber.value]];
  const buttonstyle = {
    backgroundColor: color,
    padding: "2px 20PX",
    margin: "3px",
  };

  return (
    <button
      value={buttonNumber.value}
      onClick={(e) => {
        questionHandler(e);
      }}
      style={buttonstyle}
    >
      {buttonNumber.value}
    </button>
  );
};

export default Singlebutton;
