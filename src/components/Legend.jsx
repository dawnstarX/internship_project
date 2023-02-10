import { useContext } from "react";
import { ques } from "../Context";
import Modalbutton from "./Modalbutton";
import "../styles/Legend.css";

const Legend = () => {
  const { status } = useContext(ques);
  const [STATUS, setStatus] = status;

  const buttonArray1 = [
    "Answered",
    "Not Answered",
    "Review+Answer",
    "Review-Answer",
    "Dump",
    "No Visit",
  ];
  const buttonArray2 = ["Profile", "Instr", "Questions", "Submit"];

  const count = function (index) {
    const num = index === 5 ? 0 : index + 1;
    return STATUS.reduce((total, x) => total + (x === num), 0);
  };

  const colorArray = ["green", "red", "#A020F0", "yellow", "grey", "white"];
  const buttonstyle = {
    border: "none",
    margin: "3px",
    width: "48%",
  };

  return (
    <div className="legend">
      <div className="heading">Legend (click to view)</div>
      <div className="legendConatiner">
        {buttonArray1.map((e, i) => {
          return (
            <button
              key={e}
              style={{ ...buttonstyle, backgroundColor: colorArray[i] }}
            >{`${count(i)}  ${e}`}</button>
          );
        })}
      </div>
      <div className="totalquestions">10 All Question</div>
      <div>
        {buttonArray2.map((e, i) => {
          return <Modalbutton buttonProp={{ value: e, num: i }} key={e} />;
        })}
      </div>
    </div>
  );
};

export default Legend;
