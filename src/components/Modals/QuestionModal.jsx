import React from "react";
import CommonModal from "./CommonModal";

const QuestionModal = () => {
  return (
    <div className="Common-Modal">
      <CommonModal headerName={{ value: "QUESTIONS" }} />
      <div style={{ marginTop: "5%" }}>
        <div>TOTAL QUESTION : 30</div>
        <br />
        <div>PHYSICS : 10</div>
        <br />
        <div>CHEMISTRY : 10</div>
        <br />
        <div>MATHS : 10</div>
      </div>
    </div>
  );
};

export default QuestionModal;
