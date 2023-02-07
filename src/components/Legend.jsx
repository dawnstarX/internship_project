import React from "react";
import "../styles/Legend.css";

const Legend = () => {
  return (
    <div className="legend">
      <div className="heading">Legend (click to view)</div>
      <div>
        <table>
          <tr>
            <td>
              <button>Answered</button>
            </td>
            <td>
              <button>Not Answered</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Review+Answer</button>
            </td>
            <td>
              <button>Review-Answer</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Dump</button>
            </td>
            <td>
              <button>No Visit</button>
            </td>
          </tr>
        </table>
      </div>
      <div className="totalquestions">All Question</div>

      <table className="lastTable">
        <tr>
          <td>
            <button>Profile</button>
          </td>
          <td>
            <button>Instr</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>Questions</button>
          </td>
          <td>
            <button>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Legend;
