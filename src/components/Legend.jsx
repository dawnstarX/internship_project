import React from "react";
import "../styles/Legend.css";

const Legend = () => {
  return (
    <div className="legend">
      <div className="heading">Legend (click to view)</div>
      <div>
        <div>
          <button>Answered</button>

          <button>Not Answered</button>

          <button>Review+Answer</button>

          <button>Review-Answer</button>

          <button>Dump</button>
        </div>

        <button>No Visit</button>
      </div>
      <div className="totalquestions">All Question</div>
      <div>
        <button>Profile</button>

        <button>Instr</button>

        <button>Questions</button>

        <button>Submit</button>
      </div>
    </div>
  );
};

export default Legend;
